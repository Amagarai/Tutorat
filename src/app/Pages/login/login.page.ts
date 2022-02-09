import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/ban-types
  affichePassword: Boolean = true;

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
}
