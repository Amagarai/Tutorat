import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddElevePage } from './add-eleve.page';

const routes: Routes = [
  {
    path: '',
    component: AddElevePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddElevePageRoutingModule {}
