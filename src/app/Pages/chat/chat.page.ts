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
  Liste: any;
  id : number;
  constructor(public service: ServicesService, public route : ActivatedRoute) { }

  ngOnInit() {
    this.data= JSON.parse(localStorage["logInfo"]);
    console.log(this.data[0].id);
    this.GetInitList();
    
  }
  GetInitList(){
    return this.service.ListInitier(this.data[0].id).subscribe(donne =>{
      this.Liste = donne;
      console.log(this.Liste);
       
    })
  }

}
