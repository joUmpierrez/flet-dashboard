(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/services/drivers/driver.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/drivers/driver.service.ts ***!
  \***********************************************************/
/*! exports provided: DriverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverService", function() { return DriverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var app_shared_routes_server_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/routes/server-routes */ "./src/app/shared/routes/server-routes.ts");







let DriverService = class DriverService {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    getDrivers() {
        return this.http.get(app_shared_routes_server_routes__WEBPACK_IMPORTED_MODULE_6__["driversURL"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getMostOrdersDay() {
        return this.http.get(app_shared_routes_server_routes__WEBPACK_IMPORTED_MODULE_6__["mostOrdersDay"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getMostOrdersWeek() {
        return this.http.get(app_shared_routes_server_routes__WEBPACK_IMPORTED_MODULE_6__["mostOrdersWeek"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getInactivity() {
        return this.http.get(app_shared_routes_server_routes__WEBPACK_IMPORTED_MODULE_6__["inactivity"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(error) {
        console.log(error);
        const errorMessage = error.error.errors[0];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
    }
};
DriverService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
DriverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], DriverService);



/***/ }),

/***/ "./src/app/shared/services/orders/order.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/orders/order.service.ts ***!
  \*********************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_shared_routes_server_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/routes/server-routes */ "./src/app/shared/routes/server-routes.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let OrderService = class OrderService {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    getOrders() {
        return this.http.get(app_shared_routes_server_routes__WEBPACK_IMPORTED_MODULE_2__["ordersURL"], this.auth.injectHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    getDrivers() {
        return this.http.get(app_shared_routes_server_routes__WEBPACK_IMPORTED_MODULE_2__["driversURL"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    deleteOrder(id) {
        const URL = app_shared_routes_server_routes__WEBPACK_IMPORTED_MODULE_2__["ordersURL"] + '/' + id;
        console.log(URL);
        return this.http.delete(URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    ordersPerHour() {
        const URL = app_shared_routes_server_routes__WEBPACK_IMPORTED_MODULE_2__["ordersHourSortTime"];
        return this.http.get(URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    ordersPerHourSortOrders() {
        const URL = app_shared_routes_server_routes__WEBPACK_IMPORTED_MODULE_2__["ordersHourSortOrders"];
        return this.http.get(URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    addOrder(json) {
        const URL = app_shared_routes_server_routes__WEBPACK_IMPORTED_MODULE_2__["ordersURL"];
        return this.http.post(URL, json)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    heatMapOrders() {
        const URL = app_shared_routes_server_routes__WEBPACK_IMPORTED_MODULE_2__["heatMapUrl"];
        return this.http.get(URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    handleError(error) {
        console.log(error);
        const errorMessage = error.error.errors[0];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(errorMessage);
    }
};
OrderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], OrderService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map