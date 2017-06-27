import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScheduleModule, DialogModule, InputTextModule, CalendarModule, ButtonModule, TabViewModule, CheckboxModule, DataListModule } from 'primeng/primeng';

import { ScheduleComponent } from './schedule.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ScheduleModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    ButtonModule,
    TabViewModule,
    CheckboxModule
  ],
  declarations: [
    ScheduleComponent
  ],
  providers: [

  ]
})
export class AppScheduleModule { }
