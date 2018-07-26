import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import {interval} from 'rxjs/index';
import {multicast, publish} from 'rxjs/internal/operators';

@Component({
  selector: 'rxws-single-multi-cast',
  template: `
    <p>
      single-multi-cast works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleMultiCastComponent implements OnInit {

  constructor() {
    this.singleVsMulticast();

  }

  singleVsMulticast() {
    const interval1$ = interval(1000);

    interval1$.pipe(multicast());
    interval1$.subscribe(console.log);
    // interval1$.connect();
    setTimeout(() => {
      // subscribe here
    }, 3000);
  }

  multicastWithShare() {

  }
  multicastWithPublishConnect() {

  }

  multicastWithSubject() {

  }

  multicastWithMulticase() {

  }

  ngOnInit() {
  }

}
