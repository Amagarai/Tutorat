import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/api/services.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  data : any;

  constructor(public service : ServicesService) { }

  ngOnInit() {
    this.data= JSON.parse(localStorage["logInfo"]);
    console.log(this.data[0]);
  }

  updateUser(data){
    //verification si le profile connecter est l'ecole
    if(this.data[0].profile==='ECOLE'){
      return this.service.updateEcole(this.data[0].id, data.value).subscribe(data =>{
        console.log("--------modifier avec success  "+ data);
      })
    }

    //verifier si le profile connecter est l'eleve
    
    if(this.data[0].profile==='ELEVE'){
      return this.service.updateEleve(this.data[0].id, data.value).subscribe(data =>{
        console.log("--------modifier avec success  "+ data);
      })
    }

    //verifier si le profile connecter est un parent
    if(this.data[0].profile==='PARENT'){
      return this.service.updateParent(this.data[0].id, data.value).subscribe(data =>{
        console.log("--------modifier avec success  "+ data);
      })
    }

    //verifier si le profile connecter est tuteur
    if(this.data[0].profile==='TUTEUR'){
      return this.service.updateTuteur(this.data[0].id, data.value).subscribe(data =>{
        console.log("--------modifier avec success  "+ data);
      })
    }
  }

}
