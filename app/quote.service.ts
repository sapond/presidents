import {Quote} from './quote';
import {QUOTES} from './mock-quotes';
import {Injectable} from 'angular2/core';

@Injectable()
export class QuoteService {
  getRandomQuote() {
  return new Promise<Quote>(resolve =>
      var quote = QUOTES[Math.floor(Math.random() * (QUOTES.length -1))];
      setTimeout(()=>resolve(quote), 2000) // 2 seconds
    );
  }
}
