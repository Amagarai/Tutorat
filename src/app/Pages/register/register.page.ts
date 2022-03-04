import { ServicesService } from 'src/app/api/services.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, NgForm } from '@angular/forms';

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
  Profile: any;
  confirmer: any;

  constructor(
    private formBuilder: FormBuilder,
    public service: ServicesService
    )
  { }

  ngOnInit() {
  }

  regisForm(ajouter: any){
    
    //JSON forme d'ajou
    this.body = JSON.stringify(ajouter.value);
    const  b= JSON.parse(this.body);
    console.log(b.profile);
    if(b.profile=='ECOLE'){
      return this.service.addEcole(b).subscribe(data =>{
        ajouter.value.reset();
        console.log(data)
      })
    }
    if(b.profile=='TUTEUR'){
      return this.service.addTuteur(b).subscribe(data =>{
        ajouter.value.reset();
        console.log(data);
      })
    }

    if(b.profile=='ELEVE'){
      return this.service.addEleve(b).subscribe(data =>{
        ajouter.value.reset();
        console.log(data);
        
      })
    }

    if(b.profile=='PARENT'){
      return this.service.addParent(b).subscribe(data =>{
        ajouter.value.reset();
        console.log(data);
        
      })  
    }
  }
 
  togglePasswordMode() {
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }
}


