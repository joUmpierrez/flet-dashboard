import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import { OrderService } from 'app/shared/services/orders/order.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'app/shared/auth/auth.service';
import { ClientService } from 'app/shared/services/clients/clients.service';
import { FletMaps } from 'app/shared/interfaces/Maps.interface';
import { LatLng } from '@agm/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { delay } from 'rxjs/operators';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'orders-create',
    templateUrl: './order-create.component.html',
    styleUrls: ['./order-create.component.scss']
})

export class OrderCreateComponent implements OnInit, FletMaps {

    private orderService: OrderService;
    // private clientService: ClientService;
    public zoom = 12;
    private numericRegex = /^[0-9]*$/;
    public scroll = false;
    public dropLat: Number = null;
    public dropLng: Number = null;
    public pickLat: Number = null;
    public pickLng: Number = null;
    public lat = -34.932311;
    public lng = -54.956035;
    public drivers: any;
    public clients: any;
    form = new FormGroup({
        number: new FormControl('', [
            Validators.required,
            Validators.pattern(this.numericRegex),
        ]),
        issue: new FormControl('' , [
            Validators.required,
            Validators.maxLength(255),
        ]),
        description: new FormControl('', [
            Validators.required,
            Validators.maxLength(255),
        ]),
        trackingID: new FormControl('', [
            Validators.required,
            Validators.pattern(this.numericRegex),
            Validators.maxLength(255),
        ]),
        addressPick: new FormControl('', [
            Validators.required,
            Validators.maxLength(255),
        ]),
        descPick: new FormControl('', [
            Validators.maxLength(255),
        ]),
        datePick: new FormControl('', [
            Validators.required,
        ]),
        addressDrop: new FormControl('', [
            Validators.required,
        ]),
        dateDrop: new FormControl('', [
            Validators.required,
        ])
      });
    @ViewChild('action_column', { static: true }) action_column: TemplateRef<any>;

    constructor(private http: HttpClient, private route: Router, private auth: AuthService) {
        this.orderService = new OrderService(http, auth);
        // this.clientService = new ClientService(http, auth);
    }

    ngOnInit(): void {
        this.getDrivers();
        // this.getClients();
    }

    getDrivers() {
        this.orderService.getDrivers().subscribe((res) => {
            this.drivers = res['distributors'];
        });
    }

    // getClients() {
    //     this.clientService.getClients().subscribe((res) => {
    //         this.clients = res['clients'];
    //     })
    // }

    placeMarker($event, type) {
        console.log($event.coords.lat);
        console.log($event.coords.lng);
        if (type === 'drop') {
            this.dropLat = $event.coords.lat;
            this.dropLng = $event.coords.lng;
        } else {
            this.pickLat = $event.coords.lat;
            this.pickLng = $event.coords.lng;
        }
    }

    get number() {
        return this.form.get('number');
    }

    get issue() {
        return this.form.get('issue');
    }

    get description() {
        return this.form.get('description');
    }

    get trackingID() {
        return this.form.get('trackingID');
    }

    get addressPick() {
        return this.form.get('addressPick');
    }

    get descPick() {
        return this.form.get('descPick');
    }

    get datePick() {
        return this.form.get('datePick');
    }

    get addressDrop () {
        return this.form.get('addressDrop');
    }

    get dateDrop () {
        return this.form.get('dateDrop');
    }
}
