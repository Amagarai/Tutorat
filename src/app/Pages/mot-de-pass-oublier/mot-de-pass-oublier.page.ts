import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mot-de-pass-oublier',
  templateUrl: './mot-de-pass-oublier.page.html',
  styleUrls: ['./mot-de-pass-oublier.page.scss'],
})
export class MotDePassOublierPage implements OnInit {
mode=1;
contenu: '';
  constructor(private route: Router) { }

  ngOnInit() {
  }
  envoyer(){
    this.mode=2;
  }
  valider(){
    this.route.navigate(['login']);
 }
}
