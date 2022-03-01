import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/api/services.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  data: any;
  json_convert: any;
  constructor(private sercice: ServicesService) { }

  ngOnInit() {
    this.data= JSON.parse(localStorage["logInfo"]);
    console.log(" test "+this.data[0].disponibilite);
    this.json_convert = JSON.stringify(this.data[0]);
    console.log(JSON.parse(this.json_convert));
    
  }

  Etat(event){
    console.log(event.detail.checked);
    this.Disponibilite(); 
  }

  Disponibilite(){
     this.sercice.Disponiblite(this.data[0].id, this.json_convert.value).subscribe();
  }
  

  LogOut(){
    this.sercice.Logout();
  }
}
