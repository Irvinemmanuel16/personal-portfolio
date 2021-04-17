webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Logos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logos */ "./components/Logos.jsx");



var _jsxFileName = "/home/irvinemmanuel/projects/portfolio/components/Header.jsx",
    _s = $RefreshSig$();




function Header({
  reference
}) {
  _s();

  var _router$query, _router$query2, _router$query3;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  const handleClick = () => {
    reference.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: "w-full pt-10 flex justify-around sm:justify-between sm:px-8 md:px-10",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: () => router.push('/', null, {
        shallow: true,
        scroll: false
      }),
      className: "outline-none cursor-pointer",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Logos__WEBPACK_IMPORTED_MODULE_3__["Logo"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), (router === null || router === void 0 ? void 0 : router.pathname) === '/' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      onClick: handleClick,
      className: "text-white font-source md:text-lg lg:text-xl cursor-pointer font-normal",
      children: "Projects"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [(router === null || router === void 0 ? void 0 : (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.name) === 'noteIt' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "https://note-it-1624.netlify.app/",
        rel: "noreferrer",
        target: "blank",
        className: "text-white font-source md:text-lg lg:text-xl cursor-pointer font-normal",
        children: "Go to the site"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, this), (router === null || router === void 0 ? void 0 : (_router$query2 = router.query) === null || _router$query2 === void 0 ? void 0 : _router$query2.name) === 'textIt' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "text-white font-source md:text-lg lg:text-xl cursor-pointer font-normal",
        children: "On develop"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }, this), (router === null || router === void 0 ? void 0 : (_router$query3 = router.query) === null || _router$query3 === void 0 ? void 0 : _router$query3.name) === 'shoppingIt' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "text-white font-source md:text-lg lg:text-xl cursor-pointer font-normal",
        children: "On develop"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, this)]
    }, void 0, true)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

_s(Header, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInJlZmVyZW5jZSIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNsaWNrIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsInB1c2giLCJzaGFsbG93Iiwic2Nyb2xsIiwicGF0aG5hbWUiLCJxdWVyeSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULENBQWdCO0FBQUVDO0FBQUYsQ0FBaEIsRUFBK0I7QUFBQTs7QUFBQTs7QUFDNUMsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxRQUFNQyxXQUFXLEdBQUcsTUFBTTtBQUN4QkgsYUFBUyxDQUFDSSxPQUFWLENBQWtCQyxjQUFsQixDQUFpQztBQUFFQyxjQUFRLEVBQUUsUUFBWjtBQUFzQkMsV0FBSyxFQUFFO0FBQTdCLEtBQWpDO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFRLGFBQVMsRUFBQyxzRUFBbEI7QUFBQSw0QkFDRTtBQUNFLGFBQU8sRUFBRSxNQUFNTixNQUFNLENBQUNPLElBQVAsQ0FBWSxHQUFaLEVBQWlCLElBQWpCLEVBQXVCO0FBQUVDLGVBQU8sRUFBRSxJQUFYO0FBQWlCQyxjQUFNLEVBQUU7QUFBekIsT0FBdkIsQ0FEakI7QUFFRSxlQUFTLEVBQUMsNkJBRlo7QUFBQSw2QkFJRSxxRUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBT0csQ0FBQVQsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNLENBQUVVLFFBQVIsTUFBcUIsR0FBckIsZ0JBQ0M7QUFDRSxhQUFPLEVBQUVSLFdBRFg7QUFFRSxlQUFTLEVBQUMseUVBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxnQkFRQztBQUFBLGlCQUNHLENBQUFGLE1BQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sNkJBQUFBLE1BQU0sQ0FBRVcsS0FBUixnRUFBZUMsSUFBZixNQUF3QixRQUF4QixpQkFDQztBQUNFLFlBQUksRUFBQyxtQ0FEUDtBQUVFLFdBQUcsRUFBQyxZQUZOO0FBR0UsY0FBTSxFQUFDLE9BSFQ7QUFJRSxpQkFBUyxFQUFDLHlFQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosRUFXRyxDQUFBWixNQUFNLFNBQU4sSUFBQUEsTUFBTSxXQUFOLDhCQUFBQSxNQUFNLENBQUVXLEtBQVIsa0VBQWVDLElBQWYsTUFBd0IsUUFBeEIsaUJBQ0M7QUFBTSxpQkFBUyxFQUFDLHlFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpKLEVBZ0JHLENBQUFaLE1BQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sOEJBQUFBLE1BQU0sQ0FBRVcsS0FBUixrRUFBZUMsSUFBZixNQUF3QixZQUF4QixpQkFDQztBQUFNLGlCQUFTLEVBQUMseUVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJKO0FBQUEsb0JBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5Q0Q7O0dBaER1QmQsTTtVQUNQRyxxRDs7O0tBRE9ILE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTdhMjU4MzMyMzA3MmE0MzY1NGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBMb2dvIH0gZnJvbSAnLi9Mb2dvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IHJlZmVyZW5jZSB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHJlZmVyZW5jZS5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ3N0YXJ0JyB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPSd3LWZ1bGwgcHQtMTAgZmxleCBqdXN0aWZ5LWFyb3VuZCBzbTpqdXN0aWZ5LWJldHdlZW4gc206cHgtOCBtZDpweC0xMCc+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvJywgbnVsbCwgeyBzaGFsbG93OiB0cnVlLCBzY3JvbGw6IGZhbHNlIH0pfVxuICAgICAgICBjbGFzc05hbWU9J291dGxpbmUtbm9uZSBjdXJzb3ItcG9pbnRlcidcbiAgICAgID5cbiAgICAgICAgPExvZ28gLz5cbiAgICAgIDwvZGl2PlxuICAgICAge3JvdXRlcj8ucGF0aG5hbWUgPT09ICcvJyA/IChcbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICBjbGFzc05hbWU9J3RleHQtd2hpdGUgZm9udC1zb3VyY2UgbWQ6dGV4dC1sZyBsZzp0ZXh0LXhsIGN1cnNvci1wb2ludGVyIGZvbnQtbm9ybWFsJ1xuICAgICAgICA+XG4gICAgICAgICAgUHJvamVjdHNcbiAgICAgICAgPC9zcGFuPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICB7cm91dGVyPy5xdWVyeT8ubmFtZSA9PT0gJ25vdGVJdCcgJiYgKFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9ub3RlLWl0LTE2MjQubmV0bGlmeS5hcHAvJ1xuICAgICAgICAgICAgICByZWw9J25vcmVmZXJyZXInXG4gICAgICAgICAgICAgIHRhcmdldD0nYmxhbmsnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBmb250LXNvdXJjZSBtZDp0ZXh0LWxnIGxnOnRleHQteGwgY3Vyc29yLXBvaW50ZXIgZm9udC1ub3JtYWwnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEdvIHRvIHRoZSBzaXRlXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7cm91dGVyPy5xdWVyeT8ubmFtZSA9PT0gJ3RleHRJdCcgJiYgKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIGZvbnQtc291cmNlIG1kOnRleHQtbGcgbGc6dGV4dC14bCBjdXJzb3ItcG9pbnRlciBmb250LW5vcm1hbCc+XG4gICAgICAgICAgICAgIE9uIGRldmVsb3BcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtyb3V0ZXI/LnF1ZXJ5Py5uYW1lID09PSAnc2hvcHBpbmdJdCcgJiYgKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIGZvbnQtc291cmNlIG1kOnRleHQtbGcgbGc6dGV4dC14bCBjdXJzb3ItcG9pbnRlciBmb250LW5vcm1hbCc+XG4gICAgICAgICAgICAgIE9uIGRldmVsb3BcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9