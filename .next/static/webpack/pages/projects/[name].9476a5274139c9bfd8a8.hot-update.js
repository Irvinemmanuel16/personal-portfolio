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
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
      className: "md:text-5xl",
      children: subtitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "font-open text-gray text-xl mt-10 md:text-3xl lg:text-4xl lg:font-extrabold font-bold transform md:rotate-90 md:tracking-widest md:flex md:self-center md:absolute md:-right-11 lg:top-40 md:top-26 h-auto",
      children: "Approach"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-col md:w-3/6 lg:w-full lg:px-12 lg:mt-8 lg:flex-row lg:justify-center lg:items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: "h-auto w-56 lg:w-2/6 my-4 md:my-8 transition duration-300",
        src: mockup.src,
        width: mockup.width,
        height: mockup.height,
        alt: "A litle demo of the propuse"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "lg:w-2/5 lg:px-8",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "font-source text-white md:text-lg",
          children: description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "font-source text-white font-bold md:text-lg lg:py-2",
          children: construction
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0c0NvbXBvbmVudHMvRGV0YWlscy5qc3giXSwibmFtZXMiOlsiRGV0YWlscyIsInRpdGxlIiwic3VidGl0bGUiLCJtb2NrdXAiLCJkZXNjcmlwdGlvbiIsImNvbnN0cnVjdGlvbiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsT0FBVCxDQUFpQjtBQUM5QkMsT0FEOEI7QUFFOUJDLFVBRjhCO0FBRzlCQyxRQUg4QjtBQUk5QkMsYUFKOEI7QUFLOUJDO0FBTDhCLENBQWpCLEVBTVo7QUFDRCxzQkFDRTtBQUFTLGFBQVMsRUFBQywrQkFBbkI7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxhQUFkO0FBQUEsZ0JBQTZCSjtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFJLGVBQVMsRUFBQyxhQUFkO0FBQUEsZ0JBQTZCQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFHLGVBQVMsRUFBQyw0TUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBTUU7QUFBSyxlQUFTLEVBQUMsaUdBQWY7QUFBQSw4QkFDRTtBQUNFLGlCQUFTLEVBQUMsMkRBRFo7QUFFRSxXQUFHLEVBQUVDLE1BQU0sQ0FBQ0csR0FGZDtBQUdFLGFBQUssRUFBRUgsTUFBTSxDQUFDSSxLQUhoQjtBQUlFLGNBQU0sRUFBRUosTUFBTSxDQUFDSyxNQUpqQjtBQUtFLFdBQUcsRUFBQztBQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVFFO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBLGdDQUNFO0FBQUcsbUJBQVMsRUFBQyxtQ0FBYjtBQUFBLG9CQUFrREo7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUcsbUJBQVMsRUFBQyxxREFBYjtBQUFBLG9CQUNHQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3QkQ7S0EvQnVCTCxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzL1tuYW1lXS45NDc2YTUyNzQxMzljOWJmZDhhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV0YWlscyh7XG4gIHRpdGxlLFxuICBzdWJ0aXRsZSxcbiAgbW9ja3VwLFxuICBkZXNjcmlwdGlvbixcbiAgY29uc3RydWN0aW9uLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncC02IG1kOnAtMTIgbGc6cHgtMTYgcmVsYXRpdmUnPlxuICAgICAgPGg1IGNsYXNzTmFtZT0nbWQ6dGV4dC00eGwnPnt0aXRsZX08L2g1PlxuICAgICAgPGg2IGNsYXNzTmFtZT0nbWQ6dGV4dC01eGwnPntzdWJ0aXRsZX08L2g2PlxuICAgICAgPHAgY2xhc3NOYW1lPSdmb250LW9wZW4gdGV4dC1ncmF5IHRleHQteGwgbXQtMTAgbWQ6dGV4dC0zeGwgbGc6dGV4dC00eGwgbGc6Zm9udC1leHRyYWJvbGQgZm9udC1ib2xkIHRyYW5zZm9ybSBtZDpyb3RhdGUtOTAgbWQ6dHJhY2tpbmctd2lkZXN0IG1kOmZsZXggbWQ6c2VsZi1jZW50ZXIgbWQ6YWJzb2x1dGUgbWQ6LXJpZ2h0LTExIGxnOnRvcC00MCBtZDp0b3AtMjYgaC1hdXRvJz5cbiAgICAgICAgQXBwcm9hY2hcbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIG1kOnctMy82IGxnOnctZnVsbCBsZzpweC0xMiBsZzptdC04IGxnOmZsZXgtcm93IGxnOmp1c3RpZnktY2VudGVyIGxnOml0ZW1zLWNlbnRlcic+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9J2gtYXV0byB3LTU2IGxnOnctMi82IG15LTQgbWQ6bXktOCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCdcbiAgICAgICAgICBzcmM9e21vY2t1cC5zcmN9XG4gICAgICAgICAgd2lkdGg9e21vY2t1cC53aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e21vY2t1cC5oZWlnaHR9XG4gICAgICAgICAgYWx0PSdBIGxpdGxlIGRlbW8gb2YgdGhlIHByb3B1c2UnXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZzp3LTIvNSBsZzpweC04Jz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtc291cmNlIHRleHQtd2hpdGUgbWQ6dGV4dC1sZyc+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtc291cmNlIHRleHQtd2hpdGUgZm9udC1ib2xkIG1kOnRleHQtbGcgbGc6cHktMic+XG4gICAgICAgICAgICB7Y29uc3RydWN0aW9ufVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9