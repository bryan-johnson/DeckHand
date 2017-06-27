import { Injectable } from '@angular/core';
import { Reminder } from './reminder.model';

@Injectable()
export class ReminderService {
    private remIdx:any;

    getReminders():Reminder[] {
        return REMINDERS;
    }
    getReminder(rId:number):Reminder {
        return REMINDERS.find(reminder => reminder.id === rId);
    }
    setReminder(message:string, datetime):boolean {
        return false;
    }
    updateReminder(rId:number, newRem:Reminder):boolean {
        this.remIdx = REMINDERS.findIndex(reminder => reminder.id === rId);
        if(this.remIdx) {
            REMINDERS.splice(this.remIdx, 1, newRem);
            return true;
        }
        else return false;
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
    }
    ];