import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { DriversMapRoutingModule } from './drivers-map-routing.module';
import { DriversMapComponent } from './drivers-map.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        DriversMapRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBjkGrmk4MZ1cRudaIBpEC1Rtqp_Uc-_jU' + '&libraries=visualization',
        })
    ],
    exports: [],
    declarations: [
        DriversMapComponent
    ]
})
export class HeatMapModule { }
