import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/api/services.service';

@Component({
  selector: 'app-detail-chat',
  templateUrl: './detail-chat.page.html',
  styleUrls: ['./detail-chat.page.scss'],
})
export class DetailChatPage implements OnInit {

  contenu=''
  id: number;
  data: any;
  Envoyeur: any;
  Liste: any;
  ID: any;
  globaleChat: any;


  constructor(public route : ActivatedRoute, public service: ServicesService) { }

  ngOnInit() {
    this.data= JSON.parse(localStorage["logInfo"]);
    this.ID = this.data[0].id;
    console.log('----------------data : '+this.ID);
    this.id= this.route.snapshot.params['id'];
    console.log(this.id);
    
    this.service.DemandeById(this.id).subscribe(donne =>{
      this.Envoyeur= donne; 
      console.log(this.Envoyeur);
       
    })


    this.RecupChatList();
  }

  RecupChatList(){
    return this.service.RecupChat(this.id).subscribe(donne =>{
      this.Liste = donne;
      console.log(donne)
    })
  }

  addChat(chat: any){
    return this.service.AddChat(chat.value, this.data[0].id, this.Envoyeur.envoyeur.id, this.Envoyeur.id).subscribe(donne =>{
      this.RecupChatList();
      this.contenu='';
      console.log(donne)
    })
  }
}
