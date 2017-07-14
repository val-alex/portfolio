webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- ABOUT ME -->\r\n<div class=\"jumbotron\">\r\n  <div class=\"container\">\r\n    <h2 class=\"display-3 text-center\" id=\"about\">About Me</h2>\r\n    <p class=\"text-center\">My passion for continuous learning has led me to explore the ever-expanding JavaScript ecosystem, and I have now found my focus within a modern front-end architecture, in particular: Angular & React. I am eager to integrate into a forward-thinking environment and work within a tight-knit community. Writing good-quality code and adapting to the latest technologies to find solutions, and writing proper tests is what I constantly strive for. These cumulative experiences are shaping my approach to new challenges.</p>\r\n  </div>\r\n</div>\r\n<!-- END ABOUT ME -->"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\n  border: 0;\n  padding-top: 98px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n<!-- Routed views go here -->"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */] },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_8__portfolio_portfolio_component__["a" /* PortfolioComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_8__portfolio_portfolio_component__["a" /* PortfolioComponent */],
            __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_page_home_page_component__["a" /* HomePageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<form method=\"POST\" action=\"http://formspree.io/valentin.m.alexeev@gmail.com\">\r\n  <input type=\"email\" name=\"email\" placeholder=\"Your email\">\r\n  <textarea name=\"message\" placeholder=\"Your message\"></textarea>\r\n  <button type=\"submit\">Send</button>\r\n</form>\r\n\r\n<!--<div *ngIf=\"!name; else contactform\">\r\n  <div class=\"container contactComponent\">\r\n    <h2 class=\"text-center\">Give Me a Shout</h2>\r\n\r\n     <form action=\"https://formspree.io/valentin.m.alexeev@gmail.com\" method=\"POST\" [formGroup]=\"rForm\" (ngSubmit)=\"addPost(rForm.value)\">\r\n      <div class=\"row col-xs-offset-2\">\r\n        <div class=\"col-xs-5\">\r\n          <div class=\"form-group\">\r\n              <input type=\"text\" name=\"name\" class=\"form-control\" id=\"inputName\" aria-describedby=\"yourNameTextArea\" placeholder=\"Your Name\" formControlName=\"name\">\r\n              <div class=\"alert\" *ngIf=\"!rForm.controls['name'].valid && rForm.controls['name'].touched\">{{ titleAlert }}</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"email\" name=\"_replyto\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" formControlName=\"email\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" name=\"_subject\" class=\"form-control\" id=\"subjectText\" aria-describedby=\"subjectTextArea\" placeholder=\"Subject\" formControlName=\"subject\">\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-5\">\r\n          <div class=\"form-group\">\r\n              <textarea class=\"form-control\" id=\"messageTextArea\" rows=\"3\" placeholder=\"Your message...\" formControlName=\"message\"></textarea>\r\n              <div class=\"alert\" *ngIf=\"!rForm.controls['message'].valid && rForm.controls['message'].touched\">You must specify a message that's between 30 and 500 characters.</div>\r\n          </div>\r\n        </div>\r\n        <input type=\"text\" name=\"_gotcha\" style=\"display:none\" />\r\n        <div class=\"col-xs-5\">\r\n          <button type=\"submit\" value=\"Submit Form\" class=\"btn btn-primary\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </form> \r\n  </div>\r\n</div>\r\n\r\n<ng-template #contactform>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <h1>Thank You {{ name }}</h1>\r\n        <p>Ill get back to you as soon as I can</p>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n-->\r\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contactComponent {\n  margin-top: 30px;\n  margin-bottom: 30px; }\n\n#messageTextArea {\n  height: 144px; }\n\n.form-container {\n  display: block;\n  width: 90%;\n  padding: 2em;\n  margin: 2em auto;\n  background: #fff; }\n\n.alert {\n  background: #f2edda;\n  padding: 7px;\n  font-size: .9em;\n  margin-bottom: 20px;\n  display: inline-block;\n  -webkit-animation: 2s alertAnim forwards;\n          animation: 2s alertAnim forwards; }\n\n.button {\n  margin-top: 3rem; }\n\nh1 {\n  margin-bottom: 2rem;\n  font-weight: bold;\n  font-family: 'Muli';\n  font-size: 2em; }\n\n@-webkit-keyframes alertAnim {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n@keyframes alertAnim {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = (function () {
    function ContactComponent(fb) {
        this.fb = fb;
        this.name = '';
        this.email = '';
        this.subject = '';
        this.message = '';
        this.titleAlert = 'This field is required';
        this.rForm = fb.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'subject': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'message': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(500)])],
            'validate': ''
        });
    }
    ContactComponent.prototype.addPost = function (post) {
        this.name = post.name;
        this.email = post.email;
        this.subject = post.subject;
        this.message = post.message;
    };
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rForm.get('validate').valueChanges.subscribe(function (validate) {
            if (validate == '1') {
                _this.rForm.get('name').setValidators([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3)]);
                _this.titleAlert = 'You need to specify at least 3 characters';
            }
            else {
                _this.rForm.get('name').setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
            }
            _this.rForm.get('name').updateValueAndValidity();
        });
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _a || Object])
], ContactComponent);

var _a;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n    <div class=\"panel-fullwidth container-fullwidth\">\r\n        <div class=\"panel-footer text-center\"><p>Made by Valetnin Alexeev © 2017</p></div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<app-about></app-about>\r\n\r\n<!-- PORTFOLIO -->\r\n<div class=\"container\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <h2 class=\"text-center\">My Work</h2>\r\n        </div>\r\n    </div>\r\n    <!-- /.row -->\r\n\r\n    <!-- Projects Row -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 portfolio-item\">\r\n            <a href=\"#\">\r\n                <img class=\"img-responsive\" src=\"http://placehold.it/400x250\" alt=\"\">\r\n            </a>\r\n            <h3>\r\n                <a href=\"#\">BookBlock</a>\r\n            </h3>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>\r\n        </div>\r\n        <div class=\"col-md-4 portfolio-item\">\r\n            <a href=\"#\">\r\n                <img class=\"img-responsive\" src=\"http://placehold.it/400x250\" alt=\"\">\r\n            </a>\r\n            <h3>\r\n                <a href=\"#\">Cellar SW4</a>\r\n            </h3>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>\r\n        </div>\r\n        <div class=\"col-md-4 portfolio-item\">\r\n            <a href=\"#\">\r\n                <img class=\"img-responsive\" src=\"http://placehold.it/400x250\" alt=\"\">\r\n            </a>\r\n            <h3>\r\n                <a href=\"#\">Doctor and Daughter</a>\r\n            </h3>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>\r\n        </div>\r\n    </div>\r\n    <!-- /.row -->\r\n\r\n    <!-- Projects Row -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 portfolio-item\">\r\n            <a href=\"#\">\r\n                <img class=\"img-responsive\" src=\"http://placehold.it/400x250\" alt=\"\">\r\n            </a>\r\n            <h3>\r\n                <a href=\"#\">Gazzo</a>\r\n            </h3>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>\r\n        </div>\r\n        <div class=\"col-md-4 portfolio-item\">\r\n            <a href=\"#\">\r\n                <img class=\"img-responsive\" src=\"http://placehold.it/400x250\" alt=\"\">\r\n            </a>\r\n            <h3>\r\n                <a href=\"#\">Mitsidi</a>\r\n            </h3>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>\r\n        </div>\r\n        <div class=\"col-md-4 portfolio-item\">\r\n            <a href=\"#\">\r\n                <img class=\"img-responsive\" src=\"http://placehold.it/400x250\" alt=\"\">\r\n            </a>\r\n            <h3>\r\n                <a href=\"#\">Stefan Johnson</a>\r\n            </h3>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-contact></app-contact>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home-page',
        template: __webpack_require__("../../../../../src/app/home-page/home-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home-page/home-page.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomePageComponent);

//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Menu \r\n<div class=\"container-fullwidth\">\r\n  <nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\r\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <a class=\"navbar-brand\" href=\"#\">VA</a>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" routerLink=\"/\">Home<span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/about\">About Me</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/portfolio\">Portfolio</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</div>\r\n  End of Menu -->\r\n<div class=\"bs-component\">\r\n  <nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand\" href=\"#\">VA</a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li class=\"active\"><a routerLink=\"/\">Home<span class=\"sr-only\">(current)</span></a></li>\r\n          <li><a routerLink=\"/about\">About</a></li>\r\n          <li><a routerLink=\"/portfolio\">Portfolio</a></li>\r\n          <li><a routerLink=\"/contact\">Contact</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <div id=\"source-button\" class=\"btn btn-primary btn-xs\" style=\"display: none;\">&lt; &gt;</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n  margin-bottom: -20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/menu.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- PORTFOLIO -->\r\n    <div class=\"container\">\r\n\r\n        <!-- Page Header -->\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <h1 class=\"page-header\">Page Heading\r\n                    <small>Secondary Text</small>\r\n                </h1>\r\n            </div>\r\n        </div>\r\n        <!-- /.row -->\r\n\r\n        <!-- Projects Row -->\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4 portfolio-item\">\r\n                <a href=\"#\">\r\n                    <img class=\"img-responsive\" src=\"http://placehold.it/300x250\" alt=\"\">\r\n                </a>\r\n                <h3>\r\n                    <a href=\"#\">Project Name</a>\r\n                </h3>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>\r\n            </div>\r\n            <div class=\"col-md-4 portfolio-item\">\r\n                <a href=\"#\">\r\n                    <img class=\"img-responsive\" src=\"http://placehold.it/300x250\" alt=\"\">\r\n                </a>\r\n                <h3>\r\n                    <a href=\"#\">Project Name</a>\r\n                </h3>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>\r\n            </div>\r\n            <div class=\"col-md-4 portfolio-item\">\r\n                <a href=\"#\">\r\n                    <img class=\"img-responsive\" src=\"http://placehold.it/300x250\" alt=\"\">\r\n                </a>\r\n                <h3>\r\n                    <a href=\"#\">Project Name</a>\r\n                </h3>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>\r\n            </div>\r\n        </div>\r\n        <!-- /.row -->\r\n\r\n        <!-- Projects Row -->\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4 portfolio-item\">\r\n                <a href=\"#\">\r\n                    <img class=\"img-responsive\" src=\"http://placehold.it/300x250\" alt=\"\">\r\n                </a>\r\n                <h3>\r\n                    <a href=\"#\">Project Name</a>\r\n                </h3>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>\r\n            </div>\r\n            <div class=\"col-md-4 portfolio-item\">\r\n                <a href=\"#\">\r\n                    <img class=\"img-responsive\" src=\"http://placehold.it/300x250\" alt=\"\">\r\n                </a>\r\n                <h3>\r\n                    <a href=\"#\">Project Name</a>\r\n                </h3>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>\r\n            </div>\r\n            <div class=\"col-md-4 portfolio-item\">\r\n                <a href=\"#\">\r\n                    <img class=\"img-responsive\" src=\"http://placehold.it/300x250\" alt=\"\">\r\n                </a>\r\n                <h3>\r\n                    <a href=\"#\">Project Name</a>\r\n                </h3>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <!-- Pagination -->\r\n        <div class=\"row text-center\">\r\n            <div class=\"col-lg-12\">\r\n                <ul class=\"pagination\">\r\n                    <li>\r\n                        <a href=\"#\">&laquo;</a>\r\n                    </li>\r\n                    <li class=\"active\">\r\n                        <a href=\"#\">1</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#\">2</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#\">3</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#\">4</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#\">5</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#\">&raquo;</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <!-- /.row -->\r\n    </div>\r\n    <!-- /.container -->"

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    return PortfolioComponent;
}());
PortfolioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-portfolio',
        template: __webpack_require__("../../../../../src/app/portfolio/portfolio.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portfolio/portfolio.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PortfolioComponent);

//# sourceMappingURL=portfolio.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map