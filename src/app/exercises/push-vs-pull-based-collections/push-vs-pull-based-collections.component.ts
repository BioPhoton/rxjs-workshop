import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {from} from 'rxjs/index';

@Component({
  selector: 'rxws-push-vs-pull-based-collections',
  template: `
    <p>
      push-vs-pull-based-collections works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushVsPullBasedCollectionsComponent {

  constructor() {
    const arr = [1, 2, 3, 4, 5];
    const o$ = from(arr);

    const result = arr
      .map(v => {
        console.log('arr map');
        return v * 2;
      })
      .filter(v => {
        console.log('arr filter');
        return v > 4;
      })
      .reduce((acc, item) => {
        console.log('arr reduce');
        return acc + item;
      }, 0);

    console.log('arr result', result);

    // implement similar for the observable
    o$
      .pipe(

      )
      .subscribe({
        next(v) {
          console.log('next: ', v);
        },
        complete(v) {
          console.log('complete');
        }
      });

    // replace observable reduce with scan

  }

}
