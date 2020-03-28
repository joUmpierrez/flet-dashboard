import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DriverStatsComponent} from './driver-stats.component';

const routes: Routes = [
    {
        path: '',
        component: DriverStatsComponent,
        data: {
            title: 'Login'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DriverStatsRoutingModule { }
