import { Component, OnInit } from '@angular/core';
import { RestContriesService } from '../../services/rest-contries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  cities: any;

  constructor( private rest: RestContriesService) {
    this.rest.getCities()
      .subscribe( cities => {
        this.cities = cities;
        console.log(cities);
      });
  }

  ngOnInit() {
  }

}
