(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-driver-stats-page-driver-stats-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-stats-page/driver-stats.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-stats-page/driver-stats.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row text-left\">\n    <div class=\"col-sm-12\">\n      <div class=\"content-header\">Drivers</div>\n    </div>\n</div>\n\n<!-- <div class=\"content-header\">Today's top Drivers</div>\n<div class=\"row text-left\">\n    <div *ngFor=\"let driver of dayTopDrivers\" class=\"col-sm-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">{{driver.fullName}}</h5>\n                <p class=\"card-text\">{{driver.orderAmount}} deliveries made today!</p>\n            </div>\n        </div>\n    </div>\n</div> -->\n\n<div class=\"card\">\n    <div class=\"card-header\">\n        <h4 class=\"card-title\">Today's top Drivers</h4>\n    </div>\n    <div class=\"card-content\">\n        <div class=\"card-body mt-2\">\n            <x-chartist\n                [type]=\"barChartType\"\n                [data]=\"barChartData\"\n                [options]=\"barChartOptions\"\n                [events]=\"barChartEvents\"\n            ></x-chartist>\n        </div>\n    </div>\n</div>\n\n<!-- <div class=\"content-header\">This week's top Drivers</div>\n<div class=\"row text-left\">\n    <div *ngFor=\"let driver of weekTopDrivers\" class=\"col-sm-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">{{driver.fullName}}</h5>\n                <p class=\"card-text\">{{driver.orderAmount}} deliveries made today!</p>\n            </div>\n        </div>\n    </div>\n</div> -->\n\n<div class=\"card\">\n    <div class=\"card-header\">\n        <h4 class=\"card-title\">This week's top Drivers</h4>\n    </div>\n    <div class=\"card-content\">\n        <div class=\"card-body\">\n            <div class=\"chart\">\n                <canvas id=\"driversPieChart\" height=\"100\"></canvas>\n                </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"content-header\">Inactive Drivers</div>\n<div class=\"row text-left\">\n    <div *ngFor=\"let driver of inactiveDrivers\" class=\"col-sm-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">{{driver.fullName}}</h5>\n                <p class=\"card-text\">Inactive during {{driver.hours}}:{{driver.minutes}}:{{driver.seconds}}</p>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/pages/driver-stats-page/driver-stats-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/driver-stats-page/driver-stats-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: DriverStatsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverStatsRoutingModule", function() { return DriverStatsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _driver_stats_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./driver-stats.component */ "./src/app/pages/driver-stats-page/driver-stats.component.ts");




const routes = [
    {
        path: '',
        component: _driver_stats_component__WEBPACK_IMPORTED_MODULE_3__["DriverStatsComponent"],
        data: {
            title: 'Login'
        }
    }
];
let DriverStatsRoutingModule = class DriverStatsRoutingModule {
};
DriverStatsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DriverStatsRoutingModule);



/***/ }),

/***/ "./src/app/pages/driver-stats-page/driver-stats.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/driver-stats-page/driver-stats.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RyaXZlci1zdGF0cy1wYWdlL2RyaXZlci1zdGF0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/driver-stats-page/driver-stats.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/driver-stats-page/driver-stats.component.ts ***!
  \*******************************************************************/
/*! exports provided: DriverStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverStatsComponent", function() { return DriverStatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/src/chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var app_shared_services_drivers_driver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/drivers/driver.service */ "./src/app/shared/services/drivers/driver.service.ts");







