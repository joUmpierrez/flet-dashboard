(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-heat-map-page-heat-map-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/heat-map-page/heat-map.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/heat-map-page/heat-map.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h4 class=\"card-title\">Heat Map</h4>\n            </div>\n            <div class=\"card-content\">\n                <div class=\"card-body mt-2\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div> -->\n<agm-map \n    draggableCursor=\"default\" \n    [latitude]=\"lat\"\n    [longitude]=\"lng\"\n    [zoom]=\"zoom\"\n    [scrollwheel]=\"scroll\"\n    (mapClick)=\"placeMarker($event,'pick')\"\n    (mapReady)=\"onMapLoad($event)\">\n</agm-map>");

/***/ }),

/***/ "./src/app/pages/heat-map-page/heat-map-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/heat-map-page/heat-map-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: HeatMapRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatMapRoutingModule", function() { return HeatMapRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _heat_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./heat-map.component */ "./src/app/pages/heat-map-page/heat-map.component.ts");




const routes = [
    {
        path: '',
        component: _heat_map_component__WEBPACK_IMPORTED_MODULE_3__["HeatMapComponent"],
        data: {
            title: 'Heat Map'
        }
    }
];
let HeatMapRoutingModule = class HeatMapRoutingModule {
};
HeatMapRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HeatMapRoutingModule);



/***/ }),

/***/ "./src/app/pages/heat-map-page/heat-map.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/heat-map-page/heat-map.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n  height: 100vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYWJsb2RpYXovRmxldC9mbGV0LWRhc2hib2FyZC9zcmMvYXBwL3BhZ2VzL2hlYXQtbWFwLXBhZ2UvaGVhdC1tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oZWF0LW1hcC1wYWdlL2hlYXQtbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/heat-map-page/heat-map.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/heat-map-page/heat-map.component.ts ***!
  \***********************************************************/
/*! exports provided: HeatMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatMapComponent", function() { return HeatMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var app_shared_services_orders_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/orders/order.service */ "./src/app/shared/services/orders/order.service.ts");






let HeatMapComponent = class HeatMapComponent {
    constructor(http, route, auth) {
        this.http = http;
        this.route = route;
        this.auth = auth;
        this.map = null;
        this.heatmap = null;
        this.lat = -34.932311;
        this.lng = -54.956035;
        this.scroll = false;
        this.zoom = 14;
        this.orderService = new app_shared_services_orders_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"](http, auth);
        // this.clientService = new ClientService(http, auth);
    }
    onMapLoad(mapInstance) {
        this.map = mapInstance;
        let coords = [];
        this.orderService.heatMapOrders().subscribe((res) => {
            res.forEach(element => {
                console.log(element.latitude);
                coords.push(new google.maps.LatLng(element.latitude, element.longitude));
            });
            this.heatmap = new google.maps.visualization.HeatmapLayer({
                map: this.map,
                data: coords,
                radius: 100,
            });
        });
        // here our in other method after you get the coords; but make sure map is loaded
        // const lat1 = new google.maps.LatLng(-34.940, -54.937);
        // const lat2 = new google.maps.LatLng(-34.940, -54.937);
        // const lat3 = new google.maps.LatLng(-34.938, -54.937);
        // const lat4 = new google.maps.LatLng(-34.937, -54.937);
        // const lat5 = new google.maps.LatLng(-34.938, -54.937);
        // const lat6 = new google.maps.LatLng(-34.952, -54.936);
        // const lat7 = new google.maps.LatLng(-34.953, -54.936);
        // const lat8 = new google.maps.LatLng(-34.954, -54.936);
        // const lat9 = new google.maps.LatLng(-34.955, -54.936);
        // const lat10 = new google.maps.LatLng(-34.956, -54.937);
        // const lat11 = new google.maps.LatLng(-34.92778269542132, -54.94664661033448);
        // const lat12 = new google.maps.LatLng(-34.9279586211817, -54.94638911826905);
        // const lat13 = new google.maps.LatLng(-34.92802899138024, -54.94626037223634);
        // const lat14 = new google.maps.LatLng(-34.92809936151841, -54.94613162620362);
        // const lat15 = new google.maps.LatLng(-34.92827528659979, -54.945831218793955);
        // const lat16 = new google.maps.LatLng(-34.92848639619952, -54.94570247276124);
        // const lat17 = new google.maps.LatLng(-34.928627135630876, -54.945616642072764);
        // const lat18 = new google.maps.LatLng(-34.928732690045976, -54.94548789604005);
        // const lat19 = new google.maps.LatLng(-34.92880305958059, -54.945359150007334);
        // const lat20 = new google.maps.LatLng(-34.929014167822295, -54.945316234663096);
        // const lat21 = new google.maps.LatLng(-34.92908453711548, -54.94518748863038);
        // const lat11 = new google.maps.LatLng(-34.937, -54.937);
        // const lat12 = new google.maps.LatLng(-34.937, -54.937);
        // const lat13 = new google.maps.LatLng(-34.937, -54.937);
        // tslint:disable-next-line: max-line-length
        // const coords: google.maps.LatLng[] = [lat1, lat2, lat3, lat4, lat5, lat6, lat7, lat8, lat9, lat10, lat11,lat12, lat13, lat14, lat15, lat16, lat17, lat18, lat19, lat20, lat21]; // can also be a google.maps.MVCArray with LatLng[] inside
    }
    ngOnInit() {
    }
};
HeatMapComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
HeatMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'heat-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./heat-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/heat-map-page/heat-map.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./heat-map.component.scss */ "./src/app/pages/heat-map-page/heat-map.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], HeatMapComponent);



/***/ }),

/***/ "./src/app/pages/heat-map-page/heat-map.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/heat-map-page/heat-map.module.ts ***!
  \********************************************************/
/*! exports provided: HeatMapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatMapModule", function() { return HeatMapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _heat_map_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./heat-map-routing.module */ "./src/app/pages/heat-map-page/heat-map-routing.module.ts");
/* harmony import */ var _heat_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./heat-map.component */ "./src/app/pages/heat-map-page/heat-map.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");







let HeatMapModule = class HeatMapModule {
};
HeatMapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _heat_map_routing_module__WEBPACK_IMPORTED_MODULE_3__["HeatMapRoutingModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyBjkGrmk4MZ1cRudaIBpEC1Rtqp_Uc-_jU' + '&libraries=visualization',
            })
        ],
        exports: [],
        declarations: [
            _heat_map_component__WEBPACK_IMPORTED_MODULE_4__["HeatMapComponent"]
        ]
    })
], HeatMapModule);



/***/ })

}]);
//# sourceMappingURL=pages-heat-map-page-heat-map-module-es2015.js.map