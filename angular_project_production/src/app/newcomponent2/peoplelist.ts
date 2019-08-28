import {person} from '../person';

export class peoplelist {

    humanList: person[];  

    //No argument constructor
    constructor(){
   
    }


    //Getter
    getAllPeople(): person[]{
        return this.humanList;
    }
    

}