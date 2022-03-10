import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmationServicePageRoutingModule } from './confirmation-service-routing.module';

import { ConfirmationServicePage } from './confirmation-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmationServicePageRoutingModule
  ],
  declarations: [ConfirmationServicePage]
})
export class ConfirmationServicePageModule {}
