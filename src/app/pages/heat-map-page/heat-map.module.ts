import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HeatMapRoutingModule } from './heat-map-routing.module';
import { HeatMapComponent } from './heat-map.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        HeatMapRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBjkGrmk4MZ1cRudaIBpEC1Rtqp_Uc-_jU' + '&libraries=visualization',
        })
    ],
    exports: [],
    declarations: [
        HeatMapComponent
    ]
})
export class HeatMapModule { }
