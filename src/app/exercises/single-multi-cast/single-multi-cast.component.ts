import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation
} from '@angular/core';
import {interval} from 'rxjs/index';

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
export class SingleMultiCastComponent {

  constructor() {
    this.singleVsMulticast();

  }

  singleVsMulticast() {
    const interval1$ = interval(1000);

    // subscribe here

    setTimeout(() => {
      // subscribe here
    }, 3000);
  }

  multicastWithShare() {

  }

  multicastWithPublishConnect() {

  }

}
