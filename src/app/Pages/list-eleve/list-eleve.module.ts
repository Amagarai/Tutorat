import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListElevePageRoutingModule } from './list-eleve-routing.module';

import { ListElevePage } from './list-eleve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListElevePageRoutingModule
  ],
  declarations: [ListElevePage]
})
export class ListElevePageModule {}
