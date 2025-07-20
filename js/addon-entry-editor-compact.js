(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-editor-compact"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/editor-compact/hide-labels.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/editor-compact/hide-labels.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Asset editor */\n[class*=\"asset-panel_detail-area\"] [class*=\"labeled-icon-button_mod-edit-field\"],\n[class*=\"sound-editor_tool-button_\"],\n[class*=\"sound-editor_row-reverse_\"] > [class*=\"icon-button_container_\"] {\n  min-width: 0;\n  margin-right: 2px;\n  padding: calc(0.125rem - 1px);\n  border: 1px solid var(--editorDarkMode-border, hsla(0, 0%, 0%, 0.15));\n  border-radius: 0.25rem;\n}\n[class*=\"sound-editor_tool-button\"] img {\n  width: 20px;\n}\n[class*=\"asset-panel_detail-area\"] [class*=\"label_input-label\"],\n[class*=\"asset-panel_detail-area\"] [class*=\"labeled-icon-button_edit-field-title\"],\n[class*=\"icon-button_title_\"] {\n  display: none;\n}\n[dir=\"ltr\"] [class*=\"paint-editor_mod-dashed-border_\"],\n[dir=\"rtl\"] [class*=\"paint-editor_mod-dashed-border_\"] {\n  border: none;\n}\n[class*=\"mode-tools_mod-labeled-icon-height\"],\n[class*=\"paint-editor_mod-labeled-icon-height\"] {\n  height: auto;\n}\n[class*=\"paint-editor_row_\"] > [class*=\"tools_row_\"],\n[class*=\"paint-editor_mod-mode-tools_\"] > [class*=\"mode-tools_mode-tools_\"] {\n  gap: calc(0.25rem);\n}\n[dir=\"ltr\"] [class*=\"fixed-tools_mod-dashed-border_\"],\n[dir=\"rtl\"] [class*=\"fixed-tools_mod-dashed-border_\"],\n[dir=\"ltr\"] [class*=\"mode-tools_mod-dashed-border_\"],\n[dir=\"rtl\"] [class*=\"mode-tools_mod-dashed-border_\"],\n[dir=\"ltr\"] [class*=\"sound-editor_input-group_\"],\n[dir=\"rtl\"] [class*=\"sound-editor_input-group_\"],\n[dir=\"rtl\"] [class*=\"sound-editor_row-reverse_\"] [class*=\"sound-editor_input-group_\"] {\n  margin: 0;\n  border: 0;\n  padding: 0;\n}\n[class*=\"sound-editor_input-group_\"] {\n  gap: 2px;\n}\n[class*=\"sound-editor_input-group_\"] > * {\n  margin: 0;\n}\n[class*=\"sound-editor_row_\"] > [class*=\"icon-button_container_\"] {\n  margin-left: 1rem;\n}\n[class*=\"sound-editor_tool-button\"],\n[class*=\"sound-editor_row-reverse_\"] > [class*=\"icon-button_container_\"] {\n  width: 24px;\n  height: 24px;\n  flex-basis: auto;\n}\n[class*=\"mode-tools_mode-tools\"] {\n  min-height: 0;\n}\n\n[class*=\"sound-editor_row-reverse_\"] > [class*=\"icon-button_container_\"] {\n  margin: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/editor-compact/sprite-properties.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/editor-compact/sprite-properties.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* These styles are in a separate file with \"if\" to make sure that they aren't applied\n   when sprite-properties is dynamically disabled. */\n.sa-show-sprite-properties [class^=\"sprite-info_sprite-info_\"],\n.sa-sprite-properties-wide-locale.sa-show-sprite-properties [class^=\"sprite-info_sprite-info_\"] {\n  height: calc(5.25rem + 1px);\n}\n.sa-sprite-properties-close-btn {\n  height: 1rem;\n  padding-top: 0.25rem;\n}\n.sa-hide-sprite-properties [class^=\"sprite-info_sprite-info_\"] {\n  height: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/editor-compact/userstyle.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/editor-compact/userstyle.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Full page */\r\n[class*=\"gui_body-wrapper\"] {\r\n  height: calc(100% - 2rem);\r\n}\r\n.sa-body-editor,\r\n.sa-body-editor * {\r\n  scrollbar-width: thin;\r\n}\r\n.sa-body-editor::-webkit-scrollbar,\r\n.sa-body-editor ::-webkit-scrollbar {\r\n  width: 8px;\r\n  height: 8px;\r\n}\r\n.sa-body-editor::-webkit-scrollbar {\r\n  background-color: var(--editorDarkMode-page, #e5f0ff);\r\n}\r\n.sa-body-editor::-webkit-scrollbar-thumb,\r\n.sa-body-editor ::-webkit-scrollbar-thumb {\r\n  background-color: var(--editorDarkMode-page-compactScrollbar, #bec7d4);\r\n  background-clip: padding-box;\r\n  border-radius: 4px;\r\n  border: 1px solid transparent;\r\n}\r\n\r\n/* Menu bar */\r\n.sa-body-editor [class*=\"menu-bar_file-group_\"] [class*=\"menu-bar_hoverable_\"] > img:not([style*=\"--customMenuBar-menuLabels: icons\"] *),\r\n.sa-body-editor [class*=\"menu-bar_divider\"],\r\n.sa-body-editor [class*=\"menu-bar_help-icon\"] {\r\n  display: none;\r\n}\r\n.sa-body-editor [class*=\"menu-bar_collapsible-label_\"],\r\n.sa-body-editor [dir=\"rtl\"] [class*=\"menu-bar_collapsible-label_\"],\r\n.sa-body-editor [class*=\"settings-menu_dropdown-label_\"],\r\n.sa-body-editor [dir=\"rtl\"] [class*=\"settings-menu_dropdown-label_\"] {\r\n  margin: 0;\r\n}\r\n@media (max-width: 1024px) {\r\n  [class*=\"menu-bar_file-group_\"] [class*=\"menu-bar_hoverable_\"] > img:first-child {\r\n    display: inline;\r\n  }\r\n}\r\n\r\n.sa-body-editor [class*=\"gui_menu-bar-position\"][class*=\"menu-bar_menu-bar\"][class*=\"box_box\"],\r\n.sa-body-editor [class*=\"menu-bar_menu-bar-item\"] {\r\n  height: 2rem;\r\n}\r\n\r\n[class*=\"menu-bar_file-group_\"] [class*=\"menu-bar_menu-bar-item_\"],\r\n[class*=\"menu-bar_account-info-group_\"] [class*=\"menu-bar_menu-bar-item_\"] {\r\n  margin: 0;\r\n  padding: 0 0.5rem;\r\n}\r\n.sa-body-editor [class*=\"menu-bar_menu-bar-menu\"] {\r\n  margin-top: 2rem;\r\n}\r\n[class*=\"menu_menu-item\"] {\r\n  line-height: 1.75rem;\r\n  padding: 0 0.5rem;\r\n}\r\n\r\n.sa-body-editor [class*=\"menu-bar_menu-bar-button\"],\r\n.sa-body-editor [class*=\"menu-bar_feedback-button_\"] {\r\n  height: 1.5rem;\r\n  padding-left: 0.5rem;\r\n  padding-right: 0.5rem;\r\n}\r\n\r\n[class*=\"menu-bar_growable\"] {\r\n  padding-inline-start: 0.5rem;\r\n}\r\n[class*=\"menu-bar_growable\"] [class*=\"input_input-form\"] {\r\n  height: 1.5rem;\r\n  box-sizing: border-box;\r\n  padding: 0.25rem;\r\n  font-size: 0.75rem;\r\n}\r\n[class*=\"menu-bar_growable\"] [class*=\"input_input-form\"]:focus {\r\n  box-shadow: 0 0 0 calc(0.5rem * 0.25) hsla(0, 100%, 100%, 0.25);\r\n}\r\n\r\n.sa-editormessages-count {\r\n  top: 0.15rem;\r\n  right: 0.4rem;\r\n}\r\n\r\n[class*=\"account-nav_user-info\"] [class*=\"account-nav_avatar\"] {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  margin-inline-start: 0.25rem;\r\n}\r\n\r\n/* Sprites area */\r\n[class^=\"sprite-info_sprite-info_\"] {\r\n  padding: 0.5rem;\r\n  height: 4.75rem;\r\n}\r\n[class*=\"sprite-info_column_\"] {\r\n  margin-inline-end: 1rem;\r\n}\r\n[class*=\"sprite-info_group\"]:last-child,\r\n[class*=\"sprite-info_column_\"]:last-child {\r\n  margin-inline-end: 0;\r\n}\r\n[class*=\"sprite-info_column_\"],\r\n[class*=\"label_input-group-column_\"] {\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n[class*=\"sprite-info_column_\"] span,\r\n[class*=\"label_input-group-column_\"] span {\r\n  margin-bottom: 0;\r\n}\r\n[class*=\"sprite-info_icon-wrapper\"] {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  padding: 0.25rem;\r\n}\r\n[class*=\"sprite-info_sprite-info\"] [class*=\"input_input-form\"],\r\n[class*=\"gui_tabs\"] [class*=\"input_input-form\"] {\r\n  height: 1.5rem;\r\n  padding: 0 0.5rem;\r\n}\r\n[class*=\"sprite-info_sprite-info\"] [class*=\"input_input-form\"],\r\n[class*=\"gui_tabs\"] [class*=\"input_input-form\"] {\r\n  height: 1.5rem;\r\n  padding: 0 0.5rem;\r\n}\r\n[class*=\"gui_body-wrapper_\"] [class*=\"sprite-info_sprite-info\"] [class*=\"input_input-form\"]:focus,\r\n[class*=\"gui_body-wrapper_\"] [class*=\"gui_tabs\"] [class*=\"input_input-form\"]:focus {\r\n  box-shadow: 0 0 0 0.125rem var(--editorDarkMode-primary-transparent35, hsl(260deg 60% 60% / 35%));\r\n}\r\n[class*=\"gui_body-wrapper_\"] [class*=\"sprite-selector-item_is-selected\"],\r\n[class*=\"gui_body-wrapper_\"] [class*=\"stage-selector_is-selected_\"] {\r\n  box-shadow: 0px 0px 0px 2px var(--editorDarkMode-primary-transparent35, hsl(260deg 60% 60% / 35%));\r\n}\r\n[class*=\"input_input-small\"][type=\"text\"],\r\n[class*=\"sprite-info_larger-input\"] input[type=\"text\"] {\r\n  /* Vanilla is width:4rem */\r\n  width: 2.5rem;\r\n}\r\n[class*=\"input_input-small\"][type=\"number\"] {\r\n  /* Vanilla is width:4rem but browsers take part of it for the up/down arrows */\r\n  width: 3.5rem;\r\n}\r\n\r\n[class*=\"sprite-selector_scroll-wrapper\"] {\r\n  height: calc(100% - 4.75rem);\r\n}\r\n[class*=\"sprite-selector_scroll-wrapper\"]::-webkit-scrollbar-thumb {\r\n  background-color: var(--editorDarkMode-selector-compactScrollbar, #c1c8d1);\r\n}\r\n[class*=\"sprite-selector_items-wrapper\"] {\r\n  padding: 0.125rem;\r\n}\r\n[class*=\"sprite-selector_sprite-wrapper\"] {\r\n  margin: 0.125rem;\r\n}\r\n[class*=\"sprite-selector-item_delete-button\"] {\r\n  top: -0.25rem;\r\n}\r\n[dir=\"ltr\"] [class*=\"delete-button_delete-button_\"] {\r\n  right: -0.25rem;\r\n}\r\n[dir=\"rtl\"] [class*=\"delete-button_delete-button_\"] {\r\n  left: -0.25rem;\r\n}\r\n[class*=\"delete-button_delete-button-visible\"] {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  box-shadow: 0 0 0 1px var(--editorDarkMode-primary-transparent35, hsl(260deg 60% 60% / 35%));\r\n}\r\n[class*=\"delete-button_delete-icon\"] {\r\n  display: none;\r\n}\r\n[class*=\"delete-button_delete-button-visible\"]::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: block;\r\n  top: 25%;\r\n  left: 25%;\r\n  width: 50%;\r\n  height: 50%;\r\n  background-image: url(" + escape(__webpack_require__(/*! ./close.svg */ "./src/addons/addons/editor-compact/close.svg")) + ");\r\n  transform: rotate(45deg);\r\n  filter: var(--editorDarkMode-primary-filter, none);\r\n}\r\nimg[class*=\"sprite-selector-item_sprite-image\"] {\r\n  max-width: 56px;\r\n  max-height: 32px;\r\n}\r\n\r\n[class*=\"action-menu_main-button\"] {\r\n  width: 2rem;\r\n  height: 2rem;\r\n}\r\n[class*=\"action-menu_main-button\"] img {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n}\r\n[class*=\"action-menu_more-buttons-outer\"] {\r\n  width: 2rem;\r\n  bottom: 2rem;\r\n  padding-bottom: calc(2rem / 2);\r\n  margin: 0 0 calc(2rem / -2) 0;\r\n  border-top-left-radius: 2rem;\r\n  border-top-right-radius: 2rem;\r\n}\r\nbutton[class*=\"action-menu_more-button\"] {\r\n  width: 2rem;\r\n  height: 2rem;\r\n}\r\n\r\n/* search-sprites addon's button */\r\n.sa-search-sprites-container,\r\n.sa-search-sprites-icon,\r\n.sa-search-sprites-reset {\r\n  width: 2rem !important;\r\n  height: 2rem !important;\r\n}\r\n.sa-search-sprites-icon {\r\n  padding: 0.25rem !important;\r\n}\r\n.sa-search-sprites-container .sa-search-sprites-box {\r\n  padding-inline-start: 2rem !important;\r\n}\r\n[dir=\"ltr\"] .sa-search-sprites-container {\r\n  right: 4rem !important;\r\n}\r\n[dir=\"rtl\"] .sa-search-sprites-container {\r\n  left: 4rem !important;\r\n}\r\n.sa-search-sprites-container:hover,\r\n.sa-search-sprites-container:focus-within,\r\n.sa-search-sprites-container:not(.sa-search-sprites-empty) {\r\n  width: max(12rem, calc(100% - 5rem)) !important;\r\n}\r\n.sa-search-sprites-container:hover input.sa-search-sprites-box,\r\n.sa-search-sprites-container:focus-within input.sa-search-sprites-box,\r\n.sa-search-sprites-container:not(.sa-search-sprites-empty) input.sa-search-sprites-box {\r\n  padding-inline-end: 2rem !important;\r\n}\r\n\r\n/* Project player */\r\n.sa-body-editor [class*=\"stage-wrapper_stage-canvas-wrapper_\"]:not([class*=\"stage-wrapper_full-screen\"] *) {\r\n  padding-top: 2rem;\r\n}\r\n.sa-body-editor [class*=\"stage-header_stage-menu-wrapper_\"]:not([class*=\"stage-wrapper_full-screen\"] *) {\r\n  padding-top: 0.25rem;\r\n  padding-bottom: 0.25rem;\r\n  height: 2rem;\r\n}\r\n.sa-body-editor [class*=\"green-flag_green-flag_\"]:not([class*=\"stage-wrapper_full-screen\"] *),\r\n.sa-body-editor .pause-btn:not([class*=\"stage-wrapper_full-screen\"] *),\r\n.sa-body-editor [class*=\"stop-all_stop-all_\"]:not([class*=\"stage-wrapper_full-screen\"] *),\r\n.sa-body-editor [class*=\"stage-header_stage-button_\"]:not([class*=\"stage-wrapper_full-screen\"] *) {\r\n  padding: 0.25rem;\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n}\r\n.sa-body-editor [class*=\"turbo-mode_turbo-icon_\"]:not([class*=\"stage-wrapper_full-screen\"] *),\r\n.sa-body-editor .clone-icon:not([class*=\"stage-wrapper_full-screen\"] *) {\r\n  /* Remove vertical margin from images that appear on the stage header */\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n.sa-body-editor [class*=\"stage-header_stage-button_\"]:not([class*=\"stage-wrapper_full-screen\"] *) {\r\n  padding: calc(0.25rem - 1px);\r\n}\r\n.sa-body-editor [class*=\"green-flag_green-flag_\"]:not([class*=\"stage-wrapper_full-screen\"] *),\r\n.sa-body-editor .pause-btn:not([class*=\"stage-wrapper_full-screen\"] *) {\r\n  margin-inline-end: 0.125rem;\r\n}\r\n.sa-stage-hidden [class*=\"stage-header_stage-size-row\"] {\r\n  height: 2rem;\r\n}\r\n\r\n.sa-body-editor [class*=\"monitor_list-body_\"] > div::-webkit-scrollbar-thumb {\r\n  background-color: #bec7d4;\r\n}\r\n\r\n/* Toggle buttons */\r\n[class*=\"toggle-buttons_button_\"] {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  padding: calc(0.25rem - 1px);\r\n}\r\n\r\n/* Tabs area */\r\n[class*=\"gui_tab-list\"] {\r\n  height: 2rem;\r\n}\r\n[class*=\"gui_tab_\"] {\r\n  height: calc(1.5rem * 0.9);\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n  border-radius: 0.5rem 0.5rem 0.25rem 0.25rem;\r\n}\r\n[class*=\"gui_tab_\"][class*=\"gui_is-selected_\"] {\r\n  height: 1.5rem;\r\n}\r\n[class*=\"gui_tab_\"] > img {\r\n  display: none;\r\n}\r\n\r\n.sa-find-bar {\r\n  align-self: center;\r\n}\r\n.sa-find-wrapper {\r\n  height: 20px;\r\n}\r\n.sa-find-dropdown-out {\r\n  margin-top: 0;\r\n}\r\n\r\n/* Code tab */\r\nbody:not(.sa-columns-enabled) [class*=\"gui_tab-panel\"] .scratchCategoryMenuItem {\r\n  padding: 0.25rem 0;\r\n}\r\n.scratchCategoryItemBubble,\r\n.scratchCategoryItemIcon {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  background-size: 1rem 1rem;\r\n}\r\nbody:not(.sa-columns-enabled) [class*=\"gui_tab-panel\"] .blocklyToolboxDiv {\r\n  height: calc(100% - 2rem) !important;\r\n  scrollbar-width: none;\r\n}\r\nbody:not(.sa-columns-enabled) [class*=\"gui_tab-panel\"] .blocklyToolboxDiv::-webkit-scrollbar {\r\n  display: none;\r\n}\r\nbody:not(.sa-columns-enabled) [class*=\"gui_tab-panel\"] [class*=\"gui_extension-button-container_\"] {\r\n  height: 2rem;\r\n}\r\n\r\n/* Assets panel */\r\n[class*=\"selector_wrapper\"] {\r\n  width: 100px;\r\n}\r\n[class*=\"selector_list-item\"] {\r\n  margin: 0.25rem auto;\r\n}\r\n[class*=\"selector_list-area\"] {\r\n  overflow-y: auto;\r\n}\r\n[class*=\"selector_list-area\"]::-webkit-scrollbar-thumb {\r\n  background-color: var(--editorDarkMode-selector2-compactScrollbar, #b4bcc9);\r\n}\r\n[class*=\"selector_list-area\"] > div:first-child {\r\n  margin-top: 0.25rem;\r\n}\r\n[class*=\"selector_list-area\"] img[class*=\"sprite-selector-item_sprite-image\"] {\r\n  max-width: 52px;\r\n  max-height: 44px;\r\n}\r\n[class*=\"selector_list-area\"] [class*=\"sprite-selector-item_sprite-name\"] {\r\n  margin: 0;\r\n}\r\n[class*=\"selector_list-area\"] [class*=\"sprite-selector-item_sprite-info\"] {\r\n  padding-top: 0;\r\n  padding-bottom: 0.125rem;\r\n}\r\n[class*=\"selector_list-area\"] [class*=\"sprite-selector-item_is-selected\"] [class*=\"sprite-selector-item_sprite-info\"] {\r\n  background-color: transparent;\r\n  color: inherit;\r\n}\r\n\r\n/* Asset editor */\r\n[class*=\"asset-panel_detail-area\"] > div {\r\n  padding: 0.5rem;\r\n}\r\n[class*=\"paint-editor_row_\"] input {\r\n  font-size: 10px;\r\n}\r\n[class*=\"asset-panel_detail-area\"] [class*=\"labeled-icon-button_edit-field-icon\"],\r\n[class*=\"mode-tools_mode-tools-icon_\"],\r\n[class*=\"sound-editor_button_\"] img {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n[class*=\"sound-editor_tool-button\"] img {\r\n  height: 20px;\r\n}\r\n[class*=\"fixed-tools_button-group-button_\"],\r\n[class*=\"paint-editor_button-group-button_\"],\r\n[class*=\"sound-editor_button_\"] {\r\n  padding: calc(0.125rem - 1px);\r\n}\r\n[class*=\"sound-editor_button_\"] {\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n[class*=\"paint-editor_editor-container-top\"] {\r\n  padding-bottom: 0;\r\n  border-bottom: none;\r\n}\r\n\r\n[class*=\"paint-editor_top-align-row\"] {\r\n  padding-top: 0.5rem;\r\n}\r\n[class*=\"paint-editor_mode-selector\"] {\r\n  width: min-content;\r\n}\r\n\r\n[class*=\"sound-editor_row_\"] + [class*=\"sound-editor_row_\"] {\r\n  margin-top: 0.5rem;\r\n}\r\n[class*=\"sound-editor_waveform-container_\"] {\r\n  margin: 0;\r\n}\r\n\r\n[class*=\"sound-editor_row-reverse_\"] {\r\n  gap: 2px;\r\n}\r\n[class*=\"sound-editor_row-reverse_\"] > [class*=\"sound-editor_input-group_\"] {\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n[class*=\"paint-editor_canvas-controls\"] {\r\n  height: min-content;\r\n  margin-top: 0.5rem;\r\n}\r\n[class*=\"paint-editor_bitmap-button_\"] {\r\n  padding: 0 0.25rem;\r\n}\r\n[class*=\"paint-editor_bitmap-button-icon_\"] {\r\n  align-self: center;\r\n  width: 1.25rem;\r\n  height: 1.25rem;\r\n}\r\n.sa-paintEditorZoomControls-wrapper {\r\n  height: auto !important;\r\n}\r\n[class*=\"paint-editor_zoom-controls_\"] {\r\n  align-self: flex-start;\r\n}\r\n\r\n/* Modals and prompts */\r\n[class*=\"card_header-buttons_\"] > div,\r\n[class*=\"card_header-buttons-right_\"] > div {\r\n  padding: 0.5rem;\r\n  margin: 0;\r\n}\r\n[class*=\"card_header-buttons_\"] span:not(.sa-debugger-tabs *) {\r\n  display: none;\r\n}\r\n[class*=\"card_header-buttons_\"] > [class*=\"card_header-buttons-right_\"] {\r\n  padding: 0;\r\n}\r\n[class*=\"card_remove-button_\"] > [class*=\"card_close-icon_\"],\r\n[class*=\"card_all-button_\"] > [class*=\"card_help-icon_\"] {\r\n  margin: 0;\r\n}\r\n.sa-debugger-tabs {\r\n  padding: 0 0.25rem;\r\n  margin-left: 0.25rem;\r\n}\r\n.sa-debugger-tabs li {\r\n  padding: 0.25em 1em;\r\n}\r\n.sa-debugger-tabs li + li {\r\n  margin-inline-start: 0.25rem;\r\n}\r\n\r\n[class*=\"modal_header\"],\r\n[class*=\"library_filter-bar\"] {\r\n  height: 2rem;\r\n}\r\n[class*=\"close-button_large\"] {\r\n  width: 1rem;\r\n  height: 1rem;\r\n}\r\n\r\n[class*=\"library_filter-bar-item\"] {\r\n  height: 1.5rem;\r\n}\r\n[class*=\"library_filter-bar-item\"]:focus-within {\r\n  box-shadow: 0 0 0 0.125rem var(--editorDarkMode-primary-transparent35, hsl(260deg 60% 60% / 35%));\r\n}\r\n[dir=\"ltr\"] [class*=\"filter_filter-icon\"],\r\n[dir=\"rtl\"] [class*=\"filter_filter-icon\"],\r\n[class*=\"filter_x-icon_\"] {\r\n  width: 0.75rem;\r\n  margin: 0.25rem 0.5rem;\r\n}\r\n[dir=\"ltr\"] [class*=\"filter_filter-input\"] {\r\n  padding-left: 1.75rem;\r\n}\r\n[dir=\"rtl\"] [class*=\"filter_filter-input\"] {\r\n  padding-right: 1.75rem;\r\n}\r\n[class*=\"library_divider\"] {\r\n  display: none;\r\n}\r\n[class*=\"filter_x-icon-wrapper\"] {\r\n  position: static;\r\n  margin: 0;\r\n}\r\n[class*=\"library_tag-wrapper\"] {\r\n  height: auto;\r\n}\r\n[class*=\"library_library-scroll-grid\"] {\r\n  height: calc(100% - 2rem);\r\n}\r\n[class*=\"library_library-scroll-grid\"][class*=\"library_withFilterBar\"] {\r\n  height: calc(100% - 4rem);\r\n}\r\n[class*=\"library_library-scroll-grid\"]::-webkit-scrollbar-thumb {\r\n  background-color: var(--editorDarkMode-selector-compactScrollbar, #c1c8d1);\r\n}\r\n\r\n[class*=\"prompt_body\"],\r\n[class*=\"custom-procedures_body\"] {\r\n  padding: 1rem;\r\n}\r\n[class*=\"modal_modal-content\"] [class*=\"box_box\"] button {\r\n  padding: 0.5rem 0.75rem;\r\n}\r\n\r\n[class*=\"prompt_variable-name-text-input\"] {\r\n  height: 1.5rem;\r\n  padding: 0 0.5rem;\r\n  margin-bottom: 1rem;\r\n}\r\n.sa-swap-local-global-hint,\r\n[class*=\"prompt_options-row\"] {\r\n  padding-bottom: 0.5rem;\r\n}\r\n[class*=\"prompt_cloud-option\"] {\r\n  border: none;\r\n  padding-top: 0;\r\n}\r\n\r\n[class*=\"custom-procedures_modal-content\"] {\r\n  width: 500px;\r\n}\r\n[class*=\"custom-procedures_workspace\"] {\r\n  min-height: 100px;\r\n}\r\n.blocklyTextRemoveIcon {\r\n  top: -35px;\r\n}\r\n[class*=\"custom-procedures_body\"] [role=\"button\"] {\r\n  padding: 0.5rem;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-compact/close.svg":
/*!******************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-compact/close.svg ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3LjQ4IDcuNDgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWNvbi0tYWRkPC90aXRsZT48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIzLjc0IiB5MT0iNi40OCIgeDI9IjMuNzQiIHkyPSIxIi8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMSIgeTE9IjMuNzQiIHgyPSI2LjQ4IiB5Mj0iMy43NCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./src/addons/addons/editor-compact/_runtime_entry.js":
/*!************************************************************!*\
  !*** ./src/addons/addons/editor-compact/_runtime_entry.js ***!
  \************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/editor-compact/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-compact/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_hide_labels_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css-loader!./hide-labels.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-compact/hide-labels.css");
/* harmony import */ var _css_loader_hide_labels_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_loader_hide_labels_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_loader_sprite_properties_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! css-loader!./sprite-properties.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-compact/sprite-properties.css");
/* harmony import */ var _css_loader_sprite_properties_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_loader_sprite_properties_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _url_loader_close_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url-loader!./close.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-compact/close.svg");
/* generated by pull.js */





const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "hide-labels.css": _css_loader_hide_labels_css__WEBPACK_IMPORTED_MODULE_2___default.a,
  "sprite-properties.css": _css_loader_sprite_properties_css__WEBPACK_IMPORTED_MODULE_3___default.a,
  "close.svg": _url_loader_close_svg__WEBPACK_IMPORTED_MODULE_4__["default"]
};