let DriverStatsComponent = class DriverStatsComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.pieChartData = [34, 32, 29, 27, 21];
        this.pieChartLabels = ['Jose Ramirez', 'Alberto Peña', 'Carolina Altman', 'Florencia Díaz', 'Leandro Dominguez'];
        this.pieChartType = 'doughnut';
        this.pieChartOptions = {
            animation: true,
            responsive: true,
            mainAspectRatio: false,
        };
        this.barChartType = 'Bar';
        this.barChartData = {
            series: [[12, 11, 11, 6, 3]],
            labels: ['Leandro Dominguez', 'Alberto Peña', 'Florencia Díaz', 'Carolina Altman', 'Jose Ramirez']
        };
        this.barChartOptions = {
            axisX: {
                showGrid: false
            },
            height: 300
        };
        this.barChartEvents = {
            draw: (data) => {
                if (data.type === 'bar') {
                    data.element.animate({
                        y2: {
                            dur: '0.5s',
                            from: data.y1,
                            to: data.y2,
                            easing: 'easeOutQuad'
                        }
                    });
                }
            }
        };
        this.dayTopDrivers = [
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
        this.weekTopDrivers = [
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
        this.inactiveDrivers = [
        // {
        //   'fullName': 'Jose Ramirez',
        //   'inactivity': '34:23',
        // },
        // {
        //   'fullName': 'Leandro Dominguez',
        //   'inactivity': '28:02',
        // },
        // {
        //   'fullName': 'Alberto Peña',
        //   'inactivity': '20:44',
        // },
        // {
        //   'fullName': 'Florencia Díaz',
        //   'inactivity': '12:54',
        // },
        // {
        //   'fullName': 'Camila Altman',
        //   'inactivity': '04:01',
        // },
        ];
        this.auth = new app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"](this.http, this.router);
        this.driverService = new app_shared_services_drivers_driver_service__WEBPACK_IMPORTED_MODULE_6__["DriverService"](this.http, this.auth);
    }
    ngOnInit() {
        this.driverService.getInactivity().subscribe((res) => {
            res.splice(5);
            res.forEach(element => {
                let hours = element.noDeliveryTime.hours;
                let minutes = element.noDeliveryTime.minutes;
                let seconds = element.noDeliveryTime.seconds;
                let json = {
                    fullName: element.user.name + ' ' + element.user.lastname,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds,
                };
                this.inactiveDrivers.push(json);
            });
            setInterval(() => {
                this.inactiveDrivers.forEach(element => {
                    if (element.seconds < 59) {
                        element.seconds++;
                    }
                    else if (element.minutes < 59) {
                        element.seconds = 0;
                        element.minutes++;
                    }
                    else {
                        element.hours++;
                        element.seconds = 0;
                        element.minutes = 0;
                    }
                });
            }, 1000);
        });
        this.canvas = document.getElementById('driversPieChart');
        this.ctx = this.canvas.getContext('2d');
        let data = [];
        let label = [];
        this.driverService.getMostOrdersWeek().subscribe((res) => {
            res.splice(5);
            res.forEach(element => {
                label.push(element.user.name + ' ' + element.user.lastname);
                data.push(element.count);
            });
            let myChart = new chart_js__WEBPACK_IMPORTED_MODULE_5__(this.ctx, {
                type: 'doughnut',
                data: {
                    labels: label,
                    datasets: [{
                            label: 'Orders made',
                            data: data,
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
        });
        this.driverService.getMostOrdersDay().subscribe((res) => {
            let labels = [];
            let series = [];
            res.splice(5);
            res.forEach(element => {
                labels.push(element.user.name + ' ' + element.user.lastname);
                series.push(element.count);
            });
            this.barChartData = {
                series: [series],
                labels: labels,
            };
        });
    }
};
DriverStatsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DriverStatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'drivers-stats',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./driver-stats.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-stats-page/driver-stats.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./driver-stats.component.scss */ "./src/app/pages/driver-stats-page/driver-stats.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], DriverStatsComponent);



/***/ }),

/***/ "./src/app/pages/driver-stats-page/driver-stats.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/driver-stats-page/driver-stats.module.ts ***!
  \****************************************************************/
/*! exports provided: DriverStatsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverStatsModule", function() { return DriverStatsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _driver_stats_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./driver-stats-routing.module */ "./src/app/pages/driver-stats-page/driver-stats-routing.module.ts");
/* harmony import */ var _driver_stats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./driver-stats.component */ "./src/app/pages/driver-stats-page/driver-stats.component.ts");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/fesm2015/ng-chartist.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/fesm2015/swimlane-ngx-charts.js");








let DriverStatsModule = class DriverStatsModule {
};
DriverStatsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _driver_stats_routing_module__WEBPACK_IMPORTED_MODULE_3__["DriverStatsRoutingModule"],
            ng_chartist__WEBPACK_IMPORTED_MODULE_5__["ChartistModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__["NgxChartsModule"],
        ],
        exports: [],
        declarations: [
            _driver_stats_component__WEBPACK_IMPORTED_MODULE_4__["DriverStatsComponent"]
        ],
        providers: [],
    })
], DriverStatsModule);



/***/ })

}]);
//# sourceMappingURL=pages-driver-stats-page-driver-stats-module-es2015.js.map