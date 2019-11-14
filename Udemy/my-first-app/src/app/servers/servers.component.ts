import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  /*templateUrl: './servers.component.html',*/
  template: `
  <app-server></app-server>
  <app-server></app-server>`,

  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


/*
In components, '' or single quotations are for single line templates
             , `` or back quotations are for multi line template components inline
             Rule of thumb is if you have more than 3 templates using in this component

*/