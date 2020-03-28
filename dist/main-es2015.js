(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/content/content-layout.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/content/content-layout.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper p-0\" [dir]=\"direction\">\n  <router-outlet></router-outlet>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/full-layout.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/full-layout.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #wrapper class=\"wrapper\" [ngClass]=\"{'nav-collapsed': iscollapsed, 'menu-collapsed': iscollapsed, 'sidebar-sm': isSidebar_sm, 'sidebar-lg': isSidebar_lg}\" [dir]=\"options.direction\">\n  <div #appSidebar appSidebar class=\"app-sidebar\" (toggleHideSidebar)=\"toggleHideSidebar($event)\" [ngClass]=\"{'hide-sidebar': hideSidebar}\" data-active-color=\"white\" [attr.data-background-color]=\"bgColor\" [attr.data-image]=\"bgImage\">\n      <app-sidebar></app-sidebar>\n      <div class=\"sidebar-background\" #sidebarBgImage></div>\n  </div>\n  <app-navbar (toggleHideSidebar)=\"toggleHideSidebar($event)\"></app-navbar>\n  <div class=\"main-panel\">\n      <div class=\"main-content\">\n          <div class=\"content-wrapper\">\n              <div class=\"container-fluid\">\n                  <router-outlet></router-outlet>\n              </div>\n          </div>\n      </div>\n      <app-footer></app-footer>\n  </div>\n  <app-notification-sidebar></app-notification-sidebar>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Footer Starts-->\n<footer>\n    <div class=\"container-fluid\">\n        <!-- <p class=\"copyright text-center\">\n                Copyright  &copy;  {{currentDate | date: 'yyyy'}} <a id=\"pixinventLink\" href=\"https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent\">PIXINVENT</a>, All rights reserved.          \n        </p>\n         -->\n    </div>\n</footer>\n<!--Footer Ends-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Navbar (Header) Starts -->\n<nav class=\"header-navbar navbar navbar-expand-lg navbar-light bg-faded\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle d-lg-none float-left\" data-toggle=\"collapse\" (click)=\"toggleSidebar()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <span class=\"d-lg-none navbar-right navbar-collapse-toggle\">\n                <a class=\"open-navbar-container\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbarSupportedContent\">\n                    <i class=\"ft-more-vertical\"></i>\n                </a>\n            </span>\n            <form class=\"navbar-form navbar-right mt-1\" role=\"search\">\n                <div class=\"position-relative has-icon-right\">\n                    <input type=\"text\" class=\"form-control round\" placeholder=\"Search\">\n                    <div class=\"form-control-position\">\n                        <i class=\"ft-search\"></i>\n                    </div>\n                </div>\n            </form>\n           \n        </div>\n        <div class=\"navbar-container\">\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngbCollapse]=\"isCollapsed\">\n                <ul class=\"navbar-nav\">\n                    <li class=\"nav-item mr-2  d-none d-lg-block\">\n                        <a href=\"javascript:;\" class=\"nav-link\" id=\"navbar-fullscreen\" appToggleFullscreen (click)=\"ToggleClass()\">                            \n                            <i class=\"{{toggleClass}} font-medium-3 blue-grey darken-4\"></i>\n                            <p class=\"d-none\">fullscreen</p>\n                        </a>\n                    </li>\n                    \n                    <li class=\"nav-item\" ngbDropdown [placement]=\"placement\">\n                        <a class=\"nav-link position-relative\" id=\"dropdownBasic2\" ngbDropdownToggle>\n                            <i class=\"ft-bell font-medium-3 blue-grey darken-4\"></i>\n                            <span class=\"notification badge badge-pill badge-danger\">4</span>\n                            <p class=\"d-none\">Notifications</p>\n                        </a>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\" class=\"notification-dropdown\">\n                            <div class=\"noti-list\" [perfectScrollbar]>\n                                <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\n                                    <i class=\"ft-bell info float-left d-block font-large-1 mt-1 mr-2\"></i>\n                                    <span class=\"noti-wrapper\">\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 info\">New Order Received</span>\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametitaque in, et!</span>\n                                    </span>\n                                </a>\n                                <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\n                                    <i class=\"ft-bell warning float-left d-block font-large-1 mt-1 mr-2\"></i>\n                                    <span class=\"noti-wrapper\">\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 warning\">New User Registered</span>\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametitaque in </span>\n                                    </span>\n                                </a>\n                                <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\n                                    <i class=\"ft-bell danger float-left d-block font-large-1 mt-1 mr-2\"></i>\n                                    <span class=\"noti-wrapper\">\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 danger\">New Order Received</span>\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametest?</span>\n                                    </span>\n                                </a>\n                                <a class=\"dropdown-item noti-container py-3\">\n                                    <i class=\"ft-bell success float-left d-block font-large-1 mt-1 mr-2\"></i>\n                                    <span class=\"noti-wrapper\">\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 success\">New User Registered</span>\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametnatus aut.</span>\n                                    </span>\n                                </a>\n                            </div>\n                            <a class=\"noti-footer primary text-center d-block border-top border-top-blue-grey border-top-lighten-4 text-bold-400 py-1\">Read All Notifications</a>\n                        </div>\n                    </li>\n                    <li class=\"nav-item\" ngbDropdown [placement]=\"placement\">\n                        <a class=\"nav-link position-relative\" id=\"dropdownBasic3\" ngbDropdownToggle>\n                            <i class=\"ft-user font-medium-3 blue-grey darken-4\"></i>\n                            <p class=\"d-none\">User Settings</p>\n                        </a>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic3\" class=\"text-left\">                           \n                            <a class=\"dropdown-item py-1\" href=\"javascript:;\">\n                                <i class=\"ft-edit mr-2\"></i>\n                                <span>My Profile</span>\n                            </a>\n                            <a class=\"dropdown-item py-1\" href=\"javascript:;\">\n                                <i class=\"ft-mail mr-2\"></i>\n                                <span>My Inbox</span>\n                            </a>\n                            <a class=\"dropdown-item py-1\" href=\"javascript:;\">\n                                <i class=\"ft-settings mr-2\"></i>\n                                <span>Settings</span>\n                            </a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a class=\"dropdown-item\" href=\"javascript:;\">\n                                <i class=\"ft-power mr-2\"></i>\n                                <span>Logout</span>\n                            </a>\n                        </div>\n                    </li>\n                    <li class=\"nav-item d-none d-lg-block\">\n                        <a class=\"nav-link position-relative notification-sidebar-toggle\" (click)=\"toggleNotificationSidebar();\">\n                            <i class=\"ft-align-left font-medium-3 blue-grey darken-4\"></i>\n                            <p class=\"d-none\">Notifications Sidebar</p>\n                        </a>\n                    </li>\n                   \n                </ul>\n            </div>\n        </div>\n    </div>\n</nav>\n<!-- Navbar (Header) Ends -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/notification-sidebar/notification-sidebar.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/notification-sidebar/notification-sidebar.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- //////////////////////////////////////////////////////////////////////////// -->\n<!-- START Notification Sidebar -->\n<aside #sidebar id=\"notification-sidebar\" class=\"notification-sidebar d-none d-sm-none d-md-block\">\n  <a class=\"notification-sidebar-close\" (click)=\"onClose()\">\n    <i class=\"ft-x font-medium-3\"></i>\n  </a>\n  <div class=\"side-nav notification-sidebar-content\" [perfectScrollbar]>\n    <div class=\"row\">\n      <div class=\"col-12 mt-1\">\n        <ngb-tabset>\n          \n          <ngb-tab>\n            <ng-template ngbTabTitle><b>Chat</b></ng-template>\n            <ng-template ngbTabContent>\n              <div id=\"chatapp\" class=\"col-12\">\n                <h6 class=\"mt-1 mb-3 text-bold-400 text-left\">RECENT CHAT</h6>\n                <div class=\"collection border-none\">\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-12.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Elizabeth Elliott </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.00 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Thank you </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-6.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Mary Adams </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.14 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Hello Boo </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-11.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Caleb Richards </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">9.00 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Keny ! </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-18.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">June Lane </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.14 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Ohh God </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-1.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Edward Fletcher </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.15 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Love you </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-2.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Crystal Bates </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">8.00 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Can we </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-3.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Nathan Watts </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">9.53 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Great! </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-15.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Willard Wood </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.20 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Do it </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-19.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Ronnie Ellis </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.30 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Got that </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-14.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Gwendolyn Wood </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.34 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Like you </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-13.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Daniel Russell </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">12.00 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Thank you </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-22.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Sarah Graves </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">11.14 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Okay you </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-9.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Andrew Hoffman </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">7.30 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Can do </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-20.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Camila Lynch </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">2.00 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Leave it </p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab>\n            <ng-template ngbTabTitle><b>Settings</b></ng-template>\n            <ng-template ngbTabContent>\n              <div id=\"settings\" class=\"col-12\">\n                <h6 class=\"mt-1 mb-3 text-bold-400 text-left\">GENERAL SETTINGS</h6>\n                <ul class=\"list-unstyled\">\n                  <li class=\"text-left\">\n                    <div class=\"togglebutton\">\n                      <div class=\"switch d-flex justify-content-between w-100\">\n                        <span class=\"text-bold-500\">Notifications</span>\n                        <div class=\"notification-cb\">\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                            <input checked=\"checked\" class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\"\n                              id=\"notifications1\">\n                            <label class=\"custom-control-label d-block\" for=\"notifications1\"></label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <p>Use checkboxes when looking for yes or no answers.</p>\n                  </li>\n                  <li class=\"text-left\">\n                    <div class=\"togglebutton\">\n                      <div class=\"switch d-flex justify-content-between w-100\">\n                        <span class=\"text-bold-500\">Show recent activity</span>\n                        <div class=\"notification-cb\">\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                            <input checked=\"checked\" class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\"\n                              id=\"recent-activity1\">\n                            <label class=\"custom-control-label d-block\" for=\"recent-activity1\"></label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\n                  </li>\n                  <li class=\"text-left\">\n                    <div class=\"togglebutton\">\n                      <div class=\"switch  d-flex justify-content-between w-100\">\n                        <span class=\"text-bold-500\">Notifications</span>\n                        <div class=\"notification-cb\">\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                            <input class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\" id=\"notifications2\">\n                            <label class=\"custom-control-label d-block\" for=\"notifications2\"></label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <p>Use checkboxes when looking for yes or no answers.</p>\n                  </li>\n                  <li class=\"text-left\">\n                    <div class=\"togglebutton\">\n                      <div class=\"switch d-flex justify-content-between w-100\">\n                        <span class=\"text-bold-500\">Show recent activity</span>\n                        <div class=\"notification-cb\">\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                            <input class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\"\n                              id=\"recent-activity2\">\n                            <label class=\"custom-control-label d-block\" for=\"recent-activity2\"></label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\n                  </li>\n                  <li class=\"text-left\">\n                    <div class=\"togglebutton\">\n                      <div class=\"switch d-flex justify-content-between w-100\">\n                        <span class=\"text-bold-500\">Show your emails</span>\n                        <div class=\"notification-cb\">\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                            <input class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\" id=\"show-emails\">\n                            <label class=\"custom-control-label d-block\" for=\"show-emails\"></label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <p>Use checkboxes when looking for yes or no answers.</p>\n                  </li>\n                  <li class=\"text-left\">\n                    <div class=\"togglebutton\">\n                      <div class=\"switch d-flex justify-content-between w-100\">\n                        <span class=\"text-bold-500\">Show Task statistics</span>\n                        <div class=\"notification-cb\">\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                            <input class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\" id=\"show-stats\">\n                            <label class=\"custom-control-label d-block\" for=\"show-stats\"></label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\n                  </li>\n                </ul>\n              </div>\n            </ng-template>\n          </ngb-tab>\n        </ngb-tabset>\n      </div>\n    </div>\n  </div>\n</aside>\n<!-- END Notification Sidebar -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Sidebar Header starts -->\n<div class=\"sidebar-header\">\n    <div class=\"logo clearfix\">\n        <a [routerLink]=\"['/']\" class=\"logo-text float-left\">\n            <div class=\"logo-img\">\n                <img [src]=\"logoUrl\" width=\"50\" height=\"50\" />\n            </div>\n            <span class=\"text align-middle\" style=\"padding-left: 15;\">FLET</span>\n        </a>\n        <a class=\"nav-toggle d-none d-sm-none d-md-none d-lg-block\" id=\"sidebarToggle\" href=\"javascript:;\">\n            <i #toggleIcon appSidebarToggle class=\"ft-toggle-right toggle-icon\" data-toggle=\"expanded\"></i>\n        </a>\n        <a class=\"nav-close d-block d-md-block d-lg-none d-xl-none\" id=\"sidebarClose\" href=\"javascript:;\">\n            <i class=\"ft-x\"></i>\n        </a>\n    </div>\n</div>\n<!-- Sidebar Header Ends -->\n\n<!-- Sidebar Content starts -->\n<div class=\"sidebar-content\"  [perfectScrollbar]>\n    <div class=\"nav-container\">\n        <ul class=\"navigation\" appSidebarList>\n            <!-- First level menu -->\n             <li appSidebarlink level=\"{{depth + 1}}\" (toggleEmit)=\"handleToggle($event)\" (click)=\"toggleSlideInOut()\" [routePath]=\"menuItem.path\" [classes]=\"menuItem.class\" [title]=\"menuItem.title\"  [parent]=\"\" *ngFor=\"let menuItem of menuItems\"   [ngClass]=\"{'has-sub': menuItem.class === 'has-sub' ? true: false, 'open': activeTitles.includes(menuItem.title) && !nav_collapsed_open ? true : false, 'nav-collapsed-open': nav_collapsed_open && activeTitles.includes(menuItem.title)}\" [routerLinkActive]=\"menuItem.submenu.length != 0 ? '' : 'active'\"\n                [routerLinkActiveOptions]=\"{exact: true}\">\n                <a appSidebarAnchorToggle [routerLink]=\"menuItem.class === '' ? [menuItem.path] : null\" *ngIf=\"!menuItem.isExternalLink; else externalLinkBlock\">\n                    <i [ngClass]=\"[menuItem.icon]\"></i>\n                    <span class=\"menu-title\">{{menuItem.title | translate }}</span>\n                    <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\n                </a>\n                <ng-template #externalLinkBlock>\n                    <a [href]=\"[menuItem.path]\" target=\"_blank\">\n                        <i [ngClass]=\"[menuItem.icon]\"></i>\n                        <span class=\"menu-title\">{{menuItem.title | translate }}</span>\n                        <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\n                    </a>\n                </ng-template>\n                <!-- Second level menu -->\n                <ul class=\"menu-content\" *ngIf=\"menuItem.submenu.length > 0\" [@slideInOut]=\"activeTitles.includes(menuItem.title) ? true : false\">\n                    <li appSidebarlink level=\"{{depth + 2}}\" (toggleEmit)=\"handleToggle($event)\" [routePath]=\"menuSubItem.path\" [classes]=\"menuSubItem.class\" [title]=\"menuSubItem.title\" [parent]=\"menuItem.title\" *ngFor=\"let menuSubItem of menuItem.submenu\" [routerLinkActive]=\"menuSubItem.submenu.length > 0 ? '' : 'active'\" [ngClass]=\"{'has-sub': menuSubItem.class === 'has-sub' ? true: false, 'open': activeTitles.includes(menuSubItem.title) && !nav_collapsed_open ? true : false, 'nav-collapsed-open': nav_collapsed_open && activeTitles.includes(menuSubItem.title)}\">\n                        <a appSidebarAnchorToggle [routerLink]=\"menuSubItem.submenu.length > 0 ? null : [menuSubItem.path]\" *ngIf=\"!menuSubItem.isExternalLink; else externalSubLinkBlock\">\n                            <i [ngClass]=\"[menuSubItem.icon]\"></i>\n                            <span class=\"menu-title\">{{menuSubItem.title | translate }}</span>\n                            <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\n                        </a>\n                        <ng-template #externalSubLinkBlock>\n                            <a [href]=\"[menuSubItem.path]\">\n                                <i [ngClass]=\"[menuSubItem.icon]\"></i>\n                                <span class=\"menu-title\">{{menuSubItem.title | translate }}</span>\n                                <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\n                            </a>\n                        </ng-template>\n                        <!-- Third level menu -->\n                        <ul class=\"menu-content\" *ngIf=\"menuSubItem.submenu.length > 0\" [@slideInOut]=\"activeTitles.includes(menuSubItem.title) ? true : false\">\n                            <li appSidebarlink level=\"{{depth + 3}}\" [routePath]=\"menuSubsubItem.path\" [classes]=\"menuSubsubItem.class\" [title]=\"menuSubsubItem.title\" [parent]=\"menuSubItem.title\" *ngFor=\"let menuSubsubItem of menuSubItem.submenu\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"\n                                [ngClass]=\"[menuSubsubItem.class]\">\n                                <a appSidebarAnchorToggle [routerLink]=\"[menuSubsubItem.path]\" *ngIf=\"!menuSubsubItem.isExternalLink; else externalSubSubLinkBlock\">\n                                    <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\n                                    <span class=\"menu-title\">{{menuSubsubItem.title | translate }}</span>\n                                    <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\n                                </a>\n                                <ng-template #externalSubSubLinkBlock>\n                                    <a [href]=\"[menuSubsubItem.path]\">\n                                        <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\n                                        <span class=\"menu-title\">{{menuSubsubItem.title | translate }}</span>\n                                        <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\n                                    </a>\n                                </ng-template>\n                            </li>\n                        </ul>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </div>\n</div>\n<!-- Sidebar Content Ends -->\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ "./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ "./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/routes/full-layout.routes */ "./src/app/shared/routes/full-layout.routes.ts");
/* harmony import */ var _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/routes/content-layout.routes */ "./src/app/shared/routes/content-layout.routes.ts");







