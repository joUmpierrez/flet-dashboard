import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { OrderCreateRoutingModule } from './order-create-routing.module';
import { OrderCreateComponent } from './order-create.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { SharedModule } from '../../components/shared.module';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        // SharedModule,
        OrderCreateRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBjkGrmk4MZ1cRudaIBpEC1Rtqp_Uc-_jU',
        })
    ],
    exports: [],
    declarations:[
        OrderCreateComponent
    ]
})
export class OrderCreateModule { }
