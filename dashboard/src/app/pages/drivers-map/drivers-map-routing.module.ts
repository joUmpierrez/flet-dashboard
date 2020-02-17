import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriversMapComponent } from './drivers-map.component';

const routes: Routes = [
    {
        path: '',
        component: DriversMapComponent,
        data: {
            title: 'Heat Map'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DriversMapRoutingModule { }
