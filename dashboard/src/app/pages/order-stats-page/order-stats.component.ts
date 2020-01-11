import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
// import { OrderService } from 'app/services/order/order.service';
import {Router} from "@angular/router";
import { OrderService } from 'app/shared/services/orders/order.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'app/shared/auth/auth.service';
import {
    IBarChartOptions,
    IChartistAnimationOptions,
    IChartistData
  } from 'chartist';
  import { ChartEvent, ChartType } from 'ng-chartist';

@Component({
    selector: 'order-stats',
    templateUrl: './order-stats-component.html',
    styleUrls: ['./order-stats.component.scss']
})

export class OrderStatsComponent implements OnInit {

    // private orderService: OrderService
    // public orders: any;
    // public total_orders: any;
    // public events: any;
    // public dt_columns: any;
    // @ViewChild('action_column', { static: true }) action_column: TemplateRef<any>;

    constructor(private http: HttpClient, private route: Router, private auth: AuthService) {
        // this.orderSerice = new OrderService();
        // this.orderService = new OrderService(http,auth);
    }

    ngOnInit(): void {
        // this.orderService.getOrders().subscribe((res) =>{
        //     console.log(res);
        //     this.orders = res['data'];
        //     this.total_orders = res['total'];
        //     console.log(this.orders);
        // });
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

    // setDtColumns(){
    //     this.dt_columns = [
    //         {name:'Id',prop:'id'},
    //         {name:'Subject',prop:"issue"},
    //         {name:'Driver', prop:"distributor.full_name"},
    //         {name:"Pick Up Address",prop: "order_actions.pick_up_address"},
    //         {name:"Pick Up Time",prop: "order_actions.pick_up_date"},
    //         {name:"Drop Off Address",prop: "order_actions.drop_off_address"},
    //         {name:"Drop Off Time",prop: "order_actions.drop_off_date"},
    //         {name:"Recipient",prop: "order_actions.drop_off_recipient"},
    //         {name:'Amount', prop:"amount"},
    //         {name:'Status'},
    //         {name:'Actions', cellTemplate:this.action_column, prop:"id"}
    //     ];
    // }

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
    type: ChartType = 'Line';
    data: IChartistData = {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      series: [
        [30,50,70,80,60,20,40,10,60,90,100,70]
      ]
    };
   
    options: IBarChartOptions = {
      axisX: {
        showGrid: false
      },
      axisY:{
          showGrid: true,
      },
      height: 300
    };
   
    events: ChartEvent = {
      draw: (data) => {
        if (data.type === 'line') {
          data.element.animate({
            y2: <IChartistAnimationOptions>{
              dur: '0.5s',
              from: data.y1,
              to: data.y2,
              easing: 'easeOutQuad'
            }
          });
        }
      }
    };
}
