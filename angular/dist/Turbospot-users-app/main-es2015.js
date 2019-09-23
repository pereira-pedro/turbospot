(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<main>\n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error/error.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n  <p class=\"mat-body-1\">{{ data.message }}</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button mat-dialog-close>Ok</button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span>Turbo Spot Users</span>\n    <span class=\"top-menu-spacer\"></span>\n    <mat-icon\n      class=\"top-menu-icon\"\n      [matMenuTriggerFor]=\"menuSetup\"\n      aria-hidden=\"false\"\n      aria-label=\"Setup icon\"\n      *ngIf=\"userIsAuthenticated\"\n      >menu</mat-icon\n    >\n    <mat-menu #menuSetup=\"matMenu\">\n      <button mat-menu-item (click)=\"onListUsers()\" *ngIf=\"userIsAuthenticated\">Usuários</button>\n      <button mat-menu-item (click)=\"onLogout()\" *ngIf=\"userIsAuthenticated\">Encerrar {{userFullname}}</button>\n    </mat-menu>\n  </mat-toolbar-row>\n</mat-toolbar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/user-edit/user-edit.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/user-edit/user-edit.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title>Usuário</mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n    <form [formGroup]=\"form\" (submit)=\"onSaveUser()\" *ngIf=\"!isLoading\" autocomplete=\"off\">\r\n      <div class=\"edit-user-container\">\r\n        <mat-form-field hintLabel=\"Nome completo do usuário.\">\r\n          <input\r\n            matInput\r\n            type=\"text\"\r\n            formControlName=\"fullname\"\r\n            placeholder=\"Nome\"\r\n          />\r\n          <mat-error *ngIf=\"form.get('fullname').invalid\"\r\n            >Entre com o nome completo do usuário.</mat-error\r\n          >\r\n        </mat-form-field>\r\n        <mat-form-field\r\n          hintLabel=\"Use apenas números e letras sem acentos.\"\r\n        >\r\n          <input\r\n            matInput\r\n            type=\"text\"\r\n            formControlName=\"login\"\r\n            placeholder=\"Login do usuário\"\r\n          />\r\n          <mat-error *ngIf=\"form.get('login').invalid\"\r\n            >Entre com o login do usuário.</mat-error\r\n          >\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input\r\n            matInput\r\n            type=\"password\"\r\n            formControlName=\"password\"\r\n            placeholder=\"Senha do usuário\"\r\n            autocomplete=\"off\"\r\n          />\r\n          <mat-error *ngIf=\"form.get('password').invalid\"\r\n            >Entre com o senha do usuário.</mat-error\r\n          >\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input\r\n            matInput\r\n            type=\"password\"\r\n            formControlName=\"confirmPassword\"\r\n            placeholder=\"Confirmação da senha\"\r\n            autocomplete=\"off\"\r\n          />\r\n          <mat-error *ngIf=\"form.get('confirmPassword').invalid\">\r\n            A confirmação da senha é inválida.\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <mat-label>Tipo do usuário</mat-label>\r\n          <mat-select formControlName=\"type\" required>\r\n            <mat-option *ngFor=\"let type of userTypes\" [value]=\"type.value\">\r\n              {{ type.viewValue }}\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"form.get('type').invalid\"\r\n            >Tipo de usuário inválido.</mat-error\r\n          >\r\n        </mat-form-field>\r\n      </div>\r\n      <button mat-raised-button color=\"accent\" type=\"submit\">\r\n        Grava\r\n      </button>\r\n      <button type=\"button\" mat-button color=\"warn\" (click)=\"onDelete()\">\r\n        Remove\r\n      </button>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/users-list/users-list.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/users-list/users-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n  <button mat-fab class=\"md-fab-bottom-right\" color=\"accent\" aria-label=\"Adicionar usuário.\" (click)=\"onAddUser()\">\n    <mat-icon>add</mat-icon>\n  </button>\n\n  <mat-table [dataSource]=\"users\" class=\"mat-elevation-z6\">\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"fullname\">\n      <mat-header-cell *matHeaderCellDef> Nome Completo </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{ row.fullname }} </mat-cell>\n    </ng-container>\n\n    <!-- Login Column -->\n    <ng-container matColumnDef=\"login\">\n      <mat-header-cell *matHeaderCellDef> Login </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{ row.login }} </mat-cell>\n    </ng-container>\n\n    <!-- Type Column -->\n    <ng-container matColumnDef=\"type\">\n      <mat-header-cell *matHeaderCellDef> Tipo </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{ row.type }} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\" (click)=\"onEditUser(row.login)\"></mat-row>\n  </mat-table>\n</div>\n<br/>\n<mat-paginator\n  [length]=\"totalUsers\"\n  [pageSize]=\"usersPerPage\"\n  [pageSizeOptions]=\"pageSizeOptions\"\n  (page)=\"onChangedPage($event)\"\n  *ngIf=\"users.length > 0\"\n>\n</mat-paginator>\n<p class=\"info-text mat-body-1\" *ngIf=\"users.length <= 0 && !isLoading\">\n  Não há nenhum usuário inserido.\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/utils/confirmation-dialog/confirmation-dialog.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/utils/confirmation-dialog/confirmation-dialog.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>{{ message }}</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Não</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Sim</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/utils/info-window/info-window.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/utils/info-window/info-window.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"auth-auth-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/angular-material.module.ts":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let AngularMaterialModule = class AngularMaterialModule {
};
AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"]
        ]
    })
], AngularMaterialModule);



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
/* harmony import */ var _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users-list/users-list.component */ "./src/app/users/users-list/users-list.component.ts");
/* harmony import */ var _users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/user-edit/user-edit.component */ "./src/app/users/user-edit/user-edit.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");






