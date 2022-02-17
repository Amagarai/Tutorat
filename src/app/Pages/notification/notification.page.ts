import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/api/services.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  data:  any[] = [];
  constructor( private service: ServicesService) { }

  ngOnInit() {
    this.data= JSON.parse(localStorage["logInfo"]);
    console.log(this.data[0].id);
    this.GetData();
  }

  GetData(){
    this.service.getTuteurDemande(this.data[0].id).subscribe(res =>{
      console.log(JSON.stringify(res))
    });
  }

}
