import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'
import { InputTextModule, ButtonModule, EditorModule, SharedModule, ScheduleModule, DataListModule, DialogModule, CalendarModule, InputTextareaModule, PanelModule } from 'primeng/primeng';
import { Reminder, ReminderService } from './shared/reminders/index';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { EditReminderComponent } from './schedule/edit-reminder.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ScheduleComponent,
    EditReminderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    EditorModule,
    SharedModule,
    ScheduleModule,
    DataListModule,
    DialogModule,
    CalendarModule,
    InputTextareaModule,
    PanelModule
  ],
  providers: [
    ReminderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
