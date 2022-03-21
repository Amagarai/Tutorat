import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/api/services.service';

@Component({
  selector: 'app-update-pass',
  templateUrl: './update-pass.page.html',
  styleUrls: ['./update-pass.page.scss'],
})
export class UpdatePassPage implements OnInit {

  data : any
  constructor(public service : ServicesService) { }

  ngOnInit() {
    this.data= JSON.parse(localStorage["logInfo"]);
  }

  updatePass(data){

    //-------verifier si tout les champs sont vide-------------------
    if(data.value.pass !=='' && data.value.newpass !=='' && data.value.passconf !==''){

      //-----------verifier que l'ancien mot de passe correspond celui saisi par l'utilisateur----------------
      if(data.value.pass=== this.data[0].password){

        //----------------verifier si le nouveau mot de passe saisie est le meme que dans confirmer mot de passe---------------
        if(data.value.newpass=== data.value.passconf){
          return this.service.updatePass(this.data[0].id, this.data[0]).subscribe(donne =>{
            console.log('ok')
            console.log(donne);
          })
        }else{
          console.log("le nouveau est differents de confirmer");
          
        }
      }else{
        console.log("erreur sur l'ancien mot de passe"); 
      }
    }else{
      console.log("remplissez tout les champs");
      
    }
    
  }
}
