import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  // eslint-disable-next-line @typescript-eslint/ban-types
  host= environment.host;

  constructor(public http: HttpClient) { }

  listeEleve(){
    return this.http.get(this.host +'liste/eleve');
  }
  listeEcole(){
    return this.http.get(this.host +'liste/ecole');
  }

  loginPassword(numero: any, password: any){
    return this.http.get(this.host+'login/'+numero+'/'+password);
  }

  addEcole(postB: any){
   return this.http.post(this.host+'add/ecole', postB);
  }

  searchTuteur(ville : any, spe: any){
    return this.http.get(this.host+'search/'+ville+'/'+spe)
  }

  getTuteurDemande(id: any){
    return this.http.get(this.host+'demande/notif/'+id);
  }

  //----------------------Envoyer une demande---------------

  EnvoyerDemande(from: number, to: number, matiere: string, demande :any){
    return this.http.post(this.host+'demande/send/'+from+'/'+to+'/'+matiere, demande);
  }
}
