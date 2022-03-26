import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerrifyOtpPage } from './verrify-otp.page';

const routes: Routes = [
  {
    path: '',
    component: VerrifyOtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerrifyOtpPageRoutingModule {}
