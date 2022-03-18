import { id } from '@swimlane/ngx-datatable';
import { ServicesService } from 'src/app/api/services.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  data: any;
  id: any;
  constructor( private service: ServicesService) { }

  ngOnInit() {
    this.data= JSON.parse(localStorage["logInfo"]);
    console.log(this.data[0]);
  }

  // eslint-disable-next-line @typescript-eslint/no-shadow
  onSubmit(delta: NgForm)
  {
    this.service.updateParent( this.data[0].id, delta.value).subscribe(res=>{
      console.log(delta.value);

    });

  }

}
