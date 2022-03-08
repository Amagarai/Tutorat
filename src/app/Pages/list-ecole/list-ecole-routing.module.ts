import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListEcolePage } from './list-ecole.page';

const routes: Routes = [
  {
    path: '',
    component: ListEcolePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListEcolePageRoutingModule {}
