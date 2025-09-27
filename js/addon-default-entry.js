(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-default-entry"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/color-picker/style.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/color-picker/style.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-color-picker {\n  display: flex;\n}\n\n.sa-color-picker-code {\n  margin: 8px 0;\n}\n\n.sa-color-picker-paint {\n  margin-top: 16px;\n  margin-bottom: 4px;\n}\n\n.sa-color-picker > .sa-color-picker-color {\n  border: none;\n  border-top-left-radius: 1rem;\n  border-bottom-left-radius: 1rem;\n  padding: 0;\n  padding-left: 0.6rem;\n  padding-right: 0.4rem;\n  margin-left: 0.5rem;\n  outline: none;\n  box-sizing: border-box;\n  width: 3rem;\n  height: 2rem;\n}\n\n.sa-color-picker > .sa-color-picker-text {\n  box-sizing: border-box;\n  width: calc(150px - 3rem);\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n[dir=\"rtl\"] .sa-color-picker > .sa-color-picker-color {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n  margin-left: 0;\n  margin-right: 0.5rem;\n}\n\n[dir=\"rtl\"] .sa-color-picker > .sa-color-picker-text {\n  border-top-left-radius: 1rem;\n  border-bottom-left-radius: 1rem;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\nbody.sa-hide-eye-dropper-background div[class*=\"stage_color-picker-background\"] {\n  /* Do not show eye dropper background if the color picker is \"fake\" */\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/editor-comment-previews/userstyle.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/editor-comment-previews/userstyle.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-comment-preview-outer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100000000;\n  pointer-events: none;\n}\n\n.sa-comment-preview-inner {\n  width: calc(200px - 16px);\n  max-height: calc(132px - 8px);\n  padding: 8px;\n  overflow: hidden;\n\n  font-size: 12px;\n  white-space: pre-wrap;\n  pointer-events: none;\n\n  color: rgb(87, 94, 117);\n  background-color: rgb(255 255 255 / 90%);\n  border-style: none;\n  border-radius: 8px;\n  filter: drop-shadow(0px 5px 5px rgb(0 0 0 / 10%));\n\n  transform: perspective(200px);\n}\n\n@supports (backdrop-filter: blur(16px)) {\n  .sa-comment-preview-inner {\n    background-color: rgb(255 255 255 / 75%);\n    backdrop-filter: blur(16px);\n  }\n}\n\n.sa-comment-preview-fade {\n  transition:\n    opacity 0.1s,\n    filter 0.1s,\n    transform 0.1s linear;\n}\n\n.sa-comment-preview-hidden {\n  opacity: 0;\n  filter: none;\n  transform: perspective(200px) translateZ(-20px);\n}\n\n.sa-comment-preview-reduce-transparency {\n  background-color: rgb(255 255 255);\n  backdrop-filter: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/editor-searchable-dropdowns/userscript.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/editor-searchable-dropdowns/userscript.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".u-dropdown-searchbar {\n  width: 100%;\n  box-sizing: border-box;\n  /* based on styles for the title input */\n  color: white;\n  background-color: hsla(0, 100%, 100%, 0.25);\n  border: 1px solid hsla(0, 0%, 0%, 0.15);\n  padding: 0.5rem;\n  outline: none;\n  transition: 0.25s ease-out;\n  font-size: 13px;\n  font-weight: bold;\n  border-radius: 4px;\n}\n.u-dropdown-searchbar:hover {\n  background-color: hsla(0, 100%, 100%, 0.5);\n}\n.u-dropdown-searchbar:focus {\n  background-color: white;\n  color: black;\n}\n.blocklyDropDownDiv .goog-menu {\n  overflow-x: hidden;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/editor-theme3/compatibility.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/editor-theme3/compatibility.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Imported by other addons */\n\n.sa-block-color {\n  --sa-block-colored-background: var(--sa-block-background-primary);\n  --sa-block-colored-background-secondary: var(--sa-block-field-background);\n  --sa-block-bright-background: var(--sa-block-background-primary);\n  --sa-block-text: var(--editorTheme3-blockText, white);\n  --sa-block-gray-text: white;\n  --sa-block-colored-text: var(--sa-block-background-primary);\n  --sa-block-text-on-bright-background: var(--editorTheme3-blockText, white);\n  --sa-block-input-color: var(--editorTheme3-inputColor, white);\n  --sa-block-input-text: var(--editorTheme3-inputColor-text, #575e75);\n}\n\n.sa-block-color-motion {\n  --sa-block-background-primary: var(--editorTheme3-motion-primary, #4c97ff);\n  --sa-block-background-secondary: var(--editorTheme3-motion-secondary, #4280d7);\n  --sa-block-background-tertiary: var(--editorTheme3-motion-tertiary, #3373cc);\n  --sa-block-field-background: var(--editorTheme3-motion-field, #3373cc);\n}\n\n.sa-block-color-looks {\n  --sa-block-background-primary: var(--editorTheme3-looks-primary, #9966ff);\n  --sa-block-background-secondary: var(--editorTheme3-looks-secondary, #855cd6);\n  --sa-block-background-tertiary: var(--editorTheme3-looks-tertiary, #774dcb);\n  --sa-block-field-background: var(--editorTheme3-looks-field, #774dcb);\n}\n\n.sa-block-color-sounds {\n  --sa-block-background-primary: var(--editorTheme3-sounds-primary, #cf63cf);\n  --sa-block-background-secondary: var(--editorTheme3-sounds-secondary, #c94fc9);\n  --sa-block-background-tertiary: var(--editorTheme3-sounds-tertiary, #bd42bd);\n  --sa-block-field-background: var(--editorTheme3-sounds-field, #bd42bd);\n}\n\n.sa-block-color-events {\n  --sa-block-background-primary: var(--editorTheme3-event-primary, #ffbf00);\n  --sa-block-background-secondary: var(--editorTheme3-event-secondary, #e6ac00);\n  --sa-block-background-tertiary: var(--editorTheme3-event-tertiary, #cc9900);\n  --sa-block-field-background: var(--editorTheme3-event-field, #cc9900);\n}\n\n.sa-block-color-control {\n  --sa-block-background-primary: var(--editorTheme3-control-primary, #ffab19);\n  --sa-block-background-secondary: var(--editorTheme3-control-secondary, #ec9c13);\n  --sa-block-background-tertiary: var(--editorTheme3-control-tertiary, #cf8b17);\n  --sa-block-field-background: var(--editorTheme3-control-field, #cf8b17);\n}\n\n.sa-block-color-sensing {\n  --sa-block-background-primary: var(--editorTheme3-sensing-primary, #5cb1d6);\n  --sa-block-background-secondary: var(--editorTheme3-sensing-secondary, #47a8d1);\n  --sa-block-background-tertiary: var(--editorTheme3-sensing-tertiary, #2e8eb8);\n  --sa-block-field-background: var(--editorTheme3-sensing-field, #2e8eb8);\n}\n\n.sa-block-color-operators {\n  --sa-block-background-primary: var(--editorTheme3-operators-primary, #59c059);\n  --sa-block-background-secondary: var(--editorTheme3-operators-secondary, #46b946);\n  --sa-block-background-tertiary: var(--editorTheme3-operators-tertiary, #389438);\n  --sa-block-field-background: var(--editorTheme3-operators-field, #389438);\n}\n\n.sa-block-color-data {\n  --sa-block-background-primary: var(--editorTheme3-data-primary, #ff8c1a);\n  --sa-block-background-secondary: var(--editorTheme3-data-secondary, #ff8000);\n  --sa-block-background-tertiary: var(--editorTheme3-data-tertiary, #db6e00);\n  --sa-block-field-background: var(--editorTheme3-data-field, #db6e00);\n}\n\n.sa-block-color-data-lists,\n.sa-block-color-list {\n  --sa-block-background-primary: var(--editorTheme3-data_lists-primary, #ff661a);\n  --sa-block-background-secondary: var(--editorTheme3-data_lists-secondary, #ff5500);\n  --sa-block-background-tertiary: var(--editorTheme3-data_lists-tertiary, #e64d00);\n  --sa-block-field-background: var(--editorTheme3-data_lists-field, #e64d00);\n}\n\n.sa-block-color-json {\n  --sa-block-background-primary: var(--editorTheme3-json-primary, #748bee);\n  --sa-block-background-secondary: var(--editorTheme3-json-secondary, #687dd6);\n  --sa-block-background-tertiary: var(--editorTheme3-json-tertiary, #5c6fbe);\n  --sa-block-field-background: var(--editorTheme3-json-field, #5563a7);\n}\n\n.sa-block-color-more,\n.sa-block-color-null {\n  --sa-block-background-primary: var(--editorTheme3-more-primary, #ff6680);\n  --sa-block-background-secondary: var(--editorTheme3-more-secondary, #ff4d6a);\n  --sa-block-background-tertiary: var(--editorTheme3-more-tertiary, #ff3355);\n  --sa-block-field-background: var(--editorTheme3-more-field, #ff3355);\n}\n\n.sa-block-color-pen {\n  --sa-block-background-primary: var(--editorTheme3-pen-primary, #0fbd8c);\n  --sa-block-background-secondary: var(--editorTheme3-pen-secondary, #0da57a);\n  --sa-block-background-tertiary: var(--editorTheme3-pen-tertiary, #0b8e69);\n  --sa-block-field-background: var(--editorTheme3-pen-field, #0b8e69);\n}\n\n.sa-block-color-addon-custom-block {\n  --sa-block-background-primary: var(--editorTheme3-addons-primary, #29beb8);\n  --sa-block-background-secondary: var(--editorTheme3-addons-secondary, #3aa8a4);\n  --sa-block-background-tertiary: var(--editorTheme3-addons-tertiary, #3aa8a4);\n  --sa-block-field-background: var(--editorTheme3-addons-field, #3aa8a4);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/find-bar/userstyle.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/find-bar/userstyle.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../node_modules/css-loader!../editor-theme3/compatibility.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-theme3/compatibility.css"), "");

// module
exports.push([module.i, ".sa-find-bar {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  width: 100%;\n  height: 100%;\n  margin-left: 1em;\n}\n.sa-find-bar[hidden] {\n  /* !important to override displayNoneWhileDisabled */\n  display: none !important;\n}\n\n.sa-find-wrapper {\n  overflow: visible;\n  position: relative;\n  height: 2rem;\n  width: 100%;\n  max-width: 16em;\n}\n\n.sa-find-dropdown-out {\n  display: block;\n  top: -6px;\n  z-index: 100;\n  width: 100%;\n  max-width: 16em;\n  position: relative;\n  padding: 4px;\n  border: none;\n  border-radius: 4px;\n  margin-top: 6px;\n}\n\n.sa-find-dropdown-out.visible {\n  position: absolute;\n  width: 16em;\n  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.3);\n  background-color: var(--ui-modal-background);\n  outline: 1px solid var(--ui-black-transparent);\n}\n\n/* We need to modify Scratch styles so that the place where the find bar is injected */\n/* has actually correct size information, which is used to make the find bar not cover up controls */\n[class*=\"gui_tab-list_\"] {\n  width: 100%;\n}\n[class*=\"gui_tab_\"] {\n  flex-grow: 0;\n}\n\n.sa-find-input {\n  width: 100%;\n  box-sizing: border-box !important;\n  /* !important required for extension, because CSS injection method (and hence order) differs from addon */\n  height: 1.5rem;\n\n  /* Change Scratch default styles */\n  border-radius: 0.25rem;\n  font-size: 0.75rem;\n  padding-left: 0.4em;\n}\n\n.sa-find-input:focus {\n  /* Change Scratch default styles */\n  box-shadow: none;\n}\n\n.sa-find-dropdown {\n  display: none;\n  position: relative;\n  padding: 0.2em 0;\n  font-size: 0.75rem;\n  line-height: 1;\n  overflow-y: auto;\n  min-height: 128px;\n  max-height: 65vh;\n  user-select: none;\n  max-width: 100%;\n  margin-top: 6px;\n  border: none;\n}\n\n.sa-find-dropdown-out.visible > .sa-find-dropdown {\n  display: block;\n}\n\n.sa-find-dropdown > li {\n  display: block;\n  padding: 0.5em 0.3em;\n  white-space: nowrap;\n  margin: 0;\n  font-weight: bold;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.sa-find-dropdown > li > b {\n  background-color: #aaffaa;\n  color: black;\n}\n\n/* Drop down items */\n.sa-find-dropdown > li:hover,\n.sa-find-dropdown > li.sel {\n  color: var(--sa-block-text-on-bright-background);\n  cursor: pointer;\n}\n\n.sa-find-dropdown > li::before {\n  content: \"\\25CF   \"; /* ● */\n}\n\n.sa-find-flag {\n  color: #4cbf56;\n}\n/* .sa-find-dropdown added for specificity */\n.sa-find-dropdown > .sa-find-flag:hover,\n.sa-find-dropdown > .sa-find-flag.sel {\n  background-color: #4cbf56;\n  color: white;\n}\n\n.sa-find-dropdown .sa-block-color {\n  color: var(--sa-block-colored-text);\n}\n.sa-find-dropdown .sa-block-color:hover,\n.sa-find-dropdown .sa-block-color.sel {\n  background-color: var(--sa-block-bright-background);\n}\n\n.sa-find-carousel {\n  font-weight: normal;\n  position: absolute;\n  right: 0;\n  white-space: nowrap;\n  background-color: inherit;\n  z-index: 1;\n  padding: 0;\n}\n\n.sa-find-carousel-control {\n  padding: 0 6px;\n}\n\n.sa-find-carousel-control:hover {\n  color: #ffff80;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/folders/style.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/folders/style.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-folders-contextmenu-item {\n  max-width: 250px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n[sa-folders-context-type=\"folder\"] .react-contextmenu > :not(.sa-ctx-menu) {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/middle-click-popup/userstyle.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/middle-click-popup/userstyle.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../node_modules/css-loader!../editor-theme3/compatibility.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-theme3/compatibility.css"), "");

// module
exports.push([module.i, ".sa-mcp-root {\n  display: flex;\n  white-space: nowrap;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\n  position: absolute;\n  min-width: 100px;\n  background-color: var(--ui-modal-background);\n  border-radius: 4px;\n  box-shadow:\n    rgba(0, 0, 0, 0.3) 0 0 3px,\n    rgba(0, 0, 0, 0.2) 0 3px 10px;\n\n  z-index: 999;\n}\n\n.sa-mcp-container {\n  display: flex;\n  flex-flow: column;\n  top: -6px;\n  z-index: 100;\n  position: absolute;\n  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.3);\n  background-color: var(--ui-modal-background);\n  outline: 1px solid var(--ui-black-transparent);\n  border: none;\n  border-radius: 4px;\n}\n\n.sa-mcp-input-wrapper {\n  position: relative;\n  margin: 4px;\n  /* !important required for extension, because CSS injection method (and hence order) differs from addon */\n  box-sizing: border-box !important;\n  height: 1.5rem;\n  min-height: 1.5rem;\n\n  /* Change Scratch default styles */\n  border-radius: 0.25rem;\n  font-size: 0.75rem;\n  padding-left: 0.2rem;\n  padding-right: 0.2rem;\n}\n\n.sa-mcp-input-wrapper:focus {\n  /* Change Scratch default styles */\n  box-shadow: none;\n}\n\n.sa-mcp-input-wrapper[data-error=\"true\"] {\n  border-color: red;\n}\n\n.sa-mcp-input-wrapper > input {\n  position: absolute;\n  border: 0;\n  background-color: transparent;\n  outline: none;\n  width: 100%;\n  height: 100%;\n  line-height: 100%;\n  box-sizing: border-box;\n}\n\n.sa-mcp-input-suggestion {\n  color: hsla(225, 15%, 40%, 0.65);\n}\n\n.sa-mcp-preview-container {\n  flex: auto;\n  overflow-y: scroll;\n}\n\n.sa-mcp-root /* <-- specificity */ .sa-mcp-preview-container {\n  scrollbar-width: none;\n}\n\n.sa-mcp-preview-container::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n\n.sa-mcp-preview-blocks {\n  width: 100%;\n  min-height: 100%;\n  /* https://stackoverflow.com/a/22166728/8448397 */\n  float: left;\n}\n\n.sa-mcp-preview-scrollbar {\n  position: absolute;\n  width: 11px;\n  right: 0;\n  bottom: 0;\n}\n\n.sa-mcp-preview-block-bg {\n  width: 100%;\n  fill: transparent;\n  cursor: grab;\n}\n\n.sa-mcp-preview-block {\n  filter: brightness(95%);\n  cursor: grab;\n}\n\n.sa-mcp-preview-block-selection {\n  filter: brightness(103%);\n}\n\n.sa-mcp-preview-block-bg-selection {\n  fill: #7774;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/onion-skinning/style.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/onion-skinning/style.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-onion-button {\n  position: relative;\n}\n.sa-onion-button:focus-within {\n  background-color: var(--editorDarkMode-primary-transparent35, hsla(260, 60%, 60%, 0.35));\n}\n.sa-onion-image[data-image=\"toggle\"] {\n  filter: var(--filter-icon-white);\n}\n.sa-onion-image[data-image=\"settings\"] {\n  filter: var(--filter-icon-black);\n}\n.sa-onion-button[data-enabled=\"true\"] .sa-onion-image {\n  filter: brightness(0) invert(1);\n}\n.sa-onion-button[data-enabled=\"true\"] {\n  color: white;\n  background-color: var(--looks-secondary);\n}\n\n.sa-onion-group {\n  position: relative;\n  flex-direction: row;\n}\n\n.sa-onion-settings-wrapper {\n  position: absolute;\n  justify-items: center;\n  left: 50%;\n  width: 1.95rem;\n  height: 1.95rem;\n  display: grid;\n}\n\n.sa-onion-settings {\n  position: absolute;\n  bottom: 100%;\n  /* based on the styles for the color dropdown */\n  padding: 4px;\n  border-radius: 4px;\n  border: 1px solid #ddd;\n  border: 1px solid var(--ui-black-transparent);\n  transition-property: bottom, opacity;\n  transition-duration: 500ms;\n  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  opacity: 0;\n  pointer-events: none;\n  background: var(--ui-modal-background);\n  color: var(--ui-text-primary);\n  min-height: 100%;\n  min-width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25em;\n}\n.sa-onion-settings[data-visible=\"true\"] {\n  bottom: calc(100% + 22px);\n  pointer-events: auto;\n  opacity: 1;\n}\n\n.sa-onion-settings-line {\n  display: flex;\n  justify-content: flex-end;\n  align-items: baseline;\n  gap: 0.25em;\n}\n\n.sa-onion-settings-input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  text-align: center;\n  border: 0;\n  background: transparent;\n  -moz-appearance: textfield;\n  border: 0;\n  outline: 0;\n}\n\n.sa-onion-settings-input::-webkit-outer-spin-button,\n.sa-onion-settings-input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.sa-onion-settings-tip {\n  position: absolute;\n  bottom: 0;\n  transform: translateY(100%);\n  right: calc(50% - 7px);\n}\n.sa-onion-settings-polygon {\n  fill: var(--ui-modal-background);\n  stroke: var(--ui-black-transparent);\n}\n\n.sa-onion-settings-label {\n  white-space: nowrap;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/pick-colors-from-stage/style.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/pick-colors-from-stage/style.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-stage-color-picker-picking [class^=\"stage_color-picker-background_\"] {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/reorder-custom-inputs/arrows.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/reorder-custom-inputs/arrows.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blocklyTextShiftArrow {\n  position: absolute;\n  top: -50px;\n  left: 50%;\n  margin-left: -12.5px;\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-devtools/icon--close.svg":
/*!*************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-devtools/icon--close.svg ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3LjQ4IDcuNDgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWNvbi0tYWRkPC90aXRsZT48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIzLjc0IiB5MT0iNi40OCIgeDI9IjMuNzQiIHkyPSIxIi8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMSIgeTE9IjMuNzQiIHgyPSI2LjQ4IiB5Mj0iMy43NCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/folders/folder.svg":
/*!************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/folders/folder.svg ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHdpZHRoPSIyNCI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMCA0SDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjhjMC0xLjEtLjktMi0yLTJoLThsLTItMnoiLz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/decrement.svg":
/*!**********************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/decrement.svg ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggc3R5bGU9ImZpbGw6IzU3NWU3NTtzdHJva2Utd2lkdGg6LjczNDczNiIgZD0iTTMuMjUgMTEuMzU4aDE3LjUwMXYxLjI4NUgzLjI1eiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/increment.svg":
/*!**********************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/increment.svg ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHdpZHRoPSIyNCI+PHBhdGggc3R5bGU9ImZpbGw6IzU3NWU3NTtzdHJva2Utd2lkdGg6LjczNDczNiIgZD0iTTMuMjUgMTEuMzU4aDE3LjUwMXYxLjI4NUgzLjI1eiIvPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDkwKSIgc3R5bGU9ImZpbGw6IzU3NWU3NTtzdHJva2Utd2lkdGg6LjczNDczNiIgZD0iTTMuMjUtMTIuNjQyaDE3LjUwMXYxLjI4NUgzLjI1eiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/settings.svg":
/*!*********************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/settings.svg ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggc3R5bGU9Im9wYWNpdHk6Ljc1O2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgZD0iTTU2IDE2djk2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMi4zNzYgLTIuMzc2KSBzY2FsZSguMjI0NjIpIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6LjU7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBkPSJNNDAgMzJ2NjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjM3NiAtMi4zNzYpIHNjYWxlKC4yMjQ2MikiLz48cGF0aCBzdHlsZT0ib3BhY2l0eTouMjU7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBkPSJNMjQgNDh2MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjM3NiAtMi4zNzYpIHNjYWxlKC4yMjQ2MikiLz48cGF0aCBzdHlsZT0ib3BhY2l0eTouNzU7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBkPSJNNzIgMTZ2OTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjM3NiAtMi4zNzYpIHNjYWxlKC4yMjQ2MikiLz48cGF0aCBzdHlsZT0ib3BhY2l0eTouNTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGQ9Ik04OCAzMnY2NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuMzc2IC0yLjM3Nikgc2NhbGUoLjIyNDYyKSIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5Oi4yNTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGQ9Ik0xMDQgNDh2MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjM3NiAtMi4zNzYpIHNjYWxlKC4yMjQ2MikiLz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/toggle.svg":
/*!*******************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/toggle.svg ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iI2JmYmZiZiIgZD0iTTM5LjYzMi0uNTc2Yy4wNy0uMDQ2LjE4Ny0uMDIzLjIxLjA3bC42MDYgMi40OTJzMS40OSAxLjA5NSAxLjkzMyAxLjg2M2MuNzQ1IDEuMjgxLjc2OCAyLjMzLjc2OCAyLjMzczEuNjU0LjQ4OCAxLjkzMyAxLjgxNmMuMjggMS4zMjctLjc0NSAzLjg0My01LjEyMyA0LjcwNS00LjM3OS44NjEtNy44OTYtLjMyNy05LjU1LTIuOTgyLTEuNjUzLTIuNjU1Ljk1Ni01LjgyMi44MTYtNS42MzZsLS40OS00LjE2OWMtLjAyMy0uMDkzLjA5NC0uMTYzLjE4Ny0uMTE2bDIuODE4IDEuODRzMS4wNDgtLjM5NiAyLjE0My0uNDQzYTcuMDEgNy4wMSAwIDAgMSAxLjc0Ny4wOTN6IiBzdHlsZT0ib3BhY2l0eTouNTttaXgtYmxlbmQtbW9kZTpub3JtYWw7ZmlsbDpub25lO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAxMDI2O3N0cm9rZS13aWR0aDouOTMxNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTQ3LjM2NSA2LjUyOGMtMS4wOTUuODg1LTIuNzcyLjkwOC0yLjc3Mi45MDhtMi40NjkgMS43Yy0xLjQ2Ny4xMTctMi4zNzYtLjMyNi0yLjM3Ni0uMzI2TTI4LjY2MyA2LjQ1OHMyLjAwMy42NTIgMi44MTggMS4zNzRtLjA3LjgxNWMtMS4wMDIuMzk2LTIuNzI1LjE0LTIuNzI1LjE0IiBzdHlsZT0ib3BhY2l0eTouNTttaXgtYmxlbmQtbW9kZTpub3JtYWw7ZmlsbDpub25lO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAxMDI2O3N0cm9rZS13aWR0aDouOTMxNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIvPjxwYXRoIGZpbGw9IiNiZmJmYmYiIGQ9Ik00MS45NjEgMS43NTNjLjA3LS4wNDYuMTg3LS4wMjMuMjEuMDdsLjYwNiAyLjQ5MnMxLjQ5IDEuMDk1IDEuOTMzIDEuODYzYy43NDUgMS4yODEuNzY4IDIuMzMuNzY4IDIuMzNzMS42NTQuNDg4IDEuOTMzIDEuODE2Yy4yOCAxLjMyNy0uNzQ1IDMuODQzLTUuMTIzIDQuNzA1LTQuMzc5Ljg2MS03Ljg5Ni0uMzI3LTkuNTUtMi45ODItMS42NTMtMi42NTUuOTU2LTUuODIyLjgxNi01LjYzNmwtLjQ5LTQuMTY5Yy0uMDIzLS4wOTMuMDk0LS4xNjMuMTg3LS4xMTZsMi44MTggMS44NHMxLjA0OC0uMzk2IDIuMTQzLS40NDNhNy4wMSA3LjAxIDAgMCAxIDEuNzQ3LjA5M3oiIHN0eWxlPSJvcGFjaXR5Oi43NTttaXgtYmxlbmQtbW9kZTpub3JtYWw7ZmlsbDpub25lO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAxMDI2O3N0cm9rZS13aWR0aDouOTMxNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTQ5LjY5NCA4Ljg1N2MtMS4wOTUuODg1LTIuNzcyLjkwOC0yLjc3Mi45MDhtMi40NjkgMS43Yy0xLjQ2Ny4xMTctMi4zNzYtLjMyNi0yLjM3Ni0uMzI2TTMwLjk5MiA4Ljc4N3MyLjAwMy42NTIgMi44MTggMS4zNzRtLjA3LjgxNWMtMS4wMDIuMzk2LTIuNzI1LjE0LTIuNzI1LjE0IiBzdHlsZT0ib3BhY2l0eTouNzU7bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6bm9uZTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwMTAyNjtzdHJva2Utd2lkdGg6LjkzMTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjAiLz48cGF0aCBmaWxsPSIjYmZiZmJmIiBkPSJNNDQuMjkgNC4wODJjLjA3LS4wNDcuMTg2LS4wMjQuMjEuMDdsLjYwNSAyLjQ5MnMxLjQ5IDEuMDk0IDEuOTMzIDEuODYzYy43NDUgMS4yOC43NjkgMi4zMjkuNzY5IDIuMzI5czEuNjUzLjQ4OSAxLjkzMyAxLjgxNmMuMjggMS4zMjgtLjc0NSAzLjg0My01LjEyNCA0LjcwNS00LjM3OC44NjItNy44OTUtLjMyNi05LjU0OS0yLjk4MS0xLjY1My0yLjY1NS45NTUtNS44MjMuODE1LTUuNjM2bC0uNDg5LTQuMTdjLS4wMjMtLjA5Mi4wOTMtLjE2Mi4xODctLjExNmwyLjgxOCAxLjg0czEuMDQ4LS4zOTYgMi4xNDItLjQ0MmE3LjAxIDcuMDEgMCAwIDEgMS43NDcuMDkzeiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbDtmaWxsOiNmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMwMDEwMjY7c3Ryb2tlLXdpZHRoOi45MzE2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIi8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNNTIuMDIyIDExLjE4NWMtMS4wOTQuODg1LTIuNzcxLjkwOC0yLjc3MS45MDhtMi40NjggMS43Yy0xLjQ2Ny4xMTctMi4zNzUtLjMyNS0yLjM3NS0uMzI1TTMzLjMyIDExLjExNXMyLjAwMy42NTIgMi44MTggMS4zNzRtLjA3LjgxNmMtMS4wMDEuMzk1LTIuNzI1LjE0LTIuNzI1LjE0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6bm9uZTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwMTAyNjtzdHJva2Utd2lkdGg6LjkzMTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjAiLz48ZyBzdHlsZT0ib3BhY2l0eTouMTg5ODU0Ij48cGF0aCBkPSJNMS4yNDMgOC41YS42MzcuNjM3IDAgMCAwLS40NSAxLjA4NmwuMy4zYy4yNDItLjM1Mi41NDYtLjY1OC44OTgtLjlsLS4yOTctLjNhLjYzNi42MzYgMCAwIDAtLjQ1LS4xODVaIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6IzAwMTAyNjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6LjE5NjQ5MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAzNDk2IDAgMCAxLjAzNDk2IC4wNCAtMi42NDcpIi8+PHBhdGggZD0iTTE1LjExNCAxOS41MDZhMy41MDEgMy41MDEgMCAxIDEtNy4wMDMgMCAzLjUwMSAzLjUwMSAwIDAgMSA3LjAwMyAwem0tNy4zOTItNy4zMThhMy41IDMuNSAwIDEgMCAuNDA2IDYuOTg1IDMuNSAzLjUgMCAwIDEgMy4xNS0zLjE1IDMuNSAzLjUgMCAwIDAtMy41NTYtMy44MzV6bS0zLjc0Ni0zLjgyYTMuNTAxIDMuNTAxIDAgMSAwIC4zMzYgNi45ODQgMy41MDIgMy41MDIgMCAwIDEgMy4xNDgtMy4xNDggMy41IDMuNSAwIDAgMC0zLjQ4NC0zLjgzNnoiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWw7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojMDAxMDI2O3N0cm9rZS13aWR0aDouOTMyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIHRyYW5zZm9ybT0ibWF0cml4KDEuMDM0OTYgMCAwIDEuMDM0OTYgLjA0IC0yLjY0NykiLz48cGF0aCBkPSJNMTQuNDk3IDIxLjQ5MWMtLjI0My4zNTItLjU1LjY1Ni0uOTAyLjg5OWwzLjA4NCAzLjA4NGEuNjM4LjYzOCAwIDAgMCAuOSAwIC42MzcuNjM3IDAgMCAwIDAtLjl6IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6IzAwMTAyNjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6LjE5NjQ5MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAzNDk2IDAgMCAxLjAzNDk2IC4wNCAtMi42NDcpIi8+PC9nPjxnIHN0eWxlPSJvcGFjaXR5Oi44MDU1MyI+PGcgc3R5bGU9Im9wYWNpdHk6LjU4NTkyOCI+PHBhdGggZD0iTTEuMjQzIDguNWEuNjM3LjYzNyAwIDAgMC0uNDUgMS4wODZsLjMuM2MuMjQyLS4zNTIuNTQ2LS42NTguODk4LS45bC0uMjk3LS4zYS42MzYuNjM2IDAgMCAwLS40NS0uMTg1WiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbDtmaWxsOiMwMDEwMjY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOi4xOTY0OTI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wMzQ5NiAwIDAgMS4wMzQ5NiAyLjc3NSAtNS4xNykiLz48cGF0aCBkPSJNMTUuMTE0IDE5LjUwNmEzLjUwMSAzLjUwMSAwIDEgMS03LjAwMyAwIDMuNTAxIDMuNTAxIDAgMCAxIDcuMDAzIDB6bS03LjM5Mi03LjMxOGEzLjUgMy41IDAgMSAwIC40MDYgNi45ODUgMy41IDMuNSAwIDAgMSAzLjE1LTMuMTUgMy41IDMuNSAwIDAgMC0zLjU1Ni0zLjgzNXptLTMuNzQ2LTMuODJhMy41MDEgMy41MDEgMCAxIDAgLjMzNiA2Ljk4NCAzLjUwMiAzLjUwMiAwIDAgMSAzLjE0OC0zLjE0OCAzLjUgMy41IDAgMCAwLTMuNDg0LTMuODM2eiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbDtmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDEwMjY7c3Ryb2tlLXdpZHRoOi45MzI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wMzQ5NiAwIDAgMS4wMzQ5NiAyLjc3NSAtNS4xNykiLz48cGF0aCBkPSJNMTQuNDk3IDIxLjQ5MWMtLjI0My4zNTItLjU1LjY1Ni0uOTAyLjg5OWwzLjA4NCAzLjA4NGEuNjM4LjYzOCAwIDAgMCAuOSAwIC42MzcuNjM3IDAgMCAwIDAtLjl6IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6IzAwMTAyNjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6LjE5NjQ5MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAzNDk2IDAgMCAxLjAzNDk2IDIuNzc1IC01LjE3KSIvPjwvZz48L2c+PHBhdGggZmlsbD0iI2Q5OWU4MiIgZD0iTTIxLjkwNyAxOS4xM2EuNjM2LjYzNiAwIDAgMS0uNDUtLjE4NUw1LjU3MiAzLjA1OGEuNjM3LjYzNyAwIDAgMSAuOS0uOWwxNS44ODUgMTUuODg2YS42MzcuNjM3IDAgMCAxLS40NSAxLjA4N3oiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWw7ZmlsbDojMDAxMDI2O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDouMTk2NDkyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIHRyYW5zZm9ybT0ibWF0cml4KDEuMDM0OTYgMCAwIDEuMDM0OTYgLjYxNyAtMS4zMykiLz48cGF0aCBmaWxsPSIjZmNiMWUzIiBkPSJNMTIuMjUzIDUuMzRhMy41IDMuNSAwIDEgMS03IDAgMy41IDMuNSAwIDAgMSA3IDB6IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6I2ZlZmVmZDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6IzAwMTAyNjtzdHJva2Utd2lkdGg6LjkzMjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAzNDk2IDAgMCAxLjAzNDk2IC42MTcgLTEuMzMpIi8+PHBhdGggZmlsbD0iI2ZmZDk4MyIgZD0iTTExLjc2OCAxMi41NjZhMy41IDMuNSAwIDEgMSAxLjYxLTYuODEzIDMuNSAzLjUgMCAwIDEtMS42MSA2LjgxM3oiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWw7ZmlsbDojZmVmZWZkO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojMDAxMDI2O3N0cm9rZS13aWR0aDouOTMyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIHRyYW5zZm9ybT0ibWF0cml4KDEuMDM0OTYgMCAwIDEuMDM0OTYgLjYxNyAtMS4zMykiLz48cGF0aCBmaWxsPSIjYTZkMzg4IiBkPSJNMTkuODkyIDEyLjk3N2EzLjUwMSAzLjUwMSAwIDEgMS03LjAwMyAwIDMuNTAxIDMuNTAxIDAgMCAxIDcuMDAzIDB6IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6I2ZlZmVmZDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6IzAwMTAyNjtzdHJva2Utd2lkdGg6LjkzMjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAzNDk2IDAgMCAxLjAzNDk2IC42MTcgLTEuMzMpIi8+PHBhdGggZmlsbD0iI2Q5OWU4MiIgZD0iTTIxLjkwNyAxOS4xM2EuNjM2LjYzNiAwIDAgMS0uNDUtLjE4NWwtMy44OTgtMy45YS42MzYuNjM2IDAgMSAxIC45LS45bDMuODk4IDMuOWEuNjM3LjYzNyAwIDAgMS0uNDUgMS4wODZ6IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6IzAwMTAyNjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6LjE5NjQ5MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAzNDk2IDAgMCAxLjAzNDk2IC42MTcgLTEuMzMpIi8+PC9zdmc+");

/***/ }),

/***/ "./src/addons/addons/bitmap-copy/_runtime_entry.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/bitmap-copy/_runtime_entry.js ***!
  \*********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/bitmap-copy/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/bitmap-copy/userscript.js":
/*!*****************************************************!*\
  !*** ./src/addons/addons/bitmap-copy/userscript.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async _ref => {
  let {
    addon,
    console
  } = _ref;
  if (!addon.tab.redux.state) return console.warn("Redux is not available!");
  addon.tab.redux.initialize();
  addon.tab.redux.addEventListener("statechanged", _ref2 => {
    let {
      detail
    } = _ref2;
    if (addon.self.disabled) return;
    const e = detail;
    if (!e.action || e.action.type !== "scratch-paint/clipboard/SET") return;
    const items = e.next.scratchPaint.clipboard.items;
    if (items.length !== 1) return;
    const firstItem = items[0];
    // TODO vector support
    if (!Array.isArray(firstItem) || firstItem[0] !== "Raster") return console.log("copied element is vector");
    const dataURL = firstItem[1].source;
    addon.tab.copyImage(dataURL).then(() => console.log("Image successfully copied")).catch(e => console.error("Image could not be copied: ".concat(e)));
  });
});

/***/ }),

/***/ "./src/addons/addons/block-cherry-picking/_runtime_entry.js":
/*!******************************************************************!*\
  !*** ./src/addons/addons/block-cherry-picking/_runtime_entry.js ***!
  \******************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/block-cherry-picking/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/block-cherry-picking/userscript.js":
/*!**************************************************************!*\
  !*** ./src/addons/addons/block-cherry-picking/userscript.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_duplicate_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../block-duplicate/module.js */ "./src/addons/addons/block-duplicate/module.js");

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    console
  } = _ref;
  const update = () => {
    _block_duplicate_module_js__WEBPACK_IMPORTED_MODULE_0__["setCherryPicking"](!addon.self.disabled, addon.settings.get("invertDrag"));
  };
  addon.self.addEventListener("disabled", update);
  addon.self.addEventListener("reenabled", update);
  addon.settings.addEventListener("change", update);
  update();
  _block_duplicate_module_js__WEBPACK_IMPORTED_MODULE_0__["load"](addon);
});

/***/ }),

/***/ "./src/addons/addons/block-duplicate/_runtime_entry.js":
/*!*************************************************************!*\
  !*** ./src/addons/addons/block-duplicate/_runtime_entry.js ***!
  \*************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/block-duplicate/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/block-duplicate/module.js":
/*!*****************************************************!*\
  !*** ./src/addons/addons/block-duplicate/module.js ***!
  \*****************************************************/
/*! exports provided: setCherryPicking, setDuplication, load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCherryPicking", function() { return setCherryPicking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDuplication", function() { return setDuplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
let enableCherryPicking = false;
let invertCherryPicking = false;
function setCherryPicking(newEnabled, newInverted) {
  enableCherryPicking = newEnabled;
  // If cherry picking is disabled, also disable invert. Duplicating blocks can still cause
  // this setting to be used.
  invertCherryPicking = newEnabled && newInverted;
}
let enableDuplication = false;
function setDuplication(newEnabled) {
  enableDuplication = newEnabled;
}

// mostRecentEvent_ is sometimes a fake event, so we can't rely on reading its properties.
let ctrlOrMetaPressed = false;
let altPressed = false;
document.addEventListener("mousedown", function (e) {
  ctrlOrMetaPressed = e.ctrlKey || e.metaKey;
  altPressed = e.altKey;
}, {
  capture: true
});
let loaded = false;
async function load(addon) {
  if (loaded) {
    return;
  }
  loaded = true;
  const ScratchBlocks = await addon.tab.traps.getBlockly();

  // https://github.com/scratchfoundation/scratch-blocks/blob/912b8cc728bea8fd91af85078c64fcdbfe21c87a/core/gesture.js#L454
  const originalStartDraggingBlock = ScratchBlocks.Gesture.prototype.startDraggingBlock_;
  ScratchBlocks.Gesture.prototype.startDraggingBlock_ = function () {
    let block = this.targetBlock_;

    // Scratch uses fake mouse events to implement right click > duplicate
    const isRightClickDuplicate = !(this.mostRecentEvent_ instanceof MouseEvent);
    const isDuplicating = enableDuplication && altPressed && !isRightClickDuplicate && !this.flyout_ && !this.shouldDuplicateOnDrag_ && this.targetBlock_.type !== "procedures_definition";
    const isCherryPickingInverted = invertCherryPicking && !isRightClickDuplicate && block.getParent();
    const canCherryPick = enableCherryPicking || isDuplicating;
    const isCherryPicking = canCherryPick && ctrlOrMetaPressed === !isCherryPickingInverted && !block.isShadow();
    if (isDuplicating || isCherryPicking) {
      if (!ScratchBlocks.Events.getGroup()) {
        // Scratch will disable grouping on its own later.
        ScratchBlocks.Events.setGroup(true);
      }
    }
    if (isDuplicating) {
      // Based on https://github.com/scratchfoundation/scratch-blocks/blob/feda366947432b9d82a4f212f43ff6d4ab6f252f/core/scratch_blocks_utils.js#L171
      // Setting this.shouldDuplicateOnDrag_ = true does NOT work because it doesn't call changeObscuredShadowIds
      this.startWorkspace_.setResizesEnabled(false);
      ScratchBlocks.Events.disable();
      let newBlock;
      try {
        const xmlBlock = ScratchBlocks.Xml.blockToDom(block);
        newBlock = ScratchBlocks.Xml.domToBlock(xmlBlock, this.startWorkspace_);
        ScratchBlocks.scratchBlocksUtils.changeObscuredShadowIds(newBlock);
        const xy = block.getRelativeToSurfaceXY();
        newBlock.moveBy(xy.x, xy.y);
      } catch (e) {
        console.error(e);
      }
      ScratchBlocks.Events.enable();
      if (newBlock) {
        block = newBlock;
        this.targetBlock_ = newBlock;
        if (ScratchBlocks.Events.isEnabled()) {
          ScratchBlocks.Events.fire(new ScratchBlocks.Events.BlockCreate(newBlock));
        }
      }
    }
    if (isCherryPicking) {
      if (isRightClickDuplicate || isDuplicating) {
        const nextBlock = block.getNextBlock();
        if (nextBlock) {
          nextBlock.dispose();
        }
      }
      block.unplug(true);
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return originalStartDraggingBlock.call(this, ...args);
  };
}

/***/ }),

/***/ "./src/addons/addons/block-duplicate/userscript.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/block-duplicate/userscript.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module.js */ "./src/addons/addons/block-duplicate/module.js");

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    console
  } = _ref;
  const update = () => {
    _module_js__WEBPACK_IMPORTED_MODULE_0__["setDuplication"](!addon.self.disabled);
  };
  addon.self.addEventListener("disabled", update);
  addon.self.addEventListener("reenabled", update);
  update();
  _module_js__WEBPACK_IMPORTED_MODULE_0__["load"](addon);
});

/***/ }),

/***/ "./src/addons/addons/block-switching/_runtime_entry.js":
/*!*************************************************************!*\
  !*** ./src/addons/addons/block-switching/_runtime_entry.js ***!
  \*************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/block-switching/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/block-switching/userscript.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/block-switching/userscript.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    console,
    msg
  } = _ref;
  const ScratchBlocks = await addon.tab.traps.getBlockly();
  const vm = addon.tab.traps.vm;
  let blockSwitches = {};
  let procedureSwitches = {};
  const noopSwitch = {
    isNoop: true
  };
  const randomColor = () => {
    const num = Math.floor(Math.random() * 256 * 256 * 256);
    return "#".concat(num.toString(16).padStart(6, "0"));
  };
  const buildSwitches = () => {
    blockSwitches = {};
    procedureSwitches = {};
    if (addon.settings.get("motion")) {
      blockSwitches["motion_turnright"] = [noopSwitch, {
        opcode: "motion_turnleft"
      }];
      blockSwitches["motion_turnleft"] = [{
        opcode: "motion_turnright"
      }, noopSwitch];
      blockSwitches["motion_setx"] = [noopSwitch, {
        opcode: "motion_changexby",
        remapInputName: {
          X: "DX"
        }
      }, {
        opcode: "motion_sety",
        remapInputName: {
          X: "Y"
        }
      }, {
        opcode: "motion_changeyby",
        remapInputName: {
          X: "DY"
        }
      }];
      blockSwitches["motion_changexby"] = [{
        opcode: "motion_setx",
        remapInputName: {
          DX: "X"
        }
      }, noopSwitch, {
        opcode: "motion_sety",
        remapInputName: {
          DX: "Y"
        }
      }, {
        opcode: "motion_changeyby",
        remapInputName: {
          DX: "DY"
        }
      }];
      blockSwitches["motion_sety"] = [{
        opcode: "motion_setx",
        remapInputName: {
          Y: "X"
        }
      }, {
        opcode: "motion_changexby",
        remapInputName: {
          Y: "DX"
        }
      }, noopSwitch, {
        opcode: "motion_changeyby",
        remapInputName: {
          Y: "DY"
        }
      }];
      blockSwitches["motion_changeyby"] = [{
        opcode: "motion_setx",
        remapInputName: {
          DY: "X"
        }
      }, {
        opcode: "motion_changexby",
        remapInputName: {
          DY: "DX"
        }
      }, {
        opcode: "motion_sety",
        remapInputName: {
          DY: "Y"
        }
      }, noopSwitch];
      blockSwitches["motion_xposition"] = [noopSwitch, {
        opcode: "motion_yposition"
      }];
      blockSwitches["motion_yposition"] = [{
        opcode: "motion_xposition"
      }, noopSwitch];
    }
    if (addon.settings.get("looks")) {
      blockSwitches["looks_seteffectto"] = [noopSwitch, {
        opcode: "looks_changeeffectby",
        remapInputName: {
          VALUE: "CHANGE"
        }
      }];
      blockSwitches["looks_changeeffectby"] = [{
        opcode: "looks_seteffectto",
        remapInputName: {
          CHANGE: "VALUE"
        }
      }, noopSwitch];
      blockSwitches["looks_setsizeto"] = [noopSwitch, {
        opcode: "looks_changesizeby",
        remapInputName: {
          SIZE: "CHANGE"
        }
      }];
      blockSwitches["looks_changesizeby"] = [{
        opcode: "looks_setsizeto",
        remapInputName: {
          CHANGE: "SIZE"
        }
      }, noopSwitch];
      blockSwitches["looks_costumenumbername"] = [noopSwitch, {
        opcode: "looks_backdropnumbername"
      }];
      blockSwitches["looks_backdropnumbername"] = [{
        opcode: "looks_costumenumbername"
      }, noopSwitch];
      blockSwitches["looks_show"] = [noopSwitch, {
        opcode: "looks_hide"
      }];
      blockSwitches["looks_hide"] = [{
        opcode: "looks_show"
      }, noopSwitch];
      blockSwitches["looks_nextcostume"] = [noopSwitch, {
        opcode: "looks_nextbackdrop"
      }];
      blockSwitches["looks_nextbackdrop"] = [{
        opcode: "looks_nextcostume"
      }, noopSwitch];
      blockSwitches["looks_say"] = [noopSwitch, {
        opcode: "looks_sayforsecs",
        createInputs: {
          SECS: {
            shadowType: "math_number",
            value: "2"
          }
        }
      }, {
        opcode: "looks_think"
      }, {
        opcode: "looks_thinkforsecs",
        createInputs: {
          SECS: {
            shadowType: "math_number",
            value: "2"
          }
        }
      }];
      blockSwitches["looks_think"] = [{
        opcode: "looks_say"
      }, {
        opcode: "looks_sayforsecs",
        createInputs: {
          SECS: {
            shadowType: "math_number",
            value: "2"
          }
        }
      }, noopSwitch, {
        opcode: "looks_thinkforsecs",
        createInputs: {
          SECS: {
            shadowType: "math_number",
            value: "2"
          }
        }
      }];
      blockSwitches["looks_sayforsecs"] = [{
        opcode: "looks_say",
        splitInputs: ["SECS"]
      }, {
        opcode: "looks_think",
        splitInputs: ["SECS"]
      }, noopSwitch, {
        opcode: "looks_thinkforsecs"
      }];
      blockSwitches["looks_thinkforsecs"] = [{
        opcode: "looks_say",
        splitInputs: ["SECS"]
      }, {
        opcode: "looks_think",
        splitInputs: ["SECS"]
      }, {
        opcode: "looks_sayforsecs"
      }, noopSwitch];
      blockSwitches["looks_switchbackdropto"] = [noopSwitch, {
        opcode: "looks_switchbackdroptoandwait"
      }];
      blockSwitches["looks_switchbackdroptoandwait"] = [{
        opcode: "looks_switchbackdropto"
      }, noopSwitch];
      blockSwitches["looks_gotofrontback"] = [noopSwitch, {
        opcode: "looks_goforwardbackwardlayers",
        remapInputName: {
          FRONT_BACK: "FORWARD_BACKWARD"
        },
        mapFieldValues: {
          FRONT_BACK: {
            front: "forward",
            back: "backward"
          }
        },
        createInputs: {
          NUM: {
            shadowType: "math_integer",
            value: "1"
          }
        }
      }];
      blockSwitches["looks_goforwardbackwardlayers"] = [{
        opcode: "looks_gotofrontback",
        splitInputs: ["NUM"],
        remapInputName: {
          FORWARD_BACKWARD: "FRONT_BACK"
        },
        mapFieldValues: {
          FORWARD_BACKWARD: {
            forward: "front",
            backward: "back"
          }
        }
      }, noopSwitch];
    }
    if (addon.settings.get("sound")) {
      blockSwitches["sound_play"] = [noopSwitch, {
        opcode: "sound_playuntildone"
      }];
      blockSwitches["sound_playuntildone"] = [{
        opcode: "sound_play"
      }, noopSwitch];
      blockSwitches["sound_seteffectto"] = [noopSwitch, {
        opcode: "sound_changeeffectby"
      }];
      blockSwitches["sound_changeeffectby"] = [{
        opcode: "sound_seteffectto"
      }, noopSwitch];
      blockSwitches["sound_setvolumeto"] = [noopSwitch, {
        opcode: "sound_changevolumeby"
      }];
      blockSwitches["sound_changevolumeby"] = [{
        opcode: "sound_setvolumeto"
      }, noopSwitch];
    }
    if (addon.settings.get("event")) {
      blockSwitches["event_broadcast"] = [noopSwitch, {
        opcode: "event_broadcastandwait"
      }];
      blockSwitches["event_broadcastandwait"] = [{
        opcode: "event_broadcast"
      }, noopSwitch];
    }
    if (addon.settings.get("control")) {
      blockSwitches["control_if"] = [noopSwitch, {
        opcode: "control_if_else"
      }];
      blockSwitches["control_if_else"] = [{
        opcode: "control_if",
        splitInputs: ["SUBSTACK2"]
      }, noopSwitch];
      blockSwitches["control_repeat_until"] = [noopSwitch, {
        opcode: "control_wait_until",
        splitInputs: ["SUBSTACK"]
      }, {
        opcode: "control_forever",
        splitInputs: ["CONDITION"]
      }];
      blockSwitches["control_forever"] = [{
        opcode: "control_repeat_until"
      }, noopSwitch];
      blockSwitches["control_wait_until"] = [{
        opcode: "control_repeat_until"
      }, noopSwitch];
    }
    if (addon.settings.get("operator")) {
      blockSwitches["operator_equals"] = [{
        opcode: "operator_gt"
      }, noopSwitch, {
        opcode: "operator_lt"
      }];
      blockSwitches["operator_gt"] = [noopSwitch, {
        opcode: "operator_equals"
      }, {
        opcode: "operator_lt"
      }];
      blockSwitches["operator_lt"] = [{
        opcode: "operator_gt"
      }, {
        opcode: "operator_equals"
      }, noopSwitch];
      blockSwitches["operator_add"] = [noopSwitch, {
        opcode: "operator_subtract"
      }, {
        opcode: "operator_multiply"
      }, {
        opcode: "operator_divide"
      }, {
        opcode: "operator_mod"
      }];
      blockSwitches["operator_subtract"] = [{
        opcode: "operator_add"
      }, noopSwitch, {
        opcode: "operator_multiply"
      }, {
        opcode: "operator_divide"
      }, {
        opcode: "operator_mod"
      }];
      blockSwitches["operator_multiply"] = [{
        opcode: "operator_add"
      }, {
        opcode: "operator_subtract"
      }, noopSwitch, {
        opcode: "operator_divide"
      }, {
        opcode: "operator_mod"
      }];
      blockSwitches["operator_divide"] = [{
        opcode: "operator_add"
      }, {
        opcode: "operator_subtract"
      }, {
        opcode: "operator_multiply"
      }, noopSwitch, {
        opcode: "operator_mod"
      }];
      blockSwitches["operator_mod"] = [{
        opcode: "operator_add"
      }, {
        opcode: "operator_subtract"
      }, {
        opcode: "operator_multiply"
      }, {
        opcode: "operator_divide"
      }, noopSwitch];
      blockSwitches["operator_and"] = [noopSwitch, {
        opcode: "operator_or"
      }];
      blockSwitches["operator_or"] = [{
        opcode: "operator_and"
      }, noopSwitch];
    }
    if (addon.settings.get("sensing")) {
      blockSwitches["sensing_mousex"] = [noopSwitch, {
        opcode: "sensing_mousey"
      }];
      blockSwitches["sensing_mousey"] = [{
        opcode: "sensing_mousex"
      }, noopSwitch];
      blockSwitches["sensing_touchingcolor"] = [noopSwitch, {
        opcode: "sensing_coloristouchingcolor",
        createInputs: {
          COLOR2: {
            shadowType: "colour_picker",
            value: randomColor
          }
        }
      }];
      blockSwitches["sensing_coloristouchingcolor"] = [{
        opcode: "sensing_touchingcolor",
        splitInputs: ["COLOR2"]
      }, noopSwitch];
    }
    if (addon.settings.get("data")) {
      blockSwitches["data_setvariableto"] = [noopSwitch, {
        opcode: "data_changevariableby",
        remapShadowType: {
          VALUE: "math_number"
        }
      }];
      blockSwitches["data_changevariableby"] = [{
        opcode: "data_setvariableto",
        remapShadowType: {
          VALUE: "text"
        }
      }, noopSwitch];
      blockSwitches["data_showvariable"] = [noopSwitch, {
        opcode: "data_hidevariable"
      }];
      blockSwitches["data_hidevariable"] = [{
        opcode: "data_showvariable"
      }, noopSwitch];
      blockSwitches["data_showlist"] = [noopSwitch, {
        opcode: "data_hidelist"
      }];
      blockSwitches["data_hidelist"] = [{
        opcode: "data_showlist"
      }, noopSwitch];
      blockSwitches["data_replaceitemoflist"] = [noopSwitch, {
        opcode: "data_insertatlist"
      }];
      blockSwitches["data_insertatlist"] = [{
        opcode: "data_replaceitemoflist"
      }, noopSwitch];
      blockSwitches["data_deleteoflist"] = [noopSwitch, {
        opcode: "data_deletealloflist",
        splitInputs: ["INDEX"]
      }];
      blockSwitches["data_deletealloflist"] = [{
        opcode: "data_deleteoflist",
        createInputs: {
          INDEX: {
            shadowType: "math_integer",
            value: "1"
          }
        }
      }, noopSwitch];
    }
    if (addon.settings.get("json")) {
      blockSwitches["json_array_in_front_of"] = [noopSwitch, {
        opcode: "json_array_behind"
      }];
      blockSwitches["json_array_behind"] = [{
        opcode: "json_array_in_front_of"
      }, noopSwitch];
      blockSwitches["json_array_at"] = [noopSwitch, {
        opcode: "json_array_replace"
      }];
      blockSwitches["json_array_replace"] = [{
        opcode: "json_array_at"
      }, noopSwitch];
    }
    if (addon.settings.get("extension")) {
      blockSwitches["pen_penDown"] = [noopSwitch, {
        opcode: "pen_penUp"
      }];
      blockSwitches["pen_penUp"] = [{
        opcode: "pen_penDown"
      }, noopSwitch];
      blockSwitches["pen_setPenColorParamTo"] = [noopSwitch, {
        opcode: "pen_changePenColorParamBy"
      }];
      blockSwitches["pen_changePenColorParamBy"] = [{
        opcode: "pen_setPenColorParamTo"
      }, noopSwitch];
      blockSwitches["pen_setPenHueToNumber"] = [noopSwitch, {
        opcode: "pen_changePenHueBy"
      }];
      blockSwitches["pen_changePenHueBy"] = [{
        opcode: "pen_setPenHueToNumber"
      }, noopSwitch];
      blockSwitches["pen_setPenShadeToNumber"] = [noopSwitch, {
        opcode: "pen_changePenShadeBy"
      }];
      blockSwitches["pen_changePenShadeBy"] = [{
        opcode: "pen_setPenShadeToNumber"
      }, noopSwitch];
      blockSwitches["pen_setPenSizeTo"] = [noopSwitch, {
        opcode: "pen_changePenSizeBy"
      }];
      blockSwitches["pen_changePenSizeBy"] = [{
        opcode: "pen_setPenSizeTo"
      }, noopSwitch];
      blockSwitches["music_setTempo"] = [noopSwitch, {
        opcode: "music_changeTempo"
      }];
      blockSwitches["music_changeTempo"] = [{
        opcode: "music_setTempo"
      }, noopSwitch];
    }
    if (addon.settings.get("sa")) {
      const logProc = "\u200B\u200Blog\u200B\u200B %s";
      const warnProc = "\u200B\u200Bwarn\u200B\u200B %s";
      const errorProc = "\u200B\u200Berror\u200B\u200B %s";
      const logMessage = msg("debugger_log");
      const warnMessage = msg("debugger_warn");
      const errorMessage = msg("debugger_error");
      const logSwitch = {
        mutate: {
          proccode: logProc
        },
        msg: logMessage
      };
      const warnSwitch = {
        mutate: {
          proccode: warnProc
        },
        msg: warnMessage
      };
      const errorSwitch = {
        mutate: {
          proccode: errorProc
        },
        msg: errorMessage
      };
      procedureSwitches[logProc] = [{
        msg: logMessage,
        isNoop: true
      }, warnSwitch, errorSwitch];
      procedureSwitches[warnProc] = [logSwitch, {
        msg: warnMessage,
        isNoop: true
      }, errorSwitch];
      procedureSwitches[errorProc] = [logSwitch, warnSwitch, {
        msg: errorMessage,
        isNoop: true
      }];
    }

    // Switching for these is implemented by Scratch. We only define them here to optionally add a border.
    // Because we don't implement the switching ourselves, this is not controlled by the data category option.
    blockSwitches["data_variable"] = [];
    blockSwitches["data_listcontents"] = [];
  };
  buildSwitches();
  addon.settings.addEventListener("change", buildSwitches);

  /**
   * @param {*} workspace
   * @param {Element} xmlBlock
   */
  const pasteBlockXML = (workspace, xmlBlock) => {
    // Similar to https://github.com/scratchfoundation/scratch-blocks/blob/7575c9a0f2c267676569c4b102b76d77f35d9fd6/core/workspace_svg.js#L1020
    // but without the collision checking.
    const block = ScratchBlocks.Xml.domToBlock(xmlBlock, workspace);
    const x = +xmlBlock.getAttribute("x");
    const y = +xmlBlock.getAttribute("y");
    // Don't need to handle RTL here
    block.moveBy(x, y);
    return block;
  };

  /**
   * @param {string} shadowType The type of shadow eg. "math_number"
   * @returns {string} The name of the shadow's inner field that contains the user-visible value
   */
  const getShadowFieldName = shadowType => {
    // This is non-comprehensive.
    if (shadowType === "text") {
      return "TEXT";
    }
    if (shadowType === "colour_picker") {
      return "COLOUR";
    }
    return "NUM";
  };

  /**
   * @template T
   * @param {T|()=>T} value
   * @returns {T}
   */
  const callIfFunction = value => {
    if (typeof value === "function") {
      return value();
    }
    return value;
  };
  const menuCallbackFactory = (block, opcodeData) => () => {
    if (opcodeData.isNoop) {
      return;
    }
    if (opcodeData.fieldValue) {
      block.setFieldValue(opcodeData.fieldValue, "VALUE");
      return;
    }
    try {
      ScratchBlocks.Events.setGroup(true);
      const workspace = block.workspace;
      const blocksToBringToForeground = [];
      // Split inputs before we clone the block.
      if (opcodeData.splitInputs) {
        for (const inputName of opcodeData.splitInputs) {
          const input = block.getInput(inputName);
          if (!input) {
            continue;
          }
          const connection = input.connection;
          if (!connection) {
            continue;
          }
          if (connection.isConnected()) {
            const targetBlock = connection.targetBlock();
            if (targetBlock.isShadow()) {
              // Deleting shadows is handled later.
            } else {
              connection.disconnect();
              blocksToBringToForeground.push(targetBlock);
            }
          }
        }
      }

      // Make a copy of the block with the proper type set.
      // It doesn't seem to be possible to change a Block's type after it's created, so we'll just make a new block instead.
      const xml = ScratchBlocks.Xml.blockToDom(block);
      // blockToDomWithXY's handling of RTL is strange, so we encode the position ourselves.
      const position = block.getRelativeToSurfaceXY();
      xml.setAttribute("x", position.x);
      xml.setAttribute("y", position.y);
      if (opcodeData.opcode) {
        xml.setAttribute("type", opcodeData.opcode);
      }
      const parentBlock = block.getParent();
      let parentConnection;
      let blockConnectionType;
      if (parentBlock) {
        // If the block has a parent, find the parent -> child connection that will be reattached later.
        const parentConnections = parentBlock.getConnections_();
        parentConnection = parentConnections.find(c => c.targetConnection && c.targetConnection.sourceBlock_ === block);
        // There's two types of connections from child -> parent. We need to figure out which one is used.
        const blockConnections = block.getConnections_();
        const blockToParentConnection = blockConnections.find(c => c.targetConnection && c.targetConnection.sourceBlock_ === parentBlock);
        blockConnectionType = blockToParentConnection.type;
      }

      // Array.from creates a clone of the children list. This is important as we may remove
      // children as we iterate.
      for (const child of Array.from(xml.children)) {
        const oldName = child.getAttribute("name");

        // Any inputs that were supposed to be split that were not should be removed.
        // (eg. shadow inputs)
        if (opcodeData.splitInputs && opcodeData.splitInputs.includes(oldName)) {
          xml.removeChild(child);
          continue;
        }
        const newName = opcodeData.remapInputName && opcodeData.remapInputName[oldName];
        if (newName) {
          child.setAttribute("name", newName);
        }
        const newShadowType = opcodeData.remapShadowType && opcodeData.remapShadowType[oldName];
        if (newShadowType) {
          const valueNode = child.firstChild;
          const fieldNode = valueNode.firstChild;
          valueNode.setAttribute("type", newShadowType);
          fieldNode.setAttribute("name", getShadowFieldName(newShadowType));
        }
        const fieldValueMap = opcodeData.mapFieldValues && opcodeData.mapFieldValues[oldName];
        if (fieldValueMap && child.tagName === "FIELD") {
          const oldValue = child.innerText;
          const newValue = fieldValueMap[oldValue];
          if (typeof newValue === "string") {
            child.innerText = newValue;
          }
        }
      }
      if (opcodeData.mutate) {
        const mutation = xml.querySelector("mutation");
        for (const [key, value] of Object.entries(opcodeData.mutate)) {
          mutation.setAttribute(key, value);
        }
      }
      if (opcodeData.createInputs) {
        for (const [inputName, inputData] of Object.entries(opcodeData.createInputs)) {
          const valueElement = document.createElement("value");
          valueElement.setAttribute("name", inputName);
          const shadowElement = document.createElement("shadow");
          shadowElement.setAttribute("type", inputData.shadowType);
          const shadowFieldElement = document.createElement("field");
          shadowFieldElement.setAttribute("name", getShadowFieldName(inputData.shadowType));
          shadowFieldElement.innerText = callIfFunction(inputData.value);
          shadowElement.appendChild(shadowFieldElement);
          valueElement.appendChild(shadowElement);
          xml.appendChild(valueElement);
        }
      }

      // Remove the old block and insert the new one.
      block.dispose();
      const newBlock = pasteBlockXML(workspace, xml);
      if (parentConnection) {
        // Search for the same type of connection on the new block as on the old block.
        const newBlockConnections = newBlock.getConnections_();
        const newBlockConnection = newBlockConnections.find(c => c.type === blockConnectionType);
        newBlockConnection.connect(parentConnection);
      }
      for (const otherBlock of blocksToBringToForeground) {
        // By re-appending the element, we move it to the end, which will make it display
        // on top.
        const svgRoot = otherBlock.getSvgRoot();
        svgRoot.parentNode.appendChild(svgRoot);
      }
    } finally {
      ScratchBlocks.Events.setGroup(false);
    }
  };
  const uniques = array => [...new Set(array)];
  addon.tab.createBlockContextMenu((items, block) => {
    if (!addon.self.disabled) {
      const type = block.type;
      let switches = blockSwitches[block.type] || [];
      const customArgsMode = addon.settings.get("customargs") ? addon.settings.get("customargsmode") : "off";
      if (customArgsMode !== "off" && ["argument_reporter_boolean", "argument_reporter_string_number"].includes(type) &&
      // if the arg is a shadow, it's in a procedures_prototype so we don't want it to be switchable
      !block.isShadow()) {
        const customBlocks = getCustomBlocks();
        if (customArgsMode === "all") {
          switch (type) {
            case "argument_reporter_string_number":
              switches = Object.values(customBlocks).map(cb => cb.stringArgs).flat(1);
              break;
            case "argument_reporter_boolean":
              switches = Object.values(customBlocks).map(cb => cb.boolArgs).flat(1);
              break;
          }
        } else if (customArgsMode === "defOnly") {
          const root = block.getRootBlock();
          if (root.type !== "procedures_definition") return items;
          const customBlockObj = customBlocks[root.getChildren(true)[0].getProcCode()];
          switch (type) {
            case "argument_reporter_string_number":
              switches = customBlockObj.stringArgs;
              break;
            case "argument_reporter_boolean":
              switches = customBlockObj.boolArgs;
              break;
          }
        }
        const currentValue = block.getFieldValue("VALUE");
        switches = uniques(switches).map(i => ({
          isNoop: i === currentValue,
          fieldValue: i,
          msg: i
        }));
      }
      if (block.type === "procedures_call") {
        const proccode = block.getProcCode();
        if (procedureSwitches[proccode]) {
          switches = procedureSwitches[proccode];
        }
      }
      if (!addon.settings.get("noop")) {
        switches = switches.filter(i => !i.isNoop);
      }
      switches.forEach((opcodeData, i) => {
        const makeSpaceItemIndex = items.findIndex(obj => obj._isDevtoolsFirstItem);
        const insertBeforeIndex = makeSpaceItemIndex !== -1 ?
        // If "make space" button exists, add own items before it
        makeSpaceItemIndex :
        // If there's no such button, insert at end
        items.length;
        const text = opcodeData.msg ? opcodeData.msg : opcodeData.opcode ? msg(opcodeData.opcode) : msg(block.type);
        items.splice(insertBeforeIndex, 0, {
          enabled: true,
          text,
          callback: menuCallbackFactory(block, opcodeData),
          separator: i === 0
        });
      });
      if (block.type === "data_variable" || block.type === "data_listcontents") {
        // Add top border to first variable (if it exists)
        const delBlockIndex = items.findIndex(item => item.text === ScratchBlocks.Msg.DELETE_BLOCK);
        // firstVariableItem might be undefined, a variable to switch to,
        // or an item added by editor-devtools (or any addon before this one)
        const firstVariableItem = items[delBlockIndex + 1];
        if (firstVariableItem) firstVariableItem.separator = true;
      }
    }
    return items;
  }, {
    blocks: true
  });

  // https://github.com/scratchfoundation/scratch-blocks/blob/abbfe93136fef57fdfb9a077198b0bc64726f012/blocks_vertical/procedures.js#L207-L215
  // Returns a list like ["%s", "%d"]
  const parseArguments = code => code.split(/(?=[^\\]%[nbs])/g).map(i => i.trim()).filter(i => i.charAt(0) === "%").map(i => i.substring(0, 2));
  const getCustomBlocks = () => {
    const customBlocks = {};
    const target = vm.editingTarget;
    Object.values(target.blocks._blocks).filter(block => block.opcode === "procedures_prototype").forEach(block => {
      const procCode = block.mutation.proccode;
      const argumentNames = JSON.parse(block.mutation.argumentnames);
      // argumentdefaults is unreliable, so we have to parse the procedure code to determine argument types
      const parsedArguments = parseArguments(procCode);
      const stringArgs = [];
      const boolArgs = [];
      for (let i = 0; i < argumentNames.length; i++) {
        if (parsedArguments[i] === "%b") {
          boolArgs.push(argumentNames[i]);
        } else {
          stringArgs.push(argumentNames[i]);
        }
      }
      customBlocks[procCode] = {
        stringArgs,
        boolArgs
      };
    });
    return customBlocks;
  };
});

/***/ }),

/***/ "./src/addons/addons/color-picker/_runtime_entry.js":
/*!**********************************************************!*\
  !*** ./src/addons/addons/color-picker/_runtime_entry.js ***!
  \**********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/color-picker/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/color-picker/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/color-picker/code-editor.js":
/*!*******************************************************!*\
  !*** ./src/addons/addons/color-picker/code-editor.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libraries_common_cs_normalize_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libraries/common/cs/normalize-color.js */ "./src/addons/libraries/common/cs/normalize-color.js");
/* harmony import */ var _libraries_common_cs_rate_limiter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libraries/common/cs/rate-limiter.js */ "./src/addons/libraries/common/cs/rate-limiter.js");


/* harmony default export */ __webpack_exports__["default"] = (async _ref => {
  let {
    addon,
    console,
    msg
  } = _ref;
  // 250-ms rate limit
  const rateLimiter = new _libraries_common_cs_rate_limiter_js__WEBPACK_IMPORTED_MODULE_1__["default"](250);
  const setColor = (hex, element) => {
    hex = Object(_libraries_common_cs_normalize_color_js__WEBPACK_IMPORTED_MODULE_0__["normalizeHex"])(hex);
    if (!addon.tab.redux.state || !addon.tab.redux.state.scratchGui) return;
    // The only way to reliably set color is to invoke eye dropper via click()
    // then faking that the eye dropper reported the value.
    const onEyeDropperClosed = _ref2 => {
      let {
        detail
      } = _ref2;
      if (detail.action.type !== "scratch-gui/color-picker/DEACTIVATE_COLOR_PICKER") return;
      addon.tab.redux.removeEventListener("statechanged", onEyeDropperClosed);
      setTimeout(() => {
        document.body.classList.remove("sa-hide-eye-dropper-background");
      }, 50);
    };
    const onEyeDropperOpened = _ref3 => {
      let {
        detail
      } = _ref3;
      if (detail.action.type !== "scratch-gui/color-picker/ACTIVATE_COLOR_PICKER") return;
      addon.tab.redux.removeEventListener("statechanged", onEyeDropperOpened);
      addon.tab.redux.addEventListener("statechanged", onEyeDropperClosed);
      setTimeout(() => {
        addon.tab.redux.dispatch({
          type: "scratch-gui/color-picker/DEACTIVATE_COLOR_PICKER",
          color: hex
        });
      }, 50);
    };
    addon.tab.redux.addEventListener("statechanged", onEyeDropperOpened);
    document.body.classList.add("sa-hide-eye-dropper-background");
    element.click();
  };
  const addColorPicker = editor => {
    const element = document.querySelector("button.scratchEyedropper");
    rateLimiter.abort(false);
    addon.tab.redux.initialize();
    const defaultColor = editor.getValue();
    const saColorPicker = Object.assign(document.createElement("div"), {
      className: "sa-color-picker sa-color-picker-code"
    });
    addon.tab.displayNoneWhileDisabled(saColorPicker, {
      display: "flex"
    });
    const saColorPickerColor = Object.assign(document.createElement("input"), {
      className: "sa-color-picker-color sa-color-picker-code-color",
      type: "color",
      value: defaultColor || "#000000"
    });
    const saColorPickerText = Object.assign(document.createElement("input"), {
      className: addon.tab.scratchClass("input_input-form", {
        others: "sa-color-picker-text sa-color-picker-code-text"
      }),
      type: "text",
      pattern: "^#?([0-9a-fA-F]{3}){1,2}$",
      placeholder: msg("hex"),
      value: defaultColor || ""
    });
    saColorPickerColor.addEventListener("input", () => rateLimiter.limit(() => setColor(saColorPickerText.value = saColorPickerColor.value, element)));
    saColorPickerText.addEventListener("change", () => {
      const {
        value
      } = saColorPickerText;
      if (!Object(_libraries_common_cs_normalize_color_js__WEBPACK_IMPORTED_MODULE_0__["getHexRegex"])().test(value)) return;
      setColor(saColorPickerColor.value = Object(_libraries_common_cs_normalize_color_js__WEBPACK_IMPORTED_MODULE_0__["normalizeHex"])(value), element);
    });
    saColorPicker.appendChild(saColorPickerColor);
    saColorPicker.appendChild(saColorPickerText);
    element.parentElement.insertBefore(saColorPicker, element);
  };
  const ScratchBlocks = await addon.tab.traps.getBlockly();
  const originalShowEditor = ScratchBlocks.FieldColourSlider.prototype.showEditor_;
  ScratchBlocks.FieldColourSlider.prototype.showEditor_ = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const r = originalShowEditor.call(this, ...args);
    addColorPicker(this);
    return r;
  };
  const originalCallbackFactory = ScratchBlocks.FieldColourSlider.prototype.sliderCallbackFactory_;
  ScratchBlocks.FieldColourSlider.prototype.sliderCallbackFactory_ = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    const f = originalCallbackFactory.call(this, ...args);
    return event => {
      const r = f(event);
      const div = ScratchBlocks.DropDownDiv.getContentDiv();
      if (div) {
        const saColorPickerColor = div.querySelector(".sa-color-picker-color.sa-color-picker-code-color");
        const saColorPickerText = div.querySelector(".sa-color-picker-text.sa-color-picker-code-text");
        if (!saColorPickerColor || !saColorPickerText) return r;
        const color = this.getValue();
        saColorPickerColor.value = color || "#000000";
        saColorPickerText.value = color || "";
      }
      return r;
    };
  };
});

/***/ }),

/***/ "./src/addons/addons/color-picker/userscript.js":
/*!******************************************************!*\
  !*** ./src/addons/addons/color-picker/userscript.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _code_editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-editor.js */ "./src/addons/addons/color-picker/code-editor.js");

/* harmony default export */ __webpack_exports__["default"] = (async api => {
  Object(_code_editor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(api);
});

/***/ }),

/***/ "./src/addons/addons/editor-comment-previews/_runtime_entry.js":
/*!*********************************************************************!*\
  !*** ./src/addons/addons/editor-comment-previews/_runtime_entry.js ***!
  \*********************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/editor-comment-previews/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-comment-previews/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/editor-comment-previews/userscript.js":
/*!*****************************************************************!*\
  !*** ./src/addons/addons/editor-comment-previews/userscript.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    console
  } = _ref;
  const vm = addon.tab.traps.vm;
  const updateStyles = () => {
    previewInner.classList.toggle("sa-comment-preview-delay", addon.settings.get("delay") !== "none");
    previewInner.classList.toggle("sa-comment-preview-reduce-transparency", addon.settings.get("reduce-transparency"));
    previewInner.classList.toggle("sa-comment-preview-fade", !addon.settings.get("reduce-animation"));
  };
  const afterDelay = cb => {
    if (!previewInner.classList.contains("sa-comment-preview-hidden")) {
      // If not hidden, updating immediately is preferred
      cb();
      return;
    }
    const delay = addon.settings.get("delay");
    if (delay === "long") return setTimeout(cb, 500);
    if (delay === "short") return setTimeout(cb, 300);
    cb();
  };
  let hoveredElement = null;
  let showTimeout = null;
  let mouseX = 0;
  let mouseY = 0;
  let doNotShowUntilMoveMouse = false;
  const previewOuter = document.createElement("div");
  previewOuter.classList.add("sa-comment-preview-outer");
  const previewInner = document.createElement("div");
  previewInner.classList.add("sa-comment-preview-inner");
  previewInner.classList.add("sa-comment-preview-hidden");
  updateStyles();
  addon.settings.addEventListener("change", updateStyles);
  addon.tab.displayNoneWhileDisabled(previewOuter);
  previewOuter.appendChild(previewInner);
  document.body.appendChild(previewOuter);
  const getBlock = id => vm.editingTarget.blocks.getBlock(id) || vm.runtime.flyoutBlocks.getBlock(id);
  const getComment = block => block && block.comment && vm.editingTarget.comments[block.comment];
  const getProcedureDefinitionBlock = procCode => {
    const procedurePrototype = Object.values(vm.editingTarget.blocks._blocks).find(i => i.opcode === "procedures_prototype" && i.mutation.proccode === procCode);
    if (procedurePrototype) {
      // Usually `parent` will exist but sometimes it doesn't
      if (procedurePrototype.parent) {
        return getBlock(procedurePrototype.parent);
      }
      const id = procedurePrototype.id;
      return Object.values(vm.editingTarget.blocks._blocks).find(i => i.opcode === "procedures_definition" && i.inputs.custom_block && i.inputs.custom_block.block === id);
    }
    return null;
  };
  const setText = text => {
    previewInner.innerText = text;
    previewInner.classList.remove("sa-comment-preview-hidden");
    updateMousePosition();
  };
  const updateMousePosition = () => {
    previewOuter.style.transform = "translate(".concat(mouseX + 8, "px, ").concat(mouseY + 8, "px)");
  };
  const hidePreview = () => {
    if (hoveredElement) {
      hoveredElement = null;
      previewInner.classList.add("sa-comment-preview-hidden");
    }
  };
  document.addEventListener("mouseover", e => {
    if (addon.self.disabled) {
      return;
    }
    clearTimeout(showTimeout);
    if (doNotShowUntilMoveMouse) {
      return;
    }
    const el = e.target.closest(".blocklyBubbleCanvas > g, .blocklyBlockCanvas .blocklyDraggable[data-id]");
    if (el === hoveredElement) {
      // Nothing to do.
      return;
    }
    if (!el) {
      hidePreview();
      return;
    }
    let text = null;
    if (addon.settings.get("hover-view") && e.target.closest(".blocklyBubbleCanvas > g") &&
    // Hovering over the thin line that connects comments to blocks should never show a preview
    !e.target.closest("line")) {
      const collapsedText = el.querySelector("text.scratchCommentText");
      if (collapsedText.getAttribute("display") !== "none") {
        const textarea = el.querySelector("textarea");
        text = textarea.value;
      }
    } else if (e.target.closest(".blocklyBlockCanvas .blocklyDraggable[data-id]")) {
      const id = el.dataset.id;
      const block = getBlock(id);
      const comment = getComment(block);
      if (addon.settings.get("hover-view-block") && comment) {
        text = comment.text;
      } else if (block && block.opcode === "procedures_call" && addon.settings.get("hover-view-procedure")) {
        const procCode = block.mutation.proccode;
        const procedureDefinitionBlock = getProcedureDefinitionBlock(procCode);
        const procedureComment = getComment(procedureDefinitionBlock);
        if (procedureComment) {
          text = procedureComment.text;
        }
      }
    }
    if (text !== null && text.trim() !== "") {
      showTimeout = afterDelay(() => {
        hoveredElement = el;
        setText(text);
      });
    } else {
      hidePreview();
    }
  });
  document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    doNotShowUntilMoveMouse = false;
    if (addon.settings.get("follow-mouse") && !previewInner.classList.contains("sa-comment-preview-hidden")) {
      updateMousePosition();
    }
  });
  document.addEventListener("mousedown", () => {
    hidePreview();
    doNotShowUntilMoveMouse = true;
  }, {
    capture: true
  });
});

/***/ }),

/***/ "./src/addons/addons/editor-devtools/DevTools.js":
/*!*******************************************************!*\
  !*** ./src/addons/addons/editor-devtools/DevTools.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DevTools; });
/* harmony import */ var _DomHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomHelpers.js */ "./src/addons/addons/editor-devtools/DomHelpers.js");
/* harmony import */ var _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UndoGroup.js */ "./src/addons/addons/editor-devtools/UndoGroup.js");
// import ShowBroadcast from "./show-broadcast.js";


class DevTools {
  constructor(addon, msg, m) {
    this.addon = addon;
    this.msg = msg;
    this.m = m;
    /**
     * @type {VirtualMachine}
     */
    this.domHelpers = new _DomHelpers_js__WEBPACK_IMPORTED_MODULE_0__["default"](addon);
    this.codeTab = null;
    this.costTab = null;
    this.costTabBody = null;
    this.selVarID = null;
    this.canShare = false;
    this.mouseXY = {
      x: 0,
      y: 0
    };
  }
  async init() {
    this.addContextMenus();
    while (true) {
      const root = await this.addon.tab.waitForElement("ul[class*=gui_tab-list_]", {
        markAsSeen: true,
        reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"],
        reduxCondition: state => !state.scratchGui.mode.isPlayerOnly
      });
      this.initInner(root);
    }
  }
  async addContextMenus() {
    const blockly = await this.addon.tab.traps.getBlockly();
    const oldCleanUpFunc = blockly.WorkspaceSvg.prototype.cleanUp;
    const self = this;
    blockly.WorkspaceSvg.prototype.cleanUp = function () {
      if (self.addon.settings.get("enableCleanUpPlus")) {
        self.doCleanUp();
      } else {
        oldCleanUpFunc.call(this);
      }
    };
    let originalMsg = blockly.Msg.CLEAN_UP;
    if (this.addon.settings.get("enableCleanUpPlus")) blockly.Msg.CLEAN_UP = this.m("clean-plus");
    this.addon.settings.addEventListener("change", () => {
      if (this.addon.settings.get("enableCleanUpPlus")) blockly.Msg.CLEAN_UP = this.m("clean-plus");else blockly.Msg.CLEAN_UP = originalMsg;
    });
    this.addon.tab.createBlockContextMenu((items, block) => {
      items.push({
        enabled: blockly.clipboardXml_,
        text: this.m("paste"),
        separator: true,
        _isDevtoolsFirstItem: true,
        callback: () => {
          let ids = this.getTopBlockIDs();
          document.dispatchEvent(new KeyboardEvent("keydown", {
            keyCode: 86,
            ctrlKey: true,
            griff: true
          }));
          setTimeout(() => {
            this.beginDragOfNewBlocksNotInIDs(ids);
          }, 10);
        }
      });
      return items;
    }, {
      workspace: true
    });
    this.addon.tab.createBlockContextMenu((items, block) => {
      items.push({
        enabled: true,
        text: this.m("make-space"),
        _isDevtoolsFirstItem: true,
        callback: () => {
          this.doCleanUp(block);
        },
        separator: true
      }, {
        enabled: true,
        text: this.m("copy-all"),
        callback: () => {
          this.eventCopyClick(block);
        },
        separator: true
      }, {
        enabled: true,
        text: this.m("copy-block"),
        callback: () => {
          this.eventCopyClick(block, 1);
        }
      }, {
        enabled: true,
        text: this.m("cut-block"),
        callback: () => {
          this.eventCopyClick(block, 2);
        }
      });
      // const BROADCAST_BLOCKS = ["event_whenbroadcastreceived", "event_broadcast", "event_broadcastandwait"];
      // if (BROADCAST_BLOCKS.includes(block.type)) {
      //   // Show Broadcast
      //   const broadcastId = this.showBroadcastSingleton.getAssociatedBroadcastId(block.id);
      //   if (broadcastId) {
      //     ["Senders", "Receivers"].forEach((showKey, i) => {
      //       items.push({
      //         enabled: true,
      //         text: this.msg(`show-${showKey}`.toLowerCase()),
      //         callback: () => {
      //           this.showBroadcastSingleton[`show${showKey}`](broadcastId);
      //         },
      //         separator: i == 0,
      //       });
      //     });
      //   }
      // }
      return items;
    }, {
      blocks: true
    });
    this.addon.tab.createBlockContextMenu((items, block) => {
      if (block.getCategory() === "data" || block.getCategory() === "data-lists") {
        this.selVarID = block.getVars()[0];
        items.push({
          enabled: true,
          text: this.m("swap", {
            var: block.getCategory() === "data" ? this.m("variables") : this.m("lists")
          }),
          callback: async () => {
            let wksp = this.getWorkspace();
            let v = wksp.getVariableById(this.selVarID);
            // prompt() returns Promise in desktop app
            let varName = await window.prompt(this.msg("replace", {
              name: v.name
            }));
            if (varName) {
              this.doReplaceVariable(this.selVarID, varName, v.type);
            }
          },
          separator: true
        });
      }
      return items;
    }, {
      blocks: true,
      flyout: true
    });
  }
  getWorkspace() {
    return Blockly.getMainWorkspace();
  }
  isCostumeEditor() {
    return this.costTab.className.indexOf("gui_is-selected") >= 0;
  }

  /**
   * A nicely ordered version of the top blocks
   * @returns {[Blockly.Block]}
   */
  getTopBlocks() {
    let result = this.getOrderedTopBlockColumns();
    let columns = result.cols;
    /**
     * @type {[[Blockly.Block]]}
     */
    let topBlocks = [];
    for (const col of columns) {
      topBlocks = topBlocks.concat(col.blocks);
    }
    return topBlocks;
  }

  /**
   * A much nicer way of laying out the blocks into columns
   */
  doCleanUp(block) {
    let workspace = this.getWorkspace();
    let makeSpaceForBlock = block && block.getRootBlock();
    _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].startUndoGroup(workspace);
    let result = this.getOrderedTopBlockColumns(true);
    let columns = result.cols;
    let orphanCount = result.orphans.blocks.length;
    if (orphanCount > 0 && !block) {
      let message = this.msg("orphaned", {
        count: orphanCount
      });
      if (confirm(message)) {
        for (const block of result.orphans.blocks) {
          block.dispose();
        }
      } else {
        columns.unshift(result.orphans);
      }
    }
    let cursorX = 48;
    let maxWidths = result.maxWidths;
    for (const column of columns) {
      let cursorY = 64;
      let maxWidth = 0;
      for (const block of column.blocks) {
        let extraWidth = block === makeSpaceForBlock ? 380 : 0;
        let extraHeight = block === makeSpaceForBlock ? 480 : 72;
        let xy = block.getRelativeToSurfaceXY();
        if (cursorX - xy.x !== 0 || cursorY - xy.y !== 0) {
          block.moveBy(cursorX - xy.x, cursorY - xy.y);
        }
        let heightWidth = block.getHeightWidth();
        cursorY += heightWidth.height + extraHeight;
        let maxWidthWithComments = maxWidths[block.id] || 0;
        maxWidth = Math.max(maxWidth, Math.max(heightWidth.width + extraWidth, maxWidthWithComments));
      }
      cursorX += maxWidth + 96;
    }
    let topComments = workspace.getTopComments();
    for (const comment of topComments) {
      if (comment.setVisible) {
        comment.setVisible(false);
        comment.needsAutoPositioning_ = true;
        comment.setVisible(true);
      }
    }
    setTimeout(() => {
      // Locate unused local variables...
      let workspace = this.getWorkspace();
      let map = workspace.getVariableMap();
      let vars = map.getVariablesOfType("");
      let unusedLocals = [];
      for (const row of vars) {
        if (row.isLocal) {
          let usages = map.getVariableUsesById(row.getId());
          if (!usages || usages.length === 0) {
            unusedLocals.push(row);
          }
        }
      }
      if (unusedLocals.length > 0) {
        const unusedCount = unusedLocals.length;
        let message = this.msg("unused-var", {
          count: unusedCount
        });
        for (let i = 0; i < unusedLocals.length; i++) {
          let orphan = unusedLocals[i];
          if (i > 0) {
            message += ", ";
          }
          message += orphan.name;
        }
        if (confirm(message)) {
          for (const orphan of unusedLocals) {
            workspace.deleteVariableById(orphan.getId());
          }
        }
      }

      // Locate unused local lists...
      let lists = map.getVariablesOfType("list");
      let unusedLists = [];
      for (const row of lists) {
        if (row.isLocal) {
          let usages = map.getVariableUsesById(row.getId());
          if (!usages || usages.length === 0) {
            unusedLists.push(row);
          }
        }
      }
      if (unusedLists.length > 0) {
        const unusedCount = unusedLists.length;
        let message = this.msg("unused-list", {
          count: unusedCount
        });
        for (let i = 0; i < unusedLists.length; i++) {
          let orphan = unusedLists[i];
          if (i > 0) {
            message += ", ";
          }
          message += orphan.name;
        }
        if (confirm(message)) {
          for (const orphan of unusedLists) {
            workspace.deleteVariableById(orphan.getId());
          }
        }
      }
      _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].endUndoGroup(workspace);
    }, 100);
  }

  /**
   * Badly Orphaned - might want to delete these!
   * @param topBlock
   * @returns {boolean}
   */
  isBlockAnOrphan(topBlock) {
    return !!topBlock.outputConnection;
  }

  /**
   * Split the top blocks into ordered columns
   * @param separateOrphans true to keep all orphans separate
   * @returns {{orphans: {blocks: [Block], x: number, count: number}, cols: [Col]}}
   */
  getOrderedTopBlockColumns(separateOrphans) {
    let w = this.getWorkspace();
    let topBlocks = w.getTopBlocks();
    let maxWidths = {};
    if (separateOrphans) {
      let topComments = w.getTopComments();

      // todo: tie comments to blocks... find widths and width of block stack row...
      for (const comment of topComments) {
        // comment.autoPosition_();
        // Hiding and showing repositions the comment right next to it's block - nice!
        if (comment.setVisible) {
          comment.setVisible(false);
          comment.needsAutoPositioning_ = true;
          comment.setVisible(true);

          // let bb = comment.block_.svgPath_.getBBox();
          let right = comment.getBoundingRectangle().bottomRight.x;

          // Get top block for stack...
          let root = comment.block_.getRootBlock();
          let left = root.getBoundingRectangle().topLeft.x;
          maxWidths[root.id] = Math.max(right - left, maxWidths[root.id] || 0);
        }
      }
    }

    // Default scratch ordering is horrid... Lets try something more clever.

    /**
     * @type {Col[]}
     */
    let cols = [];
    const TOLERANCE = 256;
    let orphans = {
      x: -999999,
      count: 0,
      blocks: []
    };
    for (const topBlock of topBlocks) {
      // let r = b.getBoundingRectangle();
      let position = topBlock.getRelativeToSurfaceXY();
      /**
       * @type {Col}
       */
      let bestCol = null;
      let bestError = TOLERANCE;
      if (separateOrphans && this.isBlockAnOrphan(topBlock)) {
        orphans.blocks.push(topBlock);
        continue;
      }

      // Find best columns
      for (const col of cols) {
        let err = Math.abs(position.x - col.x);
        if (err < bestError) {
          bestError = err;
          bestCol = col;
        }
      }
      if (bestCol) {
        // We found a column that we fitted into
        bestCol.x = (bestCol.x * bestCol.count + position.x) / ++bestCol.count; // re-average the columns as more items get added...
        bestCol.blocks.push(topBlock);
      } else {
        // Create a new column
        cols.push(new Col(position.x, 1, [topBlock]));
      }
    }

    // if (orphans.blocks.length > 0) {
    //     cols.push(orphans);
    // }

    // Sort columns, then blocks inside the columns
    cols.sort((a, b) => a.x - b.x);
    for (const col of cols) {
      col.blocks.sort((a, b) => a.getRelativeToSurfaceXY().y - b.getRelativeToSurfaceXY().y);
    }
    return {
      cols: cols,
      orphans: orphans,
      maxWidths: maxWidths
    };
  }

  /**
   * Find all the uses of a named variable.
   * @param {string} id ID of the variable to find.
   * @return {!Array.<!Blockly.Block>} Array of block usages.
   */
  getVariableUsesById(id) {
    let uses = [];
    let topBlocks = this.getTopBlocks(true); // todo: Confirm this was the right getTopBlocks?
    for (const topBlock of topBlocks) {
      /** @type {!Array<!Blockly.Block>} */
      let kids = topBlock.getDescendants();
      for (const block of kids) {
        /** @type {!Array<!Blockly.VariableModel>} */
        let blockVariables = block.getVarModels();
        if (blockVariables) {
          for (const blockVar of blockVariables) {
            if (blockVar.getId() === id) {
              uses.push(block);
            }
          }
        }
      }
    }
    return uses;
  }

  /**
   * Quick and dirty replace all instances of one variable / list with another variable / list
   * @param varId original variable name
   * @param newVarName new variable name
   * @param type type of variable ("" = variable, anything else is a list?
   */
  doReplaceVariable(varId, newVarName, type) {
    let wksp = this.getWorkspace();
    let v = wksp.getVariable(newVarName, type);
    if (!v) {
      alert(this.msg("var-not-exist"));
      return;
    }
    let newVId = v.getId();
    _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].startUndoGroup(wksp);
    let blocks = this.getVariableUsesById(varId);
    for (const block of blocks) {
      try {
        if (type === "") {
          block.getField("VARIABLE").setValue(newVId);
        } else {
          block.getField("LIST").setValue(newVId);
        }
      } catch (e) {
        // ignore
      }
    }
    _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].endUndoGroup(wksp);
  }

  /*
    function doInjectScripts(codeString) {
      let w = getWorkspace();
      let xml = new XML(); // document.implementation.createDocument(null, "xml");
      let x = xml.xmlDoc.firstChild;
       let tree = math.parse(codeString);
      console.log(tree);
       const binaryOperatorTypes = {
        add: "operator_add",
        subtract: "operator_subtract",
        this.multiply: "operator_multiply",
        divide: "operator_divide",
      };
       const BLOCK_TYPE = {
        number: "math_number",
        text: "text",
      };
       function translateMathToXml(x, tree, shadowType) {
        let xShadowField = null;
        if (shadowType) {
          let xShadow = xml.newXml(x, "shadow", { type: shadowType });
          if (shadowType === BLOCK_TYPE.number) {
            xShadowField = xml.newXml(xShadow, "field", { name: "NUM" });
          } else if (shadowType === BLOCK_TYPE.text) {
            xShadowField = xml.newXml(xShadow, "field", { name: "TEXT" });
          }
        }
         if (!tree || !tree.type) {
          return;
        }
         if (tree.type === "OperatorNode") {
          let operatorType = binaryOperatorTypes[tree.fn];
          if (operatorType) {
            let xOp = newXml(x, "block", { type: operatorType });
            translateMathToXml(xml.newXml(xOp, "value", { name: "NUM1" }), tree.args[0], BLOCK_TYPE.number);
            translateMathToXml(xml.newXml(xOp, "value", { name: "NUM2" }), tree.args[1], BLOCK_TYPE.number);
            return;
          }
           return;
        }
         if (tree.type === "ConstantNode") {
          // number or text in quotes
          if (xShadowField) {
            xml.setAttr(xShadowField, { text: tree.value });
          }
          return;
        }
         if (tree.type === "SymbolNode") {
          // variable
          let xVar = xml.newXml(x, "block", { type: "data_variable" });
          xml.newXml(xVar, "field", { name: "VARIABLE", text: tree.name });
          return;
        }
         if (tree.type === "FunctionNode") {
          // Method Call
          if (tree.fn.name === "join") {
            let xOp = newXml(x, "block", { type: "operator_join" });
            translateMathToXml(xml.newXml(xOp, "value", { name: "STRING1" }), tree.args[0], BLOCK_TYPE.text);
            translateMathToXml(xml.newXml(xOp, "value", { name: "STRING2" }), tree.args[1], BLOCK_TYPE.text);
            return;
          }
        }
      }
       translateMathToXml(x, tree);
      console.log(x);
       let ids = Blockly.Xml.domToWorkspace(x, w);
      console.log(ids);
    }
     */
  /*
    function clickInject(e) {
      let codeString = window.prompt("Griffpatch: Enter an expression (i.e. a+2*3)");
      if (codeString) {
        doInjectScripts(codeString);
      }
      e.preventDefault();
      return false;
    }
    */

  /**
   * Returns a Set of the top blocks in this workspace / sprite
   * @returns {Set<any>} Set of top blocks
   */
  getTopBlockIDs() {
    let wksp = this.getWorkspace();
    let topBlocks = wksp.getTopBlocks();
    let ids = new Set();
    for (const block of topBlocks) {
      ids.add(block.id);
    }
    return ids;
  }

  /**
   * Initiates a drag event for all block stacks except those in the set of ids.
   * But why? - Because we know all the ids of the existing stacks before we paste / duplicate - so we can find the
   * new stack by excluding all the known ones.
   * @param ids Set of previously known ids
   */
  beginDragOfNewBlocksNotInIDs(ids) {
    if (!this.addon.settings.get("enablePasteBlocksAtMouse")) {
      return;
    }
    let wksp = this.getWorkspace();
    let topBlocks = wksp.getTopBlocks();
    for (const block of topBlocks) {
      if (!ids.has(block.id)) {
        // console.log("I found a new block!!! - " + block.id);
        // todo: move the block to the mouse pointer?
        let mouseXYClone = {
          x: this.mouseXY.x,
          y: this.mouseXY.y
        };
        block.setIntersects(true); // fixes offscreen block pasting in TurboWarp
        this.domHelpers.triggerDragAndDrop(block.svgPath_, null, mouseXYClone);
      }
    }
  }
  updateMousePosition(e) {
    this.mouseXY.x = e.clientX;
    this.mouseXY.y = e.clientY;
  }
  eventMouseMove(e) {
    this.updateMousePosition(e);
  }
  eventKeyDown(e) {
    const switchCostume = up => {
      // todo: select previous costume
      let selected = this.costTabBody.querySelector("div[class*='sprite-selector-item_is-selected']");
      let node = up ? selected.parentNode.previousSibling : selected.parentNode.nextSibling;
      if (node) {
        let wrapper = node.closest("div[class*=gui_flex-wrapper]");
        node.querySelector("div[class^='sprite-selector-item_sprite-name']").click();
        node.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "start"
        });
        wrapper.scrollTop = 0;
      }
    };
    if (document.URL.indexOf("editor") <= 0) {
      return;
    }
    let ctrlKey = e.ctrlKey || e.metaKey;
    if (e.key === "ArrowLeft" && ctrlKey) {
      // Ctrl + Left Arrow Key
      if (document.activeElement.tagName === "INPUT") {
        return;
      }
      if (this.isCostumeEditor()) {
        switchCostume(true);
        e.cancelBubble = true;
        e.preventDefault();
        return true;
      }
    }
    if (e.key === "ArrowRight" && ctrlKey) {
      // Ctrl + Right Arrow Key
      if (document.activeElement.tagName === "INPUT") {
        return;
      }
      if (this.isCostumeEditor()) {
        switchCostume(false);
        e.cancelBubble = true;
        e.preventDefault();
        return true;
      }
    }
    if (e.keyCode === 86 && ctrlKey && !e.griff) {
      // Ctrl + V
      // Set a timeout so we can take control of the paste after the event
      let ids = this.getTopBlockIDs();
      setTimeout(() => {
        this.beginDragOfNewBlocksNotInIDs(ids);
      }, 10);
    }

    // if (e.keyCode === 220 && (!document.activeElement || document.activeElement.tagName === 'INPUT')) {
    //
    // }
  }
  eventCopyClick(block, blockOnly) {
    let wksp = this.getWorkspace();
    if (block) {
      block.select();
      let next = blockOnly ? block.getNextBlock() : null;
      if (next) {
        next.unplug(false); // setParent(null);
      }

      // separate child temporarily
      document.dispatchEvent(new KeyboardEvent("keydown", {
        keyCode: 67,
        ctrlKey: true
      }));
      if (next || blockOnly === 2) {
        setTimeout(() => {
          if (next) {
            wksp.undo(); // undo the unplug above...
          }
          if (blockOnly === 2) {
            _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].startUndoGroup(wksp);
            block.dispose(true);
            _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].endUndoGroup(wksp);
          }
        }, 0);
      }
    }
  }
  eventMouseDown(e) {
    this.updateMousePosition(e);
  }
  eventMouseUp(e) {
    this.updateMousePosition(e);
  }
  initInner(root) {
    var _this = this;
    let guiTabs = root.childNodes;
    if (this.codeTab && guiTabs[0] !== this.codeTab) {
      // We have been CHANGED!!! - Happens when going to project page, and then back inside again!!!
      this.domHelpers.unbindAllEvents();
    }
    this.codeTab = guiTabs[0];
    this.costTab = guiTabs[1];
    this.costTabBody = document.querySelector("div[aria-labelledby=" + this.costTab.id + "]");
    this.domHelpers.bindOnce(document, "keydown", function () {
      return _this.eventKeyDown(...arguments);
    }, true);
    this.domHelpers.bindOnce(document, "mousemove", function () {
      return _this.eventMouseMove(...arguments);
    }, true);
    this.domHelpers.bindOnce(document, "mousedown", function () {
      return _this.eventMouseDown(...arguments);
    }, true); // true to capture all mouse downs 'before' the dom events handle them
    this.domHelpers.bindOnce(document, "mouseup", function () {
      return _this.eventMouseUp(...arguments);
    }, true);
  }
}
class Col {
  /**
   * @param x {Number} x position (for ordering)
   * @param count {Number}
   * @param blocks {[Block]}
   */
  constructor(x, count, blocks) {
    /**
     * x position (for ordering)
     * @type {Number}
     */
    this.x = x;
    /**
     * @type {Number}
     */
    this.count = count;
    /**
     * @type {[Blockly.Block]}
     */
    this.blocks = blocks;
  }
}

/***/ }),

/***/ "./src/addons/addons/editor-devtools/DomHelpers.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/editor-devtools/DomHelpers.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DomHelpers; });
class DomHelpers {
  constructor(addon) {
    this.addon = addon;
    this.vm = addon.tab.traps.vm;
    /**
     * @type {eventDetails[]}
     */
    this.events = [];
  }

  /**
   * Simulate a drag and drop programmatically through javascript
   * @param selectorDrag
   * @param selectorDrop
   * @param mouseXY
   * @param [shiftKey=false]
   * @returns {boolean}
   */
  triggerDragAndDrop(selectorDrag, selectorDrop, mouseXY, shiftKey) {
    // function for triggering mouse events
    shiftKey = shiftKey || false;
    let fireMouseEvent = function fireMouseEvent(type, elem, centerX, centerY) {
      let evt = document.createEvent("MouseEvents");
      evt.initMouseEvent(type, true, true, window, 1, 1, 1, centerX, centerY, shiftKey, false, false, false, 0, elem);
      elem.dispatchEvent(evt);
    };

    // fetch target elements
    let elemDrag = selectorDrag; // document.querySelector(selectorDrag);
    let elemDrop = selectorDrop; // document.querySelector(selectorDrop);
    if (!elemDrag /* || !elemDrop*/) {
      return false;
    }

    // calculate positions
    let pos = elemDrag.getBoundingClientRect();
    let center1X = Math.floor((pos.left + pos.right) / 2);
    let center1Y = Math.floor((pos.top + pos.bottom) / 2);

    // mouse over dragged element and mousedown
    fireMouseEvent("mouseover", elemDrag, center1X, center1Y);
    fireMouseEvent("mousedown", elemDrag, center1X, center1Y);

    // start dragging process over to drop target
    fireMouseEvent("dragstart", elemDrag, center1X, center1Y);
    fireMouseEvent("drag", elemDrag, center1X, center1Y);
    fireMouseEvent("mousemove", elemDrag, center1X, center1Y);
    if (!elemDrop) {
      if (mouseXY) {
        // console.log(mouseXY);
        let center2X = mouseXY.x;
        let center2Y = mouseXY.y;
        fireMouseEvent("drag", elemDrag, center2X, center2Y);
        fireMouseEvent("mousemove", elemDrag, center2X, center2Y);
      }
      return false;
    }
    pos = elemDrop.getBoundingClientRect();
    let center2X = Math.floor((pos.left + pos.right) / 2);
    let center2Y = Math.floor((pos.top + pos.bottom) / 2);
    fireMouseEvent("drag", elemDrag, center2X, center2Y);
    fireMouseEvent("mousemove", elemDrop, center2X, center2Y);

    // trigger dragging process on top of drop target
    fireMouseEvent("mouseenter", elemDrop, center2X, center2Y);
    fireMouseEvent("dragenter", elemDrop, center2X, center2Y);
    fireMouseEvent("mouseover", elemDrop, center2X, center2Y);
    fireMouseEvent("dragover", elemDrop, center2X, center2Y);

    // release dragged element on top of drop target
    fireMouseEvent("drop", elemDrop, center2X, center2Y);
    fireMouseEvent("dragend", elemDrag, center2X, center2Y);
    fireMouseEvent("mouseup", elemDrag, center2X, center2Y);
    return true;
  }
  bindOnce(dom, event, func, capture) {
    capture = !!capture;
    dom.removeEventListener(event, func, capture);
    dom.addEventListener(event, func, capture);
    this.events.push(new eventDetails(dom, event, func, capture));
  }
  unbindAllEvents() {
    for (const event of this.events) {
      event.dom.removeEventListener(event.event, event.func, event.capture);
    }
    this.events = [];
  }
}

/**
 * A record of an event
 */
class eventDetails {
  constructor(dom, event, func, capture) {
    this.dom = dom;
    this.event = event;
    this.func = func;
    this.capture = capture;
  }
}

/***/ }),

/***/ "./src/addons/addons/editor-devtools/UndoGroup.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/editor-devtools/UndoGroup.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UndoGroup; });
/**
 * This class is dedicated to maintaining the Undo stack of Blockly
 * It allows us to initiate an undo group such that all subsequent operations are recorded as a single
 * undoable transaction.
 */
class UndoGroup {
  /**
   * Start an Undo group - begin recording
   * @param workspace the workspace
   */
  static startUndoGroup(workspace) {
    const undoStack = workspace.undoStack_;
    if (undoStack.length) {
      undoStack[undoStack.length - 1]._devtoolsLastUndo = true;
    }
  }

  /**
   * End an Undo group - stops recording
   * @param workspace the workspace
   */
  static endUndoGroup(workspace) {
    const undoStack = workspace.undoStack_;
    // Events (responsible for undoStack updates) are delayed with a setTimeout(f, 0)
    // https://github.com/scratchfoundation/scratch-blocks/blob/f159a1779e5391b502d374fb2fdd0cb5ca43d6a2/core/events.js#L182
    setTimeout(() => {
      const group = generateUID();
      for (let i = undoStack.length - 1; i >= 0 && !undoStack[i]._devtoolsLastUndo; i--) {
        undoStack[i].group = group;
      }
    }, 0);
  }
}

/**
 * https://github.com/scratchfoundation/scratch-blocks/blob/f159a1779e5391b502d374fb2fdd0cb5ca43d6a2/core/events.js#L182
 * @returns {string}
 * @private
 */
function generateUID() {
  const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%()*+,-./:;=?@[]^_`{|}~";
  let result = "";
  for (let i = 0; i < 20; i++) {
    result += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
  }
  return result;
}

/***/ }),

/***/ "./src/addons/addons/editor-devtools/_runtime_entry.js":
/*!*************************************************************!*\
  !*** ./src/addons/addons/editor-devtools/_runtime_entry.js ***!
  \*************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/editor-devtools/userscript.js");
/* harmony import */ var _url_loader_icon_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url-loader!./icon--close.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-devtools/icon--close.svg");
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "icon--close.svg": _url_loader_icon_close_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
};

/***/ }),

/***/ "./src/addons/addons/editor-devtools/userscript.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/editor-devtools/userscript.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DevTools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DevTools.js */ "./src/addons/addons/editor-devtools/DevTools.js");

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    console,
    msg,
    safeMsg: m
  } = _ref;
  const devTools = new _DevTools_js__WEBPACK_IMPORTED_MODULE_0__["default"](addon, msg, m);
  devTools.init();
});

/***/ }),

/***/ "./src/addons/addons/editor-searchable-dropdowns/_runtime_entry.js":
/*!*************************************************************************!*\
  !*** ./src/addons/addons/editor-searchable-dropdowns/_runtime_entry.js ***!
  \*************************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/editor-searchable-dropdowns/userscript.js");
/* harmony import */ var _css_loader_userscript_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userscript.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-searchable-dropdowns/userscript.css");
/* harmony import */ var _css_loader_userscript_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userscript_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userscript.css": _css_loader_userscript_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/editor-searchable-dropdowns/userscript.js":
/*!*********************************************************************!*\
  !*** ./src/addons/addons/editor-searchable-dropdowns/userscript.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    console,
    msg
  } = _ref;
  const Blockly = await addon.tab.traps.getBlockly();
  const vm = addon.tab.traps.vm;
  const SCRATCH_ITEMS_TO_HIDE = ["RENAME_VARIABLE_ID", "DELETE_VARIABLE_ID", "NEW_BROADCAST_MESSAGE_ID",
  // From rename-broadcasts addon
  "RENAME_BROADCAST_MESSAGE_ID"];
  const canUseAsGlobalVariableName = (name, type) => {
    return !vm.runtime.getAllVarNamesOfType(type).includes(name);
  };
  const canUseAsLocalVariableName = (name, type) => {
    return !vm.editingTarget.lookupVariableByNameAndType(name, type);
  };
  const ADDON_ITEMS = {
    createGlobalVariable: {
      enabled: name => canUseAsGlobalVariableName(name, ""),
      createVariable: (workspace, name) => workspace.createVariable(name)
    },
    createLocalVariable: {
      enabled: name => canUseAsLocalVariableName(name, ""),
      createVariable: (workspace, name) => workspace.createVariable(name, "", null, true)
    },
    createGlobalList: {
      enabled: name => canUseAsGlobalVariableName(name, "list"),
      createVariable: (workspace, name) => workspace.createVariable(name, "list")
    },
    createLocalList: {
      enabled: name => canUseAsLocalVariableName(name, "list"),
      createVariable: (workspace, name) => workspace.createVariable(name, "list", null, true)
    },
    createBroadcast: {
      enabled: name => canUseAsGlobalVariableName(name, "broadcast_msg"),
      createVariable: (workspace, name) => workspace.createVariable(name, "broadcast_msg")
    }
  };
  let blocklyDropDownContent = null;
  let blocklyDropdownMenu = null;
  let searchBar = null;
  // Contains DOM and addon state
  let items = [];
  let searchedItems = [];
  // Tracks internal Scratch state
  let currentDropdownOptions = [];
  let resultOfLastGetOptions = [];
  const oldDropDownDivShow = Blockly.DropDownDiv.show;
  Blockly.DropDownDiv.show = function () {
    blocklyDropdownMenu = document.querySelector(".blocklyDropdownMenu");
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (!blocklyDropdownMenu) {
      return oldDropDownDivShow.call(this, ...args);
    }
    blocklyDropdownMenu.focus = () => {}; // no-op focus() so it can't steal it from the search bar

    searchBar = document.createElement("input");
    addon.tab.displayNoneWhileDisabled(searchBar, {
      display: "flex"
    });
    searchBar.type = "text";
    searchBar.addEventListener("input", updateSearch);
    searchBar.addEventListener("keydown", handleKeyDownEvent);
    searchBar.classList.add("u-dropdown-searchbar");
    blocklyDropdownMenu.insertBefore(searchBar, blocklyDropdownMenu.firstChild);
    items = Array.from(blocklyDropdownMenu.children).filter(child => child.tagName !== "INPUT").map(element => ({
      element,
      text: element.textContent
    }));
    currentDropdownOptions = resultOfLastGetOptions;
    updateSearch();

    // Call the original show method after adding everything so that it can perform the correct size calculations
    const ret = oldDropDownDivShow.call(this, ...args);

    // Lock the size of the dropdown
    blocklyDropDownContent = Blockly.DropDownDiv.getContentDiv();
    blocklyDropDownContent.style.width = getComputedStyle(blocklyDropDownContent).width;
    blocklyDropDownContent.style.height = getComputedStyle(blocklyDropDownContent).height;

    // This is really strange, but if you don't reinsert the search bar into the DOM then focus() doesn't work
    blocklyDropdownMenu.insertBefore(searchBar, blocklyDropdownMenu.firstChild);
    searchBar.focus();
    return ret;
  };
  const oldDropDownDivClearContent = Blockly.DropDownDiv.clearContent;
  Blockly.DropDownDiv.clearContent = function () {
    oldDropDownDivClearContent.call(this);
    items = [];
    searchedItems = [];
    Blockly.DropDownDiv.content_.style.height = "";
  };
  const oldFieldDropdownGetOptions = Blockly.FieldDropdown.prototype.getOptions;
  Blockly.FieldDropdown.prototype.getOptions = function () {
    const options = oldFieldDropdownGetOptions.call(this);
    const block = this.sourceBlock_;
    const isStage = vm.editingTarget && vm.editingTarget.isStage;
    if (block) {
      if (block.category_ === "data") {
        options.push(getMenuItemMessage("createGlobalVariable"));
        if (!isStage) {
          options.push(getMenuItemMessage("createLocalVariable"));
        }
      } else if (block.category_ === "data-lists") {
        options.push(getMenuItemMessage("createGlobalList"));
        if (!isStage) {
          options.push(getMenuItemMessage("createLocalList"));
        }
      } else if (block.type === "event_broadcast_menu" || block.type === "event_whenbroadcastreceived") {
        options.push(getMenuItemMessage("createBroadcast"));
      }
    }
    // Options aren't normally stored anywhere, so we'll store them ourselves.
    resultOfLastGetOptions = options;
    return options;
  };
  const oldFieldVariableOnItemSelected = Blockly.FieldVariable.prototype.onItemSelected;
  Blockly.FieldVariable.prototype.onItemSelected = function (menu, menuItem) {
    const sourceBlock = this.sourceBlock_;
    if (sourceBlock && sourceBlock.workspace && searchBar.value.length !== 0) {
      const workspace = sourceBlock.workspace;
      const optionId = menuItem.getValue();
      if (Object.prototype.hasOwnProperty.call(ADDON_ITEMS, optionId)) {
        const addonItem = ADDON_ITEMS[optionId];
        Blockly.Events.setGroup(true);
        const variable = addonItem.createVariable(workspace, searchBar.value.trim());
        if (this.sourceBlock_) this.setValue(variable.getId());
        Blockly.Events.setGroup(false);
        return;
      }
    }
    return oldFieldVariableOnItemSelected.call(this, menu, menuItem);
  };
  function selectItem(item, click) {
    // You can't just use click() or focus() because Blockly uses mousedown and mouseup handlers, not click handlers.
    item.dispatchEvent(new MouseEvent("mousedown", {
      relatedTarget: item,
      bubbles: true
    }));
    if (click) item.dispatchEvent(new MouseEvent("mouseup", {
      relatedTarget: item,
      bubbles: true
    }));

    // Scroll the item into view if it is offscreen.
    const itemTop = item.offsetTop;
    const itemEnd = itemTop + item.offsetHeight;
    const scrollTop = blocklyDropDownContent.scrollTop;
    const scrollHeight = blocklyDropDownContent.offsetHeight;
    const scrollEnd = scrollTop + scrollHeight;
    if (scrollTop > itemTop) {
      blocklyDropDownContent.scrollTop = itemTop;
    } else if (itemEnd > scrollEnd) {
      blocklyDropDownContent.scrollTop = itemEnd - scrollHeight;
    }
  }
  function performSearch() {
    const rawQuery = searchBar.value.trim();
    const query = rawQuery.trim().toLowerCase();
    const rank = (item, index) => {
      // Negative number will hide
      // Higher numbers will appear first
      const option = currentDropdownOptions[index];
      const optionId = option[1];
      if (SCRATCH_ITEMS_TO_HIDE.includes(optionId)) {
        return query ? -1 : 0;
      } else if (Object.prototype.hasOwnProperty.call(ADDON_ITEMS, optionId)) {
        if (!query) {
          return -1;
        }
        const addonInfo = ADDON_ITEMS[optionId];
        if (addonInfo.enabled(rawQuery)) {
          item.element.lastChild.lastChild.textContent = getMenuItemMessage(optionId)[0];
          return 0;
        }
        return -1;
      }
      const itemText = item.text.toLowerCase();
      if (query === itemText) {
        return 2;
      }
      if (itemText.startsWith(query)) {
        return 1;
      }
      if (itemText.includes(query)) {
        return 0;
      }
      return -1;
    };
    return items.map((item, index) => ({
      item,
      score: rank(item, index)
    })).sort((_ref2, _ref3) => {
      let {
        score: scoreA
      } = _ref2;
      let {
        score: scoreB
      } = _ref3;
      return Math.max(0, scoreB) - Math.max(0, scoreA);
    });
  }
  function updateSearch() {
    const previousSearchedItems = searchedItems;
    searchedItems = performSearch();
    let needToUpdateDOM = previousSearchedItems.length !== searchedItems.length;
    if (!needToUpdateDOM) {
      for (let i = 0; i < searchedItems.length; i++) {
        if (searchedItems[i].item !== previousSearchedItems[i].item) {
          needToUpdateDOM = true;
          break;
        }
      }
    }
    if (needToUpdateDOM && previousSearchedItems.length > 0) {
      for (const {
        item
      } of previousSearchedItems) {
        item.element.remove();
      }
      for (const {
        item
      } of searchedItems) {
        blocklyDropdownMenu.appendChild(item.element);
      }
    }
    for (const {
      item,
      score
    } of searchedItems) {
      item.element.hidden = score < 0;
    }
  }
  function handleKeyDownEvent(event) {
    if (event.key === "Enter") {
      // Reimplement enter to select item to account for hidden items and default to the top item.
      event.stopPropagation();
      event.preventDefault();
      const selectedItem = document.querySelector(".goog-menuitem-highlight");
      if (selectedItem && !selectedItem.hidden) {
        selectItem(selectedItem, true);
        return;
      }
      const selectedBlock = Blockly.selected;
      if (searchBar.value === "" && selectedBlock) {
        if (selectedBlock.type === "event_broadcast" || selectedBlock.type === "event_broadcastandwait" || selectedBlock.type === "event_whenbroadcastreceived") {
          // The top item of these dropdowns is always "New message"
          // When pressing enter on an empty search bar, we close the dropdown instead of making a new broadcast.
          Blockly.DropDownDiv.hide();
          return;
        }
      }
      for (const {
        item
      } of searchedItems) {
        if (!item.element.hidden) {
          selectItem(item.element, true);
          break;
        }
      }
      // If there is no top value, do nothing and leave the dropdown open
    } else if (event.key === "Escape") {
      Blockly.DropDownDiv.hide();
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      // Reimplement keyboard navigation to account for hidden items.
      event.preventDefault();
      event.stopPropagation();
      const items = searchedItems.filter(i => i.score >= 0).map(i => i.item);
      if (items.length === 0) {
        return;
      }
      let selectedIndex = -1;
      for (let i = 0; i < items.length; i++) {
        if (items[i].element.classList.contains("goog-menuitem-highlight")) {
          selectedIndex = i;
          break;
        }
      }
      const lastIndex = items.length - 1;
      let newIndex = 0;
      if (event.key === "ArrowDown") {
        if (selectedIndex === -1 || selectedIndex === lastIndex) {
          newIndex = 0;
        } else {
          newIndex = selectedIndex + 1;
        }
      } else {
        if (selectedIndex === -1 || selectedIndex === 0) {
          newIndex = lastIndex;
        } else {
          newIndex = selectedIndex - 1;
        }
      }
      selectItem(items[newIndex].element, false);
    }
  }
  function getMenuItemMessage(message) {
    var _searchBar;
    // Format used internally by Scratch:
    // [human readable name, internal name]
    return [msg(message, {
      name: ((_searchBar = searchBar) === null || _searchBar === void 0 ? void 0 : _searchBar.value.trim()) || ""
    }), message];
  }
});

/***/ }),

/***/ "./src/addons/addons/find-bar/_runtime_entry.js":
/*!******************************************************!*\
  !*** ./src/addons/addons/find-bar/_runtime_entry.js ***!
  \******************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/find-bar/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/find-bar/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/find-bar/blockly/BlockItem.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/find-bar/blockly/BlockItem.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlockItem; });
class BlockItem {
  constructor(cls, procCode, labelID, y) {
    this.cls = cls;
    this.procCode = procCode;
    this.labelID = labelID;
    this.y = y;
    this.lower = procCode.toLowerCase();
    /**
     * An Array of block ids
     * @type {Array.<string>}
     */
    this.clones = null;
    this.eventName = null;
  }

  /**
   * True if the blockID matches a black represented by this BlockItem
   * @param id
   * @returns {boolean}
   */
  matchesID(id) {
    if (this.labelID === id) {
      return true;
    }
    if (this.clones) {
      for (const cloneID of this.clones) {
        if (cloneID === id) {
          return true;
        }
      }
    }
    return false;
  }
}

/***/ }),

/***/ "./src/addons/addons/find-bar/userscript.js":
/*!**************************************************!*\
  !*** ./src/addons/addons/find-bar/userscript.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blockly_BlockItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockly/BlockItem.js */ "./src/addons/addons/find-bar/blockly/BlockItem.js");
/* harmony import */ var _blockly_BlockInstance_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockly/BlockInstance.js */ "./src/addons/addons/find-bar/blockly/BlockInstance.js");
/* harmony import */ var _blockly_Utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blockly/Utils.js */ "./src/addons/addons/find-bar/blockly/Utils.js");



/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    msg,
    console
  } = _ref;
  const Blockly = await addon.tab.traps.getBlockly();
  class FindBar {
    constructor() {
      this.utils = new _blockly_Utils_js__WEBPACK_IMPORTED_MODULE_2__["default"](addon);
      this.prevValue = "";
      this.findBarOuter = null;
      this.findWrapper = null;
      this.findInput = null;
      this.dropdownOut = null;
      this.dropdown = new Dropdown(this.utils);
      document.addEventListener("keydown", e => this.eventKeyDown(e), true);
    }
    get workspace() {
      return Blockly.getMainWorkspace();
    }
    createDom(root) {
      this.findBarOuter = document.createElement("div");
      this.findBarOuter.className = "sa-find-bar";
      addon.tab.displayNoneWhileDisabled(this.findBarOuter, {
        display: "flex"
      });
      root.appendChild(this.findBarOuter);
      this.findWrapper = this.findBarOuter.appendChild(document.createElement("span"));
      this.findWrapper.className = "sa-find-wrapper";
      this.dropdownOut = this.findWrapper.appendChild(document.createElement("label"));
      this.dropdownOut.className = "sa-find-dropdown-out";
      this.findInput = this.dropdownOut.appendChild(document.createElement("input"));
      this.findInput.className = addon.tab.scratchClass("input_input-form", {
        others: "sa-find-input"
      });
      // for <label>
      this.findInput.id = "sa-find-input";
      this.findInput.type = "search";
      this.findInput.placeholder = msg("find-placeholder");
      this.findInput.autocomplete = "off";
      this.dropdownOut.appendChild(this.dropdown.createDom());
      this.bindEvents();
      this.tabChanged();
    }
    bindEvents() {
      this.findInput.addEventListener("focus", () => this.inputChange());
      this.findInput.addEventListener("keydown", e => this.inputKeyDown(e));
      this.findInput.addEventListener("keyup", () => this.inputChange());
      this.findInput.addEventListener("focusout", () => this.hideDropDown());
    }
    tabChanged() {
      if (!this.findBarOuter) {
        return;
      }
      const tab = addon.tab.redux.state.scratchGui.editorTab.activeTabIndex;
      const visible = tab === 0 || tab === 1 || tab === 2;
      this.findBarOuter.hidden = !visible;
    }
    inputChange() {
      this.showDropDown();

      // Filter the list...
      let val = (this.findInput.value || "").toLowerCase();
      if (val === this.prevValue) {
        // No change so don't re-filter
        return;
      }
      this.prevValue = val;
      this.dropdown.blocks = null;

      // Hide items in list that do not contain filter text
      let listLI = this.dropdown.items;
      for (const li of listLI) {
        let procCode = li.data.procCode;
        let i = li.data.lower.indexOf(val);
        if (i >= 0) {
          li.style.display = "block";
          while (li.firstChild) {
            li.removeChild(li.firstChild);
          }
          if (i > 0) {
            li.appendChild(document.createTextNode(procCode.substring(0, i)));
          }
          let bText = document.createElement("b");
          bText.appendChild(document.createTextNode(procCode.substr(i, val.length)));
          li.appendChild(bText);
          if (i + val.length < procCode.length) {
            li.appendChild(document.createTextNode(procCode.substr(i + val.length)));
          }
        } else {
          li.style.display = "none";
        }
      }
    }
    inputKeyDown(e) {
      this.dropdown.inputKeyDown(e);

      // Enter
      if (e.key === "Enter") {
        this.findInput.blur();
        return;
      }

      // Escape
      if (e.key === "Escape") {
        if (this.findInput.value.length > 0) {
          this.findInput.value = ""; // Clear search first, then close on second press
          this.inputChange();
        } else {
          this.findInput.blur();
        }
        e.preventDefault();
        return;
      }
    }
    eventKeyDown(e) {
      if (addon.self.disabled || !this.findBarOuter) return;
      let ctrlKey = e.ctrlKey || e.metaKey;
      if (e.key.toLowerCase() === "f" && ctrlKey && !e.shiftKey) {
        // Ctrl + F (Override default Ctrl+F find)
        this.findInput.focus();
        this.findInput.select();
        e.cancelBubble = true;
        e.preventDefault();
        return true;
      }
      if (e.key === "ArrowLeft" && ctrlKey) {
        // Ctrl + Left Arrow Key
        if (document.activeElement.tagName === "INPUT") {
          return;
        }
        if (this.selectedTab === 0) {
          this.utils.navigationHistory.goBack();
          e.cancelBubble = true;
          e.preventDefault();
          return true;
        }
      }
      if (e.key === "ArrowRight" && ctrlKey) {
        // Ctrl + Right Arrow Key
        if (document.activeElement.tagName === "INPUT") {
          return;
        }
        if (this.selectedTab === 0) {
          this.utils.navigationHistory.goForward();
          e.cancelBubble = true;
          e.preventDefault();
          return true;
        }
      }
    }
    showDropDown(focusID, instanceBlock) {
      if (!focusID && this.dropdownOut.classList.contains("visible")) {
        return;
      }

      // special '' vs null... - null forces a reevaluation
      this.prevValue = focusID ? "" : null; // Clear the previous value of the input search

      this.dropdownOut.classList.add("visible");
      let scratchBlocks = this.selectedTab === 0 ? this.getScratchBlocks() : this.selectedTab === 1 ? this.getScratchCostumes() : this.selectedTab === 2 ? this.getScratchSounds() : [];
      this.dropdown.empty();
      for (const proc of scratchBlocks) {
        let item = this.dropdown.addItem(proc);
        if (focusID) {
          if (proc.matchesID(focusID)) {
            this.dropdown.onItemClick(item, instanceBlock);
          } else {
            item.style.display = "none";
          }
        }
      }
      this.utils.offsetX = this.dropdownOut.getBoundingClientRect().width + 32;
      this.utils.offsetY = 32;
    }
    hideDropDown() {
      this.dropdownOut.classList.remove("visible");
    }
    get selectedTab() {
      return addon.tab.redux.state.scratchGui.editorTab.activeTabIndex;
    }
    getScratchBlocks() {
      let myBlocks = [];
      let myBlocksByProcCode = {};
      let topBlocks = this.workspace.getTopBlocks();

      /**
       * @param cls
       * @param txt
       * @param root
       * @returns BlockItem
       */
      function addBlock(cls, txt, root) {
        let id = root.id ? root.id : root.getId ? root.getId() : null;
        let clone = myBlocksByProcCode[txt];
        if (clone) {
          if (!clone.clones) {
            clone.clones = [];
          }
          clone.clones.push(id);
          return clone;
        }
        let items = new _blockly_BlockItem_js__WEBPACK_IMPORTED_MODULE_0__["default"](cls, txt, id, 0);
        items.y = root.getRelativeToSurfaceXY ? root.getRelativeToSurfaceXY().y : null;
        myBlocks.push(items);
        myBlocksByProcCode[txt] = items;
        return items;
      }
      function getDescFromField(root) {
        let fields = root.inputList[0];
        let desc;
        for (const fieldRow of fields.fieldRow) {
          desc = desc ? desc + " " : "";
          if (fieldRow instanceof Blockly.FieldImage && fieldRow.src_.endsWith("green-flag.svg")) {
            desc += msg("/_general/blocks/green-flag");
          } else {
            desc += fieldRow.getText();
          }
        }
        return desc;
      }
      for (const root of topBlocks) {
        if (root.type === "procedures_definition") {
          const label = root.getChildren()[0];
          const procCode = label.getProcCode();
          if (!procCode) {
            continue;
          }
          const indexOfLabel = root.inputList.findIndex(i => i.fieldRow.length > 0);
          if (indexOfLabel === -1) {
            continue;
          }
          const translatedDefine = root.inputList[indexOfLabel].fieldRow[0].getText();
          const message = indexOfLabel === 0 ? "".concat(translatedDefine, " ").concat(procCode) : "".concat(procCode, " ").concat(translatedDefine);
          addBlock("define", message, root);
          continue;
        }
        if (root.type === "event_whenflagclicked") {
          addBlock("flag", getDescFromField(root), root); // "When Flag Clicked"
          continue;
        }
        if (root.type === "event_whenbroadcastreceived") {
          const fieldRow = root.inputList[0].fieldRow;
          let eventName = fieldRow.find(input => input.name === "BROADCAST_OPTION").getText();
          addBlock("receive", msg("event", {
            name: eventName
          }), root).eventName = eventName;
          continue;
        }
        if (root.type.substr(0, 10) === "event_when") {
          addBlock("event", getDescFromField(root), root); // "When Flag Clicked"
          continue;
        }
        if (root.type === "control_start_as_clone") {
          addBlock("event", getDescFromField(root), root); // "when I start as a clone"
          continue;
        }
      }
      let map = this.workspace.getVariableMap();
      let vars = map.getVariablesOfType("");
      for (const row of vars) {
        addBlock(row.isLocal ? "var" : "VAR", row.isLocal ? msg("var-local", {
          name: row.name
        }) : msg("var-global", {
          name: row.name
        }), row);
      }
      let lists = map.getVariablesOfType("list");
      for (const row of lists) {
        addBlock(row.isLocal ? "list" : "LIST", row.isLocal ? msg("list-local", {
          name: row.name
        }) : msg("list-global", {
          name: row.name
        }), row);
      }
      const events = this.getCallsToEvents();
      for (const event of events) {
        addBlock("receive", msg("event", {
          name: event.eventName
        }), event.block).eventName = event.eventName;
      }
      const clsOrder = {
        flag: 0,
        receive: 1,
        event: 2,
        define: 3,
        var: 4,
        VAR: 5,
        list: 6,
        LIST: 7
      };
      myBlocks.sort((a, b) => {
        let t = clsOrder[a.cls] - clsOrder[b.cls];
        if (t !== 0) {
          return t;
        }
        if (a.lower < b.lower) {
          return -1;
        }
        if (a.lower > b.lower) {
          return 1;
        }
        return a.y - b.y;
      });
      return myBlocks;
    }
    getScratchCostumes() {
      let costumes = this.utils.getEditingTarget().getCostumes();
      let items = [];
      let i = 0;
      for (const costume of costumes) {
        let item = new _blockly_BlockItem_js__WEBPACK_IMPORTED_MODULE_0__["default"]("costume", costume.name, costume.assetId, i);
        items.push(item);
        i++;
      }
      return items;
    }
    getScratchSounds() {
      let sounds = this.utils.getEditingTarget().getSounds();
      let items = [];
      let i = 0;
      for (const sound of sounds) {
        let item = new _blockly_BlockItem_js__WEBPACK_IMPORTED_MODULE_0__["default"]("sound", sound.name, sound.assetId, i);
        items.push(item);
        i++;
      }
      return items;
    }
    getCallsToEvents() {
      const uses = [];
      const alreadyFound = new Set();
      for (const block of this.workspace.getAllBlocks()) {
        if (block.type !== "event_broadcast" && block.type !== "event_broadcastandwait") {
          continue;
        }
        const broadcastInput = block.getChildren()[0];
        if (!broadcastInput) {
          continue;
        }
        let eventName = "";
        if (broadcastInput.type === "event_broadcast_menu") {
          eventName = broadcastInput.inputList[0].fieldRow[0].getText();
        } else {
          eventName = msg("complex-broadcast");
        }
        if (!alreadyFound.has(eventName)) {
          alreadyFound.add(eventName);
          uses.push({
            eventName: eventName,
            block: block
          });
        }
      }
      return uses;
    }
  }
  class Dropdown {
    constructor(utils) {
      this.utils = utils;
      this.el = null;
      this.items = [];
      this.selected = null;
      this.carousel = new Carousel(this.utils);
    }
    get workspace() {
      return Blockly.getMainWorkspace();
    }
    createDom() {
      this.el = document.createElement("ul");
      this.el.className = "sa-find-dropdown";
      return this.el;
    }
    inputKeyDown(e) {
      // Up Arrow
      if (e.key === "ArrowUp") {
        this.navigateFilter(-1);
        e.preventDefault();
        return;
      }

      // Down Arrow
      if (e.key === "ArrowDown") {
        this.navigateFilter(1);
        e.preventDefault();
        return;
      }

      // Enter
      if (e.key === "Enter") {
        // Any selected on enter? if not select now
        if (this.selected) {
          this.navigateFilter(1);
        }
        e.preventDefault();
        return;
      }
      this.carousel.inputKeyDown(e);
    }
    navigateFilter(dir) {
      let nxt;
      if (this.selected && this.selected.style.display !== "none") {
        nxt = dir === -1 ? this.selected.previousSibling : this.selected.nextSibling;
      } else {
        nxt = this.items[0];
        dir = 1;
      }
      while (nxt && nxt.style.display === "none") {
        nxt = dir === -1 ? nxt.previousSibling : nxt.nextSibling;
      }
      if (nxt) {
        nxt.scrollIntoView({
          block: "nearest"
        });
        this.onItemClick(nxt);
      }
    }
    addItem(proc) {
      const item = document.createElement("li");
      item.innerText = proc.procCode;
      item.data = proc;
      const colorIds = {
        receive: "events",
        event: "events",
        define: "more",
        var: "data",
        VAR: "data",
        list: "data-lists",
        LIST: "data-lists",
        costume: "looks",
        sound: "sounds"
      };
      if (proc.cls === "flag") {
        item.className = "sa-find-flag";
      } else {
        const colorId = colorIds[proc.cls];
        item.className = "sa-block-color sa-block-color-".concat(colorId);
      }
      item.addEventListener("mousedown", e => {
        this.onItemClick(item);
        e.preventDefault();
        e.cancelBubble = true;
        return false;
      });
      this.items.push(item);
      this.el.appendChild(item);
      return item;
    }
    onItemClick(item, instanceBlock) {
      if (this.selected && this.selected !== item) {
        this.selected.classList.remove("sel");
        this.selected = null;
      }
      if (this.selected !== item) {
        item.classList.add("sel");
        this.selected = item;
      }
      let cls = item.data.cls;
      if (cls === "costume" || cls === "sound") {
        // Viewing costumes/sounds - jump to selected costume/sound
        const assetPanel = document.querySelector("[class^=asset-panel_wrapper]");
        if (assetPanel) {
          const reactInstance = assetPanel[addon.tab.traps.getInternalKey(assetPanel)];
          const reactProps = reactInstance.child.stateNode.props;
          reactProps.onItemClick(item.data.y);
          const selectorList = assetPanel.firstChild.firstChild;
          selectorList.children[item.data.y].scrollIntoView({
            behavior: "auto",
            block: "center",
            inline: "start"
          });
          // The wrapper seems to scroll when we use the function above.
          let wrapper = assetPanel.closest("div[class*=gui_flex-wrapper]");
          wrapper.scrollTop = 0;
        }
      } else if (cls === "var" || cls === "VAR" || cls === "list" || cls === "LIST") {
        // Search now for all instances
        let blocks = this.getVariableUsesById(item.data.labelID);
        this.carousel.build(item, blocks, instanceBlock);
      } else if (cls === "define") {
        let blocks = this.getCallsToProcedureById(item.data.labelID);
        this.carousel.build(item, blocks, instanceBlock);
      } else if (cls === "receive") {
        /*
          let blocks = [this.workspace.getBlockById(li.data.labelID)];
          if (li.data.clones) {
              for (const cloneID of li.data.clones) {
                  blocks.push(this.workspace.getBlockById(cloneID))
              }
          }
          blocks = blocks.concat(getCallsToEventsByName(li.data.eventName));
        */
        // Now, fetch the events from the scratch runtime instead of blockly
        let blocks = this.getCallsToEventsByName(item.data.eventName);
        if (!instanceBlock) {
          // Can we start by selecting the first block on 'this' sprite
          const currentTargetID = this.utils.getEditingTarget().id;
          for (const block of blocks) {
            if (block.targetId === currentTargetID) {
              instanceBlock = block;
              break;
            }
          }
        }
        this.carousel.build(item, blocks, instanceBlock);
      } else if (item.data.clones) {
        let blocks = [this.workspace.getBlockById(item.data.labelID)];
        for (const cloneID of item.data.clones) {
          blocks.push(this.workspace.getBlockById(cloneID));
        }
        this.carousel.build(item, blocks, instanceBlock);
      } else {
        this.utils.scrollBlockIntoView(item.data.labelID);
        this.carousel.remove();
      }
    }
    getVariableUsesById(id) {
      let uses = [];
      let topBlocks = this.workspace.getTopBlocks();
      for (const topBlock of topBlocks) {
        /** @type {!Array<!Blockly.Block>} */
        let kids = topBlock.getDescendants();
        for (const block of kids) {
          /** @type {!Array<!Blockly.VariableModel>} */
          let blockVariables = block.getVarModels();
          if (blockVariables) {
            for (const blockVar of blockVariables) {
              if (blockVar.getId() === id) {
                uses.push(block);
              }
            }
          }
        }
      }
      return uses;
    }
    getCallsToProcedureById(id) {
      let procBlock = this.workspace.getBlockById(id);
      let label = procBlock.getChildren()[0];
      let procCode = label.getProcCode();
      let uses = [procBlock]; // Definition First, then calls to it
      let topBlocks = this.workspace.getTopBlocks();
      for (const topBlock of topBlocks) {
        /** @type {!Array<!Blockly.Block>} */
        let kids = topBlock.getDescendants();
        for (const block of kids) {
          if (block.type === "procedures_call") {
            if (block.getProcCode() === procCode) {
              uses.push(block);
            }
          }
        }
      }
      return uses;
    }
    getCallsToEventsByName(name) {
      let uses = []; // Definition First, then calls to it

      const runtime = addon.tab.traps.vm.runtime;
      const targets = runtime.targets; // The sprites / stage

      for (const target of targets) {
        if (!target.isOriginal) {
          continue; // Skip clones
        }
        const blocks = target.blocks;
        if (!blocks._blocks) {
          continue;
        }
        for (const id of Object.keys(blocks._blocks)) {
          const block = blocks._blocks[id];
          if (block.opcode === "event_whenbroadcastreceived" && block.fields.BROADCAST_OPTION.value === name) {
            uses.push(new _blockly_BlockInstance_js__WEBPACK_IMPORTED_MODULE_1__["default"](target, block));
          } else if (block.opcode === "event_broadcast" || block.opcode === "event_broadcastandwait") {
            const broadcastInputBlockId = block.inputs.BROADCAST_INPUT.block;
            const broadcastInputBlock = blocks._blocks[broadcastInputBlockId];
            if (broadcastInputBlock) {
              let eventName;
              if (broadcastInputBlock.opcode === "event_broadcast_menu") {
                eventName = broadcastInputBlock.fields.BROADCAST_OPTION.value;
              } else {
                eventName = msg("complex-broadcast");
              }
              if (eventName === name) {
                uses.push(new _blockly_BlockInstance_js__WEBPACK_IMPORTED_MODULE_1__["default"](target, block));
              }
            }
          }
        }
      }
      return uses;
    }
    empty() {
      for (const item of this.items) {
        if (this.el.contains(item)) {
          this.el.removeChild(item);
        }
      }
      this.items = [];
      this.selected = null;
    }
  }
  class Carousel {
    constructor(utils) {
      this.utils = utils;
      this.el = null;
      this.count = null;
      this.blocks = [];
      this.idx = 0;
    }
    build(item, blocks, instanceBlock) {
      if (this.el && this.el.parentNode === item) {
        // Same control... click again to go to next
        this.navRight();
      } else {
        this.remove();
        this.blocks = blocks;
        item.appendChild(this.createDom());
        this.idx = 0;
        if (instanceBlock) {
          for (const idx of Object.keys(this.blocks)) {
            const block = this.blocks[idx];
            if (block.id === instanceBlock.id) {
              this.idx = Number(idx);
              break;
            }
          }
        }
        if (this.idx < this.blocks.length) {
          this.utils.scrollBlockIntoView(this.blocks[this.idx]);
        }
      }
    }
    createDom() {
      this.el = document.createElement("span");
      this.el.className = "sa-find-carousel";
      const leftControl = this.el.appendChild(document.createElement("span"));
      leftControl.className = "sa-find-carousel-control";
      leftControl.textContent = "◀";
      leftControl.addEventListener("mousedown", e => this.navLeft(e));
      this.count = this.el.appendChild(document.createElement("span"));
      this.count.innerText = this.blocks.length > 0 ? this.idx + 1 + " / " + this.blocks.length : "0";
      const rightControl = this.el.appendChild(document.createElement("span"));
      rightControl.className = "sa-find-carousel-control";
      rightControl.textContent = "▶";
      rightControl.addEventListener("mousedown", e => this.navRight(e));
      return this.el;
    }
    inputKeyDown(e) {
      // Left Arrow
      if (e.key === "ArrowLeft") {
        if (this.el && this.blocks) {
          this.navLeft(e);
        }
      }

      // Right Arrow
      if (e.key === "ArrowRight") {
        if (this.el && this.blocks) {
          this.navRight(e);
        }
      }
    }
    navLeft(e) {
      return this.navSideways(e, -1);
    }
    navRight(e) {
      return this.navSideways(e, 1);
    }
    navSideways(e, dir) {
      if (this.blocks.length > 0) {
        this.idx = (this.idx + dir + this.blocks.length) % this.blocks.length; // + length to fix negative modulo js issue.
        this.count.innerText = this.idx + 1 + " / " + this.blocks.length;
        this.utils.scrollBlockIntoView(this.blocks[this.idx]);
      }
      if (e) {
        e.cancelBubble = true;
        e.preventDefault();
      }
    }
    remove() {
      if (this.el) {
        this.el.remove();
        this.blocks = [];
        this.idx = 0;
      }
    }
  }
  const findBar = new FindBar();
  const _doBlockClick_ = Blockly.Gesture.prototype.doBlockClick_;
  Blockly.Gesture.prototype.doBlockClick_ = function () {
    if (!addon.self.disabled && (this.mostRecentEvent_.button === 1 || this.mostRecentEvent_.shiftKey)) {
      // Wheel button...
      // Intercept clicks to allow jump to...?
      let block = this.startBlock_;
      for (; block; block = block.getSurroundParent()) {
        if (block.type === "procedures_definition" || !this.jumpToDef && block.type === "procedures_call") {
          let id = block.id ? block.id : block.getId ? block.getId() : null;
          findBar.findInput.focus();
          findBar.showDropDown(id);
          return;
        }
        if (block.type === "data_variable" || block.type === "data_changevariableby" || block.type === "data_setvariableto") {
          let id = block.getVars()[0];
          findBar.findInput.focus();
          findBar.showDropDown(id, block);
          findBar.selVarID = id;
          return;
        }
        if (block.type === "event_whenbroadcastreceived" || block.type === "event_broadcastandwait" || block.type === "event_broadcast") {
          // todo: actually index the broadcasts...!
          let id = block.id;
          findBar.findInput.focus();
          findBar.showDropDown(id, block);
          findBar.selVarID = id;
          return;
        }
      }
    }
    _doBlockClick_.call(this);
  };
  addon.tab.redux.initialize();
  addon.tab.redux.addEventListener("statechanged", e => {
    if (e.detail.action.type === "scratch-gui/navigation/ACTIVATE_TAB") {
      findBar.tabChanged();
    }
  });
  while (true) {
    const root = await addon.tab.waitForElement("ul[class*=gui_tab-list_]", {
      markAsSeen: true,
      reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"],
      reduxCondition: state => !state.scratchGui.mode.isPlayerOnly
    });
    findBar.createDom(root);
  }
});

/***/ }),

/***/ "./src/addons/addons/folders/_runtime_entry.js":
/*!*****************************************************!*\
  !*** ./src/addons/addons/folders/_runtime_entry.js ***!
  \*****************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/folders/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/folders/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_folder_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./folder.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/folders/folder.svg");
/* generated by pull.js */



const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "folder.svg": _url_loader_folder_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/addons/addons/folders/userscript.js":
/*!*************************************************!*\
  !*** ./src/addons/addons/folders/userscript.js ***!
  \*************************************************/
/*! exports provided: addDefaultAssetFolderIfMissing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDefaultAssetFolderIfMissing", function() { return addDefaultAssetFolderIfMissing; });
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const DIVIDER = "//";

/**
 * getFolderFromName("B") === null
 * getFolderFromName("A//b") === "A"
 */
const getFolderFromName = name => {
  const idx = name.indexOf(DIVIDER);
  if (idx === -1 || idx === 0) {
    return null;
  }
  return name.substr(0, idx);
};

/**
 * getNameWithoutFolder("B") === "B"
 * getNameWithoutFolder("A//b") === "b"
 */
const getNameWithoutFolder = name => {
  const idx = name.indexOf(DIVIDER);
  if (idx === -1 || idx === 0) {
    return name;
  }
  return name.substr(idx + DIVIDER.length);
};

/**
 * setFolderOfName("B", "y") === "y//B"
 * setFolderOfName("c//B", "y") === "y//B"
 * setFolderOfName("B", null) === "B"
 * setFolderOfName("c//B", null) === "B"
 */
const setFolderOfName = (name, folder) => {
  const basename = getNameWithoutFolder(name);
  if (folder) {
    return "".concat(folder).concat(DIVIDER).concat(basename);
  }
  return basename;
};
const isValidFolderName = name => {
  return !name.includes(DIVIDER) && !name.endsWith("/");
};
const RESERVED_NAMES = ["_mouse_", "_stage_", "_edge_", "_myself_", "_random_"];
const ensureNotReserved = name => {
  if (name === "") return "2";
  if (RESERVED_NAMES.includes(name)) return "".concat(name, "2");
  return name;
};
let currentSpriteFolder = null;
let currentAssetFolder = null;

/**
 * Used for compatibility with other addons that trap the add costume or add sound functions.
 * By default new assets are added to the folder that the user currently has open. This gets
 * encoded in the name of the asset, but that information may not be added until late in the
 * process. If you want to guarantee that your addon is aware of the asset name after
 * accounting for folders, then pass it into this function. The asset will be modified in-place.
 * It is safe to call this multiple times with the same asset.
 * @param {{name: string}} asset a sound or costume asset
 */
const addDefaultAssetFolderIfMissing = asset => {
  if (asset && currentAssetFolder !== null && typeof getFolderFromName(asset.name) !== "string") {
    asset.name = setFolderOfName(asset.name, currentAssetFolder);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    console,
    msg
  } = _ref;
  // The basic premise of how this addon works is relative simple.
  // scratch-gui renders the sprite selectors and asset selectors in a hierarchy like this:
  // <SelectorHOC>
  //   <SpriteSelectorItem />
  //   <SpriteSelectorItem />
  //   <SpriteSelectorItem />
  //   <SpriteSelectorItem />
  //   ...
  // </SelectorHOC>
  // It's obviously more complicated than that, but there are two important parts:
  // SelectorHOC - We override this to change which items are displayed
  // SpriteSelectorItem - We override this to change how items are displayed.
  //    Folders are just items rendered differently
  // These two components communicate through the `name` property of the items.
  // We touch some things on the VM to make dragging items work properly.

  const REACT_INTERNAL_PREFIX = "__reactInternalInstance$";
  const TYPE_SPRITES = 1;
  const TYPE_ASSETS = 2;

  // We run too early, will be set later
  let vm;
  let reactInternalKey;
  let currentSpriteItems;
  let currentAssetItems;
  const getSortableHOCFromElement = el => {
    const nearestSpriteSelector = el.closest("[class*='sprite-selector_sprite-selector']");
    if (nearestSpriteSelector) {
      return nearestSpriteSelector[reactInternalKey].child.sibling.child.stateNode;
    }
    const nearestAssetPanelWrapper = el.closest('[class*="asset-panel_wrapper"]');
    if (nearestAssetPanelWrapper) {
      return nearestAssetPanelWrapper[reactInternalKey].child.child.stateNode;
    }
    throw new Error("cannot find SortableHOC");
  };
  const getBackpackFromElement = el => {
    const gui = el.closest('[class*="gui_editor-wrapper"]');
    if (!gui) throw new Error("cannot find Backpack");
    return gui[reactInternalKey].child.sibling.child.child.stateNode;
  };
  const clamp = (n, min, max) => {
    return Math.min(Math.max(n, min), max);
  };

  /**
   * @typedef {Object} ItemData
   * @property {string} realName
   * @property {number} realIndex
   * @property {string} inFolder
   * @property {string} folder
   * @property {boolean} folderOpen
   */

  /**
   * @returns {ItemData|null}
   */
  const getItemData = item => {
    if (item && item.name && typeof item.name === "object") {
      return item.name;
    }
    return null;
  };
  const openFolderAsset = {
    assetId: "&__sa_folders_folder",
    encodeDataURI() {
      // Doesn't actually need to be a data: URI
      return addon.self.getResource("/folder.svg") /* rewritten by pull.js */;
    }
  };

  // https://github.com/scratchfoundation/scratch-gui/blob/develop/src/components/asset-panel/icon--sound.svg
  const imageIconSource = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg width=\"100px\" height=\"100px\" viewBox=\"0 0 20 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g id=\"Sound\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <path d=\"M12.4785058,12.6666667 C12.3144947,12.6666667 12.1458852,12.6272044 11.9926038,12.5440517 C11.537358,12.2960031 11.3856094,11.7562156 11.6553847,11.3376335 C12.1688774,10.5371131 12.1688774,9.54491867 11.6553847,8.74580756 C11.3856094,8.32581618 11.537358,7.78602861 11.9926038,7.53798001 C12.452448,7.29275014 13.0379829,7.43086811 13.3046926,7.84804076 C14.1737981,9.20103311 14.1737981,10.8809986 13.3046926,12.233991 C13.1268862,12.5130457 12.806528,12.6666667 12.4785058,12.6666667 Z M15.3806784,13.8333333 C15.2408902,13.8333333 15.0958763,13.796281 14.9665396,13.7182064 C14.5785295,13.485306 14.4491928,12.9784829 14.6791247,12.5854634 C15.5949331,11.0160321 15.5949331,9.065491 14.6791247,7.49738299 C14.4491928,7.10436352 14.5785295,6.59621712 14.9665396,6.36331669 C15.3558562,6.13438616 15.8549129,6.26274605 16.0848448,6.65444223 C17.3050517,8.74260632 17.3050517,11.3389168 16.0848448,13.4270809 C15.9319924,13.6890939 15.6602547,13.8333333 15.3806784,13.8333333 Z M10.3043478,5.62501557 L10.3043478,13.873675 C10.3043478,14.850934 9.10969849,15.3625101 8.36478311,14.7038052 L6.7566013,13.2797607 C6.18712394,12.7762834 5.44499329,12.4968737 4.67362297,12.4968737 L4.3923652,12.4968737 C3.62377961,12.4968737 3,11.8935108 3,11.1470686 L3,8.36646989 C3,7.62137743 3.62377961,7.01666471 4.3923652,7.01666471 L4.65830695,7.01666471 C5.42967727,7.01666471 6.17180792,6.73725504 6.74128529,6.23377771 L8.36478311,4.79623519 C9.10969849,4.13753026 10.3043478,4.64910643 10.3043478,5.62501557 Z\" id=\"Combined-Shape\" fill=\"#575E75\"></path>\n    </g>\n</svg>";
  const soundIconHref = "data:image/svg+xml;base64,".concat(btoa(imageIconSource));
  let folderColorStylesheet = null;
  const folderColors = Object.create(null);
  const getFolderColorClass = folderName => {
    const mulberry32 = a => {
      // https://stackoverflow.com/a/47593316
      return function () {
        var t = a += 0x6d2b79f5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
      };
    };
    const hashCode = str => {
      // Based on Java's String.hashCode
      // https://hg.openjdk.java.net/jdk8/jdk8/jdk/file/687fd7c7986d/src/share/classes/java/lang/String.java#l1452
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = 31 * hash + str.charCodeAt(i);
        hash = hash | 0;
      }
      return hash;
    };
    const random = str => {
      const seed = hashCode(str);
      const rng = mulberry32(seed);
      // Run RNG a few times to get more random numbers, otherwise similar seeds tend to give somewhat similar results
      rng();
      rng();
      rng();
      rng();
      return rng();
    };
    if (!folderColors[folderName]) {
      if (!folderColorStylesheet) {
        folderColorStylesheet = document.createElement("style");
        document.head.appendChild(folderColorStylesheet);
      }
      const hue = random(folderName) * 360;
      const color = "hsla(".concat(hue, "deg, 100%, 85%, 0.5)");
      const id = Object.keys(folderColors).length;
      const className = "sa-folders-color-".concat(id);
      folderColors[folderName] = className;
      folderColorStylesheet.textContent += ".".concat(className, "{background-color:").concat(color, " !important;}");
      folderColorStylesheet.textContent += ".".concat(className, "[class*=\"sprite-selector_raised\"]:not([class*=\"sa-folders-folder\"]){background-color:hsla(").concat(hue, "deg, 100%, 77%, 1) !important;}");
    }
    return folderColors[folderName];
  };
  const fixOrderOfItemsInFolders = items => {
    const folders = Object.create(null);
    const result = [];
    for (const item of items) {
      const name = item.getName ? item.getName() : item.name;
      const folder = getFolderFromName(name);
      if (typeof folder === "string") {
        if (!folders[folder]) {
          folders[folder] = [];
          result.push(folders[folder]);
        }
        folders[folder].push(item);
      } else {
        result.push(item);
      }
    }
    const flatResult = result.flat();
    for (let i = 0; i < items.length; i++) {
      if (result[i] !== items[i]) {
        return {
          items: flatResult,
          changed: true
        };
      }
    }
    return {
      items: flatResult,
      changed: false
    };
  };
  const fixTargetOrder = () => {
    const {
      items,
      changed
    } = fixOrderOfItemsInFolders(vm.runtime.targets);
    if (changed) {
      vm.runtime.targets = items;
      vm.emitTargetsUpdate();
    }
  };
  const fixCostumeOrder = function fixCostumeOrder() {
    let target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : vm.editingTarget;
    const {
      items,
      changed
    } = fixOrderOfItemsInFolders(target.sprite.costumes);
    if (changed) {
      target.sprite.costumes = items;
      vm.emitTargetsUpdate();
    }
  };
  const fixSoundOrder = function fixSoundOrder() {
    let target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : vm.editingTarget;
    const {
      items,
      changed
    } = fixOrderOfItemsInFolders(target.sprite.sounds);
    if (changed) {
      target.sprite.sounds = items;
      vm.emitTargetsUpdate();
    }
  };
  const verifySortableHOC = sortableHOCInstance => {
    const SortableHOC = sortableHOCInstance.constructor;
    if (Array.isArray(sortableHOCInstance.props.items) && (typeof sortableHOCInstance.props.selectedId === "string" || typeof sortableHOCInstance.props.selectedItemIndex === "number") && typeof sortableHOCInstance.containerBox !== "undefined" && typeof SortableHOC.prototype.componentDidMount === "undefined" && typeof SortableHOC.prototype.componentDidUpdate === "undefined" && typeof SortableHOC.prototype.handleAddSortable === "function" && typeof SortableHOC.prototype.handleRemoveSortable === "function" && typeof SortableHOC.prototype.setRef === "function") return;
    throw new Error("Can not comprehend SortableHOC");
  };
  const verifySpriteSelectorItem = spriteSelectorItemInstance => {
    const SpriteSelectorItem = spriteSelectorItemInstance.constructor;
    if (typeof spriteSelectorItemInstance.props.asset === "object" && typeof spriteSelectorItemInstance.props.name === "string" && typeof spriteSelectorItemInstance.props.dragType === "string" && typeof SpriteSelectorItem.prototype.handleClick === "function" && typeof SpriteSelectorItem.prototype.setRef === "function" && typeof SpriteSelectorItem.prototype.handleDrag === "function" && typeof SpriteSelectorItem.prototype.handleDragEnd === "function" && typeof SpriteSelectorItem.prototype.handleDelete === "function" && typeof SpriteSelectorItem.prototype.handleDuplicate === "function" && typeof SpriteSelectorItem.prototype.handleExport === "function") return;
    throw new Error("Can not comprehend SpriteSelectorItem");
  };
  const verifyVM = vm => {
    const target = vm.runtime.targets[0];
    if (typeof vm.installTargets === "function" && typeof vm.reorderTarget === "function" && typeof target.reorderCostume === "function" && typeof target.reorderSound === "function" && typeof target.addCostume === "function" && typeof target.addSound === "function") return;
    throw new Error("Can not comprehend VM");
  };
  const verifyBackpack = backpackInstance => {
    const Backpack = backpackInstance.constructor;
    if (typeof Backpack.prototype.handleDrop === "function" && typeof Backpack.prototype.componentDidUpdate === "undefined") {
      return;
    }
    throw new Error("Can not comprehend Backpack");
  };
  class Cache {
    constructor() {
      this.cache = new Map();
      this.usedThisTick = new Set();
    }
    has(id) {
      return this.cache.has(id);
    }
    get(id) {
      this.usedThisTick.add(id);
      return this.cache.get(id);
    }
    set(id, value) {
      this.usedThisTick.add(id);
      this.cache.set(id, value);
    }
    startTick() {
      this.usedThisTick.clear();
    }
    endTick() {
      for (const id of Array.from(this.cache.keys())) {
        if (!this.usedThisTick.has(id)) {
          this.cache.delete(id);
        }
      }
    }
    clear() {
      this.usedThisTick.clear();
      this.cache.clear();
    }
  }
  const patchSortableHOC = (SortableHOC, type) => {
    // SortableHOC should be: https://github.com/scratchfoundation/scratch-gui/blob/29d9851778febe4e69fa5111bf7559160611e366/src/lib/sortable-hoc.jsx#L8

    const itemCache = new Cache();
    const folderItemCache = new Cache();
    const folderAssetCache = new Cache();
    const PREVIEW_SIZE = 80;
    const PREVIEW_POSITIONS = [
    // x, y
    [0, 0], [PREVIEW_SIZE / 2, 0], [0, PREVIEW_SIZE / 2], [PREVIEW_SIZE / 2, PREVIEW_SIZE / 2]];
    const createFolderPreview = items => {
      // Directly generate a string instead of using DOM API for performance as we deal with very large inlined images
      // Because the result is only used as an img src, XSS shouldn't be a concern
      let result = "data:image/svg+xml;,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"".concat(PREVIEW_SIZE, "\" height=\"").concat(PREVIEW_SIZE, "\">");
      for (let i = 0; i < Math.min(PREVIEW_POSITIONS.length, items.length); i++) {
        const item = items[i];
        const width = PREVIEW_SIZE / 2;
        const height = PREVIEW_SIZE / 2;
        const [x, y] = PREVIEW_POSITIONS[i];
        let src;
        if (item.asset) {
          // TW: We can be 100% certain that escaping here is unnecessary
          src = item.asset.encodeDataURI();
        } else if (item.costume && item.costume.asset) {
          src = item.costume.asset.encodeDataURI();
        } else if (item.url) {
          src = soundIconHref;
        }
        if (src) {
          result += "<image width=\"".concat(width, "\" height=\"").concat(height, "\" x=\"").concat(x, "\" y=\"").concat(y, "\" href=\"").concat(src, "\"/>");
        }
      }
      result += "</svg>";
      return result;
    };
    const getUniqueIdOfFolderItems = items => {
      let id = "sa_folder&&";
      for (let i = 0; i < Math.min(PREVIEW_POSITIONS.length, items.length); i++) {
        const item = items[i];
        if (item.asset) {
          id += item.asset.assetId;
        } else if (item.costume && item.costume.asset) {
          id += item.costume.asset.assetId;
        } else if (item.url) {
          id += item.url;
        }
        id += "&&";
      }
      return id;
    };
    const processItems = (openFolders, props) => {
      const processItem = item => {
        const itemId = item.name;
        let newItem;
        let itemData;
        if (itemCache.has(itemId)) {
          newItem = itemCache.get(itemId);
          itemData = newItem.name;
        } else {
          itemData = {
            toString() {
              return "_".concat(item.name);
            }
          };
          newItem = {};
          itemCache.set(itemId, newItem);
        }
        const itemFolderName = getFolderFromName(item.name);
        Object.assign(newItem, item);
        itemData.realName = item.name;
        itemData.realIndex = i;
        itemData.inFolder = itemFolderName;
        newItem.name = itemData;
        return {
          newItem,
          itemData
        };
      };
      itemCache.startTick();
      folderItemCache.startTick();
      folderAssetCache.startTick();
      const folderOccurrences = new Map();
      const items = [];
      const result = {
        items
      };
      let i = 0;
      while (i < props.items.length) {
        const item = props.items[i];
        const folderName = getFolderFromName(item.name);
        if (folderName === null) {
          items.push(processItem(item).newItem);
          if (type === TYPE_ASSETS) {
            const isSelected = props.selectedItemIndex === i;
            if (isSelected) {
              result.selectedItemIndex = items.length - 1;
            }
          }
        } else {
          const isOpen = openFolders.indexOf(folderName) !== -1;
          const folderItems = [];
          while (i < props.items.length) {
            const childItem = props.items[i];
            const processedItem = processItem(childItem);
            if (getFolderFromName(childItem.name) !== folderName) {
              break;
            }
            folderItems.push(processedItem.newItem);
            if (type === TYPE_ASSETS) {
              const isSelected = props.selectedItemIndex === i;
              if (isSelected) {
                if (isOpen) {
                  result.selectedItemIndex = items.length + folderItems.length;
                } else {
                  result.selectedItemIndex = -1;
                }
              }
            }
            i++;
          }
          i--;
          const occurrence = folderOccurrences.get(folderName) || 0;
          folderOccurrences.set(folderName, occurrence + 1);
          const baseUniqueId = getUniqueIdOfFolderItems(folderItems);
          const itemUniqueId = "".concat(isOpen, "&").concat(occurrence, "&").concat(folderName, "&").concat(baseUniqueId, "&");
          const reactKey = "&__".concat(occurrence, "_").concat(folderName);
          const assetUniqueId = baseUniqueId;
          let folderItem;
          let folderData;
          if (folderItemCache.has(itemUniqueId)) {
            folderItem = folderItemCache.get(itemUniqueId);
            folderData = folderItem.name;
          } else {
            folderItem = {
              // Can be used as a react key
              id: {
                toString() {
                  return reactKey;
                }
              }
            };
            folderData = {
              // Can be used as a react key
              toString() {
                return reactKey;
              }
            };
            folderItemCache.set(itemUniqueId, folderItem);
          }
          folderData.folder = folderName;
          folderData.folderOpen = isOpen;
          folderItem.items = folderItems;
          folderItem.name = folderData;
          let folderAsset;
          if (isOpen) {
            folderAsset = openFolderAsset;
          } else {
            if (folderAssetCache.has(assetUniqueId)) {
              folderAsset = folderAssetCache.get(assetUniqueId);
            } else {
              folderAsset = {
                assetId: assetUniqueId,
                encodeDataURI() {
                  return createFolderPreview(folderItems);
                }
              };
              folderAssetCache.set(assetUniqueId, folderAsset);
            }
          }
          if (type === TYPE_SPRITES) {
            if (!folderItem.costume) folderItem.costume = {};
            folderItem.costume.asset = folderAsset;
            // For sprite items, `id` is used as the drag payload and toString is used as a React key
            if (!folderItem.id) folderItem.id = {};
            folderItem.id.sa_folder_items = folderItems;
            folderItem.id.toString = () => reactKey;
          } else {
            folderItem.asset = folderAsset;
            if (!folderItem.dragPayload) folderItem.dragPayload = {};
            folderItem.dragPayload.sa_folder_items = folderItems;
          }
          items.push(folderItem);
          if (isOpen) {
            for (const item of folderItems) {
              items.push(item);
            }
          }
        }
        i++;
      }
      itemCache.endTick();
      folderItemCache.endTick();
      folderAssetCache.endTick();
      return result;
    };
    const getSelectedItem = sortable => {
      if (type === TYPE_SPRITES) {
        const selectedItem = sortable.props.items.find(i => i.id === sortable.props.selectedId);
        return selectedItem;
      } else if (type === TYPE_ASSETS) {
        const selectedItem = sortable.props.items[sortable.props.selectedItemIndex];
        return selectedItem;
      }
      return null;
    };
    SortableHOC.prototype.saInitialSetup = function () {
      itemCache.clear();
      folderItemCache.clear();
      folderAssetCache.clear();
      const folders = [];
      const selectedItem = getSelectedItem(this);
      if (selectedItem && !selectedItem.isStage) {
        const folder = getFolderFromName(selectedItem.name);
        folders.push(folder);
        if (type === TYPE_SPRITES) {
          currentSpriteFolder = folder;
        } else if (type === TYPE_ASSETS) {
          currentAssetFolder = folder;
        }
      }
      this.setState({
        folders
      });
    };
    SortableHOC.prototype.componentDidMount = function () {
      // Do part of componentDidUpdate on mount as well
      const selectedItem = getSelectedItem(this);
      if (selectedItem) {
        const folder = getFolderFromName(selectedItem.name);
        if (type === TYPE_SPRITES) {
          currentSpriteFolder = folder;
        } else if (type === TYPE_ASSETS) {
          currentAssetFolder = folder;
        }
      }
      this.saInitialSetup();
    };
    SortableHOC.prototype.componentDidUpdate = function (prevProps, prevState) {
      const selectedItem = getSelectedItem(this);
      if (selectedItem) {
        const folder = getFolderFromName(selectedItem.name);
        const currentFolder = this.state.folders.includes(folder) ? folder : null;
        if (type === TYPE_SPRITES) {
          currentSpriteFolder = currentFolder;
        } else if (type === TYPE_ASSETS) {
          currentAssetFolder = currentFolder;
        }
        let selectedItemChanged;
        if (this.props.selectedId) {
          selectedItemChanged = this.props.selectedId !== prevProps.selectedId;
        } else {
          selectedItemChanged = this.props.items[this.props.selectedItemIndex] && prevProps.items[prevProps.selectedItemIndex] && this.props.items[this.props.selectedItemIndex].name !== prevProps.items[prevProps.selectedItemIndex].name;
        }
        if (selectedItemChanged) {
          if (!selectedItem.isStage) {
            if (typeof folder === "string" && !this.state.folders.includes(folder)) {
              this.setState(prevState => ({
                folders: [...prevState.folders, folder]
              }));
            }
          }
        }
      }
    };
    const originalSortableHOCRender = SortableHOC.prototype.render;
    SortableHOC.prototype.render = function () {
      const originalProps = this.props;
      this.props = _objectSpread(_objectSpread({}, this.props), processItems(this.state && this.state.folders || [], this.props));
      if (type === TYPE_SPRITES) {
        currentSpriteItems = this.props.items;
      } else if (type === TYPE_ASSETS) {
        currentAssetItems = this.props.items;
      }
      const result = originalSortableHOCRender.call(this);
      this.props = originalProps;
      return result;
    };
  };
  const getAllFolders = component => {
    const result = new Set();
    let items;
    if (component.props.dragType === "SPRITE") {
      items = currentSpriteItems;
    } else {
      items = currentAssetItems;
    }
    for (const item of items) {
      const data = getItemData(item);
      if (typeof data.folder === "string") {
        result.add(data.folder);
      }
    }
    return Array.from(result);
  };
  const isFolderOpen = (component, folder) => {
    const sortableHOCInstance = getSortableHOCFromElement(component.ref);
    const folders = sortableHOCInstance.state && sortableHOCInstance.state.folders || [];
    return folders.includes(folder);
  };
  const setFolderOpen = (component, folder, open) => {
    const sortableHOCInstance = getSortableHOCFromElement(component.ref);
    sortableHOCInstance.setState(prevState => {
      let folders = prevState && prevState.folders || [];
      folders = folders.filter(i => i !== folder);
      if (open) {
        return {
          folders: [...folders, folder]
        };
      }
      return {
        folders
      };
    });
  };
  await addon.tab.scratchClassReady();
  addon.tab.createEditorContextMenu((ctxType, ctx) => {
    if (ctxType !== "sprite" && ctxType !== "costume" && ctxType !== "sound") return;
    const component = ctx.target[addon.tab.traps.getInternalKey(ctx.target)].return.return.return.stateNode;
    const data = getItemData(component.props);
    if (!data) return;
    if (typeof data.folder === "string") {
      ctx.target.setAttribute("sa-folders-context-type", "folder");
      const renameItems = newName => {
        const isOpen = isFolderOpen(component, data.folder);
        setFolderOpen(component, data.folder, false);
        if (isOpen && typeof newName === "string") {
          setFolderOpen(component, newName, true);
        }
        if (component.props.dragType === "SPRITE") {
          for (const target of vm.runtime.targets) {
            if (target.isOriginal) {
              if (getFolderFromName(target.getName()) === data.folder) {
                vm.renameSprite(target.id, ensureNotReserved(setFolderOfName(target.getName(), newName)));
              }
            }
          }
          vm.emitWorkspaceUpdate();
          fixTargetOrder();
        } else if (component.props.dragType === "COSTUME") {
          for (let i = 0; i < vm.editingTarget.sprite.costumes.length; i++) {
            const costume = vm.editingTarget.sprite.costumes[i];
            if (getFolderFromName(costume.name) === data.folder) {
              vm.renameCostume(i, setFolderOfName(costume.name, newName));
            }
          }
          fixCostumeOrder();
        } else if (component.props.dragType === "SOUND") {
          for (let i = 0; i < vm.editingTarget.sprite.sounds.length; i++) {
            const sound = vm.editingTarget.sprite.sounds[i];
            if (getFolderFromName(sound.name) === data.folder) {
              vm.renameSound(i, setFolderOfName(sound.name, newName));
            }
          }
          fixSoundOrder();
        }
      };
      const renameFolder = async () => {
        let newName = await addon.tab.prompt(msg("rename-folder-prompt-title"), msg("rename-folder-prompt"), data.folder, {
          useEditorClasses: true
        });
        // Prompt cancelled, do not rename
        if (newName === null) {
          return;
        }
        if (!isValidFolderName(newName)) {
          alert(msg("name-not-allowed"));
          return;
        }
        // Empty name will remove the folder
        if (!newName) {
          newName = null;
        }
        renameItems(newName);
      };
      const removeFolder = () => {
        renameItems(null);
      };
      return [{
        className: "sa-folders-rename-folder",
        label: msg("rename-folder"),
        callback: renameFolder,
        position: "assetContextMenuAfterDelete",
        order: 10
      }, {
        className: "sa-folders-remove-folder",
        label: msg("remove-folder"),
        callback: removeFolder,
        position: "assetContextMenuAfterDelete",
        order: 11
      }];
    } else {
      ctx.target.setAttribute("sa-folders-context-type", "asset");
      const setFolder = folder => {
        if (component.props.dragType === "SPRITE") {
          const target = vm.runtime.getTargetById(component.props.id);
          vm.renameSprite(component.props.id, ensureNotReserved(setFolderOfName(target.getName(), folder)));
          fixTargetOrder();
          vm.emitWorkspaceUpdate();
        } else if (component.props.dragType === "COSTUME") {
          const data = getItemData(component.props);
          const index = data.realIndex;
          const asset = vm.editingTarget.sprite.costumes[index];
          vm.renameCostume(vm.editingTarget.sprite.costumes.indexOf(asset), setFolderOfName(asset.name, folder));
          fixCostumeOrder();
        } else if (component.props.dragType === "SOUND") {
          const data = getItemData(component.props);
          const index = data.realIndex;
          const asset = vm.editingTarget.sprite.sounds[index];
          vm.renameSound(vm.editingTarget.sprite.sounds.indexOf(asset), setFolderOfName(asset.name, folder));
          fixSoundOrder();
        }
      };
      const createFolder = async () => {
        const name = await addon.tab.prompt(msg("name-prompt-title"), msg("name-prompt"), getNameWithoutFolder(data.realName), {
          useEditorClasses: true
        });
        if (name === null) {
          return;
        }
        if (!isValidFolderName(name)) {
          alert(msg("name-not-allowed"));
          return;
        }
        setFolder(name);
      };
      const base = [{
        border: true,
        className: "sa-folders-create-folder",
        label: msg("create-folder"),
        callback: createFolder,
        position: "assetContextMenuAfterDelete",
        order: 13
      }];
      const currentFolder = data.inFolder;
      if (typeof currentFolder === "string") {
        base.push({
          className: "sa-folders-remove-from-folder",
          label: msg("remove-from-folder"),
          callback: () => setFolder(null),
          position: "assetContextMenuAfterDelete",
          order: 14
        });
      }
      return base.concat(getAllFolders(component).filter(folder => folder !== currentFolder).map((folder, i) => {
        return {
          className: "sa-folders-add-to-folder",
          label: msg("add-to-folder", {
            folder
          }),
          callback: () => setFolder(folder),
          position: "assetContextMenuAfterDelete",
          order: 20 + i
        };
      }));
    }
  });
  const patchSpriteSelectorItem = SpriteSelectorItem => {
    for (const method of ["handleDelete", "handleDuplicate", "handleExport"]) {
      const original = SpriteSelectorItem.prototype[method];
      SpriteSelectorItem.prototype[method] = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (typeof this.props.id === "number") {
          const itemData = getItemData(this.props);
          if (itemData) {
            const originalProps = this.props;
            this.props = _objectSpread(_objectSpread({}, originalProps), {}, {
              id: itemData.realIndex
            });
            const ret = original.call(this, ...args);
            this.props = originalProps;
            return ret;
          }
        }
        return original.call(this, ...args);
      };
    }
    const originalHandleDragEnd = SpriteSelectorItem.prototype.handleDragEnd;
    SpriteSelectorItem.prototype.handleDragEnd = function () {
      const itemData = getItemData(this.props);
      if (itemData) {
        if (typeof itemData.realIndex === "number" && this.props.dragging) {
          // If the item is being dragged onto another group (eg. costume list -> sprite list)
          // then we fake a drag event to make the `index` be the real index
          const originalIndex = this.props.index;
          const realIndex = itemData.realIndex;
          if (originalIndex !== realIndex) {
            const currentOffset = addon.tab.redux.state.scratchGui.assetDrag.currentOffset;
            const sortableHOCInstance = getSortableHOCFromElement(this.ref);
            if (currentOffset && sortableHOCInstance && sortableHOCInstance.getMouseOverIndex() === null) {
              this.props.index = realIndex;
              this.handleDrag(currentOffset);
              this.props.index = originalIndex;
            }
          }
        }
      }
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return originalHandleDragEnd.call(this, ...args);
    };
    const originalHandleClick = SpriteSelectorItem.prototype.handleClick;
    SpriteSelectorItem.prototype.handleClick = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      const e = args[0];
      if (e && !this.noClick) {
        const itemData = getItemData(this.props);
        if (itemData) {
          if (typeof itemData.folder === "string") {
            e.preventDefault();
            setFolderOpen(this, itemData.folder, !isFolderOpen(this, itemData.folder));
            return;
          }
          if (typeof this.props.number === "number" && typeof itemData.realIndex === "number") {
            e.preventDefault();
            if (this.props.onClick) {
              this.props.onClick(itemData.realIndex);
            }
            return;
          }
        }
      }
      return originalHandleClick.call(this, ...args);
    };
    const originalRender = SpriteSelectorItem.prototype.render;
    SpriteSelectorItem.prototype.render = function () {
      const itemData = getItemData(this.props);
      if (itemData) {
        const originalProps = this.props;
        this.props = _objectSpread({}, this.props);
        if (typeof itemData.realName === "string") {
          this.props.name = getNameWithoutFolder(itemData.realName);
        }
        if (typeof this.props.number === "number" && typeof itemData.realIndex === "number") {
          // Convert 0-indexed to 1-indexed
          this.props.number = itemData.realIndex + 1;
        }
        if (typeof itemData.folder === "string") {
          this.props.name = itemData.folder;
          if (itemData.folderOpen) {
            this.props.details = msg("open-folder");
          } else {
            this.props.details = msg("closed-folder");
          }
          this.props.selected = false;
          this.props.number = null;
          this.props.className += " ".concat(getFolderColorClass(itemData.folder), " sa-folders-folder");
        }
        if (typeof itemData.inFolder === "string") {
          this.props.className += " ".concat(getFolderColorClass(itemData.inFolder));
        }
        const result = originalRender.call(this);
        this.props = originalProps;
        return result;
      }
      return originalRender.call(this);
    };
  };
  const patchVM = () => {
    const RenderedTarget = vm.runtime.targets[0].constructor;
    const originalInstallTargets = vm.installTargets;
    vm.installTargets = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      if (currentSpriteFolder !== null) {
        const targets = args[0];
        const wholeProject = args[2];
        if (Array.isArray(targets) && !wholeProject) {
          for (const target of targets) {
            if (target.sprite) {
              target.sprite.name = setFolderOfName(target.sprite.name, currentSpriteFolder);
            }
          }
        }
      }
      return originalInstallTargets.call(this, ...args).then(r => {
        fixTargetOrder();
        return r;
      });
    };
    const originalDuplicateSprite = vm.duplicateSprite;
    vm.duplicateSprite = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      return originalDuplicateSprite.call(this, ...args).then(r => {
        fixTargetOrder();
        return r;
      });
    };
    const originalAddCostume = RenderedTarget.prototype.addCostume;
    RenderedTarget.prototype.addCostume = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      addDefaultAssetFolderIfMissing(args[0]);
      const r = originalAddCostume.call(this, ...args);
      fixCostumeOrder(this);
      return r;
    };
    const originalAddSound = RenderedTarget.prototype.addSound;
    RenderedTarget.prototype.addSound = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      addDefaultAssetFolderIfMissing(args[0]);
      const r = originalAddSound.call(this, ...args);
      fixSoundOrder(this);
      return r;
    };
    const abstractReorder = (_ref2, itemIndex, newIndex) => {
      let {
        guiItems,
        getAll,
        set,
        rename,
        getVMItemFromGUIItem,
        zeroIndexed,
        onFolderChanged
      } = _ref2;
      // First index depends on zeroIndexed
      itemIndex = clamp(itemIndex, zeroIndexed ? 0 : 1, zeroIndexed ? guiItems.length - 1 : guiItems.length);
      newIndex = clamp(newIndex, zeroIndexed ? 0 : 1, zeroIndexed ? guiItems.length - 1 : guiItems.length);
      if (itemIndex === newIndex) {
        return false;
      }
      let assets = getAll();
      const originalAssets = getAll();
      const targetItem = guiItems[itemIndex - (zeroIndexed ? 0 : 1)];
      const itemAtNewIndex = guiItems[newIndex - (zeroIndexed ? 0 : 1)];
      const targetItemData = getItemData(targetItem);
      const itemAtNewIndexData = getItemData(itemAtNewIndex);
      if (!targetItemData || !itemAtNewIndexData) {
        console.warn("should never happen");
        return false;
      }
      const reorderingItems = typeof targetItemData.folder === "string" ? targetItem.items : [targetItem];
      const reorderingAssets = reorderingItems.map(i => getVMItemFromGUIItem(i, assets)).filter(i => i);
      if (typeof itemAtNewIndexData.realIndex === "number") {
        const newTarget = getVMItemFromGUIItem(itemAtNewIndex, assets);
        if (!newTarget || reorderingAssets.includes(newTarget)) {
          // Dragging folder into itself or target doesn't exist. Ignore.
          return false;
        }
      }
      let newFolder = null;
      assets = assets.filter(i => !reorderingAssets.includes(i));
      let realNewIndex;
      if (newIndex === (zeroIndexed ? 0 : 1)) {
        realNewIndex = zeroIndexed ? 0 : 1;
      } else if (newIndex === guiItems.length - (zeroIndexed ? 1 : 0)) {
        realNewIndex = assets.length;
      } else if (typeof itemAtNewIndexData.realIndex === "number") {
        newFolder = typeof itemAtNewIndexData.inFolder === "string" ? itemAtNewIndexData.inFolder : null;
        let newAsset = getVMItemFromGUIItem(itemAtNewIndex, assets);
        if (!newAsset) {
          console.warn("should never happen");
          return false;
        }
        realNewIndex = assets.indexOf(newAsset);
        if (newIndex > itemIndex) {
          realNewIndex++;
        }
      } else if (typeof itemAtNewIndexData.folder === "string") {
        let item;
        let offset = 0;
        if (newIndex < itemIndex) {
          // A B [C D E] F G
          //    ^----------*
          // A B C [D] E F G
          //      ^--------*
          item = itemAtNewIndex.items[0];
        } else if (itemAtNewIndexData.folderOpen) {
          // A B [C D E] F G
          //   *---^
          item = itemAtNewIndex.items[0];
          newFolder = itemAtNewIndexData.folder;
        } else {
          // A B [C] D E F G
          //   *----^
          item = itemAtNewIndex.items[itemAtNewIndex.items.length - 1];
          offset = 1;
        }
        let newAsset = getVMItemFromGUIItem(item, assets);
        if (newAsset) {
          realNewIndex = assets.indexOf(newAsset) + offset;
        } else {
          // Edge case: Dragging the first item of a list on top of the folder item
          // A B [C D E] F G
          //    ^---*
          newAsset = getVMItemFromGUIItem(item, originalAssets);
          if (!newAsset) {
            console.warn("should never happen");
            return false;
          }
          realNewIndex = originalAssets.indexOf(newAsset) + offset;
        }
      } else {
        console.warn("should never happen");
        return false;
      }
      if (typeof targetItemData.folder === "string" && newFolder !== null) {
        // Cannot drag a folder into another folder
        return;
      }
      if (realNewIndex < (zeroIndexed ? 0 : 1) || realNewIndex > assets.length) {
        console.warn("should never happen");
        return false;
      }
      assets.splice(realNewIndex, 0, ...reorderingAssets);
      set(assets);

      // If the folder has changed, update item names to match.
      if (typeof targetItemData.folder !== "string" && targetItemData.inFolder !== newFolder) {
        for (const asset of reorderingAssets) {
          const name = asset.getName ? asset.getName() : asset.name;
          rename(asset, setFolderOfName(name, newFolder));
        }
        if (onFolderChanged) {
          onFolderChanged();
        }
      }
      return true;
    };
    vm.constructor.prototype.reorderTarget = function (targetIndex, newIndex) {
      return abstractReorder({
        getAll: () => {
          return this.runtime.targets;
        },
        set: targets => {
          this.runtime.targets = targets;
          this.emitTargetsUpdate();
        },
        rename: (item, name) => {
          this.renameSprite(item.id, ensureNotReserved(name));
        },
        getVMItemFromGUIItem: (item, targets) => {
          return targets.find(i => i.id === item.id);
        },
        onFolderChanged: () => {
          this.emitWorkspaceUpdate();
        },
        guiItems: currentSpriteItems,
        zeroIndexed: false
      }, targetIndex, newIndex);
    };
    RenderedTarget.prototype.reorderCostume = function (costumeIndex, newIndex) {
      return abstractReorder({
        getAll: () => {
          return this.sprite.costumes;
        },
        set: assets => {
          this.sprite.costumes = assets;
        },
        rename: (item, name) => {
          this.renameCostume(this.sprite.costumes.indexOf(item), name);
        },
        getVMItemFromGUIItem: (item, costumes) => {
          const itemData = getItemData(item);
          return costumes.find(c => c.name === itemData.realName);
        },
        guiItems: currentAssetItems,
        zeroIndexed: true
      }, costumeIndex, newIndex);
    };
    RenderedTarget.prototype.reorderSound = function (soundIndex, newIndex) {
      return abstractReorder({
        getAll: () => {
          return this.sprite.sounds;
        },
        set: assets => {
          this.sprite.sounds = assets;
        },
        rename: (item, name) => {
          this.renameSound(this.sprite.sounds.indexOf(item), name);
        },
        getVMItemFromGUIItem: (item, sounds) => {
          const itemData = getItemData(item);
          return sounds.find(c => c.name === itemData.realName);
        },
        guiItems: currentAssetItems,
        zeroIndexed: true
      }, soundIndex, newIndex);
    };

    // Temporal bug fix for #5762
    const originalShareSoundToTarget = vm.shareSoundToTarget;
    vm.shareSoundToTarget = function () {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      const target = this.runtime.getTargetById(args[1]);
      if (!target) {
        // Avoid reading property from null
        return Promise.reject(new Error("Dropping sound into folder is not supported"));
        // This would also work no matter what we returned, probably
        // Original method returns a promise, so here too
      }
      return originalShareSoundToTarget.call(this, ...args);
    };
  };
  const patchBackpack = backpackInstance => {
    const Backpack = backpackInstance.constructor;
    Backpack.prototype.sa_loadNextItem = function () {
      if (!this.sa_queuedItems) return;
      const item = this.sa_queuedItems.pop();
      if (item) {
        let payload;
        let type;
        if (item.dragPayload) {
          if (item.url) {
            type = "SOUND";
          } else {
            type = "COSTUME";
          }
          payload = item.dragPayload;
        } else if (item.id) {
          type = "SPRITE";
          payload = item.id;
        }
        if (type && payload) {
          originalHandleDrop.call(this, {
            dragType: type,
            payload: payload
          });
        }
      }
    };
    Backpack.prototype.componentDidUpdate = function (prevProps, prevState) {
      if (!this.state.loading && prevState.loading && !this.state.error) {
        this.sa_loadNextItem();
      }
    };
    const originalHandleDrop = Backpack.prototype.handleDrop;
    Backpack.prototype.handleDrop = function () {
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }
      // When a folder is dropped into the backpack, upload all the items in the folder.
      const dragInfo = args[0];
      const folderItems = dragInfo && dragInfo.payload && dragInfo.payload.sa_folder_items;
      if (Array.isArray(folderItems)) {
        addon.tab.confirm("", msg("confirm-backpack-folder"), {
          useEditorClasses: true
        }).then(result => {
          if (!result) return;
          this.sa_queuedItems = folderItems;
          this.sa_loadNextItem();
        });
        return;
      }
      return originalHandleDrop.call(this, ...args);
    };
    backpackInstance.handleDrop = Backpack.prototype.handleDrop.bind(backpackInstance);
  };

  // Backpack
  {
    const clickListener = e => {
      if (!e.target.closest('[class*="backpack_backpack-header_"]')) {
        return;
      }
      setTimeout(() => {
        const backpackContainer = document.querySelector("[class^='backpack_backpack-list_']");
        if (!backpackContainer) {
          return;
        }
        document.removeEventListener("click", clickListener);
        const backpackInstance = getBackpackFromElement(backpackContainer);
        verifyBackpack(backpackInstance);
        patchBackpack(backpackInstance);
      });
    };
    document.addEventListener("click", clickListener, true);
  }

  // Sprite list
  {
    const spriteSelectorItemElement = await addon.tab.waitForElement("[class^='sprite-selector_sprite-wrapper']", {
      reduxCondition: state => !state.scratchGui.mode.isPlayerOnly
    });
    vm = addon.tab.traps.vm;
    reactInternalKey = Object.keys(spriteSelectorItemElement).find(i => i.startsWith(REACT_INTERNAL_PREFIX));
    const sortableHOCInstance = getSortableHOCFromElement(spriteSelectorItemElement);
    const spriteSelectorItemInstance = spriteSelectorItemElement[reactInternalKey].child.child.child.stateNode;
    verifySortableHOC(sortableHOCInstance);
    verifySpriteSelectorItem(spriteSelectorItemInstance);
    verifyVM(vm);
    patchSortableHOC(sortableHOCInstance.constructor, TYPE_SPRITES);
    patchSpriteSelectorItem(spriteSelectorItemInstance.constructor);
    sortableHOCInstance.saInitialSetup();
    patchVM();
  }

  // Costume and sound list
  {
    const selectorListItem = await addon.tab.waitForElement("[class*='selector_list-item']", {
      reduxCondition: state => state.scratchGui.editorTab.activeTabIndex !== 0 && !state.scratchGui.mode.isPlayerOnly
    });
    const sortableHOCInstance = getSortableHOCFromElement(selectorListItem);
    verifySortableHOC(sortableHOCInstance);
    patchSortableHOC(sortableHOCInstance.constructor, TYPE_ASSETS);
    sortableHOCInstance.saInitialSetup();
  }
});

/***/ }),

/***/ "./src/addons/addons/middle-click-popup/BlockRenderer.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/middle-click-popup/BlockRenderer.js ***!
  \***************************************************************/
/*! exports provided: getBlockHeight, BlockComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockHeight", function() { return getBlockHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockComponent", function() { return BlockComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderBlock; });
/* harmony import */ var _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockTypeInfo.js */ "./src/addons/addons/middle-click-popup/BlockTypeInfo.js");
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module.js */ "./src/addons/addons/middle-click-popup/module.js");
/**
 * @file Contains the code for rendering the blocks in the middle click dropdown.
 * Main function is {@link renderBlock} which takes in a block and returns a renderer SVG element.
 * @author Tacodiva
 */



const SVG_NS = "http://www.w3.org/2000/svg";
const BlockShapes = {
  // eg (my variable)
  Round: {
    padding: 12,
    minWidth: 20,
    backgroundPath: width => "m -12 -20 m 20 0 h ".concat(width - 16, " a 20 20 0 0 1 0 40 H 8 a 20 20 0 0 1 0 -40 z"),
    /**
     * 'Snuggling' is my wholesome term for when a block can sit extra close to a block
     * of the same shape as it. Take a look at the blocks ( ( "" + "" ) - "" ) and
     * ( < "" = "" > - "" ), observe how there's a lot more blank space in the outer
     * block in the second example, this is because in the first example the '+' block
     * can snuggle with the '-' block.
     */
    snugglePadding: 0,
    get snuggleWith() {
      // Don't feel bad BlockShapes.Round, I only snuggle with myself too :_(
      return [BlockShapes.Round];
    }
  },
  // eg <() = ()>
  Boolean: {
    padding: 20,
    minWidth: 20,
    backgroundPath: width => "m -20 -20 m 20 0 h ".concat(width, " l 20 20 l -20 20 H 0 l -20 -20 l 20 -20 z"),
    snugglePadding: 0,
    get snuggleWith() {
      return [BlockShapes.Boolean];
    }
  },
  // Square dropdowns like variables
  SquareInput: {
    padding: 8,
    minWidth: 20,
    backgroundPath: width => "m -2 -16 h ".concat(width + 4, " a 4 4 0 0 1 4 4 V 12 a 4 4 0 0 1 -4 4 H -2 a 4 4 0 0 1 -4 -4 V -12 a 4 4 0 0 1 4 -4")
  },
  // eg show
  Stack: {
    padding: 8,
    minWidth: 60,
    backgroundPath: width => "m -8 -20 A 4 4 0 0 1 -4 -24 H 4 c 2 0 3 1 4 2 l 4 4 c 1 1 2 2 4 2 h 12 c 2 0 3 -1 4 -2 l 4 -4 C 37 -23 38 -24 40 -24 H ".concat(width, " a 4 4 0 0 1 4 4 v 40 a 4 4 0 0 1 -4 4 H 40 c -2 0 -3 1 -4 2 l -4 4 c -1 1 -2 2 -4 2 h -12 c -2 0 -3 -1 -4 -2 l -4 -4 c -1 -1 -2 -2 -4 -2 H -4 a 4 4 0 0 1 -4 -4 z")
  },
  // eg when I start as a clone
  Hat: {
    padding: 8,
    minWidth: 60,
    backgroundPath: width => "m -8 -20 A 4 4 0 0 1 -4 -24 H ".concat(width, " a 4 4 0 0 1 4 4 v 40 a 4 4 0 0 1 -4 4 H 40 c -2 0 -3 1 -4 2 l -4 4 c -1 1 -2 2 -4 2 h -12 c -2 0 -3 -1 -4 -2 l -4 -4 c -1 -1 -2 -2 -4 -2 H -4 a 4 4 0 0 1 -4 -4 z")
  },
  // eg delete this clone
  End: {
    padding: 8,
    minWidth: 60,
    backgroundPath: width => "m -8 -20 A 4 4 0 0 1 -4 -24 H 4 c 2 0 3 1 4 2 l 4 4 c 1 1 2 2 4 2 h 12 c 2 0 3 -1 4 -2 l 4 -4 C 37 -23 38 -24 40 -24 H ".concat(width, " a 4 4 0 0 1 4 4 v 40 a 4 4 0 0 1 -4 4 H -4 a 4 4 0 0 1 -4 -4 z")
  },
  // The white oval for text or number inputs
  TextInput: {
    padding: 12,
    minWidth: 16,
    backgroundPath: width => "m -12 -16 m 16 0 h ".concat(width - 8, " a 16 16 0 0 1 0 32 H 4 a 16 16 0 0 1 0 -32 z"),
    snugglePadding: 4,
    get snuggleWith() {
      return [BlockShapes.Round];
    }
  },
  BooleanInput: {
    padding: 16,
    minWidth: 16,
    backgroundPath: width => "m 0 -16 h ".concat(width, " l 16 16 l -16 16 h -16 l -16 -16 l 16 -16 z"),
    snugglePadding: 6,
    get snuggleWith() {
      return [BlockShapes.Boolean];
    }
  },
  HorizontalBlock: {
    padding: 16,
    minWidth: 45,
    backgroundPath: width => "M -4 -20 a 4 4 0 0 1 4 -4 H ".concat(width + 8, " a 4 4 0 0 1 4 4 v 2 c 0 2 -1 3 -2 4 l -4 4 c -1 1 -2 2 -2 4 v 12 c 0 2 1 3 2 4 l 4 4 c 1 1 2 2 2 4 v 2 a 4 4 0 0 1 -4 4 H 0 a 4 4 0 0 1 -4 -4 v -2 c 0 -2 -1 -3 -2 -4 l -4 -4 c -1 -1 -2 -2 -2 -4 v -12 c 0 -2 1 -3 2 -4 l 4 -4 c 1 -1 2 -2 2 -4 z")
  },
  HorizontalBlockEnd: {
    padding: 16,
    minWidth: 45,
    backgroundPath: width => "M -4 -20 a 4 4 0 0 1 4 -4 H ".concat(width + 8, " a 4 4 0 0 1 4 4 V 20 a 4 4 0 0 1 -4 4 H 0 a 4 4 0 0 1 -4 -4 v -2 c 0 -2 -1 -3 -2 -4 l -4 -4 c -1 -1 -2 -2 -2 -4 v -12 c 0 -2 1 -3 2 -4 l 4 -4 c 1 -1 2 -2 2 -4 z")
  }
};

/**
 * Gets the block shape info from {@link BlockShapes} given a {@link BlockShape}.
 * @param {BlockShape} shape
 */
function getShapeInfo(shape, isVertical) {
  if (shape === _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Round) return BlockShapes.Round;
  if (shape === _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Boolean) return BlockShapes.Boolean;
  if (shape === _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Stack) return isVertical ? BlockShapes.Stack : BlockShapes.HorizontalBlock;
  if (shape === _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Hat) return BlockShapes.Hat;
  if (shape === _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].End) return isVertical ? BlockShapes.End : BlockShapes.HorizontalBlockEnd;
  throw new Error(shape);
}

/**
 * @param {BlockInstance} block
 * @returns {number}
 */
function getBlockHeight(block) {
  switch (block.typeInfo.shape) {
    case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].End:
    case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Hat:
    case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Stack:
      return 62;
    case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Boolean:
    case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Round:
      return 48;
  }
  return 0;
}
const BLOCK_ELEMENT_SPACING = 8;

/**
 * A part of a block. Think of these like the different parts in the 'make a block' menu.
 */
class BlockComponent {
  constructor(element, padding, width, snuggleWith, snugglePadding) {
    this.dom = element;
    this.padding = padding;
    this.width = width;
    this.snuggleWith = snuggleWith;
    this.snugglePadding = snugglePadding;
  }
}

/**
 * Creates a BlockComponent with some text. Like the 'label' element in the make a block menu.
 * @param {string} text The contents of the component.
 * @param {SVGElement} container The element to add the text to.
 * @returns {BlockComponent} The BlockComponent.
 */
function createTextComponent(text, fillVar, container) {
  let textElement = container.appendChild(document.createElementNS(SVG_NS, "text"));
  textElement.setAttribute("class", "blocklyText");
  textElement.style.fill = "var(".concat(fillVar, ")");
  textElement.setAttribute("dominant-baseline", "middle");
  textElement.setAttribute("dy", 1);
  textElement.appendChild(document.createTextNode(text));
  return new BlockComponent(textElement, 0, Object(_module_js__WEBPACK_IMPORTED_MODULE_1__["getTextWidth"])(textElement));
}

/**
 * Creates a DOM element to hold all the contents of a block.
 * A block could be the top level block, or it could be a block like (() + ()) that's inside
 * another block.
 * @returns {SVGElement} The SVGElement which will contain all the block's components.
 */
function createBlockContainer() {
  let container = document.createElementNS(SVG_NS, "g");
  let background = document.createElementNS(SVG_NS, "path");
  background.setAttribute("class", "blocklyPath");
  container.appendChild(background);
  return container;
}

/**
 * Creates a block component from a container containing all its components.
 * @param {SVGElement} container The block container, created by {@link createBlockContainer}.
 * @param {object} shape An object containing information of the shape of the block to be created. From the {@link BlockShapes} object.
 * @param {string|null} categoryClass The category of the block, used for filling the background.
 * @param {string} fill
 * @param {string} stroke
 * @param {number} width The width of the background of the block.
 */
function createBlockComponent(container, shape, categoryClass, fill, stroke, width) {
  if (width < shape.minWidth) width = shape.minWidth;
  container.classList.add("sa-block-color");
  if (categoryClass) {
    container.classList.add(categoryClass);
  }
  const background = container.children[0];
  let style = "";
  if (fill) style += "fill: var(".concat(fill, ");");
  if (stroke) style += "stroke: var(".concat(stroke, ");");
  background.setAttribute("style", style);
  background.setAttribute("d", shape.backgroundPath(width));
  return new BlockComponent(container, shape.padding, width + shape.padding * 2, shape.snuggleWith, shape.snugglePadding);
}
function createBackedTextedComponent(text, container, shape, categoryClass, fill, stroke, textVar) {
  const blockContainer = createBlockContainer();
  container.appendChild(blockContainer);
  const textElement = createTextComponent(text, textVar, blockContainer);
  if (textElement.width < shape.minWidth) {
    textElement.dom.setAttribute("x", (shape.minWidth - textElement.width) / 2);
  }
  const blockElement = createBlockComponent(blockContainer, shape, categoryClass, fill, stroke, textElement.width);
  return blockElement;
}

/**
 * Renders a block, with the center of it's leftmost side located at 0, 0.
 * @param {BlockInstance} block
 * @param {SVGElement} container
 * @returns {BlockComponent} The rendered block
 */
function renderBlock(block, container) {
  var blockComponent = _renderBlock(block, container, block.typeInfo.category, true);
  blockComponent.dom.classList.add("sa-block-color");
  blockComponent.dom.setAttribute("transform", "translate(".concat(blockComponent.padding, ", 0)"));
  return blockComponent;
}

/**
 * Renders a block, with the center of it's leftmost side located at 0, 0.
 * @param {BlockInstance} block
 * @param {SVGAElement} container
 * @param {string} parentCategory The category of this blocks parent. If no parent, than this blocks category.
 * @returns {BlockComponent} The rendered component.
 */
function _renderBlock(block, container, parentCategory, isVertical) {
  const blockContainer = container.appendChild(createBlockContainer());
  const shape = getShapeInfo(block.typeInfo.shape, isVertical);
  const category = block.typeInfo.category;
  const COLOR_CLASSES = ["motion", "looks", "sounds", "events", "control", "sensing", "operators", "data", "data-lists", "list", "more", "pen", "addon-custom-block"];
  const categoryClass = COLOR_CLASSES.includes(category.name) ? "sa-block-color-" + category.name : null;
  let xOffset = 0;
  let inputIdx = 0;
  for (let partIdx = 0; partIdx < block.typeInfo.parts.length; partIdx++) {
    const blockPart = block.typeInfo.parts[partIdx];
    let component;
    if (typeof blockPart === "string") {
      component = createTextComponent(blockPart, "--sa-block-text", blockContainer);
    } else {
      const blockInput = block.inputs[inputIdx++];
      if (blockInput instanceof _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInstance"]) {
        component = _renderBlock(blockInput, blockContainer, block.typeInfo.category, false);
      } else if (blockPart instanceof _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputEnum"]) {
        if (blockPart.isRound) {
          component = createBackedTextedComponent(blockInput.string, blockContainer, BlockShapes.TextInput, categoryClass, "--sa-block-background-secondary, ".concat(category.colorSecondary), "--sa-block-background-tertiary, ".concat(category.colorTertiary), "--sa-block-text");
        } else {
          component = createBackedTextedComponent(blockInput.string, blockContainer, BlockShapes.SquareInput, categoryClass, "--sa-block-background-primary, ".concat(category.colorPrimary), "--sa-block-background-tertiary, ".concat(category.colorTertiary), "--sa-block-text");
        }
      } else if (blockPart instanceof _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputBoolean"]) {
        component = createBackedTextedComponent("", blockContainer, BlockShapes.BooleanInput, categoryClass, "--sa-block-field-background, ".concat(category.colorTertiary), "--sa-block-field-background, ".concat(category.colorTertiary), "--sa-block-text");
      } else if (blockPart instanceof _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputBlock"]) {
        component = createBackedTextedComponent("", blockContainer, BlockShapes.HorizontalBlock, categoryClass, "--sa-block-field-background, ".concat(category.colorTertiary), "--sa-block-field-background, ".concat(category.colorTertiary), "--sa-block-text");
      } else {
        var _ref, _blockInput$toString;
        component = createBackedTextedComponent((_ref = (_blockInput$toString = blockInput === null || blockInput === void 0 ? void 0 : blockInput.toString()) !== null && _blockInput$toString !== void 0 ? _blockInput$toString : blockPart.defaultValue) !== null && _ref !== void 0 ? _ref : "", blockContainer, BlockShapes.TextInput, categoryClass, "--sa-block-input-color, ".concat(category.colorColor), "--sa-block-background-tertiary, ".concat(category.colorTertiary), "--sa-block-input-text");
        component.dom.classList.add("blocklyNonEditableText");
      }
    }
    let xTranslation = xOffset + component.padding;
    if (partIdx === 0 || partIdx === block.typeInfo.parts.length - 1) {
      if (component.snuggleWith && component.snuggleWith.indexOf(shape) !== -1) {
        const positionDelta = component.snugglePadding - component.padding;
        component.width += positionDelta;
        if (partIdx === 0) {
          xTranslation += positionDelta;
        }
      }
    }
    component.dom.setAttribute("transform", "translate(".concat(xTranslation, ", 0)"));
    xOffset += BLOCK_ELEMENT_SPACING + component.width;
  }
  return createBlockComponent(blockContainer, shape, categoryClass, "--sa-block-background-primary, ".concat(category.colorPrimary), "--sa-block-background-tertiary, ".concat(category.colorTertiary), xOffset - BLOCK_ELEMENT_SPACING);
}

/***/ }),

/***/ "./src/addons/addons/middle-click-popup/BlockTypeInfo.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/middle-click-popup/BlockTypeInfo.js ***!
  \***************************************************************/
/*! exports provided: BlockInputType, BlockInput, BlockInputRound, BlockInputString, BlockInputNumber, BlockInputBoolean, BlockInputColour, BlockInputEnum, BlockInputBlock, BlockInstance, BlockShape, BlockTypeInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInputType", function() { return BlockInputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInput", function() { return BlockInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInputRound", function() { return BlockInputRound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInputString", function() { return BlockInputString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInputNumber", function() { return BlockInputNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInputBoolean", function() { return BlockInputBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInputColour", function() { return BlockInputColour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInputEnum", function() { return BlockInputEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInputBlock", function() { return BlockInputBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInstance", function() { return BlockInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockShape", function() { return BlockShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockTypeInfo", function() { return BlockTypeInfo; });
var _BlockShape;
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @file Contains the code for enumerating the different types of blocks in a workspace,
 * and provides a more friendly way to create instances blocks with some inputs.
 */

/**
 * A numeric value to represent the type of an {@link BlockInput}
 * @readonly
 * @enum {number}
 */
const BlockInputType = {
  STRING: 0,
  NUMBER: 1,
  BOOLEAN: 2,
  COLOUR: 3,
  ENUM: 4,
  BLOCK: 5
};

/**
 * @abstract
 */
class BlockInput {
  /**
   * @param {BlockInputType} type
   * @param {number} inputIdx
   * @param {number} fieldIdx
   */
  constructor(type, inputIdx, fieldIdx) {
    if (this.constructor === BlockInput) throw new Error("Abstract classes can't be instantiated.");
    /** @type {BlockInputType} */
    this.type = type;
    /** @type {number} The index of this input in the workspace version of the block's input array.  */
    this.inputIdx = inputIdx;
    /**
     * The index of this input in the workspace version of the block's field array.
     * The special case of -1 means that in the workspace version, this input is inside a sub-block,
     * that has been abstracted away.
     *  @type {number}
     */
    this.fieldIdx = fieldIdx;
    /** @type {*} The default value to set this input to, or null to not set it to anything. */
    this.defaultValue = null;
  }

  /**
   * Sets the field this input refers to on a block to a value.
   * @param {BlockInstance} block
   * @param {*} value
   * @abstract
   */
  setValue(block, value) {
    throw new Error("Sub-class must override abstract method.");
  }

  /**
   * Gets the input this block input refers to on block.
   * @param {BlockInstance} block
   * @returns {*}
   * @protected
   */
  getInput(block) {
    return block.inputList[this.inputIdx];
  }

  /**
   * Gets the field this block input refers to on block.
   * @param {BlockInstance} block
   * @returns {*}
   * @protected
   */
  getField(block) {
    if (this.fieldIdx === -1) {
      return this.getInput(block).connection.targetBlock().inputList[0].fieldRow[0];
    } else {
      return this.getInput(block).fieldRow[this.fieldIdx];
    }
  }
}

/**
 * The base class for any round input.
 * @abstract
 */
class BlockInputRound extends BlockInput {
  constructor(type, inputIdx, fieldIdx, defaultValue) {
    super(type, inputIdx, fieldIdx);
    if (this.constructor === BlockInputRound) throw new Error("Abstract classes can't be instantiated.");
    this.defaultValue = defaultValue;
  }
  setValue(block, value) {
    if (value instanceof BlockInstance) {
      const subblock = value.createWorkspaceForm();
      if (!subblock.outputConnection) throw new Error('Cannot put block "' + subblock.typeInfo.id + '" into a round type input.');
      subblock.outputConnection.connect(this.getInput(block).connection);
    } else {
      this.getField(block).setValue(this._toFieldValue(value));
    }
  }

  /**
   * Converts a value passed in to setValue to a value we can set the block's field to.
   * @param {*} value
   * @protected
   */
  _toFieldValue(value) {
    throw new Error("Sub-class must override abstract method.");
  }
}
class BlockInputString extends BlockInputRound {
  constructor(inputIdx, fieldIdx, defaultValue) {
    super(BlockInputType.STRING, inputIdx, fieldIdx, defaultValue);
  }
  _toFieldValue(value) {
    const type = typeof value;
    if (type === "number") return value;
    if (type === "string") return value;
    throw new Error("Cannot set round type input to value of type " + type);
  }
}
class BlockInputNumber extends BlockInputRound {
  constructor(inputIdx, fieldIdx, defaultValue) {
    super(BlockInputType.NUMBER, inputIdx, fieldIdx, defaultValue);
  }
  _toFieldValue(value) {
    const type = typeof value;
    if (type === "number") return value;
    if (type === "string") {
      if (value.length === 0) return value;
      const number = parseFloat(value);
      if (isNaN(number)) throw new Error('Cannot set numeric type input to string "' + value + '".');
      return value;
    }
    throw new Error("Cannot set round type input to value of type " + type);
  }
}
class BlockInputBoolean extends BlockInput {
  constructor(inputIdx, fieldIdx) {
    super(BlockInputType.BOOLEAN, inputIdx, fieldIdx);
  }
  setValue(block, value) {
    if (value instanceof BlockInstance) {
      const subblock = value.createWorkspaceForm();
      if (!subblock.outputConnection || value.typeInfo.shape !== BlockShape.Boolean) throw new Error('Cannot put block "' + value.typeInfo.id + '" into a boolean type input.');
      subblock.outputConnection.connect(this.getInput(block).connection);
    } else {
      throw new Error("Boolean type inputs can only contain blocks.");
    }
  }
}
class BlockInputColour extends BlockInput {
  constructor(inputIdx, fieldIdx) {
    super(BlockInputType.COLOUR, inputIdx, fieldIdx);
  }
  setValue(block, value) {
    if (typeof value !== "string") throw new Error("Cannot set color type input to value of type " + typeof type);
    if (!value.match(/^#[0-9a-fA-F]{6}$/)) throw new Error('Invalid color "' + value + '".');
    this.getField(block).setValue(value);
  }
}

/**
 * @typedef BlockInputEnumOption
 * @property {string} value The internal name of this input option
 * @property {string} string The localized name of this input option.
 */

/**
 * A block input that can be one of a list of values.
 * Usually represented by a dropdown menu in Scratch.
 */
class BlockInputEnum extends BlockInput {
  /**
   * @param {Array} options
   * @param {number} inputIdx
   * @param {number} fieldIdx
   */
  constructor(options, inputIdx, fieldIdx, isRound) {
    super(BlockInputType.ENUM, inputIdx, fieldIdx);
    /** @type {BlockInputEnumOption[]} */
    this.values = [];
    for (let i = 0; i < options.length; i++) {
      if (typeof options[i][1] === "string" && BlockInputEnum.INVALID_VALUES.indexOf(options[i][1]) === -1) {
        this.values.push({
          value: options[i][1],
          string: options[i][0].replace(/\u00a0/g, " ")
        });
      }
    }
    this.isRound = isRound;
    this.defaultValue = this.values[0];
  }

  /**
   * @param {BlockInputEnumOption} value
   */
  setValue(block, value) {
    if (this.isRound && value instanceof BlockInstance) {
      value.createWorkspaceForm().outputConnection.connect(this.getInput(block).connection);
    } else {
      if (this.values.indexOf(value) === -1) throw new Error("Invalid enum value. Expected item from the values list.");
      this.getField(block).setValue(value.value);
    }
  }
}

/**
 * A block input that is a stack of blocks.
 * The 'if' block has a single block input, the 'if else' block has two block inputs.
 */
_defineProperty(BlockInputEnum, "INVALID_VALUES", ["DELETE_VARIABLE_ID", "RENAME_VARIABLE_ID", "NEW_BROADCAST_MESSAGE_ID", "NEW_BROADCAST_MESSAGE_ID",
// editor-searchable-dropdowns compatibility
"createGlobalVariable", "createLocalVariable", "createGlobalList", "createLocalList", "createBroadcast",
// rename-broadcasts compatibility
"RENAME_BROADCAST_MESSAGE_ID"]);
class BlockInputBlock extends BlockInput {
  constructor(inputIdx, fieldIdx) {
    super(BlockInputType.BLOCK, inputIdx, fieldIdx);
  }
  setValue(block, value) {
    if (value instanceof BlockInstance) {
      const subblock = value.createWorkspaceForm();
      if (!subblock.previousConnection || !value.typeInfo.shape.canStackUp) throw new Error('Cannot put block "' + value.typeInfo.id + '" into a block type input.');
      subblock.previousConnection.connect(this.getInput(block).connection);
    } else {
      throw new Error("Block type inputs can only contain blocks.");
    }
  }
}

/**
 * Because everyone was thinking "You know what Scratch really needs, ANOTHER way to represent blocks!"
 *
 * Another way to represent a Scratch block.
 */
class BlockInstance {
  constructor(typeInfo) {
    /** @type {BlockTypeInfo} */
    this.typeInfo = typeInfo;
    /** @type {Array} */
    for (var _len = arguments.length, inputs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      inputs[_key - 1] = arguments[_key];
    }
    this.inputs = inputs;
    for (let i = 0; i < this.typeInfo.inputs.length; i++) {
      if (this.inputs[i] == null) this.inputs[i] = this.typeInfo.inputs[i].defaultValue;
    }
  }

  /**
   * Creates a real Scratch block from this imaginary representation.
   * @returns {*} A 'workspace form' block.
   */
  createWorkspaceForm() {
    if (this.typeInfo.id === "control_stop") {
      this.typeInfo.domForm.querySelector("mutation").setAttribute("hasnext", "" + (this.inputs[0].value === "other scripts in sprite"));
    }
    const block = this.typeInfo.Blockly.Xml.domToBlock(this.typeInfo.domForm, this.typeInfo.workspace);
    for (let i = 0; i < this.typeInfo.inputs.length; i++) {
      const inputValue = this.inputs[i];
      if (inputValue != null) this.typeInfo.inputs[i].setValue(block, inputValue);
    }
    return block;
  }
}

/**
 * An enum for the different shapes of blocks.
 * Contains information on what each type of block can do.
 */
class BlockShape {
  static getBlockShape(workspaceBlock) {
    if (workspaceBlock.edgeShape_ === 2) {
      return BlockShape.Round;
    } else if (workspaceBlock.edgeShape_ === 1) {
      return BlockShape.Boolean;
    } else if (workspaceBlock.startHat_) {
      return BlockShape.Hat;
    } else if (!workspaceBlock.nextConnection) {
      return BlockShape.End;
    } else {
      return BlockShape.Stack;
    }
  }
  constructor(canStackUp, canStackDown, canBeRound) {
    /** @type {boolean} Can blocks be stacked above this block? */
    this.canStackUp = canStackUp;
    /** @type {boolean} Can blocks be stacked below this block? */
    this.canStackDown = canStackDown;
    /** @type {boolean} Does this block fit into a round hole? */
    this.canBeRound = canBeRound;
  }
}

/**
 * @typedef BlockCategory
 * @property {string} name
 * @property {string} colorPrimary
 * @property {string} colorSecondary
 * @property {string} colorTertiary
 */

/**
 * A type of Scratch block, like 'move () steps'. Every instance of the 'move () steps'
 * block shares this type info.
 */
_BlockShape = BlockShape;
_defineProperty(BlockShape, "Round", new _BlockShape(false, false, true));
_defineProperty(BlockShape, "Boolean", new _BlockShape(false, false, true));
_defineProperty(BlockShape, "Hat", new _BlockShape(false, true, false));
_defineProperty(BlockShape, "End", new _BlockShape(true, false, false));
_defineProperty(BlockShape, "Stack", new _BlockShape(true, true, false));
class BlockTypeInfo {
  /**
   * @param {*} block Block in workspace form
   * @param {*} vm
   * @returns {BlockCategory} The block's category
   */
  static getBlockCategory(block, vm) {
    let name;
    if (block.type === "procedures_call") {
      if (vm.getAddonBlock(block.getProcCode())) name = "addon-custom-block";else name = "more";
    } else if (block.usesDefaultExtensionColors) name = "pen";else if (block.type === "sensing_of") name = "sensing";else if (block.type === "event_whenbackdropswitchesto") name = "events";else name = block.category_;
    return {
      name,
      colorPrimary: block.colour_,
      colorSecondary: block.colourSecondary_,
      colorTertiary: block.colourTertiary_
    };
  }

  /**
   * Enumerates all the different types of blocks, given a workspace.
   * @param {Blockly} Blockly
   * @param {*} vm
   * @param {*} workspace
   * @param {(string) => string} locale The translations used for converting icons into text
   * @returns {BlockTypeInfo[]}
   */
  static getBlocks(Blockly, vm, workspace, locale) {
    var _workspace$getToolbox;
    const flyoutWorkspace = (_workspace$getToolbox = workspace.getToolbox()) === null || _workspace$getToolbox === void 0 ? void 0 : _workspace$getToolbox.flyout_.getWorkspace();
    if (!flyoutWorkspace) return [];
    const blocks = [];
    const flyoutDom = Blockly.Xml.workspaceToDom(flyoutWorkspace);
    const flyoutDomBlockMap = {};
    for (const blockDom of flyoutDom.children) {
      if (blockDom.tagName === "BLOCK") {
        let id = blockDom.getAttribute("id");
        flyoutDomBlockMap[id] = blockDom;
      }
    }
    for (const workspaceBlock of flyoutWorkspace.getTopBlocks()) {
      blocks.push(...BlockTypeInfo._createBlocks(workspace, vm, Blockly, locale, workspaceBlock, flyoutDomBlockMap[workspaceBlock.id]));
    }
    return blocks;
  }
  static _createBlocks(workspace, vm, Blockly, locale, workspaceForm, domForm) {
    let parts = [];
    let inputs = [];
    const addInput = input => {
      parts.push(input);
      inputs.push(input);
    };
    const addFieldInputs = (field, inputIdx, fieldIdx) => {
      if (field.className_ === "blocklyText blocklyDropdownText") {
        const options = field.getOptions();
        addInput(new BlockInputEnum(options, inputIdx, fieldIdx, fieldIdx === -1));
      } else if (field instanceof Blockly.FieldImage) {
        switch (field.src_.split("/").pop()) {
          case "green-flag.svg":
            parts.push(locale("/_general/blocks/green-flag"));
            break;
          case "rotate-right.svg":
            parts.push(locale("/_general/blocks/clockwise"));
            break;
          case "rotate-left.svg":
            parts.push(locale("/_general/blocks/anticlockwise"));
            break;
        }
      } else {
        if (!field.argType_) {
          if (field.getText().trim().length !== 0) parts.push(field.getText());
        } else if (field.argType_[0] === "colour") {
          addInput(new BlockInputColour(inputIdx, fieldIdx));
        } else if (field.argType_[1] === "number") {
          addInput(new BlockInputNumber(inputIdx, fieldIdx, field.text_));
        } else {
          addInput(new BlockInputString(inputIdx, fieldIdx, field.text_));
        }
      }
    };
    for (let inputIdx = 0; inputIdx < ((_workspaceForm$inputL = workspaceForm.inputList) === null || _workspaceForm$inputL === void 0 ? void 0 : _workspaceForm$inputL.length); inputIdx++) {
      var _workspaceForm$inputL;
      const input = workspaceForm.inputList[inputIdx];
      for (let fieldIdx = 0; fieldIdx < input.fieldRow.length; fieldIdx++) {
        addFieldInputs(input.fieldRow[fieldIdx], inputIdx, fieldIdx);
      }
      if (input.connection) {
        const innerBlock = input.connection.targetBlock();
        if (innerBlock) {
          if (innerBlock.inputList.length !== 1 || innerBlock.inputList[0].fieldRow.length !== 1) throw new Error("This should never happen.");
          let innerField = innerBlock.inputList[0].fieldRow[0];
          addFieldInputs(innerField, inputIdx, -1);
        } else {
          if (input.outlinePath) {
            addInput(new BlockInputBoolean(inputIdx, -1));
          } else {
            addInput(new BlockInputBlock(inputIdx, -1));
          }
        }
      }
    }
    if (workspaceForm.id === "of") {
      let blocks = [];
      let baseVarInputIdx, baseTargetInputIdx;
      // In most languages, the 'of' block inputs are: [variable] of [sprite], and in others
      // it's the opposite (sprite then variable). We can tell that the variable comes first
      // if the first input is round.
      if (inputs[0].isRound) {
        baseVarInputIdx = 1;
        baseTargetInputIdx = 0;
      } else {
        baseVarInputIdx = 0;
        baseTargetInputIdx = 1;
      }
      let baseVarInput = inputs[baseVarInputIdx];
      let baseTargetInput = inputs[baseTargetInputIdx];
      const baseVarPartIdx = parts.indexOf(baseVarInput);
      const baseTargetPartIdx = parts.indexOf(baseTargetInput);

      // Adapted from https://github.com/scratchfoundation/scratch-gui/blob/cc6e6324064493cf1788f3c7c0ff31e4057964ee/src/lib/blocks.js#L230
      const stageOptions = [[Blockly.Msg.SENSING_OF_BACKDROPNUMBER, "backdrop #"], [Blockly.Msg.SENSING_OF_BACKDROPNAME, "backdrop name"], [Blockly.Msg.SENSING_OF_VOLUME, "volume"]];
      const spriteOptions = [[Blockly.Msg.SENSING_OF_XPOSITION, "x position"], [Blockly.Msg.SENSING_OF_YPOSITION, "y position"], [Blockly.Msg.SENSING_OF_POSITION, 'position'], [Blockly.Msg.SENSING_OF_DIRECTION, 'direction'], [Blockly.Msg.SENSING_OF_ISVISIBLE, 'visibility'], [Blockly.Msg.SENSING_OF_COSTUMENUMBER, "costume #"], [Blockly.Msg.SENSING_OF_COSTUMENAME, "costume name"], [Blockly.Msg.SENSING_OF_SIZE, "size"], [Blockly.Msg.SENSING_OF_VOLUME, "volume"]];
      for (const targetInput of baseTargetInput.values) {
        let options;
        const isStage = targetInput.value === "_stage_";
        if (isStage) {
          const stageVariableOptions = vm.runtime.getTargetForStage().getAllVariableNamesInScopeByType("");
          options = stageVariableOptions.map(variable => [variable, variable]).concat(stageOptions);
        } else {
          const sprite = vm.runtime.getSpriteTargetByName(targetInput.value);
          const spriteVariableOptions = sprite.getAllVariableNamesInScopeByType("", true);
          options = spriteVariableOptions.map(variable => [variable, variable]).concat(spriteOptions);
        }
        const ofInputs = [];
        ofInputs[baseVarInputIdx] = new BlockInputEnum(options, baseVarInput.inputIdx, baseVarInput.fieldIdx, false);
        ofInputs[baseTargetInputIdx] = new BlockInputEnum([[targetInput.string, targetInput.value]], baseTargetInput.inputIdx, baseTargetInput.fieldIdx, isStage);
        const ofParts = [...parts];
        ofParts[baseVarPartIdx] = ofInputs[baseVarInputIdx];
        ofParts[baseTargetPartIdx] = ofInputs[baseTargetInputIdx];
        blocks.push(new BlockTypeInfo(workspace, Blockly, vm, workspaceForm, domForm, ofParts, ofInputs));
      }
      return blocks;
    } else if (workspaceForm.id === "control_stop") {
      // This block is special because when "other scripts in sprite" is selected the block
      //  needs to be BlockShape.End.
      const oldInput = inputs[0];
      const otherScriptsOptionIdx = oldInput.values.findIndex(option => option.string === "other scripts in sprite");
      const otherScriptsOption = oldInput.values.splice(otherScriptsOptionIdx, 1)[0];
      const newInput = new BlockInputEnum([[otherScriptsOption.string, otherScriptsOption.value]], oldInput.inputIdx, oldInput.fieldIdx, oldInput.isRound);
      const newBlockParts = [...parts];
      newBlockParts[parts.indexOf(oldInput)] = newInput;
      return [new BlockTypeInfo(workspace, Blockly, vm, workspaceForm, domForm, parts, inputs, BlockShape.End), new BlockTypeInfo(workspace, Blockly, vm, workspaceForm, domForm, newBlockParts, [newInput], BlockShape.Stack)];
    } else {
      return [new BlockTypeInfo(workspace, Blockly, vm, workspaceForm, domForm, parts, inputs)];
    }
  }
  constructor(workspace, Blockly, vm, workspaceForm, domForm, parts, inputs, shape) {
    /** @type {string} */
    this.id = workspaceForm.id;
    this.workspaceForm = workspaceForm;
    this.domForm = domForm;
    /** @type {BlockShape} */
    this.shape = shape !== null && shape !== void 0 ? shape : BlockShape.getBlockShape(this.workspaceForm);
    /** @type {BlockCategory} */
    this.category = BlockTypeInfo.getBlockCategory(this.workspaceForm, vm);
    this.workspace = workspace;
    this.Blockly = Blockly;

    /**
     * A list of all the 'parts' of this block. Each part is either an instance
     * of BlockInput or a string for some text which is a part of a block.
     *
     * For example, for the 'say' block, the first element of the array would be
     * the string 'say', and the second element would be a BlockInput of type
     * BlockInputString.
     * @type {(BlockInput | string)[]}
     */
    this.parts = parts;
    /**
     * A list of all this block's inputs. The same as this.parts, but with the
     * strings omitted.
     * @type {BlockInput[]}
     */
    this.inputs = inputs;
  }

  /**
   * Creates a block of this type with the given inputs
   * @param  {...any} inputs
   * @returns {BlockInstance}
   */
  createBlock() {
    for (var _len2 = arguments.length, inputs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      inputs[_key2] = arguments[_key2];
    }
    return new BlockInstance(this, ...inputs);
  }
}

/***/ }),

/***/ "./src/addons/addons/middle-click-popup/WorkspaceQuerier.js":
/*!******************************************************************!*\
  !*** ./src/addons/addons/middle-click-popup/WorkspaceQuerier.js ***!
  \******************************************************************/
/*! exports provided: QueryResult, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryResult", function() { return QueryResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkspaceQuerier; });
/* harmony import */ var _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockTypeInfo.js */ "./src/addons/addons/middle-click-popup/BlockTypeInfo.js");
var _TokenTypeBlank, _TokenTypeColor;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @file Contains all the logic for the parsing of queries by the {@link WorkspaceQuerier}.
 * I'm really sorry if somebody other than me ever has to debug this.
 * Wish you luck <3
 *
 * Once you *think* you understand the function of the major classes, read the docs on
 * {@link WorkspaceQuerier._createTokenGroups} for some more specifics on the algorithm works,
 * and to achieve maximum enlightenment.
 *
 * @author Tacodiva
 */



/**
 *
 * A token is a part of a query that is interpreted in a specific way.
 *
 * In the query 'say 1 = Hello World', the base tokens are 'say', '1', '=, and 'Hello World'.
 * Each token contains where in the query it is located and what {@link TokenType} it is.
 *
 * Sometimes the same section of a query has multiple tokens because there are different
 * interpretations of what type of token it is. For example, imagine you had a variable named
 * 'x'. The query 'set x to 10', is ambiguous because you could be referring to the motion block
 * `set x to ()` or the data block `set [x] to ()`. This ambiguity results in two different
 * tokens being creating for 'x', one is 'set x to' referring to the motion block, and the other
 * is just 'x', referring to the variable.
 *
 * Calling this a 'token' is somewhat misleading, often language interpreters will have a 'parse tree'
 * with tokens and an 'abstract syntax tree' with higher level elements, but I have chosen to make these
 * two trees one in the same. Because of this, every token represents a logical part of a block.
 * Going back to the 'say 1 = Hello World' example, there are two 'parent' tokens, both are of type
 * {@link TokenTypeBlock}. The first is for the equals block, which contains three subtokens; '1',
 * '=' and 'Hello World'. The second is the say block, whos first child is 'say' and second child is
 * the token for the equals block (which itself has three children). For a query result to be valid,
 * it must have a token which encapsulates the entire query, in this case the say block token starts
 * at the first letter and ends at the last letter, so it's a valid interpretation. The token which
 * encapsulates the whole query is referred to as the root token.
 */
class Token {
  /**
   * @param {number} start
   * @param {number} end
   * @param {TokenType} type
   * @param {*} value
   * @param {number} precedence
   * @param {boolean} isTruncated
   * @param {boolean} isLegal
   */
  constructor(start, end, type, value) {
    let {
      precedence = -1,
      isProper = true,
      isTruncated = false,
      isLegal = true,
      isDefiningFeature = false
    } = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    /** @type {number} The index of the first letter of this token in the query */
    this.start = start;
    /** @type {number} The index of the last letter of this token in the query */
    this.end = end;
    /** @type {TokenType} The type of this token. */
    this.type = type;
    /** @type {*} Additional information about this token, controlled and interpreted by the token type. */
    this.value = value;
    /**
     * The precedence of this token, used to implement order of operations. Tokens with a higher
     * precedence should be evaluated *after* those with a lower precedence. Brackets have a
     * precedence of 0 so they are always evaluated first. A precedence of -1 means that precedence
     * is not specified and the parser makes no guarantees about the order of operations.
     * @type {number}
     */
    this.precedence = precedence;
    /**
     * True if this token is fully written out. For example, in the query "m v = 10" where "m v"
     * expands to "my variable", the token "m v" is not proper, as it is not fully written.
     * Note that unlike trauncation, parent tokens do not inherit this property (so in the above
     * example, the '=' block token would still be proper).
     */
    this.isProper = isProper;
    /**
     * Sometimes, tokens are truncated. Imagine the query 'say Hello for 10 se', here the last
     * token should be 'seconds', but it's truncated. For this token, the isTruncated value is set
     * to true. Additionally, the token for the whole block (which contains the tokens 'say', 'Hello',
     * 'for', '10' and 'se') also has it's isTruncated value set to true, because it contains a
     * truncated token.
     * @type {boolean}
     */
    this.isTruncated = isTruncated;
    /**
     * Used to generate autocomplete text, even if that autocomplete text doesn't make a valid query
     * by itself. For example in the query 'if my varia', we want to autocomplete to 'my variable',
     * but the query 'if my variable' is still not valid, because my variable is not a boolean. In
     * this case, the 'my variable' token would still be emitted as the second child of the 'if' token,
     * but it would be marked as illegal.
     */
    this.isLegal = isLegal;
    /**
     * If we see this token, should we know what block it's connected to?
     *
     * For example, in the query 'say Hi', 'say' is a defining feature because
     * we can narrow down what block it's from based only the fact that it's present.
     * 'Hi', however, is not a defining feature as it could be a part of lots of
     * different blocks.
     *
     * This is used to help eliminate some dodgey interpretations of queries, if a block
     * has no subtokens marked a defining feature it's disguarded.
     * @type {boolean}
     */
    this.isDefiningFeature = isDefiningFeature;
  }

  /**
   * @see {TokenType.createBlockValue}
   * @param {QueryInfo} query
   * @returns
   */
  createBlockValue(query) {
    return this.type.createBlockValue(this, query);
  }
}

/**
 * The parent of any class that can enumerate tokens given a query and a location within that
 * query to search.
 *
 * As the same position in a query can have multiple interpretations (see {@link Token}), every
 * token provider's {@link parseTokens} method can return multiple tokens for the same index.
 *
 * Like tokens, there is a token provider tree. See {@link WorkspaceQuerier._createTokenGroups}
 * for more info on this tree.
 *
 * @abstract
 */
class TokenProvider {
  constructor(shouldCache) {
    if (this.constructor === TokenProvider) throw new Error("Abstract classes can't be instantiated.");
    /**
     * Can the results of this token provider be stored? True
     * if {@link parseTokens} will always return the same thing for the same inputs or if
     * this token provider already caches it's result, so caching it again is redundant.
     * @type {boolean}
     */
    this.shouldCache = shouldCache;
  }

  /**
   * Return the tokens found by this token provider in `query` at character `idx`.
   * @param {QueryInfo} query The query to search
   * @param {number} idx The index to start the search at
   * @param {number} depth The number of blocks this token is inside of.
   *  For the query 1 + 1, the `+` block token would have a depth of 0 and the `1` tokens would have a depth of 1.
   * @yields {Token} All the tokens found
   * @abstract
   */
  // eslint-disable-next-line require-yield
  *parseTokens(query, idx, depth) {
    throw new Error("Sub-class must override abstract method.");
  }
}

/**
 * A token provider which wraps around another token provider, always returning a blank token in
 * addition to whatever the inner token provider returns.
 *
 * Used for tokens that can possibility be omitted, like numbers. For example, the '+' block always
 * needs three inputs, but the user could query '1 +'. In this case its subtokens are '1', '+' and
 * a {@link TokenTypeBlank}, provided by this provider.
 */
class TokenProviderOptional extends TokenProvider {
  /**
   * @param {TokenProvider} inner
   */
  constructor(inner) {
    super(inner.shouldCache);
    /** @type {TokenProvider} The inner token provider to return along with the blank token. */
    this.inner = inner;
  }
  *parseTokens(query, idx, depth) {
    yield TokenTypeBlank.INSTANCE.createToken(idx);
    yield* this.inner.parseTokens(query, idx, depth);
  }
}

/**
 * Caches the output of an inner token provider.
 * Used for tokens that are a part of multiple token provider groups.
 */
class TokenProviderSingleCache extends TokenProvider {
  /**
   * @param {TokenProvider} inner
   */
  constructor(inner) {
    super(false);
    /** @type {TokenProvider} */
    this.inner = inner;
    if (this.inner.shouldCache) {
      /** @type {Token[]?} */
      this.cache = [];
      /** @type {number?} */
      this.cacheQueryID = null;
    }
  }
  *parseTokens(query, idx, depth) {
    if (!this.inner.shouldCache) {
      yield* this.inner.parseTokens(query, idx, depth);
      return;
    }
    if (this.cacheQueryID !== query.id) {
      this.cache = [];
      this.cacheQueryID = query.id;
    }
    let cacheEntry = this.cache[idx];
    if (cacheEntry) {
      yield* cacheEntry;
      return;
    }
    this.cache[idx] = cacheEntry = [];
    for (const token of this.inner.parseTokens(query, idx, depth)) {
      cacheEntry.push(token);
      yield token;
    }
  }
}

/**
 * Collects multiple inner token providers into one token provider group.
 * Additionally, caches the results of all the cacheable inner token providers.
 */
class TokenProviderGroup extends TokenProvider {
  constructor() {
    // No need to cache this as it already caches it's own output.
    super(false);
    /** @type {TokenProvider[]} The providers that make up this group */
    this.providers = [];
    /** @type {TokenProvider[]} Providers that are a part of the group, but tokens they produce are illegal */
    this.illegalProviders = [];
    /** @type {Object<number, CacheEntry>?} The cache */
    this.cache = null;
    /** @type {number?} The query ID of the query whos results are currently cached */
    this.cacheQueryID = null;
    /** @type {boolean} Are any of our inner tokens cacheable? */
    this.hasCacheable = false;
  }

  /**
   * @typedef CacheEntry
   * @property {Token[][]} tokenCaches
   * @property {TokenProvider[][]} providerCaches
   */

  /**
   * Adds token providers to this token provider group.
   * @param {TokenProvider[]} providers
   * @param {boolean} legal Are the results of this provider legal in the current context?
   */
  pushProviders(providers) {
    let legal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (!this.hasCacheable) for (const provider of providers) {
      if (provider.shouldCache) {
        this.hasCacheable = true;
        break;
      }
    }
    if (legal) this.providers.push(...providers);else this.illegalProviders.push(...providers);
  }
  *parseTokens(query, idx, depth) {
    // If none of our providers are cacheable, just parse all the tokens again
    if (!this.hasCacheable) {
      for (const provider of this.providers) yield* provider.parseTokens(query, idx, depth);
      return;
    }

    // If the query ID has changed, the cache is no longer valid
    if (this.cacheQueryID !== query.id) {
      this.cache = [];
      this.cacheQueryID = query.id;
    } else {
      // Otherwise, search for a cache entry for idx
      const cacheEntry = this.cache[idx];
      if (cacheEntry) {
        // If we find one, yield all the cached results
        const tokenCaches = cacheEntry.tokenCaches;
        const providerCaches = cacheEntry.providerCaches;
        for (let i = 0; i < tokenCaches.length; i++) {
          const tokenCache = tokenCaches[i];
          const providerCache = providerCaches[i];
          for (const provider of providerCache) yield* provider.parseTokens(query, idx, depth);
          yield* tokenCache;
        }
        return;
      }
    }

    // No applicable cache entry was found :(
    // Call all our child token providers and create a new cache entry

    let tokenCache = [];
    let providerCache = [];
    const tokenCaches = [tokenCache];
    const providerCaches = [providerCache];
    this.cache[idx] = {
      tokenCaches,
      providerCaches
    };
    for (const provider of this.providers) {
      if (provider.shouldCache) {
        for (const token of provider.parseTokens(query, idx, depth)) {
          tokenCache.push(token);
          yield token;
        }
      } else {
        if (tokenCache.length !== 0) {
          tokenCache = [];
          providerCache = [];
          tokenCaches.push(tokenCache);
          providerCaches.push(providerCache);
        }
        providerCache.push(provider);
        yield* provider.parseTokens(query, idx, depth);
      }
    }
    for (const provider of this.illegalProviders) {
      for (let token of provider.parseTokens(query, idx, depth)) {
        token = _objectSpread(_objectSpread({}, token), {}, {
          isLegal: false
        });
        tokenCache.push(token);
        yield token;
      }
    }
  }
}

/**
 * A class representing the type of a token (see {@link Token.type})
 *
 * All token types extend from {@link TokenProvider} and they provide all the tokens
 * of their type they can find.
 *
 * @abstract
 */
class TokenType extends TokenProvider {
  constructor() {
    let dontCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    super(!dontCache);
    if (this.constructor === TokenType) throw new Error("Abstract classes can't be instantiated.");

    /** @type {boolean} Is this token type always represented by the same string of characters? */
    this.isConstant = false;
  }

  /**
   * Turns `token` into a value which can be passed into the {@link BlockInstance} constructor.
   * For example, in string literal tokens, this gets the string value of the token which can then
   * be used to create a block.
   * @param {Token} token
   * @param {QueryInfo} query
   * @returns {*}
   */
  createBlockValue(token, query) {
    return token.value;
  }

  /**
   * Creates the string form of this token in the same format that was used in the query.
   * If the token was only partially typed in the query, creating the text will complete the token.
   * @param {Token} token
   * @param {QueryInfo} query
   * @param {boolean} endOnly Should we only append to the end of the query. If this is false, we
   * can create text in the middle of the query that wasn't there. This is used to autocomplete
   * {@link StringEnum.GriffTokenType} tokens in the middle of a query.
   * @returns {string}
   */
  createText(token, query, endOnly) {
    throw new Error("Sub-class must override abstract method.");
  }

  /**
   * @param {Token} token
   * @param {QueryInfo} query
   * @returns {Token[]}
   */
  getSubtokens(token, query) {
    return undefined;
  }
}

/**
 * The type for tokens that represent an omitted field.
 * Used by {@link TokenProviderOptional}
 */
class TokenTypeBlank extends TokenType {
  constructor() {
    super();
    this.isConstant = true;
  }
  *parseTokens(query, idx, depth) {
    yield this.createToken(idx);
  }

  /**
   * Create a new blank token
   * @param {number} idx The position of the blank token
   * @returns {Token}
   */
  createToken(idx) {
    return new Token(idx, idx, this, null);
  }
  createText(token, query) {
    return "";
  }
}

/**
 * Represents a token whos value must be one of a predetermined set of strings.
 * For example, a token for a dropdown menu (like the one in `set [my variable] to x`) is a
 * string enum, because the value must be one of a set of strings.
 *
 * String enums are also used for values that can only be one specific value (like the 'set' from
 * `set [my variable] to x`). These cases are just string enums with one possible value.
 */
_TokenTypeBlank = TokenTypeBlank;
_defineProperty(TokenTypeBlank, "INSTANCE", new _TokenTypeBlank());
class TokenTypeStringEnum extends TokenType {
  /**
   * @typedef StringEnumValue
   * @property {string} value The string that needs to be in the query
   * @property {string} lower Cached value.toLowerCase()
   * @property {string[]} parts lower, split up by ignoreable characters.
   */

  /**
   * @param {(import("./BlockTypeInfo").BlockInputEnumOption[]} values
   */
  constructor(values) {
    super();
    this.isConstant = values.length === 1;

    /** @type {StringEnumValue[]} */
    this.values = [];
    for (const value of values) {
      let lower = value.string.toLowerCase();
      const parts = [];
      {
        let lastPart = 0;
        for (let i = 0; i <= lower.length; i++) {
          const char = lower[i];
          if (QueryInfo.IGNORABLE_CHARS.indexOf(char) !== -1 || !char) {
            parts.push(lower.substring(lastPart, i));
            i = QueryInfo.skipIgnorable(lower, i);
            lastPart = i;
          }
        }
      }
      this.values.push({
        lower,
        parts,
        value
      });
    }
  }
  *parseTokens(query, idx, depth) {
    for (let valueIdx = 0; valueIdx < this.values.length; valueIdx++) {
      const valueInfo = this.values[valueIdx];
      let yieldedToken = false;
      const remainingChar = query.length - idx;
      const substr = query.lowercase.substring(idx);

      // If all we have is a string which could be a number, it doesn't count as a defining feature.
      // This is to get rid of "10" constantly suggesting "10 ^ of ()"
      let isDefiningFeature = !TokenTypeNumberLiteral.isValidNumber(substr);
      if (remainingChar < valueInfo.lower.length) {
        if (valueInfo.lower.startsWith(substr)) {
          const end = remainingChar < 0 ? 0 : query.length;
          yield new Token(idx, end, this, valueInfo, {
            isTruncated: true,
            isDefiningFeature
          });
          yieldedToken = true;
        }
      } else {
        if (query.lowercase.startsWith(valueInfo.lower, idx)) {
          yield new Token(idx, idx + valueInfo.lower.length, this, valueInfo, {
            isDefiningFeature
          });
          yieldedToken = true;
        }
      }
    }
  }
  createBlockValue(token, query) {
    return token.value.value;
  }
  createText(token, query, endOnly) {
    if (!token) return this.values[0].lower;
    return token.value.lower;
  }
}

/**
 * The token type for a literal string, like 'Hello World' in the query `say Hello World`
 */
class TokenTypeStringLiteral extends TokenType {
  static isTerminator(char) {
    return this.TERMINATORS.includes(char);
  }

  /**
   * Each time we encounter a 'terminator' we have to return the string we've read so far as a
   * possible interpretation. If we didn't, when looking for a string at index 4 of 'say Hello
   * World for 10 seconds' we would just return 'Hello World for 10 seconds', leading to the
   * only result being `say "Hello World for 10 seconds"`. This also means in addition to
   * 'Hello World' we also return 'Hello', 'Hello World for', 'Hello World for 10' and '
   * Hello World for 10 seconds', but that's just the price we pay for trying to enumerate every
   * interpretation.
   */
  *parseTokens(query, idx, depth) {
    // First, look for strings in quotes
    let quoteEnd = -1;
    if (query.str[idx] === '"' || query.str[idx] === "'") {
      const quote = query.str[idx];
      let value = "";
      let valueStart = idx + 1;
      for (let i = idx + 1; i <= query.length; i++) {
        if (query.str[i] === "\\") {
          value += query.str.substring(valueStart, i);
          valueStart = ++i;
        } else if (query.str[i] === quote) {
          yield new Token(idx, i + 1, this, value + query.str.substring(valueStart, i));
          quoteEnd = i + 1;
          break;
        }
      }
    }
    // Then all the other strings
    let wasTerminator = false;
    let wasIgnorable = false;
    for (let i = idx; i <= query.length; i++) {
      const isTerminator = TokenTypeStringLiteral.isTerminator(query.str[i]);
      const isIgnorable = QueryInfo.IGNORABLE_CHARS.includes(query.str[i]);
      if ((wasTerminator !== isTerminator || i == query.length) && !wasIgnorable && i !== idx && i !== quoteEnd) {
        const value = query.str.substring(idx, i);
        yield new Token(idx, i, this, value);
      }
      wasTerminator = isTerminator;
      wasIgnorable = isIgnorable;
    }
  }
  createText(token, query, endOnly) {
    return query.str.substring(token.start, token.end);
  }
}

/**
 * The token type for a literal number, like 69 in the query 'Hello + 69'
 * This token type also supports numbers in formats scratch doesn't let you type,
 * but accepts like '0xFF', 'Infinity' or '1e3'.
 */
_defineProperty(TokenTypeStringLiteral, "TERMINATORS", [undefined, " ", "+", "-", "*", "/", "=", "<", ">", ")"]);
class TokenTypeNumberLiteral extends TokenType {
  static isValidNumber(str) {
    return !isNaN(+str) || !isNaN(parseFloat(+str));
  }
  *parseTokens(query, idx, depth) {
    for (let i = idx; i <= query.length; i++) {
      if (TokenTypeStringLiteral.isTerminator(query.str[i]) && i !== idx) {
        const value = query.str.substring(idx, i);
        if (TokenTypeNumberLiteral.isValidNumber(value)) {
          yield new Token(idx, i, this, value);
          break;
        }
      }
    }
  }
  createText(token, query, endOnly) {
    return query.str.substring(token.start, token.end);
  }
}

/**
 * A token type for literal colors, like '#ffffff' for white.
 */
class TokenTypeColor extends TokenType {
  *parseTokens(query, idx, depth) {
    if (!query.str.startsWith("#", idx)) return;
    for (let i = 0; i < 6; i++) {
      if (TokenTypeColor.HEX_CHARS.indexOf(query.lowercase[idx + i + 1]) === -1) return;
    }
    yield new Token(idx, idx + 7, this, query.str.substring(idx, idx + 7));
  }
  createText(token, query, endOnly) {
    return query.query.substring(token.start, token.end);
  }
}

/**
 * A token type for tokens that are in brackets, like (1 + 1) in '(1 + 1) * 2'.
 */
_TokenTypeColor = TokenTypeColor;
_defineProperty(TokenTypeColor, "INSTANCE", new TokenProviderOptional(new _TokenTypeColor()));
_defineProperty(TokenTypeColor, "HEX_CHARS", ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]);
class TokenTypeBrackets extends TokenType {
  /**
   * @param {TokenProvider} tokenProvider
   */
  constructor(tokenProvider) {
    super();
    /** @type {TokenProvider} The tokens to look for between the brackets */
    this.tokenProvider = tokenProvider;
  }
  *parseTokens(query, idx, depth) {
    const start = idx;
    if (query.str[idx++] !== "(") return;
    idx = query.skipIgnorable(idx);
    for (const token of this.tokenProvider.parseTokens(query, idx, depth)) {
      if (token.type instanceof TokenTypeBlank) continue; // Do not allow empty brackets like '()'
      var tokenEnd = query.skipIgnorable(token.end);
      let isTruncated = token.isTruncated;
      if (!isTruncated) {
        if (tokenEnd === query.length) isTruncated = true;else if (query.str[tokenEnd] === ")") ++tokenEnd;else continue;
      }
      // Note that for bracket tokens, precedence = 0
      const newToken = new Token(start, tokenEnd, this, token.value, {
        precedence: 0,
        isTruncated,
        isLegal: token.isLegal
      });
      newToken.innerToken = token;
      yield newToken;
    }
  }
  createBlockValue(token, query) {
    return token.innerToken.createBlockValue(token.innerToken, query);
  }
  createText(token, query, endOnly) {
    let text = "(";
    text += query.str.substring(token.start + 1, token.innerToken.start);
    text += token.innerToken.type.createText(token.innerToken, query, endOnly);
    if (token.innerToken.end !== token.end) text += query.str.substring(token.innerToken.end, token.end - 1);
    text += ")";
    return text;
  }
  getSubtokens(token, query) {
    return [token.innerToken];
  }
}

/**
 * The token type for a block, like 'say Hello' or '1 + 1'.
 */
class TokenTypeBlock extends TokenType {
  /**
   * @param {WorkspaceQuerier} querier
   * @param {BlockTypeInfo} block
   * @private
   */
  constructor(querier, block) {
    var _this;
    super();
    _this = this;
    this.block = block;
    this.hasSubTokens = true;
    /**
     * The list of token types that make up this block.
     *
     * For example, for the non-griff version of the 'say' block this array would contains two
     * providers, the first is a {@link StringEnum.FullTokenType} containing only the value 'say'
     * and the second is equal to querier.tokenGroupString.
     *
     * @type {TokenProvider[]}
     */
    this.fullTokenProviders = [];
    for (const blockPart of block.parts) {
      let fullTokenProvider;
      if (typeof blockPart === "string") {
        fullTokenProvider = new TokenTypeStringEnum([{
          value: null,
          string: blockPart
        }]);
      } else {
        switch (blockPart.type) {
          case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputType"].ENUM:
            fullTokenProvider = new TokenTypeStringEnum(blockPart.values);
            if (blockPart.isRound) {
              const enumGroup = new TokenProviderGroup();
              enumGroup.pushProviders([fullTokenProvider, querier.tokenGroupRoundBlocks]);
              fullTokenProvider = enumGroup;
            }
            break;
          case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputType"].STRING:
            fullTokenProvider = querier.tokenGroupString;
            break;
          case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputType"].NUMBER:
            fullTokenProvider = querier.tokenGroupNumber;
            break;
          case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputType"].COLOUR:
            fullTokenProvider = TokenTypeColor.INSTANCE;
            break;
          case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputType"].BOOLEAN:
            fullTokenProvider = querier.tokenGroupBoolean;
            break;
          case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputType"].BLOCK:
            fullTokenProvider = querier.tokenGroupStack;
            break;
        }
      }
      this.fullTokenProviders.push(fullTokenProvider);
    }

    /**
     * @type {{strings: string[], inputs: [], length: number}[]}
     */
    this.stringForms = [];
    const _enumerateStringForms = function enumerateStringForms() {
      let partIdx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let strings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      let inputs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      let length = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      for (; partIdx < block.parts.length; partIdx++) {
        let blockPart = block.parts[partIdx];
        if (typeof blockPart === "string") {
          length += blockPart.length;
          strings.push(...blockPart.toLowerCase().split(" "));
        } else if (blockPart.type === _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputType"].ENUM) {
          for (const enumValue of blockPart.values) {
            _enumerateStringForms(partIdx + 1, [...strings, ...enumValue.string.toLowerCase().split(" ")], [...inputs, enumValue], length + enumValue.string.length);
          }
          return;
        } else {
          inputs.push(null);
        }
      }
      _this.stringForms.push({
        strings,
        inputs,
        length
      });
    };
    _enumerateStringForms();
  }

  /**
   * @param {QueryInfo} query
   * @param {number} idx
   * @param {number} depth
   * @returns
   */
  *parseTokens(query, idx, depth) {
    if (depth !== 0 && !query.canCreateMoreNestedBlocks()) return;
    let yieldedTokens = false;
    for (const subtokens of this._parseSubtokens(query, idx, this.fullTokenProviders)) {
      let token = this._createToken(query, idx, this.fullTokenProviders, subtokens);
      if (token) {
        yield token;
        yieldedTokens = true;
      }
    }
    if (yieldedTokens) return;
    outer: for (const stringForm of this.stringForms) {
      let lastPartIdx = -1;
      let i = idx;
      let hasDefiningFeature = false;
      while (true) {
        i = query.skipIgnorable(i);
        const wordEnd = query.skipUnignorable(i);
        if (wordEnd === i) {
          if (hasDefiningFeature) yield new Token(idx, wordEnd, this, {
            stringForm,
            lastPartIdx: -1
          }, {
            isProper: false
          });
          break;
        } else {
          const word = query.lowercase.substring(i, wordEnd);
          let match = -1;
          for (let formPartIdx = lastPartIdx + 1; formPartIdx < stringForm.strings.length; formPartIdx++) {
            const stringFormPart = stringForm.strings[formPartIdx];
            if (stringFormPart.startsWith(word)) {
              match = formPartIdx;
              break;
            }
          }
          if (match === -1) continue outer;
          lastPartIdx = match;
          hasDefiningFeature || (hasDefiningFeature = !TokenTypeNumberLiteral.isValidNumber(word));
          if (query.skipIgnorable(wordEnd) < query.length) {
            if (hasDefiningFeature) yield new Token(idx, wordEnd, this, {
              stringForm,
              lastPartIdx,
              i
            }, {
              isProper: false
            });
          }
          i = wordEnd;
        }
      }
    }
  }

  /**
   * @private
   * @param {QueryInfo} query
   * @param {number} idx
   * @param {TokenProvider[]} subtokenProviders
   * @param {Token[]} subtokens
   * @returns {Token?}
   */
  _createToken(query, idx, subtokenProviders, subtokens) {
    subtokens.reverse();
    let isLegal = true;
    let isTruncated = subtokens.length < subtokenProviders.length;
    let hasDefiningFeature = false;
    for (const subtoken of subtokens) {
      isTruncated |= subtoken.isTruncated; // If any of our kids are truncated, so are we
      isLegal && (isLegal = subtoken.isLegal); // If any of our kids are illegal, so are we
      if (subtoken.isDefiningFeature && subtoken.start < query.length) hasDefiningFeature = true;
    }

    /** See {@link Token.isDefiningFeature} */
    if (!hasDefiningFeature) return null;
    const end = query.skipIgnorable(subtokens[subtokens.length - 1].end);
    return new Token(idx, end, this, {
      subtokens
    }, {
      precedence: this.block.precedence,
      isTruncated,
      isLegal
    });
  }

  /**
   * Parse all the tokens from this.tokenProviders[tokenProviderIdx] then
   * recursively call this for the next token. Returns a list of tokens for
   * each combination of possible interpretations of the subtokens.
   *
   * Note that the tokens in the returned token arrays are in reverse to the
   * order of their providers in this.tokenProviders, just to confuse you :P
   *
   * @private
   * @param {QueryInfo} query
   * @param {number} idx
   * @param {TokenProvider[]} subtokenProviders
   * @param {number} depth
   * @param {number} tokenProviderIdx
   * @param {boolean} parseNextToken
   * @yields {Token[]}
   */
  _parseSubtokens(query, idx, subtokenProviders, depth) {
    var _this2 = this;
    let tokenProviderIdx = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    let parseNextToken = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
    return function* () {
      idx = query.skipIgnorable(idx);
      let tokenProvider = subtokenProviders[tokenProviderIdx];
      for (const token of tokenProvider.parseTokens(query, idx, depth + 1)) {
        ++query.tokenCount;
        if (!query.canCreateMoreTokens()) break;
        if (depth !== 0 && !query.canCreateMoreNestedBlocks()) break;
        if (_this2.block.precedence !== -1) {
          if (
          // If we care about the precedence of this block
          // Discard this token if its precedence is higher than ours, meaning it should be calculated
          //  before us not afterward.
          token.precedence > _this2.block.precedence && (
          // See https://github.com/ScratchAddons/ScratchAddons/issues/5981
          tokenProviderIdx === 0 || !(token.type instanceof TokenTypeBlock) || token.type.block.id !== "operator_not")) continue;
          /**
           * This check eliminates thousands of results by making sure blocks with equal precedence
           * can only contain themselves as their own first input. Without this, the query '1 + 2 + 3'
           * would have two interpretations '(1 + 2) + 3' and '1 + (2 + 3)'. This rule makes the second
           * of those invalid because the root '+' block contains itself as its third token.
           */
          if (token.precedence === _this2.block.precedence) {
            const inputIndex = _this2.block.parts[tokenProviderIdx].inputIdx;
            if (inputIndex !== 0) continue;
          }
        }
        if (!parseNextToken || !token.isLegal || tokenProviderIdx === subtokenProviders.length - 1) {
          yield [token];
        } else {
          for (const subTokenArr of _this2._parseSubtokens(query, token.end, subtokenProviders, depth, tokenProviderIdx + 1, !token.isTruncated)) {
            subTokenArr.push(token);
            yield subTokenArr;
          }
        }
      }
    }();
  }
  createBlockValue(token, query) {
    if (!token.isLegal) throw new Error("Cannot create a block from an illegal token.");
    let blockInputs;
    if (token.value.stringForm) {
      blockInputs = token.value.stringForm.inputs;
    } else {
      const subtokens = token.value.subtokens;
      blockInputs = [];
      for (let i = 0; i < subtokens.length; i++) {
        const blockPart = this.block.parts[i];
        if (typeof blockPart !== "string") blockInputs.push(subtokens[i].createBlockValue(query));
      }
      while (blockInputs.length < this.block.inputs.length) blockInputs.push(null);
    }
    return this.block.createBlock(...blockInputs);
  }
  createText(token, query, endOnly) {
    if (token.value.stringForm) {
      if (endOnly) {
        if (token.value.lastPartIdx === -1 || token.end <= query.length) {
          return query.str.substring(token.start, token.end);
        } else {
          return query.str.substring(token.start, token.end) + token.value.stringForm.strings[token.value.lastPartIdx].substring(token.end - token.value.i) + " " + token.value.stringForm.strings.slice(token.value.lastPartIdx + 1).join(" ");
        }
      }
      return token.value.stringForm.strings.join(" ");
    }
    if (!token.isTruncated && endOnly) return query.str.substring(token.start, token.end);
    const subtokens = token.value.subtokens;
    let text = "";
    if (token.start !== subtokens[0].start) {
      text += query.str.substring(token.start, subtokens[0].start);
    }
    let i;
    for (i = 0; i < subtokens.length; i++) {
      var _subtoken$type$create;
      const subtoken = subtokens[i];
      if (!token.isLegal && subtoken.start >= query.length) break;
      const subtokenText = (_subtoken$type$create = subtoken.type.createText(subtoken, query, endOnly)) !== null && _subtoken$type$create !== void 0 ? _subtoken$type$create : "";
      text += subtokenText;
      if (i !== subtokens.length - 1) {
        const next = subtokens[i + 1];
        const nextStart = next.start;
        if (nextStart !== subtoken.end) {
          text += query.str.substring(subtoken.end, nextStart);
        } else {
          if ((!endOnly || nextStart >= query.length) && subtokenText.length !== 0 && QueryInfo.IGNORABLE_CHARS.indexOf(subtokenText.at(-1)) === -1) text += " ";
        }
      }
    }
    return text;
  }
  getSubtokens(token, query) {
    return token.value.subtokens;
  }
}

/**
 * A single interpretation of a query.
 */
class QueryResult {
  constructor(query, token) {
    /**
     * The query that this is a result of.
     * @type {QueryInfo}
     */
    this.query = query;
    /**
     * The root token of this result.
     *
     * The root token is a token which encapsules the entire query.
     * @type {Token}
     */
    this.token = token;
  }
  get isTruncated() {
    return this.token.isTruncated;
  }

  /**
   * @param {boolean} endOnly
   * @returns {string}
   */
  toText(endOnly) {
    var _this$token$type$crea;
    return (_this$token$type$crea = this.token.type.createText(this.token, this.query, endOnly)) !== null && _this$token$type$crea !== void 0 ? _this$token$type$crea : "";
  }

  /**
   * @returns {BlockInstance}
   */
  getBlock() {
    if (!this.block) this.block = this.token.createBlockValue(this.query);
    return this.block;
  }

  /**
   * @returns {{stringLength: number, tokenLength: number}}
   */
  getLengths() {
    if (this.lengths) return this.lengths;
    let stringLength = 0;
    let tokenLength = 0;

    /** @type {(block: BlockInstance) => void} */
    const getBlockLengths = block => {
      let inputIdx = 0;
      for (const part of block.typeInfo.parts) {
        ++tokenLength;
        if (typeof part === "string") {
          stringLength += part.length;
        } else {
          const input = block.inputs[inputIdx++];
          if (input instanceof _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInstance"]) {
            getBlockLengths(input);
          } else if (part instanceof _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputEnum"]) {
            stringLength += input.string.length;
          } else if (part instanceof _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputString"] && input !== part.defaultValue) {
            // Make string inputs 100x their real length so they appear at the bottom
            stringLength += ("" + input).length * 100;
          } else if (input != null) {
            stringLength += ("" + input).length;
          }
        }
      }

      // Account for the spaces between inputs
      stringLength += block.typeInfo.parts.length - 1;
    };
    getBlockLengths(this.getBlock());
    return this.lengths = {
      stringLength,
      tokenLength
    };
  }
}

/**
 * Information on the current query being executed, with some utility
 * functions for helping out token providers.
 */
class QueryInfo {
  constructor(querier, query, id) {
    /** @type {WorkspaceQuerier} */
    this.querier = querier;
    /** @type {string} The query */
    this.str = query.replace(/\u00a0/g, " ");
    /** @type {string} A lowercase version of the query. Used for case insensitive comparisons. */
    this.lowercase = this.str.toLowerCase();
    /** @type {number} A unique identifier for this query */
    this.id = id;
    /** @type {number} The number of tokens we've found so far */
    this.tokenCount = 0;
    /** @type {number} The number of query results we've found so far */
    this.resultCount = 0;
  }

  /**
   * @param {string} str
   * @param {number} idx The index to start at.
   * @returns {number} The index of the next non-ignorable character in str, after idx.
   */
  static skipIgnorable(str, idx) {
    while (QueryInfo.IGNORABLE_CHARS.indexOf(str[idx]) !== -1) ++idx;
    return idx;
  }

  /**
   * @param {number} idx The index to start at.
   * @returns {number} The index of the next non-ignorable character in the query, after idx.
   */
  skipIgnorable(idx) {
    return QueryInfo.skipIgnorable(this.lowercase, idx);
  }

  /**
   * @param {string} str
   * @param {number} idx The index to start at.
   * @returns {number} The index of the next ignorable character in str, after idx.
   */
  static skipUnignorable(str, idx) {
    while (QueryInfo.IGNORABLE_CHARS.indexOf(str[idx]) === -1 && idx < str.length) ++idx;
    return idx;
  }

  /**
   * @param {number} idx The index to start at.
   * @returns {number} The index of the next ignorable character in the query, after idx.
   */
  skipUnignorable(idx) {
    return QueryInfo.skipUnignorable(this.lowercase, idx);
  }

  /** @type {number} The length in characters of the query. */
  get length() {
    return this.str.length;
  }
  canCreateMoreTokens() {
    return this.tokenCount < WorkspaceQuerier.MAX_TOKENS;
  }
  canCreateMoreNestedBlocks() {
    return this.canCreateMoreTokens() && this.resultCount < WorkspaceQuerier.MAX_RESULTS;
  }
}

/**
 * Workspace queriers keep track of all the data needed to query a given workspace (referred to as
 * the 'workspace index') and provides the methods to execute queries on the indexed workspace.
 */
/** Characters that can be safely skipped over. */
_defineProperty(QueryInfo, "IGNORABLE_CHARS", [" "]);
class WorkspaceQuerier {
  /**
   * Indexes a workspace in preparation for querying it.
   * @param {BlockTypeInfo[]} blocks The list of blocks in the workspace.
   */
  indexWorkspace(blocks) {
    this._queryCounter = 0;
    this._createTokenGroups();
    this._populateTokenGroups(blocks);
    this.workspaceIndexed = true;
  }

  /**
   * Queries the indexed workspace for blocks matching the query string.
   * @param {string} queryStr The query.
   * @returns {{results: QueryResult[], illegalResult: QueryResult | null, limited: boolean}} A list of the results of the query, sorted by their relevance.
   */
  queryWorkspace(queryStr) {
    if (!this.workspaceIndexed) throw new Error("A workspace must be indexed before it can be queried!");
    if (queryStr.trim().length === 0) return {
      results: [],
      illegalResult: null,
      limited: false
    };
    const query = new QueryInfo(this, queryStr, this._queryCounter++);
    const results = [];
    let foundTokenCount = 0;
    let limited = false;
    let bestIllegalResult = null;
    let bestIllegalResultText = "";
    for (const option of this.tokenGroupBlocks.parseTokens(query, 0, 0)) {
      if (option.end >= queryStr.length) {
        if (option.isLegal) {
          results.push(new QueryResult(query, option));
        } else {
          const text = option.type.createText(option, query, true);
          if (!bestIllegalResult || text.length < text) {
            bestIllegalResult = new QueryResult(query, option);
            bestIllegalResultText = text;
          }
        }
      }
      ++query.resultCount;
      if (!limited && query.resultCount >= WorkspaceQuerier.MAX_RESULTS) {
        console.log("Warning: Workspace query exceeded maximum result count.");
        limited = true;
      }
      if (!query.canCreateMoreTokens()) {
        console.log("Warning: Workspace query exceeded maximum token count.");
        limited = true;
        break;
      }
    }

    // Used to eliminate blocks whos strings can be parsed as something else.
    //  This step removes silly suggestions like `if <(1 + 1) = "2 then"> then`
    const canBeString = Array(queryStr.length).fill(true);
    function searchToken(token) {
      const subtokens = token.type.getSubtokens(token, query);
      if (subtokens) for (const subtoken of subtokens) searchToken(subtoken);else if (!(token.type instanceof TokenTypeStringLiteral) && token.isProper && !token.isTruncated) for (let i = token.start; i < token.end; i++) {
        canBeString[i] = false;
      }
    }
    for (const result of results) searchToken(result.token);
    function checkValidity(token) {
      const subtokens = token.type.getSubtokens(token, query);
      if (subtokens) {
        for (const subtoken of subtokens) if (!checkValidity(subtoken)) return false;
      } else if (token.type instanceof TokenTypeStringLiteral && !TokenTypeNumberLiteral.isValidNumber(token.value)) {
        for (let i = token.start; i < token.end; i++) if (!canBeString[i]) return false;
      }
      return true;
    }
    let validResults = [];
    for (const result of results) if (checkValidity(result.token)) validResults.push(result);
    validResults = validResults.sort((a, b) => {
      const aLengths = a.getLengths();
      const bLengths = b.getLengths();
      if (aLengths.stringLength != bLengths.stringLength) return aLengths.stringLength - bLengths.stringLength;
      return aLengths.tokenLength - bLengths.tokenLength;
    });
    return {
      results: validResults,
      illegalResult: validResults.length === 0 ? bestIllegalResult : null,
      limited
    };
  }

  /**
   * Creates the token group hierarchy used by this querier.
   *
   * Each of these token groups represents a list of all the tokens that could be encountered
   * when we're looking for a specific type of input. For example, tokenGroupString contains all
   * the tokens that could be encountered when we're looking for a string input (like after the
   * word 'say' for the `say ()` block). tokenGroupBlocks is an interesting one, it contains all
   * the tokens that could be the root token of a query result. In practice, this just means all
   * the stackable blocks (like 'say') and all the reporter blocks (like '+').
   *
   * But wait, there's a problem. Blocks like `() + ()` have two inputs, both of which are numbers.
   * The issue arises when you realize the block '+' itself also returns a number. So when we
   * try to call parseTokens on the '+' block, it will try to look for it's first parameter thus
   * calling parseTokens on tokenGroupNumber, which will call parseTokens on the '+' block again
   * (because + can return a number) which will call tokenGroupNumber again... and we're in an
   * infinite loop. We can't just exclude blocks from being their own first parameter because then
   * queries like '1 + 2 + 3' wouldn't work. The solution is something you might have only thought
   * of as a performance boost; caching. When tokenGroupNumber gets queried for the second time,
   * it's mid way though building its cache from the first query. If this happens, it just returns
   * all the tokens it had already found, but no more. So in the example above, when the + block calls
   * tokenGroupNumber for the second time it finds only the number literal '1'. It then finds the
   * second number literal '2' and yields the block '1 + 2' which gets added to tokenGroupNumber's
   * cache. '1 + 2' then gets disguarded by the queryWorkspace function because it doesn't cover the
   * whole query. But the '+' block's query to tokenGroupNumber never finished, so it will continue
   * and, because the first one we found is now a part of the cache, tokenGroupNumber will yield
   * '1 + 2' as a result. The + block will continue parsing, find the second '+' and the number '3'
   * and yield '(1 + 2) + 3'. No infinite loops!
   *
   * A consequence of this system is something I implicitly implied in the above paragraph "when the
   * + block calls tokenGroupNumber for the second time it finds only the number literal '1'" This
   * is only true if 'TokenTypeNumberLiteral' is searched before the '+' block. This is why the order
   * the token providers are in is critically important. I'll leave it as an exercise to the reader to
   * work out why, but the same parsing order problems crops up when implementing order of operations.
   * If a suggestion that should show up isn't showing up, it's probably because the token providers
   * in one of the groups is in the wrong order. Ordering the providers within the base groups is dealt
   * with by {@link _populateTokenGroups} and the inter-group ordering is dealt with below, by the
   * order they are passed into pushProviders.
   *
   * @private
   */
  _createTokenGroups() {
    this.tokenTypeStringLiteral = new TokenProviderSingleCache(new TokenTypeStringLiteral());
    this.tokenTypeNumberLiteral = new TokenProviderSingleCache(new TokenTypeNumberLiteral());
    this.tokenGroupRoundBlocks = new TokenProviderGroup(); // Round blocks like (() + ()) or (my variable)
    this.tokenGroupBooleanBlocks = new TokenProviderGroup(); // Boolean blocks like <not ()>
    this.tokenGroupStackBlocks = new TokenProviderGroup(); // Stackable blocks like `move (10) steps`
    this.tokenGroupHatBlocks = new TokenProviderGroup(); // Hat block like `when green flag clicked`

    // Anything that fits into a boolean hole. (Boolean blocks + Brackets)
    this.tokenGroupBoolean = new TokenProviderOptional(new TokenProviderGroup());
    this.tokenGroupBoolean.inner.pushProviders([this.tokenGroupBooleanBlocks, new TokenTypeBrackets(this.tokenGroupBoolean)]);
    this.tokenGroupBoolean.inner.pushProviders([this.tokenGroupRoundBlocks], false);

    // Anything that fits into a number hole. (Round blocks + Boolean blocks + Number Literals + Brackets)
    this.tokenGroupNumber = new TokenProviderOptional(new TokenProviderGroup());
    this.tokenGroupNumber.inner.pushProviders([this.tokenTypeNumberLiteral, this.tokenGroupRoundBlocks, this.tokenGroupBooleanBlocks, new TokenTypeBrackets(this.tokenGroupNumber)]);

    // Anything that fits into a string hole (Round blocks + Boolean blocks + String Literals + Brackets)
    this.tokenGroupString = new TokenProviderOptional(new TokenProviderGroup());
    this.tokenGroupString.inner.pushProviders([this.tokenTypeStringLiteral, this.tokenGroupRoundBlocks, this.tokenGroupBooleanBlocks, new TokenTypeBrackets(this.tokenGroupString)]);

    // Anything that fits into a c shaped hole (Stackable blocks)
    this.tokenGroupStack = new TokenProviderOptional(this.tokenGroupStackBlocks);

    // Anything you can spawn using the menu (All blocks)
    this.tokenGroupBlocks = new TokenProviderGroup();
    this.tokenGroupBlocks.pushProviders([this.tokenGroupStackBlocks, this.tokenGroupBooleanBlocks, this.tokenGroupRoundBlocks, this.tokenGroupHatBlocks]);
  }

  /**
   * Populates the token groups created by {@link _createTokenGroups} with the blocks
   * found in the workspace.
   * @param {BlockTypeInfo[]} blocks The list of blocks in the workspace.
   * @private
   */
  _populateTokenGroups(blocks) {
    // Apply order of operations
    for (const block of blocks) {
      block.precedence = WorkspaceQuerier.ORDER_OF_OPERATIONS.indexOf(block.id);
    }
    for (let i = blocks.length - 1; i >= 0; i--) {
      const block = blocks[i];
      if (block.precedence !== -1) {
        const target = blocks.length - (WorkspaceQuerier.ORDER_OF_OPERATIONS.length - (block.precedence - 1));
        if (i !== target) {
          const oldBlock = blocks[target];
          blocks[target] = block;
          blocks[i] = oldBlock;
        }
      }
    }
    for (const block of blocks) {
      const blockTokenType = new TokenTypeBlock(this, block);
      switch (block.shape) {
        case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Round:
          this.tokenGroupRoundBlocks.pushProviders([blockTokenType]);
          break;
        case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Boolean:
          this.tokenGroupBooleanBlocks.pushProviders([blockTokenType]);
          break;
        case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Stack:
        case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].End:
          this.tokenGroupStackBlocks.pushProviders([blockTokenType]);
          break;
        case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Hat:
          this.tokenGroupHatBlocks.pushProviders([blockTokenType]);
          break;
      }
    }
  }

  /**
   * Clears the memory used by the workspace index.
   */
  clearWorkspaceIndex() {
    this.workspaceIndexed = false;
    this._destroyTokenGroups();
  }

  /**
   * @private
   */
  _destroyTokenGroups() {
    this.tokenTypeStringLiteral = null;
    this.tokenTypeNumberLiteral = null;
    this.tokenGroupBooleanBlocks = null;
    this.tokenGroupRoundBlocks = null;
    this.tokenGroupStackBlocks = null;
    this.tokenGroupHatBlocks = null;
    this.tokenGroupBoolean = null;
    this.tokenGroupNumber = null;
    this.tokenGroupString = null;
    this.tokenGroupStack = null;
    this.tokenGroupBlocks = null;
  }
}
_defineProperty(WorkspaceQuerier, "ORDER_OF_OPERATIONS", [null,
// brackets
"operator_join", "operator_round", "operator_mathop", "operator_mod", "operator_divide", "operator_multiply", "operator_subtract", "operator_add", "operator_equals", "operator_lt", "operator_gt", "operator_or", "operator_and", "operator_not"]);
/**
 * The maximum number of results to find before we give up searching sub-blocks.
 */
_defineProperty(WorkspaceQuerier, "MAX_RESULTS", 2000);
/**
 * The maximum number of tokens to find before giving up.
 */
_defineProperty(WorkspaceQuerier, "MAX_TOKENS", 10000);

/***/ }),

/***/ "./src/addons/addons/middle-click-popup/_runtime_entry.js":
/*!****************************************************************!*\
  !*** ./src/addons/addons/middle-click-popup/_runtime_entry.js ***!
  \****************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/middle-click-popup/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/middle-click-popup/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/middle-click-popup/module.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/middle-click-popup/module.js ***!
  \********************************************************/
/*! exports provided: getTextWidth, clearTextWidthCache, onClearTextWidthCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextWidth", function() { return getTextWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearTextWidthCache", function() { return clearTextWidthCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onClearTextWidthCache", function() { return onClearTextWidthCache; });
/* harmony import */ var _event_target_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../event-target.js */ "./src/addons/event-target.js");
 /* inserted by pull.js */

const textWidthCache = new Map();
const textWidthCacheSize = 1000;
const eventTarget = new _event_target_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
const eventClearTextCache = "clearTextCache";

/**
 * Gets the width of an svg text element, with caching.
 * @param {SVGTextElement} textElement
 */
function getTextWidth(textElement) {
  let string = textElement.innerHTML;
  if (string.length === 0) return 0;
  let width = textWidthCache.get(string);
  if (width) return width;
  width = textElement.getBoundingClientRect().width;
  textWidthCache.set(string, width);
  if (textWidthCache.size > textWidthCacheSize) {
    textWidthCache.delete(textWidthCache.keys().next());
  }
  return width;
}

/**
 * Clears the text width cache of the middle click popup.
 */
function clearTextWidthCache() {
  textWidthCache.clear();
  eventTarget.dispatchEvent(new CustomEvent(eventClearTextCache));
}

/**
 * @param {() => void} func
 */
function onClearTextWidthCache(func) {
  eventTarget.addEventListener(eventClearTextCache, func);
}

/***/ }),

/***/ "./src/addons/addons/middle-click-popup/userscript.js":
/*!************************************************************!*\
  !*** ./src/addons/addons/middle-click-popup/userscript.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WorkspaceQuerier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkspaceQuerier.js */ "./src/addons/addons/middle-click-popup/WorkspaceQuerier.js");
/* harmony import */ var _BlockRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockRenderer.js */ "./src/addons/addons/middle-click-popup/BlockRenderer.js");
/* harmony import */ var _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlockTypeInfo.js */ "./src/addons/addons/middle-click-popup/BlockTypeInfo.js");
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module.js */ "./src/addons/addons/middle-click-popup/module.js");
//@ts-check





/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    msg,
    console
  } = _ref;
  const Blockly = await addon.tab.traps.getBlockly();
  const vm = addon.tab.traps.vm;
  const PREVIEW_LIMIT = 50;
  const popupRoot = document.body.appendChild(document.createElement("div"));
  popupRoot.classList.add("sa-mcp-root");
  popupRoot.dir = addon.tab.direction;
  popupRoot.style.display = "none";
  const popupContainer = popupRoot.appendChild(document.createElement("div"));
  popupContainer.classList.add("sa-mcp-container");
  const popupInputContainer = popupContainer.appendChild(document.createElement("div"));
  popupInputContainer.classList.add(addon.tab.scratchClass("input_input-form"));
  popupInputContainer.classList.add("sa-mcp-input-wrapper");
  const popupInputSuggestion = popupInputContainer.appendChild(document.createElement("input"));
  popupInputSuggestion.classList.add("sa-mcp-input-suggestion");
  const popupInput = popupInputContainer.appendChild(document.createElement("input"));
  popupInput.classList.add("sa-mcp-input");
  popupInput.setAttribute("autocomplete", "off");
  const popupPreviewContainer = popupContainer.appendChild(document.createElement("div"));
  popupPreviewContainer.classList.add("sa-mcp-preview-container");
  const popupPreviewScrollbarSVG = popupContainer.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "svg"));
  popupPreviewScrollbarSVG.classList.add("sa-mcp-preview-scrollbar", "blocklyScrollbarVertical", "blocklyMainWorkspaceScrollbar");
  popupPreviewScrollbarSVG.style.display = "none";
  const popupPreviewScrollbarBackground = popupPreviewScrollbarSVG.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "rect"));
  popupPreviewScrollbarBackground.setAttribute("width", "11");
  popupPreviewScrollbarBackground.classList.add("blocklyScrollbarBackground");
  const popupPreviewScrollbarHandle = popupPreviewScrollbarSVG.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "rect"));
  popupPreviewScrollbarHandle.setAttribute("rx", "3");
  popupPreviewScrollbarHandle.setAttribute("ry", "3");
  popupPreviewScrollbarHandle.setAttribute("width", "6");
  popupPreviewScrollbarHandle.setAttribute("x", "2.5");
  popupPreviewScrollbarHandle.classList.add("blocklyScrollbarHandle");
  const popupPreviewBlocks = popupPreviewContainer.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "svg"));
  popupPreviewBlocks.classList.add("sa-mcp-preview-blocks");
  const querier = new _WorkspaceQuerier_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  let mousePosition = {
    x: 0,
    y: 0
  };
  document.addEventListener("mousemove", e => {
    mousePosition = {
      x: e.clientX,
      y: e.clientY
    };
  });
  document.addEventListener("mousedown", e => {
    mousePosition = {
      x: e.clientX,
      y: e.clientY
    };
  }, {
    capture: true
  });
  Object(_module_js__WEBPACK_IMPORTED_MODULE_3__["onClearTextWidthCache"])(closePopup);

  /**
   * @typedef ResultPreview
   * @property {BlockInstance} block
   * @property {((endOnly: boolean) => string)?} autocompleteFactory
   * @property {BlockComponent} renderedBlock
   * @property {SVGGElement} svgBlock
   * @property {SVGRectElement} svgBackground
   */
  /** @type {ResultPreview[]} */
  let queryPreviews = [];
  /** @type {QueryResult | null} */
  let queryIllegalResult = null;
  let selectedPreviewIdx = 0;
  /** @type {BlockTypeInfo[]?} */
  let blockTypes = null;
  let limited = false;
  let allowMenuClose = true;
  let popupPosition = null;
  let popupOrigin = null;
  let previewWidth = 0;
  let previewHeight = 0;
  let previewScale = 0;
  let previewMinHeight = 0;
  let previewMaxHeight = 0;
  function openPopup() {
    if (addon.self.disabled) return;

    // Don't show the menu if we're not in the code editor
    if (addon.tab.editorMode !== "editor") return;
    if (addon.tab.redux.state.scratchGui.editorTab.activeTabIndex !== 0) return;
    blockTypes = _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_2__["BlockTypeInfo"].getBlocks(Blockly, vm, Blockly.getMainWorkspace(), msg);
    querier.indexWorkspace([...blockTypes]);
    blockTypes.sort((a, b) => {
      const prio = block => ["operators", "data"].indexOf(block.category.name) - block.id.startsWith("data_");
      return prio(b) - prio(a);
    });
    previewScale = window.innerWidth * 0.00005 + addon.settings.get("popup_scale") / 100;
    previewWidth = window.innerWidth * addon.settings.get("popup_width") / 100;
    previewMaxHeight = window.innerHeight * addon.settings.get("popup_max_height") / 100;
    popupContainer.style.width = previewWidth + "px";
    popupOrigin = {
      x: mousePosition.x,
      y: mousePosition.y
    };
    popupRoot.style.display = "";
    popupInput.value = "";
    popupInput.focus();
    updateInput();
  }
  function closePopup() {
    if (allowMenuClose) {
      popupOrigin = null;
      popupPosition = null;
      popupRoot.style.display = "none";
      blockTypes = null;
      querier.clearWorkspaceIndex();
    }
  }
  popupInput.addEventListener("input", updateInput);
  function updateInput() {
    /**
     * @typedef MenuItem
     * @property {BlockInstance} block
     * @property {(endOnly: boolean) => string} [autocompleteFactory]
     */
    /** @type {MenuItem[]} */
    const blockList = [];
    if (popupInput.value.trim().length === 0) {
      queryIllegalResult = null;
      if (blockTypes) for (const blockType of blockTypes) {
        blockList.push({
          block: blockType.createBlock()
        });
      }
      limited = false;
    } else {
      // Get the list of blocks to display using the input content
      const queryResultObj = querier.queryWorkspace(popupInput.value);
      const queryResults = queryResultObj.results;
      queryIllegalResult = queryResultObj.illegalResult;
      limited = queryResultObj.limited;
      if (queryResults.length > PREVIEW_LIMIT) queryResults.length = PREVIEW_LIMIT;
      for (const queryResult of queryResults) {
        blockList.push({
          block: queryResult.getBlock(),
          autocompleteFactory: endOnly => queryResult.toText(endOnly)
        });
      }
    }

    // @ts-ignore Delete the old previews
    while (popupPreviewBlocks.firstChild) popupPreviewBlocks.removeChild(popupPreviewBlocks.lastChild);

    // Create the new previews
    queryPreviews.length = 0;
    let y = 0;
    for (let resultIdx = 0; resultIdx < blockList.length; resultIdx++) {
      var _result$autocompleteF;
      const result = blockList[resultIdx];
      const mouseMoveListener = () => {
        updateSelection(resultIdx);
      };
      const mouseDownListener = e => {
        e.stopPropagation();
        e.preventDefault();
        updateSelection(resultIdx);
        allowMenuClose = !e.shiftKey;
        selectBlock();
        allowMenuClose = true;
        if (e.shiftKey) popupInput.focus();
      };
      const svgBackground = popupPreviewBlocks.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "rect"));
      const height = Object(_BlockRenderer_js__WEBPACK_IMPORTED_MODULE_1__["getBlockHeight"])(result.block);
      svgBackground.setAttribute("transform", "translate(0, ".concat((y + height / 10) * previewScale, ")"));
      svgBackground.setAttribute("height", height * previewScale + "px");
      svgBackground.classList.add("sa-mcp-preview-block-bg");
      svgBackground.addEventListener("mousemove", mouseMoveListener);
      svgBackground.addEventListener("mousedown", mouseDownListener);
      const svgBlock = popupPreviewBlocks.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "g"));
      svgBlock.addEventListener("mousemove", mouseMoveListener);
      svgBlock.addEventListener("mousedown", mouseDownListener);
      svgBlock.classList.add("sa-mcp-preview-block");
      const renderedBlock = Object(_BlockRenderer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result.block, svgBlock);
      queryPreviews.push({
        block: result.block,
        autocompleteFactory: (_result$autocompleteF = result.autocompleteFactory) !== null && _result$autocompleteF !== void 0 ? _result$autocompleteF : null,
        renderedBlock,
        svgBlock,
        svgBackground
      });
      y += height;
    }
    const height = (y + 8) * previewScale;
    if (height < previewMinHeight) previewHeight = previewMinHeight;else if (height > previewMaxHeight) previewHeight = previewMaxHeight;else previewHeight = height;
    popupPreviewBlocks.setAttribute("height", "".concat(height, "px"));
    popupPreviewContainer.style.height = previewHeight + "px";
    popupPreviewScrollbarSVG.style.height = previewHeight + "px";
    popupPreviewScrollbarBackground.setAttribute("height", "" + previewHeight);
    popupInputContainer.dataset["error"] = "" + limited;
    popupPosition = {
      x: popupOrigin.x + 16,
      y: popupOrigin.y - 8
    };
    const popupHeight = popupContainer.getBoundingClientRect().height;
    const popupBottom = popupPosition.y + popupHeight;
    if (popupBottom > window.innerHeight) {
      popupPosition.y -= popupBottom - window.innerHeight;
    }
    popupRoot.style.top = popupPosition.y + "px";
    popupRoot.style.left = popupPosition.x + "px";
    selectedPreviewIdx = -1;
    updateSelection(0);
    updateCursor();
    updateScrollbar();
  }
  function updateSelection(newIdx) {
    if (selectedPreviewIdx === newIdx) return;
    const oldSelection = queryPreviews[selectedPreviewIdx];
    if (oldSelection) {
      oldSelection.svgBackground.classList.remove("sa-mcp-preview-block-bg-selection");
      oldSelection.svgBlock.classList.remove("sa-mcp-preview-block-selection");
    }
    if (queryPreviews.length === 0 && queryIllegalResult) {
      popupInputSuggestion.value = popupInput.value + queryIllegalResult.toText(true).substring(popupInput.value.length);
      return;
    }
    const newSelection = queryPreviews[newIdx];
    if (newSelection && newSelection.autocompleteFactory) {
      newSelection.svgBackground.classList.add("sa-mcp-preview-block-bg-selection");
      newSelection.svgBlock.classList.add("sa-mcp-preview-block-selection");
      newSelection.svgBackground.scrollIntoView({
        block: "nearest",
        behavior: Math.abs(newIdx - selectedPreviewIdx) > 1 ? "smooth" : "auto"
      });
      popupInputSuggestion.value = popupInput.value + newSelection.autocompleteFactory(true).substring(popupInput.value.length);
    } else {
      popupInputSuggestion.value = "";
    }
    selectedPreviewIdx = newIdx;
  }

  // @ts-ignore
  document.addEventListener("selectionchange", updateCursor);
  function updateCursor() {
    var _popupInput$selection;
    const cursorPos = (_popupInput$selection = popupInput.selectionStart) !== null && _popupInput$selection !== void 0 ? _popupInput$selection : 0;
    const cursorPosRel = popupInput.value.length === 0 ? 0 : cursorPos / popupInput.value.length;
    let y = 0;
    for (let previewIdx = 0; previewIdx < queryPreviews.length; previewIdx++) {
      const preview = queryPreviews[previewIdx];
      var blockX = 5;
      if (blockX + preview.renderedBlock.width > previewWidth / previewScale) blockX += (previewWidth / previewScale - blockX - preview.renderedBlock.width) * previewScale * cursorPosRel;
      var blockY = (y + 30) * previewScale;
      preview.svgBlock.setAttribute("transform", "translate(".concat(blockX, ", ").concat(blockY, ") scale(").concat(previewScale, ")"));
      y += Object(_BlockRenderer_js__WEBPACK_IMPORTED_MODULE_1__["getBlockHeight"])(preview.block);
    }
    popupInputSuggestion.scrollLeft = popupInput.scrollLeft;
  }
  popupPreviewContainer.addEventListener("scroll", updateScrollbar);
  function updateScrollbar() {
    const scrollTop = popupPreviewContainer.scrollTop;
    const scrollY = popupPreviewContainer.scrollHeight;
    if (scrollY <= previewHeight) {
      popupPreviewScrollbarSVG.style.display = "none";
      return;
    }
    const scrollbarHeight = previewHeight / scrollY * previewHeight;
    const scrollbarY = scrollTop / scrollY * previewHeight;
    popupPreviewScrollbarSVG.style.display = "";
    popupPreviewScrollbarHandle.setAttribute("height", "" + scrollbarHeight);
    popupPreviewScrollbarHandle.setAttribute("y", "" + scrollbarY);
  }
  function selectBlock() {
    const selectedPreview = queryPreviews[selectedPreviewIdx];
    if (!selectedPreview) return;
    const workspace = Blockly.getMainWorkspace();
    // This is mostly copied from https://github.com/scratchfoundation/scratch-blocks/blob/893c7e7ad5bfb416eaed75d9a1c93bdce84e36ab/core/scratch_blocks_utils.js#L171
    // Some bits were removed or changed to fit our needs.
    workspace.setResizesEnabled(false);
    let newBlock;
    Blockly.Events.disable();
    try {
      newBlock = selectedPreview.block.createWorkspaceForm();
      Blockly.scratchBlocksUtils.changeObscuredShadowIds(newBlock);
      var svgRootNew = newBlock.getSvgRoot();
      if (!svgRootNew) {
        throw new Error("newBlock is not rendered.");
      }
      let blockBounds = newBlock.svgPath_.getBoundingClientRect();
      let newBlockX = Math.floor((mousePosition.x - (blockBounds.left + blockBounds.right) / 2) / workspace.scale);
      let newBlockY = Math.floor((mousePosition.y - (blockBounds.top + blockBounds.bottom) / 2) / workspace.scale);
      newBlock.moveBy(newBlockX, newBlockY);
    } finally {
      Blockly.Events.enable();
    }
    if (Blockly.Events.isEnabled()) {
      Blockly.Events.fire(new Blockly.Events.BlockCreate(newBlock));
    }
    let fakeEvent = {
      clientX: mousePosition.x,
      clientY: mousePosition.y,
      type: "mousedown",
      stopPropagation: function stopPropagation() {},
      preventDefault: function preventDefault() {},
      target: selectedPreview.svgBlock
    };
    if (workspace.getGesture(fakeEvent)) {
      workspace.startDragWithFakeEvent(fakeEvent, newBlock);
    }
  }
  function acceptAutocomplete() {
    let factory;
    if (queryPreviews[selectedPreviewIdx]) factory = queryPreviews[selectedPreviewIdx].autocompleteFactory;else factory = () => popupInputSuggestion.value;
    if (popupInputSuggestion.value.length === 0 || !factory) return;
    popupInput.value = factory(false);
    // Move cursor to the end of the newly inserted text
    popupInput.selectionStart = popupInput.value.length + 1;
    updateInput();
  }
  popupInput.addEventListener("keydown", e => {
    switch (e.key) {
      case "Escape":
        // If there's something in the input, clear it
        if (popupInput.value.length > 0) {
          popupInput.value = "";
          updateInput();
        } else {
          // If not, close the menu
          closePopup();
        }
        e.stopPropagation();
        e.preventDefault();
        break;
      case "Tab":
        acceptAutocomplete();
        e.stopPropagation();
        e.preventDefault();
        break;
      case "Enter":
        selectBlock();
        closePopup();
        e.stopPropagation();
        e.preventDefault();
        break;
      case "ArrowDown":
        if (selectedPreviewIdx + 1 >= queryPreviews.length) updateSelection(0);else updateSelection(selectedPreviewIdx + 1);
        e.stopPropagation();
        e.preventDefault();
        break;
      case "ArrowUp":
        if (selectedPreviewIdx - 1 < 0) updateSelection(queryPreviews.length - 1);else updateSelection(selectedPreviewIdx - 1);
        e.stopPropagation();
        e.preventDefault();
        break;
    }
  });
  popupInput.addEventListener("focusout", closePopup);

  // Open on ctrl + space
  document.addEventListener("keydown", e => {
    if (e.key === " " && (e.ctrlKey || e.metaKey)) {
      openPopup();
      e.preventDefault();
      e.stopPropagation();
    }
  });

  // Open on mouse wheel button
  const _doWorkspaceClick_ = Blockly.Gesture.prototype.doWorkspaceClick_;
  Blockly.Gesture.prototype.doWorkspaceClick_ = function () {
    if (this.mostRecentEvent_.button === 1 || this.mostRecentEvent_.shiftKey) openPopup();
    mousePosition = {
      x: this.mostRecentEvent_.clientX,
      y: this.mostRecentEvent_.clientY
    };
    _doWorkspaceClick_.call(this);
  };

  // The popup should delete blocks dragged ontop of it
  const _isDeleteArea = Blockly.WorkspaceSvg.prototype.isDeleteArea;
  Blockly.WorkspaceSvg.prototype.isDeleteArea = function (e) {
    if (popupPosition) {
      if (e.clientX > popupPosition.x && e.clientX < popupPosition.x + previewWidth && e.clientY > popupPosition.y && e.clientY < popupPosition.y + previewHeight) {
        return Blockly.DELETE_AREA_TOOLBOX;
      }
    }
    return _isDeleteArea.call(this, e);
  };
});

/***/ }),

/***/ "./src/addons/addons/move-to-top-bottom/_runtime_entry.js":
/*!****************************************************************!*\
  !*** ./src/addons/addons/move-to-top-bottom/_runtime_entry.js ***!
  \****************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/move-to-top-bottom/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/move-to-top-bottom/userscript.js":
/*!************************************************************!*\
  !*** ./src/addons/addons/move-to-top-bottom/userscript.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async _ref => {
  let {
    addon,
    console,
    msg
  } = _ref;
  const types = ["sound", "costume"];
  addon.tab.createEditorContextMenu(ctx => {
    const target = addon.tab.traps.vm.editingTarget;
    if (ctx.type === "sound") {
      target.reorderSound(ctx.index, 0);
    } else {
      target.reorderCostume(ctx.index, 0);
    }
    queueMicrotask(() => {
      addon.tab.traps.vm.emitTargetsUpdate();
      addon.tab.traps.vm.runtime.emitProjectChanged();
      ctx.target.click();
    });
  }, {
    types,
    position: "assetContextMenuAfterExport",
    order: 1,
    label: msg("top"),
    condition: ctx => ctx.index !== 0
  });
  addon.tab.createEditorContextMenu(ctx => {
    const target = addon.tab.traps.vm.editingTarget;
    if (ctx.type === "sound") {
      target.reorderSound(ctx.index, Infinity);
    } else {
      target.reorderCostume(ctx.index, Infinity);
    }
    queueMicrotask(() => {
      addon.tab.traps.vm.emitTargetsUpdate();
      addon.tab.traps.vm.runtime.emitProjectChanged();
      ctx.target.click();
    });
  }, {
    types,
    position: "assetContextMenuAfterExport",
    order: 2,
    label: msg("bottom"),
    condition: ctx => ctx.index !== ctx.target.parentNode.parentNode.childElementCount - 1
  });
});

/***/ }),

/***/ "./src/addons/addons/onion-skinning/_runtime_entry.js":
/*!************************************************************!*\
  !*** ./src/addons/addons/onion-skinning/_runtime_entry.js ***!
  \************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/onion-skinning/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/onion-skinning/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_decrement_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./decrement.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/decrement.svg");
/* harmony import */ var _url_loader_increment_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-loader!./increment.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/increment.svg");
/* harmony import */ var _url_loader_settings_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url-loader!./settings.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/settings.svg");
/* harmony import */ var _url_loader_toggle_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url-loader!./toggle.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/toggle.svg");
/* generated by pull.js */






const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "decrement.svg": _url_loader_decrement_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  "increment.svg": _url_loader_increment_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  "settings.svg": _url_loader_settings_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
  "toggle.svg": _url_loader_toggle_svg__WEBPACK_IMPORTED_MODULE_5__["default"]
};

/***/ }),

/***/ "./src/addons/addons/onion-skinning/userscript.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/onion-skinning/userscript.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _turbowarp_scratch_svg_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turbowarp/scratch-svg-renderer */ "./node_modules/@turbowarp/scratch-svg-renderer/src/index.js");
/* harmony import */ var _turbowarp_scratch_svg_renderer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_turbowarp_scratch_svg_renderer__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    console,
    msg
  } = _ref;
  const paper = await addon.tab.traps.getPaper();
  const paintEditorCanvasContainer = await addon.tab.waitForElement("[class^='paint-editor_canvas-container']");
  try {
    if (!("colorIndex" in addon.tab.redux.state.scratchPaint.fillMode)) {
      console.error("Detected new paint editor; this will be supported in future versions.");
      return;
    }
  } catch (_) {
    // The check can technically fail when Redux isn't supported (rare cases)
    // Just ignore in this case
  }
  const paperCanvas = paintEditorCanvasContainer[addon.tab.traps.getInternalKey(paintEditorCanvasContainer)].child.child.child.stateNode;
  const storedOnionLayers = [];
  const parseHexColor = color => {
    const hexString = color.substr(1);
    const hexNumber = parseInt(hexString, 16);
    return [hexNumber >> 16 & 0xff,
    // R
    hexNumber >> 8 & 0xff,
    // G
    hexNumber & 0xff // B
    ];
  };
  const settings = {
    enabled: addon.settings.get("default") && !addon.self.disabled,
    previous: +addon.settings.get("previous"),
    next: +addon.settings.get("next"),
    opacity: +addon.settings.get("opacity"),
    opacityStep: +addon.settings.get("opacityStep"),
    layering: addon.settings.get("layering"),
    mode: addon.settings.get("mode"),
    beforeTint: parseHexColor(addon.settings.get("beforeTint")),
    afterTint: parseHexColor(addon.settings.get("afterTint"))
  };
  const getPaperCenter = () => {
    const backgroundGuideLayer = paper.project.layers.find(i => i.data.isBackgroundGuideLayer);
    return backgroundGuideLayer.children[0].position;
  };
  const injectPaper = () => {
    // When background guide layer is added, show onion layers.
    // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/helper/layer.js#L145
    const originalAddLayer = paper.Project.prototype.addLayer;
    paper.Project.prototype.addLayer = function (layer) {
      const result = originalAddLayer.call(this, layer);
      if (layer.data.isBackgroundGuideLayer) {
        let onion;
        while (onion = storedOnionLayers.shift()) {
          originalAddLayer.call(this, onion);
        }
        relayerOnionLayers();
      }
      return result;
    };

    // Scratch uses importJSON to undo or redo
    // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/helper/undo.js#L37
    // The code prior to this will remove our onion layers, so we have to manually add them back.
    const originalImportJSON = paper.Project.prototype.importJSON;
    paper.Project.prototype.importJSON = function (json) {
      const result = originalImportJSON.call(this, json);
      if (settings.enabled) {
        updateOnionLayers();
      }
      return result;
    };

    // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/helper/layer.js#L114
    // When background guide layer is removed, hide onion layers.
    const originalRemoveLayer = paper.Layer.prototype.remove;
    paper.Layer.prototype.remove = function () {
      if (this.data.isBackgroundGuideLayer) {
        for (const layer of paper.project.layers) {
          if (layer.data.sa_isOnionLayer) {
            storedOnionLayers.push(layer);
          }
        }
        for (const layer of storedOnionLayers) {
          layer.remove();
        }
      }
      return originalRemoveLayer.call(this);
    };
  };
  const injectPaperCanvas = () => {
    let expectingImport = false;
    const PaperCanvas = paperCanvas.constructor;

    // importImage is called to start loading an image.
    // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L124
    const originalImportImage = PaperCanvas.prototype.importImage;
    PaperCanvas.prototype.importImage = function () {
      expectingImport = true;
      removeOnionLayers();
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return originalImportImage.call(this, ...args);
    };

    // recalibrateSize is called when the canvas finishes loading an image.
    // all paths of importImage will result in a call to this method.
    // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L310-L327
    // We use this to know when to add layers.
    const originalRecalibrateSize = PaperCanvas.prototype.recalibrateSize;
    PaperCanvas.prototype.recalibrateSize = function (callback) {
      return originalRecalibrateSize.call(this, () => {
        if (callback) callback();
        if (expectingImport) {
          expectingImport = false;
          if (settings.enabled) {
            updateOnionLayers();
          }
        }
      });
    };

    // Prototype overrides will work for all future instances, but Scratch manually binds some methods to `this`
    // so we have to manually copy them for the current instance (but not future instances)
    paperCanvas.recalibrateSize = PaperCanvas.prototype.recalibrateSize.bind(paperCanvas);
    paperCanvas.importImage = PaperCanvas.prototype.importImage.bind(paperCanvas);
  };
  const createOnionLayer = () => {
    const layer = new paper.Layer();
    layer.locked = true;
    layer.guide = true;
    layer.data.sa_isOnionLayer = true;
    return layer;
  };

  // Each onion layer update is given an ID
  // Because updating layers is async, we need this to cancel all but the most recent update
  let globalUpdateId = 0;
  const cancelOngoingUpdatesAndGetNewId = () => ++globalUpdateId;
  const removeOnionLayers = () => {
    cancelOngoingUpdatesAndGetNewId();
    const project = paper.project;
    if (!project) {
      return;
    }
    storedOnionLayers.length = 0;
    const layers = project.layers;
    // Iterate downward because we remove items mid-iteration
    for (let i = layers.length - 1; i >= 0; i--) {
      const layer = layers[i];
      if (layer.data.sa_isOnionLayer) {
        layer.remove();
      }
    }
  };
  const relayerOnionLayers = () => {
    const project = paper.project;
    if (!project) {
      return;
    }
    const onionLayer = project.layers.find(i => i.data.sa_isOnionLayer);
    if (!onionLayer) {
      return;
    }
    if (settings.layering === "front") {
      project.addLayer(onionLayer);
    } else {
      const rasterLayer = project.layers.find(i => i.data.isRasterLayer);
      if (rasterLayer.index === 0) {
        project.insertLayer(0, onionLayer);
      } else {
        project.insertLayer(1, onionLayer);
      }
    }
  };
  const recursePaperItem = (item, callback) => {
    if (item.children) {
      for (const child of item.children) {
        recursePaperItem(child, callback);
      }
    }
    callback(item);
  };
  const getTint = (red, green, blue, isBefore) => {
    const referenceColor = isBefore ? settings.beforeTint : settings.afterTint;
    const colorAverage = (red + green + blue) / 3 / 255;
    const WEIGHT = 1.5;
    const weighted = colorAverage / WEIGHT + (1 - 1 / WEIGHT);
    return [referenceColor[0] * weighted, referenceColor[1] * weighted, referenceColor[2] * weighted];
  };
  const toHexColor = _ref2 => {
    let [red, green, blue] = _ref2;
    const r = Math.round(red).toString(16).padStart(2, "0");
    const g = Math.round(green).toString(16).padStart(2, "0");
    const b = Math.round(blue).toString(16).padStart(2, "0");
    return "#".concat(r).concat(g).concat(b);
  };
  const getPaperColorTint = (color, isBefore) => toHexColor(getTint(color.red * 255, color.green * 255, color.blue * 255, isBefore));
  const tintRaster = (raster, isBefore) => {
    const {
      width,
      height
    } = raster.canvas;
    const context = raster.context;
    // TODO: check to see if this is a performance issue
    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4 /* RGBA */) {
      const red = data[i + 0];
      const green = data[i + 1];
      const blue = data[i + 2];
      const alpha = data[i + 3];
      if (alpha === 0) {
        continue;
      }
      const newTint = getTint(red, green, blue, isBefore);
      data[i + 0] = newTint[0];
      data[i + 1] = newTint[1];
      data[i + 2] = newTint[2];
    }
    context.putImageData(imageData, 0, 0);
  };
  const waitForAllRastersToLoad = root => {
    const promises = [];
    recursePaperItem(root, item => {
      if (item instanceof paper.Raster) {
        promises.push(new Promise((resolve, reject) => {
          item.on("load", () => resolve());
          item.on("error", () => reject(new Error("Raster inside SVG failed to load")));
        }));
      }
    });
    return Promise.all(promises);
  };
  const rasterizeVector = root => {
    const bounds = root.strokeBounds;
    const {
      width,
      height
    } = bounds;

    // Some browsers experience extremely poor performance when this value exceeds 3840.
    const MAX_SIZE = 3000;
    const maxScale = Math.min(MAX_SIZE / width, MAX_SIZE / height);
    const raster = new paper.Raster(new paper.Size(width, height));
    raster.remove();
    raster.smoothing = true;
    raster.guide = true;
    raster.locked = true;
    let renderedAtScale = 0;
    const originalDraw = raster.draw;
    raster.draw = function () {
      const displayedSize = this.getView().getZoom() * window.devicePixelRatio;
      const newScale = Math.max(1, Math.min(maxScale, 2 ** Math.ceil(Math.log2(displayedSize))));
      if (newScale > renderedAtScale) {
        renderedAtScale = newScale;
        const canvas = this.canvas;
        const ctx = this.context;

        // Based on https://github.com/scratchfoundation/paper.js/blob/16d5ff0267e3a0ef647c25e58182a27300afad20/src/item/Item.js#L1761
        const scaledWidth = width * newScale;
        const scaledHeight = height * newScale;
        canvas.width = scaledWidth;
        canvas.height = scaledHeight;
        this._size = new paper.Size(scaledWidth, scaledHeight);
        const topLeft = bounds.getTopLeft();
        const bottomRight = bounds.getBottomRight();
        const size = new paper.Size(bottomRight.subtract(topLeft));
        const matrix = new paper.Matrix().scale(newScale).translate(topLeft.negate());
        ctx.save();
        matrix.applyToContext(ctx);
        root.draw(ctx, new paper.Base({
          matrices: [matrix]
        }));
        ctx.restore();
        this.matrix.reset();
        this.transform(new paper.Matrix().translate(topLeft.add(size.divide(2))).scale(1 / newScale));
      }
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return originalDraw.call(this, ...args);
    };
    return raster;
  };
  const makeVectorOnion = (opacity, costume, asset, isBefore) => new Promise((resolve, reject) => {
    asset = _turbowarp_scratch_svg_renderer__WEBPACK_IMPORTED_MODULE_0__["sanitizeSvg"].sanitizeSvgText(asset);
    const {
      rotationCenterX,
      rotationCenterY
    } = costume;
    // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L196-L218
    asset = asset.split(/<\s*svg:/).join("<");
    asset = asset.split(/<\/\s*svg:/).join("</");
    const svgAttrs = asset.match(/<svg [^>]*>/);
    if (svgAttrs && svgAttrs[0].indexOf("xmlns=") === -1) {
      asset = asset.replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" ');
    }
    const parser = new DOMParser();
    const svgDom = parser.parseFromString(asset, "text/xml");
    const viewBox = svgDom.documentElement.attributes.viewBox ? svgDom.documentElement.attributes.viewBox.value.match(/\S+/g) : null;
    if (viewBox) {
      for (let i = 0; i < viewBox.length; i++) {
        viewBox[i] = parseFloat(viewBox[i]);
      }
    }
    const handleLoad = root => {
      root.opacity = opacity;

      // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L274-L275
      recursePaperItem(root, i => {
        if (i.className === "PathItem") {
          i.clockwise = true;
        }
        if (i.className !== "PointText" && !i.children) {
          if (i.strokeWidth) {
            i.strokeWidth = i.strokeWidth * 2;
          }
        }
        i.locked = true;
        i.guide = true;
      });
      root.scale(2, new paper.Point(0, 0));
      if (settings.mode === "tint") {
        const gradients = new Set();
        recursePaperItem(root, i => {
          if (i.strokeColor) {
            i.strokeColor = getPaperColorTint(i.strokeColor, isBefore);
          }
          if (i.fillColor) {
            const gradient = i.fillColor.gradient;
            if (gradient) {
              if (gradients.has(gradient)) return;
              gradients.add(gradient);
              for (const stop of gradient.stops) {
                stop.color = getPaperColorTint(stop.color, isBefore);
              }
            } else {
              i.fillColor = getPaperColorTint(i.fillColor, isBefore);
            }
          }
          if (i.canvas) {
            tintRaster(i, isBefore);
          }
        });
      }
      const paperCenter = getPaperCenter();
      // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L277-L287
      if (typeof rotationCenterX !== "undefined" && typeof rotationCenterY !== "undefined") {
        let rotationPoint = new paper.Point(rotationCenterX, rotationCenterY);
        if (viewBox && viewBox.length >= 2 && !isNaN(viewBox[0]) && !isNaN(viewBox[1])) {
          rotationPoint = rotationPoint.subtract(viewBox[0], viewBox[1]);
        }
        root.translate(paperCenter.subtract(rotationPoint.multiply(2)));
      } else {
        root.translate(paperCenter.subtract(root.bounds.width, root.bounds.height));
      }
      return rasterizeVector(root);
    };
    paper.project.importSVG(asset, {
      expandShapes: true,
      insert: false,
      onLoad: root => {
        if (!root) {
          reject(new Error("could not load onion skin"));
          return;
        }
        resolve(waitForAllRastersToLoad(root).then(() => handleLoad(root)));
      }
    });
  });
  const makeRasterOnion = (opacity, costume, asset, isBefore) => new Promise((resolve, reject) => {
    let {
      rotationCenterX,
      rotationCenterY
    } = costume;
    const image = new Image();
    image.onload = () => {
      const paperCenter = getPaperCenter();
      const width = Math.min(paperCenter.x * 2, image.width);
      const height = Math.min(paperCenter.y * 2, image.height);

      // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L151-L156
      if (typeof rotationCenterX === "undefined") {
        rotationCenterX = width / 2;
      }
      if (typeof rotationCenterY === "undefined") {
        rotationCenterY = height / 2;
      }
      const raster = new paper.Raster(image);
      raster.opacity = opacity;
      raster.guide = true;
      raster.locked = true;
      const x = width / 2 + (paperCenter.x - rotationCenterX);
      const y = height / 2 + (paperCenter.y - rotationCenterY);
      raster.position = new paper.Point(x, y);
      raster.remove();
      if (settings.mode === "tint") {
        tintRaster(raster, isBefore);
      }
      resolve(raster);
    };
    image.onerror = () => {
      reject(new Error("could not load image"));
    };
    image.src = asset;
  });
  const getSelectedCostumeIndex = () => {
    const item = document.querySelector("[class*='selector_list-item'][class*='sprite-selector-item_is-selected']");
    if (!item) return -1;
    const numberEl = item.querySelector("[class*='sprite-selector-item_number']");
    if (!numberEl) return -1;
    return +numberEl.textContent - 1;
  };
  const updateOnionLayers = async () => {
    const project = paper.project;
    if (!project) {
      return;
    }
    const selectedCostumeIndex = getSelectedCostumeIndex();
    if (selectedCostumeIndex === -1) {
      return;
    }
    removeOnionLayers();
    const localUpdateId = cancelOngoingUpdatesAndGetNewId();
    const vm = addon.tab.traps.vm;
    if (!vm) {
      return;
    }
    const originalActiveLayer = project.activeLayer;
    const costumes = vm.editingTarget.sprite.costumes;
    const startIndex = Math.max(0, selectedCostumeIndex - settings.previous);
    const endIndex = Math.min(costumes.length - 1, selectedCostumeIndex + settings.next);
    try {
      const layersToCreate = [];
      for (let i = startIndex; i <= endIndex; i++) {
        if (i === selectedCostumeIndex) {
          continue;
        }
        const isBefore = i < selectedCostumeIndex;
        const distance = Math.abs(i - selectedCostumeIndex) - 1;
        const opacity = (settings.opacity - settings.opacityStep * distance) / 100;
        if (opacity <= 0) {
          continue;
        }
        layersToCreate.push({
          index: i,
          isBefore,
          opacity
        });
      }
      const onions = await Promise.all(layersToCreate.map(_ref3 => {
        let {
          index,
          isBefore,
          opacity
        } = _ref3;
        const onionCostume = costumes[index];
        const onionAsset = vm.getCostume(index);
        if (onionCostume.dataFormat === "svg") {
          return makeVectorOnion(opacity, onionCostume, onionAsset, isBefore);
        } else if (onionCostume.dataFormat === "png" || onionCostume.dataFormat === "jpg") {
          return makeRasterOnion(opacity, onionCostume, onionAsset, isBefore);
        } else {
          throw new Error("Unknown data format: ".concat(onionCostume.dataFormat));
        }
      }));

      // Make sure we haven't been cancelled
      if (globalUpdateId === localUpdateId) {
        const layer = createOnionLayer();
        for (const item of onions) {
          layer.addChild(item);
        }
        relayerOnionLayers();
      }
    } catch (e) {
      console.error(e);
    }

    // We must make sure to always reset the active layer to avoid corruption.
    originalActiveLayer.activate();
  };
  const setEnabled = _enabled => {
    if (settings.enabled === _enabled) {
      return;
    }
    settings.enabled = _enabled;
    if (settings.enabled) {
      if (settings.next === 0 && settings.previous === 0) {
        settings.previous = 1;
        layerInputs.previous.value = settings.previous;
      }
      if (settings.opacity === 0) {
        settings.opacity = 25;
        layerInputs.opacity.value = settings.opacity;
      }
      updateOnionLayers();
    } else {
      removeOnionLayers();
    }
    toggleButton.dataset.enabled = settings.enabled;
  };

  //
  // Controls below editor
  //

  const settingsChanged = onlyRelayerNeeded => {
    if (settings.previous === 0 && settings.next === 0 || settings.opacity === 0) {
      setEnabled(false);
      return;
    }
    if (settings.enabled) {
      if (onlyRelayerNeeded) {
        relayerOnionLayers();
      } else {
        updateOnionLayers();
      }
    } else if (settings.previous > 0 || settings.next > 0) {
      setEnabled(true);
    }
  };
  const createGroup = () => {
    const el = document.createElement("div");
    el.className = "sa-onion-group";
    return el;
  };
  const createButton = function createButton() {
    let {
      useButtonTag
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const el = document.createElement(useButtonTag ? "button" : "span");
    el.className = "sa-onion-button";
    el.setAttribute("role", "button");
    return el;
  };
  const createButtonImage = name => {
    const el = document.createElement("img");
    el.className = "sa-onion-image";
    el.draggable = false;
    el.dataset.image = name;
    el.loading = "lazy";
    el.src = addon.self.getResource("/" + name + ".svg") /* rewritten by pull.js */;
    return el;
  };
  const toggleControlsGroup = createGroup();
  addon.tab.displayNoneWhileDisabled(toggleControlsGroup, {
    display: "flex"
  });
  const toggleButton = createButton();
  toggleButton.dataset.enabled = settings.enabled;
  toggleButton.addEventListener("click", () => setEnabled(!settings.enabled));
  toggleButton.title = msg("toggle");
  toggleButton.appendChild(createButtonImage("toggle"));
  const settingButton = createButton();
  settingButton.addEventListener("click", () => setSettingsOpen(!areSettingsOpen()));
  settingButton.title = msg("settings");
  settingButton.appendChild(createButtonImage("settings"));
  document.body.addEventListener("click", e => {
    if (areSettingsOpen() && !e.target.matches(".sa-onion-group *")) setSettingsOpen(false);
  });

  //
  // Settings page
  //

  const settingPageWrapper = document.createElement("div");
  settingPageWrapper.className = "sa-onion-settings-wrapper";
  toggleControlsGroup.append(settingPageWrapper, toggleButton, settingButton);
  const settingsPage = document.createElement("div");
  settingsPage.className = "sa-onion-settings";
  const setSettingsOpen = open => {
    settingButton.dataset.enabled = open;
    settingsPage.dataset.visible = open;
  };
  const areSettingsOpen = () => settingsPage.dataset.visible === "true";
  const layerInputs = {};
  for (const type of ["previous", "next", "opacity", "opacityStep"]) {
    const container = document.createElement("label");
    container.className = "sa-onion-settings-line";
    const label = document.createElement("div");
    label.className = "sa-onion-settings-label";
    label.textContent = msg(type);
    container.appendChild(label);
    const group = createGroup();
    const currentButton = createButton();
    const filler = document.createElement("div");
    filler.style.width = "20px";
    currentButton.appendChild(filler);
    const currentInput = document.createElement("input");
    layerInputs[type] = currentInput;
    currentInput.className = "sa-onion-settings-input";
    currentInput.type = "number";
    currentInput.step = "1";
    currentInput.min = "0";
    currentInput.max = "100";
    currentInput.value = settings[type];
    currentInput.addEventListener("input", e => {
      if (currentInput.value.length === 0) {
        settings[type] = 0;
        settingsChanged();
        return;
      }
      let value = +currentInput.value;
      if (value > +currentInput.max) {
        value = +currentInput.max;
      } else if (value < 0) {
        value = 0;
      }
      currentInput.value = value;
      settings[type] = value;
      settingsChanged();
    });
    currentInput.addEventListener("blur", () => {
      if (!currentInput.value) {
        currentInput.value = "0";
      }
    });
    currentButton.appendChild(currentInput);
    const decrementButton = createButton();
    decrementButton.appendChild(createButtonImage("decrement"));
    decrementButton.addEventListener("click", () => {
      if (settings[type] > 0) {
        settings[type]--;
        currentInput.value = settings[type];
        settingsChanged();
      }
    });
    const incrementButton = createButton();
    incrementButton.appendChild(createButtonImage("increment"));
    incrementButton.addEventListener("click", () => {
      if (settings[type] < +currentInput.max) {
        settings[type]++;
        currentInput.value = settings[type];
        settingsChanged();
      }
    });
    group.appendChild(decrementButton);
    group.appendChild(currentButton);
    group.appendChild(incrementButton);
    container.appendChild(group);
    settingsPage.appendChild(container);
  }
  const modeContainer = document.createElement("div");
  modeContainer.className = "sa-onion-settings-line";
  const modeLabel = document.createElement("div");
  modeLabel.className = "sa-onion-settings-label";
  modeLabel.textContent = msg("mode");
  const modeGroup = createGroup();
  modeContainer.appendChild(modeLabel);
  const modeMergeButton = createButton({
    useButtonTag: true
  });
  modeMergeButton.appendChild(document.createTextNode(msg("merge")));
  modeGroup.appendChild(modeMergeButton);
  modeMergeButton.addEventListener("click", e => {
    settings.mode = "merge";
    modeTintButton.dataset.enabled = false;
    modeMergeButton.dataset.enabled = true;
    settingsChanged();
  });
  modeMergeButton.dataset.enabled = settings.mode === "merge";
  const modeTintButton = createButton({
    useButtonTag: true
  });
  modeTintButton.appendChild(document.createTextNode(msg("tint")));
  modeGroup.appendChild(modeTintButton);
  modeTintButton.addEventListener("click", e => {
    settings.mode = "tint";
    modeTintButton.dataset.enabled = true;
    modeMergeButton.dataset.enabled = false;
    settingsChanged();
  });
  modeTintButton.dataset.enabled = settings.mode === "tint";
  modeContainer.appendChild(modeGroup);
  settingsPage.appendChild(modeContainer);
  const layeringContainer = document.createElement("div");
  layeringContainer.className = "sa-onion-settings-line";
  const layeringLabel = document.createElement("div");
  layeringLabel.className = "sa-onion-settings-label";
  layeringLabel.textContent = msg("layering");
  const layeringGroup = createGroup();
  layeringContainer.appendChild(layeringLabel);
  const layeringFrontButton = createButton({
    useButtonTag: true
  });
  layeringFrontButton.appendChild(document.createTextNode(msg("front")));
  layeringGroup.appendChild(layeringFrontButton);
  layeringFrontButton.addEventListener("click", e => {
    settings.layering = "front";
    layeringBehindButton.dataset.enabled = false;
    layeringFrontButton.dataset.enabled = true;
    settingsChanged(true);
  });
  layeringFrontButton.dataset.enabled = settings.layering === "front";
  const layeringBehindButton = createButton({
    useButtonTag: true
  });
  layeringBehindButton.appendChild(document.createTextNode(msg("behind")));
  layeringGroup.appendChild(layeringBehindButton);
  layeringBehindButton.addEventListener("click", e => {
    settings.layering = "behind";
    layeringBehindButton.dataset.enabled = true;
    layeringFrontButton.dataset.enabled = false;
    settingsChanged(true);
  });
  layeringBehindButton.dataset.enabled = settings.layering === "behind";
  layeringContainer.appendChild(layeringGroup);
  settingsPage.appendChild(layeringContainer);
  const SVG_NS = "http://www.w3.org/2000/svg";
  const settingsTip = document.createElementNS(SVG_NS, "svg");
  settingsTip.setAttribute("class", "sa-onion-settings-tip");
  settingsTip.setAttribute("width", "14");
  settingsTip.setAttribute("height", "7");
  const settingsTipShape = document.createElementNS(SVG_NS, "polygon");
  settingsTipShape.setAttribute("class", "sa-onion-settings-polygon");
  settingsTipShape.setAttribute("points", "0,0 7,7, 14,0");
  settingsTip.appendChild(settingsTipShape);
  settingsPage.appendChild(settingsTip);
  let oldEnabled = null;
  addon.self.addEventListener("disabled", () => {
    setSettingsOpen(false);
    oldEnabled = settings.enabled;
    setEnabled(false);
  });
  addon.self.addEventListener("reenabled", () => {
    setEnabled(oldEnabled);
  });
  const controlsLoop = async () => {
    let hasRunOnce = false;
    while (true) {
      const canvasControls = await addon.tab.waitForElement("[class^='paint-editor_canvas-controls']", {
        markAsSeen: true,
        reduxEvents: ["scratch-gui/navigation/ACTIVATE_TAB", "scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE", "scratch-gui/targets/UPDATE_TARGET_LIST"],
        reduxCondition: state => state.scratchGui.editorTab.activeTabIndex === 1 && !state.scratchGui.mode.isPlayerOnly
      });
      const zoomControlsContainer = canvasControls.querySelector("[class^='paint-editor_zoom-controls']");
      addon.tab.appendToSharedSpace({
        space: "paintEditorZoomControls",
        element: toggleControlsGroup,
        order: 1
      });
      settingPageWrapper.appendChild(settingsPage);
      if (!hasRunOnce) {
        hasRunOnce = true;
        const groupClass = zoomControlsContainer.firstChild.className;
        const buttonClass = zoomControlsContainer.firstChild.firstChild.className;
        const imageClass = zoomControlsContainer.firstChild.firstChild.firstChild.className;
        for (const el of document.querySelectorAll(".sa-onion-group")) {
          el.className += " " + groupClass;
        }
        for (const el of document.querySelectorAll(".sa-onion-button")) {
          el.className += " " + buttonClass;
        }
        for (const el of document.querySelectorAll(".sa-onion-image")) {
          el.className += " " + imageClass;
        }
      }
      if (settings.enabled) {
        updateOnionLayers();
      }
    }
  };
  injectPaper();
  injectPaperCanvas();
  controlsLoop();
});

/***/ }),

/***/ "./src/addons/addons/paint-skew/_runtime_entry.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/paint-skew/_runtime_entry.js ***!
  \********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/paint-skew/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/paint-skew/userscript.js":
/*!****************************************************!*\
  !*** ./src/addons/addons/paint-skew/userscript.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paint_snap_compatibility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../paint-snap/compatibility.js */ "./src/addons/addons/paint-snap/compatibility.js");

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon
  } = _ref;
  const paper = await addon.tab.traps.getPaper();
  const addSkew = function addSkew() {
    var _paper$tool$boundingB, _paper$tool$boundingB2;
    if (!paper.tool || !paper.tool.boundingBoxTool) return;
    // ScaleTool
    const ST = (_paper$tool$boundingB = paper.tool.boundingBoxTool._modeMap) === null || _paper$tool$boundingB === void 0 ? void 0 : (_paper$tool$boundingB2 = _paper$tool$boundingB.SCALE) === null || _paper$tool$boundingB2 === void 0 ? void 0 : _paper$tool$boundingB2.constructor;
    if (!ST || ST.hasSkew) {
      return;
    }
    ST.hasSkew = true;
    const ogMouseDown = ST.prototype.onMouseDown;
    ST.prototype.onMouseDown = function (hitResult, boundsPath, selectedItems) {
      if (this.active) return;
      this.index = hitResult.item.data.index;
      ogMouseDown.call(this, hitResult, boundsPath, selectedItems);
      this.skewCenter = false;
      this.lastSkx = 0;
      this.lastSky = 0;
      this.skewBounds = this.itemGroup.bounds.clone();
    };
    _paint_snap_compatibility_js__WEBPACK_IMPORTED_MODULE_0__["addons"].paintSkew = function (event, original) {
      if (!this.active) return;
      if (addon.self.disabled) return original();
      const bounds = this.skewBounds;
      const doShear = (skx, sky) => {
        if (skx === 0 && sky === 0) return;
        let offcenterPosition;
        if (!this.skewCenter) {
          switch (this._getRectCornerNameByIndex(this.index)) {
            case "topCenter":
            case "leftCenter":
              offcenterPosition = this.itemGroup.position.add(new paper.Point(bounds.width / 2, bounds.height / 2));
              break;
            case "bottomCenter":
            case "rightCenter":
              offcenterPosition = this.itemGroup.position.subtract(new paper.Point(bounds.width / 2, bounds.height / 2));
              break;
          }
        }
        const position = this.skewCenter ? this.itemGroup.position : offcenterPosition;
        const shearMult = this.skewCenter ? 2 : 1;
        // swap width and height because apparently
        // shearing is based on the dimension perpendicular
        // to the one that is being skewed
        const shearX = skx / bounds.height * shearMult;
        const shearY = sky / bounds.width * shearMult;
        this.itemGroup.shear(shearX, shearY, position);
        if (this.selectionAnchor) {
          this.selectionAnchor.shear(-shearX, -shearY);
        }
      };

      // Revert skew
      doShear(-this.lastSkx, -this.lastSky);
      this.skewCenter = event.modifiers.alt;
      let skx = 0;
      let sky = 0;
      this.lastSkx = 0;
      this.lastSky = 0;
      if ((event.modifiers.control || event.modifiers.command) && !this.isCorner) {
        // Skew
        // Reset position
        this.centered = false;
        this.itemGroup.scale(1 / this.lastSx, 1 / this.lastSy, this.pivot);
        if (this.selectionAnchor) {
          this.selectionAnchor.scale(this.lastSx, this.lastSy);
        }
        this.lastSx = 1;
        this.lastSy = 1;
        const delta = event.point.subtract(this.pivot);
        switch (this._getRectCornerNameByIndex(this.index)) {
          case "topCenter":
            delta.x *= -1;
            delta.y = 0;
            break;
          case "bottomCenter":
            delta.y = 0;
            break;
          case "leftCenter":
            delta.y *= -1;
            delta.x = 0;
            break;
          case "rightCenter":
            delta.x = 0;
            break;
          default:
            delta.x = 0;
            delta.y = 0;
        }
        skx = delta.x;
        sky = delta.y;
        doShear(skx, sky);
      } else {
        // Scale
        original();
      }
      this.lastSkx = skx;
      this.lastSky = sky;
    };
    Object(_paint_snap_compatibility_js__WEBPACK_IMPORTED_MODULE_0__["initialize"])(paper, ST);
  };
  addon.tab.redux.initialize();
  addon.tab.redux.addEventListener("statechanged", e => {
    const action = e.detail.action;
    if (action.type === "scratch-paint/modes/CHANGE_MODE" && (action.mode === "BIT_SELECT" || action.mode === "SELECT")) {
      addSkew();
    }
  });
  addSkew();
});

/***/ }),

/***/ "./src/addons/addons/paint-snap/compatibility.js":
/*!*******************************************************!*\
  !*** ./src/addons/addons/paint-snap/compatibility.js ***!
  \*******************************************************/
/*! exports provided: addons, initialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addons", function() { return addons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
let overridden = false;
const addons = {
  paintSkew: null,
  paintSnap: null
};
function initialize(paper, ScaleTool) {
  if (overridden) return;
  overridden = true;
  const ogMouseDrag = ScaleTool.prototype.onMouseDrag;
  ScaleTool.prototype.onMouseDrag = function (event) {
    if (!this.active) return;
    const callSnap = () => {
      if (addons.paintSnap) addons.paintSnap.call(this, event);else ogMouseDrag.call(this, event);
    };
    if (addons.paintSkew) {
      addons.paintSkew.call(this, event, callSnap);
    } else {
      callSnap();
    }
  };
}

/***/ }),

/***/ "./src/addons/addons/pick-colors-from-stage/_runtime_entry.js":
/*!********************************************************************!*\
  !*** ./src/addons/addons/pick-colors-from-stage/_runtime_entry.js ***!
  \********************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/pick-colors-from-stage/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/pick-colors-from-stage/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/pick-colors-from-stage/userscript.js":
/*!****************************************************************!*\
  !*** ./src/addons/addons/pick-colors-from-stage/userscript.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    msg,
    console
  } = _ref;
  const brand = Symbol();
  const setIsPicking = picking => document.body.classList.toggle("sa-stage-color-picker-picking", picking);

  // We only want to handle color picker events from the user clicking on the button, not from
  // addons or other scripts pressing it with click().
  let isMostRecentClickUserInitiated = false;
  document.addEventListener("click", e => {
    isMostRecentClickUserInitiated = e.isTrusted;
  }, {
    capture: true
  });
  addon.tab.redux.initialize();
  addon.tab.redux.addEventListener("statechanged", e => {
    const action = e.detail.action;

    // Do not process events emitted by ourselves.
    if (action[brand]) {
      return;
    }
    if (!addon.self.disabled && isMostRecentClickUserInitiated && action.type === "scratch-paint/eye-dropper/ACTIVATE_COLOR_PICKER") {
      setIsPicking(true);

      // When scratch-paint's color picker is activated, also activate scratch-gui's color picker.
      addon.tab.redux.dispatch({
        type: "scratch-gui/color-picker/ACTIVATE_COLOR_PICKER",
        callback: color => {
          // callback is called from reducer; do not dispatch events in reducer
          queueMicrotask(() => {
            // By the time we get here, scratch-paint will have already deactivated its eye dropper.
            // If we were to just call the callback, the color would indeed update, but the sliders
            // in the color selector would not update.
            // https://github.com/scratchfoundation/scratch-paint/blob/970b72c3e75d0ad44ab54e403a44786ca5f45512/src/containers/color-picker.jsx#L64
            // To work around this, we will re-enable the color picker before running the callback.
            addon.tab.redux.dispatch(_objectSpread(_objectSpread({}, action), {}, {
              [brand]: true
            }));
            action.callback(color);
            if (action.previousMode) {
              action.previousMode.activate();
            }
            addon.tab.redux.dispatch({
              type: "scratch-paint/eye-dropper/DEACTIVATE_COLOR_PICKER",
              [brand]: true
            });
            setIsPicking(false);
          });
        }
      });
    }

    // Don't check for addon being disabled here in case we were dynamically disabled while color
    // picking. This code won't do anything anyways when the previous code doesn't run.
    if (action.type === "scratch-paint/eye-dropper/DEACTIVATE_COLOR_PICKER") {
      setIsPicking(false);

      // When someone selects a color in the scratch-paint picker, cancel the scratch-gui picker
      if (addon.tab.redux.state.scratchGui.colorPicker.active) {
        addon.tab.redux.dispatch({
          type: "scratch-gui/color-picker/DEACTIVATE_COLOR_PICKER",
          [brand]: true
        });
      }
    }
  });
});

/***/ }),

/***/ "./src/addons/addons/rename-broadcasts/_runtime_entry.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/rename-broadcasts/_runtime_entry.js ***!
  \***************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/rename-broadcasts/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/rename-broadcasts/userscript.js":
/*!***********************************************************!*\
  !*** ./src/addons/addons/rename-broadcasts/userscript.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    msg,
    console
  } = _ref;
  const vm = addon.tab.traps.vm;
  const Blockly = await addon.tab.traps.getBlockly();

  // editor-searchable-dropdowns relies on this value
  const RENAME_BROADCAST_MESSAGE_ID = "RENAME_BROADCAST_MESSAGE_ID";
  const BROADCAST_MESSAGE_TYPE = Blockly.BROADCAST_MESSAGE_VARIABLE_TYPE;
  const _dropdownCreate = Blockly.FieldVariable.dropdownCreate;
  Blockly.FieldVariable.dropdownCreate = function () {
    const options = _dropdownCreate.call(this);
    if (!addon.self.disabled && this.defaultType_ === BROADCAST_MESSAGE_TYPE &&
    // Disable when workspace has no actual broadcast to rename
    this.sourceBlock_.workspace.getVariableTypes().includes("broadcast_msg")) {
      options.push([msg("RENAME_BROADCAST"), RENAME_BROADCAST_MESSAGE_ID]);
    }
    return options;
  };
  const _onItemSelected = Blockly.FieldVariable.prototype.onItemSelected;
  Blockly.FieldVariable.prototype.onItemSelected = function (menu, menuItem) {
    const workspace = this.sourceBlock_.workspace;
    if (this.sourceBlock_ && workspace) {
      if (menuItem.getValue() === RENAME_BROADCAST_MESSAGE_ID) {
        promptRenameBroadcast(workspace, this.variable_);
        return;
      }
    }
    return _onItemSelected.call(this, menu, menuItem);
  };
  const resetVMCaches = () => {
    const blockContainers = new Set(vm.runtime.targets.map(i => i.blocks));
    for (const blocks of blockContainers) {
      blocks.resetCache();
    }
  };
  const addUndoRedoHook = callback => {
    const eventQueue = Blockly.Events.FIRE_QUEUE_;
    // After a rename is emitted, some unrelated garbage events also get emitted
    // So we should trap the first event
    const undoItem = eventQueue[0];
    const originalRun = undoItem.run;
    undoItem.run = function (isRedo) {
      originalRun.call(this, isRedo);
      callback(isRedo);
    };
  };
  const renameBroadcastInVM = (id, newName) => {
    // Editor's rename won't completely rename the variable.
    const vmVariable = vm.runtime.getTargetForStage().variables[id];
    vmVariable.name = newName;
    vmVariable.value = newName;

    // Update all references to the broadcast. Broadcasts won't work if these
    // don't match.
    const blockContainers = new Set(vm.runtime.targets.map(i => i.blocks));
    for (const blockContainer of blockContainers) {
      for (const block of Object.values(blockContainer._blocks)) {
        const broadcastOption = block.fields && block.fields.BROADCAST_OPTION;
        if (broadcastOption && broadcastOption.id === id) {
          broadcastOption.value = newName;
        }
      }
    }
    resetVMCaches();
  };
  const renameBroadcast = (workspace, id, oldName, newName) => {
    // Rename in editor. Undo/redo will work automatically.
    workspace.renameVariableById(id, newName);

    // Rename in VM. Need to manually implement undo/redo.
    renameBroadcastInVM(id, newName);
    addUndoRedoHook(isRedo => {
      if (isRedo) {
        renameBroadcastInVM(id, newName);
      } else {
        renameBroadcastInVM(id, oldName);
      }
    });
  };
  const mergeBroadcast = (workspace, oldId, oldName, newName) => {
    const newVmVariable = vm.runtime.getTargetForStage().lookupBroadcastByInputValue(newName);
    const newId = newVmVariable.id;

    // Merge in editor. Undo/redo will work automatically for this.
    // Use group so that everything here is undone/redone at the same time.
    Blockly.Events.setGroup(true);
    for (const block of workspace.getAllBlocks()) {
      for (const input of block.inputList) {
        for (const field of input.fieldRow) {
          if (field.name === "BROADCAST_OPTION" && field.getValue() === oldId) {
            field.setValue(newId);
          }
        }
      }
    }
    // Remove the broadcast from the editor so it doesn't appear in dropdowns.
    // Undo/redo will work automatically for this.
    workspace.deleteVariableById(oldId);
    Blockly.Events.setGroup(false);

    // Merge in VM to update sprites that aren't open. Need to manually implement undo/redo.
    // To figure out how to undo this operation, we first figure out which blocks we're
    // going to touch and keep hold of that list.
    const vmBlocksToUpdate = [];
    const blockContainers = new Set(vm.runtime.targets.map(i => i.blocks));
    for (const blockContainer of blockContainers) {
      for (const block of Object.values(blockContainer._blocks)) {
        const broadcastOption = block.fields && block.fields.BROADCAST_OPTION;
        if (broadcastOption && broadcastOption.id === oldId) {
          vmBlocksToUpdate.push(block);
        }
      }
    }
    const applyVmEdits = isRedo => {
      const idToReplaceWith = isRedo ? newId : oldId;
      const nameToReplaceWith = isRedo ? newName : oldName;
      for (const block of vmBlocksToUpdate) {
        const broadcastOption = block.fields.BROADCAST_OPTION;
        broadcastOption.id = idToReplaceWith;
        broadcastOption.value = nameToReplaceWith;
      }
      resetVMCaches();
    };
    applyVmEdits(true);

    // Earlier editor updates are guaranteed to generate at least 1 event that we can hook as the
    // broadcast block must exist in the editor for the user to rename it.
    addUndoRedoHook(isRedo => {
      applyVmEdits(isRedo);
    });
  };
  const promptRenameBroadcast = (workspace, variable) => {
    const modalTitle = msg("RENAME_BROADCAST_MODAL_TITLE");
    const oldName = variable.name;
    const id = variable.getId();
    const promptText = msg("RENAME_BROADCAST_TITLE", {
      name: oldName
    });
    const promptDefaultText = oldName;
    Blockly.prompt(promptText, promptDefaultText, function (newName) {
      newName = Blockly.Variables.trimName_(newName);
      const nameIsEmpty = !newName;
      if (nameIsEmpty) {
        return;
      }
      const variableAlreadyExists = !!workspace.getVariable(newName, BROADCAST_MESSAGE_TYPE);
      if (variableAlreadyExists) {
        mergeBroadcast(workspace, id, oldName, newName);
      } else {
        renameBroadcast(workspace, id, oldName, newName);
      }
    }, modalTitle, BROADCAST_MESSAGE_TYPE);
  };
  const updateExistingMenuGenerators = () => {
    const workspace = Blockly.getMainWorkspace();
    const flyout = workspace && workspace.getFlyout();
    if (workspace && flyout) {
      const allBlocks = [...workspace.getAllBlocks(), ...flyout.getWorkspace().getAllBlocks()];
      for (const block of allBlocks) {
        for (const input of block.inputList) {
          for (const field of input.fieldRow) {
            if (field instanceof Blockly.FieldVariable) {
              field.menuGenerator_ = Blockly.FieldVariable.dropdownCreate;
            }
          }
        }
      }
    }
  };
  updateExistingMenuGenerators();
});

/***/ }),

/***/ "./src/addons/addons/reorder-custom-inputs/_runtime_entry.js":
/*!*******************************************************************!*\
  !*** ./src/addons/addons/reorder-custom-inputs/_runtime_entry.js ***!
  \*******************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/reorder-custom-inputs/userscript.js");
/* harmony import */ var _css_loader_arrows_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./arrows.css */ "./node_modules/css-loader/index.js!./src/addons/addons/reorder-custom-inputs/arrows.css");
/* harmony import */ var _css_loader_arrows_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_arrows_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "arrows.css": _css_loader_arrows_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/reorder-custom-inputs/modified-funcs.js":
/*!*******************************************************************!*\
  !*** ./src/addons/addons/reorder-custom-inputs/modified-funcs.js ***!
  \*******************************************************************/
/*! exports provided: modifiedCreateAllInputs, modifiedUpdateDeclarationProcCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifiedCreateAllInputs", function() { return modifiedCreateAllInputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifiedUpdateDeclarationProcCode", function() { return modifiedUpdateDeclarationProcCode; });
// https://github.com/scratchfoundation/scratch-blocks/blob/f210e042988b91bcdc2abeca7a2d85e178edadb2/blocks_vertical/procedures.js#L205
function modifiedCreateAllInputs(connectionMap) {
  // Split the proc into components, by %n, %b, %s and %l (ignoring escaped).
  var procComponents = this.procCode_.split(/(?=[^\\]%[nbsl])/);
  procComponents = procComponents.map(function (c) {
    return c.trim(); // Strip whitespace.
  });

  // Create arguments and labels as appropriate.
  var argumentCount = 0;
  for (var i = 0, component; component = procComponents[i]; i++) {
    var labelText;
    // Don't treat %l as an argument
    if (component.substring(0, 1) == "%" && component.substring(1, 2) !== "l") {
      var argumentType = component.substring(1, 2);
      if (!(argumentType == "n" || argumentType == "b" || argumentType == "s")) {
        throw new Error("Found an custom procedure with an invalid type: " + argumentType);
      }
      labelText = component.substring(2).trim();
      var id = this.argumentIds_[argumentCount];
      var input = this.appendValueInput(id);
      if (argumentType == "b") {
        input.setCheck("Boolean");
      }
      this.populateArgument_(argumentType, argumentCount, connectionMap, id, input);
      argumentCount++;
    } else {
      labelText = component == "%l" ? " " : component.replace("%l", "").trim();
    }
    this.addProcedureLabel_(labelText.replace(/\\%/, "%"));
  }

  // remove all traces of %l at the earliest possible time
  this.procCode_ = this.procCode_.replace(/%l /g, "");
}

//https://github.com/scratchfoundation/scratch-blocks/blob/f210e042988b91bcdc2abeca7a2d85e178edadb2/blocks_vertical/procedures.js#L565
function modifiedUpdateDeclarationProcCode() {
  let prefixLabels = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  this.procCode_ = "";
  this.displayNames_ = [];
  this.argumentIds_ = [];
  for (var i = 0; i < this.inputList.length; i++) {
    if (i != 0) {
      this.procCode_ += " ";
    }
    var input = this.inputList[i];
    if (input.type == 5) {
      // replaced Blocky.DUMMY_VALUE with 5
      this.procCode_ += (prefixLabels ? "%l " : "") + input.fieldRow[0].getValue(); // modified to prepend %l delimiter, which prevents label merging
    } else if (input.type == 1) {
      // replaced Blocky.INPUT_VALUE with 1
      // Inspect the argument editor.
      var target = input.connection.targetBlock();
      this.displayNames_.push(target.getFieldValue("TEXT"));
      this.argumentIds_.push(input.name);
      if (target.type == "argument_editor_boolean") {
        this.procCode_ += "%b";
      } else {
        this.procCode_ += "%s";
      }
    } else {
      throw new Error("Unexpected input type on a procedure mutator root: " + input.type);
    }
  }
}

/***/ }),

/***/ "./src/addons/addons/reorder-custom-inputs/userscript.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/reorder-custom-inputs/userscript.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modified_funcs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modified-funcs.js */ "./src/addons/addons/reorder-custom-inputs/modified-funcs.js");

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    console
  } = _ref;
  function createArrow(direction, callback) {
    const path = direction === "left" ? "M 17 13 L 9 21 L 17 30" : "M 9 13 L 17 21 L 9 30";
    Blockly.WidgetDiv.DIV.insertAdjacentHTML("beforeend", "\n            <svg width=\"20px\" height=\"40px\" \n                 style=\"left: ".concat(direction === "left" ? "calc(50% - 20px)" : "calc(50% + 20px)", "\" \n                 class=\"blocklyTextShiftArrow\">\n                <path d=\"").concat(path, "\" fill=\"none\" stroke=\"#FF661A\" stroke-width=\"2\"></path>\n            </svg>"));
    Blockly.WidgetDiv.DIV.lastChild.addEventListener("click", callback);
  }

  //https://github.com/scratchfoundation/scratch-blocks/blob/f210e042988b91bcdc2abeca7a2d85e178edadb2/blocks_vertical/procedures.js#L674
  function modifiedRemoveFieldCallback(field) {
    // Do not delete if there is only one input
    if (this.inputList.length === 1) {
      return;
    }
    var inputNameToRemove = null;
    for (var n = 0; n < this.inputList.length; n++) {
      var input = this.inputList[n];
      if (input.connection) {
        var target = input.connection.targetBlock();
        if (target.getField(field.name) == field) {
          inputNameToRemove = input.name;
        }
      } else {
        for (var j = 0; j < input.fieldRow.length; j++) {
          if (input.fieldRow[j] == field) {
            inputNameToRemove = input.name;
          }
        }
      }
    }
    if (inputNameToRemove) {
      Blockly.WidgetDiv.hide(true);
      this.removeInput(inputNameToRemove);
      this.onChangeFn(true); // this is the only part we changed. We added this boolean input, which lets us switch on the merging.
      this.updateDisplay_();
    }
  }
  function addInputAfter(addInputFn, fnName) {
    return function () {
      var _selectedField;
      const sourceBlock = (_selectedField = selectedField) === null || _selectedField === void 0 ? void 0 : _selectedField.sourceBlock_;
      const proc = sourceBlock ? sourceBlock.parentBlock_ ? sourceBlock.parentBlock_ : sourceBlock : this;

      // if a label is added, scratch's code will directly append the label text to the procCode
      // We account for this with a hacky method of adding the delimiter at the end of the last label input
      if (fnName === "addLabelExternal") {
        const lastInput = proc.inputList[proc.inputList.length - 1];
        if (lastInput.type === Blockly.DUMMY_INPUT) {
          lastInput.fieldRow[0].setValue(lastInput.fieldRow[0].getValue() + " %l");
        }
      }
      proc.onChangeFn(true);
      if (sourceBlock === null || sourceBlock === undefined || !addon.settings.get("InsertInputsAfter")) return addInputFn.call(this, ...arguments);
      let newPosition = getFieldInputNameAndIndex(selectedField, proc.inputList).index + 1;
      addInputFn.call(proc, ...arguments);
      const lastInputName = proc.inputList[proc.inputList.length - 1].name;
      shiftInput(proc, lastInputName, newPosition);
    };
  }
  function getFieldInputNameAndIndex(field, inputList) {
    for (const [i, input] of inputList.entries()) {
      var _input$connection$tar;
      const isTargetField = input.connection ? ((_input$connection$tar = input.connection.targetBlock()) === null || _input$connection$tar === void 0 ? void 0 : _input$connection$tar.getField(field.name)) === field : input.fieldRow.includes(field);
      if (isTargetField) {
        return {
          name: input.name,
          index: i
        };
      }
    }
  }
  function shiftInput(procedureBlock, inputNameToShift, newPosition) {
    const initialInputListLength = procedureBlock.inputList.length;

    // return if inputNameToShift and newPosition are not valid
    if (!(inputNameToShift && newPosition >= 0 && newPosition <= initialInputListLength)) {
      return false;
    }
    const originalPosition = procedureBlock.inputList.findIndex(input => input.name === inputNameToShift);
    const itemToMove = procedureBlock.inputList.splice(originalPosition, 1)[0];
    procedureBlock.inputList.splice(newPosition, 0, itemToMove);
    Blockly.Events.disable();
    try {
      procedureBlock.onChangeFn(true);
      procedureBlock.updateDisplay_();
    } finally {
      Blockly.Events.enable();
    }
    focusOnInput(procedureBlock.inputList[newPosition]);
  }
  function focusOnInput(input) {
    if (!input) return;
    if (input.type === Blockly.DUMMY_INPUT) {
      input.fieldRow[0].showEditor_();
    } else if (input.type === Blockly.INPUT_VALUE) {
      const target = input.connection.targetBlock();
      target.getField("TEXT").showEditor_();
    }
  }
  function shiftFieldCallback(sourceBlock, field, direction) {
    const proc = sourceBlock.parentBlock_ ? sourceBlock.parentBlock_ : sourceBlock;

    // if inputList length is 1 there's nowhere to shift the input so we can simply return
    if (proc.inputList.length <= 1) return;
    const {
      name,
      index
    } = getFieldInputNameAndIndex(field, proc.inputList);
    const newPosition = direction === "left" ? index - 1 : index + 1;
    shiftInput(proc, name, newPosition);
  }
  function polluteProcedureDeclaration(procedureDeclaration) {
    let save_original = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    procedureDeclaration.createAllInputs_ = _modified_funcs_js__WEBPACK_IMPORTED_MODULE_0__["modifiedCreateAllInputs"];
    procedureDeclaration.onChangeFn = _modified_funcs_js__WEBPACK_IMPORTED_MODULE_0__["modifiedUpdateDeclarationProcCode"];
    procedureDeclaration.removeFieldCallback = modifiedRemoveFieldCallback;
    for (const inputFn of ["addLabelExternal", "addBooleanExternal", "addStringNumberExternal"]) {
      if (save_original) {
        originalAddFns[inputFn] = procedureDeclaration[inputFn];
      }
      procedureDeclaration[inputFn] = addInputAfter(procedureDeclaration[inputFn], inputFn);
    }
  }
  function depolluteProcedureDeclaration(procedureDeclaration) {
    procedureDeclaration.createAllInputs_ = originalCreateAllInputs;
    procedureDeclaration.onChangeFn = originalUpdateDeclarationProcCode;
    procedureDeclaration.removeFieldCallback = originalRemoveFieldCallback;
    for (const [inputFnName, originalFn] of Object.entries(originalAddFns)) {
      procedureDeclaration[inputFnName] = originalFn;
    }
  }
  function getExistingProceduresDeclarationBlock() {
    // Blockly.getMainWorkspace is required for this to work.
    // for future reference "upgrading" to addon.tab.traps.getWorkspace() will cause bugs.
    return Blockly.getMainWorkspace().getAllBlocks().find(block => block.type === "procedures_declaration");
  }
  function enableAddon() {
    // pollute the procedures_declaration prototype with a modified version that prevents merging, and allows inserting after
    polluteProcedureDeclaration(Blockly.Blocks["procedures_declaration"]);

    // if custom procedures modal is already open we also directly pollute the existing procedures_declaration block
    if (addon.tab.redux.state.scratchGui.customProcedures.active) {
      polluteProcedureDeclaration(getExistingProceduresDeclarationBlock(), false);
    }
    Blockly.FieldTextInputRemovable.prototype.showEditor_ = function () {
      originalShowEditor.call(this);
      createArrow("left", () => shiftFieldCallback(this.sourceBlock_, this, "left"));
      createArrow("right", () => shiftFieldCallback(this.sourceBlock_, this, "right"));
      selectedField = this;
    };
  }
  function disableAddon() {
    // depollute the procedures_declaration prototype
    depolluteProcedureDeclaration(Blockly.Blocks["procedures_declaration"]);

    // if custom procedures modal is already open we also directly depollute the existing procedures_declaration block
    if (addon.tab.redux.state.scratchGui.customProcedures.active) {
      depolluteProcedureDeclaration(getExistingProceduresDeclarationBlock());
    }
    Blockly.FieldTextInputRemovable.prototype.showEditor_ = originalShowEditor;
    Blockly.WidgetDiv.DIV.querySelectorAll(".blocklyTextShiftArrow").forEach(e => e.remove());
  }
  const Blockly = await addon.tab.traps.getBlockly();
  const originalCreateAllInputs = Blockly.Blocks["procedures_declaration"].createAllInputs_;
  const originalUpdateDeclarationProcCode = Blockly.Blocks["procedures_declaration"].onChangeFn;
  const originalRemoveFieldCallback = Blockly.Blocks["procedures_declaration"].removeFieldCallback;
  const originalShowEditor = Blockly.FieldTextInputRemovable.prototype.showEditor_;
  let originalAddFns = {};
  let selectedField = null;
  addon.self.addEventListener("disabled", disableAddon);
  addon.self.addEventListener("reenabled", enableAddon);
  enableAddon();
});

/***/ }),

/***/ "./src/addons/libraries/common/cs/normalize-color.js":
/*!***********************************************************!*\
  !*** ./src/addons/libraries/common/cs/normalize-color.js ***!
  \***********************************************************/
/*! exports provided: getHexRegex, normalizeHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHexRegex", function() { return getHexRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeHex", function() { return normalizeHex; });
const getHexRegex = () => /^#?[0-9a-fA-F]{3,8}$/;
const normalizeHex = input => {
  let hex = String(input);
  if (!getHexRegex().test(hex)) return "#000000";
  if (!hex.startsWith("#")) hex = "#".concat(hex);
  if (hex.length === 4) {
    const [_, r, g, b] = hex;
    hex = "#".concat(r).concat(r).concat(g).concat(g).concat(b).concat(b);
  }
  return hex.toLowerCase();
};

/***/ }),

/***/ "./src/addons/libraries/common/cs/rate-limiter.js":
/*!********************************************************!*\
  !*** ./src/addons/libraries/common/cs/rate-limiter.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RateLimiter; });
class RateLimiter {
  constructor(wait) {
    this.timeout = null;
    this.callback = null;
    this.wait = wait;
  }
  abort() {
    let call = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    if (this.timeout) {
      clearTimeout(this.timeout);
      if (call) this.callback();
      this.timeout = this.callback = null;
    }
  }
  limit(callback) {
    this.abort(false);
    this.callback = callback;
    this.timeout = setTimeout(() => {
      this.timeout = this.callback = null;
      callback();
    }, this.wait);
  }
}

/***/ })

}]);
//# sourceMappingURL=addon-default-entry.js.map