const appRoutes = [
    {
        path: '',
        redirectTo: 'orders',
        pathMatch: 'full',
    },
    { path: '', component: _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_3__["FullLayoutComponent"], data: { title: 'full Views' }, children: _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_5__["Full_ROUTES"] },
    { path: '', component: _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_4__["ContentLayoutComponent"], data: { title: 'content Views' }, children: _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_6__["CONTENT_ROUTES"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.subscription = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]))
            .subscribe(() => window.scrollTo(0, 0));
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ "./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ "./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false
};
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_12__["FullLayoutComponent"], _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_11__["ContentLayoutComponent"]],
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
                }
            }),
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"]
        ],
        providers: [
            _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
            _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"],
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PERFECT_SCROLLBAR_CONFIG"],
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            },
            { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvY29udGVudC9jb250ZW50LWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: ContentLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentLayoutComponent", function() { return ContentLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let ContentLayoutComponent = class ContentLayoutComponent {
    constructor(configService, document, renderer) {
        this.configService = configService;
        this.document = document;
        this.renderer = renderer;
        this.config = {};
    }
    ngOnInit() {
        this.config = this.configService.templateConf;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            if (this.config.layout.dir) {
                this.direction = this.config.layout.dir;
            }
            if (this.config.layout.variant === "Dark") {
                this.renderer.addClass(this.document.body, 'layout-dark');
            }
            else if (this.config.layout.variant === "Transparent") {
                this.renderer.addClass(this.document.body, 'layout-dark');
                this.renderer.addClass(this.document.body, 'layout-transparent');
                if (this.config.layout.sidebar.backgroundColor) {
                    this.renderer.addClass(this.document.body, this.config.layout.sidebar.backgroundColor);
                }
                else {
                    this.renderer.addClass(this.document.body, 'bg-glass-1');
                }
            }
        }, 0);
    }
};
ContentLayoutComponent.ctorParameters = () => [
    { type: app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content-wrapper', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ContentLayoutComponent.prototype, "wrapper", void 0);
ContentLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-content-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/content/content-layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content-layout.component.scss */ "./src/app/layouts/content/content-layout.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
        Document,
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], ContentLayoutComponent);



