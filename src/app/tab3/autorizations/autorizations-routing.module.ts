import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutorizationsPage } from './autorizations.page';

const routes: Routes = [
  {
    path: '',
    component: AutorizationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutorizationsPageRoutingModule {}
