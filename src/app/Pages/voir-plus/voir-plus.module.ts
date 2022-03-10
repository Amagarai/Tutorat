import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoirPlusPageRoutingModule } from './voir-plus-routing.module';

import { VoirPlusPage } from './voir-plus.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoirPlusPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [VoirPlusPage]
})
export class VoirPlusPageModule {}
