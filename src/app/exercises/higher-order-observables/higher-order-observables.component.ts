import {HttpClient} from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation
} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {interval, Observable, of} from 'rxjs/index';
import {
  map,
  merge as mergeWith,
  mergeAll,
  mergeMap
} from 'rxjs/internal/operators';
import {
  debounceTime,
  delay,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';

interface Flight {
  id: string;
  from: string;
  to: string;
  date: string;
}

@Component({
  selector: 'rxws-higher-order-operators',
  template: `
    <h1>higher-order-operators</h1>
    <form [formGroup]="form">
      <input formControlName="search"/>
    </form>
    <ul>
      <li *ngFor="let f of flights$ | async">
        id:{{f.id}},{{f.from}}-{{f.to}}
      </li>
    </ul>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HigherOrderOperatorsComponent {

  form: FormGroup;
  flights$: Observable<any>;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) {
    // Use the operatorOrder() function for the first exercise

    this.form = this.fb.group({search: []});
    this.flights$ = this.form
      .get('search')
      .valueChanges
      .pipe(
        // comment out operators on demand
        debounceTime(300),
        distinctUntilChanged(),

        // try the difference between the following operators
        switchMap((v: string) => this.search(v)),
        // exhaustMap((v: string) => this.search(v)),
        // concatMap((v: string) => this.search(v)),
        // mergeMap((v: string) => this.search(v))
      );

    this.flights$
      .subscribe(
        (value) => console.log('search result updated: ', value)
      );

  }

  search(searchString: string): Observable<Flight[]> {
    const msDelay = 0; // (Math.random(2000) * 1000) + 500;
    return this.http.get<Flight[]>('http://angular.at/api/flight', {params: {from: searchString}}).pipe(delay(msDelay));
  }

  operatorOrder() {
    const getO1$ = (i?: any, t?: number) => interval(t ? t : 1000).pipe(map(v => i ? i : v));
    const o2$ = interval(3000).pipe(map(v => getO1$('tick')));

    const mergeRes$ = getO1$(42).pipe(
      // merge operatore here
    );
    mergeRes$.subscribe(console.log);

    const mergeMapRes$ = o2$.pipe(
      // mergeMap operator here
    );
    mergeMapRes$.subscribe(console.log);

    const mergeAllRes$ = of(getO1$('a', 100), getO1$('b'), getO1$('c', 300)).pipe(
      // mergeAll operator here
    );
    mergeAllRes$.subscribe(console.log);
  }

}
