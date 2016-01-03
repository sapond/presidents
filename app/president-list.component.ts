import {Component, OnInit}   from 'angular2/core';
@Component({
  template: `
    <h2>PRESIDENTS</h2>
    <ul>
      <!--<li *ngFor="#hero of heroes"-->
        <!--(click)="onSelect(hero)">-->
        <!--<span class="badge">{{hero.id}}</span> {{hero.name}}-->
      <!--</li>-->
    </ul>
  `
})
export class PresidentListComponent implements OnInit {
  constructor() {}
  ngOnInit() {
  }
}
