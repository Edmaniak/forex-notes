/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/src/scss/app.scss");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/src/scss/app.scss":
/*!************************************!*\
  !*** ./frontend/src/scss/app.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nSassError: There's already a module with namespace \\\"mdc-typography\\\".\\n    ╷\\n1   │ @use \\\"@material/typography/mdc-typography\\\";\\r\\n    │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ original @use\\n... │\\n13  │ @use \\\"@material/typography/mdc-typography\\\";\\r\\n    │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ new @use\\n    ╵\\n  frontend\\\\src\\\\scss\\\\material.scss 13:1  @import\\n  D:\\\\PRIVATE\\\\forex-notes\\\\frontend\\\\src\\\\scss\\\\app.scss 3:9                             root stylesheet\\n    at runLoaders (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:316:20)\\n    at D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:233:18\\n    at context.callback (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:111:13)\\n    at render (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass-loader\\\\dist\\\\index.js:73:7)\\n    at Function.call$2 (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:87584:16)\\n    at _render_closure1.call$2 (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:77359:12)\\n    at _RootZone.runBinary$3$3 (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:25587:18)\\n    at _RootZone.runBinary$3 (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:25591:19)\\n    at _FutureListener.handleError$1 (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:24041:19)\\n    at _Future__propagateToListeners_handleError.call$0 (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:24337:40)\\n    at Object._Future__propagateToListeners (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:3497:88)\\n    at _Future._completeError$2 (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:24165:9)\\n    at _AsyncAwaitCompleter.completeError$2 (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:23557:12)\\n    at Object._asyncRethrow (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:3253:17)\\n    at D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:13333:20\\n    at _wrapJsFunctionForAsync_closure.$protected (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:3276:15)\\n    at _wrapJsFunctionForAsync_closure.call$2 (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:23578:12)\\n    at _awaitOnObject_closure0.call$2 (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:23570:25)\\n    at _RootZone.runBinary$3$3 (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:25587:18)\\n    at _RootZone.runBinary$3 (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:25591:19)\\n    at _FutureListener.handleError$1 (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:24041:19)\\n    at _Future__propagateToListeners_handleError.call$0 (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:24337:40)\\n    at Object._Future__propagateToListeners (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:3497:88)\\n    at _Future._completeError$2 (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:24165:9)\\n    at _AsyncAwaitCompleter.completeError$2 (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:23557:12)\\n    at Object._asyncRethrow (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:3253:17)\\n    at D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:15991:20\\n    at _wrapJsFunctionForAsync_closure.$protected (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:3276:15)\\n    at _wrapJsFunctionForAsync_closure.call$2 (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:23578:12)\\n    at _awaitOnObject_closure0.call$2 (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:23570:25)\\n    at _RootZone.runBinary$3$3 (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:25587:18)\\n    at _RootZone.runBinary$3 (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:25591:19)\\n    at _FutureListener.handleError$1 (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:24041:19)\\n    at _Future__propagateToListeners_handleError.call$0 (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:24337:40)\\n    at Object._Future__propagateToListeners (D:\\\\PRIVATE\\\\forex-notes\\\\node_modules\\\\sass\\\\sass.dart.js:3497:88)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC9zcmMvc2Nzcy9hcHAuc2Nzcy5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./frontend/src/scss/app.scss\n");

/***/ })

/******/ });