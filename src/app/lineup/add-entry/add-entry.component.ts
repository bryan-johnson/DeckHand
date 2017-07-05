import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Lineup, MeetEvent, Entry, Swimmer, Performance } from '../../shared/lineup/lineup.model';
import { LineupService } from '../../shared/lineup/lineup.service';

@Component({
  selector: 'add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  @Input() targetEvent:string;
  @Output() newEntries = new EventEmitter();
  @Input() team:Swimmer[];
  localTeam:Swimmer[];
  selected:any[];
  entries:Entry[];
  relay:boolean;

  constructor(private ls:LineupService) { }

  ngOnInit() {
    this.entries = [];
    this.localTeam = [...this.team];
    if(this.targetEvent.toLowerCase().includes("relay")) {
      this.relay = true;
    } else this.relay = false;
  }

  getTime(s:Swimmer) {
    if(s.topPerformances) {
      if(s.topPerformances.find(p => p.event == this.targetEvent)){
        return s.topPerformances.find(p => p.event == this.targetEvent).time;
      }
    }
    else return null;
  }

  submit() {
    this.selected.forEach(s => this.entries.push( { 'swimmer':s.name, 'event':this.targetEvent } ) )
    this.newEntries.emit(this.entries);
  }

  cancel() {
    this.newEntries.emit(null);
  }

  sortTimes(event) {

    let sorted = this.localTeam.sort(eventComparator(this.targetEvent, event.order));
    console.log(sorted);
    //if(event.order == -1) sorted = sorted.reverse();
    this.localTeam = [...sorted];
  }
}

function eventComparator(targetEvent, order) {
  return function sortTime(s1:Swimmer, s2:Swimmer) {
    let t1, t2;

    if(s1.topPerformances != undefined) {
      if(s1.topPerformances.find(p => p.event == targetEvent) != undefined) {
        t1 = s1.topPerformances.find(p => p.event == targetEvent).time;
      }
    }
    if(s2.topPerformances != undefined) {
      if(s2.topPerformances.find(p => p.event == targetEvent) != undefined) {
        t2 = s2.topPerformances.find(p => p.event == targetEvent).time;
      }
    }
    let ret;
    
    if(!t1 || !t2) {
      if(!t1 && t2) ret = -1;
      else if(!t2 && t1) ret = 1;
      else if(!t1 && !t2) ret = 0;
    }
    else {
      if(t1 > t2) ret = -1;
      else if(t1 === t2) ret = 0;
      else ret = 1;
    }

    if(order < 0) return -ret;
    else return ret;
  }
}
