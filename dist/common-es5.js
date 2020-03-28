function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/shared/services/drivers/driver.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/services/drivers/driver.service.ts ***!
    \***********************************************************/

  /*! exports provided: DriverService */

  /***/
  function srcAppSharedServicesDriversDriverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DriverService", function () {
      return DriverService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/shared/auth/auth.service */
    "./src/app/shared/auth/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var app_shared_routes_server_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! app/shared/routes/server-routes */
    "./src/app/shared/routes/server-routes.ts");

    var DriverService =
    /*#__PURE__*/
    function () {
      function DriverService(http, auth) {
        _classCallCheck(this, DriverService);

        this.http = http;
        this.auth = auth;
      }

      _createClass(DriverService, [{
        key: "getDrivers",
        value: function getDrivers() {
          return this.http.get(app_shared_routes_server_routes__WEBPACK_IMPORTED_MODULE_6__["driversURL"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "getMostOrdersDay",
        value: function getMostOrdersDay() {
          return this.http.get(app_shared_routes_server_routes__WEBPACK_IMPORTED_MODULE_6__["mostOrdersDay"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "getMostOrdersWeek",
        value: function getMostOrdersWeek() {
          return this.http.get(app_shared_routes_server_routes__WEBPACK_IMPORTED_MODULE_6__["mostOrdersWeek"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "getInactivity",
        value: function getInactivity() {
          return this.http.get(app_shared_routes_server_routes__WEBPACK_IMPORTED_MODULE_6__["inactivity"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          console.log(error);
          var errorMessage = error.error.errors[0];
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
        }
      }]);

      return DriverService;
    }();

    DriverService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    DriverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], DriverService);
    /***/
  },

  /***/
  "./src/app/shared/services/orders/order.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/services/orders/order.service.ts ***!
    \*********************************************************/

  /*! exports provided: OrderService */

  /***/
  function srcAppSharedServicesOrdersOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderService", function () {
      return OrderService;
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


    var app_shared_routes_server_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/shared/routes/server-routes */
    "./src/app/shared/routes/server-routes.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/shared/auth/auth.service */
    "./src/app/shared/auth/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var OrderService =
    /*#__PURE__*/
    function () {
      function OrderService(http, auth) {
        _classCallCheck(this, OrderService);

        this.http = http;
        this.auth = auth;
      }

      _createClass(OrderService, [{
        key: "getOrders",
        value: function getOrders() {
          return this.http.get(app_shared_routes_server_routes__WEBPACK_IMPORTED_MODULE_2__["ordersURL"], this.auth.injectHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
        }
      }, {
        key: "getDrivers",
        value: function getDrivers() {
          return this.http.get(app_shared_routes_server_routes__WEBPACK_IMPORTED_MODULE_2__["driversURL"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
        }
      }, {
        key: "deleteOrder",
        value: function deleteOrder(id) {
          var URL = app_shared_routes_server_routes__WEBPACK_IMPORTED_MODULE_2__["ordersURL"] + '/' + id;
          console.log(URL);
          return this.http["delete"](URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
        }
      }, {
        key: "ordersPerHour",
        value: function ordersPerHour() {
          var URL = app_shared_routes_server_routes__WEBPACK_IMPORTED_MODULE_2__["ordersHourSortTime"];
          return this.http.get(URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
        }
      }, {
        key: "ordersPerHourSortOrders",
        value: function ordersPerHourSortOrders() {
          var URL = app_shared_routes_server_routes__WEBPACK_IMPORTED_MODULE_2__["ordersHourSortOrders"];
          return this.http.get(URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
        }
      }, {
        key: "addOrder",
        value: function addOrder(json) {
          var URL = app_shared_routes_server_routes__WEBPACK_IMPORTED_MODULE_2__["ordersURL"];
          return this.http.post(URL, json).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
        }
      }, {
        key: "heatMapOrders",
        value: function heatMapOrders() {
          var URL = app_shared_routes_server_routes__WEBPACK_IMPORTED_MODULE_2__["heatMapUrl"];
          return this.http.get(URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          console.log(error);
          var errorMessage = error.error.errors[0];
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(errorMessage);
        }
      }]);

      return OrderService;
    }();

    OrderService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], OrderService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map