(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-hide-stage"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/hide-stage/style.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/hide-stage/style.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-hide-stage-button [class*=\"stage-header_stage-button-icon_\"] {\r\n  /* Preserve aspect ratio */\r\n  height: auto;\r\n}\r\n\r\n.sa-stage-hidden [class*=\"blocks_blocks_\"] .injectionDiv,\r\n.sa-stage-hidden [class*=\"asset-panel_wrapper_\"],\r\n.sa-stage-hidden [class*=\"backpack_backpack-header_\"] {\r\n  border-radius: 0;\r\n}\r\n\r\n/* [class*=\"gui_flex-wrapper_\"] is for specificity over hide-flyout */\r\n.sa-stage-hidden [class*=\"gui_flex-wrapper_\"] [class*=\"gui_stage-and-target-wrapper_\"],\r\n.sa-stage-hidden [class*=\"stage-wrapper_stage-wrapper_\"]:not([class*=\"stage-wrapper_full-screen_\"]),\r\n.sa-stage-hidden [class*=\"gui_target-wrapper_\"] {\r\n  padding: 0;\r\n}\r\n\r\n.sa-stage-hidden\r\n  [class*=\"stage-wrapper_stage-wrapper_\"]:not([class*=\"stage-wrapper_full-screen_\"])\r\n  [class*=\"controls_controls-container_\"],\r\n.sa-stage-hidden [class*=\"gui_target-wrapper_\"] {\r\n  display: none;\r\n}\r\n.sa-stage-hidden\r\n  [class*=\"stage-wrapper_stage-wrapper_\"]:not([class*=\"stage-wrapper_full-screen_\"])\r\n  [class*=\"stage-wrapper_stage-canvas-wrapper_\"] {\r\n  /* can't use display: none because that causes the canvas's clientWidth/Height to become 0 which causes crashes */\r\n  visibility: hidden;\r\n  position: absolute;\r\n  z-index: -9999;\r\n  /* move the stage to avoid a horizontal scroll bar */\r\n  right: 0;\r\n  /* and move it up so that the mouse can't hover over the stage while its hidden */\r\n  bottom: 100%;\r\n}\r\n[dir=\"rtl\"]\r\n  .sa-stage-hidden\r\n  [class*=\"stage-wrapper_stage-wrapper_\"]:not([class*=\"stage-wrapper_full-screen_\"])\r\n  [class*=\"stage-wrapper_stage-canvas-wrapper_\"] {\r\n  right: initial;\r\n  left: 0;\r\n}\r\n\r\n.sa-stage-hidden [class*=\"stage-header_stage-size-row\"] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0.5rem;\r\n  height: 2.75rem;\r\n  align-items: center;\r\n}\r\n\r\n[dir=\"rtl\"] .sa-stage-hidden [class*=\"stage-header_stage-size-row\"] {\r\n  right: auto;\r\n  left: 0.5rem;\r\n}\r\n\r\n.sa-stage-hidden-outer .scratchEyedropper {\r\n  display: none;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-stage/icon.svg":
/*!*************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-stage/icon.svg ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjODU1Y2Q2IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTQgNGExIDEgMCAwIDAtMSAxdjEwYTEgMSAwIDAgMCAxIDFoMTJhMSAxIDAgMCAwIDEtMVY1LjVoLTRWNFoiLz48cGF0aCBkPSJNMTMgNGgzYTEgMSAwIDAgMSAxIDF2LjVoLTR6IiBmaWxsPSIjODU1Y2Q2Ii8+PC9nPjwvc3ZnPg0K");

/***/ }),

/***/ "./src/addons/addons/hide-stage/_runtime_entry.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/hide-stage/_runtime_entry.js ***!
  \********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/hide-stage/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/hide-stage/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./icon.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-stage/icon.svg");
/* generated by pull.js */



