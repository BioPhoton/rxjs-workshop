import {
  Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import {Observable, Observer, Subscription} from 'rxjs/index';

@Component({
  selector: 'rxws-page1',
  template: `
    <h1>
      Count: {{count$ |async}}
    </h1>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Page1Component implements OnInit, OnDestroy {

  count$: Observable<number>;

  constructor() {
    this.count$ =  Observable.create((observer: Observer<number>) => {
      // logic here
      return () => {};
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
