function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-page-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-page/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-page/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginPageLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <p>\n  login-page works!\n</p>\n<div>\n  <input type=\"text\" placeholder=\"Email\" [(ngModel)]=\"email\" />\n  <input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" />\n  <input type=\"button\" value=\"Sign in\" (click)=\"SignIn()\" />\n</div> -->\n<section id=\"login\">\n  <form [formGroup]=\"form\">\n    <div class=\"container-fluid\">\n      <div class=\"row full-height-vh m-0\">\n        <div class=\"col-12 d-flex align-items-center justify-content-center\">\n          <div class=\"card\">\n            <div class=\"card-content\">\n              <div class=\"card-body login-img\">\n                <div class=\"row m-0\">\n                  <div\n                    class=\"col-lg-6 d-lg-block d-none py-2 px-3 text-center align-middle\"\n                  >\n                    <img\n                      src=\"../../../assets/img/gallery/login-logo.png\"\n                      alt=\"\"\n                      class=\"img-fluid mt-5\"\n                      width=\"400\"\n                      height=\"230\"\n                    />\n                  </div>\n                  <div class=\"col-lg-6 col-md-12 bg-white px-4 pt-3\">\n                    <h4 class=\"card-title mb-2\">Login</h4>\n                    <p class=\"card-text mb-3\">\n                      Welcome back to Flet, please log in to your account\n                    </p>\n                    <input\n                      type=\"email\"\n                      class=\"form-control mb-3\"\n                      formControlName=\"email\"\n                      placeholder=\"Email\"\n                    />\n                    <div *ngIf=\"email.touched && email.invalid\" class=\"alert alert-danger\">\n                      <div *ngIf=\"email.errors.required\" >Email is required</div>\n                      <div *ngIf=\"email.errors.email\" >Must be a valid email</div>\n                    </div>\n                    <input\n                      type=\"password\"\n                      formControlName=\"password\"\n                      class=\"form-control mb-3\"\n                      placeholder=\"Password\"\n                    />\n                    <div *ngIf=\"password.touched && password.invalid\" class=\"alert alert-danger\">\n                      <div *ngIf=\"password.errors.required\" >Password is required</div>\n                    </div>\n                    <div class=\"d-flex justify-content-between mt-2\">\n                      <div class=\"remember-me\">\n                        <div\n                          class=\"custom-control custom-checkbox custom-control-inline mb-3\"\n                        >\n                          <input\n                            type=\"checkbox\"\n                            id=\"customCheckboxInline1\"\n                            name=\"customCheckboxInline1\"\n                            class=\"custom-control-input\"\n                          />\n                          <label\n                            class=\"custom-control-label\"\n                            for=\"customCheckboxInline1\"\n                          >\n                            Remember Me\n                          </label>\n                        </div>\n                      </div>\n                      <div class=\"forgot-password-option\">\n                        <a\n                          [routerLink]=\"['/pages/forgotpassword']\"\n                          class=\"text-decoration-none text-primary\"\n                          >Forgot Password ?</a\n                        >\n                      </div>\n                    </div>\n                    <div class=\"fg-actions d-flex justify-content-between\">\n                      <div class=\"login-btn\">\n                        <button class=\"btn btn-outline-primary\">\n                          <a\n                            [routerLink]=\"['/signup-page']\"\n                            class=\"text-decoration-none\"\n                            >Register</a\n                          >\n                        </button>\n                      </div>\n                      <div class=\"recover-pass\">\n                        <button class=\"btn btn-primary\">\n                          <a\n                            (click)=\"submit()\"\n                            class=\"text-decoration-none text-white\"\n                            >Login</a\n                          >\n                        </button>\n                        <!-- <input value=\"Login\" type=\"button\" class=\"btn btn-primary\" (click)=\"submit()\" /> -->\n                      </div>\n                    </div>\n                    <hr class=\"m-0\" />\n                    <!-- <div class=\"d-flex justify-content-between mt-3\">\n                      <div class=\"option-login-page\">\n                        <h6 class=\"text-decoration-none text-primary\">\n                          Or Login With\n                        </h6>\n                      </div>\n                      <div class=\"social-login-page-options\">\n                        <a class=\"btn btn-social-icon mr-2 btn-facebook\">\n                          <span class=\"fa fa-facebook\"></span>\n                        </a>\n                        <a class=\"btn btn-social-icon mr-2 btn-twitter\">\n                          <span class=\"fa fa-twitter\"></span>\n                        </a>\n                      </div>\n                    </div> -->\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n  </section>\n  <!--Login Page Ends-->\n";
    /***/
  },

  /***/
  "./src/app/pages/login-page/login-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/login-page/login-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: LoginRoutingModule */

  /***/
  function srcAppPagesLoginPageLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function () {
      return LoginRoutingModule;
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


    var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/pages/login-page/login.component.ts");

    var routes = [{
      path: '',
      component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
      data: {
        title: 'Login'
      }
    }];

    var LoginRoutingModule = function LoginRoutingModule() {
      _classCallCheck(this, LoginRoutingModule);
    };

    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login-page/login.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/login-page/login.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginPageLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luLXBhZ2UvbG9naW4uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/login-page/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login-page/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesLoginPageLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/shared/auth/auth.service */
    "./src/app/shared/auth/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(http, router) {
        _classCallCheck(this, LoginComponent);

        this.http = http;
        this.router = router;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])
        });
        this.auth = new app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"](this.http, this.router);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submit",
        value: function submit() {
          // this.router.navigateByUrl('/full-layout');
          console.log(this.email.value);
          this.auth.signinUser(this.email.value, this.password.value);
        }
      }, {
        key: "email",
        get: function get() {
          return this.form.get('email');
        }
      }, {
        key: "password",
        get: function get() {
          return this.form.get('password');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-page/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/pages/login-page/login.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/pages/login-page/login.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/login-page/login.module.ts ***!
    \**************************************************/

  /*! exports provided: LoginModule */

  /***/
  function srcAppPagesLoginPageLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login-page/login-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/pages/login-page/login.component.ts");

    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };

    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
      exports: [],
      declarations: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
      providers: []
    })], LoginModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-page-login-module-es5.js.map