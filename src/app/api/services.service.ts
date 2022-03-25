import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { id } from '@swimlane/ngx-datatable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  // eslint-disable-next-line @typescript-eslint/ban-types
  host= environment.host;

  constructor(public http: HttpClient, private route: Router) { }

  listeEleve(){
    return this.http.get(this.host +'liste/eleve');
  }
  listeEcole(){
    return this.http.get(this.host +'liste/ecole');
  }

  loginPassword(numero: any, password: any){
    return this.http.get(this.host+'login/'+numero+'/'+password);
  }

  //------------------------------Details users---------------------------------------
  DetailUsers(id: number){
    return this.http.get(this.host+'trouver/'+id);
  }

  //---------------------functions ajouter des differents entity-------------------------------------------

  addEcole(postB: any){
   return this.http.post(this.host+'add/ecole', postB);
  }

  addTuteur(tuteur : any){
    return this.http.post(this.host+'add/tuteur', tuteur);
  }

  addEleve(eleve : any){
    return this.http.post(this.host+'add/eleve', eleve);
  }

  addParent(parent : any){
    return this.http.post(this.host+'add/parent', parent);
  }

//-------------------------------search tuteur--------------------------------------------------------------

  searchTuteur(ville : any, spe: any, niveau: any){
    return this.http.get(this.host+'search/'+ville+'/'+spe+'/'+niveau)
  }

  getTuteurDemande(id: any){
    return this.http.get(this.host+'demande/notif/'+id);
  }

  //-------------------------------------------Traitements sur les demandes ---------------------------

  EnvoyerDemande(from: number, to: number, matiere: string, demande :any){
    return this.http.post(this.host+'demande/send/'+from+'/'+to+'/'+matiere, demande);
  }

  DemandeById(id : number){
    return this.http.get(this.host+'demande/'+id)
  }

  //permet de savoir si la demande existe
  DemandeExist(from: number, to: number, matiere: string){
    return this.http.get(this.host+'demande/ifexist/'+from+'/'+to+'/'+matiere);
  }

  InitierDemande(id: number, demande: any){
    return this.http.put(this.host+'demande/accepter/'+id, demande);
  }

  ListeDemandeRejeter(id: number){
    return this.http.get(this.host+'demande/list/decliner/'+id)
  }

  ListDemandeAccepter(id : number){
    return this.http.get(this.host+'demande/list/accepter/'+id);
  }




//------------------les deux listes initier serve a retourner la liste de chat------------------------------------
  ListInitier(id : number){
    return this.http.get(this.host+'demande/initier/'+id);
  }

  ListInitier2(id : number){
    return this.http.get(this.host+'demande/initier/to/'+id);
  }
//-------------------fin

  Accepter(id: any, demande: any){
    return this.http.put(this.host+'demande/aprouve/'+id, demande);
  }

  Decliner(id: any, demande: any){
    return this.http.put(this.host+'demande/decliner/'+id, demande);
  }


  //---------------------------------Le nombre totale de notification-------------------------

  ReinitilaiserNbreDemande(id: number, user: any){
    return this.http.put(this.host+'notif/total/'+id, user);
  }


  //---------------------------------Deconnexion et disponibiliter-------------------------------------------------
  Logout(){
    localStorage.removeItem('logInfo');
    localStorage.clear();
    window.location.reload();
    this.route.navigate(['login']);

  }
  Disponiblite(id: any, user : any){
    return this.http.put(this.host+'/tuteur/dispo/'+id, user);
  }


  //---------------------------------recuperation des chats-------------------------------------------------------------
  RecupChat(id: number){
    return this.http.get(this.host+'chat/liste/'+id);
  }

  AddChat(chat: any, from: number, to: number, demande : number){
    return this.http.post(this.host+'chat/add/'+from+'/'+to+'/'+demande, chat);
  }


  //-----------------------------------Recupertion des tuteurs en fonction de la personne connecter----------------------------------------------

  RecupTuteurByVille(ville: string){
    return this.http.get(this.host+'tuteur/'+ville);
  }
   // Modifier les utilisateurs
   updateParent(id: number, delta: any){
     return this.http.put(this.host+'modify/tuteur/'+id, delta, {responseType:'text'});
   }
}
