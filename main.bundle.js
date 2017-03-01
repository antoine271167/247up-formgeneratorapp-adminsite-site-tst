webpackJsonp([1,5],{

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SigninService = (function () {
    function SigninService() {
        this._isAuthenticated = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false); // false is your initial value
        this.isAuthenticated$ = this._isAuthenticated.asObservable();
        this._idToken = "";
        this._userDisplayName = "";
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* isDevMode */])()) {
            this._userDisplayName = "John Doe";
            this._idToken =
                "eyJhbGciOiJSUzI1NiIsImtpZCI6ImRlOTdmMzA1MTRjOWU4NThiYzA0ODc3NjNmNzNmN2UwYzVmYTBhYjEifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiaWF0IjoxNDg2OTkwMDgxLCJleHAiOjE0ODY5OTM2ODEsImF0X2hhc2giOiJtV3Ffd1gyVnBWS3lLNEVtSWxXOXZRIiwiYXVkIjoiODg1MTY1OTc0OTM4LWo3MnE1N2cwZnNtYnJnanY1N3MybGhxdG0xNmkxajYwLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE0NzExNjI2ODA1ODQ5NDY1ODc0IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF6cCI6Ijg4NTE2NTk3NDkzOC1qNzJxNTdnMGZzbWJyZ2p2NTdzMmxocXRtMTZpMWo2MC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImVtYWlsIjoiYW50b2luZTI3MTExOTY3QGdtYWlsLmNvbSIsIm5hbWUiOiJBbnRvaW5lIEdlYm9lcnMiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDUuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1PdjZfTHZtSDlmby9BQUFBQUFBQUFBSS9BQUFBQUFBQUF6US9oVTRNTXJubWVwSS9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoiQW50b2luZSIsImZhbWlseV9uYW1lIjoiR2Vib2VycyIsImxvY2FsZSI6Im5sIn0.0Y68-LiCtOVyp-lNNQkCDTal0XZ3-LGpGxFTJOmPAyQgVQru5UrPU43OtfwN4LgqgMKNBqCRFg98-KZYLjFnG7PQTLKesoxvLPOChGFKdl-NZRGXqiuSGckrkAb9k-KYyvZFFaXNXYBjB7HrdCTm645_30HqkOiVPx8syE_JRZjCYtqgapbSFuGagNBMb_wiejY7_bnJO8KrWQTLD17uPqe7yM2ZKnLKGPTyNZIoKSwKUf0rot4rGvted0OS2f4SFseyNpChpcc_9xUQM-GTH5w2FnI0J3ijeV7HjD2ujKKe_PX4WMq3gbtCX47lUbidkrmEqhnEjkKQ7KSmhzFC_g";
            this._isAuthenticated.next(true);
        }
    }
    SigninService.prototype.signOut = function () {
        this._userDisplayName = "";
        this._idToken = "";
        this._isAuthenticated.next(false);
    };
    Object.defineProperty(SigninService.prototype, "isAuthenticated", {
        get: function () {
            return this._isAuthenticated.getValue();
        },
        set: function (value) {
            this._isAuthenticated.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SigninService.prototype, "idToken", {
        get: function () {
            return this._idToken;
        },
        set: function (value) {
            this._idToken = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SigninService.prototype, "userDisplayName", {
        get: function () {
            return this._userDisplayName;
        },
        set: function (value) {
            this._userDisplayName = value;
        },
        enumerable: true,
        configurable: true
    });
    SigninService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], SigninService);
    return SigninService;
}());
//# sourceMappingURL=D:/TfsOnlineGit/247UP - FormGeneratorApp - AdminSite/src/adminsite/src/signin.service.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });
var BaseComponent = (function () {
    function BaseComponent(_signinService) {
        this._signinService = _signinService;
        this._isAuthenticated = false;
        //
    }
    Object.defineProperty(BaseComponent.prototype, "signinService", {
        get: function () {
            return this._signinService;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "isAuthenticated", {
        get: function () {
            return this._isAuthenticated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "userAuthToken", {
        get: function () {
            return this._signinService.idToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "userDisplayName", {
        get: function () {
            return this._signinService.userDisplayName;
        },
        enumerable: true,
        configurable: true
    });
    BaseComponent.prototype.signOut = function () {
        this._signinService.signOut();
    };
    BaseComponent.prototype.init = function () {
        var _this = this;
        this._subscription = this.signinService.isAuthenticated$.subscribe(function (isAuthenticated) {
            _this._isAuthenticated = isAuthenticated;
        });
    };
    BaseComponent.prototype.dispose = function () {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    };
    return BaseComponent;
}());
//# sourceMappingURL=D:/TfsOnlineGit/247UP - FormGeneratorApp - AdminSite/src/adminsite/src/base.component.js.map

/***/ }),

/***/ 387:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 387;


/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(513);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/TfsOnlineGit/247UP - FormGeneratorApp - AdminSite/src/adminsite/src/main.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_component__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_service__ = __webpack_require__(150);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent(signinService) {
        _super.call(this, signinService);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.init();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.dispose();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: "app-root",
            template: __webpack_require__(699),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__signin_service__["a" /* SigninService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__signin_service__["a" /* SigninService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__base_component__["a" /* BaseComponent */]));
//# sourceMappingURL=D:/TfsOnlineGit/247UP - FormGeneratorApp - AdminSite/src/adminsite/src/app.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_app_navigation_app_navigation_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navigation_app_vert_navigation_item_app_vert_navigation_item_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signin_service__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_app_page_app_page_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_app_page_apps_app_page_apps_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_app_page_datasources_app_page_datasources_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_app_page_models_app_page_models_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_app_page_views_app_page_views_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_app_page_lists_app_page_lists_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_app_page_forms_app_page_forms_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_app_page_signin_app_page_signin_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__signin_signin_component__ = __webpack_require__(524);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var appRoutes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_9__pages_app_page_app_page_component__["a" /* AppPageComponent */] },
    { path: "apps", component: __WEBPACK_IMPORTED_MODULE_10__pages_app_page_apps_app_page_apps_component__["a" /* AppPageAppsComponent */] },
    { path: "datasources", component: __WEBPACK_IMPORTED_MODULE_11__pages_app_page_datasources_app_page_datasources_component__["a" /* AppPageDatasourcesComponent */] },
    { path: "models", component: __WEBPACK_IMPORTED_MODULE_12__pages_app_page_models_app_page_models_component__["a" /* AppPageModelsComponent */] },
    { path: "views", component: __WEBPACK_IMPORTED_MODULE_13__pages_app_page_views_app_page_views_component__["a" /* AppPageViewsComponent */] },
    { path: "lists", component: __WEBPACK_IMPORTED_MODULE_14__pages_app_page_lists_app_page_lists_component__["a" /* AppPageListsComponent */] },
    { path: "forms", component: __WEBPACK_IMPORTED_MODULE_15__pages_app_page_forms_app_page_forms_component__["a" /* AppPageFormsComponent */] },
    { path: "signin", component: __WEBPACK_IMPORTED_MODULE_16__pages_app_page_signin_app_page_signin_component__["a" /* AppPageSigninComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navigation_app_navigation_app_navigation_component__["a" /* AppNavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_app_page_app_page_component__["a" /* AppPageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_app_page_apps_app_page_apps_component__["a" /* AppPageAppsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_app_page_datasources_app_page_datasources_component__["a" /* AppPageDatasourcesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_app_page_models_app_page_models_component__["a" /* AppPageModelsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_app_page_views_app_page_views_component__["a" /* AppPageViewsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_app_page_lists_app_page_lists_component__["a" /* AppPageListsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_app_page_forms_app_page_forms_component__["a" /* AppPageFormsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__navigation_app_vert_navigation_item_app_vert_navigation_item_component__["a" /* AppVertNavigationItemComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_app_page_signin_app_page_signin_component__["a" /* AppPageSigninComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_app_page_signin_app_page_signin_component__["a" /* AppPageSigninComponent */],
                __WEBPACK_IMPORTED_MODULE_17__signin_signin_component__["a" /* SigninComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__signin_service__["a" /* SigninService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/TfsOnlineGit/247UP - FormGeneratorApp - AdminSite/src/adminsite/src/app.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_component__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_service__ = __webpack_require__(150);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppNavigationComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppNavigationComponent = (function (_super) {
    __extends(AppNavigationComponent, _super);
    function AppNavigationComponent(signinService) {
        _super.call(this, signinService);
    }
    AppNavigationComponent.prototype.ngOnInit = function () {
        this.init();
    };
    AppNavigationComponent.prototype.ngOnDestroy = function () {
        this.dispose();
    };
    AppNavigationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: "app-navigation",
            template: __webpack_require__(700),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__signin_service__["a" /* SigninService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__signin_service__["a" /* SigninService */]) === 'function' && _a) || Object])
    ], AppNavigationComponent);
    return AppNavigationComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__base_component__["a" /* BaseComponent */]));
//# sourceMappingURL=D:/TfsOnlineGit/247UP - FormGeneratorApp - AdminSite/src/adminsite/src/app-navigation.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppVertNavigationItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppVertNavigationItemComponent = (function () {
    function AppVertNavigationItemComponent(_el) {
        this._el = _el;
        //
    }
    AppVertNavigationItemComponent.prototype.ngOnInit = function () {
        var nativeElement = this._el.nativeElement;
        var parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', String)
    ], AppVertNavigationItemComponent.prototype, "icon", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', String)
    ], AppVertNavigationItemComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', String)
    ], AppVertNavigationItemComponent.prototype, "link", void 0);
    AppVertNavigationItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: "app-vert-navigation-item",
            template: __webpack_require__(701),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === 'function' && _a) || Object])
    ], AppVertNavigationItemComponent);
    return AppVertNavigationItemComponent;
    var _a;
}());
//# sourceMappingURL=D:/TfsOnlineGit/247UP - FormGeneratorApp - AdminSite/src/adminsite/src/app-vert-navigation-item.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPageAppsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppPageAppsComponent = (function () {
    function AppPageAppsComponent() {
    }
    AppPageAppsComponent.prototype.ngOnInit = function () {
        //
    };
    AppPageAppsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: "app-page-apps",
            template: __webpack_require__(702),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppPageAppsComponent);
    return AppPageAppsComponent;
}());
//# sourceMappingURL=D:/TfsOnlineGit/247UP - FormGeneratorApp - AdminSite/src/adminsite/src/app-page-apps.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPageDatasourcesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppPageDatasourcesComponent = (function () {
    function AppPageDatasourcesComponent() {
    }
    AppPageDatasourcesComponent.prototype.ngOnInit = function () {
    };
    AppPageDatasourcesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-app-page-datasources',
            template: __webpack_require__(703),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppPageDatasourcesComponent);
    return AppPageDatasourcesComponent;
}());
//# sourceMappingURL=D:/TfsOnlineGit/247UP - FormGeneratorApp - AdminSite/src/adminsite/src/app-page-datasources.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPageFormsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppPageFormsComponent = (function () {
    function AppPageFormsComponent() {
    }
    AppPageFormsComponent.prototype.ngOnInit = function () {
    };
    AppPageFormsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-app-page-forms',
            template: __webpack_require__(704),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppPageFormsComponent);
    return AppPageFormsComponent;
}());
//# sourceMappingURL=D:/TfsOnlineGit/247UP - FormGeneratorApp - AdminSite/src/adminsite/src/app-page-forms.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPageListsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppPageListsComponent = (function () {
    function AppPageListsComponent() {
    }
    AppPageListsComponent.prototype.ngOnInit = function () {
    };
    AppPageListsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-app-page-lists',
            template: __webpack_require__(705),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppPageListsComponent);
    return AppPageListsComponent;
}());
//# sourceMappingURL=D:/TfsOnlineGit/247UP - FormGeneratorApp - AdminSite/src/adminsite/src/app-page-lists.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPageModelsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppPageModelsComponent = (function () {
    function AppPageModelsComponent() {
    }
    AppPageModelsComponent.prototype.ngOnInit = function () {
    };
    AppPageModelsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-app-page-models',
            template: __webpack_require__(706),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppPageModelsComponent);
    return AppPageModelsComponent;
}());
//# sourceMappingURL=D:/TfsOnlineGit/247UP - FormGeneratorApp - AdminSite/src/adminsite/src/app-page-models.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPageSigninComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppPageSigninComponent = (function () {
    function AppPageSigninComponent() {
    }
    AppPageSigninComponent.prototype.ngOnInit = function () {
    };
    AppPageSigninComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: "app-page-signin",
            template: __webpack_require__(707),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppPageSigninComponent);
    return AppPageSigninComponent;
}());
//# sourceMappingURL=D:/TfsOnlineGit/247UP - FormGeneratorApp - AdminSite/src/adminsite/src/app-page-signin.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPageViewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppPageViewsComponent = (function () {
    function AppPageViewsComponent() {
    }
    AppPageViewsComponent.prototype.ngOnInit = function () {
    };
    AppPageViewsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-app-page-views',
            template: __webpack_require__(708),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppPageViewsComponent);
    return AppPageViewsComponent;
}());
//# sourceMappingURL=D:/TfsOnlineGit/247UP - FormGeneratorApp - AdminSite/src/adminsite/src/app-page-views.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppPageComponent = (function () {
    function AppPageComponent() {
    }
    AppPageComponent.prototype.ngOnInit = function () {
        //
    };
    AppPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: "app-page",
            template: __webpack_require__(709),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppPageComponent);
    return AppPageComponent;
}());
//# sourceMappingURL=D:/TfsOnlineGit/247UP - FormGeneratorApp - AdminSite/src/adminsite/src/app-page.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signin_service__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_component__ = __webpack_require__(219);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = (function (_super) {
    __extends(SigninComponent, _super);
    function SigninComponent(_zone, signinService) {
        var _this = this;
        _super.call(this, signinService);
        this._zone = _zone;
        this.googleLoginButtonId = "google-login-button";
        this.onGoogleLoginSuccess = function (loggedInUser) {
            _this._zone.run(function () {
                _this.signinService.idToken = loggedInUser.getAuthResponse().id_token;
                _this.signinService.userDisplayName = loggedInUser.getBasicProfile().getName();
                _this.signinService.isAuthenticated = true;
                console.log("idToken: " + _this.signinService.idToken);
                console.log("userDisplayName: " + _this.signinService.userDisplayName);
            });
        };
    }
    SigninComponent.prototype.ngAfterViewInit = function () {
        gapi.signin2.render(this.googleLoginButtonId, {
            "onSuccess": this.onGoogleLoginSuccess,
            "scope": "profile",
            "theme": "dark"
        });
    };
    SigninComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: "app-signin",
            template: __webpack_require__(710),
            styles: [__webpack_require__(696)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* NgZone */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__signin_service__["a" /* SigninService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__signin_service__["a" /* SigninService */]) === 'function' && _b) || Object])
    ], SigninComponent);
    return SigninComponent;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_2__base_component__["a" /* BaseComponent */]));
