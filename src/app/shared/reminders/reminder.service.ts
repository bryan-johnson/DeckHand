import { Injectable } from '@angular/core';
import { Reminder } from './reminder.model';

@Injectable()
export class ReminderService {

    getReminders():Reminder[] {
        return REMINDERS;
    }
    getReminder(rId:number):Reminder {
        return REMINDERS.find(reminder => reminder.id === rId);
    }
    setReminder(rem:Reminder):boolean {
        let id = 0;
        REMINDERS.forEach(reminder => id++);

        rem.id = id;
        REMINDERS.push(rem);

        return true;
    }
    updateReminder(rId:number, newRem:Reminder):Reminder[] {
        let remIdx = REMINDERS.findIndex(reminder => reminder.id === rId);
        if(remIdx >= 0) {
            //let newRef = REMINDERS.splice(remIdx, 1, newRem);
            let left = REMINDERS.slice(0, remIdx);
            let right = REMINDERS.slice(remIdx+1, REMINDERS.length);
            let newRef = left.concat(right);
            newRef.push(newRem);
            return newRef;
        }
        else return null;
    }
    removeReminder(rem:Reminder) {
        REMINDERS.splice(REMINDERS.findIndex(reminder => reminder.id === rem.id), 1);
    }
}

const REMINDERS:Reminder[] = [
    {
        id: 1,
        message: 'sample reminder',
        datetime: new Date('6/30/2017'),
        active: true
    },
    {
        id: 2,
        message: 'test message 2',
        datetime: new Date('7/5/2017 7:00'),
        active: true
    },
    {
        id: 3,
        message: 'test inactive',
        datetime: new Date('7/10/2017 7:00'),
        active: false
    }
    ];