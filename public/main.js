(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<!---<div class=\"container\">\r\n    <div class=\"row\"> -->\r\n        <div class=\"col-md-12\">     \r\n        <router-outlet></router-outlet>\r\n        <app-message></app-message>\r\n<app-footer></app-footer>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TECLI1819-Explorer-bluecloud';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: firebaseConfig, HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_actor_actor_list_actor_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/actor/actor-list/actor-list.component */ "./src/app/components/actor/actor-list/actor-list.component.ts");
/* harmony import */ var _components_trip_trip_list_trip_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/trip/trip-list/trip-list.component */ "./src/app/components/trip/trip-list/trip-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_security_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/security/register/register.component */ "./src/app/components/security/register/register.component.ts");
/* harmony import */ var _components_security_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/security/login/login.component */ "./src/app/components/security/login/login.component.ts");
/* harmony import */ var _components_master_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/master/header/header.component */ "./src/app/components/master/header/header.component.ts");
/* harmony import */ var _components_master_message_message_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/master/message/message.component */ "./src/app/components/master/message/message.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_shared_translatable_translatable_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/shared/translatable/translatable.component */ "./src/app/components/shared/translatable/translatable.component.ts");
/* harmony import */ var _components_master_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/master/footer/footer.component */ "./src/app/components/master/footer/footer.component.ts");
/* harmony import */ var _components_shared_home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/shared/home/home.component */ "./src/app/components/shared/home/home.component.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _components_trip_trip_display_trip_display_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/trip/trip-display/trip-display.component */ "./src/app/components/trip/trip-display/trip-display.component.ts");
/* harmony import */ var _components_trip_trip_edit_trip_edit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/trip/trip-edit/trip-edit.component */ "./src/app/components/trip/trip-edit/trip-edit.component.ts");
/* harmony import */ var _components_shared_localized_data_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/shared/localized-data.pipe */ "./src/app/components/shared/localized-data.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























// Initialize Firebase
var firebaseConfig = {
    apiKey: 'AIzaSyAAaFX9STVzcDkmbr9_GE920p6H-aeqnR4',
    authDomain: 'bluecloud-client-2018.firebaseapp.com',
    databaseURL: 'https://bluecloud-client-2018.firebaseio.com',
    projectId: 'bluecloud-client-2018',
    storageBucket: 'bluecloud-client-2018.appspot.com',
    messagingSenderId: '525014120497'
};
firebase__WEBPACK_IMPORTED_MODULE_22__["initializeApp"](firebaseConfig);
Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_3___default.a, 'es');
// Esta función nos permite crear un nuevo loader que usaremos para hacer las traducciones
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__["TranslateHttpLoader"](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_actor_actor_list_actor_list_component__WEBPACK_IMPORTED_MODULE_5__["ActorListComponent"],
                _components_trip_trip_list_trip_list_component__WEBPACK_IMPORTED_MODULE_6__["TripListComponent"],
                _components_security_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _components_security_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_master_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _components_master_message_message_component__WEBPACK_IMPORTED_MODULE_11__["MessageComponent"],
                _components_shared_translatable_translatable_component__WEBPACK_IMPORTED_MODULE_18__["TranslatableComponent"],
                _components_master_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
                _components_shared_home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
                _components_trip_trip_display_trip_display_component__WEBPACK_IMPORTED_MODULE_23__["TripDisplayComponent"],
                _components_trip_trip_edit_trip_edit_component__WEBPACK_IMPORTED_MODULE_24__["TripEditComponent"],
                _components_shared_localized_data_pipe__WEBPACK_IMPORTED_MODULE_25__["LocalizedDataPipe"]
            ],
            imports: [
                _app_routes__WEBPACK_IMPORTED_MODULE_14__["routes"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(firebaseConfig),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"]]
                    }
                })
            ],
            providers: [angularfire2_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuth"], _services_message_service__WEBPACK_IMPORTED_MODULE_21__["MessageService"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuth"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_security_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/security/register/register.component */ "./src/app/components/security/register/register.component.ts");
/* harmony import */ var _components_security_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/security/login/login.component */ "./src/app/components/security/login/login.component.ts");
/* harmony import */ var _components_shared_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/shared/home/home.component */ "./src/app/components/shared/home/home.component.ts");
/* harmony import */ var _components_trip_trip_list_trip_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/trip/trip-list/trip-list.component */ "./src/app/components/trip/trip-list/trip-list.component.ts");





