import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverStatsRoutingModule } from './driver-stats-routing.module';
import { DriverStatsComponent } from './driver-stats.component';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
    imports: [
        CommonModule,
        DriverStatsRoutingModule,
        ChartistModule,
        ChartsModule,
        NgxChartsModule,
    ],
    exports: [],
    declarations: [
        DriverStatsComponent
    ],
    providers: [],
})
export class DriverStatsModule { }
