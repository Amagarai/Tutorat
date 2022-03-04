import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/api/services.service';

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

  constructor(public service: ServicesService, public route: Router) { }

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
        return console.log('erreur');
      }else{
        localStorage.setItem('logInfo',JSON.stringify(this.login));
        data.reset();
        this.route.navigate(['tabs']);
      }
      
    });
  }

}
