import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {PresidentListComponent} from './president-list.component';
import {WelcomeComponent} from './welcome.component';

@Component({
    selector: 'my-app',
    template:`
      <h1>The American Presidents</h1>
      <router-outlet></router-outlet>
      `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path: '/', name: 'Welcome', component: WelcomeComponent},
  {path: '/presidents', name: 'Presidents', component: PresidentListComponent}
])

export class AppComponent implements OnInit {
  constructor() { }
  ngOnInit() {}
}



