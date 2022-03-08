import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/api/services.service';

@Component({
  selector: 'app-list-initier',
  templateUrl: './list-initier.page.html',
  styleUrls: ['./list-initier.page.scss'],
})
export class ListInitierPage implements OnInit {

  data : any;
  Liste: any;
  constructor(public service : ServicesService) { }

  ngOnInit() {
    this.data= JSON.parse(localStorage["logInfo"]);
    this.ListeInitier();
  }

  ListeInitier(){
    return this.service.ListInitier(this.data[0].id).subscribe(donne =>{
      this.Liste=donne;
      console.log(this.Liste);
      
    })
  }

  Accepter(id: number, demande: any){
    console.log(id)
    return this.service.Accepter(id, demande).subscribe(donnee =>{
      this.ListeInitier();
    })
  }

  Decliner(id: number, demande: any){
    return this.service.Decliner(id, demande).subscribe(donne =>{
      this.ListeInitier(); 
    })
  }

}
