import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'
import { InputTextModule, ButtonModule, EditorModule, SharedModule, ScheduleModule, DataListModule, DialogModule, CalendarModule, InputTextareaModule, PanelModule, CheckboxModule, DataTableModule, DropdownModule } from 'primeng/primeng';
import { Reminder, ReminderService } from './shared/reminders/index';
import { LineupService } from './shared/lineup/lineup.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleComponent, EditReminderComponent, AddReminderComponent } from './schedule/index';
import { LineupComponent } from './lineup/lineup.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ScheduleComponent,
    EditReminderComponent,
    AddReminderComponent,
    LineupComponent
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
    PanelModule,
    CheckboxModule,
    DataTableModule,
    DropdownModule
  ],
  providers: [
    ReminderService,
    LineupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
