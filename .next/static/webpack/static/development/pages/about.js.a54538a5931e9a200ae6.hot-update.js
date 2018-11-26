webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/about/Slider.js":
/*!************************************!*\
  !*** ./components/about/Slider.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

  __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
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
        href: "#",
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
        href: "#",
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
        href: "#",
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

/***/ })

})
//# sourceMappingURL=about.js.a54538a5931e9a200ae6.hot-update.js.map