// { path: 'edit/:userId', component: UserEditComponent, canActivate: [AuthGuard] },
const routes = [
    { path: '', component: _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_3__["UsersListComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'users/create', component: _users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_4__["UserEditComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'users/edit/:login', component: _users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_4__["UserEditComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app-utils.module.ts":
/*!*************************************!*\
  !*** ./src/app/app-utils.module.ts ***!
  \*************************************/
/*! exports provided: AppUtilsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUtilsModule", function() { return AppUtilsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utils_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/confirmation-dialog/confirmation-dialog.component */ "./src/app/utils/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _utils_info_window_info_window_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/info-window/info-window.component */ "./src/app/utils/info-window/info-window.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






let AppUtilsModule = class AppUtilsModule {
};
AppUtilsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"]
        ],
        declarations: [_utils_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"], _utils_info_window_info_window_component__WEBPACK_IMPORTED_MODULE_4__["InfoWindowComponent"]],
        exports: [
            _utils_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"],
            _utils_info_window_info_window_component__WEBPACK_IMPORTED_MODULE_4__["InfoWindowComponent"]
        ],
        entryComponents: [_utils_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"], _utils_info_window_info_window_component__WEBPACK_IMPORTED_MODULE_4__["InfoWindowComponent"]]
    })
], AppUtilsModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main{\r\n  width: 80%;\r\n  margin: 1rem auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWlue1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbn1cclxuIl19 */"

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Turbospot-users-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error-interceptor */ "./src/app/error-interceptor.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./users/users.module */ "./src/app/users/users.module.ts");
/* harmony import */ var _app_utils_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-utils.module */ "./src/app/app-utils.module.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_11__["AngularMaterialModule"],
            _app_utils_module__WEBPACK_IMPORTED_MODULE_13__["AppUtilsModule"],
            _users_users_module__WEBPACK_IMPORTED_MODULE_12__["UsersModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [_error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");



let AuthInterceptor = class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const authToken = this.authService.getToken();
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authToken)
        });
        return next.handle(authRequest);
    }
};
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], AuthInterceptor);



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        const isAuth = this.authService.getIsAuth();
        if (!isAuth) {
            this.router.navigate(['/auth/login']);
        }
        return isAuth;
    }
};
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/users/';
let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    getToken() {
        return this.token;
    }
    getIsAuth() {
        return this.isAuthenticated;
    }
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
    getUserId() {
        return this.userId;
    }
    getUserFullname() {
        return this.fullname;
    }
    getUserLogin() {
        return this.login;
    }
    execLogin(login, password) {
        const authData = {
            login,
            password
        };
        this.http
            .post(BACKEND_URL + 'login', authData)
            .subscribe(response => {
            const token = response.token;
            this.token = token;
            if (token) {
                const expiresInDuration = response.expiresIn;
                this.setAuthTimer(expiresInDuration);
                this.isAuthenticated = true;
                this.userId = response.id;
                this.login = response.login;
                this.fullname = response.fullname;
                this.authStatusListener.next(true);
                this.saveAuthData(token, new Date(new Date().getTime() + expiresInDuration * 1000), this.userId, this.fullname, this.login);
                this.router.navigate(['/']);
            }
        }, error => {
            this.authStatusListener.next(false);
        });
    }
    autoAuthUser() {
        const authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        const expiresIn = authInformation.expirationDate.getTime() - new Date().getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.userId = authInformation.userId;
            this.fullname = authInformation.fullname;
            this.login = authInformation.login;
            this.isAuthenticated = true;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next();
        }
    }
    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.clearAuthData();
        clearTimeout(this.tokenTimer);
        this.userId = null;
        this.router.navigate(['/auth/login']);
        console.log('logged out');
    }
    setAuthTimer(duration) {
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 1000);
    }
    saveAuthData(token, expirationDate, userId, fullname, login) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
        localStorage.setItem('userId', userId);
        localStorage.setItem('fullname', fullname);
        localStorage.setItem('login', login);
    }
    clearAuthData() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        localStorage.removeItem('userId');
        localStorage.removeItem('fullname');
        localStorage.removeItem('login');
    }
    getAuthData() {
        const token = localStorage.getItem('token');
        const expirationDate = localStorage.getItem('expiration');
        const userId = localStorage.getItem('userId');
        const fullname = localStorage.getItem('fullname');
        const login = localStorage.getItem('login');
        if (token && expirationDate) {
            return {
                token,
                expirationDate: new Date(expirationDate),
                userId,
                fullname,
                login
            };
        }
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AuthService);



