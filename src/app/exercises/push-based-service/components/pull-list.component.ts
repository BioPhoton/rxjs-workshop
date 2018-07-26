import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation
} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/internal/operators';
import {Flight} from '../interfaces/flight.interface';
import {PullBasedFlightService} from '../services/pull-based-flight.service';

@Component({
  selector: 'pull-list',
  template: `
    <ng-content></ng-content>
    <ul>
      <form [formGroup]="form">
        <input formControlName="search"/>
      </form>
      <li *ngFor="let f of flights">
        id:{{f.id}}, {{f.from}}-{{f.to}}
      </li>
    </ul>
    <button (click)="updateList()">Update</button>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PullListComponent {

  form: FormGroup;
  flights: Flight[] = [];

  constructor(
    private pullBasedFlightService: PullBasedFlightService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({search: []});
    this.form
      .get('search')
      .valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
      ).subscribe(
      (value) => this.search(value)
    );

  }

  getFlights() {
    return this.pullBasedFlightService.flights;
  }

  updateList() {
    this.flights = this.pullBasedFlightService.flights;
  }

  search(searchString) {
    this.pullBasedFlightService.search(searchString);
  }

}
