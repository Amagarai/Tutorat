import { ServicesService } from './../../api/services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {

  usersInfo: any;
  data:  any;
  badge: number;
  event= Event;

  slideOpts = {
    slidesPerView: 2.2,
  };
  slideOpts1 = {
    slidesPerView: 2,
  }

  constructor(public service: ServicesService, private route :Router){}

  ngOnInit() : void{
    this.data= JSON.parse(localStorage["logInfo"]);
    console.log(this.data);
    this.badge = this.data[0].totaleNotif - this.data[0].oldTotale; 
  }

  ReiniNotif(id: number){
    return this.service.ReinitilaiserNbreDemande(id, this.data[0]).subscribe(donne => {
      this.badge= 0;
      console.log("ok")
    })
  }

}
