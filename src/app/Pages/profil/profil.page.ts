import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServicesService } from 'src/app/api/services.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  data: any;
  json_convert: any;
  constructor(
    private sercice: ServicesService,
    private route: Router,
    public alertController: AlertController
    ) { }

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

  async presentAlert() {
    const alert = await this.alertController.create({
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
                // this.sercice.Logout();
                this.route.navigate(['login']);

          }
        }
      ],
    });

    await alert.present();
  }



  LogOut(){
    this.presentAlert();
    // localStorage.removeItem('logInfo');
    // this.sercice.Logout();
  }
}
