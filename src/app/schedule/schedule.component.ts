import { Component, OnInit } from '@angular/core';
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
  selectedReminder:any;

  constructor(private rs:ReminderService) { 
    
  }

  ngOnInit() {
    this.showEdit = false;
    this.events = [{}];
    this.reminders = this.rs.getReminders();
  }

  editReminder(rem:Reminder) {
    this.selectedReminder = rem;
    this.showEdit = !this.showEdit;
  }
  closeEdit(saved:boolean) {
    this.showEdit = false;
    if(saved) {
      this.reminders = this.rs.getReminders();
    }
  }

}
