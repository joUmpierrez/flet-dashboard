function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-stats-page-order-stats-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-stats-page/order-stats-component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-stats-page/order-stats-component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOrderStatsPageOrderStatsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row text-left\">\n    <div class=\"col-sm-12\">\n      <div class=\"content-header\">Orders</div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h4 class=\"card-title\">orders per hour</h4>\n            </div>\n            <div class=\"card-content\">\n                <div id=\"ordersPerHourChart\" class=\"card-body mt-2\">\n                    <x-chartist\n                        [type]=\"type\"\n                        [data]=\"data\"\n                        [options]=\"options\"\n                        [events]=\"events\"\n                    ></x-chartist>\n                    <!-- <ng-template #action_column let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        <button (click)=\"goToOrderDetail(value)\" [ngbTooltip]=\"'Ver detalle'\" style=\"background: transparent;color: black;\" class=\"btn btn-secondary mr-1 btn-fab order-detail-icon\"><i class=\"fa fa-eye\"></i></button>\n                    </ng-template> -->\n                </div>\n            </div>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h4 class=\"card-title\">Most active hours</h4>\n            </div>\n            <div class=\"card-content\">\n                <div class=\"card-body mt-2\">\n                    <x-chartist\n                        [type]=\"barChartType\"\n                        [data]=\"barChartData\"\n                        [options]=\"barChartOptions\"\n                        [events]=\"barChartEvents\"\n                    ></x-chartist>\n                </div>\n            </div>\n        </div>\n        <!-- <div class=\"card\">\n            <div class=\"card-header\">\n                <h4 class=\"card-title\">This is the header</h4>\n            </div>\n            <div class=\"card-content\">\n                <div class=\"card-body mt-2\">\n                    <div class=\"chart\">\n                        <canvas baseChart\n                          [data]=\"pieChartData\"\n                          [labels]=\"pieChartLabels\"\n                          [chartType]=\"pieChartType\"\n                          [options]=\"pieChartOptions\">\n                        </canvas>\n                      </div>\n                </div>\n            </div>\n        </div> -->\n        <!-- <div class=\"card\">\n            <div class=\"card-header\">\n                <h4 class=\"card-title\">Delivery Suggestions</h4>\n            </div>\n            <div class=\"card-content\">\n                <div *ngFor=\"let order of pendingOrders\" class=\"card-body mt-2\">\n                    <h5>{{order.issue}}</h5>\n                    <p>{{order.status}}</p>\n                    <p>{{order.delivery}}</p>\n                </div>\n            </div>\n        </div> -->\n    </div>\n</div>\n<!-- <div class=\"content-header\">Delivery Suggestions</div>\n<div class=\"row text-left\">\n    <div *ngFor=\"let order of pendingOrders\" class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{order.issue}}</h5>\n          <p class=\"card-text\">{{order.status}}</p>\n          <p class=\"card-text\">Driver: {{order.delivery}}</p>\n          <button class=\"btn btn-danger\">\n            <a\n              (click)=\"submit()\"\n              class=\"text-decoration-none text-white\"\n              >ASSIGN</a\n            >\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n<div class=\"content-header\">Deliveries E.T.A</div>\n<div class=\"row text-left\">\n    <div *ngFor=\"let delivery of deliveriesETA\" class=\"col-sm-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">{{delivery.issue}}</h5>\n                <p class=\"card-text\">{{delivery.ETA}} remaining</p>\n                <p class=\"card-text\">Driver: {{delivery.driver}}</p>\n            </div>\n        </div>\n    </div>\n</div> -->\n";
    /***/
  },

  /***/
  "./src/app/pages/order-stats-page/order-stats-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/order-stats-page/order-stats-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: OrderStatsRoutingModule */

  /***/
  function srcAppPagesOrderStatsPageOrderStatsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderStatsRoutingModule", function () {
      return OrderStatsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _order_stats_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./order-stats.component */
    "./src/app/pages/order-stats-page/order-stats.component.ts");

    var routes = [{
      path: '',
      component: _order_stats_component__WEBPACK_IMPORTED_MODULE_3__["OrderStatsComponent"],
      data: {
        title: 'Order Statistics'
      }
    }];

    var OrderStatsRoutingModule = function OrderStatsRoutingModule() {
      _classCallCheck(this, OrderStatsRoutingModule);
    };

    OrderStatsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrderStatsRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/order-stats-page/order-stats.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/order-stats-page/order-stats.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOrderStatsPageOrderStatsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".order-detail-icon:hover {\n  background: #463040 !important;\n  color: white !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYWJsb2RpYXovRmxldC9mbGV0LWRhc2hib2FyZC9zcmMvYXBwL3BhZ2VzL29yZGVyLXN0YXRzLXBhZ2Uvb3JkZXItc3RhdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSw4QkFBNkI7RUFDN0IsdUJBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlci1zdGF0cy1wYWdlL29yZGVyLXN0YXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ub3JkZXItZGV0YWlsLWljb246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNDYzMDQwIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/order-stats-page/order-stats.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/order-stats-page/order-stats.component.ts ***!
    \*****************************************************************/

  /*! exports provided: OrderStatsComponent */

  /***/
  function srcAppPagesOrderStatsPageOrderStatsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderStatsComponent", function () {
      return OrderStatsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var app_shared_services_orders_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/shared/services/orders/order.service */
    "./src/app/shared/services/orders/order.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! app/shared/auth/auth.service */
    "./src/app/shared/auth/auth.service.ts"); // import { OrderService } from 'app/services/order/order.service';


    var OrderStatsComponent =
    /*#__PURE__*/
    function () {
      function OrderStatsComponent(http, route, auth) {
        _classCallCheck(this, OrderStatsComponent);

        this.http = http;
        this.route = route;
        this.auth = auth;
        this.ordersByTime = [];
        this.ordersByTimeLabels = [];
        this.ordersByTimeSeries = [];
        this.ordersByTimeOrders = [];
        this.ordersByTimeOrdersLabels = [];
        this.ordersByTimeOrdersSeries = [];
        this.deliveriesETA = [{
          'issue': '2 Menu number 7',
          'ETA': '05:43',
          'driver': 'L. Dominguez'
        }, {
          'issue': '2 Burger & Fries Combos',
          'ETA': '15:01',
          'driver': 'A. Peña'
        }, {
          'issue': '1 Cheddar & Bacon Burger',
          'ETA': '01:07',
          'driver': 'F. Díaz'
        }, {
          'issue': '1 Large Pepperoni Pizza',
          'ETA': '10:59',
          'driver': 'C. Altman'
        }];
        this.pendingOrders = [{
          'issue': 'Menu number 3',
          'status': 'pending',
          'delivery': 'J. Ramirez'
        }, {
          'issue': 'Menu number 1',
          'status': 'pending',
          'delivery': 'R. Wiggum'
        }, {
          'issue': '2 number 9',
          'status': 'pending',
          'delivery': 'R. Wiggum'
        }, {
          'issue': 'Menu number 3',
          'status': 'pending',
          'delivery': 'J. Ramirez'
        }];
        this.pieChartData = [200, 100, 500];
        this.pieChartLabels = ['Set 1', 'Set 2', 'Set 3'];
        this.pieChartType = 'pie';
        this.pieChartOptions = {
          animation: true,
          responsive: true,
          mainAspectRatio: false
        };
        this.barChartType = 'Bar';
        this.barChartData = {
          series: [[49, 45, 30, 30, 30]],
          labels: ['13hs', '12hs', '11hs', '14hs', '15hs']
        };
        this.barChartOptions = {
          axisX: {
            showGrid: false
          },
          height: 300
        };
        this.barChartEvents = {
          draw: function draw(data) {
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
        this.type = 'Line';
        this.data = {
          labels: [],
          series: [[]]
        }; // data: IChartistData = {
        //   labels: this.ordersByTimeLabels,
        //   series: [this.ordersByTimeSeries],
        // };

        this.options = {
          axisX: {
            showGrid: false
          },
          axisY: {
            showGrid: true
          },
          height: 300
        };
        this.events = {
          draw: function draw(data) {
            if (data.type === 'line') {
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
        this.orderService = new app_shared_services_orders_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"](http, auth);
      }

      _createClass(OrderStatsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ordersPerHourTime();
          this.ordersPerHourOrders();
        }
      }, {
        key: "ordersPerHourTime",
        value: function ordersPerHourTime() {
          var _this = this;

          this.orderService.ordersPerHour().subscribe(function (res) {
            _this.ordersByTime = res;

            _this.ordersByTime.splice(0, 8);

            _this.ordersByTime.splice(12, 4);

            _this.ordersByTime.forEach(function (element) {
              _this.ordersByTimeLabels.push(element.hour + ':00'.toString()); // tslint:disable-next-line: radix


              _this.ordersByTimeSeries.push(parseInt(element.orders));
            });

            console.log(_this.ordersByTimeLabels);
            console.log(_this.ordersByTimeSeries);
            _this.data = {
              labels: _this.ordersByTimeLabels,
              series: [_this.ordersByTimeSeries]
            };
          });
        }
      }, {
        key: "ordersPerHourOrders",
        value: function ordersPerHourOrders() {
          var _this2 = this;

          this.orderService.ordersPerHourSortOrders().subscribe(function (res) {
            _this2.ordersByTimeOrders = res;

            _this2.ordersByTimeOrders.splice(5);

            _this2.ordersByTimeOrders.forEach(function (element) {
              _this2.ordersByTimeOrdersLabels.push(element.hour + ':00'.toString());

              _this2.ordersByTimeOrdersSeries.push(parseInt(element.orders));
            });

            _this2.barChartData = {
              labels: _this2.ordersByTimeOrdersLabels,
              series: [_this2.ordersByTimeOrdersSeries]
            };
          });
        }
      }]);

      return OrderStatsComponent;
    }();

    OrderStatsComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    OrderStatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      // tslint:disable-next-line: component-selector
      selector: 'order-stats',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./order-stats-component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-stats-page/order-stats-component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./order-stats.component.scss */
      "./src/app/pages/order-stats-page/order-stats.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])], OrderStatsComponent);
    /***/
  },

  /***/
  "./src/app/pages/order-stats-page/order-stats.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/order-stats-page/order-stats.module.ts ***!
    \**************************************************************/

  /*! exports provided: OrderStatsModule */

  /***/
  function srcAppPagesOrderStatsPageOrderStatsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderStatsModule", function () {
      return OrderStatsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _order_stats_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./order-stats-routing.module */
    "./src/app/pages/order-stats-page/order-stats-routing.module.ts");
    /* harmony import */


    var _order_stats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./order-stats.component */
    "./src/app/pages/order-stats-page/order-stats.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ng_chartist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-chartist */
    "./node_modules/ng-chartist/fesm2015/ng-chartist.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/fesm2015/swimlane-ngx-charts.js"); // import { SharedModule } from '../../components/shared.module';


    var OrderStatsModule = function OrderStatsModule() {
      _classCallCheck(this, OrderStatsModule);
    };

    OrderStatsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_6__["ChartistModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_8__["NgxChartsModule"], // SharedModule,
      _order_stats_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrderStatsRoutingModule"]],
      exports: [],
      declarations: [_order_stats_component__WEBPACK_IMPORTED_MODULE_4__["OrderStatsComponent"]]
    })], OrderStatsModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-order-stats-page-order-stats-module-es5.js.map