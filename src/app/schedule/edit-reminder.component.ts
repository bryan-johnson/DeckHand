import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Reminder, ReminderService } from '../shared/reminders/index';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'edit-reminder',
    templateUrl: 'edit-reminder.component.html',
    styleUrls: ['edit-reminder.component.css']
})
export class EditReminderComponent implements OnInit {
    @Input() rId:number;
    @Output() done = new EventEmitter();
    private rem:Reminder;
    editForm:FormGroup;
    message:FormControl;
    datetime:FormControl;

    constructor(private rs: ReminderService, private fb: FormBuilder) {

    }

    ngOnInit() {
        this.rem = this.rs.getReminder(this.rId);

        this.editForm = this.fb.group({
            'message': new FormControl('', Validators.required),
            'datetime': new FormControl('', Validators.required)
        })
    }

    submit(formValues) {
        this.rem.active = true;
        this.done.emit(this.rs.updateReminder(this.rId, this.rem));
    }
    cancel() {
        this.done.emit(false);
    }
}