import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/api/services.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/ban-types
  showPassword= false;
  passwordToggleIcon= 'eye';
  login: any ='';
  password: any= '';
  contenu: '';
  delta: any='';

  constructor(public service: ServicesService, public route: Router, public alertController: AlertController) { }

  ngOnInit() {
  }
toggleTextPassword(): void{
this.showPassword=!this.showPassword;
if(this.passwordToggleIcon=='eye'){
  this.passwordToggleIcon='eye-off';
}else{
  this.passwordToggleIcon='eye';
}
}
  loginPass(data){
    this.service.loginPassword(data.value.numero, data.value.password).subscribe(donne =>{
      this.delta= donne;

      if(this.delta ==''){
        return this.presentAlert();
      }else{
        localStorage.setItem('logInfo',JSON.stringify(this.delta));
        this.route.navigate(['tabs']);
      }
       data.reset();
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Erreur',
      // subHeader: 'Subtitle',
      mode: 'ios',
      cssClass: 'my-custom-class',
      message: '<b style="color:#FF0000">Votre login ou mot de pass incorrect !</b>',
      buttons: ['OK']
    });

    await alert.present();
  }

}
