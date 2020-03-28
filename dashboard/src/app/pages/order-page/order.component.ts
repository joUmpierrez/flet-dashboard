import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
// import { OrderService } from 'app/services/order/order.service';
import { Router } from "@angular/router";
import { OrderService } from 'app/shared/services/orders/order.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'app/shared/auth/auth.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'orders',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss'],
    animations: [
        // the fade-in/fade-out animation.
        trigger('simpleFadeAnimation', [

            // the "in" style determines the "resting" state of the element when it is visible.
            state('in', style({ opacity: 1 })),

            // fade in when created. this could also be written as transition('void => *')
            transition(':enter', [
                style({ opacity: 0 }),
                animate(600)
            ]),

            // fade out when destroyed. this could also be written as transition('void => *')
            transition(':leave',
                animate(200, style({ opacity: 0 })))
        ])
    ]
})

export class OrderComponent implements OnInit {

    // private orderSerice: OrderService;
    private orderService: OrderService
    public orders: any;
    public total_orders: any;
    public events: any;
    public dt_columns: any;
    @ViewChild('action_column', { static: true }) action_column: TemplateRef<any>;

    constructor(private http: HttpClient, private route: Router, private auth: AuthService) {
        // this.orderSerice = new OrderService();
        this.orderService = new OrderService(http, auth);
    }

    ngOnInit(): void {
        this.orderService.getOrders().subscribe((res) => {
            console.log(res);
            this.orders = res;
        });
    }

    deleteOrder(event, id) {
        console.log(event);
        event.target.parentElement.parentElement.parentElement.style.opacity = 0.5;
        event.target.parentElement.parentElement.parentElement.style.backgroundColor = 'red';
        this.orderService.deleteOrder(id)
            .subscribe((res) => {
                this.orders.forEach((item, index, object) => {
                    if (item.id === id) {
                        object.splice(index, 1);
                    }
                });
            });
    }
}
