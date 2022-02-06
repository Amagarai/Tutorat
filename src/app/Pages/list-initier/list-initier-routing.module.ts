import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListInitierPage } from './list-initier.page';

const routes: Routes = [
  {
    path: '',
    component: ListInitierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListInitierPageRoutingModule {}
