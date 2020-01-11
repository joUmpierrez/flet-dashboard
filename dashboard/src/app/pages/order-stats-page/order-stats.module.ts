import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { OrderStatsRoutingModule } from './order-stats-routing.module';
import { OrderStatsComponent } from './order-stats.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartistModule } from 'ng-chartist';
// import { SharedModule } from '../../components/shared.module';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        ChartistModule,
        // SharedModule,
        OrderStatsRoutingModule
    ],
    exports: [],
    declarations: [
        OrderStatsComponent
    ]
})
export class OrderStatsModule { }
