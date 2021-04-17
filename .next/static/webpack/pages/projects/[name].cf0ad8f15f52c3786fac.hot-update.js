webpackHotUpdate_N_E("pages/projects/[name]",{

/***/ "./components/projectsComponents/MockUps.jsx":
/*!***************************************************!*\
  !*** ./components/projectsComponents/MockUps.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MockUps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/irvinemmanuel/projects/portfolio/components/projectsComponents/MockUps.jsx";

function MockUps({
  mockups
}) {
  var _mockups$desktop, _mockups$mobile;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex flex-col justify-between",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bg-orange h-auto mt-24 p-4 flex flex-col xl:w-3/4 xl:self-end items-center relative",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "font-open hidden text-gray text-xl mt-10 md:block md:text-3xl lg:text-4xl lg:font-extrabold font-bold transform md:rotate-90 md:tracking-widest md:flex md:self-center md:absolute md:-right-11 md:top-40 h-auto md:text-primary",
        children: "Approach"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this), (_mockups$desktop = mockups.desktop) === null || _mockups$desktop === void 0 ? void 0 : _mockups$desktop.map((desktopMockup, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
        width: desktopMockup.width,
        height: desktopMockup.height,
        className: "h-auto w-5/6 transition duration-300",
        src: desktopMockup.src,
        alt: "A snapshot of the mobile version"
      }, `mobile-${index}`, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }, this))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bg-orange h-auto mt-10 p-4 pb-2 flex flex-col xl:w-3/4 xl:self-end md:flex-row lg:justify-center items-center",
      children: (_mockups$mobile = mockups.mobile) === null || _mockups$mobile === void 0 ? void 0 : _mockups$mobile.map((mobileMockup, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
        width: mobileMockup.width,
        height: mobileMockup.height,
        className: "h-auto transition duration-300",
        src: mobileMockup.src,
        alt: "A snapshot of the mobile version"
      }, `mobile-${index}`, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
_c = MockUps;

var _c;

$RefreshReg$(_c, "MockUps");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0c0NvbXBvbmVudHMvTW9ja1Vwcy5qc3giXSwibmFtZXMiOlsiTW9ja1VwcyIsIm1vY2t1cHMiLCJkZXNrdG9wIiwibWFwIiwiZGVza3RvcE1vY2t1cCIsImluZGV4Iiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJtb2JpbGUiLCJtb2JpbGVNb2NrdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsT0FBVCxDQUFpQjtBQUFFQztBQUFGLENBQWpCLEVBQThCO0FBQUE7O0FBQzNDLHNCQUNFO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMscUZBQWY7QUFBQSw4QkFDRTtBQUFHLGlCQUFTLEVBQUMsa09BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixzQkFJR0EsT0FBTyxDQUFDQyxPQUpYLHFEQUlHLGlCQUFpQkMsR0FBakIsQ0FBcUIsQ0FBQ0MsYUFBRCxFQUFnQkMsS0FBaEIsa0JBQ3BCLHFFQUFDLGlEQUFEO0FBRUUsYUFBSyxFQUFFRCxhQUFhLENBQUNFLEtBRnZCO0FBR0UsY0FBTSxFQUFFRixhQUFhLENBQUNHLE1BSHhCO0FBSUUsaUJBQVMsRUFBQyxzQ0FKWjtBQUtFLFdBQUcsRUFBRUgsYUFBYSxDQUFDSSxHQUxyQjtBQU1FLFdBQUcsRUFBQztBQU5OLFNBQ1EsVUFBU0gsS0FBTSxFQUR2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsQ0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQWdCRTtBQUFLLGVBQVMsRUFBQywrR0FBZjtBQUFBLG1DQUNHSixPQUFPLENBQUNRLE1BRFgsb0RBQ0csZ0JBQWdCTixHQUFoQixDQUFvQixDQUFDTyxZQUFELEVBQWVMLEtBQWYsa0JBQ25CLHFFQUFDLGlEQUFEO0FBRUUsYUFBSyxFQUFFSyxZQUFZLENBQUNKLEtBRnRCO0FBR0UsY0FBTSxFQUFFSSxZQUFZLENBQUNILE1BSHZCO0FBSUUsaUJBQVMsRUFBQyxnQ0FKWjtBQUtFLFdBQUcsRUFBRUcsWUFBWSxDQUFDRixHQUxwQjtBQU1FLFdBQUcsRUFBQztBQU5OLFNBQ1EsVUFBU0gsS0FBTSxFQUR2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK0JEO0tBaEN1QkwsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy9bbmFtZV0uY2YwYWQ4ZjE1ZjUyYzM3ODZmYWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9ja1Vwcyh7IG1vY2t1cHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2Vlbic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctb3JhbmdlIGgtYXV0byBtdC0yNCBwLTQgZmxleCBmbGV4LWNvbCB4bDp3LTMvNCB4bDpzZWxmLWVuZCBpdGVtcy1jZW50ZXIgcmVsYXRpdmUnPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtb3BlbiBoaWRkZW4gdGV4dC1ncmF5IHRleHQteGwgbXQtMTAgbWQ6YmxvY2sgbWQ6dGV4dC0zeGwgbGc6dGV4dC00eGwgbGc6Zm9udC1leHRyYWJvbGQgZm9udC1ib2xkIHRyYW5zZm9ybSBtZDpyb3RhdGUtOTAgbWQ6dHJhY2tpbmctd2lkZXN0IG1kOmZsZXggbWQ6c2VsZi1jZW50ZXIgbWQ6YWJzb2x1dGUgbWQ6LXJpZ2h0LTExIG1kOnRvcC00MCBoLWF1dG8gbWQ6dGV4dC1wcmltYXJ5Jz5cbiAgICAgICAgICBBcHByb2FjaFxuICAgICAgICA8L3A+XG4gICAgICAgIHttb2NrdXBzLmRlc2t0b3A/Lm1hcCgoZGVza3RvcE1vY2t1cCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGtleT17YG1vYmlsZS0ke2luZGV4fWB9XG4gICAgICAgICAgICB3aWR0aD17ZGVza3RvcE1vY2t1cC53aWR0aH1cbiAgICAgICAgICAgIGhlaWdodD17ZGVza3RvcE1vY2t1cC5oZWlnaHR9XG4gICAgICAgICAgICBjbGFzc05hbWU9J2gtYXV0byB3LTUvNiB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCdcbiAgICAgICAgICAgIHNyYz17ZGVza3RvcE1vY2t1cC5zcmN9XG4gICAgICAgICAgICBhbHQ9J0Egc25hcHNob3Qgb2YgdGhlIG1vYmlsZSB2ZXJzaW9uJ1xuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctb3JhbmdlIGgtYXV0byBtdC0xMCBwLTQgcGItMiBmbGV4IGZsZXgtY29sIHhsOnctMy80IHhsOnNlbGYtZW5kIG1kOmZsZXgtcm93IGxnOmp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgIHttb2NrdXBzLm1vYmlsZT8ubWFwKChtb2JpbGVNb2NrdXAsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBrZXk9e2Btb2JpbGUtJHtpbmRleH1gfVxuICAgICAgICAgICAgd2lkdGg9e21vYmlsZU1vY2t1cC53aWR0aH1cbiAgICAgICAgICAgIGhlaWdodD17bW9iaWxlTW9ja3VwLmhlaWdodH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT0naC1hdXRvIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwJ1xuICAgICAgICAgICAgc3JjPXttb2JpbGVNb2NrdXAuc3JjfVxuICAgICAgICAgICAgYWx0PSdBIHNuYXBzaG90IG9mIHRoZSBtb2JpbGUgdmVyc2lvbidcbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==