/***/ }),

/***/ "./src/addons/addons/editor-compact/close.svg":
/*!****************************************************!*\
  !*** ./src/addons/addons/editor-compact/close.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3LjQ4IDcuNDgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWNvbi0tYWRkPC90aXRsZT48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIzLjc0IiB5MT0iNi40OCIgeDI9IjMuNzQiIHkyPSIxIi8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMSIgeTE9IjMuNzQiIHgyPSI2LjQ4IiB5Mj0iMy43NCIvPjwvc3ZnPg=="

/***/ }),

/***/ "./src/addons/addons/editor-compact/force-tooltip-update.js":
/*!******************************************************************!*\
  !*** ./src/addons/addons/editor-compact/force-tooltip-update.js ***!
  \******************************************************************/
/*! exports provided: eventTarget, updateTooltips */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventTarget", function() { return eventTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTooltips", function() { return updateTooltips; });
/* harmony import */ var _event_target_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../event-target.js */ "./src/addons/event-target.js");
 /* inserted by pull.js */

const eventTarget = new _event_target_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
function updateTooltips() {
  eventTarget.dispatchEvent(new CustomEvent("update"));
}

/***/ }),

/***/ "./src/addons/addons/editor-compact/userscript.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/editor-compact/userscript.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_target_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../event-target.js */ "./src/addons/event-target.js");
/* harmony import */ var _force_tooltip_update_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./force-tooltip-update.js */ "./src/addons/addons/editor-compact/force-tooltip-update.js");
 /* inserted by pull.js */


