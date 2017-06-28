import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Reminder, ReminderService } from '../../shared/reminders/index';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'add-reminder',
    templateUrl: 'add-reminder.component.html',
    styleUrls: ['add-reminder.component.css']
})
export class AddReminderComponent implements OnInit {
    @Output() done = new EventEmitter();

    addForm:FormGroup;
    message:FormControl;
    datetime:FormControl;
    active:FormControl;

    constructor(private rs: ReminderService, private fb: FormBuilder) {

    }

    ngOnInit() {
        this.addForm = this.fb.group({
            message: new FormControl('', Validators.required),
            datetime: new FormControl('', Validators.required),
            active: new FormControl('')
        })
    }

    submit(formValues) {
        let rem:Reminder = {
            id: undefined,
            message: formValues.message,
            datetime: new Date(formValues.datetime),
            active: formValues.active
        };
        if(this.addForm.valid) {
            this.done.emit(this.rs.setReminder(rem));
        } else this.done.emit(false);
    }
    cancel() {
        this.done.emit(false);
    }
}