import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //Angular selects by element
  //selector: '[app-servers]', //Angular selects by attribute
  //selector: '.app-servers', //Angular selects by class

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

/*

By putting square brackets on a element in selector:, to use attribute selector. CSS select elements by attribute.
It changes app-server from an element to a attribute.

Angular selects the element by attribute and not by itself since we change the selector for the element.

Selecting by id is not supported by Angular.
Psuedo selectors ;ike Hover is not supported by Angular

*/