import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListInitierPageRoutingModule } from './list-initier-routing.module';

import { ListInitierPage } from './list-initier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListInitierPageRoutingModule
  ],
  declarations: [ListInitierPage]
})
export class ListInitierPageModule {}
