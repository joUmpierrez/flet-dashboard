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

  deliveriesETA = [
    {
      'issue': '2 Menu number 7',
      'ETA': '05:43',
      'driver': 'L. Dominguez'
    },
    {
      'issue': '2 Burger & Fries Combos',
      'ETA': '15:01',
      'driver': 'A. Peña'
    },
    {
      'issue': '1 Cheddar & Bacon Burger',
      'ETA': '01:07',
      'driver': 'F. Díaz'
    },
    {
      'issue': '1 Large Pepperoni Pizza',
      'ETA': '10:59',
      'driver': 'C. Altman'
    },
  ];

  pendingOrders = [
    {
      'issue': 'Menu number 3',
      'status': 'pending',
      'delivery': 'J. Ramirez'
    },
    {
      'issue': 'Menu number 1',
      'status': 'pending',
      'delivery': 'R. Wiggum'
    },
    {
      'issue': '2 number 9',
      'status': 'pending',
      'delivery': 'R. Wiggum'
    },
    {
      'issue': 'Menu number 3',
      'status': 'pending',
      'delivery': 'J. Ramirez'
    },
  ];

  pieChartData = [200, 100, 500];
  pieChartLabels = ['Set 1', 'Set 2', 'Set 3'];
  pieChartType = 'pie';
  pieChartOptions = {
    animation: true,
    responsive: true,
    mainAspectRatio: false,
  }

  barChartType: ChartType = 'Bar';
  barChartData: IChartistData = {
    series: [[49, 45, 30, 30, 30]],
    labels: ['13hs', '12hs', '11hs', '14hs', '15hs']
  }
  barChartOptions: IBarChartOptions = {
    axisX: {
      showGrid: false
    },
    height: 300
  };
  barChartEvents: ChartEvent = {
    draw: (data) => {
      if (data.type === 'bar') {
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

  type: ChartType = 'Line';
  data: IChartistData = {
    labels: [
      '08:00',
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
    ],
    series: [
      [20, 25, 20, 30, 45, 49, 30, 30, 25, 23, 25, 15]
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