var appRoutes = [
    { path: 'home', component: _components_shared_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: 'login', component: _components_security_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { path: 'register', component: _components_security_register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"] },
    { path: '',
        redirectTo: '/register',
        pathMatch: 'full'
    },
    { path: 'TripList', component: _components_trip_trip_list_trip_list_component__WEBPACK_IMPORTED_MODULE_4__["TripListComponent"] },
    { path: '',
        redirectTo: '/TripList',
        pathMatch: 'full'
    }
];
var routes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/actor/actor-list/actor-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/actor/actor-list/actor-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/actor/actor-list/actor-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/actor/actor-list/actor-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\r\n  <thead>\r\n  <tr>\r\n    <th scope=\"col\">#</th>\r\n    <th scope=\"col\">Name</th>\r\n    <th scope=\"col\">Surname</th>\r\n    <th scope=\"col\">Email</th>\r\n    <th scope=\"col\">Phone</th>\r\n    <th scope=\"col\">Address</th>\r\n    <th scope=\"col\">Role</th>\r\n    <th scope=\"col\">preferredLanguage</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr *ngFor=\"let actor of actors; let i = index\">\r\n    <th scope=\"row\">{{ i + 1 }}</th>\r\n    <td>{{ actor.name }}</td>\r\n    <td>{{ actor.surname }}</td>\r\n    <td>{{ actor.email }}</td>\r\n    <td>{{ actor.address }}</td>\r\n    <td>{{ actor.phone }}</td>\r\n    <td>{{ actor.role }}</td>\r\n    <td>{{ actor.preferredLanguage }}</td>\r\n    \r\n  </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/components/actor/actor-list/actor-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/actor/actor-list/actor-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: ActorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorListComponent", function() { return ActorListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_actor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/actor.model */ "./src/app/models/actor.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActorListComponent = /** @class */ (function () {
    function ActorListComponent() {
    }
    ActorListComponent.prototype.ngOnInit = function () {
        this.actors = new Array();
        var actor = new _models_actor_model__WEBPACK_IMPORTED_MODULE_1__["Actor"]();
        actor.name = 'Miguel';
        actor.surname = 'Sanchez';
        actor.password = '123';
        //  actor.email = 'yerllichanell@gmail.com';
        actor.phone = '633755886';
        //  actor.address = 'C/Alvarado';
        //   actor.role = 'Explorer';
        actor.preferredLanguage = 'es';
        this.actors.push(actor);
    };
    ActorListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-actor-list',
            template: __webpack_require__(/*! ./actor-list.component.html */ "./src/app/components/actor/actor-list/actor-list.component.html"),
            styles: [__webpack_require__(/*! ./actor-list.component.css */ "./src/app/components/actor/actor-list/actor-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ActorListComponent);
    return ActorListComponent;
}());



/***/ }),

/***/ "./src/app/components/master/footer/footer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/master/footer/footer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-footer{\r\n    \r\n    \r\n   \r\n    \r\n    \r\n    margin-top: 50px;\r\n}"

/***/ }),

/***/ "./src/app/components/master/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/master/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\r\n<div style=\"background-color: #d1d2f0;\">\r\n<footer class=\"page-footer font-small unique-color-dark\">\r\n\r\n    <div style=\"background-color: #696bfd;\">\r\n      <div class=\"container\">\r\n\r\n        <!-- Grid row-->\r\n        <div class=\"row py-4 d-flex align-items-center\">\r\n\r\n          <!-- Grid column -->\r\n          <div class=\"col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0\">\r\n            <h6 class=\"mb-0\">{{'footer.social.networks' | translate}}</h6>\r\n          </div>\r\n          <!-- Grid column -->\r\n\r\n          <!-- Grid column -->\r\n          <div class=\"col-md-6 col-lg-7 text-center text-md-right\">\r\n\r\n            <!-- Facebook -->\r\n            <a class=\"fb-ic\">\r\n              <i class=\"fa fa-facebook-f white-text mr-4\"> </i>\r\n            </a>\r\n            <!-- Twitter -->\r\n            <a class=\"tw-ic\">\r\n              <i class=\"fa fa-twitter white-text mr-4\"> </i>\r\n            </a>\r\n            <!-- Google +-->\r\n            <a class=\"gplus-ic\">\r\n              <i class=\"fa fa-youtube white-text mr-4\"> </i>\r\n            </a>\r\n            <!--Linkedin -->\r\n            <a class=\"li-ic\">\r\n              <i class=\"fa fa-linkedin white-text mr-4\"> </i>\r\n            </a>\r\n            <!--Instagram-->\r\n            <a class=\"ins-ic\">\r\n              <i class=\"fa fa-instagram white-text\"> </i>\r\n            </a>\r\n\r\n          </div>\r\n          <!-- Grid column -->\r\n\r\n        </div>\r\n        <!-- Grid row-->\r\n\r\n      </div>\r\n    </div>\r\n\r\n    \r\n    <!-- Footer Links -->\r\n\r\n    \r\n    \r\n    <div class=\"container text-center text-md-left mt-5\">\r\n\r\n      <!-- Grid row -->\r\n      <div class=\"row mt-3\">\r\n\r\n        <!-- Grid column -->\r\n        <div class=\"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4\">\r\n\r\n          <!-- Content -->\r\n          <h6 class=\"text-uppercase font-weight-bold\">Acme Explorer</h6>\r\n          <hr class=\"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;\">\r\n          <p>{{'footer.empresa' | translate}}</p>\r\n\r\n        </div>\r\n        <!-- Grid column -->\r\n\r\n        <!-- Grid column -->\r\n        <div class=\"col-md-2 col-lg-2 col-xl-3 mx-auto mb-4\">\r\n<!---\r\n         \r\n          <h6 class=\"text-uppercase font-weight-bold\">Products</h6>\r\n          <hr class=\"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;\">\r\n          <p>\r\n            <a href=\"#!\">MDBootstrap</a>\r\n          </p>\r\n          <p>\r\n            <a href=\"#!\">MDWordPress</a>\r\n          </p>\r\n          <p>\r\n            <a href=\"#!\">BrandFlow</a>\r\n          </p>\r\n          <p>\r\n            <a href=\"#!\">Bootstrap Angular</a>\r\n          </p>\r\n\r\n        </div>\r\n       \r\n        <div class=\"col-md-3 col-lg-2 col-xl-2 mx-auto mb-4\">-->\r\n\r\n          <!-- Links -->\r\n          <h6 class=\"text-uppercase font-weight-bold\">{{'footer.information' | translate}}</h6>\r\n          <hr class=\"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;\">\r\n          <p>\r\n            <a href=\"/terms-and-conditions\">{{ 'footer.terms' | translate }}</a>\r\n          </p>\r\n          \r\n          <p>\r\n              <a class=\"footer-company-name\">Acme-Explorer &copy; {{ today }} </a>\r\n          </p>\r\n          <p>\r\n              <a> {{'footer.visitors' | translate }}:</a> {{ numClients }}\r\n          </p>\r\n\r\n        </div>\r\n        <!-- Grid column -->\r\n\r\n        <!-- Grid column -->\r\n        <div class=\"col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4\">\r\n\r\n          <!-- Links -->\r\n          <h6 class=\"text-uppercase font-weight-bold\">{{'footer.contact' | translate}}</h6>\r\n          <hr class=\"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;\">\r\n          <p>\r\n            <i class=\"fa fa-home mr-3\"></i> New York, NY 10012, US</p>\r\n          <p>\r\n            <i class=\"fa fa-envelope mr-3\"></i> <a href=\"mailto:support@acme-explorer.com\">support@acme-explorer.com\r\n              </a></p>\r\n          <p>\r\n            <i class=\"fa fa-phone mr-3\"></i> + 01 234 567 88</p>\r\n          \r\n\r\n        </div>\r\n        <!-- Grid column -->\r\n\r\n      </div>\r\n      <!-- Grid row -->\r\n\r\n    </div>\r\n   \r\n\r\n  </footer>\r\n  <!-- Footer -->\r\n</div>"

/***/ }),

/***/ "./src/app/components/master/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/master/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_translatable_translatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/translatable/translatable.component */ "./src/app/components/shared/translatable/translatable.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function (_super) {
    __extends(FooterComponent, _super);
    function FooterComponent(translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.translateService = translateService;
        return _this;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.today = Date.now();
        this.numClients = 1232222243;
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/master/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/master/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], FooterComponent);
    return FooterComponent;
}(_shared_translatable_translatable_component__WEBPACK_IMPORTED_MODULE_1__["TranslatableComponent"]));



/***/ }),

/***/ "./src/app/components/master/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/master/header/header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/master/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/master/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">\r\n    <img src=\"../../../../assets/HeaderLogo.png\" width=\"70\" height=\"50\" class=\"d-inline-block align-top\" alt=\"\">\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          {{'header.trips'|translate}}\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" routerLink=\"/TripList\">{{'header.list.trips'|translate}}</a>         \r\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n        </div>\r\n      </li>\r\n     <!--<li class=\"nav-item\">\r\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n      </li> -->\r\n    </ul>\r\n    <form class=\"form-inline mx-auto\">\r\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"{{'header.search'|translate}}\" aria-label=\"Search\">\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">{{'header.search'|translate}}</button>\r\n    </form>\r\n\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item active\">\r\n        <button (click)=\"changeLanguage('en')\" type=\"submit\"class=\"btn-sm btn-primary mr-1\" >EN</button>\r\n        <button (click)=\"changeLanguage('es')\" type=\"submit\" class=\"btn-sm btn-primary mr-1\">ES</button>\r\n      </li>\r\n     <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/register\">{{ 'actor.register' | translate}}</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/login\">{{'security.login' | translate}}</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" style=\"cursor:pointer\" (click)=\"logout()\"> {{'security.logout' | translate}} </a>\r\n      </li> \r\n    </ul>\r\n\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/master/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/master/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _shared_translatable_translatable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/translatable/translatable.component */ "./src/app/components/shared/translatable/translatable.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function (_super) {
    __extends(HeaderComponent, _super);
    function HeaderComponent(translateService, messageService, authservice) {
        var _this = _super.call(this, translateService) || this;
        _this.translateService = translateService;
        _this.messageService = messageService;
        _this.authservice = authservice;
        return _this;
    }
    HeaderComponent.prototype.changeLanguage = function (language) {
        _super.prototype.changeLanguage.call(this, language);
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.authservice.logout()
            .then(function (_) {
            _this.messageService.notifyMessage('messages.auth.logout', 'alert alert-success');
        })
            .catch(function (error) {
            _this.messageService.notifyMessage('errorMessages.auth.logout.failed', 'alert alert-danger');
            console.log(error);
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/master/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/master/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            src_app_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}(_shared_translatable_translatable_component__WEBPACK_IMPORTED_MODULE_3__["TranslatableComponent"]));



/***/ }),

