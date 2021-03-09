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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RaWE");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "RaWE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Posts/PostCard.js




const CardWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "PostCard__CardWrapper",
  componentId: "sc-13miy4l-0"
})(["justify-content:center;margin:30px;border-radius:10px;background-color:white;border:solid black 3px;cursor:pointer;h3{font-size:28px;margin:10px;text-align:center;}img{margin:-25px 0px 0px 35px;border-radius:10px 10px 10px 10px;border:solid #fff8e1 2.8px;height:90%;width:90%;}p{margin:15px;}"]);

const PostCard = ({
  Titulo,
  Post,
  Foto,
  baseUrl
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(CardWrapper, {
      className: "card z-depth-3",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        className: "responsive-img z-depth-3",
        src: `${Foto}`
        /*  src={`${baseUrl}${Foto[0].url}`} */

      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        children: Titulo
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: Post
      })]
    })
  });
};

/* harmony default export */ var Posts_PostCard = (PostCard);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./utils/fetchQuery.js

const fetchQuery_baseUrl = process.env.BASE_URL || "http://localhost:1337";

const fetchQuery = (path, params = null) => {
  let url;

  if (params !== null) {
    url = `${fetchQuery_baseUrl}/${path}/${params}`;
  } else {
    url = `${fetchQuery_baseUrl}/${path}`;
  }

  const res = external_axios_default()(`${url}`);
  const posts = res;
  return posts;
};


// CONCATENATED MODULE: ./Data/datos.js
const datos_post = [{
  Titulo: "Post 1",
  Post: "Loremipsum",
  Foto: "./Photo.jpg"
}, {
  Titulo: "Post 1",
  Post: "Loremipsum",
  Foto: "./Photo.jpg"
}, {
  Titulo: "Post 1",
  Post: "Loremipsum",
  Foto: "./Photo.jpg"
}, {
  Titulo: "Post 1",
  Post: "Loremipsum",
  Foto: "./Photo.jpg"
}, {
  Titulo: "Post 1",
  Post: "Loremipsum",
  Foto: "./Photo.jpg"
}, {
  Titulo: "Post 1",
  Post: "Loremipsum",
  Foto: "./Photo.jpg"
}, {
  Titulo: "Post 1",
  Post: "Loremipsum",
  Foto: "./Photo.jpg"
}, {
  Titulo: "Post 1",
  Post: "Loremipsum",
  Foto: "./Photo.jpg"
}];
/* harmony default export */ var datos = (datos_post);
// EXTERNAL MODULE: ./components/Logo/Logo.js
var Logo = __webpack_require__("XisQ");

// CONCATENATED MODULE: ./pages/Blog.js







const PostContainer = external_styled_components_default.a.div.withConfig({
  displayName: "Blog__PostContainer",
  componentId: "czefe0-0"
})(["height:100%;width:70%;display:grid;grid-template-rows:1fr 1fr 1fr;grid-template-columns:6fr 6fr 6fr;align-items:center;@media (max-width:425px){width:90%;display:grid;grid-template-rows:1fr;grid-template-columns:6fr;}@media (min-width:426px){width:90%;display:grid;grid-template-rows:1fr;grid-template-columns:4fr 4fr;}@media (min-width:1024px){width:80%;display:grid;grid-template-columns:2fr 2fr 2fr;}"]);

const Blog = ({
  post
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(PostContainer, {
      children: post.map(post => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Posts_PostCard, {
        Titulo: post.Titulo,
        Post: post.Post,
        Foto: post.Foto,
        baseUrl: fetchQuery_baseUrl
      }, post.id))
    })
  });
};

async function getStaticProps() {
  const res = `${datos}`;
  /* const res = await fetchQuery(`${datos}`);
  const posts = await res.data */

  console.log(datos);
  return {
    props: {
      post: datos
    }
  };
}
/* harmony default export */ var pages_Blog = __webpack_exports__["default"] = (Blog);

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

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });