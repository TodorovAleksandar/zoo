import { Component, OnInit } from '@angular/core';
import {Animal} from '../animal';
@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
    animals: Array<Object>;
  constructor() {
    this.animals = [

      new Animal('sisar','konj','2000'),
      new Animal('gmizavac','zmija','2001'),
      new Animal('gmizavac','krokodil','2002'),
      new Animal('mekusac','puz','nepoznat'),
      new Animal('zglavkar','rak','2004')
    ]

   }
   removeAnimal(animal){
    let index = this.animals.indexOf(animal);
    this.animals.splice(index,1);
    
  }

  ngOnInit() {
  }

}
