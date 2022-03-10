import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmationServicePage } from './confirmation-service.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmationServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmationServicePageRoutingModule {}
