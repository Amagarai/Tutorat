import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevenirTuteurPage } from './devenir-tuteur.page';

const routes: Routes = [
  {
    path: '',
    component: DevenirTuteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevenirTuteurPageRoutingModule {}
