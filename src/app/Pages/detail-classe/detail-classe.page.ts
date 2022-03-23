import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClasseServicesService } from 'src/app/Services/classe-services.service';

@Component({
  selector: 'app-detail-classe',
  templateUrl: './detail-classe.page.html',
  styleUrls: ['./detail-classe.page.scss'],
})
export class DetailClassePage implements OnInit {

  ID : number
  Liste : any
  constructor( public route : ActivatedRoute, public service : ClasseServicesService ) { }

  ngOnInit() {
    this.ID = this.route.snapshot.params['id']
    console.log(this.ID);
    this.service.classeById(this.ID).subscribe(data =>{
      this.Liste = data;
      console.log(this.Liste); 
    })
    
  }

}
