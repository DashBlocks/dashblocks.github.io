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
exports.push([module.i, "/* Full page */\n[class*=\"gui_body-wrapper\"] {\n  height: calc(100% - 2rem);\n}\n.sa-body-editor,\n.sa-body-editor * {\n  scrollbar-width: thin;\n}\n.sa-body-editor::-webkit-scrollbar,\n.sa-body-editor ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.sa-body-editor::-webkit-scrollbar {\n  background-color: var(--editorDarkMode-page, #e5f0ff);\n}\n.sa-body-editor::-webkit-scrollbar-thumb,\n.sa-body-editor ::-webkit-scrollbar-thumb {\n  background-color: var(--editorDarkMode-page-compactScrollbar, #bec7d4);\n  background-clip: padding-box;\n  border-radius: 4px;\n  border: 1px solid transparent;\n}\n\n/* Menu bar */\n.sa-body-editor [class*=\"menu-bar_file-group_\"] [class*=\"menu-bar_hoverable_\"] > img:not([style*=\"--customMenuBar-menuLabels: icons\"] *),\n.sa-body-editor [class*=\"menu-bar_divider\"],\n.sa-body-editor [class*=\"menu-bar_help-icon\"] {\n  display: none;\n}\n.sa-body-editor [class*=\"menu-bar_collapsible-label_\"],\n.sa-body-editor [dir=\"rtl\"] [class*=\"menu-bar_collapsible-label_\"],\n.sa-body-editor [class*=\"settings-menu_dropdown-label_\"],\n.sa-body-editor [dir=\"rtl\"] [class*=\"settings-menu_dropdown-label_\"] {\n  margin: 0;\n}\n@media (max-width: 1024px) {\n  [class*=\"menu-bar_file-group_\"] [class*=\"menu-bar_hoverable_\"] > img:first-child {\n    display: inline;\n  }\n}\n\n.sa-body-editor [class*=\"gui_menu-bar-position\"][class*=\"menu-bar_menu-bar\"][class*=\"box_box\"],\n.sa-body-editor [class*=\"menu-bar_menu-bar-item\"] {\n  height: 2rem;\n}\n\n[class*=\"menu-bar_file-group_\"] [class*=\"menu-bar_menu-bar-item_\"],\n[class*=\"menu-bar_account-info-group_\"] [class*=\"menu-bar_menu-bar-item_\"] {\n  margin: 0;\n  padding: 0 0.5rem;\n}\n.sa-body-editor [class*=\"menu-bar_menu-bar-menu\"] {\n  margin-top: 2rem;\n}\n[class*=\"menu_menu-item\"] {\n  line-height: 1.75rem;\n  padding: 0 0.5rem;\n}\n\n.sa-body-editor [class*=\"menu-bar_menu-bar-button\"],\n.sa-body-editor [class*=\"menu-bar_feedback-button_\"] {\n  height: 1.5rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n[class*=\"menu-bar_growable\"] {\n  padding-inline-start: 0.5rem;\n}\n[class*=\"menu-bar_growable\"] [class*=\"input_input-form\"] {\n  height: 1.5rem;\n  box-sizing: border-box;\n  padding: 0.25rem;\n  font-size: 0.75rem;\n}\n[class*=\"menu-bar_growable\"] [class*=\"input_input-form\"]:focus {\n  box-shadow: 0 0 0 calc(0.5rem * 0.25) hsla(0, 100%, 100%, 0.25);\n}\n\n.sa-editormessages-count {\n  top: 0.15rem;\n  right: 0.4rem;\n}\n\n[class*=\"account-nav_user-info\"] [class*=\"account-nav_avatar\"] {\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-inline-start: 0.25rem;\n}\n\n/* Sprites area */\n[class^=\"sprite-info_sprite-info_\"] {\n  padding: 0.5rem;\n  height: 4.75rem;\n}\n[class*=\"sprite-info_column_\"] {\n  margin-inline-end: 1rem;\n}\n[class*=\"sprite-info_group\"]:last-child,\n[class*=\"sprite-info_column_\"]:last-child {\n  margin-inline-end: 0;\n}\n[class*=\"sprite-info_column_\"],\n[class*=\"label_input-group-column_\"] {\n  flex-direction: row;\n  align-items: center;\n}\n[class*=\"sprite-info_column_\"] span,\n[class*=\"label_input-group-column_\"] span {\n  margin-bottom: 0;\n}\n[class*=\"sprite-info_icon-wrapper\"] {\n  width: 1.5rem;\n  height: 1.5rem;\n  padding: 0.25rem;\n}\n[class*=\"sprite-info_sprite-info\"] [class*=\"input_input-form\"],\n[class*=\"gui_tabs\"] [class*=\"input_input-form\"] {\n  height: 1.5rem;\n  padding: 0 0.5rem;\n}\n[class*=\"sprite-info_sprite-info\"] [class*=\"input_input-form\"],\n[class*=\"gui_tabs\"] [class*=\"input_input-form\"] {\n  height: 1.5rem;\n  padding: 0 0.5rem;\n}\n[class*=\"gui_body-wrapper_\"] [class*=\"sprite-info_sprite-info\"] [class*=\"input_input-form\"]:focus,\n[class*=\"gui_body-wrapper_\"] [class*=\"gui_tabs\"] [class*=\"input_input-form\"]:focus {\n  box-shadow: 0 0 0 0.125rem var(--editorDarkMode-primary-transparent35, hsl(260deg 60% 60% / 35%));\n}\n[class*=\"gui_body-wrapper_\"] [class*=\"sprite-selector-item_is-selected\"],\n[class*=\"gui_body-wrapper_\"] [class*=\"stage-selector_is-selected_\"] {\n  box-shadow: 0px 0px 0px 2px var(--editorDarkMode-primary-transparent35, hsl(260deg 60% 60% / 35%));\n}\n[class*=\"input_input-small\"][type=\"text\"],\n[class*=\"sprite-info_larger-input\"] input[type=\"text\"] {\n  /* Vanilla is width:4rem */\n  width: 2.5rem;\n}\n[class*=\"input_input-small\"][type=\"number\"] {\n  /* Vanilla is width:4rem but browsers take part of it for the up/down arrows */\n  width: 3.5rem;\n}\n\n[class*=\"sprite-selector_scroll-wrapper\"] {\n  height: calc(100% - 4.75rem);\n}\n[class*=\"sprite-selector_scroll-wrapper\"]::-webkit-scrollbar-thumb {\n  background-color: var(--editorDarkMode-selector-compactScrollbar, #c1c8d1);\n}\n[class*=\"sprite-selector_items-wrapper\"] {\n  padding: 0.125rem;\n}\n[class*=\"sprite-selector_sprite-wrapper\"] {\n  margin: 0.125rem;\n}\n[class*=\"sprite-selector-item_delete-button\"] {\n  top: -0.25rem;\n}\n[dir=\"ltr\"] [class*=\"delete-button_delete-button_\"] {\n  right: -0.25rem;\n}\n[dir=\"rtl\"] [class*=\"delete-button_delete-button_\"] {\n  left: -0.25rem;\n}\n[class*=\"delete-button_delete-button-visible\"] {\n  width: 1rem;\n  height: 1rem;\n  box-shadow: 0 0 0 1px var(--editorDarkMode-primary-transparent35, hsl(260deg 60% 60% / 35%));\n}\n[class*=\"delete-button_delete-icon\"] {\n  display: none;\n}\n[class*=\"delete-button_delete-button-visible\"]::after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: 25%;\n  left: 25%;\n  width: 50%;\n  height: 50%;\n  background-image: url(" + escape(__webpack_require__(/*! ./close.svg */ "./src/addons/addons/editor-compact/close.svg")) + ");\n  transform: rotate(45deg);\n  filter: var(--editorDarkMode-primary-filter, none);\n}\nimg[class*=\"sprite-selector-item_sprite-image\"] {\n  max-width: 56px;\n  max-height: 32px;\n}\n\n[class*=\"action-menu_main-button\"] {\n  width: 2rem;\n  height: 2rem;\n}\n[class*=\"action-menu_main-button\"] img {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n[class*=\"action-menu_more-buttons-outer\"] {\n  width: 2rem;\n  bottom: 2rem;\n  padding-bottom: calc(2rem / 2);\n  margin: 0 0 calc(2rem / -2) 0;\n  border-top-left-radius: 2rem;\n  border-top-right-radius: 2rem;\n}\nbutton[class*=\"action-menu_more-button\"] {\n  width: 2rem;\n  height: 2rem;\n}\n\n/* search-sprites addon's button */\n.sa-search-sprites-container,\n.sa-search-sprites-icon,\n.sa-search-sprites-reset {\n  width: 2rem !important;\n  height: 2rem !important;\n}\n.sa-search-sprites-icon {\n  padding: 0.25rem !important;\n}\n.sa-search-sprites-container .sa-search-sprites-box {\n  padding-inline-start: 2rem !important;\n}\n[dir=\"ltr\"] .sa-search-sprites-container {\n  right: 4rem !important;\n}\n[dir=\"rtl\"] .sa-search-sprites-container {\n  left: 4rem !important;\n}\n.sa-search-sprites-container:hover,\n.sa-search-sprites-container:focus-within,\n.sa-search-sprites-container:not(.sa-search-sprites-empty) {\n  width: max(12rem, calc(100% - 5rem)) !important;\n}\n.sa-search-sprites-container:hover input.sa-search-sprites-box,\n.sa-search-sprites-container:focus-within input.sa-search-sprites-box,\n.sa-search-sprites-container:not(.sa-search-sprites-empty) input.sa-search-sprites-box {\n  padding-inline-end: 2rem !important;\n}\n\n/* Project player */\n.sa-body-editor [class*=\"stage-wrapper_stage-canvas-wrapper_\"]:not([class*=\"stage-wrapper_full-screen\"] *) {\n  padding-top: 2rem;\n}\n.sa-body-editor [class*=\"stage-header_stage-menu-wrapper_\"]:not([class*=\"stage-wrapper_full-screen\"] *) {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  height: 2rem;\n}\n.sa-body-editor [class*=\"green-flag_green-flag_\"]:not([class*=\"stage-wrapper_full-screen\"] *),\n.sa-body-editor .pause-btn:not([class*=\"stage-wrapper_full-screen\"] *),\n.sa-body-editor [class*=\"stop-all_stop-all_\"]:not([class*=\"stage-wrapper_full-screen\"] *),\n.sa-body-editor [class*=\"stage-header_stage-button_\"]:not([class*=\"stage-wrapper_full-screen\"] *) {\n  padding: 0.25rem;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.sa-body-editor [class*=\"turbo-mode_turbo-icon_\"]:not([class*=\"stage-wrapper_full-screen\"] *),\n.sa-body-editor .clone-icon:not([class*=\"stage-wrapper_full-screen\"] *) {\n  /* Remove vertical margin from images that appear on the stage header */\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.sa-body-editor [class*=\"stage-header_stage-button_\"]:not([class*=\"stage-wrapper_full-screen\"] *) {\n  padding: calc(0.25rem - 1px);\n}\n.sa-body-editor [class*=\"green-flag_green-flag_\"]:not([class*=\"stage-wrapper_full-screen\"] *),\n.sa-body-editor .pause-btn:not([class*=\"stage-wrapper_full-screen\"] *) {\n  margin-inline-end: 0.125rem;\n}\n.sa-stage-hidden [class*=\"stage-header_stage-size-row\"] {\n  height: 2rem;\n}\n\n.sa-body-editor [class*=\"monitor_list-body_\"] > div::-webkit-scrollbar-thumb {\n  background-color: #bec7d4;\n}\n\n/* Toggle buttons */\n[class*=\"toggle-buttons_button_\"] {\n  width: 1.5rem;\n  height: 1.5rem;\n  padding: calc(0.25rem - 1px);\n}\n\n/* Tabs area */\n[class*=\"gui_tab-list\"] {\n  height: 2rem;\n}\n[class*=\"gui_tab_\"] {\n  height: calc(1.5rem * 0.9);\n  padding-left: 1rem;\n  padding-right: 1rem;\n  border-radius: 0.5rem 0.5rem 0.25rem 0.25rem;\n}\n[class*=\"gui_tab_\"][class*=\"gui_is-selected_\"] {\n  height: 1.5rem;\n}\n[class*=\"gui_tab_\"] > img {\n  display: none;\n}\n\n.sa-find-bar {\n  align-self: center;\n}\n.sa-find-wrapper {\n  height: 20px;\n}\n.sa-find-dropdown-out {\n  margin-top: 0;\n}\n\n/* Code tab */\nbody:not(.sa-columns-enabled) [class*=\"gui_tab-panel\"] .scratchCategoryMenuItem {\n  padding: 0.25rem 0;\n}\n.scratchCategoryItemBubble,\n.scratchCategoryItemIcon {\n  width: 1rem;\n  height: 1rem;\n  background-size: 1rem 1rem;\n}\nbody:not(.sa-columns-enabled) [class*=\"gui_tab-panel\"] .blocklyToolboxDiv {\n  height: calc(100% - 2rem) !important;\n  scrollbar-width: none;\n}\nbody:not(.sa-columns-enabled) [class*=\"gui_tab-panel\"] .blocklyToolboxDiv::-webkit-scrollbar {\n  display: none;\n}\nbody:not(.sa-columns-enabled) [class*=\"gui_tab-panel\"] [class*=\"gui_extension-button-container_\"] {\n  height: 2rem;\n}\n\n/* Assets panel */\n[class*=\"selector_wrapper\"] {\n  width: 100px;\n}\n[class*=\"selector_list-item\"] {\n  margin: 0.25rem auto;\n}\n[class*=\"selector_list-area\"] {\n  overflow-y: auto;\n}\n[class*=\"selector_list-area\"]::-webkit-scrollbar-thumb {\n  background-color: var(--editorDarkMode-selector2-compactScrollbar, #b4bcc9);\n}\n[class*=\"selector_list-area\"] > div:first-child {\n  margin-top: 0.25rem;\n}\n[class*=\"selector_list-area\"] img[class*=\"sprite-selector-item_sprite-image\"] {\n  max-width: 52px;\n  max-height: 44px;\n}\n[class*=\"selector_list-area\"] [class*=\"sprite-selector-item_sprite-name\"] {\n  margin: 0;\n}\n[class*=\"selector_list-area\"] [class*=\"sprite-selector-item_sprite-info\"] {\n  padding-top: 0;\n  padding-bottom: 0.125rem;\n}\n[class*=\"selector_list-area\"] [class*=\"sprite-selector-item_is-selected\"] [class*=\"sprite-selector-item_sprite-info\"] {\n  background-color: transparent;\n  color: inherit;\n}\n\n/* Asset editor */\n[class*=\"asset-panel_detail-area\"] > div {\n  padding: 0.5rem;\n}\n[class*=\"paint-editor_row_\"] input {\n  font-size: 10px;\n}\n[class*=\"asset-panel_detail-area\"] [class*=\"labeled-icon-button_edit-field-icon\"],\n[class*=\"mode-tools_mode-tools-icon_\"],\n[class*=\"sound-editor_button_\"] img {\n  width: 20px;\n  height: 20px;\n}\n[class*=\"sound-editor_tool-button\"] img {\n  height: 20px;\n}\n[class*=\"fixed-tools_button-group-button_\"],\n[class*=\"paint-editor_button-group-button_\"],\n[class*=\"sound-editor_button_\"] {\n  padding: calc(0.125rem - 1px);\n}\n[class*=\"sound-editor_button_\"] {\n  width: 24px;\n  height: 24px;\n}\n[class*=\"paint-editor_editor-container-top\"] {\n  padding-bottom: 0;\n  border-bottom: none;\n}\n\n[class*=\"paint-editor_top-align-row\"] {\n  padding-top: 0.5rem;\n}\n[class*=\"paint-editor_mode-selector\"] {\n  width: min-content;\n}\n\n[class*=\"sound-editor_row_\"] + [class*=\"sound-editor_row_\"] {\n  margin-top: 0.5rem;\n}\n[class*=\"sound-editor_waveform-container_\"] {\n  margin: 0;\n}\n\n[class*=\"sound-editor_row-reverse_\"] {\n  gap: 2px;\n}\n[class*=\"sound-editor_row-reverse_\"] > [class*=\"sound-editor_input-group_\"] {\n  margin-right: 0.5rem;\n}\n\n[class*=\"paint-editor_canvas-controls\"] {\n  height: min-content;\n  margin-top: 0.5rem;\n}\n[class*=\"paint-editor_bitmap-button_\"] {\n  padding: 0 0.25rem;\n}\n[class*=\"paint-editor_bitmap-button-icon_\"] {\n  align-self: center;\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.sa-paintEditorZoomControls-wrapper {\n  height: auto !important;\n}\n[class*=\"paint-editor_zoom-controls_\"] {\n  align-self: flex-start;\n}\n\n/* Modals and prompts */\n[class*=\"card_header-buttons_\"] > div,\n[class*=\"card_header-buttons-right_\"] > div {\n  padding: 0.5rem;\n  margin: 0;\n}\n[class*=\"card_header-buttons_\"] span:not(.sa-debugger-tabs *) {\n  display: none;\n}\n[class*=\"card_header-buttons_\"] > [class*=\"card_header-buttons-right_\"] {\n  padding: 0;\n}\n[class*=\"card_remove-button_\"] > [class*=\"card_close-icon_\"],\n[class*=\"card_all-button_\"] > [class*=\"card_help-icon_\"] {\n  margin: 0;\n}\n.sa-debugger-tabs {\n  padding: 0 0.25rem;\n  margin-left: 0.25rem;\n}\n.sa-debugger-tabs li {\n  padding: 0.25em 1em;\n}\n.sa-debugger-tabs li + li {\n  margin-inline-start: 0.25rem;\n}\n\n[class*=\"modal_header\"],\n[class*=\"library_filter-bar\"] {\n  height: 2rem;\n}\n[class*=\"close-button_large\"] {\n  width: 1rem;\n  height: 1rem;\n}\n\n[class*=\"library_filter-bar-item\"] {\n  height: 1.5rem;\n}\n[class*=\"library_filter-bar-item\"]:focus-within {\n  box-shadow: 0 0 0 0.125rem var(--editorDarkMode-primary-transparent35, hsl(260deg 60% 60% / 35%));\n}\n[dir=\"ltr\"] [class*=\"filter_filter-icon\"],\n[dir=\"rtl\"] [class*=\"filter_filter-icon\"],\n[class*=\"filter_x-icon_\"] {\n  width: 0.75rem;\n  margin: 0.25rem 0.5rem;\n}\n[dir=\"ltr\"] [class*=\"filter_filter-input\"] {\n  padding-left: 1.75rem;\n}\n[dir=\"rtl\"] [class*=\"filter_filter-input\"] {\n  padding-right: 1.75rem;\n}\n[class*=\"library_divider\"] {\n  display: none;\n}\n[class*=\"filter_x-icon-wrapper\"] {\n  position: static;\n  margin: 0;\n}\n[class*=\"library_tag-wrapper\"] {\n  height: auto;\n}\n[class*=\"library_library-scroll-grid\"] {\n  height: calc(100% - 2rem);\n}\n[class*=\"library_library-scroll-grid\"][class*=\"library_withFilterBar\"] {\n  height: calc(100% - 4rem);\n}\n[class*=\"library_library-scroll-grid\"]::-webkit-scrollbar-thumb {\n  background-color: var(--editorDarkMode-selector-compactScrollbar, #c1c8d1);\n}\n\n[class*=\"prompt_body\"],\n[class*=\"custom-procedures_body\"] {\n  padding: 1rem;\n}\n[class*=\"modal_modal-content\"] [class*=\"box_box\"] button {\n  padding: 0.5rem 0.75rem;\n}\n\n[class*=\"prompt_variable-name-text-input\"] {\n  height: 1.5rem;\n  padding: 0 0.5rem;\n  margin-bottom: 1rem;\n}\n.sa-swap-local-global-hint,\n[class*=\"prompt_options-row\"] {\n  padding-bottom: 0.5rem;\n}\n[class*=\"prompt_cloud-option\"] {\n  border: none;\n  padding-top: 0;\n}\n\n[class*=\"custom-procedures_modal-content\"] {\n  width: 500px;\n}\n[class*=\"custom-procedures_workspace\"] {\n  min-height: 100px;\n}\n.blocklyTextRemoveIcon {\n  top: -35px;\n}\n[class*=\"custom-procedures_body\"] [role=\"button\"] {\n  padding: 0.5rem;\n}\n", ""]);

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