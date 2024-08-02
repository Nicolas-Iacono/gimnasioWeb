"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/WhatsAppContact.jsx":
/*!****************************************!*\
  !*** ./components/WhatsAppContact.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WhatsAppContact: function() { return /* binding */ WhatsAppContact; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Typography_keyframes_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography,keyframes!=!@mui/material */ \"__barrel_optimize__?names=Box,Typography,keyframes!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_assets_whatsAppLogo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/assets/whatsAppLogo.png */ \"./public/assets/whatsAppLogo.png\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  from {\\n    \\n    opacity: 0;\\n    transform: translateX(-20px);\\n\\n  }\\n  to {\\n\\n    opacity: 1;\\n    transform: translateX(0);\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n// Define keyframes for the slide-in animation\nconst slideIn = (0,_barrel_optimize_names_Box_Typography_keyframes_mui_material__WEBPACK_IMPORTED_MODULE_4__.keyframes)(_templateObject());\nconst WhatsAppContact = ()=>{\n    _s();\n    const phoneNumber = \"+541144952863\";\n    const whatsappUrl = \"https://wa.me/\".concat(phoneNumber);\n    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const elementRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const handleMouseEnter = ()=>{\n        setHover(true);\n        const width = elementRef.current.getBoundingClientRect().width;\n    };\n    const handleMouseLeave = ()=>{\n        setHover(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_Box_Typography_keyframes_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        ref: elementRef,\n        onMouseEnter: handleMouseEnter,\n        onMouseLeave: handleMouseLeave,\n        sx: {\n            position: \"fixed\",\n            bottom: 16,\n            right: 16,\n            width: hover ? \"170px\" : \"70px\",\n            height: \"70px\",\n            borderRadius: \"70px 70px 70px 20px\",\n            boxShadow: 3,\n            p: 1,\n            justifyContent: \"center\",\n            zIndex: 1000,\n            display: \"flex\",\n            alignItems: \"center\",\n            transition: \"width ease-in-out 0.3s\",\n            backgroundColor: hover ? \"#00e676\" : \"#00c853\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n            href: whatsappUrl,\n            target: \"_blank\",\n            rel: \"noopener noreferrer\",\n            style: {\n                display: \"flex\",\n                alignItems: \"center\",\n                textDecoration: \"none\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                    src: _public_assets_whatsAppLogo_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"].src,\n                    alt: \"logo de whatsapp\",\n                    style: {\n                        width: 45,\n                        height: 45\n                    }\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programacion\\\\zarlenga\\\\landingPageZarlenga\\\\frontend\\\\components\\\\WhatsAppContact.jsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined),\n                hover && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_Box_Typography_keyframes_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                    sx: {\n                        ml: 1,\n                        flex: 1,\n                        color: \"#fff\",\n                        animation: \"\".concat(slideIn, \" 0.3s ease-in-out\"),\n                        textDecoration: \"none\"\n                    },\n                    children: \"Quiero contactarme\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programacion\\\\zarlenga\\\\landingPageZarlenga\\\\frontend\\\\components\\\\WhatsAppContact.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Programacion\\\\zarlenga\\\\landingPageZarlenga\\\\frontend\\\\components\\\\WhatsAppContact.jsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Programacion\\\\zarlenga\\\\landingPageZarlenga\\\\frontend\\\\components\\\\WhatsAppContact.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(WhatsAppContact, \"4EP9XexpIMzL79Xpp+u+nqKcoAo=\");\n_c = WhatsAppContact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WhatsAppContact);\nvar _c;\n$RefreshReg$(_c, \"WhatsAppContact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1doYXRzQXBwQ29udGFjdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDbEI7QUFDWTtBQUVyRCw4Q0FBOEM7QUFDOUMsTUFBTU0sVUFBVUosdUdBQVNBO0FBY2xCLE1BQU1LLGtCQUFrQjs7SUFDN0IsTUFBTUMsY0FBYztJQUNwQixNQUFNQyxjQUFjLGlCQUE2QixPQUFaRDtJQUNyQyxNQUFNLENBQUNFLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTVMsYUFBYVIsNkNBQU1BLENBQUM7SUFFMUIsTUFBTVMsbUJBQW1CO1FBQ3ZCRixTQUFTO1FBQ1QsTUFBTUcsUUFBUUYsV0FBV0csT0FBTyxDQUFDQyxxQkFBcUIsR0FBR0YsS0FBSztJQUNoRTtJQUVBLE1BQU1HLG1CQUFtQjtRQUN2Qk4sU0FBUztJQUNYO0lBRUEscUJBQ0UsOERBQUNYLDZGQUFHQTtRQUNGa0IsS0FBS047UUFDTE8sY0FBY047UUFDZE8sY0FBY0g7UUFDZEksSUFBSTtZQUNGQyxVQUFVO1lBQ1ZDLFFBQVE7WUFDUkMsT0FBTztZQUNQVixPQUFPSixRQUFRLFVBQVU7WUFDekJlLFFBQVE7WUFDUkMsY0FBYztZQUNkQyxXQUFXO1lBQ1hDLEdBQUc7WUFDSEMsZ0JBQWdCO1lBQ2hCQyxRQUFRO1lBQ1JDLFNBQVM7WUFDVEMsWUFBWTtZQUNaQyxZQUFZO1lBQ1pDLGlCQUFpQnhCLFFBQVEsWUFBWTtRQUN2QztrQkFFQSw0RUFBQ3lCO1lBQ0NDLE1BQU0zQjtZQUNONEIsUUFBTztZQUNQQyxLQUFJO1lBQ0pDLE9BQU87Z0JBQ0xSLFNBQVM7Z0JBQ1RDLFlBQVk7Z0JBQ1pRLGdCQUFnQjtZQUNsQjs7OEJBRUEsOERBQUNDO29CQUNDQyxLQUFLckMsMkVBQVE7b0JBQ2JzQyxLQUFJO29CQUNKSixPQUFPO3dCQUFFekIsT0FBTzt3QkFBSVcsUUFBUTtvQkFBRzs7Ozs7O2dCQUVoQ2YsdUJBQ0MsOERBQUNULG9HQUFVQTtvQkFDVG9CLElBQUk7d0JBQ0Z1QixJQUFJO3dCQUNKQyxNQUFNO3dCQUNOQyxPQUFPO3dCQUNQQyxXQUFXLEdBQVcsT0FBUnpDLFNBQVE7d0JBQ3RCa0MsZ0JBQWdCO29CQUNsQjs4QkFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWCxFQUFFO0dBcEVXakM7S0FBQUE7QUFzRWIsK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaGF0c0FwcENvbnRhY3QuanN4P2M2ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5LCBrZXlmcmFtZXMgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBsb2dvIGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL3doYXRzQXBwTG9nby5wbmdcIjtcclxuXHJcbi8vIERlZmluZSBrZXlmcmFtZXMgZm9yIHRoZSBzbGlkZS1pbiBhbmltYXRpb25cclxuY29uc3Qgc2xpZGVJbiA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIFxyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XHJcblxyXG4gIH1cclxuICB0byB7XHJcblxyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgV2hhdHNBcHBDb250YWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBob25lTnVtYmVyID0gXCIrNTQxMTQ0OTUyODYzXCI7XHJcbiAgY29uc3Qgd2hhdHNhcHBVcmwgPSBgaHR0cHM6Ly93YS5tZS8ke3Bob25lTnVtYmVyfWA7XHJcbiAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZWxlbWVudFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9ICgpID0+IHtcclxuICAgIHNldEhvdmVyKHRydWUpO1xyXG4gICAgY29uc3Qgd2lkdGggPSBlbGVtZW50UmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcclxuICAgIHNldEhvdmVyKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICByZWY9e2VsZW1lbnRSZWZ9XHJcbiAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlTW91c2VFbnRlcn1cclxuICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxyXG4gICAgICBzeD17e1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgYm90dG9tOiAxNixcclxuICAgICAgICByaWdodDogMTYsXHJcbiAgICAgICAgd2lkdGg6IGhvdmVyID8gXCIxNzBweFwiIDogXCI3MHB4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjcwcHhcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNzBweCA3MHB4IDcwcHggMjBweFwiLFxyXG4gICAgICAgIGJveFNoYWRvdzogMyxcclxuICAgICAgICBwOiAxLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIHpJbmRleDogMTAwMCxcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIHRyYW5zaXRpb246IFwid2lkdGggZWFzZS1pbi1vdXQgMC4zc1wiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogaG92ZXIgPyBcIiMwMGU2NzZcIiA6IFwiIzAwYzg1M1wiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9e3doYXRzYXBwVXJsfVxyXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtsb2dvLnNyY31cclxuICAgICAgICAgIGFsdD1cImxvZ28gZGUgd2hhdHNhcHBcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDQ1LCBoZWlnaHQ6IDQ1IH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7aG92ZXIgJiYgKFxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBtbDogMSxcclxuICAgICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICBhbmltYXRpb246IGAke3NsaWRlSW59IDAuM3MgZWFzZS1pbi1vdXRgLFxyXG4gICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUXVpZXJvIGNvbnRhY3Rhcm1lXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9hPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdoYXRzQXBwQ29udGFjdDtcclxuIl0sIm5hbWVzIjpbIkJveCIsIlR5cG9ncmFwaHkiLCJrZXlmcmFtZXMiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImxvZ28iLCJzbGlkZUluIiwiV2hhdHNBcHBDb250YWN0IiwicGhvbmVOdW1iZXIiLCJ3aGF0c2FwcFVybCIsImhvdmVyIiwic2V0SG92ZXIiLCJlbGVtZW50UmVmIiwiaGFuZGxlTW91c2VFbnRlciIsIndpZHRoIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhhbmRsZU1vdXNlTGVhdmUiLCJyZWYiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJzeCIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJwIiwianVzdGlmeUNvbnRlbnQiLCJ6SW5kZXgiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInRyYW5zaXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJpbWciLCJzcmMiLCJhbHQiLCJtbCIsImZsZXgiLCJjb2xvciIsImFuaW1hdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/WhatsAppContact.jsx\n"));

/***/ })

});