/***/ "./src/app/components/master/message/infomessage.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/master/message/infomessage.ts ***!
  \**********************************************************/
/*! exports provided: InfoMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoMessage", function() { return InfoMessage; });
var InfoMessage = /** @class */ (function () {
    function InfoMessage(code, cssClass) {
        this.code = code;
        this.cssClass = cssClass;
    }
    return InfoMessage;
}());



/***/ }),

/***/ "./src/app/components/master/message/message.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/master/message/message.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/master/message/message.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/master/message/message.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"{{cssClass}}\" role=\"alert\"\r\n      *ngIf=\"code != null && code.length > 0\r\n          && showMessage\">\r\n      {{ code | translate }}<br/>\r\n</div>"

/***/ }),

/***/ "./src/app/components/master/message/message.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/master/message/message.component.ts ***!
  \****************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_translatable_translatable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/translatable/translatable.component */ "./src/app/components/shared/translatable/translatable.component.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/message.service */ "./src/app/services/message.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessageComponent = /** @class */ (function (_super) {
    __extends(MessageComponent, _super);
    function MessageComponent(translateService, messageService) {
        var _this = _super.call(this, translateService) || this;
        _this.translateService = translateService;
        _this.messageService = messageService;
        _this.showMessage = true;
        return _this;
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.messageService.message.subscribe(function (data) {
            if (data) {
                _this.code = data.code;
                _this.cssClass = data.cssClass;
                _this.showMessage = true;
            }
            else {
                _this.showMessage = false;
            }
        });
    };
    MessageComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/components/master/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/components/master/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], MessageComponent);
    return MessageComponent;
}(_shared_translatable_translatable_component__WEBPACK_IMPORTED_MODULE_2__["TranslatableComponent"]));



/***/ }),

/***/ "./src/app/components/security/login/login.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/security/login/login.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\r\n    width: 500px;\r\n    margin: 200px 0;\r\n}\r\n\r\n.shape1{\r\n    position: relative;\r\n    height: 150px;\r\n    width: 150px;\r\n    background-color: #0074d9;\r\n    border-radius: 80px;\r\n    float: left;\r\n    margin-right: -50px;\r\n}\r\n\r\n.shape2 {\r\n    position: relative;\r\n    height: 150px;\r\n    width: 150px;\r\n    background-color: #0074d9;\r\n    border-radius: 80px;\r\n    margin-top: -30px;\r\n    float: left;\r\n}\r\n\r\n.shape3 {\r\n    position: relative;\r\n    height: 150px;\r\n    width: 150px;\r\n    background-color: #0074d9;\r\n    border-radius: 80px;\r\n    margin-top: -30px;\r\n    float: left;\r\n    margin-left: -31px;\r\n}\r\n\r\n.shape4 {\r\n    position: relative;\r\n    height: 150px;\r\n    width: 150px;\r\n    background-color: #0074d9;\r\n    border-radius: 80px;\r\n    margin-top: -25px;\r\n    float: left;\r\n    margin-left: -32px;\r\n}\r\n\r\n.shape5 {\r\n    position: relative;\r\n    height: 150px;\r\n    width: 150px;\r\n    background-color: #0074d9;\r\n    border-radius: 80px;\r\n    float: left;\r\n    margin-right: -48px;\r\n    margin-left: -32px;\r\n    margin-top: -30px;\r\n}\r\n\r\n.shape6 {\r\n    position: relative;\r\n    height: 150px;\r\n    width: 150px;\r\n    background-color: #0074d9;\r\n    border-radius: 80px;\r\n    float: left;\r\n    margin-right: -20px;\r\n    margin-top: -35px;\r\n}\r\n\r\n.shape7 {\r\n    position: relative;\r\n    height: 150px;\r\n    width: 150px;\r\n    background-color: #0074d9;\r\n    border-radius: 80px;\r\n    float: left;\r\n    margin-right: -20px;\r\n    margin-top: -57px;\r\n}\r\n\r\n.float {\r\n    position: absolute;\r\n    z-index: 2;\r\n}\r\n\r\n.form {\r\n    margin-left: 145px;\r\n}"

/***/ }),

