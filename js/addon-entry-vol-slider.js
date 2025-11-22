(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-vol-slider"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/vol-slider/hover.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/vol-slider/hover.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-vol-slider {\r\n  position: relative;\r\n  /* Size when the slider is hidden - same as icon */\r\n  width: 20px;\r\n  box-sizing: content-box;\r\n}\r\n\r\n.sa-vol-slider-inner {\r\n  position: absolute;\r\n  top: 0;\r\n  height: 100%;\r\n}\r\n\r\n[dir=\"ltr\"] .sa-vol-slider-inner {\r\n  left: 0.25rem;\r\n}\r\n\r\n[dir=\"rtl\"] .sa-vol-slider-inner {\r\n  right: 0.25rem;\r\n}\r\n\r\n.sa-vol-slider-inner:not(:hover) > .sa-vol-slider-input {\r\n  opacity: 0;\r\n  width: 0;\r\n}\r\n\r\n[dir=\"ltr\"] .sa-vol-slider-inner:not(:hover) > .sa-vol-slider-input {\r\n  margin-left: -3px;\r\n}\r\n\r\n[dir=\"rtl\"] .sa-vol-slider-inner:not(:hover) > .sa-vol-slider-input {\r\n  margin-right: -3px;\r\n}\r\n\r\n.sa-vol-slider-inner:hover {\r\n  z-index: 1;\r\n}\r\n\r\n.pos-container-container,\r\n.clone-container-container,\r\n[class*=\"turbo-mode_turbo-container\"] {\r\n  transition: opacity 0.25s ease;\r\n}\r\n\r\n.sa-vol-slider:hover ~ .pos-container-container,\r\n.sa-vol-slider:hover ~ .clone-container-container,\r\n.sa-vol-slider:hover ~ [class*=\"turbo-mode_turbo-container\"] {\r\n  opacity: 0;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/vol-slider/userstyle.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/vol-slider/userstyle.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-vol-slider {\r\n  /* Same lateral padding as .clone-container-container */\r\n  padding-left: 0.25rem;\r\n  padding-right: 0.25rem;\r\n}\r\n\r\n.sa-vol-slider-inner {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.sa-vol-slider-icon {\r\n  width: 20px;\r\n  height: 20px;\r\n  background-repeat: no-repeat;\r\n}\r\n.sa-vol-slider-icon[data-icon=\"mute\"] {\r\n  background-image: url(" + escape(__webpack_require__(/*! ./mute.svg */ "./src/addons/addons/vol-slider/mute.svg")) + ");\r\n}\r\n.sa-vol-slider-icon[data-icon=\"quiet\"] {\r\n  background-image: url(" + escape(__webpack_require__(/*! ./quiet.svg */ "./src/addons/addons/vol-slider/quiet.svg")) + ");\r\n}\r\n.sa-vol-slider-icon[data-icon=\"loud\"] {\r\n  background-image: url(" + escape(__webpack_require__(/*! ./loud.svg */ "./src/addons/addons/vol-slider/loud.svg")) + ");\r\n}\r\n.sa-vol-slider-icon:hover,\r\n.sa-vol-slider-input:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.sa-small-stage .sa-vol-slider-input,\r\n.sa-small-stage .sa-vol-slider-icon:not([data-icon=\"mute\"]) {\r\n  display: none !important;\r\n}\r\n.sa-small-stage .sa-vol-slider {\r\n  width: 0;\r\n}\r\n\r\n.sa-vol-slider-input {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 50px;\r\n  height: 6px;\r\n  border-radius: 3px;\r\n  background-color: #de91de;\r\n  transition: all 0.25s ease;\r\n}\r\n\r\n[dir=\"ltr\"] .sa-vol-slider-input {\r\n  margin-left: 3px;\r\n}\r\n\r\n[dir=\"rtl\"] .sa-vol-slider-input {\r\n  margin-right: 3px;\r\n}\r\n\r\n.sa-vol-slider-input::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 12px;\r\n  height: 12px;\r\n  border-radius: 50%;\r\n  background-color: #c234c2;\r\n}\r\n\r\n.sa-vol-slider-input::-moz-range-thumb {\r\n  width: 12px;\r\n  height: 12px;\r\n  border: none;\r\n  border-radius: 50%;\r\n  background-color: #c234c2;\r\n}\r\n\r\n.sa-mute-project-icon {\r\n  display: none !important;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/loud.svg":
/*!*************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/loud.svg ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAyMCAyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4NCiAgICA8dGl0bGU+bG91bmRlcjwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+PC9kZWZzPg0KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0ibG91bmRlciI+DQogICAgICAgICAgICA8ZyBpZD0ibG91ZGVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgNC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNi43MDQxLDIuMTIyMSBMNi43MDQxLDEwLjUzNjEgQzYuNzA0MSwxMC44ODUxIDYuNDIyMSwxMS4xNjcxIDYuMDc0MSwxMS4xNjcxIEw0Ljg5NzEsMTEuMTY3MSBDNC42MjUxLDExLjE2NzEgNC4zODMxLDEwLjk5MjEgNC4yOTgxLDEwLjczMjEgQzMuODE4MSw5LjI2ODEgMi40NTIxLDguMjc4MSAwLjkxMTEsOC4yNzgxIEwwLjYzMTEsOC4yNzgxIEMwLjI4NDEsOC4yNzgxIDAuMDAwMSw3Ljk5NDEgMC4wMDAxLDcuNjQ3MSBMMC4wMDAxLDUuMDExMSBDMC4wMDAxLDQuNjY0MSAwLjI4NDEsNC4zODAxIDAuNjMxMSw0LjM4MDEgTDAuOTExMSw0LjM4MDEgQzIuNDUyMSw0LjM4MDEgMy44MTgxLDMuMzkwMSA0LjI5ODEsMS45MjYxIEM0LjM4MzEsMS42NjYxIDQuNjI1MSwxLjQ5MTEgNC44OTcxLDEuNDkxMSBMNi4wNzQxLDEuNDkxMSBDNi40MjIxLDEuNDkxMSA2LjcwNDEsMS43NzMxIDYuNzA0MSwyLjEyMjEiIGlkPSJGaWxsLTEiIGZpbGw9IiNDRjYzQ0YiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOS4xMTcyLDUuMjEyOSBDOS43MjkyLDUuODI1OSA5LjcyOTIsNi44MzE5IDkuMTE3Miw3LjQ0NDkiIGlkPSJTdHJva2UtMyIgc3Ryb2tlPSIjQ0Y2M0NGIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+DQogICAgICAgICAgICAgICAgPHBhdGggZD0iTTExLjM0ODYsMi45ODE1IEMxMy4xOTY2LDQuODI5NSAxMy4xOTY2LDcuODI5NSAxMS4zNDg2LDkuNjc2NSIgaWQ9IlN0cm9rZS01IiBzdHJva2U9IiNDRjYzQ0YiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuNTgsMC43NTAxIEMxNi42NjMsMy44MzIxIDE2LjY2Myw4LjgyNjEgMTMuNTgsMTEuOTA4MSIgaWQ9IlN0cm9rZS03IiBzdHJva2U9IiNDRjYzQ0YiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/mute.svg":
/*!*************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/mute.svg ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjIwcHgiIGhlaWdodD0iMjBweCIgdmlld0JveD0iMCAwIDIwIDIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTUuMiAoNzgxODEpIC0gaHR0cHM6Ly9za2V0Y2hhcHAuY29tIC0tPg0KICAgIDx0aXRsZT5Tb3VuZC9FZmZlY3RzL011dGU8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxnIGlkPSJTb3VuZC9FZmZlY3RzL011dGUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8cGF0aCBmaWxsPSIjQ0Y2M0NGIiBkPSJNMTMuNDU0MTc0OSw1LjA0ODE1MjQzIEwxNS42MjgxMTY4LDIuODc0MjEwNTQgQzE1LjkyMTAxLDIuNTgxMzE3MzIgMTYuMzk1ODgzNywyLjU4MTMxNzMyIDE2LjY4ODc3NywyLjg3NDIxMDU0IEMxNi45ODE2NzAyLDMuMTY3MTAzNzYgMTYuOTgxNjcwMiwzLjY0MTk3NzQ5IDE2LjY4ODc3NywzLjkzNDg3MDcxIEw0LjUzMDMzMDA5LDE2LjA5MzMxNzYgQzQuMjM3NDM2ODcsMTYuMzg2MjEwOCAzLjc2MjU2MzEzLDE2LjM4NjIxMDggMy40Njk2Njk5MSwxNi4wOTMzMTc2IEMzLjE3Njc3NjcsMTUuODAwNDI0NCAzLjE3Njc3NjcsMTUuMzI1NTUwNiAzLjQ2OTY2OTkxLDE1LjAzMjY1NzQgTDYuMzEyMTQ5MzIsMTIuMTkwMTc4IEM2LjEyNDExOTEsMTIuMDYyMTM3OSA2LDExLjg0NjMzMzEgNiwxMS42MDI5ODc1IEw2LDguNjM3NDg3NSBDNiw4LjI0NzExMjUgNi4zMTk0MTUyNyw3LjkyNzYxMjUgNi43MDk2ODY3NSw3LjkyNzYxMjUgTDcuMDI0NjAzMjIsNy45Mjc2MTI1IEM4Ljc1Nzc2ODQ4LDcuOTI3NjEyNSAxMC4yOTQxMTEsNi44MTM4NjI1IDEwLjgzMzk2NzgsNS4xNjY4NjI1IEMxMC45Mjk1Njc0LDQuODc0MzYyNSAxMS4yMDE3NDUyLDQuNjc3NDg3NSAxMS41MDc2NjQxLDQuNjc3NDg3NSBMMTIuODMxNDM3OSw0LjY3NzQ4NzUgQzEzLjEwMDI4NDQsNC42Nzc0ODc1IDEzLjMzNDEwNzUsNC44MjcxNzIwOCAxMy40NTQxNzQ5LDUuMDQ4MTUyNDMgWiBNMTMuNTQsOS4wODM2NDc3MSBMMTMuNTQsMTQuODUzMTEyNSBDMTMuNTQsMTUuMjQ1NzM3NSAxMy4yMjI4MzQxLDE1LjU2Mjk4NzUgMTIuODMxNDM3OSwxNS41NjI5ODc1IEwxMS41MDc2NjQxLDE1LjU2Mjk4NzUgQzExLjIwMTc0NTIsMTUuNTYyOTg3NSAxMC45Mjk1Njc0LDE1LjM2NjExMjUgMTAuODMzOTY3OCwxNS4wNzM2MTI1IEMxMC41NzczNzg1LDE0LjI5MDgwNzcgMTAuMDk1NjgxMywxMy42Mjg0NjUgOS40NzQ3MzUzMSwxMy4xNDg5MTI0IEwxMy41NCw5LjA4MzY0NzcxIFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4NCiAgICA8L2c+DQo8L3N2Zz4NCg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/quiet.svg":
/*!**************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/quiet.svg ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAyMCAyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4NCiAgICA8dGl0bGU+aWNvbi0tc29mdGVyPC90aXRsZT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCiAgICA8ZGVmcz48L2RlZnM+DQogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJzb2Z0ZXIiPg0KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS4wMDAwMDAsIDQuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuNTQwMTEyNDYsMS4zODczNjI1IEw3LjU0MDExMjQ2LDEwLjg1MzExMjUgQzcuNTQwMTEyNDYsMTEuMjQ1NzM3NSA3LjIyMjk0NjU5LDExLjU2Mjk4NzUgNi44MzE1NTA0MSwxMS41NjI5ODc1IEw1LjUwNzc3NjU1LDExLjU2Mjk4NzUgQzUuMjAxODU3NywxMS41NjI5ODc1IDQuOTI5Njc5OSwxMS4zNjYxMTI1IDQuODM0MDgwMjYsMTEuMDczNjEyNSBDNC4yOTQyMjM0Niw5LjQyNjYxMjUgMi43NTc4ODA5OCw4LjMxMjg2MjUgMS4wMjQ3MTU3Miw4LjMxMjg2MjUgTDAuNzA5Nzk5MjUxLDguMzEyODYyNSBDMC4zMTk1Mjc3NzMsOC4zMTI4NjI1IDAuMDAwMTEyNSw3Ljk5MzM2MjUgMC4wMDAxMTI1LDcuNjAyOTg3NSBMMC4wMDAxMTI1LDQuNjM3NDg3NSBDMC4wMDAxMTI1LDQuMjQ3MTEyNSAwLjMxOTUyNzc3MywzLjkyNzYxMjUgMC43MDk3OTkyNTEsMy45Mjc2MTI1IEwxLjAyNDcxNTcyLDMuOTI3NjEyNSBDMi43NTc4ODA5OCwzLjkyNzYxMjUgNC4yOTQyMjM0NiwyLjgxMzg2MjUgNC44MzQwODAyNiwxLjE2Njg2MjUgQzQuOTI5Njc5OSwwLjg3NDM2MjUgNS4yMDE4NTc3LDAuNjc3NDg3NSA1LjUwNzc3NjU1LDAuNjc3NDg3NSBMNi44MzE1NTA0MSwwLjY3NzQ4NzUgQzcuMjIyOTQ2NTksMC42Nzc0ODc1IDcuNTQwMTEyNDYsMC45OTQ3Mzc1IDcuNTQwMTEyNDYsMS4zODczNjI1IiBpZD0iRmlsbC0xIiBmaWxsPSIjQ0Y2M0NGIj48L3BhdGg+DQogICAgICAgICAgICAgICAgPHBhdGggZD0iTTkuMjUsNC44NjQ1MTI1IEM5LjkzODUsNS41NTQxMzc1IDkuOTM4NSw2LjY4NTg4NzUgOS4yNSw3LjM3NTUxMjUiIGlkPSJTdHJva2UtMyIgc3Ryb2tlPSIjQ0Y2M0NGIiBzdHJva2Utd2lkdGg9IjEuNzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+");

/***/ }),

