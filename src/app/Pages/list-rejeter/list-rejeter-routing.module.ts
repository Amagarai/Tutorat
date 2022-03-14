import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListRejeterPage } from './list-rejeter.page';

const routes: Routes = [
  {
    path: '',
    component: ListRejeterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRejeterPageRoutingModule {}
