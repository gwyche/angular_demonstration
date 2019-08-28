import { Injectable } from '@angular/core';
import { peoplelist } from './newcomponent2/peoplelist';
import {person} from '../app/person';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeoplelistService {
  
  list: peoplelist;

  constructor() {
    var templist = new peoplelist;

    //Instantiate persons and assign values to their name fields
    var Abe = new person(); 
    Abe.name = "Abe";
    var Bob = new person(); 
    Bob.name = "Bob";
    var Carl = new person();
    Carl.name = "Carl";

    //Add these instances to the temporary array
    templist[0] = Abe;
    templist[1] = Bob;
    templist[2] = Carl;

    //Make peoplelist = templist
    this.list = templist;

  }
    
  getGiantlist(): Observable<peoplelist> {
    return of(this.list);
  }

    
}


