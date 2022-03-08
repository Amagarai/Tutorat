import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/api/services.service';

@Component({
  selector: 'app-list-ecole',
  templateUrl: './list-ecole.page.html',
  styleUrls: ['./list-ecole.page.scss'],
})
export class ListEcolePage implements OnInit {

  Liste : any
  constructor(public service : ServicesService) { }

  ngOnInit() {
    this.ListeEole();
  }

  ListeEole(){
    return this.service.listeEcole().subscribe(donne =>{
      this.Liste = donne;
      console.log(this.Liste); 
    })
  }
}
