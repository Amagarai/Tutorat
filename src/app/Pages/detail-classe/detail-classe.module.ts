import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailClassePageRoutingModule } from './detail-classe-routing.module';

import { DetailClassePage } from './detail-classe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailClassePageRoutingModule
  ],
  declarations: [DetailClassePage]
})
export class DetailClassePageModule {}
