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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0MPH":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/foundation/SocialInstagram");

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WLDL");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
        children: "Dr.Proaging"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "icon",
        href: "/static/favicon.ico"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Sacramento&display=swap",
        rel: "stylesheet"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Component, _objectSpread({}, pageProps))
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "8T3T":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/fa-brands/Linkedin");

/***/ }),

/***/ "BhmS":
/***/ (function(module, exports) {

module.exports = require("styled-normalize");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "PWJN":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/icomoon/Facebook2");

/***/ }),

/***/ "WLDL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Container", function() { return /* binding */ Container; });
__webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return /* binding */ GlobalStyle; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-normalize"
var external_styled_normalize_ = __webpack_require__("BhmS");

// EXTERNAL MODULE: external "@styled-icons/foundation/SocialInstagram"
var SocialInstagram_ = __webpack_require__("0MPH");

// EXTERNAL MODULE: external "@styled-icons/remix-fill/Whatsapp"
var Whatsapp_ = __webpack_require__("kuyZ");

// EXTERNAL MODULE: external "@styled-icons/fa-brands/Linkedin"
var Linkedin_ = __webpack_require__("8T3T");

// EXTERNAL MODULE: external "@styled-icons/icomoon/Facebook2"
var Facebook2_ = __webpack_require__("PWJN");

// CONCATENATED MODULE: ./components/Buttons/SocialBtn.js







const Ig = external_styled_components_default()(SocialInstagram_["SocialInstagram"]).withConfig({
  displayName: "SocialBtn__Ig",
  componentId: "sc-1plwsmr-0"
})(["color:black;margin:0.1rem;padding:5px;width:3.3rem;:focus{color:black;}:hover{background-color:black;width:3.5rem;color:#FD1D1D;}"]);
const Fb = external_styled_components_default()(Facebook2_["Facebook2"]).withConfig({
  displayName: "SocialBtn__Fb",
  componentId: "sc-1plwsmr-1"
})(["color:black;margin:0.1rem;padding:5px;width:2.7rem;:hover{background-color:black;width:3rem;color:blue;}"]);
const Linkdin = external_styled_components_default()(Linkedin_["Linkedin"]).withConfig({
  displayName: "SocialBtn__Linkdin",
  componentId: "sc-1plwsmr-2"
})(["color:black;margin:0.1rem;padding:5px;width:2.7rem;:focus{color:black;}:hover{background-color:black;width:3rem;color:blue;}"]);
const Whats = external_styled_components_default()(Whatsapp_["Whatsapp"]).withConfig({
  displayName: "SocialBtn__Whats",
  componentId: "sc-1plwsmr-3"
})(["color:black;margin:0.1rem;padding:5px;width:3.3rem;:focus{color:black;}:hover{background-color:black;width:3.8rem;color:green;}"]);
const SocialGroup = external_styled_components_default.a.div.withConfig({
  displayName: "SocialBtn__SocialGroup",
  componentId: "sc-1plwsmr-4"
})(["display:flex;flex-direction:row;justify-content:space-around;@media (min-width:320px){width:80%;}"]);

const SocialBtn = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(SocialGroup, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Ig, {
      className: " waves-effect waves-light white "
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Fb, {
      className: " waves-effect waves-light white "
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Whats, {
      className: " waves-effect waves-light white  "
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Linkdin, {
      className: " waves-effect waves-light white   "
    })]
  });
};

/* harmony default export */ var Buttons_SocialBtn = (SocialBtn);
// CONCATENATED MODULE: ./components/Footer/Footer.js



const Footer = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Buttons_SocialBtn, {});
};

/* harmony default export */ var Footer_Footer = (Footer);
// EXTERNAL MODULE: ./components/Logo/Logo.js
var Logo = __webpack_require__("XisQ");

// CONCATENATED MODULE: ./pages/Layout/Layout.js








const Container = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__Container",
  componentId: "sc-24vftw-0"
})(["display:flex;flex-direction:column;align-items:center;margin:20px auto;width:95%;height:95%;border-radius:20px;"]);
const GlobalStyle = external_styled_components_["createGlobalStyle"]`
${external_styled_normalize_["normalize"]}
html{
    html {
      font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
   
  }
  body {
    border-style: double;
    border-width: 10px;
    border-color: #fff8e1;
    background-color:#EDF2F7;
    height:100%;
   
    overflow-y:auto;
  
}
    
   
  
}
`;

const Layout = ({
  children
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(GlobalStyle, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container, {
      className: "card z-depth-3",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Logo["a" /* default */], {}), children, /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer_Footer, {})]
    })]
  });
};

/* harmony default export */ var Layout_Layout = __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "XisQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);



const StyledLogo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Logo__StyledLogo",
  componentId: "sc-1p43cm0-0"
})(["width:50%;margin-top:2rem;padding:0.9rem;@media (max-width:425px){width:80%;margin-top:2rem;padding:0.9rem;}"]);

const Logo = () => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(StyledLogo, {
      src: "./Logo.svg"
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Logo);

/***/ }),

/***/ "kuyZ":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/remix-fill/Whatsapp");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });