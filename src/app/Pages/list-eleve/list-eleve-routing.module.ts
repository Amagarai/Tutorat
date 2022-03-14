import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListElevePage } from './list-eleve.page';

const routes: Routes = [
  {
    path: '',
    component: ListElevePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListElevePageRoutingModule {}
