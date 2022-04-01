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
  login: string;
  password: string;
  dataInfo : any;

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
    if (data.value==='') {
      this.service.presentAlert("", "Veuillez remplir tout les champs.")
    } else {
      this.service.loginPassword(data.value.numero, data.value.password).subscribe(donne =>{

        this.dataInfo = donne;
        if(donne ==''){
          return this.service.presentAlert("Erreur","Votre login ou mot de pass incorrect !");
        }else{
          if (this.dataInfo[0].etat==='DESACTIVER') {
            return this.service.presentAlert("Desolé","Votre etat est desactiver <br> Veuillez nous contacter par email")
          } else {
            localStorage.setItem('logInfo',JSON.stringify(donne));
            this.route.navigate(['tabs']);
            data.reset();
          }
          
        }
        
      });
    }
    
  }

}
