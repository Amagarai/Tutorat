import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClasseServicesService {
  url = environment.host;

  constructor(public http: HttpClient) { }

  addClasse(id : number, classe: any){
    return this.http.post(this.url+'classe/add/'+id, classe);
  }

  MesClasses(id : number){
    return this.http.get(this.url+'classe/mesclasses/'+id);
  }

  classeById(id : number){
    return this.http.get(this.url+'classe/'+id);
  }
}
