import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestContriesService {

  constructor(private http: HttpClient) {
    console.log('Servicio de rest countries funcionando');
   }

  public baseUrl = 'https://restcountries.eu/rest/v2';

  getCities() {
    return this.http.get(this.baseUrl + '/all');
  }
}