/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZnVsbC9mdWxsLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.ts ***!
  \*******************************************************/
/*! exports provided: FullLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function() { return FullLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let FullLayoutComponent = class FullLayoutComponent {
    constructor(elementRef, configService, document, renderer) {
        this.elementRef = elementRef;
        this.configService = configService;
        this.document = document;
        this.renderer = renderer;
        this.options = {
            direction: 'ltr',
            bgColor: 'black',
            bgImage: 'assets/img/sidebar-bg/01.jpg'
        };
        this.iscollapsed = false;
        this.isSidebar_sm = false;
        this.isSidebar_lg = false;
        this.bgColor = 'black';
        this.bgImage = 'assets/img/sidebar-bg/01.jpg';
        this.config = {};
    }
    ngOnInit() {
        this.config = this.configService.templateConf;
        this.bgColor = this.config.layout.sidebar.backgroundColor;
        if (!this.config.layout.sidebar.backgroundImage) {
            this.bgImage = '';
        }
        else {
            this.bgImage = this.config.layout.sidebar.backgroundImageURL;
        }
        if (this.config.layout.variant === "Transparent") {
            if (this.config.layout.sidebar.backgroundColor.toString().trim() === '') {
                this.bgColor = 'bg-glass-1';
            }
        }
        else {
            if (this.config.layout.sidebar.backgroundColor.toString().trim() === '') {
                this.bgColor = 'black';
            }
        }
        setTimeout(() => {
            if (this.config.layout.sidebar.size === 'sidebar-lg') {
                this.isSidebar_sm = false;
                this.isSidebar_lg = true;
            }
            else if (this.config.layout.sidebar.size === 'sidebar-sm') {
                this.isSidebar_sm = true;
                this.isSidebar_lg = false;
            }
            else {
                this.isSidebar_sm = false;
                this.isSidebar_lg = false;
            }
            this.iscollapsed = this.config.layout.sidebar.collapsed;
        }, 0);
    }
    ngAfterViewInit() {
        setTimeout(() => {
            if (this.config.layout.dir) {
                this.options.direction = this.config.layout.dir;
            }
            if (this.config.layout.variant === "Dark") {
                this.renderer.addClass(this.document.body, 'layout-dark');
            }
            else if (this.config.layout.variant === "Transparent") {
                this.renderer.addClass(this.document.body, 'layout-dark');
                this.renderer.addClass(this.document.body, 'layout-transparent');
                if (this.config.layout.sidebar.backgroundColor) {
                    this.renderer.addClass(this.document.body, this.config.layout.sidebar.backgroundColor);
                }
                else {
                    this.renderer.addClass(this.document.body, 'bg-glass-1');
                }
                this.bgColor = 'black';
                this.options.bgColor = 'black';
                this.bgImage = '';
                this.options.bgImage = '';
                this.bgImage = '';
                this.renderer.setAttribute(this.sidebarBgImage.nativeElement, 'style', 'display: none');
            }
        }, 0);
    }
    toggleHideSidebar($event) {
        setTimeout(() => {
            this.hideSidebar = $event;
        }, 0);
    }
    getOptions($event) {
        this.options = $event;
    }
};
FullLayoutComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidebarBgImage', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], FullLayoutComponent.prototype, "sidebarBgImage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appSidebar', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], FullLayoutComponent.prototype, "appSidebar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('wrapper', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], FullLayoutComponent.prototype, "wrapper", void 0);
FullLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-full-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./full-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/full-layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./full-layout.component.scss */ "./src/app/layouts/full/full-layout.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
        Document,
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], FullLayoutComponent);



/***/ }),

/***/ "./src/app/shared/animations/custom-animations.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/animations/custom-animations.ts ***!
  \********************************************************/
/*! exports provided: customAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAnimations", function() { return customAnimations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const customAnimations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('1 <=> 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200))
    ])
];


/***/ }),

/***/ "./src/app/shared/auth/auth-guard.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/auth/auth-guard.service.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/auth/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, _router) {
        this.authService = authService;
        this._router = _router;
    }
    canActivate(route, state) {
        if (state.url == '/login') {
            return true;
        }
        if (this.authService.isAuthenticated()) {
            return true;
        }
        // this._router.navigateByUrl('/login');
        // if(this.authService.isAuthenticated()){
        //   return true;
        // }
        // this._router.navigateByUrl('/login');
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/shared/auth/auth.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/auth/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _routes_server_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes/server-routes */ "./src/app/shared/routes/server-routes.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let AuthService = class AuthService {
    constructor(http, route) {
        this.http = http;
        this.route = route;
    }
    extractHeaders(res) {
        localStorage.setItem('token', res.body['access_token']);
    }
    injectHeaders() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json; charset=utf-8',
                'token': localStorage.getItem('token'),
            }),
        };
        return httpOptions;
    }
    signupUser(email, password) {
        //your code for signing up the new user
    }
    signinUser(email, password) {
        localStorage.clear();
        const body = {
            email: email,
            password: password,
        };
        return this.http.post(_routes_server_routes__WEBPACK_IMPORTED_MODULE_3__["signInURL"], body, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json; charset=utf-8',
            }), observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError))
            .subscribe((res) => {
            console.log(res);
            this.extractHeaders(res);
            this.route.navigateByUrl('/orders');
        });
    }
    handleError(error) {
        const errorMessage = error.error.errors[0];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(errorMessage);
    }
    logout() {
        localStorage.clear();
        this.route.navigate(['/login']);
    }
    isAuthenticated() {
        if (localStorage.getItem('client') == null) {
            return false;
        }
        if (localStorage.getItem('token-type') == null) {
            return false;
        }
        if (localStorage.getItem('access-token') == null) {
            return false;
        }
        if (localStorage.getItem('uid') == null) {
            return false;
        }
        if (localStorage.getItem('expiry') == null) {
            return false;
        }
        return true;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AuthService);



/***/ }),

