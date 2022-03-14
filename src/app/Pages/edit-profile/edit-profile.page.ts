import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  data : any;

  constructor() { }

  ngOnInit() {
    this.data= JSON.parse(localStorage["logInfo"]);
    console.log(this.data[0]);
  }

}
