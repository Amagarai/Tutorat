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
  affichePassword: Boolean = true;
  login: any ={};
  password: any;

  constructor(public service: ServicesService, public route: Router, public alertController: AlertController) { }

  ngOnInit() {
  }
  public toggleTextPassword(): void{
    // eslint-disable-next-line eqeqeq
    this.affichePassword = (this.affichePassword==true)?false:true;
}
public getType() {
    return this.affichePassword ? 'password' : 'text';
}

  loginPass(data){
    this.service.loginPassword(data.value.numero, data.value.password).subscribe(donne =>{
      this.login= donne;
     
      if(this.login ==''){
        return this.presentAlert();
      }else{
        localStorage.setItem('logInfo',JSON.stringify(this.login));
        this.route.navigate(['tabs']);
        data.reset();
      }
      
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Erreur',
      // subHeader: 'Subtitle',
      mode: 'ios',
      cssClass: 'my-custom-class',
      message: '<b>Votre login ou mot de pass incorrect !</b>',
      buttons: ['OK']
    });
  
    await alert.present();
  }

}