/***/ "./src/app/components/security/login/login.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/security/login/login.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\r\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\r\n<!------ Include the above in your HEAD tag ---------->\r\n\r\n<div class=\"container\">\r\n        <div id=\"login-row\" class=\"row justify-content-center align-items-center\">\r\n            <div id=\"login-column\" class=\"col-md-6\">\r\n                <div class=\"box\">\r\n                    <div class=\"shape1\"></div>\r\n                    <div class=\"shape2\"></div>\r\n                    <div class=\"shape3\"></div>\r\n                    <div class=\"shape4\"></div>\r\n                    <div class=\"shape5\"></div>\r\n                    <div class=\"shape6\"></div>\r\n                    <div class=\"shape7\"></div>\r\n                    <div class=\"float\">\r\n                        <form class=\"form\" (ngSubmit)=\"onLogin(f)\" #f=\"ngForm\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-white\"\r\n                                for=\"email\">{{'actor.email' | translate }}:</label><br>\r\n                                <input class=\"form-control\" type=\"email\" \r\n                                id=\"email\" name=\"email\" placeholder=\"{{'security.enter.email' | translate }}\"\r\n                                ngModel>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-white\"\r\n                                for=\"pwd\">{{'actor.password' | translate }}:</label><br>\r\n                                <input class=\"form-control\" type=\"password\" \r\n                                id=\"pwd\" name=\"password\" placeholder=\"{{'security.enter.password' | translate }}\"\r\n                                ngModel>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <button type=\"submit\" class=\"btn btn-info btn-md\" >{{'security.login'|translate}}</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/components/security/login/login.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/security/login/login.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_translatable_translatable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/translatable/translatable.component */ "./src/app/components/shared/translatable/translatable.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/message.service */ "./src/app/services/message.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(authService, translateService, messageService) {
        var _this = _super.call(this, translateService) || this;
        _this.authService = authService;
        _this.translateService = translateService;
        _this.messageService = messageService;
        return _this;
    }
    LoginComponent.prototype.onLogin = function (form) {
        var _this = this;
        // Recogemos las variables email y password del formulario
        var email = form.value.email;
        var password = form.value.password;
        // Operación asíncrona en donde tengo que esperar que Firebase compruebe que el usuario existe en la BBDD y me devuelva una promesa
        this.authService.login(email, password).then(function (_) {
            // Reseteamos el formulario
            form.reset();
            _this.email = email;
            // Si firebase me devuelve algún código de error lo capturamos
        }).catch(function (error) {
            console.log(error);
            // Firebase devuelve los mensajes de error con el caracter "/" y con el caracter "-" que nosotros aquí reemplazamos por "."
            // El segundo parámetro que enviamos al método es el "cssClass" y sirve para indicar el estilo del error: info, warning, danger, etc
            _this.messageService.notifyMessage('errorMessages.' + error.code.replace(/\//gi, '.').replace(/\-/gi, '.'), 'alert alert-danger');
        });
    };
    LoginComponent.prototype.onLogout = function () {
        var _this = this;
        this.authService.logout()
            .then(function (_) {
            _this.email = null;
        }).catch(function (error) {
            console.log(error);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/security/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/security/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], LoginComponent);
    return LoginComponent;
}(_shared_translatable_translatable_component__WEBPACK_IMPORTED_MODULE_2__["TranslatableComponent"]));



/***/ }),

