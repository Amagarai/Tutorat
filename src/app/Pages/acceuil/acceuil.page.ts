import { ServicesService } from './../../api/services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {

  usersInfo: any;
  data:  any[] = [];

  constructor(public service: ServicesService){}

  ngOnInit() : void{
    this.data= JSON.parse(localStorage["logInfo"]);
    //this.usersInfo=JSON.parse(this.data)
    console.log(this.data);  
  }



}