/***/ "./src/addons/addons/vol-slider/_runtime_entry.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/vol-slider/_runtime_entry.js ***!
  \********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/vol-slider/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/vol-slider/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_hover_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css-loader!./hover.css */ "./node_modules/css-loader/index.js!./src/addons/addons/vol-slider/hover.css");
/* harmony import */ var _css_loader_hover_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_loader_hover_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _url_loader_loud_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-loader!./loud.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/loud.svg");
/* harmony import */ var _url_loader_mute_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url-loader!./mute.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/mute.svg");
/* harmony import */ var _url_loader_quiet_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url-loader!./quiet.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/quiet.svg");
/* generated by pull.js */






const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "hover.css": _css_loader_hover_css__WEBPACK_IMPORTED_MODULE_2___default.a,
  "loud.svg": _url_loader_loud_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  "mute.svg": _url_loader_mute_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
  "quiet.svg": _url_loader_quiet_svg__WEBPACK_IMPORTED_MODULE_5__["default"]
};

/***/ }),

/***/ "./src/addons/addons/vol-slider/loud.svg":
/*!***********************************************!*\
  !*** ./src/addons/addons/vol-slider/loud.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAyMCAyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4NCiAgICA8dGl0bGU+bG91bmRlcjwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+PC9kZWZzPg0KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0ibG91bmRlciI+DQogICAgICAgICAgICA8ZyBpZD0ibG91ZGVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgNC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNi43MDQxLDIuMTIyMSBMNi43MDQxLDEwLjUzNjEgQzYuNzA0MSwxMC44ODUxIDYuNDIyMSwxMS4xNjcxIDYuMDc0MSwxMS4xNjcxIEw0Ljg5NzEsMTEuMTY3MSBDNC42MjUxLDExLjE2NzEgNC4zODMxLDEwLjk5MjEgNC4yOTgxLDEwLjczMjEgQzMuODE4MSw5LjI2ODEgMi40NTIxLDguMjc4MSAwLjkxMTEsOC4yNzgxIEwwLjYzMTEsOC4yNzgxIEMwLjI4NDEsOC4yNzgxIDAuMDAwMSw3Ljk5NDEgMC4wMDAxLDcuNjQ3MSBMMC4wMDAxLDUuMDExMSBDMC4wMDAxLDQuNjY0MSAwLjI4NDEsNC4zODAxIDAuNjMxMSw0LjM4MDEgTDAuOTExMSw0LjM4MDEgQzIuNDUyMSw0LjM4MDEgMy44MTgxLDMuMzkwMSA0LjI5ODEsMS45MjYxIEM0LjM4MzEsMS42NjYxIDQuNjI1MSwxLjQ5MTEgNC44OTcxLDEuNDkxMSBMNi4wNzQxLDEuNDkxMSBDNi40MjIxLDEuNDkxMSA2LjcwNDEsMS43NzMxIDYuNzA0MSwyLjEyMjEiIGlkPSJGaWxsLTEiIGZpbGw9IiNDRjYzQ0YiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOS4xMTcyLDUuMjEyOSBDOS43MjkyLDUuODI1OSA5LjcyOTIsNi44MzE5IDkuMTE3Miw3LjQ0NDkiIGlkPSJTdHJva2UtMyIgc3Ryb2tlPSIjQ0Y2M0NGIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+DQogICAgICAgICAgICAgICAgPHBhdGggZD0iTTExLjM0ODYsMi45ODE1IEMxMy4xOTY2LDQuODI5NSAxMy4xOTY2LDcuODI5NSAxMS4zNDg2LDkuNjc2NSIgaWQ9IlN0cm9rZS01IiBzdHJva2U9IiNDRjYzQ0YiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuNTgsMC43NTAxIEMxNi42NjMsMy44MzIxIDE2LjY2Myw4LjgyNjEgMTMuNTgsMTEuOTA4MSIgaWQ9IlN0cm9rZS03IiBzdHJva2U9IiNDRjYzQ0YiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="

/***/ }),

/***/ "./src/addons/addons/vol-slider/mute.svg":
/*!***********************************************!*\
  !*** ./src/addons/addons/vol-slider/mute.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjIwcHgiIGhlaWdodD0iMjBweCIgdmlld0JveD0iMCAwIDIwIDIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTUuMiAoNzgxODEpIC0gaHR0cHM6Ly9za2V0Y2hhcHAuY29tIC0tPg0KICAgIDx0aXRsZT5Tb3VuZC9FZmZlY3RzL011dGU8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxnIGlkPSJTb3VuZC9FZmZlY3RzL011dGUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8cGF0aCBmaWxsPSIjQ0Y2M0NGIiBkPSJNMTMuNDU0MTc0OSw1LjA0ODE1MjQzIEwxNS42MjgxMTY4LDIuODc0MjEwNTQgQzE1LjkyMTAxLDIuNTgxMzE3MzIgMTYuMzk1ODgzNywyLjU4MTMxNzMyIDE2LjY4ODc3NywyLjg3NDIxMDU0IEMxNi45ODE2NzAyLDMuMTY3MTAzNzYgMTYuOTgxNjcwMiwzLjY0MTk3NzQ5IDE2LjY4ODc3NywzLjkzNDg3MDcxIEw0LjUzMDMzMDA5LDE2LjA5MzMxNzYgQzQuMjM3NDM2ODcsMTYuMzg2MjEwOCAzLjc2MjU2MzEzLDE2LjM4NjIxMDggMy40Njk2Njk5MSwxNi4wOTMzMTc2IEMzLjE3Njc3NjcsMTUuODAwNDI0NCAzLjE3Njc3NjcsMTUuMzI1NTUwNiAzLjQ2OTY2OTkxLDE1LjAzMjY1NzQgTDYuMzEyMTQ5MzIsMTIuMTkwMTc4IEM2LjEyNDExOTEsMTIuMDYyMTM3OSA2LDExLjg0NjMzMzEgNiwxMS42MDI5ODc1IEw2LDguNjM3NDg3NSBDNiw4LjI0NzExMjUgNi4zMTk0MTUyNyw3LjkyNzYxMjUgNi43MDk2ODY3NSw3LjkyNzYxMjUgTDcuMDI0NjAzMjIsNy45Mjc2MTI1IEM4Ljc1Nzc2ODQ4LDcuOTI3NjEyNSAxMC4yOTQxMTEsNi44MTM4NjI1IDEwLjgzMzk2NzgsNS4xNjY4NjI1IEMxMC45Mjk1Njc0LDQuODc0MzYyNSAxMS4yMDE3NDUyLDQuNjc3NDg3NSAxMS41MDc2NjQxLDQuNjc3NDg3NSBMMTIuODMxNDM3OSw0LjY3NzQ4NzUgQzEzLjEwMDI4NDQsNC42Nzc0ODc1IDEzLjMzNDEwNzUsNC44MjcxNzIwOCAxMy40NTQxNzQ5LDUuMDQ4MTUyNDMgWiBNMTMuNTQsOS4wODM2NDc3MSBMMTMuNTQsMTQuODUzMTEyNSBDMTMuNTQsMTUuMjQ1NzM3NSAxMy4yMjI4MzQxLDE1LjU2Mjk4NzUgMTIuODMxNDM3OSwxNS41NjI5ODc1IEwxMS41MDc2NjQxLDE1LjU2Mjk4NzUgQzExLjIwMTc0NTIsMTUuNTYyOTg3NSAxMC45Mjk1Njc0LDE1LjM2NjExMjUgMTAuODMzOTY3OCwxNS4wNzM2MTI1IEMxMC41NzczNzg1LDE0LjI5MDgwNzcgMTAuMDk1NjgxMywxMy42Mjg0NjUgOS40NzQ3MzUzMSwxMy4xNDg5MTI0IEwxMy41NCw5LjA4MzY0NzcxIFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4NCiAgICA8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./src/addons/addons/vol-slider/quiet.svg":
/*!************************************************!*\
  !*** ./src/addons/addons/vol-slider/quiet.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAyMCAyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4NCiAgICA8dGl0bGU+aWNvbi0tc29mdGVyPC90aXRsZT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCiAgICA8ZGVmcz48L2RlZnM+DQogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJzb2Z0ZXIiPg0KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS4wMDAwMDAsIDQuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuNTQwMTEyNDYsMS4zODczNjI1IEw3LjU0MDExMjQ2LDEwLjg1MzExMjUgQzcuNTQwMTEyNDYsMTEuMjQ1NzM3NSA3LjIyMjk0NjU5LDExLjU2Mjk4NzUgNi44MzE1NTA0MSwxMS41NjI5ODc1IEw1LjUwNzc3NjU1LDExLjU2Mjk4NzUgQzUuMjAxODU3NywxMS41NjI5ODc1IDQuOTI5Njc5OSwxMS4zNjYxMTI1IDQuODM0MDgwMjYsMTEuMDczNjEyNSBDNC4yOTQyMjM0Niw5LjQyNjYxMjUgMi43NTc4ODA5OCw4LjMxMjg2MjUgMS4wMjQ3MTU3Miw4LjMxMjg2MjUgTDAuNzA5Nzk5MjUxLDguMzEyODYyNSBDMC4zMTk1Mjc3NzMsOC4zMTI4NjI1IDAuMDAwMTEyNSw3Ljk5MzM2MjUgMC4wMDAxMTI1LDcuNjAyOTg3NSBMMC4wMDAxMTI1LDQuNjM3NDg3NSBDMC4wMDAxMTI1LDQuMjQ3MTEyNSAwLjMxOTUyNzc3MywzLjkyNzYxMjUgMC43MDk3OTkyNTEsMy45Mjc2MTI1IEwxLjAyNDcxNTcyLDMuOTI3NjEyNSBDMi43NTc4ODA5OCwzLjkyNzYxMjUgNC4yOTQyMjM0NiwyLjgxMzg2MjUgNC44MzQwODAyNiwxLjE2Njg2MjUgQzQuOTI5Njc5OSwwLjg3NDM2MjUgNS4yMDE4NTc3LDAuNjc3NDg3NSA1LjUwNzc3NjU1LDAuNjc3NDg3NSBMNi44MzE1NTA0MSwwLjY3NzQ4NzUgQzcuMjIyOTQ2NTksMC42Nzc0ODc1IDcuNTQwMTEyNDYsMC45OTQ3Mzc1IDcuNTQwMTEyNDYsMS4zODczNjI1IiBpZD0iRmlsbC0xIiBmaWxsPSIjQ0Y2M0NGIj48L3BhdGg+DQogICAgICAgICAgICAgICAgPHBhdGggZD0iTTkuMjUsNC44NjQ1MTI1IEM5LjkzODUsNS41NTQxMzc1IDkuOTM4NSw2LjY4NTg4NzUgOS4yNSw3LjM3NTUxMjUiIGlkPSJTdHJva2UtMyIgc3Ryb2tlPSIjQ0Y2M0NGIiBzdHJva2Utd2lkdGg9IjEuNzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"

/***/ }),