/***/ "./src/app/shared/directives/sidebar.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/sidebar.directive.ts ***!
  \********************************************************/
/*! exports provided: SidebarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarDirective", function() { return SidebarDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SidebarDirective = class SidebarDirective {
    constructor(el, renderer, router, cd) {
        this.el = el;
        this.renderer = renderer;
        this.router = router;
        this.cd = cd;
        this.navlinks = [];
        this.activeLinks = [];
        this.toggleHideSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.activeRoute = this.router.url;
        this.innerWidth = window.innerWidth;
    }
    ngAfterViewInit() {
        const element = this.el.nativeElement;
        this.$wrapper = this.renderer.parentNode(this.el.nativeElement); // document.getElementsByClassName("wrapper")[0];
        const $sidebar_img_container = this.el.nativeElement.querySelector('.sidebar-background');
        const $sidebar_img = element.getAttribute("data-image");
        if ($sidebar_img_container.length !== 0 && $sidebar_img !== undefined) {
            this.renderer.setAttribute($sidebar_img_container, 'style', 'background-image: url("' + $sidebar_img + '")');
        }
        if (!this.$wrapper.classList.contains("nav-collapsed")) {
            this.expandActive();
        }
        if (this.innerWidth < 992) {
            this.renderer.removeClass(this.$wrapper, 'nav-collapsed');
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            this.toggleHideSidebar.emit(true);
        }
        this.cd.detectChanges();
    }
    onMouseOver(e) {
        if (this.$wrapper.classList.contains("nav-collapsed")) {
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            this.navlinks
                .filter(_ => _.navCollapsedOpen === true)
                .forEach((link) => {
                link.open = true;
                link.navCollapsedOpen = false;
            });
        }
    }
    onMouseOut(e) {
        if (this.$wrapper.classList.contains("nav-collapsed")) {
            this.renderer.addClass(this.$wrapper, 'menu-collapsed');
            this.navlinks
                .filter(_ => _.open === true)
                .forEach((link) => {
                link.open = false;
                link.navCollapsedOpen = true;
            });
        }
    }
    onClick(e) {
        if (e.target.parentElement.classList.contains("logo-text") ||
            e.target.parentElement.classList.contains("logo-img")) {
            this.activeLinks = [];
            this.activeRoute = this.router.url;
            this.expandActive();
            this.hideSidebar();
        }
        else if (e.target.parentElement.classList.contains("nav-close") ||
            e.target.classList.contains("nav-close")) {
            this.toggleHideSidebar.emit(true);
        }
    }
    onResize(event) {
        this.innerWidth = window.innerWidth;
        if (event.target.innerWidth < 992) {
            this.renderer.removeClass(this.$wrapper, 'nav-collapsed');
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            this.toggleHideSidebar.emit(true);
        }
        if (event.target.innerWidth > 992) {
            const toggleStatus = this.el.nativeElement;
            this.el.nativeElement.querySelector('.toggle-icon')
                .getAttribute("data-toggle");
            if (toggleStatus === "collapsed" &&
                this.$wrapper.classList.contains("nav-collapsed") &&
                this.$wrapper.classList.contains("menu-collapsed")) {
                this.$wrapper.classList.add("nav-collapsed");
                this.$wrapper.classList.add("menu-collapsed");
            }
            this.toggleHideSidebar.emit(false);
        }
    }
    // check outside click and close sidebar for smaller screen <992
    onOutsideClick(event) {
        if (this.innerWidth < 992) {
            let clickedComponent = event.target;
            let inside = false;
            do {
                if (clickedComponent === this.el.nativeElement) {
                    inside = true;
                }
                clickedComponent = clickedComponent.parentNode;
            } while (clickedComponent);
            if (!this.el.nativeElement.classList.contains("hide-sidebar") &&
                !inside &&
                !event.target.classList.contains("navbar-toggle")) {
                this.toggleHideSidebar.emit(true);
            }
        }
    }
    addLink(link) {
        this.navlinks.push(link);
    }
    getLinks() {
        return this.navlinks;
    }
    hideSidebar() {
        if (this.innerWidth < 992) {
            this.toggleHideSidebar.emit(true);
        }
    }
    expandActive() {
        this.navlinks
            .filter(_ => _.routePath === this.activeRoute)
            .forEach((link) => {
            link.isShown = true;
            if (link.level.toString().trim() === "3") {
                this.navlinks
                    .filter(_ => _.level.toString().trim() === "2" && _.title === link.parent)
                    .forEach((parentLink) => {
                    parentLink.open = true;
                    this.activeLinks.push(parentLink.title);
                    this.navlinks
                        .filter(_ => _.level.toString().trim() === "1" &&
                        _.title === parentLink.parent)
                        .forEach((superParentLink) => {
                        superParentLink.open = true;
                        this.activeLinks.push(superParentLink.title);
                        superParentLink.toggleEmit.emit(this.activeLinks);
                    });
                });
            }
            else if (link.level.toString().trim() === "2") {
                this.navlinks
                    .filter(_ => _.level.toString().trim() === "1" && _.title === link.parent)
                    .forEach((parentLink) => {
                    parentLink.open = true;
                    this.activeLinks.push(parentLink.title);
                    parentLink.toggleEmit.emit(this.activeLinks);
                });
            }
        });
    }
    toggleActiveList() {
        this.navlinks
            .filter(_ => _.level.toString().trim() === "3" && _.routePath !== this.activeRoute)
            .forEach((link) => {
            link.active = false;
        });
    }
    setIsShown(parentLink) {
        const childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(_ => _.level.toString().trim() === childLevel.toString().trim() &&
            _.parent === parentLink.title)
            .forEach((link) => {
            link.isShown = true;
            link.isHidden = false;
        });
    }
    setIsHidden(parentLink) {
        const childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(_ => _.level.toString().trim() === childLevel.toString().trim() &&
            _.parent === parentLink.title)
            .forEach((link) => {
            link.isShown = false;
            link.isHidden = true;
        });
    }
};
SidebarDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SidebarDirective.prototype, "toggleHideSidebar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseenter", ["$event"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], SidebarDirective.prototype, "onMouseOver", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseleave", ["$event"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], SidebarDirective.prototype, "onMouseOut", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], SidebarDirective.prototype, "onClick", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:resize", ["$event"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], SidebarDirective.prototype, "onResize", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:click", ["$event"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], SidebarDirective.prototype, "onOutsideClick", null);
SidebarDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebar]" }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], SidebarDirective);



/***/ }),

/***/ "./src/app/shared/directives/sidebaranchortoggle.directive.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/directives/sidebaranchortoggle.directive.ts ***!
  \********************************************************************/
/*! exports provided: SidebarAnchorToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarAnchorToggleDirective", function() { return SidebarAnchorToggleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebarlink.directive */ "./src/app/shared/directives/sidebarlink.directive.ts");



let SidebarAnchorToggleDirective = class SidebarAnchorToggleDirective {
    constructor(navlink) {
        this.navlink = navlink;
    }
    onClick() {
        this.navlink.toggle();
    }
};
SidebarAnchorToggleDirective.ctorParameters = () => [
    { type: _sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarLinkDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarLinkDirective"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], SidebarAnchorToggleDirective.prototype, "onClick", null);
SidebarAnchorToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[appSidebarAnchorToggle]"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarLinkDirective"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarLinkDirective"]])
], SidebarAnchorToggleDirective);



/***/ }),

/***/ "./src/app/shared/directives/sidebarlink.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/sidebarlink.directive.ts ***!
  \************************************************************/
/*! exports provided: SidebarLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLinkDirective", function() { return SidebarLinkDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebarlist.directive */ "./src/app/shared/directives/sidebarlist.directive.ts");
/* harmony import */ var _sidebar_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.directive */ "./src/app/shared/directives/sidebar.directive.ts");




let SidebarLinkDirective = class SidebarLinkDirective {
    constructor(sidebarList, sidebar, el) {
        this.el = el;
        this.toggleEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sidebarList = sidebarList;
        this.sidebar = sidebar;
    }
    get open() {
        return this._open;
    }
    set open(value) {
        this._open = value;
    }
    get navCollapsedOpen() {
        return this._navCollapsedOpen;
    }
    set navCollapsedOpen(value) {
        this._navCollapsedOpen = value;
    }
    get active() {
        return this._active;
    }
    set active(value) {
        this._active = value;
    }
    get isShown() {
        return this._isShown;
    }
    set isShown(value) {
        this._isShown = value;
    }
    get isHidden() {
        return this._isHidden;
    }
    set isHidden(value) {
        this._isHidden = value;
    }
    ngOnInit() {
        this.sidebar.addLink(this);
    }
    toggle() {
        this.sidebarList.activeLinks = [];
        this.sidebarList.setList(this.sidebar.getLinks());
        const classList = this.el.nativeElement.classList;
        if (this.level.toString().trim() === "3") {
            this.active = true;
            this.sidebarList.toggleActiveList(this);
            this.sidebar.hideSidebar();
        }
        if (this.level.toString().trim() === "1" && !classList.contains("has-sub")) {
            this.sidebarList.collapseOtherLinks(this);
        }
        if (classList.contains("has-sub") && classList.contains("open")) {
            this.sidebarList.collapse(this);
        }
        else {
            if (classList.contains("has-sub")) {
                this.sidebarList.expand(this);
            }
        }
    }
};
SidebarLinkDirective.ctorParameters = () => [
    { type: _sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarListDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarListDirective"],] }] },
    { type: _sidebar_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_sidebar_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarDirective"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], SidebarLinkDirective.prototype, "level", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SidebarLinkDirective.prototype, "classes", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SidebarLinkDirective.prototype, "parent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SidebarLinkDirective.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SidebarLinkDirective.prototype, "routePath", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SidebarLinkDirective.prototype, "toggleEmit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.open"),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], SidebarLinkDirective.prototype, "open", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.nav-collapsed-open"),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], SidebarLinkDirective.prototype, "navCollapsedOpen", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.active"),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], SidebarLinkDirective.prototype, "active", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.is-shown"),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], SidebarLinkDirective.prototype, "isShown", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.is-hidden"),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], SidebarLinkDirective.prototype, "isHidden", null);
SidebarLinkDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebarlink]" }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarListDirective"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sidebar_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarDirective"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarListDirective"],
        _sidebar_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarDirective"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], SidebarLinkDirective);



/***/ }),

/***/ "./src/app/shared/directives/sidebarlist.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/sidebarlist.directive.ts ***!
  \************************************************************/
/*! exports provided: SidebarListDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarListDirective", function() { return SidebarListDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarListDirective = class SidebarListDirective {
    constructor() {
        this.navlinks = [];
        this.activeLinks = [];
    }
    setList(list) {
        this.navlinks = list;
    }
    collapse(link) {
        link.open = false;
        this.setIsHidden(link);
        if (link.level.toString().trim() === "2") {
            this.activeLinks.push(this.navlinks
                .filter(_ => _.level.toString().trim() === "1" && _.open === true)[0].title);
        }
        link.toggleEmit.emit(this.activeLinks);
    }
    expand(link) {
        link.open = true;
        this.activeLinks.push(link.title);
        this.collapseOtherLinks(link);
        this.setIsShown(link);
        link.toggleEmit.emit(this.activeLinks);
    }
    toggleActiveList(openLink) {
        this.navlinks
            .filter(_ => _.level.toString().trim() === "3")
            .forEach((link) => {
            if (link !== openLink) {
                link.active = false;
            }
        });
    }
    collapseOtherLinks(openLink) {
        if (openLink.level.toString().trim() === "1") {
            this.navlinks
                .filter(_ => (_.level.toString().trim() === openLink.level.toString().trim() ||
                _.level.toString().trim() === "2") &&
                _.open === true)
                .forEach((link) => {
                if (link !== openLink) {
                    link.open = false;
                    this.setIsHidden(link);
                }
            });
        }
        else if (openLink.level.toString().trim() === "2") {
            this.activeLinks.push(this.navlinks
                .filter(_ => _.level.toString().trim() === "1" && _.open === true)[0].title);
            this.navlinks
                .filter(_ => _.level.toString().trim() === openLink.level.toString().trim() &&
                _.parent === openLink.parent &&
                _.open === true)
                .forEach((link) => {
                if (link !== openLink) {
                    link.open = false;
                    this.setIsHidden(link);
                }
            });
        }
    }
    setIsShown(parentLink) {
        const childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(_ => _.level.toString().trim() === childLevel.toString().trim() &&
            _.parent === parentLink.title)
            .forEach((link) => {
            link.isShown = true;
            link.isHidden = false;
        });
    }
    setIsHidden(parentLink) {
        const childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(_ => _.level.toString().trim() === childLevel.toString().trim() &&
            _.parent === parentLink.title)
            .forEach((link) => {
            link.isShown = false;
            link.isHidden = true;
        });
    }
};
SidebarListDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebarList]" })
], SidebarListDirective);



/***/ }),

/***/ "./src/app/shared/directives/sidebartoggle.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/sidebartoggle.directive.ts ***!
  \**************************************************************/
/*! exports provided: SidebarToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarToggleDirective", function() { return SidebarToggleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarToggleDirective = class SidebarToggleDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this._dataToggle = "expanded";
        this._toggleRight = true;
        this._toggleLeft = false;
        this.fireRefreshEventOnWindow = function () {
            const evt = document.createEvent("HTMLEvents");
            evt.initEvent("resize", true, false);
            window.dispatchEvent(evt);
        };
    }
    get dataToggle() {
        return this._dataToggle;
    }
    set dataToggle(value) {
        this._dataToggle = value;
    }
    get toggleRight() {
        return this._toggleRight;
    }
    set toggleRight(value) {
        this._toggleRight = value;
    }
    get toggleLeft() {
        return this._toggleLeft;
    }
    set toggleLeft(value) {
        this._toggleLeft = value;
    }
    ngAfterViewInit() {
        this.$wrapper = document.getElementsByClassName("wrapper")[0];
        this.compact_menu_checkbox = this.$wrapper.querySelector('.cz-compact-menu');
    }
    onClick(e) {
        if (this.dataToggle === "expanded") {
            this.dataToggle = "collapsed";
            this.renderer.addClass(this.$wrapper, 'nav-collapsed');
            if (this.compact_menu_checkbox) {
                this.compact_menu_checkbox.checked = true;
            }
        }
        else {
            this.dataToggle = "expanded";
            this.renderer.removeClass(this.$wrapper, 'nav-collapsed');
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            if (this.compact_menu_checkbox) {
                this.compact_menu_checkbox.checked = false;
            }
        }
        this.toggleLeft = !this.toggleLeft;
        this.toggleRight = !this.toggleRight;
        setTimeout(() => {
            this.fireRefreshEventOnWindow();
        }, 300);
    }
};
SidebarToggleDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("attr.data-toggle"),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], SidebarToggleDirective.prototype, "dataToggle", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.ft-toggle-right"),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], SidebarToggleDirective.prototype, "toggleRight", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.ft-toggle-left"),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], SidebarToggleDirective.prototype, "toggleLeft", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], SidebarToggleDirective.prototype, "onClick", null);
SidebarToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebarToggle]" }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], SidebarToggleDirective);



/***/ }),

/***/ "./src/app/shared/directives/toggle-fullscreen.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/toggle-fullscreen.directive.ts ***!
  \******************************************************************/
/*! exports provided: ToggleFullscreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullscreenDirective", function() { return ToggleFullscreenDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);



let ToggleFullscreenDirective = class ToggleFullscreenDirective {
    onClick() {
        if (screenfull__WEBPACK_IMPORTED_MODULE_2__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_2__["toggle"]();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ToggleFullscreenDirective.prototype, "onClick", null);
ToggleFullscreenDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appToggleFullscreen]'
    })
], ToggleFullscreenDirective);



/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
        //Variables
        this.currentDate = new Date();
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/config.service */ "./src/app/shared/services/config.service.ts");





