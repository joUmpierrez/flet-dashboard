import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { OrderCreateRoutingModule } from './order-create-routing.module';
import { OrderCreateComponent } from './order-create.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { SharedModule } from '../../components/shared.module';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        // SharedModule,
        OrderCreateRoutingModule
    ],
    exports: [],
    declarations:[
        OrderCreateComponent
    ]
})
export class OrderCreateModule { }
