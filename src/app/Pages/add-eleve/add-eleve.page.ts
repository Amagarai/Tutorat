import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/api/services.service';

@Component({
  selector: 'app-add-eleve',
  templateUrl: './add-eleve.page.html',
  styleUrls: ['./add-eleve.page.scss'],
})
export class AddElevePage implements OnInit {

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
