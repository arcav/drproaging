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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Buttons/SocialBtn.js":
/*!*****************************************!*\
  !*** ./components/Buttons/SocialBtn.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled_icons_foundation_SocialInstagram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-icons/foundation/SocialInstagram */ \"@styled-icons/foundation/SocialInstagram\");\n/* harmony import */ var _styled_icons_foundation_SocialInstagram__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_foundation_SocialInstagram__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styled_icons_remix_fill_Whatsapp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styled-icons/remix-fill/Whatsapp */ \"@styled-icons/remix-fill/Whatsapp\");\n/* harmony import */ var _styled_icons_remix_fill_Whatsapp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_remix_fill_Whatsapp__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styled_icons_fa_brands_Linkedin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styled-icons/fa-brands/Linkedin */ \"@styled-icons/fa-brands/Linkedin\");\n/* harmony import */ var _styled_icons_fa_brands_Linkedin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_brands_Linkedin__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styled_icons_icomoon_Facebook2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @styled-icons/icomoon/Facebook2 */ \"@styled-icons/icomoon/Facebook2\");\n/* harmony import */ var _styled_icons_icomoon_Facebook2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_icomoon_Facebook2__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/home/arcav/proyectos/drproaging/components/Buttons/SocialBtn.js\";\n\n\n\n\n\nconst Ig = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styled_icons_foundation_SocialInstagram__WEBPACK_IMPORTED_MODULE_2__[\"SocialInstagram\"]).withConfig({\n  displayName: \"SocialBtn__Ig\",\n  componentId: \"sc-1plwsmr-0\"\n})([\"color:black;margin:0.1rem;padding:5px;width:3.3rem;:hover{width:3.5rem;color:#fd1d1d;}\"]);\nconst Fb = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styled_icons_icomoon_Facebook2__WEBPACK_IMPORTED_MODULE_5__[\"Facebook2\"]).withConfig({\n  displayName: \"SocialBtn__Fb\",\n  componentId: \"sc-1plwsmr-1\"\n})([\"color:black;margin:0.1rem;padding:5px;width:2.7rem;:hover{width:3rem;color:blue;}\"]);\nconst Linkdin = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styled_icons_fa_brands_Linkedin__WEBPACK_IMPORTED_MODULE_4__[\"Linkedin\"]).withConfig({\n  displayName: \"SocialBtn__Linkdin\",\n  componentId: \"sc-1plwsmr-2\"\n})([\"color:black;margin:0.1rem;padding:5px;width:2.7rem;:hover{width:3rem;color:blue;}\"]);\nconst Whats = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styled_icons_remix_fill_Whatsapp__WEBPACK_IMPORTED_MODULE_3__[\"Whatsapp\"]).withConfig({\n  displayName: \"SocialBtn__Whats\",\n  componentId: \"sc-1plwsmr-3\"\n})([\"color:black;margin:0.1rem;padding:5px;width:3.3rem;:hover{width:3.8rem;color:green;}\"]);\nconst SocialGroup = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"SocialBtn__SocialGroup\",\n  componentId: \"sc-1plwsmr-4\"\n})([\"display:flex;flex-direction:row;justify-content:space-around;@media (min-width:320px){width:80%;}\"]);\n\nconst SocialBtn = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SocialGroup, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Ig, {\n      size: \"48\",\n      className: \" waves-effect waves-light white\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Fb, {\n      size: \"48\",\n      className: \" waves-effect waves-light white\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Whats, {\n      size: \"48\",\n      className: \" waves-effect waves-light white\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Linkdin, {\n      size: \"48\",\n      className: \" waves-effect waves-light white\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 67,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocialBtn);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbnMvU29jaWFsQnRuLmpzPzgxZmIiXSwibmFtZXMiOlsiSWciLCJzdHlsZWQiLCJTb2NpYWxJbnN0YWdyYW0iLCJGYiIsIkZhY2Vib29rMiIsIkxpbmtkaW4iLCJMaW5rZWRpbiIsIldoYXRzIiwiV2hhdHNhcHAiLCJTb2NpYWxHcm91cCIsImRpdiIsIlNvY2lhbEJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLEVBQUUsR0FBR0Msd0RBQU0sQ0FBQ0Msd0ZBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSw4RkFBUjtBQVlBLE1BQU1DLEVBQUUsR0FBR0Ysd0RBQU0sQ0FBQ0cseUVBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSx5RkFBUjtBQVlBLE1BQU1DLE9BQU8sR0FBR0osd0RBQU0sQ0FBQ0sseUVBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSx5RkFBYjtBQVlBLE1BQU1DLEtBQUssR0FBR04sd0RBQU0sQ0FBQ08sMEVBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSw0RkFBWDtBQVlBLE1BQU1DLFdBQVcsR0FBR1Isd0RBQU0sQ0FBQ1MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5R0FBakI7O0FBVUEsTUFBTUMsU0FBUyxHQUFHLE1BQU07QUFDcEIsc0JBQ0kscUVBQUMsV0FBRDtBQUFBLDRCQUNJLHFFQUFDLEVBQUQ7QUFBSSxVQUFJLEVBQUMsSUFBVDtBQUFjLGVBQVMsRUFBQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUkscUVBQUMsRUFBRDtBQUFLLFVBQUksRUFBQyxJQUFWO0FBQWMsZUFBUyxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSSxxRUFBQyxLQUFEO0FBQVEsVUFBSSxFQUFDLElBQWI7QUFBa0IsZUFBUyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosZUFJSSxxRUFBQyxPQUFEO0FBQVUsVUFBSSxFQUFDLElBQWY7QUFBbUIsZUFBUyxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFRSCxDQVREOztBQVVlQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQnV0dG9ucy9Tb2NpYWxCdG4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgU29jaWFsSW5zdGFncmFtIH0gZnJvbSBcIkBzdHlsZWQtaWNvbnMvZm91bmRhdGlvbi9Tb2NpYWxJbnN0YWdyYW1cIjtcbmltcG9ydCB7IFdoYXRzYXBwIH0gZnJvbSBcIkBzdHlsZWQtaWNvbnMvcmVtaXgtZmlsbC9XaGF0c2FwcFwiO1xuaW1wb3J0IHsgTGlua2VkaW4gfSBmcm9tIFwiQHN0eWxlZC1pY29ucy9mYS1icmFuZHMvTGlua2VkaW5cIjtcbmltcG9ydCB7IEZhY2Vib29rMiB9IGZyb20gXCJAc3R5bGVkLWljb25zL2ljb21vb24vRmFjZWJvb2syXCI7XG5cbmNvbnN0IElnID0gc3R5bGVkKFNvY2lhbEluc3RhZ3JhbSlgXG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbjogMC4xcmVtO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogMy4zcmVtO1xuXG4gICAgOmhvdmVyIHtcbiAgICAgICAgd2lkdGg6IDMuNXJlbTtcbiAgICAgICAgY29sb3I6ICNmZDFkMWQ7XG4gICAgfVxuYDtcblxuY29uc3QgRmIgPSBzdHlsZWQoRmFjZWJvb2syKWBcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luOiAwLjFyZW07XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiAyLjdyZW07XG5cbiAgICA6aG92ZXIge1xuICAgICAgICB3aWR0aDogM3JlbTtcbiAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgfVxuYDtcblxuY29uc3QgTGlua2RpbiA9IHN0eWxlZChMaW5rZWRpbilgXG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbjogMC4xcmVtO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogMi43cmVtO1xuXG4gICAgOmhvdmVyIHtcbiAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgIH1cbmA7XG5cbmNvbnN0IFdoYXRzID0gc3R5bGVkKFdoYXRzYXBwKWBcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luOiAwLjFyZW07XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiAzLjNyZW07XG5cbiAgICA6aG92ZXIge1xuICAgICAgICB3aWR0aDogMy44cmVtO1xuICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgfVxuYDtcblxuY29uc3QgU29jaWFsR3JvdXAgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgIH1cbmA7XG5cbmNvbnN0IFNvY2lhbEJ0biA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U29jaWFsR3JvdXA+XG4gICAgICAgICAgICA8SWcgc2l6ZT1cIjQ4XCIgY2xhc3NOYW1lPVwiIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCB3aGl0ZVwiIC8+XG4gICAgICAgICAgICA8RmIgIHNpemU9XCI0OFwiY2xhc3NOYW1lPVwiIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCB3aGl0ZVwiIC8+XG4gICAgICAgICAgICA8V2hhdHMgIHNpemU9XCI0OFwiIGNsYXNzTmFtZT1cIiB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgd2hpdGVcIiAvPlxuICAgICAgICAgICAgPExpbmtkaW4gIHNpemU9XCI0OFwiY2xhc3NOYW1lPVwiIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCB3aGl0ZVwiIC8+XG4gICAgICAgIDwvU29jaWFsR3JvdXA+XG4gICAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTb2NpYWxCdG47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Buttons/SocialBtn.js\n");

