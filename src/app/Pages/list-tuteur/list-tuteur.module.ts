import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListTuteurPageRoutingModule } from './list-tuteur-routing.module';

import { ListTuteurPage } from './list-tuteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListTuteurPageRoutingModule
  ],
  declarations: [ListTuteurPage]
})
export class ListTuteurPageModule {}
