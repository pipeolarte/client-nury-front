import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'pending-service',
    loadChildren: () => import('./pending-service/pending-service.module').then( m => m.PendingServicePageModule)
  },
  {
    path: 'confirmation-service',
    loadChildren: () => import('./confirmation-service/confirmation-service.module').then( m => m.ConfirmationServicePageModule)
  },
  {
    path: 'history-service',
    loadChildren: () => import('./history-service/history-service.module').then( m => m.HistoryServicePageModule)
  },
  {
    path: 'payment-methods',
    loadChildren: () => import('./payment-methods/payment-methods.module').then( m => m.PaymentMethodsPageModule)
  },
  {
    path: 'new-card',
    loadChildren: () => import('./new-card/new-card.module').then( m => m.NewCardPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
