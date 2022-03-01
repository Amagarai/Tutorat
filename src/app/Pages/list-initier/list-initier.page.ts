import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/api/services.service';

@Component({
  selector: 'app-list-initier',
  templateUrl: './list-initier.page.html',
  styleUrls: ['./list-initier.page.scss'],
})
export class ListInitierPage implements OnInit {

  data : any;
  liste: any;
  constructor(public service : ServicesService) { }

  ngOnInit() {
    this.data= JSON.parse(localStorage["logInfo"]);
    this.ListeInitier();
  }

  ListeInitier(){
    return this.service.ListInitier(this.data[0].id).subscribe(donne =>{
      this.liste=donne;
      console.log(this.liste);
      
    })
  }

  Accepter(id: number, demande: any){
    return this.service.Accepter(this.data[0].id, demande).subscribe(donnee =>{
      console.log(donnee);
    })
  }

  Decliner(id: number, demande: any){
    return this.service.Decliner(this.data[0].id, demande).subscribe(donne =>{
      console.log(donne);
      
    })
  }

}
