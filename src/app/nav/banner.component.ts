import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  count$: any;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
    // TODO: Connect `this.count$` stream to the current store `count` state
  }
}
