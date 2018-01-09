import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
    animals: Array<Object>;
  constructor() {
    this.animals = [
      { 
        vrsta:'sisar',
        ime:'konj',
        datum_rodjenja:'2000',
      },
      { 
        vrsta:'gmizavac',
        ime:'zmija',
        datum_rodjenja:'2001',
      },
      { 
        vrsta:'gmizavac',
        ime:'krokodil',
        datum_rodjenja:'2002',
      },
      { 
        vrsta:'mekusac',
        ime:'puz',
        datum_rodjenja:'2003',
      },
      { 
        vrsta:'zglavkar',
        ime:'rak',
        datum_rodjenja:'2004',
      },
      
    
    
    
    ];
   }

  ngOnInit() {
  }

}