/***/ }),

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Buttons_SocialBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Buttons/SocialBtn */ \"./components/Buttons/SocialBtn.js\");\n\nvar _jsxFileName = \"/home/arcav/proyectos/drproaging/components/Footer/Footer.js\";\n\n\nconst Footer = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Buttons_SocialBtn__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 8\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanM/MWQ3NyJdLCJuYW1lcyI6WyJGb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUdBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQ2pCLHNCQUNHLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESDtBQUdILENBSkQ7O0FBTWVBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNvY2lhbEJ0biBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J1dHRvbnMvU29jaWFsQnRuJyBcblxuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICA8U29jaWFsQnRuLz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Footer/Footer.js\n");

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

/***/ "./pages/Layout/Layout.js":
/*!********************************!*\
  !*** ./pages/Layout/Layout.js ***!
  \********************************/
/*! exports provided: Container, GlobalStyle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyle\", function() { return GlobalStyle; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-normalize */ \"styled-normalize\");\n/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_normalize__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Footer/Footer */ \"./components/Footer/Footer.js\");\n/* harmony import */ var _components_Logo_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Logo/Logo */ \"./components/Logo/Logo.js\");\n\n\nvar _jsxFileName = \"/home/arcav/proyectos/drproaging/pages/Layout/Layout.js\";\n\n\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"Layout__Container\",\n  componentId: \"sc-24vftw-0\"\n})([\"display:flex;flex-direction:column;align-items:center;margin:20px auto;width:95%;height:95%;border-radius:20px;\"]);\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"createGlobalStyle\"]`\n${styled_normalize__WEBPACK_IMPORTED_MODULE_2__[\"normalize\"]}\nhtml{\n    html {\n      font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif\n   \n  }\n  body {\n    border-style: double;\n    border-width: 10px;\n    border-color: #9e9e9e;\n    background-color:#EDF2F7;\n    height:100%;\n   \n    overflow-y:auto;\n  \n}\n    \n   \n  \n}\n`;\n\nconst Layout = ({\n  children\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GlobalStyle, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n      className: \"card z-depth-3\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Logo_Logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }, undefined), children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9MYXlvdXQvTGF5b3V0LmpzPzU4YjAiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIm5vcm1hbGl6ZSIsIkxheW91dCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFTyxNQUFNQSxTQUFTLEdBQUdDLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsdUhBQWY7QUFVQSxNQUFNQyxXQUFXLEdBQUdDLG1FQUFrQjtBQUM3QyxFQUFFQywwREFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FyQk87O0FBdUJQLE1BQU1DLE1BQU0sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUM3QixzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJLHFFQUFDLFNBQUQ7QUFBVyxlQUFTLEVBQUMsZ0JBQXJCO0FBQUEsOEJBQ0kscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixFQUVLQSxRQUZMLGVBR0kscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQSxrQkFESjtBQVVILENBWEQ7O0FBYWVELHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvTGF5b3V0L0xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge25vcm1hbGl6ZX0gZnJvbSAnc3R5bGVkLW5vcm1hbGl6ZSdcblxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb2dvL0xvZ29cIjtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgd2lkdGg6IDk1JTtcbiAgICBoZWlnaHQ6IDk1JTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4ke25vcm1hbGl6ZX1cbmh0bWx7XG4gICAgaHRtbCB7XG4gICAgICBmb250LWZhbWlseTotYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWZcbiAgIFxuICB9XG4gIGJvZHkge1xuICAgIGJvcmRlci1zdHlsZTogZG91YmxlO1xuICAgIGJvcmRlci13aWR0aDogMTBweDtcbiAgICBib3JkZXItY29sb3I6ICM5ZTllOWU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRURGMkY3O1xuICAgIGhlaWdodDoxMDAlO1xuICAgXG4gICAgb3ZlcmZsb3cteTphdXRvO1xuICBcbn1cbiAgICBcbiAgIFxuICBcbn1cbmA7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImNhcmQgei1kZXB0aC0zXCI+XG4gICAgICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Layout/Layout.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout/Layout */ \"./pages/Layout/Layout.js\");\n\n\nvar _jsxFileName = \"/home/arcav/proyectos/drproaging/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Dr.Proaging\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1.0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"stylesheet\",\n        href: \"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/static/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"script\", {\n        src: \"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"stylesheet\",\n        href: \"https://fonts.googleapis.com/icon?family=Material+Icons\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.gstatic.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=Sacramento&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELEtBQThCO0FBQ3hDLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQ0ksWUFBSSxFQUFDLFVBRFQ7QUFFSSxlQUFPLEVBQUM7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBTUk7QUFDSSxXQUFHLEVBQUMsWUFEUjtBQUVJLFlBQUksRUFBQztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkosZUFVSTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZKLGVBV0k7QUFBUSxXQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhKLGVBWUk7QUFDSSxXQUFHLEVBQUMsWUFEUjtBQUVJLFlBQUksRUFBQztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWkosZUFnQkk7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQkosZUFpQkk7QUFDSSxZQUFJLEVBQUMsa0VBRFQ7QUFFSSxXQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUF3QkkscUVBQUMsc0RBQUQ7QUFBQSw2QkFDSSxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhCSjtBQUFBLGtCQURKO0FBOEJILENBL0JEOztBQWlDZUYsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi9MYXlvdXQvTGF5b3V0XCI7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+RHIuUHJvYWdpbmc8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCJcbiAgICAgICAgICAgICAgICA+PC9tZXRhPlxuICAgICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbWF0ZXJpYWxpemUvMS4wLjAvY3NzL21hdGVyaWFsaXplLm1pbi5jc3NcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21hdGVyaWFsaXplLzEuMC4wL2pzL21hdGVyaWFsaXplLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNhY3JhbWVudG8mZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@styled-icons/fa-brands/Linkedin":
/*!***************************************************!*\
  !*** external "@styled-icons/fa-brands/Linkedin" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@styled-icons/fa-brands/Linkedin\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3R5bGVkLWljb25zL2ZhLWJyYW5kcy9MaW5rZWRpblwiP2U2ZmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHN0eWxlZC1pY29ucy9mYS1icmFuZHMvTGlua2VkaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3R5bGVkLWljb25zL2ZhLWJyYW5kcy9MaW5rZWRpblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@styled-icons/fa-brands/Linkedin\n");

/***/ }),

/***/ "@styled-icons/foundation/SocialInstagram":
/*!***********************************************************!*\
  !*** external "@styled-icons/foundation/SocialInstagram" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@styled-icons/foundation/SocialInstagram\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3R5bGVkLWljb25zL2ZvdW5kYXRpb24vU29jaWFsSW5zdGFncmFtXCI/YTcwZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc3R5bGVkLWljb25zL2ZvdW5kYXRpb24vU29jaWFsSW5zdGFncmFtLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHN0eWxlZC1pY29ucy9mb3VuZGF0aW9uL1NvY2lhbEluc3RhZ3JhbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@styled-icons/foundation/SocialInstagram\n");

/***/ }),

/***/ "@styled-icons/icomoon/Facebook2":
/*!**************************************************!*\
  !*** external "@styled-icons/icomoon/Facebook2" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@styled-icons/icomoon/Facebook2\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3R5bGVkLWljb25zL2ljb21vb24vRmFjZWJvb2syXCI/ZDAxYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc3R5bGVkLWljb25zL2ljb21vb24vRmFjZWJvb2syLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHN0eWxlZC1pY29ucy9pY29tb29uL0ZhY2Vib29rMlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@styled-icons/icomoon/Facebook2\n");

/***/ }),

/***/ "@styled-icons/remix-fill/Whatsapp":
/*!****************************************************!*\
  !*** external "@styled-icons/remix-fill/Whatsapp" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@styled-icons/remix-fill/Whatsapp\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3R5bGVkLWljb25zL3JlbWl4LWZpbGwvV2hhdHNhcHBcIj9iNjRkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBzdHlsZWQtaWNvbnMvcmVtaXgtZmlsbC9XaGF0c2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtaWNvbnMvcmVtaXgtZmlsbC9XaGF0c2FwcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@styled-icons/remix-fill/Whatsapp\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

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

/***/ }),

/***/ "styled-normalize":
/*!***********************************!*\
  !*** external "styled-normalize" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-normalize\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtbm9ybWFsaXplXCI/ZWRlNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLW5vcm1hbGl6ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-normalize\n");

/***/ })

/******/ });