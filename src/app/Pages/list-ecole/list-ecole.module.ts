import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListEcolePageRoutingModule } from './list-ecole-routing.module';

import { ListEcolePage } from './list-ecole.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListEcolePageRoutingModule
  ],
  declarations: [ListEcolePage]
})
export class ListEcolePageModule {}
