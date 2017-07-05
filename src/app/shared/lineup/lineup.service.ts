import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Lineup, MeetEvent, Entry, Swimmer, Performance } from './lineup.model';

@Injectable()
export class LineupService {
    
    constructor(public http:Http) {}

    getFormats() {
        return this.http.get('assets/event-formats.json')
                    .toPromise()
                    .then(res => <Entry[]>res.json().defaultFormat)
                    .then(data => {return data;});
    }
    getTeam() {
        return this.http.get('assets/team.json')
                    .toPromise()
                    .then(res => <Swimmer[]>res.json().team)
                    .then(data => {return data;});
    }


}