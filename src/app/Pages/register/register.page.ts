import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/ban-types
  affichePassword: Boolean = true;
  type: any ='tuteur';
  form: FormGroup;
  constructor() { }

  ngOnInit() {
  }
  public toggleTextPassword(): void{
    // eslint-disable-next-line eqeqeq
    this.affichePassword = (this.affichePassword==true)?false:true;
}
public getType() {
    return this.affichePassword ? 'password' : 'text';
}

  typeChange(){
    this.type='tuteur';
  }

}
