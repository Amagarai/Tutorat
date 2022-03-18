import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/api/services.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  data: any;
  short: any;
  Liste: any;
  Liste2 : any;
  id : number;
  Tuteur : number;
  constructor(public service: ServicesService, public route : ActivatedRoute) { }

  ngOnInit() {
    this.data= JSON.parse(localStorage["logInfo"]);
    console.log(this.data[0].id);
    this.GetInitList();
    this.GetInitList2();
  }
  GetInitList(){
    return this.service.ListInitier(this.data[0].id).subscribe(donne =>{
      this.Liste = donne;
      console.log(this.Liste);

    })
  }

  GetInitList2(){
    return this.service.ListInitier2(this.data[0].id).subscribe(donne =>{
      this.Liste2 = donne;
      this.Tuteur = this.Liste2[0].envoyeur.id;
      console.log(this.Liste2);

    })
  }
}
