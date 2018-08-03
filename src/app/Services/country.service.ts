import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable()

export class CountryService {
    constructor(private http: Http) { }
    getCountryDetails(country: String): any {
        let url = 'https://restcountries.eu/rest/v2/name/' + country + '?fullText=true';
        return this.http.get(url);
    }

    getCountriesDetails(): any {
        let url = 'https://restcountries.eu/rest/v2/all';
        return this.http.get(url);
    }

    saveProfile() {
        let url = 'https://reqres.in/api/users';
        return this.http.post(url, {
            name: 'Assimilate',
            job: 'Training',
            city: 'Pune'
        });
         //.map(res=>res.json())

    }
}

