import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingServicePageRoutingModule } from './pending-service-routing.module';

import { PendingServicePage } from './pending-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingServicePageRoutingModule
  ],
  declarations: [PendingServicePage]
})
export class PendingServicePageModule {}
