webpackHotUpdate_N_E("pages/projects/[name]",{

/***/ "./components/projectsComponents/Details.jsx":
/*!***************************************************!*\
  !*** ./components/projectsComponents/Details.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Details; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/irvinemmanuel/projects/portfolio/components/projectsComponents/Details.jsx";

function Details({
  title,
  subtitle,
  mockup,
  description,
  construction
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "p-6 md:p-12 lg:px-16 relative",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
      className: "md:text-4xl",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
      className: "md:text-5xl",
      children: subtitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "font-open text-gray text-xl mt-10 md:text-3xl lg:text-4xl lg:font-extrabold font-bold transform md:rotate-90 md:tracking-widest md:flex md:self-center md:absolute md:-right-11 lg:top-40 md:top-26 h-auto",
      children: "Approach"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-col md:w-3/6 lg:w-full lg:px-12 lg:mt-8 lg:flex-row lg:justify-center lg:items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "h-auto w-56 lg:w-2/6 my-4 md:my-8 transition duration-300",
        src: mockup.src,
        width: mockup.width,
        height: mockup.height,
        alt: "A litle demo of the propuse"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "lg:w-2/5 lg:px-8",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "font-source text-white md:text-lg",
          children: description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "font-source text-white font-bold md:text-lg lg:py-2",
          children: construction
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
_c = Details;

var _c;

$RefreshReg$(_c, "Details");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0c0NvbXBvbmVudHMvRGV0YWlscy5qc3giXSwibmFtZXMiOlsiRGV0YWlscyIsInRpdGxlIiwic3VidGl0bGUiLCJtb2NrdXAiLCJkZXNjcmlwdGlvbiIsImNvbnN0cnVjdGlvbiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLE9BQVQsQ0FBaUI7QUFDOUJDLE9BRDhCO0FBRTlCQyxVQUY4QjtBQUc5QkMsUUFIOEI7QUFJOUJDLGFBSjhCO0FBSzlCQztBQUw4QixDQUFqQixFQU1aO0FBQ0Qsc0JBQ0U7QUFBUyxhQUFTLEVBQUMsK0JBQW5CO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMsYUFBZDtBQUFBLGdCQUE2Qko7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSSxlQUFTLEVBQUMsYUFBZDtBQUFBLGdCQUE2QkM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBRyxlQUFTLEVBQUMsNE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQU1FO0FBQUssZUFBUyxFQUFDLGlHQUFmO0FBQUEsOEJBQ0UscUVBQUMsaURBQUQ7QUFDRSxpQkFBUyxFQUFDLDJEQURaO0FBRUUsV0FBRyxFQUFFQyxNQUFNLENBQUNHLEdBRmQ7QUFHRSxhQUFLLEVBQUVILE1BQU0sQ0FBQ0ksS0FIaEI7QUFJRSxjQUFNLEVBQUVKLE1BQU0sQ0FBQ0ssTUFKakI7QUFLRSxXQUFHLEVBQUM7QUFMTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFRRTtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQSxnQ0FDRTtBQUFHLG1CQUFTLEVBQUMsbUNBQWI7QUFBQSxvQkFBa0RKO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFHLG1CQUFTLEVBQUMscURBQWI7QUFBQSxvQkFDR0M7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0JEO0tBL0J1QkwsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy9bbmFtZV0uYTY0MmE2M2RhYzA2MmRhMTA1MWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV0YWlscyh7XG4gIHRpdGxlLFxuICBzdWJ0aXRsZSxcbiAgbW9ja3VwLFxuICBkZXNjcmlwdGlvbixcbiAgY29uc3RydWN0aW9uLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncC02IG1kOnAtMTIgbGc6cHgtMTYgcmVsYXRpdmUnPlxuICAgICAgPGg1IGNsYXNzTmFtZT0nbWQ6dGV4dC00eGwnPnt0aXRsZX08L2g1PlxuICAgICAgPGg2IGNsYXNzTmFtZT0nbWQ6dGV4dC01eGwnPntzdWJ0aXRsZX08L2g2PlxuICAgICAgPHAgY2xhc3NOYW1lPSdmb250LW9wZW4gdGV4dC1ncmF5IHRleHQteGwgbXQtMTAgbWQ6dGV4dC0zeGwgbGc6dGV4dC00eGwgbGc6Zm9udC1leHRyYWJvbGQgZm9udC1ib2xkIHRyYW5zZm9ybSBtZDpyb3RhdGUtOTAgbWQ6dHJhY2tpbmctd2lkZXN0IG1kOmZsZXggbWQ6c2VsZi1jZW50ZXIgbWQ6YWJzb2x1dGUgbWQ6LXJpZ2h0LTExIGxnOnRvcC00MCBtZDp0b3AtMjYgaC1hdXRvJz5cbiAgICAgICAgQXBwcm9hY2hcbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIG1kOnctMy82IGxnOnctZnVsbCBsZzpweC0xMiBsZzptdC04IGxnOmZsZXgtcm93IGxnOmp1c3RpZnktY2VudGVyIGxnOml0ZW1zLWNlbnRlcic+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGNsYXNzTmFtZT0naC1hdXRvIHctNTYgbGc6dy0yLzYgbXktNCBtZDpteS04IHRyYW5zaXRpb24gZHVyYXRpb24tMzAwJ1xuICAgICAgICAgIHNyYz17bW9ja3VwLnNyY31cbiAgICAgICAgICB3aWR0aD17bW9ja3VwLndpZHRofVxuICAgICAgICAgIGhlaWdodD17bW9ja3VwLmhlaWdodH1cbiAgICAgICAgICBhbHQ9J0EgbGl0bGUgZGVtbyBvZiB0aGUgcHJvcHVzZSdcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xnOnctMi81IGxnOnB4LTgnPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1zb3VyY2UgdGV4dC13aGl0ZSBtZDp0ZXh0LWxnJz57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1zb3VyY2UgdGV4dC13aGl0ZSBmb250LWJvbGQgbWQ6dGV4dC1sZyBsZzpweS0yJz5cbiAgICAgICAgICAgIHtjb25zdHJ1Y3Rpb259XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=