import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { SharedModule } from '../../components/shared.module';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        // SharedModule,
        OrderRoutingModule
    ],
    exports: [],
    declarations:[
        OrderComponent
    ]
})
export class OrderModule { }
