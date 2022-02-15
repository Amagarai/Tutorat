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

  loginPassword(email: any, password: any){
    return this.http.get(this.host+'login/'+email+'&'+password);
  }

  addEcole(postB: any){
   return this.http.post(this.host+'add/ecole', postB);
  }
}
