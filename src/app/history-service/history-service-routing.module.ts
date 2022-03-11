import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryServicePage } from './history-service.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryServicePageRoutingModule {}
