import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
        issue: new FormControl('', [
            Validators.required,
            Validators.maxLength(255),
        ]),
        description: new FormControl('', [
            Validators.required,
            Validators.maxLength(255),
        ]),
        price: new FormControl('', [
            Validators.required,
            Validators.pattern(this.numericRegex),
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
        timePick: new FormControl('', [
            Validators.required,
        ]),
        addressDrop: new FormControl('', [
            Validators.required,
        ]),
        descDrop: new FormControl('', [
            Validators.required,
        ]),
        dateDrop: new FormControl('', [
            Validators.required,
        ]),
        timeDrop: new FormControl('', [
            Validators.required,
        ]),
        firstName: new FormControl('', [
            Validators.required,
        ]),
        lastName: new FormControl('', [
            Validators.required,
        ]),
        email: new FormControl('', [
            Validators.required,
            Validators.email,
        ]),
        address: new FormControl('', [
            Validators.required,
        ]),
        documentNumber: new FormControl('', [
            Validators.required,
        ]),
        documentTypeslt: new FormControl('', [
            Validators.required,
        ]),
        businessName: new FormControl('', [
            Validators.required,
        ]),
        phone: new FormControl('', [
            Validators.required,
        ]),
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
            console.log(res);
            this.drivers = res;
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

    submit() {
        const number = this.number.value;
        const issue = this.issue.value;
        const description = this.description.value;
        const trackingID = this.trackingID.value;
        const addressPick = this.addressPick.value;
        const descPick = this.descPick.value;
        const datePick = this.datePick.value;
        const timePick = this.timePick.value;
        const addressDrop = this.addressDrop.value;
        const dateDrop = this.dateDrop.value;
        const descDrop = this.dateDrop.value;
        const timeDrop = this.timeDrop.value;
        const firstName = this.firstName.value;
        const lastName = this.lastName.value;
        const email = this.email.value;
        const address = this.address.value;
        const documentNumber = this.documentNumber.value;
        const documentTypeslt = this.documentTypeslt.value;
        const businessName = this.businessName.value;
        const phone = this.phone.value;
        const price = this.price.value;
        const json = {
            number: number,
            tracking_id: trackingID,
            issue: issue,
            description: description,
            price: price,
            priority: 'low',
            status: 'pending',
            client: {
                name: firstName,
                lastname: lastName,
                phone: phone,
                email: email,
                address: address,
                document_type: documentTypeslt,
                document_number: documentNumber,
                business_name: businessName,
                merchant_id: 1,
            },
            pick_up: {
                description: descPick,
                scheduled_date: datePick,
                effective_date: null,
                scheduled_time: timePick,
                effective_time: null,
                action_type: 'pick_up',
                coordinates: {
                    latitude: this.pickLat,
                    longitude: this.pickLng,
                },
                signature: null,
            },
            drop_off: {
                description: descDrop,
                scheduled_date: dateDrop,
                effective_date: null,
                scheduled_time: timeDrop,
                effective_time: null,
                action_type: 'drop_off',
                coordinates: {
                    latitude: this.dropLat,
                    longitude: this.dropLng,
                },
                signature: null,
            }
        }
        this.orderService.addOrder(json).subscribe((res) => {
            console.log(res);
        })

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

    get timePick() {
        return this.form.get('timePick');
    }

    get addressDrop() {
        return this.form.get('addressDrop');
    }

    get dateDrop() {
        return this.form.get('dateDrop');
    }

    get descDrop() {
        return this.form.get('descDrop');
    }

    get timeDrop() {
        return this.form.get('timeDrop');
    }

    get firstName() {
        return this.form.get('firstName');
    }

    get lastName() {
        return this.form.get('lastName');
    }

    get email() {
        return this.form.get('email');
    }

    get address() {
        return this.form.get('address');
    }

    get documentNumber() {
        return this.form.get('documentNumber');
    }

    get documentTypeslt() {
        return this.form.get('documentTypeslt');
    }

    get businessName() {
        return this.form.get('businessName');
    }
    get phone() {
        return this.form.get('phone');
    }

    get price() {
        return this.form.get('price');
    }
}