const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "icon.svg": _url_loader_icon_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/addons/addons/hide-stage/userscript.js":
/*!****************************************************!*\
  !*** ./src/addons/addons/hide-stage/userscript.js ***!
  \****************************************************/
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
  let stageHidden = false;
  let bodyWrapper;
  let smallStageButton;
  let largeStageButton;
  let fullStageButton;
  function hideStage() {
    stageHidden = true;
    if (!bodyWrapper) return;
    document.body.classList.add("sa-stage-hidden-outer");
    // Inner class is applied to body wrapper so that it won't affect the project page.
    bodyWrapper.classList.add("sa-stage-hidden");
    hideStageButton.setAttribute("aria-pressed", true);
    if (smallStageButton) smallStageButton.setAttribute("aria-pressed", false);
    if (largeStageButton) largeStageButton.setAttribute("aria-pressed", false);
    if (fullStageButton) fullStageButton.setAttribute("aria-pressed", false);
    window.dispatchEvent(new Event("resize")); // resizes the code area and paint editor canvas
  }
  function unhideStage(e) {
    stageHidden = false;
    if (!bodyWrapper) return;
    document.body.classList.remove("sa-stage-hidden-outer");
    bodyWrapper.classList.remove("sa-stage-hidden");
    hideStageButton.setAttribute("aria-pressed", false);
    if (e) {
      const clickedButton = e.target.closest("button");
      if (clickedButton) clickedButton.setAttribute("aria-pressed", true);
    } else if (addon.tab.redux.state) {
      const selectedStageSize = addon.tab.redux.state.scratchGui.stageSize.stageSize;
      if (smallStageButton) smallStageButton.setAttribute("aria-pressed", selectedStageSize === "small");
      if (largeStageButton) largeStageButton.setAttribute("aria-pressed", selectedStageSize === "large");
      if (fullStageButton) fullStageButton.setAttribute("aria-pressed", selectedStageSize === "full");
    }
    window.dispatchEvent(new Event("resize")); // resizes the code area and paint editor canvas
  }
  const hideStageButton = Object.assign(document.createElement("button"), {
    type: "button",
    className: addon.tab.scratchClass("toggle-buttons_button", {
      others: "sa-hide-stage-button"
    }),
    title: msg("hide-stage")
  });
  hideStageButton.setAttribute("aria-label", msg("hide-stage"));
  hideStageButton.setAttribute("aria-pressed", false);
  const hideStageIcon = Object.assign(addon.tab.recolorable(), {
    className: addon.tab.scratchClass("stage-header_stage-button-icon"),
    src: addon.self.getResource("/icon.svg") /* rewritten by pull.js */,
    draggable: false
  });
  hideStageIcon.setAttribute("aria-hidden", true);
  hideStageButton.appendChild(hideStageIcon);
  hideStageButton.addEventListener("click", hideStage);
  addon.self.addEventListener("disabled", () => {
    unhideStage();
    hideStageButton.remove();
  });
  addon.self.addEventListener("reenabled", () => {
    const stageControls = document.querySelector("[class*='stage-header_stage-size-toggle-group_'] > [class*='toggle-buttons_row_']");
    if (stageControls) stageControls.insertBefore(hideStageButton, smallStageButton);
  });
  while (true) {
    const stageControls = await addon.tab.waitForElement("[class*='stage-header_stage-size-toggle-group_'] > [class*='toggle-buttons_row_']", {
      markAsSeen: true,
      reduxCondition: state => !state.scratchGui.mode.isPlayerOnly
    });
    bodyWrapper = document.querySelector("[class*='gui_body-wrapper_']");
    const stageButtons = Array.from(stageControls.querySelectorAll("button"));
    smallStageButton = stageButtons[0];
    largeStageButton = stageButtons.length === 3 ? stageButtons[1] : null;
    fullStageButton = stageButtons[stageButtons.length - 1];
    if (!addon.self.disabled) stageControls.insertBefore(hideStageButton, smallStageButton);
    if (stageHidden) hideStage();else unhideStage();
    if (smallStageButton) smallStageButton.addEventListener("click", unhideStage);
    if (largeStageButton) largeStageButton.addEventListener("click", unhideStage);
    if (fullStageButton) fullStageButton.addEventListener("click", unhideStage);
  }
});

/***/ })

}]);
//# sourceMappingURL=addon-entry-hide-stage.js.map