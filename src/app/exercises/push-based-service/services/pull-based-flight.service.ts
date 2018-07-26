import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Flight} from '../interfaces/flight.interface';

@Injectable({
  providedIn: 'root'
})
export class PullBasedFlightService {


  public flights: Flight[];

  constructor(private http: HttpClient) {

  }

  updateList() {
    return this.flights;
  }

  getFlights() {
    return this.flights;
  }

  search(searchString: string): void {
    this.http.get<Flight[]>('http://angular.at/api/flight', {params: {from: searchString}})
      .subscribe(flights => this.flights = flights);
  }

}
