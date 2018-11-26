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
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Router */ "./components/Router.js");
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
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "white-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, "Get a website that looks amazing and actually works."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        onClick: _Router__WEBPACK_IMPORTED_MODULE_1__["Home"],
        className: "col m2 s4 white-text text-lighten-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "HOME"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        className: "col m2 s4 white-text text-lighten-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "PORTFOLIO"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        onClick: _Router__WEBPACK_IMPORTED_MODULE_1__["About"],
        className: "col m2 s4 white-text text-lighten-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "ABOUT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        className: "col m2 s4 white-text text-lighten-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "BLOG"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        onClick: _Router__WEBPACK_IMPORTED_MODULE_1__["Resume"],
        className: "col m2 s4 white-text text-lighten-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "RESUME"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#contact-modal",
        className: "col m2 s4 white-text text-lighten-4 modal-trigger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "CONTACT"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "footer-copyright grey darken-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "grey-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "\xA9 2018 Ekkawit Lertkrai. All rights reserved. Web design & Developer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        className: "col s1 offset-s4 white-text text-lighten-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fab fa-facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        className: "col s1 white-text text-lighten-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fab fa-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        className: "col s1 white-text text-lighten-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fab fa-instagram",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        className: "col s1 white-text text-lighten-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fab fa-linkedin-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
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
/* harmony import */ var _index_ModalContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/ModalContract */ "./components/index/ModalContract.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _index_Showcase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index/Showcase */ "./components/index/Showcase.js");
/* harmony import */ var _resume_Showcase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resume/Showcase */ "./components/resume/Showcase.js");
/* harmony import */ var _about_Slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/Slider */ "./components/about/Slider.js");
/* harmony import */ var _img_logo7_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/logo7.png */ "./img/logo7.png");
/* harmony import */ var _img_logo7_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_logo7_png__WEBPACK_IMPORTED_MODULE_9__);
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












if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;

  __webpack_require__(/*! materialize-css */ "materialize-css");
}

var Layout =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Layout).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      $('.modal').modal();
    }
  }, {
    key: "renderComponent",
    value: function renderComponent() {
      if (this.props.page == 'index') return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index_Showcase__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      });else if (this.props.page == 'about') return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_about_Slider__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      });else return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_resume_Showcase__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
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
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        href: _img_logo7_png__WEBPACK_IMPORTED_MODULE_9___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        href: "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "https://code.jquery.com/jquery-2.1.1.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "path/to/your/bundle.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        className: this.props.page == 'index' ? 'main-header' : this.props.page == 'resume' ? 'resume-header' : '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
        page: this.props.page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), this.renderComponent()), this.props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index_ModalContract__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
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
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Router */ "./components/Router.js");
/* harmony import */ var _img_logo5_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/logo5.png */ "./img/logo5.png");
/* harmony import */ var _img_logo5_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_logo5_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_logo6_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/logo6.png */ "./img/logo6.png");
/* harmony import */ var _img_logo6_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_logo6_png__WEBPACK_IMPORTED_MODULE_3__);
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








if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;

  __webpack_require__(/*! materialize-css */ "materialize-css");
}

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      $('.button-collapse').sideNav();
      $('.modal').modal();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "transparent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _img_logo5_png__WEBPACK_IMPORTED_MODULE_2___default.a,
        className: "brand-logo logo-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        "data-activates": "side-nav",
        className: "button-collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "menu")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "right hide-on-med-and-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: this.props.page == 'index' ? 'active-link' : '',
        onClick: _Router__WEBPACK_IMPORTED_MODULE_1__["Home"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "HOME")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "PORTFOLIO")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: this.props.page == 'about' ? 'active-link' : '',
        onClick: _Router__WEBPACK_IMPORTED_MODULE_1__["About"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "ABOUT")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: this.props.page == 'resume' ? 'active-link' : '',
        onClick: _Router__WEBPACK_IMPORTED_MODULE_1__["Resume"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "RESUME")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#contact-modal",
        className: "modal-trigger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "CONTACT")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "flag-language",
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _img_english_png__WEBPACK_IMPORTED_MODULE_4___default.a,
        className: "circle",
        height: "25px",
        width: "25px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "flag-language",
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _img_thailand_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        className: "circle ",
        height: "25px",
        width: "25px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        id: "side-nav",
        className: "side-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _img_logo6_png__WEBPACK_IMPORTED_MODULE_3___default.a,
        className: "logo-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons grey-text text-darken-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "home"), "HOME")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-cog grey-text text-darken-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), " PORTFOLIO")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-users grey-text text-darken-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }), " ABOUT")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-users grey-text text-darken-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }), " RESUME")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#contact-modal",
        className: "btn green modal-trigger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "CONTACT"))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/Router.js":
