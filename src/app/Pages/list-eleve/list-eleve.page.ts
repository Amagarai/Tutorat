import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/api/services.service';

@Component({
  selector: 'app-list-eleve',
  templateUrl: './list-eleve.page.html',
  styleUrls: ['./list-eleve.page.scss'],
})
export class ListElevePage implements OnInit {

  data: any;
  Liste : any;

  constructor(public service: ServicesService) { }

  ngOnInit() {
    this.data= JSON.parse(localStorage["logInfo"]);
    console.log(this.data); 
    this.ListAccepter();
  }

  ListAccepter(){
    return this.service.ListDemandeAccepter(this.data[0].id).subscribe(donne =>{
      this.Liste = donne
      console.log(donne);
      
    })
  }

}
