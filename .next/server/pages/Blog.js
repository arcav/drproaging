module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Blog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Data/datos.js":
/*!***********************!*\
  !*** ./Data/datos.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst post = [{\n  Titulo: \"Post 1\",\n  Post: \"Loremipsum\",\n  Foto: \"./Photo.jpg\"\n}, {\n  Titulo: \"Post 1\",\n  Post: \"Loremipsum\",\n  Foto: \"./Photo.jpg\"\n}, {\n  Titulo: \"Post 1\",\n  Post: \"Loremipsum\",\n  Foto: \"./Photo.jpg\"\n}, {\n  Titulo: \"Post 1\",\n  Post: \"Loremipsum\",\n  Foto: \"./Photo.jpg\"\n}, {\n  Titulo: \"Post 1\",\n  Post: \"Loremipsum\",\n  Foto: \"./Photo.jpg\"\n}, {\n  Titulo: \"Post 1\",\n  Post: \"Loremipsum\",\n  Foto: \"./Photo.jpg\"\n}, {\n  Titulo: \"Post 1\",\n  Post: \"Loremipsum\",\n  Foto: \"./Photo.jpg\"\n}, {\n  Titulo: \"Post 1\",\n  Post: \"Loremipsum\",\n  Foto: \"./Photo.jpg\"\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (post);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9EYXRhL2RhdG9zLmpzPzU4MWQiXSwibmFtZXMiOlsicG9zdCIsIlRpdHVsbyIsIlBvc3QiLCJGb3RvIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLElBQUksR0FBRyxDQUNUO0FBQ0lDLFFBQU0sRUFBRSxRQURaO0FBRUlDLE1BQUksRUFBRSxZQUZWO0FBR0lDLE1BQUksRUFBRTtBQUhWLENBRFMsRUFNVDtBQUNJRixRQUFNLEVBQUUsUUFEWjtBQUVJQyxNQUFJLEVBQUUsWUFGVjtBQUdJQyxNQUFJLEVBQUU7QUFIVixDQU5TLEVBV1Q7QUFDSUYsUUFBTSxFQUFFLFFBRFo7QUFFSUMsTUFBSSxFQUFFLFlBRlY7QUFHSUMsTUFBSSxFQUFFO0FBSFYsQ0FYUyxFQWdCVDtBQUNJRixRQUFNLEVBQUUsUUFEWjtBQUVJQyxNQUFJLEVBQUUsWUFGVjtBQUdJQyxNQUFJLEVBQUU7QUFIVixDQWhCUyxFQXFCVjtBQUNLRixRQUFNLEVBQUUsUUFEYjtBQUVLQyxNQUFJLEVBQUUsWUFGWDtBQUdLQyxNQUFJLEVBQUU7QUFIWCxDQXJCVSxFQTBCVDtBQUNJRixRQUFNLEVBQUUsUUFEWjtBQUVJQyxNQUFJLEVBQUUsWUFGVjtBQUdJQyxNQUFJLEVBQUU7QUFIVixDQTFCUyxFQStCVDtBQUNJRixRQUFNLEVBQUUsUUFEWjtBQUVJQyxNQUFJLEVBQUUsWUFGVjtBQUdJQyxNQUFJLEVBQUU7QUFIVixDQS9CUyxFQW9DVDtBQUNJRixRQUFNLEVBQUUsUUFEWjtBQUVJQyxNQUFJLEVBQUUsWUFGVjtBQUdJQyxNQUFJLEVBQUU7QUFIVixDQXBDUyxDQUFiO0FBMkNlSCxtRUFBZiIsImZpbGUiOiIuL0RhdGEvZGF0b3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwb3N0ID0gW1xuICAgIHtcbiAgICAgICAgVGl0dWxvOiBcIlBvc3QgMVwiLFxuICAgICAgICBQb3N0OiBcIkxvcmVtaXBzdW1cIixcbiAgICAgICAgRm90bzogXCIuL1Bob3RvLmpwZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBUaXR1bG86IFwiUG9zdCAxXCIsXG4gICAgICAgIFBvc3Q6IFwiTG9yZW1pcHN1bVwiLFxuICAgICAgICBGb3RvOiBcIi4vUGhvdG8uanBnXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFRpdHVsbzogXCJQb3N0IDFcIixcbiAgICAgICAgUG9zdDogXCJMb3JlbWlwc3VtXCIsXG4gICAgICAgIEZvdG86IFwiLi9QaG90by5qcGdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgVGl0dWxvOiBcIlBvc3QgMVwiLFxuICAgICAgICBQb3N0OiBcIkxvcmVtaXBzdW1cIixcbiAgICAgICAgRm90bzogXCIuL1Bob3RvLmpwZ1wiLFxuICAgIH0sXG4gICB7XG4gICAgICAgIFRpdHVsbzogXCJQb3N0IDFcIixcbiAgICAgICAgUG9zdDogXCJMb3JlbWlwc3VtXCIsXG4gICAgICAgIEZvdG86IFwiLi9QaG90by5qcGdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgVGl0dWxvOiBcIlBvc3QgMVwiLFxuICAgICAgICBQb3N0OiBcIkxvcmVtaXBzdW1cIixcbiAgICAgICAgRm90bzogXCIuL1Bob3RvLmpwZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBUaXR1bG86IFwiUG9zdCAxXCIsXG4gICAgICAgIFBvc3Q6IFwiTG9yZW1pcHN1bVwiLFxuICAgICAgICBGb3RvOiBcIi4vUGhvdG8uanBnXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFRpdHVsbzogXCJQb3N0IDFcIixcbiAgICAgICAgUG9zdDogXCJMb3JlbWlwc3VtXCIsXG4gICAgICAgIEZvdG86IFwiLi9QaG90by5qcGdcIixcbiAgICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Data/datos.js\n");

/***/ }),

/***/ "./components/Logo/Logo.js":
/*!*********************************!*\
  !*** ./components/Logo/Logo.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/arcav/proyectos/drproaging/components/Logo/Logo.js\";\n\nconst StyledLogo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({\n  displayName: \"Logo__StyledLogo\",\n  componentId: \"sc-1p43cm0-0\"\n})([\"width:50%;margin-top:2rem;padding:0.9rem;@media (max-width:425px){width:80%;margin-top:2rem;padding:0.9rem;}\"]);\n\nconst Logo = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StyledLogo, {\n      src: \"./Logo.svg\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ28vTG9nby5qcz81ZTJiIl0sIm5hbWVzIjpbIlN0eWxlZExvZ28iLCJzdHlsZWQiLCJpbWciLCJMb2dvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsVUFBVSxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9IQUFoQjs7QUFZQSxNQUFNQyxJQUFJLEdBQUcsTUFBTTtBQUNmLHNCQUNJO0FBQUEsMkJBQ0kscUVBQUMsVUFBRDtBQUFZLFNBQUcsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFLSCxDQU5EOztBQVFlQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTG9nby9Mb2dvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgU3R5bGVkTG9nbyA9IHN0eWxlZC5pbWdgXG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIHBhZGRpbmc6IDAuOXJlbTtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIHBhZGRpbmc6IDAuOXJlbTtcbiAgICAgICAgXG4gICAgfVxuYDtcblxuY29uc3QgTG9nbyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFN0eWxlZExvZ28gc3JjPVwiLi9Mb2dvLnN2Z1wiIC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dvO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Logo/Logo.js\n");

/***/ }),

