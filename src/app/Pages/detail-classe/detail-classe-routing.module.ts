import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailClassePage } from './detail-classe.page';

const routes: Routes = [
  {
    path: '',
    component: DetailClassePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailClassePageRoutingModule {}
