import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Reminder, ReminderService } from '../../shared/reminders/index';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'edit-reminder',
    templateUrl: 'edit-reminder.component.html',
    styleUrls: ['edit-reminder.component.css']
})
export class EditReminderComponent implements OnInit {
    @Input() rId:number;
    @Output() newRems = new EventEmitter();
    private rem:Reminder;

    private messagePlaceholder:string;
    private datePlaceholder:Date;
    private activePlaceholder:boolean;

    editForm:FormGroup;
    message:FormControl;
    datetime:FormControl;
    active:FormControl;

    constructor(private rs: ReminderService, private fb: FormBuilder) {

    }

    ngOnInit() {
        this.rem = this.rs.getReminder(this.rId);

        this.messagePlaceholder = this.rem.message;
        this.datePlaceholder = this.rem.datetime;
        this.activePlaceholder = this.rem.active;

        this.editForm = this.fb.group({
            message: new FormControl('', Validators.required),
            datetime: new FormControl('', Validators.required),
            active: new FormControl('')
        })
    }

    submit(formValues) {
        let rem:Reminder = {
            id: this.rId,
            message: formValues.message,
            datetime: new Date(formValues.datetime),
            active: formValues.active
        };
        if(this.editForm.valid) {
            this.newRems.emit(this.rs.updateReminder(this.rId, rem));
        }
        else this.newRems.emit(null);
    }
    cancel() {
        this.newRems.emit(null);
    }
}