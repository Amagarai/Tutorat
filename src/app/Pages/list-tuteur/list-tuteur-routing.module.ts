import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTuteurPage } from './list-tuteur.page';

const routes: Routes = [
  {
    path: '',
    component: ListTuteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListTuteurPageRoutingModule {}
