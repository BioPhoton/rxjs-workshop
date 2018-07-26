import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation
} from '@angular/core';
import {interval, Observable, Observer, OperatorFunction, pipe} from 'rxjs';
import {mapTo} from 'rxjs/internal/operators';

@Component({
  selector: 'rxws-custom-operators',
  styles: [],
  template: `
    <p>
      Use following operators in your custom pipe:
    </p>
    <ul>
      <li>tap(console.log)</li>
      <li>filter(v => v > 2)</li>
      <li>mapTo(false)</li>
    </ul>
  `,
  encapsulation: ViewEncapsulation.Native,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomOperatorsComponent {

  constructor() {
    let falseIfGreater2V0: OperatorFunction<number, boolean>;
    let falseIfGreater2V1: OperatorFunction<number, boolean>;
    let falseIfGreater2V2: OperatorFunction<number, boolean>;

    let falseIfGreaterMaxV2: (max: number) => OperatorFunction<number, boolean>;

    // OperatorFunction (source: T): R;
    falseIfGreater2V0 = (source: Observable<number>) => source
      .pipe(
        // operators here
        mapTo(false)
      );

    // pipe()
    falseIfGreater2V1 = pipe(
      // operators here
      mapTo(false)
    );

    // new Observable()
    falseIfGreater2V2 = (source: Observable<number>) => new Observable(
      (observer: Observer<number>) => source.subscribe({
        next(v) {
          // custom logic here
          observer.next(v);
        },
        error: observer.error,
        complete: observer.complete
      })
    )
      .pipe(
        // operators here
        mapTo(false)
      );

    // parameterizable operator
    falseIfGreaterMaxV2 = (max: number) => pipe(
      // operators with param here
      mapTo(false)
    );
    /**/
    //

    const o$ = interval(1000)
      .pipe(
        // your custom operator here
      );

    o$.subscribe(console.log);
  }

}
