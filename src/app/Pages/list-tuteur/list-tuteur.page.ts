import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-tuteur',
  templateUrl: './list-tuteur.page.html',
  styleUrls: ['./list-tuteur.page.scss'],
})
export class ListTuteurPage implements OnInit {

  data : any;
  constructor() { }

  ngOnInit() {
    this.data= JSON.parse(localStorage["logInfo"]);
  }

}
