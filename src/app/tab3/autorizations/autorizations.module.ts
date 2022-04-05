import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutorizationsPageRoutingModule } from './autorizations-routing.module';

import { AutorizationsPage } from './autorizations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutorizationsPageRoutingModule
  ],
  declarations: [AutorizationsPage]
})
export class AutorizationsPageModule {}
