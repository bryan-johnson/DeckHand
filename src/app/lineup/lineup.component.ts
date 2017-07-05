import { Component, OnInit, OnChanges } from '@angular/core';
import { Lineup, MeetEvent, Entry, Swimmer, Performance } from '../shared/lineup/lineup.model';
import { SelectItem } from 'primeng/primeng';
import { LineupService } from '../shared/lineup/lineup.service';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.css']
})
export class LineupComponent implements OnInit {

  eventformat:string[];
  meetName:string;
  entries:Entry[];
  temp:Entry[];
  lineup:Lineup;
  selectedEvent:any;
  team:Swimmer[];
  eventList:SelectItem[];
  maxEntries:number;

  showAddEntry:boolean;

  constructor(private ls:LineupService) {
    this.eventList = [];
    _events.forEach(ev => this.eventList.push({label:ev, value:ev}));
    this.eventformat = defaultFormat;
  }

  ngOnInit() {
    this.showAddEntry = false;
    this.entries = [];
    //this.ls.getFormats().then(data => this.entries = data);
    
    this.ls.getTeam().then(data => this.team = data);
  }

  tableEdit(event) {
    console.log(event.data);
  }

  editInit(event) {
    
  }

  getEntries(event:string):Entry[] {
    return this.entries.filter(e => e.event === event);
  }

  openAddEntry(event) {
    this.selectedEvent = event;
    this.showAddEntry = true;
  }
  handleAddEntry(event) {
    this.showAddEntry = false;
    let newEntries:Entry[] = event;
    this.entries.forEach(e => newEntries.push(e));
    this.entries = newEntries;
    let team = [...this.team];
    this.team = team;
  }

  numEntries(person:string):number {
    let count:number = 0;
    count += this.entries.filter(e => e.swimmer.includes(person)).length;
    return count;
  }

}

const defaultFormat = [
  "50 Freestyle",
  "100 Freestyle",
  "200 Freestyle",
  "500 Freestyle",
  "1000 Freestyle",
  "100 Butterfly",
  "100 Breaststroke",
  "100 Backstroke",
  "200 Individual Medley",
  "200 Freestyle Relay",
  "400 Freestyle Relay",
  "200 Medley Relay"
]
const _events = [
  "50 Freestyle",
  "100 Freestyle",
  "200 Freestyle",
  "500 Freestyle",
  "1000 Freestyle",
  "1650 Freestyle",
  "100 Butterfly",
  "200 Butterfly",
  "100 Breaststroke",
  "200 Breastroke",
  "100 Backstroke",
  "200 Backstroke",
  "100 Individual Medley",
  "200 Individual Medley",
  "400 Individual Medley",
  "200 Freestyle Relay",
  "400 Freestyle Relay",
  "800 Freestyle Relay",
  "200 Medley Relay",
  "400 Medley Relay"
]