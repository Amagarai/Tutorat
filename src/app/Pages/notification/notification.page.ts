import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/api/services.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  data:  any;
  list: any;
  mode : number = 1;
  segment :  string = "reçu";
  Notification : any;
  constructor( private service: ServicesService) { 
    
  }

  ngOnInit() {
    this.data= JSON.parse(localStorage["logInfo"]);
    console.log("------------------"+this.data[0].profile);
    this.GetData();
    this.MesNotification();
  }

  GetData(){
    this.service.getTuteurDemande(this.data[0].id).subscribe(res =>{
      //console.log(res)
     this.list= res;
     console.log(this.list)
    });
  }

  Initier(id: number, demande: any){
    const b = JSON.stringify(demande);
    const a= JSON.parse(b)
    return this.service.InitierDemande(id, a).subscribe(donne =>{
      console.log(donne) 
      this.GetData();
    })
  }

  Evenement(event: CustomEvent){
    this.segment= event.detail.value
    console.log(this.segment);
  }

  MesNotification(){
    return this.service.RecupNotif(this.data[0].id).subscribe(notifiaction =>{
      this.Notification = notifiaction
    })
  }
}
