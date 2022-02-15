import { ServicesService } from './../../api/services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {

  constructor(public service: ServicesService)
  {
    this.listerEl();
   }

  ngOnInit() {
  }

  listerEl(){
    return this.service.listeEleve().subscribe(
     // eslint-disable-next-line @typescript-eslint/no-shadow
     data=>{
        console.log(data);

      }
    );
  }
  listerEc(){
    return this.service.listeEcole().subscribe(res=>{console.log(res);
    });
  }

}