/***/ "./components/Posts/PostCard.js":
/*!**************************************!*\
  !*** ./components/Posts/PostCard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/arcav/proyectos/drproaging/components/Posts/PostCard.js\";\n\nconst CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"PostCard__CardWrapper\",\n  componentId: \"sc-13miy4l-0\"\n})([\"justify-content:center;margin:30px;border-radius:10px;background-color:white;border:solid black 3px;cursor:pointer;h3{font-size:28px;}img{margin:-25px 0px 0px 35px;border-radius:10px 10px 10px 10px;border:solid #fff8e1 2.8px;height:90%;width:90%;}\"]);\n\nconst PostCard = ({\n  Titulo,\n  Post,\n  Foto,\n  baseUrl\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CardWrapper, {\n      className: \"card z-depth-3\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        className: \"responsive-img z-depth-3\",\n        src: `${Foto}`\n        /*  src={`${baseUrl}${Foto[0].url}`} */\n\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: Titulo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: Post\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RzL1Bvc3RDYXJkLmpzPzJlNzEiXSwibmFtZXMiOlsiQ2FyZFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJQb3N0Q2FyZCIsIlRpdHVsbyIsIlBvc3QiLCJGb3RvIiwiYmFzZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwrUEFBakI7O0FBcUJBLE1BQU1DLFFBQVEsR0FBRyxDQUFDO0FBQUVDLFFBQUY7QUFBVUMsTUFBVjtBQUFnQkMsTUFBaEI7QUFBc0JDO0FBQXRCLENBQUQsS0FBcUM7QUFDbEQsc0JBQ0k7QUFBQSwyQkFDSSxxRUFBQyxXQUFEO0FBQWEsZUFBUyxFQUFDLGdCQUF2QjtBQUFBLDhCQUNJO0FBQ0ksaUJBQVMsRUFBQywwQkFEZDtBQUVJLFdBQUcsRUFBRyxHQUFFRCxJQUFLO0FBQ2I7O0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQU1JO0FBQUEsa0JBQUtGO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSixlQU9JO0FBQUEsa0JBQUlDO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQWFILENBZEQ7O0FBZ0JlRix1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUG9zdHMvUG9zdENhcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICBib3JkZXI6c29saWQgYmxhY2sgM3B4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgIH1cbiAgICBpbWcge1xuICAgICAgICBtYXJnaW46IC0yNXB4IDBweCAwcHggMzVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICAgICAgIGJvcmRlcjpzb2xpZCAjZmZmOGUxIDIuOHB4OyBcbiAgICAgICAgaGVpZ2h0OjkwJTtcbiAgICAgICAgd2lkdGg6OTAlO1xuICAgICAgIFxuICAgIH1cbmA7XG5cbmNvbnN0IFBvc3RDYXJkID0gKHsgVGl0dWxvLCBQb3N0LCBGb3RvLCBiYXNlVXJsIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPENhcmRXcmFwcGVyIGNsYXNzTmFtZT1cImNhcmQgei1kZXB0aC0zXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNwb25zaXZlLWltZyB6LWRlcHRoLTNcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake0ZvdG99YH1cbiAgICAgICAgICAgICAgICAgICAgLyogIHNyYz17YCR7YmFzZVVybH0ke0ZvdG9bMF0udXJsfWB9ICovXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aDM+e1RpdHVsb308L2gzPlxuICAgICAgICAgICAgICAgIDxwPntQb3N0fTwvcD5cbiAgICAgICAgICAgIDwvQ2FyZFdyYXBwZXI+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Posts/PostCard.js\n");

/***/ }),