let NavbarComponent = class NavbarComponent {
    constructor(translate, layoutService, configService) {
        this.translate = translate;
        this.layoutService = layoutService;
        this.configService = configService;
        this.currentLang = "en";
        this.toggleClass = "ft-maximize";
        this.placement = "bottom-right";
        this.isCollapsed = true;
        this.toggleHideSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.config = {};
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : "en");
    }
    ngOnInit() {
        this.config = this.configService.templateConf;
    }
    ngAfterViewInit() {
        if (this.config.layout.dir) {
            const dir = this.config.layout.dir;
            if (dir === "rtl") {
                this.placement = "bottom-left";
            }
            else if (dir === "ltr") {
                this.placement = "bottom-right";
            }
        }
    }
    ChangeLanguage(language) {
        this.translate.use(language);
    }
    ToggleClass() {
        if (this.toggleClass === "ft-maximize") {
            this.toggleClass = "ft-minimize";
        }
        else {
            this.toggleClass = "ft-maximize";
        }
    }
    toggleNotificationSidebar() {
        this.layoutService.emitChange(true);
    }
    toggleSidebar() {
        const appSidebar = document.getElementsByClassName("app-sidebar")[0];
        if (appSidebar.classList.contains("hide-sidebar")) {
            this.toggleHideSidebar.emit(false);
        }
        else {
            this.toggleHideSidebar.emit(true);
        }
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"] },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NavbarComponent.prototype, "toggleHideSidebar", void 0);
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-navbar",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"], _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/shared/notification-sidebar/notification-sidebar.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/notification-sidebar/notification-sidebar.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#notification-sidebar {\n  width: 400px;\n  right: -400px;\n  padding: 0;\n  background-color: #FFF;\n  z-index: 1051;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  height: 100vh;\n  -webkit-transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-left: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); }\n  #notification-sidebar.open {\n    right: 0; }\n  #notification-sidebar .notification-sidebar-content {\n    position: relative;\n    height: 100%;\n    padding: 10px; }\n  #notification-sidebar .notification-sidebar-content #timeline.timeline-left .timeline-item:before {\n      border: none; }\n  #notification-sidebar .notification-sidebar-content #timeline.timeline-left .timeline-item:after {\n      border: none; }\n  #notification-sidebar .notification-sidebar-content #settings .switch {\n      border: none; }\n  #notification-sidebar a.notification-sidebar-toggle {\n    background: #FFF;\n    color: theme-color(\"primary\");\n    display: block;\n    box-shadow: -3px 0px 8px rgba(0, 0, 0, 0.1); }\n  #notification-sidebar a.notification-sidebar-close {\n    color: #000; }\n  #notification-sidebar .notification-sidebar-close {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    padding: 7px;\n    width: auto;\n    z-index: 10; }\n  #notification-sidebar .notification-sidebar-toggle {\n    position: absolute;\n    top: 35%;\n    width: 54px;\n    height: 50px;\n    left: -54px;\n    text-align: center;\n    line-height: 50px;\n    cursor: pointer; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar {\n  left: -400px;\n  right: auto; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar.open {\n    left: 0;\n    right: auto; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar .notification-sidebar-close {\n    left: 10px;\n    right: auto; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar .notification-sidebar-toggle {\n    right: -54px;\n    left: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYWJsb2RpYXovRmxldC9mbGV0LWRhc2hib2FyZC9zcmMvYXBwL3NoYXJlZC9ub3RpZmljYXRpb24tc2lkZWJhci9ub3RpZmljYXRpb24tc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL25vdGlmaWNhdGlvbi1zaWRlYmFyL25vdGlmaWNhdGlvbi1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBWTtFQUNULGFBQWE7RUFDaEIsVUFBVTtFQUNQLHNCQUFzQjtFQUN6QixhQUFhO0VBQ1YsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsYUFBYTtFQUNiLGtFQUEwRDtFQUExRCwwREFBMEQ7RUFDMUQsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQiwwQ0FBMEM7RUFDMUMsc0NBQXNDLEVBQUE7RUFiMUM7SUFnQkUsUUFBUSxFQUFBO0VBaEJWO0lBc0JFLGtCQUFrQjtJQUNmLFlBQVk7SUFDWixhQUFhLEVBQUE7RUF4QmxCO01BOEJNLFlBQVcsRUFBQTtFQTlCakI7TUFpQ00sWUFBVyxFQUFBO0VBakNqQjtNQXlDSSxZQUFZLEVBQUE7RUF6Q2hCO0lBZ0RFLGdCQUFnQjtJQUNoQiw2QkFBNEI7SUFDNUIsY0FBYztJQUNYLDJDQUEyQyxFQUFBO0VBbkRoRDtJQXNESyxXQUFXLEVBQUE7RUF0RGhCO0lBeURFLGtCQUFrQjtJQUNmLFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXLEVBQUE7RUE5RGhCO0lBaUVFLGtCQUFrQjtJQUNmLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWUsRUFBQTtFQ3RCcEI7RURnQ0UsWUFBWTtFQUNaLFdBQVcsRUFBQTtFQzlCWDtJRGdDQyxPQUFPO0lBQ1AsV0FBVyxFQUFBO0VDOUJaO0lEaUNDLFVBQVU7SUFDVixXQUFXLEVBQUE7RUMvQlo7SURrQ0MsWUFBWTtJQUNaLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ub3RpZmljYXRpb24tc2lkZWJhci9ub3RpZmljYXRpb24tc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNub3RpZmljYXRpb24tc2lkZWJhcntcblx0d2lkdGg6IDQwMHB4O1xuICAgIHJpZ2h0OiAtNDAwcHg7XG5cdHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcblx0ei1pbmRleDogMTA1MTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHRyYW5zaXRpb246IHJpZ2h0IDAuNHMgY3ViaWMtYmV6aWVyKDAuMDUsIDAuNzQsIDAuMiwgMC45OSk7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuXHQmLm9wZW57XG5cdFx0cmlnaHQ6IDA7XG5cdH1cblxuXHRcblxuXHQubm90aWZpY2F0aW9uLXNpZGViYXItY29udGVudHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXHRoZWlnaHQ6IDEwMCU7XG4gICAgXHRwYWRkaW5nOiAxMHB4O1xuXG4gICAgXHQjdGltZWxpbmV7XG4gICAgXHRcdCYudGltZWxpbmUtbGVmdHtcbiAgICBcdFx0XHQudGltZWxpbmUtaXRlbXtcbiAgICBcdFx0XHRcdCY6YmVmb3Jle1xuXHRcdFx0XHRcdFx0Ym9yZGVyOm5vbmU7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0XHQmOmFmdGVye1xuXHRcdFx0XHRcdFx0Ym9yZGVyOm5vbmU7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdCNzZXR0aW5nc3tcblx0XHRcdC5zd2l0Y2h7XG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdGEubm90aWZpY2F0aW9uLXNpZGViYXItdG9nZ2xle1xuXHRcdGJhY2tncm91bmQ6ICNGRkY7XG5cdFx0Y29sb3I6dGhlbWUtY29sb3IoJ3ByaW1hcnknKTtcblx0XHRkaXNwbGF5OiBibG9jaztcbiAgICBcdGJveC1zaGFkb3c6IC0zcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cdH1cblx0YS5ub3RpZmljYXRpb24tc2lkZWJhci1jbG9zZSB7XG4gICAgXHRjb2xvcjogIzAwMDtcblx0fVxuXHQubm90aWZpY2F0aW9uLXNpZGViYXItY2xvc2V7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHQgICAgcmlnaHQ6IDEwcHg7XG5cdCAgICB0b3A6IDEwcHg7XG5cdCAgICBwYWRkaW5nOiA3cHg7XG5cdCAgICB3aWR0aDogYXV0bztcblx0ICAgIHotaW5kZXg6IDEwO1xuXHR9XG5cdC5ub3RpZmljYXRpb24tc2lkZWJhci10b2dnbGV7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHQgICAgdG9wOiAzNSU7XG5cdCAgICB3aWR0aDogNTRweDtcblx0ICAgIGhlaWdodDogNTBweDtcblx0ICAgIGxlZnQ6IC01NHB4O1xuXHQgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHQgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG5cdCAgICBjdXJzb3I6IHBvaW50ZXI7XG5cdH1cblx0XG5cblx0XG5cbn1cblxuW2Rpcj1cInJ0bFwiXSA6aG9zdCA6Om5nLWRlZXB7XG5cdCNub3RpZmljYXRpb24tc2lkZWJhcntcdFxuXHRcdGxlZnQ6IC00MDBweDtcdFxuXHRcdHJpZ2h0OiBhdXRvO1x0ICAgXG5cdFx0Ji5vcGVue1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHJpZ2h0OiBhdXRvO1xuXHRcdH1cblx0XHQubm90aWZpY2F0aW9uLXNpZGViYXItY2xvc2V7XG5cdFx0XHRsZWZ0OiAxMHB4O1xuXHRcdFx0cmlnaHQ6IGF1dG87XG5cdFx0fVxuXHRcdC5ub3RpZmljYXRpb24tc2lkZWJhci10b2dnbGV7XHRcblx0XHRcdHJpZ2h0OiAtNTRweDtcblx0XHRcdGxlZnQ6IGF1dG87XG5cdFx0fVx0XG5cdH1cbn0iLCIjbm90aWZpY2F0aW9uLXNpZGViYXIge1xuICB3aWR0aDogNDAwcHg7XG4gIHJpZ2h0OiAtNDAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIHotaW5kZXg6IDEwNTE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuNHMgY3ViaWMtYmV6aWVyKDAuMDUsIDAuNzQsIDAuMiwgMC45OSk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuICAjbm90aWZpY2F0aW9uLXNpZGViYXIub3BlbiB7XG4gICAgcmlnaHQ6IDA7IH1cbiAgI25vdGlmaWNhdGlvbi1zaWRlYmFyIC5ub3RpZmljYXRpb24tc2lkZWJhci1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7IH1cbiAgICAjbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNvbnRlbnQgI3RpbWVsaW5lLnRpbWVsaW5lLWxlZnQgLnRpbWVsaW5lLWl0ZW06YmVmb3JlIHtcbiAgICAgIGJvcmRlcjogbm9uZTsgfVxuICAgICNub3RpZmljYXRpb24tc2lkZWJhciAubm90aWZpY2F0aW9uLXNpZGViYXItY29udGVudCAjdGltZWxpbmUudGltZWxpbmUtbGVmdCAudGltZWxpbmUtaXRlbTphZnRlciB7XG4gICAgICBib3JkZXI6IG5vbmU7IH1cbiAgICAjbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNvbnRlbnQgI3NldHRpbmdzIC5zd2l0Y2gge1xuICAgICAgYm9yZGVyOiBub25lOyB9XG4gICNub3RpZmljYXRpb24tc2lkZWJhciBhLm5vdGlmaWNhdGlvbi1zaWRlYmFyLXRvZ2dsZSB7XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICBjb2xvcjogdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJveC1zaGFkb3c6IC0zcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cbiAgI25vdGlmaWNhdGlvbi1zaWRlYmFyIGEubm90aWZpY2F0aW9uLXNpZGViYXItY2xvc2Uge1xuICAgIGNvbG9yOiAjMDAwOyB9XG4gICNub3RpZmljYXRpb24tc2lkZWJhciAubm90aWZpY2F0aW9uLXNpZGViYXItY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHotaW5kZXg6IDEwOyB9XG4gICNub3RpZmljYXRpb24tc2lkZWJhciAubm90aWZpY2F0aW9uLXNpZGViYXItdG9nZ2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNSU7XG4gICAgd2lkdGg6IDU0cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGxlZnQ6IC01NHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuW2Rpcj1cInJ0bFwiXSA6aG9zdCA6Om5nLWRlZXAgI25vdGlmaWNhdGlvbi1zaWRlYmFyIHtcbiAgbGVmdDogLTQwMHB4O1xuICByaWdodDogYXV0bzsgfVxuICBbZGlyPVwicnRsXCJdIDpob3N0IDo6bmctZGVlcCAjbm90aWZpY2F0aW9uLXNpZGViYXIub3BlbiB7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogYXV0bzsgfVxuICBbZGlyPVwicnRsXCJdIDpob3N0IDo6bmctZGVlcCAjbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNsb3NlIHtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHJpZ2h0OiBhdXRvOyB9XG4gIFtkaXI9XCJydGxcIl0gOmhvc3QgOjpuZy1kZWVwICNub3RpZmljYXRpb24tc2lkZWJhciAubm90aWZpY2F0aW9uLXNpZGViYXItdG9nZ2xlIHtcbiAgICByaWdodDogLTU0cHg7XG4gICAgbGVmdDogYXV0bzsgfVxuIl19 */");

/***/ }),

/***/ "./src/app/shared/notification-sidebar/notification-sidebar.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/notification-sidebar/notification-sidebar.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NotificationSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSidebarComponent", function() { return NotificationSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");



let NotificationSidebarComponent = class NotificationSidebarComponent {
    constructor(elRef, renderer, layoutService) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.layoutService = layoutService;
        this.isOpen = false;
        this.layoutSub = layoutService.changeEmitted$.subscribe(value => {
            if (this.isOpen) {
                this.renderer.removeClass(this.sidebar.nativeElement, 'open');
                this.isOpen = false;
            }
            else {
                this.renderer.addClass(this.sidebar.nativeElement, 'open');
                this.isOpen = true;
            }
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    }
    onClose() {
        this.renderer.removeClass(this.sidebar.nativeElement, 'open');
        this.isOpen = false;
    }
};
NotificationSidebarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidebar', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], NotificationSidebarComponent.prototype, "sidebar", void 0);
NotificationSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification-sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/notification-sidebar/notification-sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification-sidebar.component.scss */ "./src/app/shared/notification-sidebar/notification-sidebar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]])
], NotificationSidebarComponent);



/***/ }),

/***/ "./src/app/shared/routes/content-layout.routes.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/routes/content-layout.routes.ts ***!
  \********************************************************/
/*! exports provided: CONTENT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_ROUTES", function() { return CONTENT_ROUTES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
const CONTENT_ROUTES = [
    {
        path: 'content-layout',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-content-layout-page-content-pages-module */ "pages-content-layout-page-content-pages-module").then(__webpack_require__.bind(null, /*! ../../pages/content-layout-page/content-pages.module */ "./src/app/pages/content-layout-page/content-pages.module.ts")).then(m => m.ContentPagesModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-login-page-login-module */ "pages-login-page-login-module").then(__webpack_require__.bind(null, /*! ../../pages/login-page/login.module */ "./src/app/pages/login-page/login.module.ts")).then(m => m.LoginModule)
    }
];


/***/ }),

/***/ "./src/app/shared/routes/full-layout.routes.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/routes/full-layout.routes.ts ***!
  \*****************************************************/
/*! exports provided: Full_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Full_ROUTES", function() { return Full_ROUTES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

//Route for content layout with sidebar, navbar and footer
const Full_ROUTES = [
    {
        path: 'changelog',
        loadChildren: () => __webpack_require__.e(/*! import() | changelog-changelog-module */ "changelog-changelog-module").then(__webpack_require__.bind(null, /*! ../../changelog/changelog.module */ "./src/app/changelog/changelog.module.ts")).then(m => m.ChangeLogModule)
    },
    {
        path: 'full-layout',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-full-layout-page-full-pages-module */ "pages-full-layout-page-full-pages-module").then(__webpack_require__.bind(null, /*! ../../pages/full-layout-page/full-pages.module */ "./src/app/pages/full-layout-page/full-pages.module.ts")).then(m => m.FullPagesModule)
    },
    {
        path: 'orders',
        loadChildren: () => Promise.all(/*! import() | pages-order-page-order-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-order-page-order-module")]).then(__webpack_require__.bind(null, /*! ../../pages/order-page/order.module */ "./src/app/pages/order-page/order.module.ts")).then(m => m.OrderModule)
    },
    {
        path: 'order-stats',
        loadChildren: () => Promise.all(/*! import() | pages-order-stats-page-order-stats-module */[__webpack_require__.e("default~pages-driver-stats-page-driver-stats-module~pages-order-stats-page-order-stats-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-order-stats-page-order-stats-module")]).then(__webpack_require__.bind(null, /*! ../../pages/order-stats-page/order-stats.module */ "./src/app/pages/order-stats-page/order-stats.module.ts")).then(m => m.OrderStatsModule)
    },
    {
        path: 'order-create',
        loadChildren: () => Promise.all(/*! import() | pages-order-create-page-order-create-module */[__webpack_require__.e("default~pages-drivers-map-drivers-map-module~pages-heat-map-page-heat-map-module~pages-order-create-~f98fc701"), __webpack_require__.e("common"), __webpack_require__.e("pages-order-create-page-order-create-module")]).then(__webpack_require__.bind(null, /*! ../../pages/order-create-page/order-create.module */ "./src/app/pages/order-create-page/order-create.module.ts")).then(m => m.OrderCreateModule)
    },
    {
        path: 'drivers-stats',
        loadChildren: () => Promise.all(/*! import() | pages-driver-stats-page-driver-stats-module */[__webpack_require__.e("default~pages-driver-stats-page-driver-stats-module~pages-order-stats-page-order-stats-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-driver-stats-page-driver-stats-module")]).then(__webpack_require__.bind(null, /*! ../../pages/driver-stats-page/driver-stats.module */ "./src/app/pages/driver-stats-page/driver-stats.module.ts")).then(m => m.DriverStatsModule)
    },
    {
        path: 'heat-map',
        loadChildren: () => Promise.all(/*! import() | pages-heat-map-page-heat-map-module */[__webpack_require__.e("default~pages-drivers-map-drivers-map-module~pages-heat-map-page-heat-map-module~pages-order-create-~f98fc701"), __webpack_require__.e("common"), __webpack_require__.e("pages-heat-map-page-heat-map-module")]).then(__webpack_require__.bind(null, /*! ../../pages/heat-map-page/heat-map.module */ "./src/app/pages/heat-map-page/heat-map.module.ts")).then(m => m.HeatMapModule)
    },
    {
        path: 'drivers-map',
        loadChildren: () => Promise.all(/*! import() | pages-drivers-map-drivers-map-module */[__webpack_require__.e("default~pages-drivers-map-drivers-map-module~pages-heat-map-page-heat-map-module~pages-order-create-~f98fc701"), __webpack_require__.e("common"), __webpack_require__.e("pages-drivers-map-drivers-map-module")]).then(__webpack_require__.bind(null, /*! ../../pages/drivers-map/drivers-map.module */ "./src/app/pages/drivers-map/drivers-map.module.ts")).then(m => m.HeatMapModule)
    }
];


