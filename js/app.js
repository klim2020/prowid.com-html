/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _blocks_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/header.js */ \"./src/js/blocks/header.js\");\n/* harmony import */ var _blocks_header_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_header_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* Your JS Code goes here */\n\n/* Review */\n//import './blocks/menu.js';\n\n/* Demo JS */\n\n/* Modal window */\n//import './blocks/modal.js';\n/* Footer */\n//import './blocks/footer.js';\n/* Portfolio */\n//import './blocks/portfolio.js';\n/* Review */\n//import './blocks/review';\n\n/* Review */\n//import './blocks/test';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBNEI7O0FBRTVCOztBQUdBO0FBQ0E7O0FBRUE7QUFDNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYXJlYXRobG9uL2Zyb250ZW5kLXdlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvYXBwLmpzPzkwZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zY3NzL3N0eWxlLnNjc3MnO1xuXG4vKiBZb3VyIEpTIENvZGUgZ29lcyBoZXJlICovXG5cblxuLyogUmV2aWV3ICovXG4vL2ltcG9ydCAnLi9ibG9ja3MvbWVudS5qcyc7XG5cbi8qIERlbW8gSlMgKi9cbmltcG9ydCAnLi9ibG9ja3MvaGVhZGVyLmpzJztcbi8qIE1vZGFsIHdpbmRvdyAqL1xuLy9pbXBvcnQgJy4vYmxvY2tzL21vZGFsLmpzJztcbi8qIEZvb3RlciAqL1xuLy9pbXBvcnQgJy4vYmxvY2tzL2Zvb3Rlci5qcyc7XG4vKiBQb3J0Zm9saW8gKi9cbi8vaW1wb3J0ICcuL2Jsb2Nrcy9wb3J0Zm9saW8uanMnO1xuLyogUmV2aWV3ICovXG4vL2ltcG9ydCAnLi9ibG9ja3MvcmV2aWV3JztcblxuLyogUmV2aWV3ICovXG4vL2ltcG9ydCAnLi9ibG9ja3MvdGVzdCc7XG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/js/blocks/header.js":
/*!*********************************!*\
  !*** ./src/js/blocks/header.js ***!
  \*********************************/
/***/ (() => {

eval("$(document).ready(function () {\n  $(\".category__block\").click(() => {\n    $(\"#menu-toggle\").prop(\"checked\", !$(\"#menu-toggle\").prop(\"checked\"));\n  });\n  $(\".header_slider\").slick({\n    dots: true,\n    dotsClass: \"slider__dot\",\n    prevArrow: `<a href=\"#\" class=\"slider__arrow animate_shadow slider__arrow_left d-flex flex-row align-items-center justify-content-center\"><img src=\"images/arrow-left.png\" alt=\"\"></a>`,\n    nextArrow: `<a href=\"#\" class=\"slider__arrow animate_shadow slider__arrow_right d-flex flex-row align-items-center justify-content-center ml-4\"><img src=\"images/arrow-right.png\" alt=\"\"></a>`\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYmxvY2tzL2hlYWRlci5qcy5qcyIsIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiY2xpY2siLCJwcm9wIiwic2xpY2siLCJkb3RzIiwiZG90c0NsYXNzIiwicHJldkFycm93IiwibmV4dEFycm93Il0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9ibG9ja3MvaGVhZGVyLmpzPzMwMzgiXSwic291cmNlc0NvbnRlbnQiOlsiJCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAkKFwiLmNhdGVnb3J5X19ibG9ja1wiKS5jbGljayggKCk9PntcbiAgICAgICAgJChcIiNtZW51LXRvZ2dsZVwiKS5wcm9wKCBcImNoZWNrZWRcIiwgISgkKFwiI21lbnUtdG9nZ2xlXCIpLnByb3AoIFwiY2hlY2tlZFwiKSkgKTtcbiAgICB9KVxuICAgICQoXCIuaGVhZGVyX3NsaWRlclwiKS5zbGljayh7XG4gICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIGRvdHNDbGFzczpcInNsaWRlcl9fZG90XCIsXG4gICAgICAgIHByZXZBcnJvdzogYDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJzbGlkZXJfX2Fycm93IGFuaW1hdGVfc2hhZG93IHNsaWRlcl9fYXJyb3dfbGVmdCBkLWZsZXggZmxleC1yb3cgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj48aW1nIHNyYz1cImltYWdlcy9hcnJvdy1sZWZ0LnBuZ1wiIGFsdD1cIlwiPjwvYT5gLFxuICAgICAgICBuZXh0QXJyb3c6IGA8YSBocmVmPVwiI1wiIGNsYXNzPVwic2xpZGVyX19hcnJvdyBhbmltYXRlX3NoYWRvdyBzbGlkZXJfX2Fycm93X3JpZ2h0IGQtZmxleCBmbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBtbC00XCI+PGltZyBzcmM9XCJpbWFnZXMvYXJyb3ctcmlnaHQucG5nXCIgYWx0PVwiXCI+PC9hPmAsXG4gICAgfSk7XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUFBLENBQUMsQ0FBRUMsUUFBUSxDQUFFLENBQUNDLEtBQUssQ0FBQyxZQUFXO0VBQzNCRixDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQ0csS0FBSyxDQUFFLE1BQUk7SUFDN0JILENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQ0ksSUFBSSxDQUFFLFNBQVMsRUFBRSxDQUFFSixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUNJLElBQUksQ0FBRSxTQUFTLENBQUUsQ0FBRTtFQUM5RSxDQUFDLENBQUM7RUFDRkosQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNLLEtBQUssQ0FBQztJQUN0QkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsU0FBUyxFQUFDLGFBQWE7SUFDdkJDLFNBQVMsRUFBRyw0S0FBMks7SUFDdkxDLFNBQVMsRUFBRztFQUNoQixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMifQ==\n//# sourceURL=webpack-internal:///./src/js/blocks/header.js\n");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9zdHlsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL0B3ZWFyZWF0aGxvbi9mcm9udGVuZC13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz83NTVkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/style.scss\n");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;