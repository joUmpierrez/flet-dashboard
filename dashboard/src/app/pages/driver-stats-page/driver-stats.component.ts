import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/shared/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { ChartType, ChartEvent } from 'ng-chartist';
import { IChartistData, IBarChartOptions, IChartistAnimationOptions } from 'chartist';
import * as Chart from 'chart.js';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'drivers-stats',
  templateUrl: './driver-stats.component.html',
  styleUrls: ['./driver-stats.component.scss']
})
export class DriverStatsComponent implements OnInit {
  canvas: any;
  ctx: any;

  pieChartData = [34, 32, 29, 27, 21];
  pieChartLabels = ['Jose Ramirez', 'Alberto Peña', 'Carolina Altman', 'Florencia Díaz', 'Leandro Dominguez'];
  pieChartType = 'doughnut';
  pieChartOptions = {
    animation: true,
    responsive: true,
    mainAspectRatio: false,
  }

  barChartType: ChartType = 'Bar';
  barChartData: IChartistData = {
    series: [[12, 11, 11, 6, 3]],
    labels: ['Leandro Dominguez', 'Alberto Peña', 'Florencia Díaz', 'Carolina Altman', 'Jose Ramirez']
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

  dayTopDrivers = [
    {
      'fullName': 'Leandro Dominguez',
      'orderAmount': '12',
    },
    {
      'fullName': 'Alberto Peña',
      'orderAmount': '11',
    },
    {
      'fullName': 'Florencia Díaz',
      'orderAmount': '11',
    },
    {
      'fullName': 'Carolina Altman',
      'orderAmount': '6',
    },
    {
      'fullName': 'Jose Ramirez',
      'orderAmount': '3',
    },
  ];

  weekTopDrivers = [
    {
      'fullName': 'Jose Ramirez',
      'orderAmount': '34',
    },
    {
      'fullName': 'Alberto Peña',
      'orderAmount': '32',
    },
    {
      'fullName': 'Carolina Altman',
      'orderAmount': '29',
    },
    {
      'fullName': 'Florencia Díaz',
      'orderAmount': '27',
    },
    {
      'fullName': 'Leandro Dominguez',
      'orderAmount': '21',
    },
  ];

  inactiveDrivers = [
    {
      'fullName': 'Jose Ramirez',
      'inactivity': '34:23',
    },
    {
      'fullName': 'Leandro Dominguez',
      'inactivity': '28:02',
    },
    {
      'fullName': 'Alberto Peña',
      'inactivity': '20:44',
    },
    {
      'fullName': 'Florencia Díaz',
      'inactivity': '12:54',
    },
    {
      'fullName': 'Camila Altman',
      'inactivity': '04:01',
    },
  ];

  private auth: AuthService;
  constructor(private http: HttpClient, private router: Router) {
    this.auth = new AuthService(this.http, this.router);
  }
  ngOnInit() {
    this.canvas = document.getElementById('driversPieChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
          labels: ['Jose Ramirez', 'Alberto Peña', 'Carolina Altman', 'lorencia Díaz', 'Leandro Dominguez'],
          datasets: [{
              label: 'Orders made',
              data: [12, 11, 11, 6, 3],
              backgroundColor: [
                  'orange',
                  'purple',
                  'yellow',
                  'rgba(56, 55, 123, 1)',
                  'rgba(210, 30, 30, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
      responsive: true,
      }
    });
  }
}
