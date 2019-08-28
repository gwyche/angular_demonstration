import { Component, OnInit, Input } from '@angular/core';
import {person} from '../person';
import {PersonService} from '../person.service';
import { peoplelist } from './peoplelist';
import { PeoplelistService } from '../peoplelist.service';



@Component({
  selector: 'app-newcomponent2',
  templateUrl: './newcomponent2.component.html',
  styleUrls: ['./newcomponent2.component.css']
})

export class Newcomponent2Component implements OnInit {

  guy: person;
  list: peoplelist; 

  
 

  //Inject a PersonService named humanservice
  constructor(private humanservice: PersonService, private peoplelistservice: PeoplelistService) {}

  getHuman(): void{
    this.humanservice.getDefaultPerson()
    .subscribe(guy => this.guy = guy);
  }

  getList(): void{
    this.peoplelistservice.getGiantlist()
    .subscribe(list => this.list = list);
  }

  ngOnInit(){
     this.getHuman();
     this.getList();
  }



}
