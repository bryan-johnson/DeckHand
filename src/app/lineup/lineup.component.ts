import { Component, OnInit, OnChanges } from '@angular/core';
import { Lineup, MeetEvent, Entry, Swimmer, Performance } from '../shared/lineup/lineup.model';
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
  team:any[];

  constructor(private ls:LineupService) {}

  ngOnInit() {
    this.ls.getFormats().then(data => this.entries = data);

    this.team = [
      {label: "Choose", value: null},
      {label: "Person 1", value: "Person 1", otherfield: "x"},
      {label: "Person 2", value: "Person 2", otherfield: "x"},
      {label: "Person 3", value: "Person 3", otherfield: "x"}
  ];

  }

  tableEdit(event) {
    console.log(event.data);
  }

  editInit(event) {

  }

}