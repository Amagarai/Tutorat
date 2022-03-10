import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoirPlusPage } from './voir-plus.page';

const routes: Routes = [
  {
    path: '',
    component: VoirPlusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoirPlusPageRoutingModule {}
