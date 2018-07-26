import {HttpClient} from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation
} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/index';
import {debounceTime, switchMap, delay, distinctUntilChanged} from 'rxjs/operators';

interface Flight {
  id: string;
  from: string;
  to: string;
  date: string;
}

@Component({
  selector: 'rxws-higher-order-obseravbles',
  template: `
    <h1>higher-order-obseravbles</h1>
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
export class HigherOrderObservablesComponent {

  form: FormGroup;
  flights$: Observable<any>;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) {
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
    const msDelay = 2000; // (Math.random(2000) * 1000) + 500;
    return this.http.get<Flight[]>('http://angular.at/api/flight', {params: {from: searchString}}).pipe(delay(msDelay));
  }


}
