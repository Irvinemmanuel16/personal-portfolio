webpackHotUpdate_N_E("pages/projects/[name]",{

/***/ "./pages/projects/[name].js":
/*!**********************************!*\
  !*** ./pages/projects/[name].js ***!
  \**********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Project; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer.jsx");
/* harmony import */ var _components_projectsComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/projectsComponents */ "./components/projectsComponents/index.jsx");



var _jsxFileName = "/home/irvinemmanuel/projects/portfolio/pages/projects/[name].js",
    _s = $RefreshSig$();






var __N_SSG = true;
function Project({
  project
}) {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: ["Project | ", `${project['title1'].content}${project['title2'].content}`]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_projectsComponents__WEBPACK_IMPORTED_MODULE_5__["Hero"], {
      titleFirst: project.title1,
      titleSecond: project.title2,
      subtitle: project.subtitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_projectsComponents__WEBPACK_IMPORTED_MODULE_5__["Info"], {
      description: project.description,
      year: project.year
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_projectsComponents__WEBPACK_IMPORTED_MODULE_5__["Details"], {
      title: project.detailsTitle,
      subtitle: project.detailsSubTitle,
      mockup: project.detailsMockup,
      description: project.detailsDescription,
      construction: project.detailsConstruction
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_projectsComponents__WEBPACK_IMPORTED_MODULE_5__["MockUps"], {
      mockups: project.mockups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_projectsComponents__WEBPACK_IMPORTED_MODULE_5__["BthButton"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_projectsComponents__WEBPACK_IMPORTED_MODULE_5__["FooterPhrase"], {
      phrase: project.footerPhrase,
      autor: project.footerAutor
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Project, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Project;

var _c;

$RefreshReg$(_c, "Project");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvW25hbWVdLmpzIl0sIm5hbWVzIjpbIlByb2plY3QiLCJwcm9qZWN0IiwidXNlRWZmZWN0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJsZWZ0IiwiYmVoYXZpb3IiLCJjb250ZW50IiwidGl0bGUxIiwidGl0bGUyIiwic3VidGl0bGUiLCJkZXNjcmlwdGlvbiIsInllYXIiLCJkZXRhaWxzVGl0bGUiLCJkZXRhaWxzU3ViVGl0bGUiLCJkZXRhaWxzTW9ja3VwIiwiZGV0YWlsc0Rlc2NyaXB0aW9uIiwiZGV0YWlsc0NvbnN0cnVjdGlvbiIsIm1vY2t1cHMiLCJmb290ZXJQaHJhc2UiLCJmb290ZXJBdXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVWUsU0FBU0EsT0FBVCxDQUFpQjtBQUFFQztBQUFGLENBQWpCLEVBQThCO0FBQUE7O0FBQzNDQyx5REFBUyxDQUFDLE1BQU07QUFDZEMsVUFBTSxDQUFDQyxRQUFQLENBQWdCO0FBQ2RDLFNBQUcsRUFBRSxDQURTO0FBRWRDLFVBQUksRUFBRSxDQUZRO0FBR2RDLGNBQVEsRUFBRTtBQUhJLEtBQWhCO0FBS0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBLGlDQUNjLEdBQUVOLE9BQU8sQ0FBQyxRQUFELENBQVAsQ0FBa0JPLE9BQVEsR0FBRVAsT0FBTyxDQUFDLFFBQUQsQ0FBUCxDQUFrQk8sT0FBUSxFQUR0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFPRSxxRUFBQyxtRUFBRDtBQUNFLGdCQUFVLEVBQUVQLE9BQU8sQ0FBQ1EsTUFEdEI7QUFFRSxpQkFBVyxFQUFFUixPQUFPLENBQUNTLE1BRnZCO0FBR0UsY0FBUSxFQUFFVCxPQUFPLENBQUNVO0FBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixlQVlFLHFFQUFDLG1FQUFEO0FBQU0saUJBQVcsRUFBRVYsT0FBTyxDQUFDVyxXQUEzQjtBQUF3QyxVQUFJLEVBQUVYLE9BQU8sQ0FBQ1k7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGLGVBYUUscUVBQUMsc0VBQUQ7QUFDRSxXQUFLLEVBQUVaLE9BQU8sQ0FBQ2EsWUFEakI7QUFFRSxjQUFRLEVBQUViLE9BQU8sQ0FBQ2MsZUFGcEI7QUFHRSxZQUFNLEVBQUVkLE9BQU8sQ0FBQ2UsYUFIbEI7QUFJRSxpQkFBVyxFQUFFZixPQUFPLENBQUNnQixrQkFKdkI7QUFLRSxrQkFBWSxFQUFFaEIsT0FBTyxDQUFDaUI7QUFMeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGLGVBb0JFLHFFQUFDLHNFQUFEO0FBQVMsYUFBTyxFQUFFakIsT0FBTyxDQUFDa0I7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRixlQXFCRSxxRUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckJGLGVBc0JFLHFFQUFDLDJFQUFEO0FBQWMsWUFBTSxFQUFFbEIsT0FBTyxDQUFDbUIsWUFBOUI7QUFBNEMsV0FBSyxFQUFFbkIsT0FBTyxDQUFDb0I7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCRixlQXVCRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkJGO0FBQUEsa0JBREY7QUEyQkQ7O0dBcEN1QnJCLE87O0tBQUFBLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMvW25hbWVdLjA4NmQzMjkwMzhjNTdlNzNhNGEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCB7XG4gIEhlcm8sXG4gIEluZm8sXG4gIERldGFpbHMsXG4gIE1vY2tVcHMsXG4gIEJ0aEJ1dHRvbixcbiAgRm9vdGVyUGhyYXNlLFxufSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Byb2plY3RzQ29tcG9uZW50cyc7XG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi9wdWJsaWMvZGF0YS9wcm9qZWN0c0RhdGEuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QoeyBwcm9qZWN0IH0pIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgUHJvamVjdCB8IHtgJHtwcm9qZWN0Wyd0aXRsZTEnXS5jb250ZW50fSR7cHJvamVjdFsndGl0bGUyJ10uY29udGVudH1gfVxuICAgICAgICA8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPEhlcm9cbiAgICAgICAgdGl0bGVGaXJzdD17cHJvamVjdC50aXRsZTF9XG4gICAgICAgIHRpdGxlU2Vjb25kPXtwcm9qZWN0LnRpdGxlMn1cbiAgICAgICAgc3VidGl0bGU9e3Byb2plY3Quc3VidGl0bGV9XG4gICAgICAvPlxuICAgICAgPEluZm8gZGVzY3JpcHRpb249e3Byb2plY3QuZGVzY3JpcHRpb259IHllYXI9e3Byb2plY3QueWVhcn0gLz5cbiAgICAgIDxEZXRhaWxzXG4gICAgICAgIHRpdGxlPXtwcm9qZWN0LmRldGFpbHNUaXRsZX1cbiAgICAgICAgc3VidGl0bGU9e3Byb2plY3QuZGV0YWlsc1N1YlRpdGxlfVxuICAgICAgICBtb2NrdXA9e3Byb2plY3QuZGV0YWlsc01vY2t1cH1cbiAgICAgICAgZGVzY3JpcHRpb249e3Byb2plY3QuZGV0YWlsc0Rlc2NyaXB0aW9ufVxuICAgICAgICBjb25zdHJ1Y3Rpb249e3Byb2plY3QuZGV0YWlsc0NvbnN0cnVjdGlvbn1cbiAgICAgIC8+XG4gICAgICA8TW9ja1VwcyBtb2NrdXBzPXtwcm9qZWN0Lm1vY2t1cHN9IC8+XG4gICAgICA8QnRoQnV0dG9uIC8+XG4gICAgICA8Rm9vdGVyUGhyYXNlIHBocmFzZT17cHJvamVjdC5mb290ZXJQaHJhc2V9IGF1dG9yPXtwcm9qZWN0LmZvb3RlckF1dG9yfSAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBwcm9qZWN0ID0gZGF0YT8ucHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4ge1xuICAgIGxldCB0aXRsZSA9IHByb2plY3RbJ3RpdGxlMSddLmNvbnRlbnQuY29uY2F0KCcnLCBwcm9qZWN0Wyd0aXRsZTInXS5jb250ZW50KTtcbiAgICByZXR1cm4gKFxuICAgICAgdGl0bGUudG9Mb2NhbGVMb3dlckNhc2UoKS5pbmRleE9mKHBhcmFtcz8ubmFtZT8udG9Mb2NhbGVMb3dlckNhc2UoKSkgPT09IDBcbiAgICApO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBwcm9qZWN0OiBwcm9qZWN0WzBdIH0sXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcGF0aHMgPSBkYXRhPy5wcm9qZWN0VGl0bGVzLm1hcChwcm9qZWN0ID0+ICh7XG4gICAgcGFyYW1zOiB7XG4gICAgICBuYW1lOiBwcm9qZWN0LFxuICAgIH0sXG4gIH0pKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=