/*!******************************!*\
  !*** ./components/Router.js ***!
  \******************************/
/*! exports provided: Home, About, Resume */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume", function() { return Resume; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

function Home() {
  next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push({
    pathname: '/'
  });
}
function About() {
  next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push({
    pathname: '/about'
  });
}
function Resume() {
  next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push({
    pathname: '/resume'
  });
}

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
/* harmony import */ var _index_ModalContract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index/ModalContract */ "./components/index/ModalContract.js");
/* harmony import */ var _img_code5_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/code5.jpg */ "./img/code5.jpg");
/* harmony import */ var _img_code5_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_code5_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_code6_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/code6.jpg */ "./img/code6.jpg");
/* harmony import */ var _img_code6_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_code6_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_code7_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/code7.jpg */ "./img/code7.jpg");
/* harmony import */ var _img_code7_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_code7_jpg__WEBPACK_IMPORTED_MODULE_4__);
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







if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;

  __webpack_require__(/*! materialize-css */ "materialize-css");
}

var SliderComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SliderComponent, _React$Component);

  function SliderComponent() {
    _classCallCheck(this, SliderComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(SliderComponent).apply(this, arguments));
  }

  _createClass(SliderComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      $('.slider').slider({
        indicators: true,
        height: 500,
        transition: 500,
        interval: 6000
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "slider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "slides",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _img_code5_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "caption center-align",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Take Your Dream Vacation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "light grey-text text-lighten-3 hide-on-small-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non illo earum cumque id est!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        className: "btn-large waves-effect waves-light  white black-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Download Resume"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _img_code6_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "caption left-align",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "We Work With All Budgets"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "light grey-text text-lighten-3 hide-on-small-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non illo earum cumque id est!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        className: "btn-large waves-effect waves-light  white black-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Download Resume"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _img_code7_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "caption right-align",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Group & Individual Getaways"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "light grey-text text-lighten-3 hide-on-small-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non illo earum cumque id est!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        className: "btn-large waves-effect waves-light  white black-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Download Resume")))));
    }
  }]);

  return SliderComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SliderComponent);

/***/ }),

/***/ "./components/index/ModalContract.js":
/*!*******************************************!*\
  !*** ./components/index/ModalContract.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_people_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/people.jpg */ "./img/people.jpg");
/* harmony import */ var _img_people_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_people_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_fb_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/fb.png */ "./img/fb.png");
/* harmony import */ var _img_fb_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_fb_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_ig_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/ig.png */ "./img/ig.png");
/* harmony import */ var _img_ig_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_ig_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_twitter_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/twitter.png */ "./img/twitter.png");
/* harmony import */ var _img_twitter_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_twitter_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_in_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/in.jpg */ "./img/in.jpg");
/* harmony import */ var _img_in_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_in_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_line_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/line.png */ "./img/line.png");
/* harmony import */ var _img_line_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_line_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_phone_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/phone.jpg */ "./img/phone.jpg");
/* harmony import */ var _img_phone_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_phone_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_mail_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/mail.png */ "./img/mail.png");
/* harmony import */ var _img_mail_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_mail_png__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\ekkaw\\Desktop\\Project\\mini-project\\ekkawitl-core\\components\\index\\ModalContract.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var ModalContract =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ModalContract, _React$Component);

  function ModalContract() {
    _classCallCheck(this, ModalContract);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalContract).apply(this, arguments));
  }

  _createClass(ModalContract, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "contact-modal",
        className: "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card horizontal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _img_people_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-stacked",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "card-title black-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Ekkawit Lertkrai (JayJeff)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _img_fb_png__WEBPACK_IMPORTED_MODULE_2___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "@ekkawit.l")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _img_ig_png__WEBPACK_IMPORTED_MODULE_3___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "@jayjeffy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _img_in_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "ekkawit-lertkrai")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _img_line_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "jjayeff")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _img_mail_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "ekkawit.lertkrai@gmail.com")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "modal-action modal-close waves-effect waves-green btn-flat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Ok")));
    }
  }]);

  return ModalContract;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ModalContract);

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

