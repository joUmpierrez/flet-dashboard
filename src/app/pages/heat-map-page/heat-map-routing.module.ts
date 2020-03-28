import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeatMapComponent } from './heat-map.component';

const routes: Routes = [
    {
        path: '',
        component: HeatMapComponent,
        data: {
            title: 'Heat Map'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HeatMapRoutingModule { }