/***/ }),

/***/ "./src/app/error-interceptor.ts":
/*!**************************************!*\
  !*** ./src/app/error-interceptor.ts ***!
  \**************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _utils_info_window_info_window_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/info-window/info-window.component */ "./src/app/utils/info-window/info-window.component.ts");








let ErrorInterceptor = class ErrorInterceptor {
    constructor(dialog, infoWindow) {
        this.dialog = dialog;
        this.infoWindow = infoWindow;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(event => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                if (event.status === 200) {
                    console.log(event.body.message);
                    if (event.body.message) {
                        this.infoWindow.open(event.body.message, 'Ok');
                    }
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            let errorMessage = 'Erro desconhecido.';
            if (error.error.message) {
                errorMessage = error.error.message;
            }
            this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"], { data: { message: errorMessage } });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    }
};
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _utils_info_window_info_window_component__WEBPACK_IMPORTED_MODULE_7__["InfoWindowComponent"]])
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ErrorComponent = class ErrorComponent {
    constructor(data) {
        this.data = data;
    }
};
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], ErrorComponent);



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-menu-icon {\r\n  padding: 0 14px;\r\n}\r\n\r\n.top-menu-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1tZW51LWljb24ge1xyXG4gIHBhZGRpbmc6IDAgMTRweDtcclxufVxyXG5cclxuLnRvcC1tZW51LXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let MenuComponent = class MenuComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.userIsAuthenticated = false;
    }
    ngOnInit() {
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe((isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
            this.userId = this.authService.getUserId();
            this.userFullname = this.authService.getUserFullname();
            this.userLogin = this.authService.getUserLogin();
        }));
    }
    onLogout() {
        this.authService.logout();
    }
    onListUsers() {
        this.router.navigate(['/']);
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
};
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html"),
        styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], MenuComponent);



/***/ }),

/***/ "./src/app/users/user-edit/user-edit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/users/user-edit/user-edit.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nmat-spinner {\r\n  margin: auto;\r\n}\r\n\r\n.edit-user-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.edit-user-container > * {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlci1lZGl0L3VzZXItZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC91c2Vycy91c2VyLWVkaXQvdXNlci1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubWF0LXNwaW5uZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmVkaXQtdXNlci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmVkaXQtdXNlci1jb250YWluZXIgPiAqIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/users/user-edit/user-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/users/user-edit/user-edit.component.ts ***!
  \********************************************************/
/*! exports provided: UserEditComponent, MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _utils_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/confirmation-dialog/confirmation-dialog.component */ "./src/app/utils/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");








