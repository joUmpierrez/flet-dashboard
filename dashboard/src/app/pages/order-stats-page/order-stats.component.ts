import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
// import { OrderService } from 'app/services/order/order.service';
import {Router} from '@angular/router';
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
    // tslint:disable-next-line: component-selector
    selector: 'order-stats',
    templateUrl: './order-stats-component.html',
    styleUrls: ['./order-stats.component.scss']
})

export class OrderStatsComponent implements OnInit {

    pieChartData = [200, 100, 500];
    pieChartLabels = ['Set 1', 'Set 2', 'Set 3'];
    pieChartType = 'pie';
    pieChartOptions = {
      animation: true,
      responsive: true,
      mainAspectRatio: false,
    }

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
        [30, 50, 70, 80, 60, 20, 40, 10, 60, 90, 100, 70]
      ]
    };

    options: IBarChartOptions = {
      axisX: {
        showGrid: false
      },
      axisY: {
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

    }
}
