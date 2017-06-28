import { Component, OnInit, OnChanges } from '@angular/core';
import { Reminder, ReminderService } from "../shared/reminders/index";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  events: any[];
  reminders: Reminder[];
  showEdit: boolean;
  showAdd: boolean;
  selectedReminder:any;

  constructor(private rs:ReminderService) { 
    
  }

  ngOnInit() {
    this.showEdit = false;
    this.showAdd = false;
    this.events = [{}];
    this.reminders = this.rs.getReminders().sort(sortReminders);
  }
  ngOnChanges() {
    this.reminders.sort(sortReminders);
  }

  addReminder() {
    this.showAdd = !this.showAdd;
  }

  editReminder(rem:Reminder) {
    this.selectedReminder = rem;
    this.showEdit = !this.showEdit;
  }

  closeReminder(rem:Reminder) {
    this.rs.removeReminder(rem);
    //this.reminders = this.rs.getReminders();
  }

  closeEdit(data) {
    this.showEdit = false;
    if(data) {
      data.sort(sortReminders);
      this.reminders = data;
    }
  }
  closeAdd(saved:boolean) {
    this.showAdd = false;
    if(saved) this.reminders.sort(sortReminders);
  }

}

function sortReminders(r1:Reminder, r2:Reminder) {
    if(r1.datetime > r2.datetime) return 1;
    else if(r2.datetime === r1.datetime) return 0;
    else return -1;
}
