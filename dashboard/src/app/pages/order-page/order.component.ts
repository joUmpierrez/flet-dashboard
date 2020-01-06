import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
// import { OrderService } from 'app/services/order/order.service';
import {Router} from "@angular/router";
import { OrderService } from 'app/shared/services/orders/order.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'app/shared/auth/auth.service';

@Component({
    selector: 'orders',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss']
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
        this.orderService = new OrderService(http,auth);
    }

    ngOnInit(): void {
        this.orderService.getOrders().subscribe((res) =>{
            console.log(res);
            this.orders = res['data'];
            console.log(this.orders);
        });
        // this.getOrders();
        // this.setEvents();
        // this.setDtColumns();
    }

    // getOrders(params = '') {
    //     this.orderSerice.indexRequest(params).then(response => {
    //         this.orders = response.data;
    //         this.total_orders = response.total
    //     })
    // }

    setDtColumns(){
        this.dt_columns = [
            {name:'Id',prop:'id'},
            {name:'Subject',prop:"issue"},
            {name:'Driver', prop:"distributor.full_name"},
            {name:"Pick Up Address",prop: "order_actions.pick_up_address"},
            {name:"Pick Up Time",prop: "order_actions.pick_up_date"},
            {name:"Drop Off Address",prop: "order_actions.drop_off_address"},
            {name:"Drop Off Time",prop: "order_actions.drop_off_date"},
            {name:"Recipient",prop: "order_actions.drop_off_recipient"},
            {name:'Amount', prop:"amount"},
            {name:'Status'},
            {name:'Actions', cellTemplate:this.action_column, prop:"id"}
        ];
    }

    // setEvents() {
    //     const me = this;
    //     const events = {
    //         'search': function(params: any) {
    //             me.getOrders(params);
    //         }
    //     };
    //     this.events = events;
    // }

    // goToOrderDetail(orderId){
    //     this.route.navigate(['/orders/'+ orderId]);
    // }
}
