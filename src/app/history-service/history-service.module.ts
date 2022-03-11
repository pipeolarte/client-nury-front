import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryServicePageRoutingModule } from './history-service-routing.module';

import { HistoryServicePage } from './history-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryServicePageRoutingModule
  ],
  declarations: [HistoryServicePage]
})
export class HistoryServicePageModule {}
