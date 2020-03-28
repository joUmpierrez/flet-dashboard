(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-drivers-map-drivers-map-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/drivers-map/drivers-map.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/drivers-map/drivers-map.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<agm-map \n    draggableCursor=\"default\" \n    [latitude]=\"lat\"\n    [longitude]=\"lng\"\n    [zoom]=\"zoom\"\n    [scrollwheel]=\"scroll\"\n    (mapClick)=\"placeMarker($event,'pick')\"\n    (mapReady)=\"onMapLoad($event)\">\n</agm-map>\n");

/***/ }),

/***/ "./src/app/pages/drivers-map/drivers-map-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/drivers-map/drivers-map-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: DriversMapRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversMapRoutingModule", function() { return DriversMapRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _drivers_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drivers-map.component */ "./src/app/pages/drivers-map/drivers-map.component.ts");




const routes = [
    {
        path: '',
        component: _drivers_map_component__WEBPACK_IMPORTED_MODULE_3__["DriversMapComponent"],
        data: {
            title: 'Heat Map'
        }
    }
];
let DriversMapRoutingModule = class DriversMapRoutingModule {
};
DriversMapRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DriversMapRoutingModule);



/***/ }),

/***/ "./src/app/pages/drivers-map/drivers-map.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/drivers-map/drivers-map.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n  height: 100vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYWJsb2RpYXovRmxldC9mbGV0LWRhc2hib2FyZC9zcmMvYXBwL3BhZ2VzL2RyaXZlcnMtbWFwL2RyaXZlcnMtbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZHJpdmVycy1tYXAvZHJpdmVycy1tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/drivers-map/drivers-map.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/drivers-map/drivers-map.component.ts ***!
  \************************************************************/
/*! exports provided: DriversMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversMapComponent", function() { return DriversMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var app_shared_services_drivers_driver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/drivers/driver.service */ "./src/app/shared/services/drivers/driver.service.ts");






let DriversMapComponent = class DriversMapComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.lat = -34.932311;
        this.lng = -54.956035;
        this.scroll = false;
        this.zoom = 12;
        this.auth = new app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"](this.http, this.router);
        this.driverService = new app_shared_services_drivers_driver_service__WEBPACK_IMPORTED_MODULE_5__["DriverService"](this.http, this.auth);
    }
    onMapLoad(mapInstance) {
        this.driverService.getDrivers().subscribe((res) => {
            console.log(res);
            res.forEach(element => {
                if (element.coordinates.latitude != null) {
                    let contentString1 = '<div id="content">' +
                        '<div id="siteNotice">' +
                        '</div>' +
                        '<h1 id="firstHeading" class="firstHeading">' + element.name + ' ' + element.lastname + '</h1>' +
                        '<div id="bodyContent">' +
                        '</div>' +
                        '</div>';
                    let infowindow = new google.maps.InfoWindow({
                        content: contentString1
                    });
                    let marker = new google.maps.Marker({
                        map: mapInstance,
                        draggable: true,
                        animation: google.maps.Animation.DROP,
                        position: { lat: element.coordinates.latitude, lng: element.coordinates.longitude },
                        icon: {
                            url: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
                        }
                    });
                    marker.addListener('click', function () {
                        infowindow.open(mapInstance, marker);
                    });
                }
            });
        });
        // const contentString1 = '<div id="content">' +
        //     '<div id="siteNotice">' +
        //     '</div>' +
        //     '<h1 id="firstHeading" class="firstHeading">Jose Ramirez</h1>' +
        //     '<div id="bodyContent">' +
        //     '</div>' +
        //     '</div>';
        // const contentString2 = '<div id="content">' +
        //     '<div id="siteNotice">' +
        //     '</div>' +
        //     '<h1 id="firstHeading" class="firstHeading">Florencia Díaz</h1>' +
        //     '<div id="bodyContent">' +
        //     '</div>' +
        //     '</div>';
        // const contentString3 = '<div id="content">' +
        //     '<div id="siteNotice">' +
        //     '</div>' +
        //     '<h1 id="firstHeading" class="firstHeading">Alberto Peña</h1>' +
        //     '<div id="bodyContent">' +
        //     '</div>' +
        //     '</div>';
        // const infowindow1 = new google.maps.InfoWindow({
        //     content: contentString1
        // });
        // const infowindow2 = new google.maps.InfoWindow({
        //     content: contentString2
        // });
        // const infowindow3 = new google.maps.InfoWindow({
        //     content: contentString3
        // });
        // const marker = new google.maps.Marker({
        //     map: mapInstance,
        //     draggable: true,
        //     animation: google.maps.Animation.DROP,
        //     position: { lat: -34.94896630294371, lng: -54.93338955218502 },
        //     icon: {
        //         url: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
        //     }
        // });
        // marker.addListener('click', function () {
        //     infowindow1.open(mapInstance, marker);
        // });
        // const marker2 = new google.maps.Marker({
        //     map: mapInstance,
        //     draggable: true,
        //     animation: google.maps.Animation.DROP,
        //     position: { lat: -34.93025275418585, lng: -54.95311675659178 },
        //     icon: {
        //         url: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
        //     }
        // });
        // marker2.addListener('click', function () {
        //     infowindow2.open(mapInstance, marker2);
        // });
        // const marker3 = new google.maps.Marker({
        //     map: mapInstance,
        //     draggable: true,
        //     animation: google.maps.Animation.DROP,
        //     position: { lat: -34.9311675364786, lng: -54.93496356597899 },
        //     icon: {
        //         url: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
        //     }
        // });
        // marker3.addListener('click', function () {
        //     infowindow3.open(mapInstance, marker3);
        // });
    }
    toggleBounce(marker) {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        }
        else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
    ngOnInit() {
    }
};
DriversMapComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DriversMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'drivers-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drivers-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/drivers-map/drivers-map.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drivers-map.component.scss */ "./src/app/pages/drivers-map/drivers-map.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], DriversMapComponent);



/***/ }),

/***/ "./src/app/pages/drivers-map/drivers-map.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/drivers-map/drivers-map.module.ts ***!
  \*********************************************************/
/*! exports provided: HeatMapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatMapModule", function() { return HeatMapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _drivers_map_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drivers-map-routing.module */ "./src/app/pages/drivers-map/drivers-map-routing.module.ts");
/* harmony import */ var _drivers_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drivers-map.component */ "./src/app/pages/drivers-map/drivers-map.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");







let HeatMapModule = class HeatMapModule {
};
HeatMapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _drivers_map_routing_module__WEBPACK_IMPORTED_MODULE_3__["DriversMapRoutingModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyBjkGrmk4MZ1cRudaIBpEC1Rtqp_Uc-_jU' + '&libraries=visualization',
            })
        ],
        exports: [],
        declarations: [
            _drivers_map_component__WEBPACK_IMPORTED_MODULE_4__["DriversMapComponent"]
        ]
    })
], HeatMapModule);



/***/ })

}]);
//# sourceMappingURL=pages-drivers-map-drivers-map-module-es2015.js.map