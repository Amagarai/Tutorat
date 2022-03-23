import { Component, OnInit } from '@angular/core';
import { ClasseServicesService } from 'src/app/Services/classe-services.service';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.page.html',
  styleUrls: ['./classe.page.scss'],
})
export class ClassePage implements OnInit {

  data: any;
  Liste: any;
  segment :  string = "mesClasse";
  constructor(public service: ClasseServicesService) { }

  ngOnInit() {
    this.data= JSON.parse(localStorage["logInfo"]);
    this.mesClasse();
  }

  Evenement(event: CustomEvent){
    this.segment= event.detail.value
    console.log(this.segment);
  }

  addClasse(data : any){
    console.log(data.value);
    return this.service.addClasse(this.data[0].id, data.value).subscribe(donne =>{
      console.log(donne);
      this.mesClasse();
      this.segment = "mesClasse";
    })
  }

  mesClasse(){
    return this.service.MesClasses(this.data[0].id).subscribe(donne =>{
      this.Liste = donne;
      console.log(this.Liste);
    })
  }

}
