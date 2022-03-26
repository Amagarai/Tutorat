import { ServicesService } from './../../api/services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
  mesDemandes : any;

  slideOpts = {
    slidesPerView: 2.2,
  };
  slideOpts1 = {
    slidesPerView: 2,
  }

  constructor(public service: ServicesService, private route :Router, public alert : AlertController){}

  ngOnInit() : void{
    this.data= JSON.parse(localStorage["logInfo"]);
    console.log(this.data);
    this.badge = this.data[0].totaleNotif - this.data[0].oldTotale; 
    this.ListeDemande();
  }

  ReiniNotif(id: number){
    return this.service.ReinitilaiserNbreDemande(id, this.data[0]).subscribe(donne => {
      this.badge= 0;
      console.log("ok")
    })
  }

  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Avertissement',
      mode: 'ios',
      cssClass: 'my-custom-class',
      message: '<b style="color:#FF0000">Vous vous voulez vraiment déconnecter ??</b>',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'danger',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirmer',
          handler: () => {
                localStorage.removeItem('logInfo');
                localStorage.clear();
                this.route.navigate(['login']);
          }
        }
      ],
    });

    await alert.present();
  }
  LogOut(){
    this.presentAlert();
    console.log('ok');  
  }

  ListeDemande(){
    return this.service.mesDemandes(this.data[0].id).subscribe(data =>{
      this.mesDemandes = data;
      console.log(this.mesDemandes);
    })
  }

}