/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    global,
    console
  } = _ref;
  // The workspace needs to be manually resized via a window resize event
  // whenever the addon modifies or stops modifying UI elements
  resizeWorkspace();
  let resizeObserver = new ResizeObserver(resizeWorkspace);
  (async () => {
    while (true) {
      let menuBar = await addon.tab.waitForElement('[class*="menu-bar_menu-bar"]', {
        markAsSeen: true,
        reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"],
        reduxCondition: state => !state.scratchGui.mode.isPlayerOnly
      });
      resizeObserver.observe(menuBar);
    }
  })();
  async function resizeWorkspace() {
    window.dispatchEvent(new Event("resize"));
  }

  // Icons in the sound editor don't have tooltips. Add them if labels are hidden.
  const updateTooltips = () => {
    for (const button of document.querySelectorAll("[class*='sound-editor_tool-button_'], [class*='sound-editor_effect-button_']")) {
      const icon = button.querySelector("img");
      if (!addon.self.disabled && addon.settings.get("hideLabels")) icon.title = button.textContent;else icon.removeAttribute("title");
    }
  };
  updateTooltips();
  addon.settings.addEventListener("change", updateTooltips);
  addon.self.addEventListener("disabled", updateTooltips);
  addon.self.addEventListener("reenabled", updateTooltips);
  _force_tooltip_update_js__WEBPACK_IMPORTED_MODULE_1__["eventTarget"].addEventListener("update", updateTooltips);
  while (true) {
    await addon.tab.waitForElement("[class*='sound-editor_editor-container_']", {
      markAsSeen: true,
      reduxEvents: ["scratch-gui/navigation/ACTIVATE_TAB", "scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE", "scratch-gui/targets/UPDATE_TARGET_LIST"],
      reduxCondition: state => !state.scratchGui.mode.isPlayerOnly && state.scratchGui.editorTab.activeTabIndex === 2
    });
    updateTooltips();
  }
});

/***/ })

}]);
//# sourceMappingURL=addon-entry-editor-compact.js.map