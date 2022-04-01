import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/api/services.service';

@Component({
  selector: 'app-list-rejeter',
  templateUrl: './list-rejeter.page.html',
  styleUrls: ['./list-rejeter.page.scss'],
})
export class ListRejeterPage implements OnInit {

  data : any;
  Liste : any;
  constructor(public service : ServicesService) { }

  ngOnInit() {
    this.data= JSON.parse(localStorage["logInfo"]);
    this.ListeRejet();
  }

  ListeRejet(){
    return this.service.ListeDemandeRejeter(this.data[0].id).subscribe(donne =>{
      this.Liste = donne;
      console.log(this.Liste);      
    })
  }
}
