import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { alertController } from '@ionic/core';
import { ServicesService } from 'src/app/api/services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  list: any;
  data: any;
  demande: any;
  btn: number ;
  ifDemandeExist: any;
  donne : any;
  matiereDeLaPersonneChoisi : any;
  idDeLaPersonneChoisi : any;
  searchValue: any;
  mode : number  = 0;
  ID : number;

  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.data= JSON.parse(localStorage["logInfo"]);
    this.ID = this.data[0].id
    console.log(this.data[0]);
  }

  search(data: any){
    console.log('value'+ JSON.stringify(data.value) );
    if (data.value.niveau === '' || data.value.specialite === '' || data.value.addresse === ''  ) {
      return this.service.presentAlert("", "Veuillez renseignez toute les donnés");
    } else {
      return this.service.searchTuteur(data.value.addresse, data.value.specialite, data.value.niveau).subscribe(resulat =>{
        this.list= resulat;
        this.searchValue = data;
        this.btn = 1;
        this.demande=JSON.stringify(data.value);
        console.log(this.searchValue.value);
      })
    }
    
  }

  Send(id: number, matiere: string){
    this.matiereDeLaPersonneChoisi = matiere;
    this.idDeLaPersonneChoisi = id;
    this.DemandeExist(id, matiere);
    if(this.ifDemandeExist || this.ifDemandeExist !== ''){
      return this.service.EnvoyerDemande(this.data[0].id,id,matiere,this.demande).subscribe(donne =>{
        this.donne = donne;
        this.ifDemandeExist = '';
        this.search(this.searchValue);
        console.log(donne);  
      });
    }else{
      return this.handleButtonClick();
    }
    
  }

  DemandeExist(id: number, matiere: string){
    return this.service.DemandeExist(this.data[0].id,id,matiere).subscribe(demande =>{
      this.ifDemandeExist= demande;
      console.log(this.ifDemandeExist);
      
    })
  }

  async handleButtonClick() {
    const alert = await alertController.create({
      message: 'Vous déja contacter ce tutueur par le passé voulez vous le recontacter?',
      buttons: [
        {
          text: 'OUI',
          cssClass: 'secondary',
          handler: () => {
            this.service.EnvoyerDemande(this.data[0].id,this.idDeLaPersonneChoisi,this.matiereDeLaPersonneChoisi,this.demande).subscribe(donne =>{
              this.donne = donne,
              this.ifDemandeExist = '';
              this.search(this.searchValue); 
              console.log(donne);  
            })  
          }
        },

        {
          text: 'Non',
          role: 'cancel',
        }
      ],
    });

    await alert.present();
  }

}