/***/ "./src/app/components/security/register/register.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/security/register/register.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.divider-text {\r\n    position: relative;\r\n    text-align: center;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n.divider-text span {\r\n    padding: 7px;\r\n    font-size: 12px;\r\n    position: relative;   \r\n    z-index: 2;\r\n}\r\n.divider-text:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 100%;\r\n    border-bottom: 1px solid #ddd;\r\n    top: 55%;\r\n    left: 0;\r\n    z-index: 1;\r\n}\r\n.btn-facebook {\r\n    background-color: #405D9D;\r\n    color: #fff;\r\n}\r\n.btn-twitter {\r\n    background-color: #42AEEC;\r\n    color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/components/security/register/register.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/security/register/register.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\r\n<!------ Include the above in your HEAD tag ---------->\r\n\r\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.0.8/css/all.css\">\r\n\r\n\r\n<div class=\"container\">\r\n\t<hr>\r\n\r\n\t<div class=\"card bg-light\">\r\n\t\t<article class=\"card-body mx-auto\" style=\"max-width: 400px;\">\r\n\t\t\t<h4 class=\"card-title mt-3 text-center\">{{'actor.create.account'|translate}}</h4>\r\n\t\t\t<p class=\"text-center\">{{'actor.started'|translate}}</p>\r\n\t\t\t<p></p>\r\n\t\t\t<p class=\"divider-text\">\r\n\t\t\t\t<span class=\"bg-light\">OR</span>\r\n\t\t\t</p>\r\n\t\t\t<form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegister()\">\r\n\r\n\t\t\t\t<div class=\"form-group input-group\">\r\n\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fa fa-user\"></i> </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<input formControlName=\"name\" class=\"form-control\" placeholder=\"{{'actor.name'|translate}}\" type=\"text\">\r\n\t\t\t\t\t<input formControlName=\"surname\" class=\"form-control\" placeholder=\"{{'actor.surname'|translate}}\" type=\"text\">\r\n\t\t\t\t</div> <!-- form-group// -->\r\n\r\n\t\t\t\t<div class=\"form-group input-group\">\r\n\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fa fa-envelope\"></i> </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<input formControlName=\"email\" class=\"form-control\" placeholder=\"{{'actor.email'|translate}}\" type=\"email\">\r\n\r\n\t\t\t\t</div> <!-- form-group// -->\r\n\r\n\t\t\t\t<div class=\"form-group input-group\">\r\n\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fa fa-building\"></i> </span>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<input formControlName=\"address\" class=\"form-control\" placeholder=\"{{'actor.address'|translate}}\" type=\"address\">\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group input-group\">\r\n\r\n\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fa fa-phone\"></i> </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<select formControlName=\"countrycode\" class=\"custom-select\" style=\"max-width: 120px;\">\r\n\t\t\t\t\t\t<option selected=\"\">+34</option>\r\n\t\t\t\t\t\t<option value=\"1\">+1</option>\r\n\t\t\t\t\t\t<option value=\"2\">+198</option>\r\n\t\t\t\t\t\t<option value=\"3\">+701</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t<input formControlName=\"phone\" class=\"form-control\" placeholder=\"{{'actor.phone'|translate}}\" type=\"text\">\r\n\t\t\t\t</div> <!-- form-group// -->\r\n\t\t\t\t<div class=\"form-group input-group\">\r\n\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t<span  class=\"input-group-text\"> <i class=\"fa fa-user\"></i> </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<select formControlName=\"role\" class=\"form-control\">\r\n\t\t\t\t\t\t<option *ngFor=\"let role of roleList\" [value]=\"role\">{{role}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div> <!-- form-group end.// -->\r\n\t\t\t\t<div class=\"form-group input-group\">\r\n\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<input formControlName=\"password\" class=\"form-control\" placeholder=\"{{'actor.create.pass'|translate}}\"\r\n\t\t\t\t\t\ttype=\"password\">\r\n\t\t\t\t</div> <!-- form-group// -->\r\n\t\t\t\t<div class=\"form-group input-group\">\r\n\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<input class=\"form-control\" placeholder=\"{{'actor.repeat.pass'|translate}}\" type=\"password\">\r\n\t\t\t\t</div> <!-- form-group// -->\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block\"> {{'actor.create.account'|translate}} </button>\r\n\t\t\t\t</div> <!-- form-group// -->\r\n\t\t\t\t<!--   <p class=\"text-center\">Have an account? <a href=\"\">Log In</a> </p>      -->\r\n\t\t\t</form>\r\n\t\t</article>\r\n\t</div> <!-- card.// -->\r\n\r\n</div>\r\n<!--container end.//-->"

/***/ }),

/***/ "./src/app/components/security/register/register.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/security/register/register.component.ts ***!
  \********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_translatable_translatable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/translatable/translatable.component */ "./src/app/components/shared/translatable/translatable.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function (_super) {
    __extends(RegisterComponent, _super);
    function RegisterComponent(translateService, formBuilder, authService, router) {
        var _this = 
        // const roleList = authService.getRole();
        _super.call(this, translateService) || this;
        _this.translateService = translateService;
        _this.formBuilder = formBuilder;
        _this.authService = authService;
        _this.router = router;
        _this.submitted = false;
        _this.roleList = ['Administrator', 'Manager', 'Explorer'];
        return _this;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            name: [''],
            surname: [''],
            password: [''],
            email: [''],
            countrycode: [''],
            phone: [''],
            address: [''],
            role: [''],
            preferredLanguage: [''],
        });
    };
    RegisterComponent.prototype.onRegister = function () {
        this.submitted = true;
        if (this.registerForm.valid) {
            console.log('Hola Mundo');
            console.log(this.registerForm.value);
            this.authService.registerUser(this.registerForm.value)
                .then(function (res) {
                console.log(res);
                //   this.router.navigate(['/login']);
            }, function (err) { console.log(err + 'Real error'); });
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/security/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/security/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}(_shared_translatable_translatable_component__WEBPACK_IMPORTED_MODULE_4__["TranslatableComponent"]));



/***/ }),

/***/ "./src/app/components/shared/home/home.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/shared/home/home.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centrado{\r\n\tmargin:10px auto;\r\n\tdisplay:block;\r\n    }"

/***/ }),

/***/ "./src/app/components/shared/home/home.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/shared/home/home.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"centrado\" src=\"../assets/home.jpg\"  style=\"max-width: 1200px; max-height: 900px\" alt=\"Solvetic\">"

/***/ }),

/***/ "./src/app/components/shared/home/home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/shared/home/home.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/shared/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/shared/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/localized-data.pipe.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/shared/localized-data.pipe.ts ***!
  \**********************************************************/
