import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/api/services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(private service: ServicesService) { }

  ngOnInit() {
  }

  search(data: any){
    console.log('value'+ JSON.stringify(data.value) );
    
    return this.service.searchTuteur(data.value.ville, data.value.specialite).subscribe(resulat =>{
      console.log(resulat);
    })
  }

}
