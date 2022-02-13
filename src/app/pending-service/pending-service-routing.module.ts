import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingServicePage } from './pending-service.page';

const routes: Routes = [
  {
    path: '',
    component: PendingServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingServicePageRoutingModule {}
