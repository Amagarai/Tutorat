import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devenir-tuteur',
  templateUrl: './devenir-tuteur.page.html',
  styleUrls: ['./devenir-tuteur.page.scss'],
})
export class DevenirTuteurPage implements OnInit {
  experience : number = 1;
  mode : number = 1;
  Choix : string;
  constructor() { }

  ngOnInit() {
  }

  incremente(){
    this.experience = this.experience + 1;
  }

  decremente(){
    if(this.experience > 0){
      this.experience = this.experience - 1;
    }
  }

  Suivant(){
    this.mode = this.mode + 1;
  }

  Retour(){
    this.mode = this.mode - 1;
  }

  Oui(){
    this.Choix = "oui";
  }

  Non(){
    this.Choix = "nom";
  }

  updateProfile(data){
    console.log(data.value);

  }

}