let UserEditComponent = class UserEditComponent {
    constructor(usersService, route, authService, dialog, formBuilder) {
        this.usersService = usersService;
        this.route = route;
        this.authService = authService;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.isLoading = false;
        this.userTypes = [
            { value: 'admin', viewValue: 'Administrador' },
            { value: 'teacher', viewValue: 'Professor' },
            { value: 'student', viewValue: 'Aluno' }
        ];
        this.mode = 'create';
    }
    ngOnInit() {
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(authStatus => {
            this.isLoading = false;
        });
        this.form = this.formBuilder.group({
            fullname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            login: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        }, {
            validator: MustMatch('password', 'confirmPassword', this.mode)
        });
        this.route.paramMap.subscribe((paramMap) => {
            if (paramMap.has('login')) {
                this.mode = 'edit';
                this.login = paramMap.get('login');
                this.isLoading = true;
                const passwordControl = this.form.get('password');
                passwordControl.clearValidators();
                const confirmationControl = this.form.get('confirmPassword');
                confirmationControl.clearValidators();
                this.usersService.getUserByLogin(this.login).subscribe(userData => {
                    this.isLoading = false;
                    this.user = {
                        id: userData[0].id,
                        fullname: userData[0].fullname,
                        login: userData[0].login,
                        type: userData[0].type,
                        password: '',
                        confirmation: ''
                    };
                    this.form.setValue({
                        fullname: this.user.fullname,
                        login: this.user.login,
                        password: null,
                        type: this.user.type,
                        confirmPassword: null
                    });
                });
            }
            else {
                this.mode = 'create';
                this.login = null;
            }
        });
    }
    onSaveUser() {
        if (this.form.invalid) {
            return;
        }
        this.isLoading = true;
        if (this.mode === 'create') {
            this.usersService.addUser(this.form.value.fullname, this.form.value.login, this.form.value.password, this.form.value.type);
        }
        else {
            this.usersService.updateUser(this.user.id, this.form.value.fullname, this.form.value.login, this.form.value.type, this.form.value.password === null ? '' : this.form.value.password);
        }
        this.form.reset();
    }
    onDelete() {
        const dialogRef = this.dialog.open(_utils_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogComponent"], {
            width: '350px',
            data: 'Confirma a exclusão deste usuário?'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.usersService.deleteUser(this.user.id);
            }
        });
    }
    checkPasswords(form) {
        // here we have the 'passwords' group
        const pass = form.controls.password.value;
        const confirmPass = form.controls.confirmPass.value;
        return pass === confirmPass ? null : { notSame: true };
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
};
UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-edit',
        template: __webpack_require__(/*! raw-loader!./user-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/user-edit/user-edit.component.html"),
        styles: [__webpack_require__(/*! ./user-edit.component.css */ "./src/app/users/user-edit/user-edit.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], UserEditComponent);

// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName, formMode) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value && formMode === 'create') {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/users/users-list/users-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/users/users-list/users-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n.md-fab-bottom-right{\r\n  position: fixed !important;\r\n  right: 30px; /* Add this and change value to set the margin you want */\r\n  bottom: 30px;\r\n}\r\n\r\n.mat-row:hover {\r\n  background-color: lightgray;\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlcnMtbGlzdC91c2Vycy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsV0FBVyxFQUFFLHlEQUF5RDtFQUN0RSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLWxpc3QvdXNlcnMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWQtZmFiLWJvdHRvbS1yaWdodHtcclxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICByaWdodDogMzBweDsgLyogQWRkIHRoaXMgYW5kIGNoYW5nZSB2YWx1ZSB0byBzZXQgdGhlIG1hcmdpbiB5b3Ugd2FudCAqL1xyXG4gIGJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLm1hdC1yb3c6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/users/users-list/users-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/users/users-list/users-list.component.ts ***!
  \**********************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let UsersListComponent = class UsersListComponent {
    constructor(usersService, authService, router) {
        this.usersService = usersService;
        this.authService = authService;
        this.router = router;
        this.users = [];
        this.isLoading = false;
        this.totalUsers = 0;
        this.usersPerPage = 20;
        this.currentPage = 1;
        this.pageSizeOptions = [10, 50, 100];
        this.userIsAuthenticated = false;
        this.displayedColumns = ['fullname', 'login', 'type'];
    }
    ngOnInit() {
        this.isLoading = true;
        this.usersService.getUsers(this.usersPerPage, this.currentPage);
        this.currentUserId = this.authService.getUserId();
        this.usersSub = this.usersService
            .getUserUpdateListener()
            .subscribe((userData) => {
            this.users = userData.users;
            this.totalUsers = userData.userCount;
            this.isLoading = false;
        });
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
            this.currentUserId = this.authService.getUserId();
        });
    }
    onChangedPage(pageData) {
        this.isLoading = true;
        this.currentPage = pageData.pageIndex + 1;
        this.usersPerPage = pageData.pageSize;
        this.usersService.getUsers(this.usersPerPage, this.currentPage);
    }
    onEditUser(userLogin) {
        this.router.navigate(['/users/edit/', userLogin]);
    }
    onAddUser() {
        this.router.navigate(['/users/create/']);
    }
    ngOnDestroy() {
        this.usersSub.unsubscribe();
        this.authStatusSub.unsubscribe();
    }
};
UsersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users-list',
        template: __webpack_require__(/*! raw-loader!./users-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/users-list/users-list.component.html"),
        styles: [__webpack_require__(/*! ./users-list.component.css */ "./src/app/users/users-list/users-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], UsersListComponent);



/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _app_utils_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-utils.module */ "./src/app/app-utils.module.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/users/user-edit/user-edit.component.ts");
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users-list/users-list.component */ "./src/app/users/users-list/users-list.component.ts");









