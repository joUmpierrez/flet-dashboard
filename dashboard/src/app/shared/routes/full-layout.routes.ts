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
  },
  {
    path: 'order-create',
    loadChildren: () => import('../../pages/order-create-page/order-create.module').then(m => m.OrderCreateModule)
  },
  {
    path: 'drivers-stats',
    loadChildren: () => import('../../pages/driver-stats-page/driver-stats.module').then(m => m.DriverStatsModule)
  },
  {
    path: 'heat-map',
    loadChildren: () => import ('../../pages/heat-map-page/heat-map.module').then(m => m.HeatMapModule)
  },
  {
    path: 'drivers-map',
    loadChildren: () => import('../../pages/drivers-map/drivers-map.module').then(m => m.HeatMapModule)
  }
];
