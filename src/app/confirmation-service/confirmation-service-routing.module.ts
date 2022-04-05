import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmationServicePage } from './confirmation-service.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmationServicePage
  },
  {
    path: 'add-services',
    loadChildren: () => import('./add-services/add-services.module').then( m => m.AddServicesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmationServicePageRoutingModule {}
