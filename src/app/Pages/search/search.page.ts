import { Component, OnInit } from '@angular/core';
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

  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.data= JSON.parse(localStorage["logInfo"]);
    console.log(this.data[0])
  }

  search(data: any){
    console.log('value'+ JSON.stringify(data.value) );
    
    return this.service.searchTuteur(data.value.addresse, data.value.specialite).subscribe(resulat =>{
      this.list= resulat;
      this.btn = 1;
      this.demande=JSON.stringify(data.value);
      console.log(resulat);
    })
  }

  Send(id: number, matiere: string){
    this.btn = 2; 
    return this.service.EnvoyerDemande(this.data[0].id,id,matiere,this.demande).subscribe(donne =>{
      //this.DemandeExist(id, matiere)
      console.log(donne);  
    })
  }

  DemandeExist(id: number, matiere: string){
    return this.service.DemandeExist(this.data[0].id,id,matiere).subscribe(demande =>{
      this.ifDemandeExist= demande;
    })
  }

}
