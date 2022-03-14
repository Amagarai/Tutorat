import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassePageRoutingModule } from './classe-routing.module';

import { ClassePage } from './classe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassePageRoutingModule
  ],
  declarations: [ClassePage]
})
export class ClassePageModule {}