let UsersModule = class UsersModule {
};
UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__["UserEditComponent"],
            _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_8__["UsersListComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
            _app_utils_module__WEBPACK_IMPORTED_MODULE_6__["AppUtilsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ]
    })
], UsersModule);



/***/ }),

/***/ "./src/app/users/users.service.ts":
/*!****************************************!*\
  !*** ./src/app/users/users.service.ts ***!
  \****************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/users/';
let UsersService = class UsersService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.users = [];
        this.usersUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    getUsers(usersPerPage, currentPage) {
        const queryParams = `?pagesize=${usersPerPage}&page=${currentPage}`;
        this.http
            .get(BACKEND_URL + queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(userData => {
            return {
                data: userData.data.map(user => {
                    return {
                        id: user.id,
                        fullname: user.fullname,
                        login: user.login,
                        type: user.type,
                        password: null,
                        confirmation: null
                    };
                }),
                maxUsers: userData.data.length
            };
        }))
            .subscribe(mappedUsersData => {
            this.users = mappedUsersData.data;
            this.usersUpdated.next({
                users: [...this.users],
                userCount: mappedUsersData.maxUsers
            });
        });
    }
    getUserUpdateListener() {
        return this.usersUpdated.asObservable();
    }
    getUser(id) {
        return this.http.get(BACKEND_URL + id);
    }
    getUserByLogin(login) {
        return this.http.get(BACKEND_URL + login);
    }
    addUser(fullname, login, password, type) {
        const userData = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]()
            .set('fullname', fullname)
            .set('login', login)
            .set('password', password)
            .set('type', type);
        this.http
            .post(BACKEND_URL, userData)
            .subscribe(responseData => {
            this.router.navigate(['/']);
        });
    }
    updateUser(id, fullname, login, type, password) {
        let userData;
        userData = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]()
            .set('id', id.toString())
            .set('fullname', fullname)
            .set('login', login)
            .set('type', type)
            .set('password', password);
        this.http.put(BACKEND_URL + id, userData).subscribe(response => {
            this.router.navigate(['/']);
        });
    }
    deleteUser(id) {
        return this.http.delete(BACKEND_URL + id).subscribe(response => {
            this.router.navigate(['/']);
        });
    }
};
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], UsersService);



/***/ }),

/***/ "./src/app/utils/confirmation-dialog/confirmation-dialog.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/utils/confirmation-dialog/confirmation-dialog.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-content {\r\n  font-family: 'Roboto'\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbHMvY29uZmlybWF0aW9uLWRpYWxvZy9jb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdXRpbHMvY29uZmlybWF0aW9uLWRpYWxvZy9jb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bydcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/utils/confirmation-dialog/confirmation-dialog.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/utils/confirmation-dialog/confirmation-dialog.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ConfirmationDialogComponent = class ConfirmationDialogComponent {
    constructor(dialogRef, message) {
        this.dialogRef = dialogRef;
        this.message = message;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
ConfirmationDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-utils-confirmation-dialog',
        template: __webpack_require__(/*! raw-loader!./confirmation-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/utils/confirmation-dialog/confirmation-dialog.component.html"),
        styles: [__webpack_require__(/*! ./confirmation-dialog.component.css */ "./src/app/utils/confirmation-dialog/confirmation-dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], String])
], ConfirmationDialogComponent);



/***/ }),

/***/ "./src/app/utils/info-window/info-window.component.ts":
/*!************************************************************!*\
  !*** ./src/app/utils/info-window/info-window.component.ts ***!
  \************************************************************/
/*! exports provided: InfoWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindowComponent", function() { return InfoWindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let InfoWindowComponent = class InfoWindowComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.duration = 5000;
    }
    open(message, action) {
        this.snackBar.open(message, action);
    }
};
InfoWindowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./info-window.component.html */ "./node_modules/raw-loader/index.js!./src/app/utils/info-window/info-window.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], InfoWindowComponent);



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
const environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Pedro Pereira\source\repos\Turbospot-users-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map