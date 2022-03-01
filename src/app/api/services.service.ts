import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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

  searchTuteur(ville : any, spe: any){
    return this.http.get(this.host+'search/'+ville+'/'+spe)
  }

  getTuteurDemande(id: any){
    return this.http.get(this.host+'demande/notif/'+id);
  }

  //-------------------------------------------Traitements sur les demandes ---------------------------

  EnvoyerDemande(from: number, to: number, matiere: string, demande :any){
    return this.http.post(this.host+'demande/send/'+from+'/'+to+'/'+matiere, demande);
  }

  InitierDemande(id: number, demande: any){
    return this.http.put(this.host+'demande/accepter/'+id, demande);
  }

  ListInitier(id : number){
    return this.http.get(this.host+'demande/initier/'+id);
  }

  Accepter(id: any, demande: any){
    return this.http.put(this.host+'demande/aprouve/'+id, demande);
  }

  Decliner(id: any, demande: any){
    return this.http.put(this.host+'demande/decliner/'+id, demande);
  }


  //----------------------Le nombre totale de notification-------------------------

  ReinitilaiserNbreDemande(id: number, user: any){
    return this.http.put(this.host+'notif/total/'+id, user);
  }


  //---------------------------------Deconnexion et disponibiliter-------------------------------------------------
  Logout(){
    localStorage.removeItem('logInfo');
    this.route.navigate(['login']);
  }
  Disponiblite(id: any, user : any){
    return this.http.put(this.host+'/tuteur/dispo/'+id, user);
  }


  //---------------------------------recuperation des chats-------------------------------------------
  RecupChat(from: number, to: number){
    return this.http.get(this.host+'chat/liste/'+from+'/'+to);
  }

  AddChat(chat: any, from: number, to: number){
    return this.http.post(this.host+'chat/add/'+from+'/'+to, chat);
  }
  
}