/*! exports provided: LocalizedDataPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizedDataPipe", function() { return LocalizedDataPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalizedDataPipe = /** @class */ (function () {
    function LocalizedDataPipe(translateService) {
        this.translateService = translateService;
    }
    LocalizedDataPipe.prototype.transform = function (value, pattern) {
        if (pattern === void 0) { pattern = 'mediumDate'; }
        var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](this.translateService.currentLang);
        return datePipe.transform(value, pattern);
    };
    LocalizedDataPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'localizedDate',
            pure: false
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], LocalizedDataPipe);
    return LocalizedDataPipe;
}());



/***/ }),

/***/ "./src/app/components/shared/translatable/translatable.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/shared/translatable/translatable.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/translatable/translatable.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/translatable/translatable.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  translatable works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/shared/translatable/translatable.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/translatable/translatable.component.ts ***!
  \**************************************************************************/
/*! exports provided: TranslatableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatableComponent", function() { return TranslatableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslatableComponent = /** @class */ (function () {
    function TranslatableComponent(translate) {
        this.translate = translate;
        // Recuperamos en la variable lang el lenguaje que tengamos cargado en el localStorage
        var lang = localStorage.getItem('language');
        // Inicialmente no tendremos ningun lenguaje en el localStorage, así que la variable será null
        if (lang === 'null') {
            // La primera vez obtenemos por defecto el lenguaje del browser
            lang = this.translate.getBrowserLang();
        }
        translate.setDefaultLang(lang);
        this.changeLanguage(lang);
    }
    // Método para cambiar el lenguaje
    TranslatableComponent.prototype.changeLanguage = function (language) {
        this.translate.use(language);
        localStorage.setItem('language', language);
    };
    TranslatableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-translatable',
            template: __webpack_require__(/*! ./translatable.component.html */ "./src/app/components/shared/translatable/translatable.component.html"),
            styles: [__webpack_require__(/*! ./translatable.component.css */ "./src/app/components/shared/translatable/translatable.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], TranslatableComponent);
    return TranslatableComponent;
}());



/***/ }),

/***/ "./src/app/components/trip/trip-display/trip-display.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/trip/trip-display/trip-display.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/trip/trip-display/trip-display.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/trip/trip-display/trip-display.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  trip-display works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/trip/trip-display/trip-display.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/trip/trip-display/trip-display.component.ts ***!
  \************************************************************************/
/*! exports provided: TripDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDisplayComponent", function() { return TripDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TripDisplayComponent = /** @class */ (function () {
    function TripDisplayComponent() {
    }
    TripDisplayComponent.prototype.ngOnInit = function () {
    };
    TripDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trip-display',
            template: __webpack_require__(/*! ./trip-display.component.html */ "./src/app/components/trip/trip-display/trip-display.component.html"),
            styles: [__webpack_require__(/*! ./trip-display.component.css */ "./src/app/components/trip/trip-display/trip-display.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TripDisplayComponent);
    return TripDisplayComponent;
}());



/***/ }),

/***/ "./src/app/components/trip/trip-edit/trip-edit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/trip/trip-edit/trip-edit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/trip/trip-edit/trip-edit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/trip/trip-edit/trip-edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  trip-edit works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/trip/trip-edit/trip-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/trip/trip-edit/trip-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: TripEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripEditComponent", function() { return TripEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TripEditComponent = /** @class */ (function () {
    function TripEditComponent() {
    }
    TripEditComponent.prototype.ngOnInit = function () {
    };
    TripEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trip-edit',
            template: __webpack_require__(/*! ./trip-edit.component.html */ "./src/app/components/trip/trip-edit/trip-edit.component.html"),
            styles: [__webpack_require__(/*! ./trip-edit.component.css */ "./src/app/components/trip/trip-edit/trip-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TripEditComponent);
    return TripEditComponent;
}());



/***/ }),

/***/ "./src/app/components/trip/trip-list/trip-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/trip/trip-list/trip-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/trip/trip-list/trip-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/trip/trip-list/trip-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\r\n    <thead>\r\n    <tr>\r\n      <th scope=\"col\">#</th>\r\n      <th scope=\"col\">Title</th>\r\n      <th scope=\"col\">Ticker</th>\r\n      <th scope=\"col\">Description</th>\r\n      <th scope=\"col\">Price</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let trip of trips; let i = index\">\r\n      <th scope=\"row\">{{ i + 1 }}</th>\r\n      <td>{{ trip.title }}</td>\r\n      <td>{{ trip.ticker }}</td>\r\n      <td>{{ trip.description }}</td>\r\n      <td>{{ trip.price }}</td>\r\n    </tr>\r\n    </tbody>\r\n  </table>"

/***/ }),

/***/ "./src/app/components/trip/trip-list/trip-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/trip/trip-list/trip-list.component.ts ***!
  \******************************************************************/
