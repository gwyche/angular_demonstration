import { Injectable } from '@angular/core';
import {person} from './person';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  
  human: person

  constructor() { 

    //Instantiate a Person
    var newhuman = new person();

    //Assign values to Person human
    newhuman.setName("Placeholder Name");
    newhuman.setAddress("CT, North America, Earth, Orion Arm, Milky Way");
    newhuman.setBirthyear(1984);
    newhuman.setPhone("123-456-7891 Ext 4")

    this.human = newhuman;
    }
    
    getDefaultPerson(): Observable<person> {
      return of(this.human);
    }


    
}


