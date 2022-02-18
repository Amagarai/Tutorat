import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  data: any;
  constructor() { }

  ngOnInit() {
    this.data= JSON.parse(localStorage["logInfo"]);
  }

}