/***/ "./components/resume/Showcase.js":
/*!***************************************!*\
  !*** ./components/resume/Showcase.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_logo7_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/logo7.png */ "./img/logo7.png");
/* harmony import */ var _img_logo7_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_logo7_png__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ekkaw\\Desktop\\Project\\mini-project\\ekkawitl-core\\components\\resume\\Showcase.js";

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
        class: "showcase container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "col s12 m10 offset-m1 center",
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
      }, "Take Your Dream Vacation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        class: "light grey-text text-lighten-3 hide-on-small-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non illo earum cumque id est!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        class: "btn-large waves-effect waves-light  white black-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "Download Resume"))));
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

/***/ "./img/code6.jpg":
/*!***********************!*\
  !*** ./img/code6.jpg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/code6-e6a32c35db7cc2ec39d9f199be7f4e1f.jpg";

/***/ }),

/***/ "./img/code7.jpg":
/*!***********************!*\
  !*** ./img/code7.jpg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/code7-a4b931b35e0615fc09b4a84c08ea8193.jpg";

/***/ }),

/***/ "./img/english.png":
/*!*************************!*\
  !*** ./img/english.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./img/fb.png":
/*!********************!*\
  !*** ./img/fb.png ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./img/ig.png":
/*!********************!*\
  !*** ./img/ig.png ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ig-e541741065a1c35e79717909172d1bb4.png";

/***/ }),

/***/ "./img/in.jpg":
/*!********************!*\
  !*** ./img/in.jpg ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/in-f177713d2288ab6425eb3ed7d336d64e.jpg";

/***/ }),

/***/ "./img/line.png":
/*!**********************!*\
  !*** ./img/line.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/line-eb8b45ba2976b4e35df946fa4569a3b5.png";

/***/ }),

/***/ "./img/logo5.png":
/*!***********************!*\
  !*** ./img/logo5.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo5-50760348c4ff19a8d1788d1386701915.png";

/***/ }),

/***/ "./img/logo6.png":
/*!***********************!*\
  !*** ./img/logo6.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo6-9e2b3bbaf50af3e40957c6e5c709db62.png";

/***/ }),

/***/ "./img/logo7.png":
/*!***********************!*\
  !*** ./img/logo7.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo7-f22f6ba4157d644aaf00b62006fca3bc.png";

/***/ }),

/***/ "./img/mail.png":
/*!**********************!*\
  !*** ./img/mail.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mail-8e462b045122dd2affac057a2f7939f7.png";

/***/ }),

/***/ "./img/people.jpg":
/*!************************!*\
  !*** ./img/people.jpg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/people-fcc2678dea685881c83a184f778f5960.jpg";

/***/ }),

/***/ "./img/phone.jpg":
/*!***********************!*\
  !*** ./img/phone.jpg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/phone-fe0cc6eebde201a75e6d93c8a5bfb78a.jpg";

/***/ }),

/***/ "./img/thailand.jpg":
/*!**************************!*\
  !*** ./img/thailand.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/thailand-322a4255db4021592367b402661bdd2b.jpg";

/***/ }),

/***/ "./img/twitter.png":
/*!*************************!*\
  !*** ./img/twitter.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

/***/ "materialize-css":
/*!**********************************!*\
  !*** external "materialize-css" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("materialize-css");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map