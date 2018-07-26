import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {scan, tap} from 'rxjs/internal/operators';
import {Flight} from '../interfaces/flight.interface';

@Injectable({
  providedIn: 'root'
})
export class PushBasedFlightService {

  private flightsSubject: BehaviorSubject<Flight[]> = new BehaviorSubject([]);
  public flights$: Observable<Flight[]> = this.flightsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.flights$
      .pipe(
        scan((acc, arr) => arr, [])
      );
  }

  search(searchString: string): void {
    this.http.get<Flight[]>('http://angular.at/api/flight', {params: {from: searchString}})
      .subscribe(this.flightsSubject);
  }

}
