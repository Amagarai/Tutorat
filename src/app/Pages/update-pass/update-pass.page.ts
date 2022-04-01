import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/api/services.service';

@Component({
  selector: 'app-update-pass',
  templateUrl: './update-pass.page.html',
  styleUrls: ['./update-pass.page.scss'],
})
export class UpdatePassPage implements OnInit {

  data : any
  constructor(public service : ServicesService, public route : Router) { }

  ngOnInit() {
    this.data= JSON.parse(localStorage["logInfo"]);
  }

  updatePass(data){

    //-------verifier si tout les champs sont vide-------------------
    if(data.value.pass !=='' && data.value.password !=='' && data.value.passconf !==''){

      //-----------verifier que l'ancien mot de passe correspond celui saisi par l'utilisateur----------------
      if(data.value.pass=== this.data[0].password){

        //----------------verifier si le nouveau mot de passe saisie est le meme que dans confirmer mot de passe---------------
        if(data.value.password=== data.value.passconf){
          //verifier si le profile connecter est un tuteur
          if(this.data[0].profile==='TUTEUR'){
            return this.service.updatePass(this.data[0].id, data.value).subscribe(modifier =>{
              console.log("------------modifier avec succes");
              this.service.presentToast('mot de passe modifier avec success')
              this.route.navigate(['profil'])
            })
          }

          //verifer si le profile connecter est un eleve
          if(this.data[0].profile==='ELEVE'){
            return this.service.updatePassEleve(this.data[0].id, data.value).subscribe(modifier =>{
              console.log("------------modifier avec succes");
              this.service.presentToast('mot de passe modifier avec success')
              this.route.navigate(['profil'])
            })
          }

          //verifier si le profile connecter est un parent
          if(this.data[0].profile==='PARENT'){
            return this.service.updatePassParent(this.data[0].id, data.value).subscribe(modifier =>{
              console.log("------------modifier avec succes");
              this.service.presentToast('mot de passe modifier avec success')
              this.route.navigate(['profil'])
            })
          }

          //verifier si le profile connecter est une ecole

          if(this.data[0].profile==='ECOLE'){
            return this.service.updatePassEcole(this.data[0].id, data.value).subscribe(modifier =>{
              console.log("------------modifier avec succes");
              this.service.presentToast('mot de passe modifier avec success')
              this.route.navigate(['profil'])
              
            })
          }

        }else{
          console.log("le nouveau est differents de confirmer");
          this.service.presentAlert("Erreur","Le nouveau mot de passe est different de sa confirmation");
        }
      }else{
        console.log("erreur sur l'ancien mot de passe"); 
        this.service.presentAlert("Erreur","l'ancien mot de passe est invalide");
      }
    }else{
      console.log("remplissez tout les champs");
      this.service.presentAlert("Erreur","Remplissez tout les champs");
    }
    
  }
}
