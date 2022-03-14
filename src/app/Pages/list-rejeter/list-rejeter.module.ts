import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListRejeterPageRoutingModule } from './list-rejeter-routing.module';

import { ListRejeterPage } from './list-rejeter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListRejeterPageRoutingModule
  ],
  declarations: [ListRejeterPage]
})
export class ListRejeterPageModule {}
