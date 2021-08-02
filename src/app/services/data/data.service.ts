import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  createDb(){
    return {
      users: [
        {
          id: 1,
          name: 'Dwayne Johnson'
        },
        {
          id: 2,
          name: 'John Cena'
        },
        {
          id: 3,
          name: 'Randy Orton'
        },
         {
          id: 4,
          name: 'CM Punk'
        },
        {
          id: 5,
          name: 'Shawn Micheals'
        },
        {
          id: 6,
          name: 'Goldberg'
        }
      ]
    }
  }
}

