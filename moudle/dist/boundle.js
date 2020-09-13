(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/divided.js":
/*!************************!*\
  !*** ./src/divided.js ***!
  \************************/
/*! exports provided: divided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"divided\", function() { return divided; });\n/*\r\n* @Author: lipan\r\n* @Date:   2020-09-13 10:27:55\r\n* @Last Modified by:   李盼和岳聪\r\n* @Last Modified time: 2020-09-13 10:28:50\r\n*/\r\nfunction divided(a,b){\r\n\treturn a/b;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/divided.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _output_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./output.js */ \"./src/output.js\");\n/*\r\n* @Author: lipan\r\n* @Date:   2020-09-13 11:13:37\r\n* @Last Modified by:   李盼和岳聪\r\n* @Last Modified time: 2020-09-13 11:39:00\r\n*/\r\n\r\ndocument.getElementById(\"btn\").addEventListener(\"click\",function(){\r\n\tdocument.body.style.backgroundColor=='green'?document.body.style.backgroundColor='white':document.body.style.backgroundColor='green';\r\n})\r\nconsole.log(_output_js__WEBPACK_IMPORTED_MODULE_0__);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/multiplied.js":
/*!***************************!*\
  !*** ./src/multiplied.js ***!
  \***************************/
/*! exports provided: multiplied */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"multiplied\", function() { return multiplied; });\n/*\r\n* @Author: lipan\r\n* @Date:   2020-09-13 10:26:34\r\n* @Last Modified by:   李盼和岳聪\r\n* @Last Modified time: 2020-09-13 10:27:17\r\n*/\r\nfunction multiplied(a,b){\r\n\treturn a*b\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/multiplied.js?");

/***/ }),

/***/ "./src/output.js":
/*!***********************!*\
  !*** ./src/output.js ***!
  \***********************/
/*! exports provided: sum, plus, multiplied, divided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_sum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/sum.js */ \"./src/sum.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"sum\", function() { return _src_sum_js__WEBPACK_IMPORTED_MODULE_0__[\"sum\"]; });\n\n/* harmony import */ var _src_plus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/plus.js */ \"./src/plus.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"plus\", function() { return _src_plus_js__WEBPACK_IMPORTED_MODULE_1__[\"plus\"]; });\n\n/* harmony import */ var _src_multiplied_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/multiplied.js */ \"./src/multiplied.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"multiplied\", function() { return _src_multiplied_js__WEBPACK_IMPORTED_MODULE_2__[\"multiplied\"]; });\n\n/* harmony import */ var _src_divided_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/divided.js */ \"./src/divided.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"divided\", function() { return _src_divided_js__WEBPACK_IMPORTED_MODULE_3__[\"divided\"]; });\n\n/*\r\n* @Author: lipan\r\n* @Date:   2020-09-13 10:36:11\r\n* @Last Modified by:   李盼和岳聪\r\n* @Last Modified time: 2020-09-13 11:14:16\r\n*/\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/output.js?");

/***/ }),

/***/ "./src/plus.js":
/*!*********************!*\
  !*** ./src/plus.js ***!
  \*********************/
/*! exports provided: plus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"plus\", function() { return plus; });\n/*\r\n* @Author: lipan\r\n* @Date:   2020-09-13 10:24:49\r\n* @Last Modified by:   李盼和岳聪\r\n* @Last Modified time: 2020-09-13 10:25:14\r\n*/\r\nfunction plus(a,b){\r\n\treturn a-b\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/plus.js?");

/***/ }),

/***/ "./src/sum.js":
/*!********************!*\
  !*** ./src/sum.js ***!
  \********************/
/*! exports provided: sum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sum\", function() { return sum; });\n/*\r\n* @Author: lipan\r\n* @Date:   2020-09-13 10:23:24\r\n* @Last Modified by:   李盼和岳聪\r\n* @Last Modified time: 2020-09-13 10:23:58\r\n*/\r\nfunction sum(a,b){\r\n\treturn a+b;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/sum.js?");

/***/ })

/******/ });
});