/***/ }),

/***/ "./src/app/shared/routes/server-routes.ts":
/*!************************************************!*\
  !*** ./src/app/shared/routes/server-routes.ts ***!
  \************************************************/
/*! exports provided: serverURL, apiURL, signInURL, ordersURL, driversURL, ordersHourSortTime, ordersHourSortOrders, heatMapUrl, mostOrdersDay, mostOrdersWeek, inactivity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverURL", function() { return serverURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiURL", function() { return apiURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInURL", function() { return signInURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordersURL", function() { return ordersURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "driversURL", function() { return driversURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordersHourSortTime", function() { return ordersHourSortTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordersHourSortOrders", function() { return ordersHourSortOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heatMapUrl", function() { return heatMapUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mostOrdersDay", function() { return mostOrdersDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mostOrdersWeek", function() { return mostOrdersWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inactivity", function() { return inactivity; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const serverURL = 'https://server-mockup.herokuapp.com/';
const apiURL = 'https://api-dashb.herokuapp.com/';
const signInURL = apiURL + 'auth/login';
const ordersURL = serverURL + 'orders';
const driversURL = serverURL + 'users?role=delivery&merchant_id=1';
const ordersHourSortTime = apiURL + 'orders/ordersPerHour?sort=time';
const ordersHourSortOrders = apiURL + 'orders/ordersPerHour?sort=orders';
const heatMapUrl = apiURL + 'orders/heatMapDelivery';
const mostOrdersDay = apiURL + 'users/mostOrdersDay';
const mostOrdersWeek = apiURL + 'users/mostOrdersWeek';
const inactivity = apiURL + 'users/noDeliveryTime';


/***/ }),

/***/ "./src/app/shared/services/config.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/config.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConfigService = class ConfigService {
    constructor() {
        this.setConfigValue();
    }
    setConfigValue() {
        this.templateConf = {
            layout: {
                variant: 'Light',
                dir: 'ltr',
                sidebar: {
                    collapsed: false,
                    size: 'sidebar-md',
                    backgroundColor: "man-of-steel",
                    backgroundImage: true,
                    backgroundImageURL: 'assets/img/sidebar-bg/01.jpg'
                }
            }
        };
    }
};
ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ConfigService);



/***/ }),

/***/ "./src/app/shared/services/layout.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/layout.service.ts ***!
  \***************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LayoutService = class LayoutService {
    constructor() {
        this.emitChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.changeEmitted$ = this.emitChangeSource.asObservable();
    }
    emitChange(change) {
        this.emitChangeSource.next(change);
    }
};
LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LayoutService);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notification-sidebar/notification-sidebar.component */ "./src/app/shared/notification-sidebar/notification-sidebar.component.ts");
/* harmony import */ var _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/toggle-fullscreen.directive */ "./src/app/shared/directives/toggle-fullscreen.directive.ts");
/* harmony import */ var _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/sidebar.directive */ "./src/app/shared/directives/sidebar.directive.ts");
/* harmony import */ var _directives_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/sidebarlink.directive */ "./src/app/shared/directives/sidebarlink.directive.ts");
/* harmony import */ var _directives_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/sidebarlist.directive */ "./src/app/shared/directives/sidebarlist.directive.ts");
/* harmony import */ var _directives_sidebaranchortoggle_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/sidebaranchortoggle.directive */ "./src/app/shared/directives/sidebaranchortoggle.directive.ts");
/* harmony import */ var _directives_sidebartoggle_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/sidebartoggle.directive */ "./src/app/shared/directives/sidebartoggle.directive.ts");







//COMPONENTS




//DIRECTIVES






let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
            _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["NotificationSidebarComponent"],
            _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_11__["ToggleFullscreenDirective"],
            _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_12__["SidebarDirective"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"]
        ],
        declarations: [
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
            _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["NotificationSidebarComponent"],
            _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_11__["ToggleFullscreenDirective"],
            _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_12__["SidebarDirective"],
            _directives_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_13__["SidebarLinkDirective"],
            _directives_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_14__["SidebarListDirective"],
            _directives_sidebaranchortoggle_directive__WEBPACK_IMPORTED_MODULE_15__["SidebarAnchorToggleDirective"],
            _directives_sidebartoggle_directive__WEBPACK_IMPORTED_MODULE_16__["SidebarToggleDirective"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar-routes.config.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar-routes.config.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const ROUTES = [
    // {
    //     path: '/orders',title: 'Orders', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    // },
    // {
    //     path: '/full-layout', title: 'Full Layout', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    // },
    // {
    //     path: '/content-layout', title: 'Content Layout', icon: 'ft-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    // },
    {
        path: '', title: 'Orders', icon: 'ft-shopping-cart', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            {
                path: '/orders', title: 'Order List', icon: 'ft-clipboard', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/order-stats', title: 'Statistics', icon: 'ft-trending-up', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/order-create', title: 'Create Orders', icon: 'ft-plus-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            }
        ]
    },
    {
        path: '', title: 'Drivers', icon: 'icon-users', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            {
                path: '/drivers-stats', title: 'Statistics', icon: 'ft-trending-up', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
        ]
    },
    {
        path: '/heat-map', title: 'Heat Map', icon: 'ft-map', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/drivers-map', title: 'Drivers Location', icon: 'ft-map-pin', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    }
    // {
    //     path: '', title: 'Menu Levels', icon: 'ft-align-left', class: 'has-sub', badge: '1', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
    //     submenu: [
    //         { path: 'javascript:;', title: 'Second Level', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //         {
    //             path: '', title: 'Second Level Child', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    //             submenu: [
    //                 { path: 'javascript:;', title: 'Third Level 1.1', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //                 { path: 'javascript:;', title: 'Third Level 1.2', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     path: '/changelog', title: 'ChangeLog', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    // },
    // { path: 'https://pixinvent.com/apex-angular-4-bootstrap-admin-template/documentation', title: 'Documentation', icon: 'ft-folder', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    // { path: 'https://pixinvent.ticksy.com/', title: 'Support', icon: 'ft-life-buoy', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
];


/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-routes.config */ "./src/app/shared/sidebar/sidebar-routes.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _animations_custom_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animations/custom-animations */ "./src/app/shared/animations/custom-animations.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/config.service */ "./src/app/shared/services/config.service.ts");







let SidebarComponent = class SidebarComponent {
    constructor(elementRef, renderer, router, route, translate, configService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.configService = configService;
        this.activeTitles = [];
        this.nav_collapsed_open = false;
        this.logoUrl = 'assets/img/logo.png';
        this.config = {};
        if (this.depth === undefined) {
            this.depth = 0;
            this.expanded = true;
        }
    }
    ngOnInit() {
        this.config = this.configService.templateConf;
        this.menuItems = _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_2__["ROUTES"];
        if (this.config.layout.sidebar.backgroundColor === 'white') {
            this.logoUrl = 'assets/img/logo-dark.png';
        }
        else {
            this.logoUrl = 'assets/img/logo.png';
        }
    }
    ngAfterViewInit() {
        setTimeout(() => {
            if (this.config.layout.sidebar.collapsed != undefined) {
                if (this.config.layout.sidebar.collapsed === true) {
                    this.expanded = false;
                    this.renderer.addClass(this.toggleIcon.nativeElement, 'ft-toggle-left');
                    this.renderer.removeClass(this.toggleIcon.nativeElement, 'ft-toggle-right');
                    this.nav_collapsed_open = true;
                }
                else if (this.config.layout.sidebar.collapsed === false) {
                    this.expanded = true;
                    this.renderer.removeClass(this.toggleIcon.nativeElement, 'ft-toggle-left');
                    this.renderer.addClass(this.toggleIcon.nativeElement, 'ft-toggle-right');
                    this.nav_collapsed_open = false;
                }
            }
        }, 0);
    }
    toggleSlideInOut() {
        this.expanded = !this.expanded;
    }
    handleToggle(titles) {
        this.activeTitles = titles;
    }
    // NGX Wizard - skip url change
    ngxWizardFunction(path) {
        if (path.indexOf("forms/ngx") !== -1)
            this.router.navigate(["forms/ngx/wizard"], { skipLocationChange: false });
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('toggleIcon', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], SidebarComponent.prototype, "toggleIcon", void 0);
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sidebar",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html")).default,
        animations: _animations_custom_animations__WEBPACK_IMPORTED_MODULE_5__["customAnimations"]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
        _services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]])
], SidebarComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pablodiaz/Flet/flet-dashboard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map