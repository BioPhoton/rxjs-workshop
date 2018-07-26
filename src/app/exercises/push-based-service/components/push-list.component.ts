import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BehaviorSubject, Observable, pipe} from 'rxjs/index';
import {
  debounceTime, distinctUntilChanged,
  switchMap
} from 'rxjs/internal/operators';
import {PullBasedFlightService} from '../services/pull-based-flight.service';
import {Flight} from '../interfaces/flight.interface';
import {PushBasedFlightService} from '../services/push-based-flight.service';

@Component({
  selector: 'push-list',
  template: `
    <ng-content></ng-content>
    <form [formGroup]="form">
      <input formControlName="search"/>
    </form>
    <ul>
      <li *ngFor="let f of flights$ | async">
        id:{{f.id}}, {{f.from}}-{{f.to}}
      </li>
    </ul>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushListComponent {

  form: FormGroup;
  flights$: Observable<Flight[]>;

  constructor(
    private pushBasedFlightService: PushBasedFlightService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({search: []});
    this.form
      .get('search')
      .valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(
        (searchString) => {
          this.pushBasedFlightService.search(searchString);
        }
      );

    this.flights$ = this.pushBasedFlightService.flights$;

  }


}
