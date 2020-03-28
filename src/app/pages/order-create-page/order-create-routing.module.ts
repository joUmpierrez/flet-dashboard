import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderCreateComponent } from './order-create.component';

const routes: Routes = [
    {
        path: '',
        component: OrderCreateComponent,
        data: {
            title: 'Create Orders'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrderCreateRoutingModule { }
