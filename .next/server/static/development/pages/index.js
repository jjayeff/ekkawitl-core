module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ekkaw\\Desktop\\Project\\mini-project\\ekkawitl-core\\components\\Footer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
        className: "page-footer grey darken-4 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "white-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, "Get a website that looks amazing and actually works."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "col m2 s4 white-text text-lighten-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "HOME"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "col m2 s4 white-text text-lighten-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "PORTFOLIO"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "about.html",
        className: "col m2 s4 white-text text-lighten-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "ABOUT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "col m2 s4 white-text text-lighten-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "BLOG"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "resume.html",
        className: "col m2 s4 white-text text-lighten-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "RESUME"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#contact-modal",
        className: "col m2 s4 white-text text-lighten-4 modal-trigger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "CONTACT"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "footer-copyright grey darken-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "grey-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "\xA9 2018 Ekkawit Lertkrai. All rights reserved. Web design & Developer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "col s1 offset-s4 white-text text-lighten-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fab fa-facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "col s1 white-text text-lighten-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fab fa-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "col s1 white-text text-lighten-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fab fa-instagram",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "col s1 white-text text-lighten-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fab fa-linkedin-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }))))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/main.css */ "./css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_logo7_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/logo7.png */ "./img/logo7.png");
/* harmony import */ var _img_logo7_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_logo7_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_index_Showcase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/index/Showcase */ "./components/index/Showcase.js");
/* harmony import */ var _components_about_Slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/about/Slider */ "./components/about/Slider.js");
var _jsxFileName = "C:\\Users\\ekkaw\\Desktop\\Project\\mini-project\\ekkawitl-core\\components\\Layout.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var Layout =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Layout).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "renderComponent",
    value: function renderComponent() {
      console.log(this.props.page);
      if (this.props.page == 'index') return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index_Showcase__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      });else if (this.props.page == 'about') return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_about_Slider__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      });else return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index_Showcase__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        href: _img_logo7_png__WEBPACK_IMPORTED_MODULE_3___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        href: "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        className: "main-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), this.renderComponent()), this.props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "https://code.jquery.com/jquery-2.1.1.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "path/to/your/bundle.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-materialize */ "react-materialize");
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_materialize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_logo5_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/logo5.png */ "./img/logo5.png");
/* harmony import */ var _img_logo5_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_logo5_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_english_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/english.png */ "./img/english.png");
/* harmony import */ var _img_english_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_english_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_thailand_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/thailand.jpg */ "./img/thailand.jpg");
/* harmony import */ var _img_thailand_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_thailand_jpg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\ekkaw\\Desktop\\Project\\mini-project\\ekkawitl-core\\components\\Navbar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var logo = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: _img_logo5_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  className: "brand-logo logo-img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
});

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav-wrapper container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
        brand: logo,
        right: true,
        className: "transparent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
        onClick: function onClick() {
          return console.log('test click');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        prefetch: true,
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "HOME")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
        onClick: function onClick() {
          return console.log('test click');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "PORTFOLIO"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
        onClick: function onClick() {
          return console.log('test click');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        prefetch: true,
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "ABOUT")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
        onClick: function onClick() {
          return console.log('test click');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "RESUME"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
        onClick: function onClick() {
          return console.log('test click');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "CONTACT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
        onClick: function onClick() {
          return console.log('test click');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "flag-language",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _img_english_png__WEBPACK_IMPORTED_MODULE_4___default.a,
        className: "circle",
        height: "25px",
        width: "25px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
        onClick: function onClick() {
          return console.log('test click');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "flag-language",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _img_thailand_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        className: "circle ",
        height: "25px",
        width: "25px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/about/Slider.js":
/*!************************************!*\
  !*** ./components/about/Slider.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-materialize */ "react-materialize");
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_materialize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_code5_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/code5.jpg */ "./img/code5.jpg");
/* harmony import */ var _img_code5_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_code5_jpg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ekkaw\\Desktop\\Project\\mini-project\\ekkawitl-core\\components\\about\\Slider.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var SliderComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SliderComponent, _React$Component);

  function SliderComponent() {
    _classCallCheck(this, SliderComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(SliderComponent).apply(this, arguments));
  }

  _createClass(SliderComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_1__["Slider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_1__["Slide"], {
        src: _img_code5_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
        title: "This is our big Tagline!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Take Your Dream Vacation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        class: "light grey-text text-lighten-3 hide-on-small-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non illo earum cumque id est!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        class: "btn-large waves-effect waves-light  white black-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Download Resume")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_1__["Slide"], {
        src: "http://lorempixel.com/580/250/nature/2",
        title: "Left aligned Caption",
        placement: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Here's our small slogan."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_1__["Slide"], {
        src: "http://lorempixel.com/580/250/nature/3",
        title: "Right aligned Caption",
        placement: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Here's our small slogan."));
    }
  }]);

  return SliderComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SliderComponent);

/***/ }),

/***/ "./components/index/Showcase.js":
/*!**************************************!*\
  !*** ./components/index/Showcase.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_logo7_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/logo7.png */ "./img/logo7.png");
/* harmony import */ var _img_logo7_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_logo7_png__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ekkaw\\Desktop\\Project\\mini-project\\ekkawitl-core\\components\\index\\Showcase.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Showcase =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Showcase, _React$Component);

  function Showcase() {
    _classCallCheck(this, Showcase);

    return _possibleConstructorReturn(this, _getPrototypeOf(Showcase).apply(this, arguments));
  }

  _createClass(Showcase, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "showcase container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s12 m10 offset-m1 center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _img_logo7_png__WEBPACK_IMPORTED_MODULE_1___default.a,
        height: "200px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "EKKAWIT LERTKRAI"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E2A\u0E2D\u0E1A\u0E16\u0E32\u0E21\u0E01\u0E32\u0E23\u0E08\u0E49\u0E32\u0E07\u0E07\u0E32\u0E19\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48\u0E19\u0E35\u0E49 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E42\u0E2B\u0E25\u0E14 resume \u0E44\u0E14\u0E49\u0E02\u0E49\u0E32\u0E07\u0E25\u0E48\u0E32\u0E07\u0E19\u0E35\u0E49"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#contact-modal",
        className: "btn waves-effect waves-light  white black-text modal-trigger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "Contract"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "resume.html",
        className: "btn waves-effect waves-light black white-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Resume"))));
    }
  }]);

  return Showcase;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Showcase);

/***/ }),

/***/ "./css/main.css":
/*!**********************!*\
  !*** ./css/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./img/code5.jpg":
/*!***********************!*\
  !*** ./img/code5.jpg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/code5-9347b8062061cbb5047c4cfbee1ff162.jpg";

/***/ }),

/***/ "./img/english.png":
/*!*************************!*\
  !*** ./img/english.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./img/logo5.png":
/*!***********************!*\
  !*** ./img/logo5.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo5-50760348c4ff19a8d1788d1386701915.png";

/***/ }),

/***/ "./img/logo7.png":
/*!***********************!*\
  !*** ./img/logo7.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo7-f22f6ba4157d644aaf00b62006fca3bc.png";

/***/ }),

/***/ "./img/thailand.jpg":
/*!**************************!*\
  !*** ./img/thailand.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/thailand-322a4255db4021592367b402661bdd2b.jpg";

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_index_Showcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/index/Showcase */ "./components/index/Showcase.js");
var _jsxFileName = "C:\\Users\\ekkaw\\Desktop\\Project\\mini-project\\ekkawitl-core\\pages\\index.js";




var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Ekkawit.L Web Design & Developer",
    page: "index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-materialize":
/*!************************************!*\
  !*** external "react-materialize" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-materialize");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map