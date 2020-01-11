import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderStatsComponent } from './order-stats.component';

const routes: Routes = [
    {
        path: '',
        component: OrderStatsComponent,
        data: {
            title: 'Order Statistics'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrderStatsRoutingModule { }
