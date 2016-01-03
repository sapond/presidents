import {Component, OnInit} from 'angular2/core';
import {QUOTES} from './mock-quotes';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {QuoteService} from './quote.service';

@Component({
    providers: [QuoteService],
    template:`

      <h2 *ngIf="quote">{{quote.quote}} - {{quote.author}}</h2>
      <a [routerLink]="['Presidents']">View the Presidents</a>
      `,
    directives: [ROUTER_DIRECTIVES]
})

export class WelcomeComponent implements OnInit {
  public quote: Quote;

  constructor(private _quoteService: QuoteService) { }

  getQuote() {
    this._quoteService.getRandomQuote().then(quote => this.quote = quote);
  }
  ngOnInit() {
    this.getQuote();
  }
}