/***/ "./src/addons/addons/vol-slider/userscript.js":
/*!****************************************************!*\
  !*** ./src/addons/addons/vol-slider/userscript.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module.js */ "./src/addons/addons/vol-slider/module.js");
/* harmony import */ var _libraries_common_cs_small_stage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libraries/common/cs/small-stage.js */ "./src/addons/libraries/common/cs/small-stage.js");


/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    console
  } = _ref;
  const vm = addon.tab.traps.vm;
  Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["setup"])(vm);
  const icon = document.createElement("div");
  icon.className = "sa-vol-slider-icon";
  icon.addEventListener("click", () => {
    Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["setMuted"])(!Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["isMuted"])());
  });
  const updateIcon = () => {
    const newVolume = Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["getVolume"])();
    if (newVolume === 0) {
      icon.dataset.icon = "mute";
    } else if (newVolume < 0.5) {
      icon.dataset.icon = "quiet";
    } else {
      icon.dataset.icon = "loud";
    }
  };
  Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["onVolumeChanged"])(updateIcon);
  const slider = document.createElement("input");
  slider.className = "sa-vol-slider-input";
  slider.type = "range";
  slider.min = 0;
  slider.max = 1;
  slider.step = 0.02;
  slider.addEventListener("input", e => {
    Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["setVolume"])(+e.target.value);
  });
  slider.addEventListener("change", e => {
    // Only commit unmute volume after the user finishes moving the slider
    if (!Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["isMuted"])()) {
      Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["setUnmutedVolume"])(Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["getVolume"])());
    }
  });
  Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["onVolumeChanged"])(() => {
    const newVolume = Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["getVolume"])();
    if (newVolume !== +slider.value) {
      slider.value = newVolume;
    }
  });
  Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["setVolume"])(addon.settings.get("defVol") / 100);
  const container = document.createElement("div");
  container.className = "sa-vol-slider";
  // Nested elements are needed for hover animation - see hover.css
  const innerContainer = document.createElement("div");
  innerContainer.className = "sa-vol-slider-inner";
  innerContainer.appendChild(icon);
  innerContainer.appendChild(slider);
  container.appendChild(innerContainer);
  addon.tab.displayNoneWhileDisabled(container, {
    display: "flex"
  });
  Object(_libraries_common_cs_small_stage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  addon.self.addEventListener("disabled", () => {
    Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["setVolume"])(1);
  });
  addon.self.addEventListener("reenabled", () => {
    Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["setVolume"])(addon.settings.get("defVol") / 100);
  });
  while (true) {
    await addon.tab.waitForElement("[class^='green-flag_green-flag']", {
      markAsSeen: true,
      reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"]
    });
    addon.tab.displayNoneWhileDisabled(container, {
      display: "flex"
    });
    addon.tab.appendToSharedSpace({
      space: "afterStopButton",
      element: container,
      order: 0
    });
  }
});

/***/ }),

/***/ "./src/addons/libraries/common/cs/small-stage.js":
/*!*******************************************************!*\
  !*** ./src/addons/libraries/common/cs/small-stage.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addSmallStageClass; });
function addSmallStageClass() {
  // TW: no-op; sa-small-stage class is handled by scratch-gui
}

/***/ })

}]);
//# sourceMappingURL=addon-entry-vol-slider.js.map