//# sourceMappingURL=D:/TfsOnlineGit/247UP - FormGeneratorApp - AdminSite/src/adminsite/src/signin.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    serviceUrl: "http://247up-kmregistratie-service-tst.azurewebsites.net"
};
//# sourceMappingURL=D:/TfsOnlineGit/247UP - FormGeneratorApp - AdminSite/src/adminsite/src/environment.prod.js.map

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\" [style.padding-left]=\"isAuthenticated ? '225px':'0'\">\r\n    <app-navigation></app-navigation>\r\n    <router-outlet *ngIf=\"isAuthenticated\"></router-outlet>\r\n    <app-page-signin *ngIf=\"!isAuthenticated\"></app-page-signin>\r\n</div>"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" routerLink=\"/\"><b style=\"color:#00C6FF\">247</b><i style=\"color: white\">UP</i> - <b style=\"color:white\">FORM</b><small><i>GENERATOR</i></small></a>\r\n    </div>\r\n    <!-- Top Menu Items -->\r\n    <ul *ngIf=\"isAuthenticated\" class=\"nav navbar-right top-nav\">\r\n        <li class=\"dropdown\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-user\"></i> {{userDisplayName}} <b class=\"caret\"></b></a>\r\n            <ul class=\"dropdown-menu\">\r\n                <li>\r\n                    <a href=\"#\"><i class=\"fa fa-fw fa-user\"></i> Profile</a>\r\n                </li>\r\n                <li class=\"divider\"></li>\r\n                <li>\r\n                    <a (click)=\"signOut()\" href=\"#\"><i class=\"fa fa-fw fa-power-off\"></i> Log Out</a>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n    </ul>\r\n    <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->\r\n    <div *ngIf=\"isAuthenticated\" class=\"collapse navbar-collapse navbar-ex1-collapse\">\r\n        <ul class=\"nav navbar-nav side-nav\">\r\n            <app-vert-navigation-item link=\"/\" icon=\"dashboard\" title=\"Dashboard\"></app-vert-navigation-item>\r\n            <app-vert-navigation-item link=\"/apps\" icon=\"cube\" title=\"Apps\"></app-vert-navigation-item>\r\n            <app-vert-navigation-item link=\"/datasources\" icon=\"database\" title=\"Datasources\"></app-vert-navigation-item>\r\n            <app-vert-navigation-item link=\"/models\" icon=\"cubes\" title=\"Models\"></app-vert-navigation-item>\r\n            <app-vert-navigation-item link=\"/views\" icon=\"eye\" title=\"Views\"></app-vert-navigation-item>\r\n            <app-vert-navigation-item link=\"/lists\" icon=\"table\" title=\"Lists\"></app-vert-navigation-item>\r\n            <app-vert-navigation-item link=\"/forms\" icon=\"hospital-o\" title=\"Forms\"></app-vert-navigation-item>\r\n        </ul>\r\n    </div>\r\n    <!-- /.navbar-collapse -->\r\n</nav>"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "<li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n    <a routerLink=\"{{link}}\"><i class=\"fa fa-fw fa-{{icon}}\"></i> {{title}}</a>\r\n</li>"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <!-- Page Heading -->\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <h1 class=\"page-header\">\r\n                    Apps\r\n                </h1>\r\n                <ol class=\"breadcrumb\">\r\n                    <li>\r\n                        <i class=\"fa fa-dashboard\"></i> <a routerLink=\"/\">Dashboard</a>\r\n                    </li>\r\n                    <li class=\"active\">\r\n                        <i class=\"fa fa-cube\"></i> Apps\r\n                    </li>\r\n                </ol>\r\n            </div>\r\n        </div>\r\n        <!-- /.row -->\r\n    </div>\r\n    <!-- /.container-fluid -->\r\n</div>"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <!-- Page Heading -->\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <h1 class=\"page-header\">\r\n                    Datasources\r\n                </h1>\r\n                <ol class=\"breadcrumb\">\r\n                    <li>\r\n                        <i class=\"fa fa-dashboard\"></i> <a routerLink=\"/\">Dashboard</a>\r\n                    </li>\r\n                    <li class=\"active\">\r\n                        <i class=\"fa fa-database\"></i> Datasources\r\n                    </li>\r\n                </ol>\r\n            </div>\r\n        </div>\r\n        <!-- /.row -->\r\n    </div>\r\n    <!-- /.container-fluid -->\r\n</div>"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <!-- Page Heading -->\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <h1 class=\"page-header\">\r\n                    Forms\r\n                </h1>\r\n                <ol class=\"breadcrumb\">\r\n                    <li>\r\n                        <i class=\"fa fa-dashboard\"></i> <a routerLink=\"/\">Dashboard</a>\r\n                    </li>\r\n                    <li class=\"active\">\r\n                        <i class=\"fa fa-hospital-o\"></i> Forms\r\n                    </li>\r\n                </ol>\r\n            </div>\r\n        </div>\r\n        <!-- /.row -->\r\n    </div>\r\n    <!-- /.container-fluid -->\r\n</div>"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <!-- Page Heading -->\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <h1 class=\"page-header\">\r\n                    Lists\r\n                </h1>\r\n                <ol class=\"breadcrumb\">\r\n                    <li>\r\n                        <i class=\"fa fa-dashboard\"></i> <a routerLink=\"/\">Dashboard</a>\r\n                    </li>\r\n                    <li class=\"active\">\r\n                        <i class=\"fa fa-table\"></i> Lists\r\n                    </li>\r\n                </ol>\r\n            </div>\r\n        </div>\r\n        <!-- /.row -->\r\n    </div>\r\n    <!-- /.container-fluid -->\r\n</div>"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <!-- Page Heading -->\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <h1 class=\"page-header\">\r\n                    Models\r\n                </h1>\r\n                <ol class=\"breadcrumb\">\r\n                    <li>\r\n                        <i class=\"fa fa-dashboard\"></i> <a routerLink=\"/\">Dashboard</a>\r\n                    </li>\r\n                    <li class=\"active\">\r\n                        <i class=\"fa fa-cubes\"></i> Models\r\n                    </li>\r\n                </ol>\r\n            </div>\r\n        </div>\r\n        <!-- /.row -->\r\n    </div>\r\n    <!-- /.container-fluid -->\r\n</div>"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "<app-signin></app-signin>"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <!-- Page Heading -->\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <h1 class=\"page-header\">\r\n                    Views\r\n                </h1>\r\n                <ol class=\"breadcrumb\">\r\n                    <li>\r\n                        <i class=\"fa fa-dashboard\"></i> <a routerLink=\"/\">Dashboard</a>\r\n                    </li>\r\n                    <li class=\"active\">\r\n                        <i class=\"fa fa-eye\"></i> Views\r\n                    </li>\r\n                </ol>\r\n            </div>\r\n        </div>\r\n        <!-- /.row -->\r\n    </div>\r\n    <!-- /.container-fluid -->\r\n</div>"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <!-- Page Heading -->\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <h1 class=\"page-header\">\r\n                    Dashboard <small>Statistics Overview</small>\r\n                </h1>\r\n                <ol class=\"breadcrumb\">\r\n                    <li class=\"active\">\r\n                        <i class=\"fa fa-dashboard\"></i> Dashboard\r\n                    </li>\r\n                </ol>\r\n            </div>\r\n        </div>\r\n        <!-- /.row -->\r\n    </div>\r\n    <!-- /.container-fluid -->\r\n</div>"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "<div id=\"{{googleLoginButtonId}}\"></div>"

/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(388);


/***/ })

},[732]);
//# sourceMappingURL=main.bundle.map