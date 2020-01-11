import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
  {
    path: 'changelog',
    loadChildren: () => import('../../changelog/changelog.module').then(m => m.ChangeLogModule)
  },
  {
    path: 'full-layout',
    loadChildren: () => import('../../pages/full-layout-page/full-pages.module').then(m => m.FullPagesModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('../../pages/order-page/order.module').then(m => m.OrderModule)
  },
  {
    path: 'order-stats',
    loadChildren: () => import('../../pages/order-stats-page/order-stats.module').then(m => m.OrderStatsModule)
  }
];
