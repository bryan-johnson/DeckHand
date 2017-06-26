import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = 'app';
  sidebarInactive: boolean;

  ngOnInit() {
    this.sidebarInactive = false;
  }

  toggleSidebar() {
    if(this.sidebarInactive) this.sidebarInactive = false;
    else this.sidebarInactive = true;
  }

}
