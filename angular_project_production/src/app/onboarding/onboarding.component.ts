import { Component, OnInit } from '@angular/core';
import {person} from '../person';
import {PersonService} from '../person.service';
import { peoplelist } from '../newcomponent2/peoplelist';
import { PeoplelistService } from '../peoplelist.service';



@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {


  guy: person;
  list: peoplelist; 
  initialListCount: number = 3;
 

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

  addToList(){
    var humanbeing = new person();
    humanbeing.name = this.guy.name;
    this.list[this.initialListCount] = humanbeing;
    this.initialListCount++;
  }

  submitted = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.guy); }


}
