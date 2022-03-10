import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { IonicModule } from '@ionic/angular';

import { ListEcolePageRoutingModule } from './list-ecole-routing.module';

import { ListEcolePage } from './list-ecole.page';
import { FilterPipeModule } from "ngx-filter-pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListEcolePageRoutingModule,
    NgxDatatableModule,
    FilterPipeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [ListEcolePage]
})
export class ListEcolePageModule {}
