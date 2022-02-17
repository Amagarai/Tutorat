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
    console.log(b);
    
    this.service.addEcole(b).subscribe(
      res=>{
        console.log(res);
      }
      );
  }

  togglePasswordMode() {
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }
}


