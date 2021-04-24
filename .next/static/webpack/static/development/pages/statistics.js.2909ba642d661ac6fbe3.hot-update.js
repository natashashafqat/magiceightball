webpackHotUpdate("static/development/pages/statistics.js",{

/***/ "./pages/statistics.js":
/*!*****************************!*\
  !*** ./pages/statistics.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _layouts_Header_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layouts/Header.js */ "./layouts/Header.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__);













var StatsPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(StatsPage, _Component);

  function StatsPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, StatsPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(StatsPage).call(this, props));
    _this.state = {
      count: 0
    };
    _this.incrementCounter = _this.incrementCounter.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(StatsPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.showAnswer) {
        this.setState({
          count: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(localStorage.getItem("count")) || 0
        });
      }
    }
    /* Increase the question count */

  }, {
    key: "incrementCounter",
    value: function incrementCounter() {
      var count = this.state.count + 1;
      localStorage.setItem("count", count);
      this.setState({
        count: count
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("body", {
        className: "jsx-450741822"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_layouts_Header_js__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        style: {
          color: "#dbdbdb"
        },
        className: "jsx-450741822"
      }, "Game Statistics"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
        variant: "title",
        color: "inherit"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          color: "#dbdbdb"
        },
        className: "jsx-450741822"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          fontWeight: "bold",
          marginRight: "0.2em"
        },
        className: "jsx-450741822"
      }, "Total questions:"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-450741822"
      }, this.state.count))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "450741822"
      }, "h1.jsx-450741822{font-family:\"Arial\";font-size:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXRhc2hhc2hhZnFhdC9mdWxsc3RhY2svbWFnaWMvcGFnZXMvc3RhdGlzdGljcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ29CLEFBR2dDLG9CQUNMLGVBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9uYXRhc2hhc2hhZnFhdC9mdWxsc3RhY2svbWFnaWMvcGFnZXMvc3RhdGlzdGljcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2xheW91dHMvSGVhZGVyLmpzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5cbmNsYXNzIFN0YXRzUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvdW50OiAwXG4gICAgfTtcbiAgICB0aGlzLmluY3JlbWVudENvdW50ZXIgPSB0aGlzLmluY3JlbWVudENvdW50ZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3dBbnN3ZXIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb3VudDogcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb3VudFwiKSkgfHwgMFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyogSW5jcmVhc2UgdGhlIHF1ZXN0aW9uIGNvdW50ICovXG4gIGluY3JlbWVudENvdW50ZXIoKSB7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLnN0YXRlLmNvdW50ICsgMTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvdW50XCIsIGNvdW50KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvdW50OiBjb3VudFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Ym9keT5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDxoMSBzdHlsZT17e2NvbG9yOlwiI2RiZGJkYlwifX0+R2FtZSBTdGF0aXN0aWNzPC9oMT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNvbG9yPVwiaW5oZXJpdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgIGp1c3RpZnlDb250ZW50OlwibGVmdFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGNvbG9yOlwiI2RiZGJkYlwifX0+XG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRXZWlnaHQ6XCJib2xkXCIsIG1hcmdpblJpZ2h0OlwiMC4yZW1cIn19PlRvdGFsIHF1ZXN0aW9uczo8L3A+XG4gICAgICAgICAgICAgICAgICA8cD57IHRoaXMuc3RhdGUuY291bnQgfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6XCJBcmlhbFwiO1xuICAgICAgICAgICAgZm9udC1zaXplOjUwcHg7XG4gICAgICAgICAgfWB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2JvZHk+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRzUGFnZTtcbiJdfQ== */\n/*@ sourceURL=/Users/natashashafqat/fullstack/magic/pages/statistics.js */"));
    }
  }]);

  return StatsPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (StatsPage);

/***/ })

})
//# sourceMappingURL=statistics.js.2909ba642d661ac6fbe3.hot-update.js.map