import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/api/services.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  data: any;
  Data: any;
  Dispo  : boolean;
  constructor(private sercice: ServicesService) { }

  ngOnInit() {
    this.data= JSON.parse(localStorage["logInfo"]);
    console.log(" test "+this.data[0].disponibilite);
    this.Dispo = this.data[0].disponibilite;
    
  }

  Etat(event){
    console.log(event.detail.checked);
    this.Disponibilite(); 
  }

  Disponibilite(){
     this.sercice.Disponiblite(this.data[0].id, this.data[0]).subscribe(donne => {
       console.log(donne);
       this.Data = donne
       this.Dispo = this.Data.disponibilite
     });
  }
  

  LogOut(){
    this.sercice.Logout();
  }
}