/*! exports provided: TripListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripListComponent", function() { return TripListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_trip_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/trip.model */ "./src/app/models/trip.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TripListComponent = /** @class */ (function () {
    function TripListComponent() {
    }
    TripListComponent.prototype.ngOnInit = function () {
        this.trips = new Array();
        var trip = new _models_trip_model__WEBPACK_IMPORTED_MODULE_1__["Trip"]();
        trip.title = 'Viaje a EEUU';
        trip.ticker = 'TXD123456';
        trip.description = 'Viaje por Estados Unidos de costa a costa';
        trip.price = 1.250;
        this.trips.push(trip);
    };
    TripListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trip-list',
            template: __webpack_require__(/*! ./trip-list.component.html */ "./src/app/components/trip/trip-list/trip-list.component.html"),
            styles: [__webpack_require__(/*! ./trip-list.component.css */ "./src/app/components/trip/trip-list/trip-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TripListComponent);
    return TripListComponent;
}());



/***/ }),

/***/ "./src/app/models/Entity.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/Entity.model.ts ***!
  \****************************************/
/*! exports provided: Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
var Entity = /** @class */ (function () {
    function Entity() {
        this.id = '0';
        this.version = 0;
    }
    return Entity;
}());



/***/ }),

/***/ "./src/app/models/actor.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/actor.model.ts ***!
  \***************************************/
/*! exports provided: Actor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actor", function() { return Actor; });
/* harmony import */ var _Entity_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity.model */ "./src/app/models/Entity.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Actor = /** @class */ (function (_super) {
    __extends(Actor, _super);
    function Actor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Actor;
}(_Entity_model__WEBPACK_IMPORTED_MODULE_0__["Entity"]));



/***/ }),

/***/ "./src/app/models/trip.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/trip.model.ts ***!
  \**************************************/
/*! exports provided: Trip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trip", function() { return Trip; });
/* harmony import */ var _Entity_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity.model */ "./src/app/models/Entity.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Trip = /** @class */ (function (_super) {
    __extends(Trip, _super);
    function Trip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Trip;
}(_Entity_model__WEBPACK_IMPORTED_MODULE_0__["Entity"]));



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(authService, fireAuth, messageService, http) {
        this.authService = authService;
        this.fireAuth = fireAuth;
        this.messageService = messageService;
        this.http = http;
    }
    AuthService.prototype.registerUser = function (actor) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Llamamos a firebase para registrar al usuario con el email y el password
            _this.fireAuth.auth.createUserWithEmailAndPassword(actor.email, actor.password)
                .then(function (_) {
                var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers.append('Content-Type', 'application/json');
                var url = "" + (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendApiBaseUrl + '/actors');
                var body = JSON.stringify(actor);
                _this.http.post(url, body, httpOptions).toPromise()
                    .then(function (res) {
                    _this.messageService.notifyMessage('messages.auth.registration.correct', 'alert alert-success');
                    resolve(res);
                }, function (err) {
                    _this.messageService.notifyMessage('errorMessage.auth.registration.failed', 'alert alert-danger');
                    reject(err);
                });
            }).catch(function (error) {
                _this.messageService.notifyMessage('errorMessages.' + error.code.replace(/\//gi, '.').replace(/\-/gi, '.'), 'alert alert-danger');
                reject(error);
            });
        });
    };
    AuthService.prototype.getRole = function () {
        throw new Error('Method not implemented.');
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        // La función devuelve una promesa ya que Firebase también devuelve una promesa
        // tslint:disable-next-line:no-shadowed-variable
        return new Promise(function (resolve, reject) {
            // Le pasamos el email y el passsword a Firebase
            _this.fireAuth.auth.signInWithEmailAndPassword(email, password)
                .then(function (data) {
                // Mensaje si todo ha ido correctamente
                _this.messageService.notifyMessage('messages.auth.login.correct', 'alert alert-success');
                // Si todo ha ido bien hacemos el resolve
                resolve();
                // Si firebase devuelve algún error lo capturamos
            }).catch(function (error) {
                _this.messageService.notifyMessage('errorMessages.' + error.code.replace(/\//gi, '.').replace(/\-/gi, '.'), 'alert alert-danger');
                reject(error);
            });
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        // La función devuelve de nuevo una promesa ya que Firebase también devuelve una promesa
        return new Promise(function (resolve, reject) {
            _this.fireAuth.auth.signOut()
                .then(function (_) {
                // Si todo ha ido bien hacemos el resolve
                resolve();
                // Si firebase devuelve algún error lo capturamos
            }).catch(function (error) {
                reject(error);
                _this.messageService.notifyMessage(error.code, 'alert alert-danger');
            });
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AuthService, angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _components_master_message_infomessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/master/message/infomessage */ "./src/app/components/master/message/infomessage.ts");


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    MessageService.prototype.notifyMessage = function (code, cssClass) {
        this.message.next(new _components_master_message_infomessage__WEBPACK_IMPORTED_MODULE_1__["InfoMessage"](code, cssClass));
    };
    MessageService.prototype.removeMessage = function () {
        this.message.next();
    };
    return MessageService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    backendApiBaseUrl: 'http://localhost:3000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Chanell Salas\Documents\TECLI1819-Explorer-bluecloud\TECLI1819-Explorer-bluecloud\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map