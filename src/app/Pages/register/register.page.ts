import { ServicesService } from 'src/app/api/services.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  password_type = 'password';
  // mode: 1;
  ajouter: NgForm;
  body: any;
  profile: any;
  confirmationResult: any;
  indicatif : string = "+223";
  numero : string;
  phoneNumber: any;
  recaptchaVerifier: any;
  private auth = getAuth();
  users : any


  constructor(
    private formBuilder: FormBuilder,
    public service: ServicesService,
    public route: Router
    )
  { }

  ngOnInit() {
  }

  regisForm(ajouter: any){
    
    //JSON forme d'ajou
    this.body = JSON.stringify(ajouter.value);
    const  b= JSON.parse(this.body);
    this.users = b;
    console.log(b.profile);
    this.getOtp(b.numero);
  }
 
  togglePasswordMode() {
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }


  getOtp(number){
    this.auth.languageCode = 'fr';
    this.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
      callback: (response) => {
        console.log('Response : ', response);
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      },
      'expired-callback': (error) => {
        // Response expired. Ask user to solve reCAPTCHA again.
        console.log('Expire error : ', error);
      }
    }, this.auth);
    signInWithPhoneNumber(this.auth, "+223"+number, this.recaptchaVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        this.confirmationResult = confirmationResult;
        console.log('confirmation result : ', this.confirmationResult);
      }).catch((error) => {
        // Error; SMS not sent
        console.log('SMS not sent : ', error);
      });
  }

  public async checkConfirmationCode(data: any) {
    this.confirmationResult.confirm(data.value.code).then(async (result) => {
      // User signed in successfully.     
      this.route.navigateByUrl('/');
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      console.log('Error : ', error);
      if(this.users.profile=='ECOLE'){
        return this.service.addEcole(this.users).subscribe(data =>{
          this.route.navigate(['login'])
          console.log(data)
          this.service.presentToast("votre compte a été créé avec succes, vous pouvez vous connectez")
        })
      }
      if(this.users.profile=='TUTEUR'){
        return this.service.addTuteur(this.users).subscribe(data =>{
          this.route.navigate(['login'])
          console.log(data);
          this.service.presentToast("votre compte a été créé avec succes, vous pouvez vous connectez")
        })
      }
  
      if(this.users.profile=='ELEVE'){
        return this.service.addEleve(this.users).subscribe(data =>{
          this.route.navigate(['login'])
          this.service.presentToast("votre compte a été créé avec succes, vous pouvez vous connectez")
          console.log(data);
          
        })
      }
  
      if(this.users.profile=='PARENT'){
        return this.service.addParent(this.users).subscribe(data =>{
          this.route.navigate(['login'])
          this.service.presentToast("votre compte a été créé avec succes, vous pouvez vous connectez")
          console.log(data);
          
        })  
      }
    });
  }
 

 
}


