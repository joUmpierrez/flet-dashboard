function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-page-order-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-page/order.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-page/order.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOrderPageOrderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row text-left\">\n    <div class=\"col-sm-12\">\n      <div class=\"content-header\">Orders</div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <!-- <div class=\"card\">\n            <div class=\"card-header\">\n                <h4 class=\"card-title\">Orders</h4>\n            </div>\n            <div class=\"card-content\">\n                <div class=\"card-body mt-2\" *ngFor=\"let order of orders\">\n                    <p>{{order.issue}}</p>\n                    <h5>{{order.status}}</h5>\n                    <hr>\n                </div>\n                <div class=\"card-body mt-2\">\n                    <app-dt-paging\n                            *ngIf=\"orders\"\n                            [data]=\"orders\"\n                            [total]=\"total_orders\"\n                            [columns]=\"dt_columns\"\n                            [events]=\"events\"\n                    >\n                    </app-dt-paging>\n                    <ng-template #action_column let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        <button (click)=\"goToOrderDetail(value)\" [ngbTooltip]=\"'Ver detalle'\" style=\"background: transparent;color: black;\" class=\"btn btn-secondary mr-1 btn-fab order-detail-icon\"><i class=\"fa fa-eye\"></i></button>\n                    </ng-template>\n                </div>\n            </div>\n        </div> -->\n        <div class=\"card\" *ngFor=\"let order of orders\" [@simpleFadeAnimation]=\"'in'\">\n            <div class=\"card-header\">\n                <h4 style=\"display: inline;\" class=\"card-title\">{{order.client.name}} {{order.client.lastname}}</h4>\n                <span style=\"display: inline; cursor: pointer;\" class=\"pull-right\">\n                    <i class=\"ft-trash-2\" (click)=\"deleteOrder($event, order.id)\"></i>\n                </span>\n                <span style=\"display: inline; margin-right: 1%; cursor: pointer;\" class=\"pull-right\" >\n                    <i class=\"ft-edit-2\"></i>\n                </span>\n            </div>\n            <div class=\"card-content\">\n                <div class=\"card-body mt-2\">\n                    <h5>{{order.issue}}</h5>\n                    <h5>{{order.client.address}}</h5>\n                    <p>$ {{order.price}}</p>\n                    <p>{{order.client.business_name}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/pages/order-page/order-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/order-page/order-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: OrderRoutingModule */

  /***/
  function srcAppPagesOrderPageOrderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function () {
      return OrderRoutingModule;
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


    var _order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./order.component */
    "./src/app/pages/order-page/order.component.ts");

    var routes = [{
      path: '',
      component: _order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"],
      data: {
        title: 'Orders'
      }
    }];

    var OrderRoutingModule = function OrderRoutingModule() {
      _classCallCheck(this, OrderRoutingModule);
    };

    OrderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrderRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/order-page/order.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/order-page/order.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOrderPageOrderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".order-detail-icon:hover {\n  background: #463040 !important;\n  color: white !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYWJsb2RpYXovRmxldC9mbGV0LWRhc2hib2FyZC9zcmMvYXBwL3BhZ2VzL29yZGVyLXBhZ2Uvb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSw4QkFBNkI7RUFDN0IsdUJBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlci1wYWdlL29yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ub3JkZXItZGV0YWlsLWljb246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNDYzMDQwIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/order-page/order.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/order-page/order.component.ts ***!
    \*****************************************************/

  /*! exports provided: OrderComponent */

  /***/
  function srcAppPagesOrderPageOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderComponent", function () {
      return OrderComponent;
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
    "./src/app/shared/auth/auth.service.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js"); // import { OrderService } from 'app/services/order/order.service';


    var OrderComponent =
    /*#__PURE__*/
    function () {
      function OrderComponent(http, route, auth) {
        _classCallCheck(this, OrderComponent);

        this.http = http;
        this.route = route;
        this.auth = auth; // this.orderSerice = new OrderService();

        this.orderService = new app_shared_services_orders_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"](http, auth);
      }

      _createClass(OrderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.orderService.getOrders().subscribe(function (res) {
            console.log(res);
            _this.orders = res;
          });
        }
      }, {
        key: "deleteOrder",
        value: function deleteOrder(event, id) {
          var _this2 = this;

          console.log(event);
          event.target.parentElement.parentElement.parentElement.style.opacity = 0.5;
          event.target.parentElement.parentElement.parentElement.style.backgroundColor = 'red';
          this.orderService.deleteOrder(id).subscribe(function (res) {
            _this2.orders.forEach(function (item, index, object) {
              if (item.id === id) {
                object.splice(index, 1);
              }
            });
          });
        }
      }]);

      return OrderComponent;
    }();

    OrderComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('action_column', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], OrderComponent.prototype, "action_column", void 0);
    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'orders',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./order.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-page/order.component.html"))["default"],
      animations: [// the fade-in/fade-out animation.
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('simpleFadeAnimation', [// the "in" style determines the "resting" state of the element when it is visible.
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 1
      })), // fade in when created. this could also be written as transition('void => *')
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(600)]), // fade out when destroyed. this could also be written as transition('void => *')
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 0
      })))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./order.component.scss */
      "./src/app/pages/order-page/order.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])], OrderComponent);
    /***/
  },

  /***/
  "./src/app/pages/order-page/order.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/order-page/order.module.ts ***!
    \**************************************************/

  /*! exports provided: OrderModule */

  /***/
  function srcAppPagesOrderPageOrderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderModule", function () {
      return OrderModule;
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


    var _order_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./order-routing.module */
    "./src/app/pages/order-page/order-routing.module.ts");
    /* harmony import */


    var _order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./order.component */
    "./src/app/pages/order-page/order.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js"); // import { SharedModule } from '../../components/shared.module';


    var OrderModule = function OrderModule() {
      _classCallCheck(this, OrderModule);
    };

    OrderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], // SharedModule,
      _order_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrderRoutingModule"]],
      exports: [],
      declarations: [_order_component__WEBPACK_IMPORTED_MODULE_4__["OrderComponent"]]
    })], OrderModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-order-page-order-module-es5.js.map