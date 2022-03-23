import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddElevePageRoutingModule } from './add-eleve-routing.module';

import { AddElevePage } from './add-eleve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddElevePageRoutingModule
  ],
  declarations: [AddElevePage]
})
export class AddElevePageModule {}
