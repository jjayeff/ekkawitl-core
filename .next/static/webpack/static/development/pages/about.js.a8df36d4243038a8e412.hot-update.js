webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-materialize */ "./node_modules/react-materialize/lib/index.js");
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

/***/ })

})
//# sourceMappingURL=about.js.a8df36d4243038a8e412.hot-update.js.map