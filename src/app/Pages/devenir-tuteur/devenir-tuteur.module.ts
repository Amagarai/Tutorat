import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevenirTuteurPageRoutingModule } from './devenir-tuteur-routing.module';

import { DevenirTuteurPage } from './devenir-tuteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevenirTuteurPageRoutingModule
  ],
  declarations: [DevenirTuteurPage]
})
export class DevenirTuteurPageModule {}
