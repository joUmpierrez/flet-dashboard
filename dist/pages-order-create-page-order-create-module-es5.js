function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-create-page-order-create-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-create-page/order-create.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-create-page/order-create.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOrderCreatePageOrderCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row text-left\">\n    <div class=\"col-sm-12\">\n      <div class=\"content-header\">Orders</div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"card\">\n            <div class=\"card-header pb-2\">\n                <h4 class=\"card-title\" id=\"horz-layout-basic\">Create Order</h4>\n              </div>\n            <div class=\"card-content\">\n                <div class=\"px-3\">\n                    <form [formGroup]=\"form\" class=\"form form-horizontal\">\n                        <div class=\"form-body\">\n                            <h4 class=\"form-section\"><i class=\"ft-clipboard\"></i> Order details</h4>\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-3 label-control\" for=\"numbertxt\">Order Number: </label>\n                                <div class=\"col-md-9\">\n                                  <input type=\"text\" id=\"numbertxt\" class=\"form-control\" formControlName=\"number\">\n                                  <div class=\"alert alert-danger\" *ngIf=\"number.touched && number.invalid\">\n                                    <div *ngIf=\"number.errors.required\">Order number is required</div>\n                                    <div *ngIf=\"number.errors.pattern\">Only numerical characters</div>\n                                  </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-3 label-control\" for=\"issuetxt\">Issue: </label>\n                                <div class=\"col-md-9\">\n                                  <input type=\"text\" id=\"issuetxt\" class=\"form-control\" formControlName=\"issue\">\n                                  <div class=\"alert alert-danger\" *ngIf=\"issue.touched && issue.invalid\">\n                                    <div *ngIf=\"issue.errors.required\">Order issue is required</div>\n                                    <div *ngIf=\"issue.errors.maxlength\">Maximum 255 characters</div>\n                                  </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-3 label-control\" for=\"descriptiontxt\">Description: </label>\n                                <div class=\"col-md-9\">\n                                  <input type=\"text\" id=\"descriptiontxt\" class=\"form-control\" formControlName=\"description\">\n                                  <div class=\"alert alert-danger\" *ngIf=\"description.touched && description.invalid\">\n                                    <div *ngIf=\"description.errors.required\">Order description is required</div>\n                                    <div *ngIf=\"description.errors.maxlength\">Maximum 255 characters</div>\n                                  </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-3 label-control\" for=\"priorityslt\">Priority: </label>\n                                <div class=\"col-md-9\">\n                                  <select class=\"form-control\" name=\"priorityslt\">\n                                      <option vlaue=\"normal\">Normal</option>\n                                      <option value=\"high\">High</option>\n                                  </select>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                              <label class=\"col-md-3 label-control\" for=\"pricetxt\">Price: </label>\n                              <div class=\"col-md-9\">\n                                <input type=\"text\" id=\"pricetxt\" class=\"form-control\" formControlName=\"price\">\n                                <div class=\"alert alert-danger\" *ngIf=\"price.touched && price.invalid\">\n                                  <div *ngIf=\"price.errors.required\">Price is required</div>\n                                  <div *ngIf=\"price.errors.pattern\">Only numerical characters</div>\n                                </div>\n                              </div>\n                          </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-3 label-control\" for=\"trackingIdtxt\">Tracking ID: </label>\n                                <div class=\"col-md-9\">\n                                  <input type=\"text\" id=\"trackingIdtxt\" class=\"form-control\" formControlName=\"trackingID\">\n                                  <div class=\"alert alert-danger\" *ngIf=\"trackingID.touched && trackingID.invalid\">\n                                    <div *ngIf=\"trackingID.errors.required\">Tracking ID is required</div>\n                                    <div *ngIf=\"trackingID.errors.pattern\">Only numerical characters</div>\n                                    <div *ngIf=\"trackingID.errors.maxlength\" > Maximum length of 255 characters</div>\n                                  </div>\n                                </div>\n                            </div>\n                            <!-- <div class=\"form-group row\">\n                                <label class=\"col-md-3 label-control\" for=\"distributorslt\">Driver: </label>\n                                <div class=\"col-md-9\">\n                                  <select class=\"form-control\">\n                                      <option *ngFor=\"let driver of drivers\" value={{driver.id}}>{{driver.name}} {{driver.lastname}}</option>\n                                  </select>\n                                </div>\n                            </div> -->\n                            <h4 class=\"form-section\"><i class=\"ft-navigation-2\"></i>Pick Up</h4>\n                            <div class=\"form-group row\">\n                              <label class=\"col-md-3 label-control\" for=\"addrestxt\">Address: </label>\n                              <div class=\"col-md-9\">\n                                <input type=\"text\" id=\"addrestxt\" class=\"form-control\" formControlName=\"addressPick\">\n                                <div class=\"alert alert-danger\" *ngIf=\"addressPick.touched && addressPick.invalid\">\n                                  <div *ngIf=\"addressPick.errors.required\">Pick up address is required</div>\n                                  <div *ngIf=\"addressPick.errors.maxlength\">Maximum lenght of 255 characters</div>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"form-group row\">\n                              <label class=\"col-md-3 label-control\" for=\"descPicktxt\">Description: </label>\n                              <div class=\"col-md-9\">\n                                <input type=\"text\" id=\"descPicktxt\" class=\"form-control\" formControlName=\"descPick\">\n                                <div class=\"alert alert-danger\" *ngIf=\"descPick.touched && descPick.invalid\">\n                                  <div *ngIf=\"descPick.errors.maxlength\">Maximum lenght of 255 characters</div>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"form-group row\">\n                              <label class=\"col-md-3 label-control\" for=\"datePicktxt\">Pick up Date: </label>\n                              <div class=\"col-md-9\">\n                                <input type=\"date\" id=\"datePicktxt\" class=\"form-control\" formControlName=\"datePick\">\n                                <div class=\"alert alert-danger\" *ngIf=\"datePick.touched && datePick.invalid\">\n                                  <div *ngIf=\"datePick.errors.required\">Pick up date is required</div>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"form-group row\">\n                              <label class=\"col-md-3 label-control\" for=\"timePicktxt\">Pick up Time: </label>\n                              <div class=\"col-md-9\">\n                                <input type=\"time\" id=\"timePicktxt\" class=\"form-control\" formControlName=\"timePick\">\n                                <div class=\"alert alert-danger\" *ngIf=\"timePick.touched && timePick.invalid\">\n                                  <div *ngIf=\"timePick.errors.required\">Pick up time is required</div>\n                                </div>\n                              </div>\n                            </div>\n                            <agm-map draggableCursor=\"default\" [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [scrollwheel]=\"scroll\" (mapClick)=\"placeMarker($event,'pick')\">\n                              <agm-marker [latitude]=\"pickLat\" [longitude]=\"pickLng\"></agm-marker>\n                            </agm-map>\n                            <h4 class=\"form-section\"><i class=\"ft-package\"></i>Drop Off</h4>\n                            <div class=\"form-group row\">\n                              <label class=\"col-md-3 label-control\" for=\"addressDroptxt\">Address: </label>\n                              <div class=\"col-md-9\">\n                                <input type=\"text\" id=\"addressDroptxt\" class=\"form-control\" formControlName=\"addressDrop\">\n                                <div class=\"alert alert-danger\" *ngIf=\"addressDrop.touched && addressDrop.invalid\">\n                                  <div *ngIf=\"addressDrop.errors.required\">Address is required</div>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"form-group row\">\n                              <label class=\"col-md-3 label-control\" for=\"descDroptxt\">Description: </label>\n                              <div class=\"col-md-9\">\n                                <input type=\"text\" id=\"descDroptxt\" class=\"form-control\" formControlName=\"descDrop\">\n                                <div class=\"alert alert-danger\" *ngIf=\"descDrop.touched && descDrop.invalid\">\n                                  <div *ngIf=\"descDrop.errors.required\">Drop off description is required</div>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"form-group row\">\n                              <label class=\"col-md-3 label-control\" for=\"dateDroptxt\">Drop off Date: </label>\n                              <div class=\"col-md-9\">\n                                <input type=\"date\" id=\"dateDroptxt\" class=\"form-control\" formControlName=\"dateDrop\">\n                                <div class=\"alert alert-danger\" *ngIf=\"dateDrop.touched && dateDrop.invalid\">\n                                  <div *ngIf=\"dateDrop.errors.required\">Drop off date is required</div>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"form-group row\">\n                              <label class=\"col-md-3 label-control\" for=\"timeDroptxt\">Drop off Time: </label>\n                              <div class=\"col-md-9\">\n                                <input type=\"time\" id=\"timeDroptxt\" class=\"form-control\" formControlName=\"timeDrop\">\n                                <div class=\"alert alert-danger\" *ngIf=\"timeDrop.touched && timeDrop.invalid\">\n                                  <div *ngIf=\"timeDrop.errors.required\">Drop off time is required</div>\n                                </div>\n                              </div>\n                            </div>\n                            <agm-map draggableCursor=\"default\" [latitude]=\"lat\" [longitude]=\"lng\" [scrollwheel]=\"scroll\" [zoom]=\"zoom\" (mapClick)=\"placeMarker($event,'drop')\">\n                              <agm-marker [latitude]=\"dropLat\" [longitude]=\"dropLng\"></agm-marker>\n                            </agm-map>\n                        </div>\n                        <h4 class=\"form-section\"><i class=\"ft-user\"></i>Client Information</h4>\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-3 label-control\" for=\"firstNametxt\">First Name: </label>\n                                <div class=\"col-md-9\">\n                                  <input type=\"text\" id=\"firstNametxt\" class=\"form-control\" formControlName=\"firstName\">\n                                  <div class=\"alert alert-danger\" *ngIf=\"firstName.touched && firstName.invalid\">\n                                    <div *ngIf=\"firstName.errors.required\">First name is required</div>\n                                  </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-3 label-control\" for=\"lastNametxt\">Last Name: </label>\n                                <div class=\"col-md-9\">\n                                  <input type=\"text\" id=\"lastNametxt\" class=\"form-control\" formControlName=\"lastName\">\n                                  <div class=\"alert alert-danger\" *ngIf=\"lastName.touched && lastName.invalid\">\n                                    <div *ngIf=\"lastName.errors.required\">Last name is required</div>\n                                  </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-3 label-control\" for=\"emailtxt\">Email: </label>\n                                <div class=\"col-md-9\">\n                                  <input type=\"email\" id=\"emailtxt\" class=\"form-control\" formControlName=\"email\">\n                                  <div class=\"alert alert-danger\" *ngIf=\"email.touched && email.invalid\">\n                                    <div *ngIf=\"email.errors.required\">Email is required</div>\n                                    <div *ngIf=\"email.errors.email\">This must be a valid email</div>\n                                  </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-3 label-control\" for=\"addresstxt\">Address: </label>\n                                <div class=\"col-md-9\">\n                                  <input type=\"text\" id=\"addresstxt\" class=\"form-control\" formControlName=\"address\">\n                                  <div class=\"alert alert-danger\" *ngIf=\"address.touched && address.invalid\">\n                                    <div *ngIf=\"address.errors.required\">Address is required</div>\n                                  </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-3 label-control\" for=\"documentNumbertxt\">Document Number: </label>\n                                <div class=\"col-md-9\">\n                                  <input type=\"text\" id=\"documentNumbertxt\" class=\"form-control\" formControlName=\"documentNumber\">\n                                  <div class=\"alert alert-danger\" *ngIf=\"documentNumber.touched && documentNumber.invalid\">\n                                    <div *ngIf=\"documentNumber.errors.required\">Document Number is required</div>\n                                  </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-3 label-control\" for=\"documentTypeslt\">Document Type</label>\n                                <div class=\"col-md-9\">\n                                    <select class=\"form-control\" formControlName=\"documentTypeslt\">\n                                        <option value=\"CI\" selected>C.I</option>\n                                        <option value=\"DNI\">D.N.I</option>\n                                        <option value=\"Other\">Other</option>\n                                    </select>\n                                    <div class=\"alert alert-danger\" *ngIf=\"documentTypeslt.touched && documentTypeslt.invalid\">\n                                      <div *ngIf=\"documentTypeslt.errors.required\">Document Type is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-3 label-control\" for=\"businessNametxt\">Business Name: </label>\n                                <div class=\"col-md-9\">\n                                  <input type=\"text\" id=\"businessNametxt\" class=\"form-control\" formControlName=\"businessName\">\n                                  <div class=\"alert alert-danger\" *ngIf=\"businessName.touched && businessName.invalid\">\n                                    <div *ngIf=\"businessName.errors.required\">Business name is required</div>\n                                  </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-3 label-control\" for=\"phonetxt\">Phone Number: </label>\n                                <div class=\"col-md-9\">\n                                  <input type=\"number\" id=\"phonetxt\" class=\"form-control\" formControlName=\"phone\">\n                                  <div class=\"alert alert-danger\" *ngIf=\"phone.touched && phone.invalid\">\n                                    <div *ngIf=\"phone.errors.required\">Phone is required</div>\n                                  </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                              <button (click)=\"submit()\" [disabled]=\"form.invalid\" class=\"form-control btn btn-primary\">\n                                <a\n                                  class=\"text-decoration-none text-white\"\n                                  >CONFIRM</a\n                                >\n                              </button>\n                          </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/pages/order-create-page/order-create-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/order-create-page/order-create-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: OrderCreateRoutingModule */

  /***/
  function srcAppPagesOrderCreatePageOrderCreateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderCreateRoutingModule", function () {
      return OrderCreateRoutingModule;
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


    var _order_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./order-create.component */
    "./src/app/pages/order-create-page/order-create.component.ts");

    var routes = [{
      path: '',
      component: _order_create_component__WEBPACK_IMPORTED_MODULE_3__["OrderCreateComponent"],
      data: {
        title: 'Create Orders'
      }
    }];

    var OrderCreateRoutingModule = function OrderCreateRoutingModule() {
      _classCallCheck(this, OrderCreateRoutingModule);
    };

    OrderCreateRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrderCreateRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/order-create-page/order-create.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/order-create-page/order-create.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOrderCreatePageOrderCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "agm-map {\n  height: 500px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYWJsb2RpYXovRmxldC9mbGV0LWRhc2hib2FyZC9zcmMvYXBwL3BhZ2VzL29yZGVyLWNyZWF0ZS1wYWdlL29yZGVyLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyLWNyZWF0ZS1wYWdlL29yZGVyLWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xuICAgIGhlaWdodDogNTAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/order-create-page/order-create.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/order-create-page/order-create.component.ts ***!
    \*******************************************************************/

  /*! exports provided: OrderCreateComponent */

  /***/
  function srcAppPagesOrderCreatePageOrderCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderCreateComponent", function () {
      return OrderCreateComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var OrderCreateComponent =
    /*#__PURE__*/
    function () {
      function OrderCreateComponent(http, route, auth) {
        _classCallCheck(this, OrderCreateComponent);

        this.http = http;
        this.route = route;
        this.auth = auth; // private clientService: ClientService;

        this.zoom = 12;
        this.numericRegex = /^[0-9]*$/;
        this.scroll = false;
        this.dropLat = null;
        this.dropLng = null;
        this.pickLat = null;
        this.pickLng = null;
        this.lat = -34.932311;
        this.lng = -54.956035;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
          number: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(this.numericRegex)]),
          issue: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(255)]),
          description: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(255)]),
          price: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(this.numericRegex)]),
          trackingID: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(this.numericRegex), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(255)]),
          addressPick: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(255)]),
          descPick: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(255)]),
          datePick: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
          timePick: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
          addressDrop: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
          descDrop: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
          dateDrop: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
          timeDrop: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
          firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
          lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]),
          address: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
          documentNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
          documentTypeslt: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
          businessName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
          phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])
        });
        this.orderService = new app_shared_services_orders_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"](http, auth); // this.clientService = new ClientService(http, auth);
      }

      _createClass(OrderCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getDrivers(); // this.getClients();
        }
      }, {
        key: "getDrivers",
        value: function getDrivers() {
          var _this = this;

          this.orderService.getDrivers().subscribe(function (res) {
            console.log(res);
            _this.drivers = res;
          });
        } // getClients() {
        //     this.clientService.getClients().subscribe((res) => {
        //         this.clients = res['clients'];
        //     })
        // }

      }, {
        key: "placeMarker",
        value: function placeMarker($event, type) {
          console.log($event.coords.lat);
          console.log($event.coords.lng);

          if (type === 'drop') {
            this.dropLat = $event.coords.lat;
            this.dropLng = $event.coords.lng;
          } else {
            this.pickLat = $event.coords.lat;
            this.pickLng = $event.coords.lng;
          }
        }
      }, {
        key: "submit",
        value: function submit() {
          var number = this.number.value;
          var issue = this.issue.value;
          var description = this.description.value;
          var trackingID = this.trackingID.value;
          var addressPick = this.addressPick.value;
          var descPick = this.descPick.value;
          var datePick = this.datePick.value;
          var timePick = this.timePick.value;
          var addressDrop = this.addressDrop.value;
          var dateDrop = this.dateDrop.value;
          var descDrop = this.dateDrop.value;
          var timeDrop = this.timeDrop.value;
          var firstName = this.firstName.value;
          var lastName = this.lastName.value;
          var email = this.email.value;
          var address = this.address.value;
          var documentNumber = this.documentNumber.value;
          var documentTypeslt = this.documentTypeslt.value;
          var businessName = this.businessName.value;
          var phone = this.phone.value;
          var price = this.price.value;
          var json = {
            number: number,
            tracking_id: trackingID,
            issue: issue,
            description: description,
            price: price,
            priority: 'low',
            status: 'pending',
            client: {
              name: firstName,
              lastname: lastName,
              phone: phone,
              email: email,
              address: address,
              document_type: documentTypeslt,
              document_number: documentNumber,
              business_name: businessName,
              merchant_id: 1
            },
            pick_up: {
              description: descPick,
              scheduled_date: datePick,
              effective_date: null,
              scheduled_time: timePick,
              effective_time: null,
              action_type: 'pick_up',
              coordinates: {
                latitude: this.pickLat,
                longitude: this.pickLng
              },
              signature: null
            },
            drop_off: {
              description: descDrop,
              scheduled_date: dateDrop,
              effective_date: null,
              scheduled_time: timeDrop,
              effective_time: null,
              action_type: 'drop_off',
              coordinates: {
                latitude: this.dropLat,
                longitude: this.dropLng
              },
              signature: null
            }
          };
          this.orderService.addOrder(json).subscribe(function (res) {
            console.log(res);
          });
        }
      }, {
        key: "number",
        get: function get() {
          return this.form.get('number');
        }
      }, {
        key: "issue",
        get: function get() {
          return this.form.get('issue');
        }
      }, {
        key: "description",
        get: function get() {
          return this.form.get('description');
        }
      }, {
        key: "trackingID",
        get: function get() {
          return this.form.get('trackingID');
        }
      }, {
        key: "addressPick",
        get: function get() {
          return this.form.get('addressPick');
        }
      }, {
        key: "descPick",
        get: function get() {
          return this.form.get('descPick');
        }
      }, {
        key: "datePick",
        get: function get() {
          return this.form.get('datePick');
        }
      }, {
        key: "timePick",
        get: function get() {
          return this.form.get('timePick');
        }
      }, {
        key: "addressDrop",
        get: function get() {
          return this.form.get('addressDrop');
        }
      }, {
        key: "dateDrop",
        get: function get() {
          return this.form.get('dateDrop');
        }
      }, {
        key: "descDrop",
        get: function get() {
          return this.form.get('descDrop');
        }
      }, {
        key: "timeDrop",
        get: function get() {
          return this.form.get('timeDrop');
        }
      }, {
        key: "firstName",
        get: function get() {
          return this.form.get('firstName');
        }
      }, {
        key: "lastName",
        get: function get() {
          return this.form.get('lastName');
        }
      }, {
        key: "email",
        get: function get() {
          return this.form.get('email');
        }
      }, {
        key: "address",
        get: function get() {
          return this.form.get('address');
        }
      }, {
        key: "documentNumber",
        get: function get() {
          return this.form.get('documentNumber');
        }
      }, {
        key: "documentTypeslt",
        get: function get() {
          return this.form.get('documentTypeslt');
        }
      }, {
        key: "businessName",
        get: function get() {
          return this.form.get('businessName');
        }
      }, {
        key: "phone",
        get: function get() {
          return this.form.get('phone');
        }
      }, {
        key: "price",
        get: function get() {
          return this.form.get('price');
        }
      }]);

      return OrderCreateComponent;
    }();

    OrderCreateComponent.ctorParameters = function () {
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], OrderCreateComponent.prototype, "action_column", void 0);
    OrderCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      // tslint:disable-next-line: component-selector
      selector: 'orders-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./order-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-create-page/order-create.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./order-create.component.scss */
      "./src/app/pages/order-create-page/order-create.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])], OrderCreateComponent);
    /***/
  },

  /***/
  "./src/app/pages/order-create-page/order-create.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/order-create-page/order-create.module.ts ***!
    \****************************************************************/

  /*! exports provided: OrderCreateModule */

  /***/
  function srcAppPagesOrderCreatePageOrderCreateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderCreateModule", function () {
      return OrderCreateModule;
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


    var _order_create_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./order-create-routing.module */
    "./src/app/pages/order-create-page/order-create-routing.module.ts");
    /* harmony import */


    var _order_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./order-create.component */
    "./src/app/pages/order-create-page/order-create.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js"); // import { SharedModule } from '../../components/shared.module';


    var OrderCreateModule = function OrderCreateModule() {
      _classCallCheck(this, OrderCreateModule);
    };

    OrderCreateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], // SharedModule,
      _order_create_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrderCreateRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyBjkGrmk4MZ1cRudaIBpEC1Rtqp_Uc-_jU'
      })],
      exports: [],
      declarations: [_order_create_component__WEBPACK_IMPORTED_MODULE_4__["OrderCreateComponent"]]
    })], OrderCreateModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-order-create-page-order-create-module-es5.js.map