/***/ "./pages/Blog.js":
/*!***********************!*\
  !*** ./pages/Blog.js ***!
  \***********************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Posts_PostCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Posts/PostCard */ \"./components/Posts/PostCard.js\");\n/* harmony import */ var _utils_fetchQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/fetchQuery */ \"./utils/fetchQuery.js\");\n/* harmony import */ var _Data_datos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Data/datos */ \"./Data/datos.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Logo_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Logo/Logo */ \"./components/Logo/Logo.js\");\n\n\nvar _jsxFileName = \"/home/arcav/proyectos/drproaging/pages/Blog.js\";\n\n\n\n\n\nconst PostContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({\n  displayName: \"Blog__PostContainer\",\n  componentId: \"czefe0-0\"\n})([\"height:100%;width:70%;display:grid;grid-template-rows:1fr 1fr 1fr;grid-template-columns:6fr 6fr 6fr;align-items:center;@media (max-width:425px){width:90%;display:grid;grid-template-rows:1fr;grid-template-columns:6fr;}@media (min-width:426px){width:90%;display:grid;grid-template-rows:1fr;grid-template-columns:4fr 4fr;}@media (min-width:1024px){width:80%;display:grid;grid-template-columns:2fr 2fr 2fr;}\"]);\n\nconst Blog = ({\n  post\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(PostContainer, {\n      children: post.map(post => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Posts_PostCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        Titulo: post.Titulo,\n        Post: post.Post,\n        Foto: post.Foto,\n        baseUrl: _utils_fetchQuery__WEBPACK_IMPORTED_MODULE_2__[\"baseUrl\"]\n      }, post.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 21\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false);\n};\n\nasync function getStaticProps() {\n  const res = `${_Data_datos__WEBPACK_IMPORTED_MODULE_3__[\"default\"]}`;\n  /* const res = await fetchQuery(`${datos}`);\n  const posts = await res.data */\n\n  console.log(_Data_datos__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  return {\n    props: {\n      post: _Data_datos__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9CbG9nLmpzPzQ1YTUiXSwibmFtZXMiOlsiUG9zdENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkJsb2ciLCJwb3N0IiwibWFwIiwiVGl0dWxvIiwiUG9zdCIsIkZvdG8iLCJiYXNlVXJsIiwiaWQiLCJnZXRTdGF0aWNQcm9wcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxhQUFhLEdBQUdDLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMlpBQW5COztBQTRCQSxNQUFNQyxJQUFJLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBYztBQUN2QixzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLGFBQUQ7QUFBQSxnQkFDS0EsSUFBSSxDQUFDQyxHQUFMLENBQVVELElBQUQsaUJBQ04scUVBQUMsa0VBQUQ7QUFFSSxjQUFNLEVBQUVBLElBQUksQ0FBQ0UsTUFGakI7QUFHSSxZQUFJLEVBQUVGLElBQUksQ0FBQ0csSUFIZjtBQUlJLFlBQUksRUFBRUgsSUFBSSxDQUFDSSxJQUpmO0FBS0ksZUFBTyxFQUFFQyx5REFBT0E7QUFMcEIsU0FDU0wsSUFBSSxDQUFDTSxFQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFlSCxDQWhCRDs7QUFrQk8sZUFBZUMsY0FBZixHQUFnQztBQUNuQyxRQUFNQyxHQUFHLEdBQUksR0FBRVIsbURBQUssRUFBcEI7QUFDQTtBQUNKOztBQUNJUyxTQUFPLENBQUNDLEdBQVIsQ0FBWVYsbURBQVo7QUFDQSxTQUFPO0FBQ0hXLFNBQUssRUFBRTtBQUNIWCwrREFBSUE7QUFERDtBQURKLEdBQVA7QUFLSDtBQUVjRCxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL0Jsb2cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdHMvUG9zdENhcmRcIjtcbmltcG9ydCB7IGZldGNoUXVlcnksIGJhc2VVcmwgfSBmcm9tIFwiLi4vdXRpbHMvZmV0Y2hRdWVyeVwiO1xuaW1wb3J0IHBvc3QgZnJvbSBcIi4uL0RhdGEvZGF0b3NcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2dvL0xvZ29cIjtcblxuY29uc3QgUG9zdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyIDZmciA2ZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2ZnI7XG4gICAgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA0MjZweCkge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgNGZyO1xuICAgIH1cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG5cbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyIDJmcjtcbiAgICB9XG5gO1xuXG5jb25zdCBCbG9nID0gKHsgcG9zdCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxQb3N0Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIHtwb3N0Lm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8UG9zdENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cG9zdC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFRpdHVsbz17cG9zdC5UaXR1bG99XG4gICAgICAgICAgICAgICAgICAgICAgICBQb3N0PXtwb3N0LlBvc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICBGb3RvPXtwb3N0LkZvdG99XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlVXJsPXtiYXNlVXJsfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Qb3N0Q29udGFpbmVyPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIGNvbnN0IHJlcyA9IGAke3Bvc3R9YDtcbiAgICAvKiBjb25zdCByZXMgPSBhd2FpdCBmZXRjaFF1ZXJ5KGAke2RhdG9zfWApO1xuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmRhdGEgKi9cbiAgICBjb25zb2xlLmxvZyhwb3N0KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcG9zdCxcbiAgICAgICAgfSxcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Blog.js\n");

/***/ }),

/***/ "./utils/fetchQuery.js":
/*!*****************************!*\
  !*** ./utils/fetchQuery.js ***!
  \*****************************/
/*! exports provided: baseUrl, fetchQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"baseUrl\", function() { return baseUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchQuery\", function() { return fetchQuery; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst baseUrl = process.env.BASE_URL || \"http://localhost:1337\";\n\nconst fetchQuery = (path, params = null) => {\n  let url;\n\n  if (params !== null) {\n    url = `${baseUrl}/${path}/${params}`;\n  } else {\n    url = `${baseUrl}/${path}`;\n  }\n\n  const res = axios__WEBPACK_IMPORTED_MODULE_0___default()(`${url}`);\n  const posts = res;\n  return posts;\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9mZXRjaFF1ZXJ5LmpzPzAyMDEiXSwibmFtZXMiOlsiYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJCQVNFX1VSTCIsImZldGNoUXVlcnkiLCJwYXRoIiwicGFyYW1zIiwidXJsIiwicmVzIiwiYXhpb3MiLCJwb3N0cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsT0FBTyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixJQUF3Qix1QkFBeEM7O0FBR0EsTUFBTUMsVUFBVSxHQUFFLENBQUNDLElBQUQsRUFBT0MsTUFBTSxHQUFDLElBQWQsS0FBeUI7QUFFdkMsTUFBSUMsR0FBSjs7QUFHQSxNQUFJRCxNQUFNLEtBQUssSUFBZixFQUFxQjtBQUNqQkMsT0FBRyxHQUFJLEdBQUVQLE9BQVEsSUFBR0ssSUFBSyxJQUFHQyxNQUFPLEVBQW5DO0FBQ0gsR0FGRCxNQUVPO0FBQ0hDLE9BQUcsR0FBSSxHQUFFUCxPQUFRLElBQUdLLElBQUssRUFBekI7QUFDSDs7QUFFRCxRQUFNRyxHQUFHLEdBQUdDLDRDQUFLLENBQUUsR0FBRUYsR0FBSSxFQUFSLENBQWpCO0FBQ0EsUUFBTUcsS0FBSyxHQUFHRixHQUFkO0FBQ0EsU0FBT0UsS0FBUDtBQUNILENBZEQiLCJmaWxlIjoiLi91dGlscy9mZXRjaFF1ZXJ5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuQkFTRV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIjtcblxuXG5jb25zdCBmZXRjaFF1ZXJ5ID0ocGF0aCwgcGFyYW1zPW51bGwgKSAgPT4ge1xuICAgIFxuICAgIGxldCB1cmw7XG5cblxuICAgIGlmIChwYXJhbXMgIT09IG51bGwpIHtcbiAgICAgICAgdXJsID0gYCR7YmFzZVVybH0vJHtwYXRofS8ke3BhcmFtc31gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHVybCA9IGAke2Jhc2VVcmx9LyR7cGF0aH1gO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcyA9IGF4aW9zKGAke3VybH1gKTtcbiAgICBjb25zdCBwb3N0cyA9IHJlc1xuICAgIHJldHVybiBwb3N0c1xufVxuXG5leHBvcnQgIHtiYXNlVXJsICwgZmV0Y2hRdWVyeSB9IDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/fetchQuery.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });