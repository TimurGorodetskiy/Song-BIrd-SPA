/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/app.component.js":
/*!**********************************!*\
  !*** ./src/app/app.component.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appComponent\": () => (/* binding */ appComponent)\n/* harmony export */ });\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../framework */ \"./src/framework/index.js\");\n\n\nclass AppComponent extends _framework__WEBPACK_IMPORTED_MODULE_0__.WFMComponent {\n  constructor(config) {\n    super(config);\n  }\n}\n\nconst appComponent = new AppComponent({\n  selector: 'body',\n  template: `\n     <h1>App is Working</>\n     <h3>It's really working<h3/>\n    `,\n});\n\n\n//# sourceURL=webpack://songbirdspa/./src/app/app.component.js?");

/***/ }),

/***/ "./src/app/app.module.js":
/*!*******************************!*\
  !*** ./src/app/app.module.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appModule\": () => (/* binding */ appModule)\n/* harmony export */ });\n/* harmony import */ var _framework_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../framework/index */ \"./src/framework/index.js\");\n/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ \"./src/app/app.component.js\");\n\n\n\nclass AppModule extends _framework_index__WEBPACK_IMPORTED_MODULE_0__.WFMModule {\n  constructor(config) {\n    super(config);\n  }\n}\n\nconst appModule = new AppModule({\n  components: [],\n  bootstrap: _app_component__WEBPACK_IMPORTED_MODULE_1__.appComponent,\n});\n\n\n//# sourceURL=webpack://songbirdspa/./src/app/app.module.js?");

/***/ }),

/***/ "./src/framework/core/bootstrap.js":
/*!*****************************************!*\
  !*** ./src/framework/core/bootstrap.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bootstrap\": () => (/* binding */ bootstrap)\n/* harmony export */ });\nfunction bootstrap(module) {\n  module.start();\n}\n\n\n//# sourceURL=webpack://songbirdspa/./src/framework/core/bootstrap.js?");

/***/ }),

/***/ "./src/framework/core/component.js":
/*!*****************************************!*\
  !*** ./src/framework/core/component.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => (/* binding */ Component)\n/* harmony export */ });\nclass Component {\n  constructor(config) {\n    this.template = config.template;\n    this.selector = config.selector;\n    this.el = null;\n  }\n\n  render() {\n    this.el = document.querySelector(this.selector);\n    if (!this.el) {\n      throw new Error(`Component with selector ${this.selector} wasn't found`);\n    }\n\n    this.el.innerHTML = this.template;\n  }\n}\n\n\n//# sourceURL=webpack://songbirdspa/./src/framework/core/component.js?");

/***/ }),

/***/ "./src/framework/core/module.js":
/*!**************************************!*\
  !*** ./src/framework/core/module.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Module\": () => (/* binding */ Module)\n/* harmony export */ });\nclass Module {\n  constructor(config) {\n    this.components = config.components;\n    this.bootstrapComponent = config.bootstrap;\n  }\n\n  start() {\n    this.initComponents();\n  }\n\n  initComponents() {\n    this.bootstrapComponent.render();\n    this.components.forEach((c) => c.render());\n  }\n}\n\n\n//# sourceURL=webpack://songbirdspa/./src/framework/core/module.js?");

/***/ }),

/***/ "./src/framework/index.js":
/*!********************************!*\
  !*** ./src/framework/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WFMComponent\": () => (/* reexport safe */ _core_component__WEBPACK_IMPORTED_MODULE_0__.Component),\n/* harmony export */   \"WFMModule\": () => (/* reexport safe */ _core_module__WEBPACK_IMPORTED_MODULE_1__.Module),\n/* harmony export */   \"bootstrap\": () => (/* reexport safe */ _core_bootstrap__WEBPACK_IMPORTED_MODULE_2__.bootstrap)\n/* harmony export */ });\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/component */ \"./src/framework/core/component.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/module */ \"./src/framework/core/module.js\");\n/* harmony import */ var _core_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/bootstrap */ \"./src/framework/core/bootstrap.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://songbirdspa/./src/framework/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ \"./src/app/app.module.js\");\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./framework */ \"./src/framework/index.js\");\n\n\n\n(0,_framework__WEBPACK_IMPORTED_MODULE_1__.bootstrap)(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.appModule);\n\n\n//# sourceURL=webpack://songbirdspa/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;