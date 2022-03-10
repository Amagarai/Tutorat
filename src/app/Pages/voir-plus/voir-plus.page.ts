import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/api/services.service';

@Component({
  selector: 'app-voir-plus',
  templateUrl: './voir-plus.page.html',
  styleUrls: ['./voir-plus.page.scss'],
})
export class VoirPlusPage implements OnInit {

  ville : string; 
  Liste : any;
  constructor(public route: ActivatedRoute, public service : ServicesService) { }

  ngOnInit() {
    this.ville = this.route.snapshot.params[('ville')];
    console.log(this.ville);
    this.GetTuteurByVille();
  }

  GetTuteurByVille(){
    return this.service.RecupTuteurByVille(this.ville).subscribe(donne =>{
      this.Liste = donne;
      console.log(donne);
    })
  }

}
