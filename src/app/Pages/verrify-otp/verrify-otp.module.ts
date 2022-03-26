import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerrifyOtpPageRoutingModule } from './verrify-otp-routing.module';

import { VerrifyOtpPage } from './verrify-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerrifyOtpPageRoutingModule
  ],
  declarations: [VerrifyOtpPage]
})
export class VerrifyOtpPageModule {}
