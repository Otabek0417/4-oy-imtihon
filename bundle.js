/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;800;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  /* colors */\\r\\n  --black-05: #050505;\\r\\n  --black-1f: #1f1f1f;\\r\\n  --black-2d: #2d2d2d;\\r\\n  --black-3a: #3a3a3a;\\r\\n  --light-75: #757575;\\r\\n  --light-e9: #e9e9e9;\\r\\n  --light-f4: #f4f4f4;\\r\\n  --white: #ffffff;\\r\\n  --pink: #a445ed;\\r\\n  --red: #ff5252;\\r\\n}\\r\\n.dark-mode {\\r\\n  /* --black-05: #050505;\\r\\n  --black-1f: #1f1f1f; */\\r\\n  --black-2d: #ffffff;\\r\\n  --black-3a: #3a3a3a;\\r\\n  --light-75: #757575;\\r\\n  --light-e9: #e9e9e9;\\r\\n  --light-f4: #1f1f1f;\\r\\n  --white: #050505;\\r\\n  --pink: #a445ed;\\r\\n  --red: #ff5252;\\r\\n}\\r\\n*,\\r\\n*::after,\\r\\n*::before {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  height: 100%;\\r\\n  font-size: 62.5%;\\r\\n}\\r\\nmain {\\r\\n  flex-grow: 1;\\r\\n}\\r\\n\\r\\nul,\\r\\nol {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nimg {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  height: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  font-family: \\\"Inter\\\", sans-serif;\\r\\n  background-color: var(--white);\\r\\n}\\r\\n\\r\\n.container {\\r\\n  width: 100%;\\r\\n  max-width: 737px;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  padding-left: 30px;\\r\\n  padding-right: 30px;\\r\\n}\\r\\n\\r\\n/* mode btn */\\r\\n.checkbox {\\r\\n  opacity: 0;\\r\\n  position: absolute;\\r\\n}\\r\\n\\r\\n.label {\\r\\n  width: 40px;\\r\\n  height: 20px;\\r\\n  background-color: #757575;\\r\\n  display: flex;\\r\\n  border-radius: 50px;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  padding: 5px;\\r\\n  position: relative;\\r\\n  transform: scale(1.5);\\r\\n}\\r\\n\\r\\n.ball {\\r\\n  width: 14px;\\r\\n  height: 14px;\\r\\n  background-color: white;\\r\\n  position: absolute;\\r\\n  top: 3px;\\r\\n  left: 3px;\\r\\n  border-radius: 50%;\\r\\n  transition: transform 0.2s linear;\\r\\n}\\r\\n\\r\\n/*  target the elemenent after the label*/\\r\\n.checkbox:checked + .label .ball {\\r\\n  transform: translateX(20px);\\r\\n}\\r\\n\\r\\n.checkbox:checked + .label {\\r\\n  background-color: var(--pink);\\r\\n}\\r\\n\\r\\n/* header */\\r\\n.header {\\r\\n  padding-top: 20px;\\r\\n}\\r\\n\\r\\n.header__container {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.sitenav__title {\\r\\n  font-weight: 700;\\r\\n  font-size: 18px;\\r\\n  line-height: 24px;\\r\\n  gap: 18px;\\r\\n  color: var(--black-2d);\\r\\n  margin-right: 18px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.sitenav__list {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.sitenav__border {\\r\\n  margin-right: 29px;\\r\\n}\\r\\n.label {\\r\\n  margin-right: 20px;\\r\\n}\\r\\n.sitenav__item:nth-child(2) {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.headerCheckbox {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.dropbtn {\\r\\n  background-color: var(--white);\\r\\n  color: var(--black-05);\\r\\n  font-size: 16px;\\r\\n  border: none;\\r\\n}\\r\\n.dropdown-color {\\r\\n  color: var(--black-2d);\\r\\n}\\r\\n\\r\\n.dropdown {\\r\\n  position: relative;\\r\\n  display: inline-block;\\r\\n  padding-bottom: 6px;\\r\\n}\\r\\n\\r\\n.dropdown-content {\\r\\n  display: none;\\r\\n  position: absolute;\\r\\n  z-index: 1;\\r\\n  padding: 24px 50px 24px 24px;\\r\\n  background: var(--white);\\r\\n  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);\\r\\n  border-radius: 16px;\\r\\n  max-width: 183px;\\r\\n  left: -50px;\\r\\n  top: 30px;\\r\\n}\\r\\n\\r\\n.dropdown-content div {\\r\\n  color: black;\\r\\n  text-decoration: none;\\r\\n  font-weight: 700;\\r\\n  font-size: 18px;\\r\\n  line-height: 24px;\\r\\n  color: var(--black-2d);\\r\\n}\\r\\n\\r\\n.dropdown-content div:hover {\\r\\n  color: var(--pink);\\r\\n}\\r\\n.dropdown:hover .dropdown-content {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.dropdown-content div:not(:last-child) {\\r\\n  margin-bottom: 16px;\\r\\n}\\r\\n\\r\\n.dropdown-content div:nth-child(2) {\\r\\n  font-family: serif;\\r\\n}\\r\\n\\r\\n.dropdown-content div:nth-child(3) {\\r\\n  font-family: monospace;\\r\\n}\\r\\n\\r\\n/* section hero */\\r\\n.hero {\\r\\n  margin-top: 60px;\\r\\n}\\r\\n.hero__container {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n.hero__wrapper {\\r\\n  width: 100%;\\r\\n  max-width: 736px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  background-color: var(--light-f4);\\r\\n  padding: 20px 24px 20px 24px;\\r\\n  border-radius: 16px;\\r\\n}\\r\\n\\r\\n.hero__wrapper:hover {\\r\\n  border: 1px solid #a445ed;\\r\\n  border-radius: 16px;\\r\\n}\\r\\n.hero__title {\\r\\n  font-weight: 700;\\r\\n  font-size: 20px;\\r\\n  line-height: 24px;\\r\\n  color: var(--black-2d);\\r\\n  border: none;\\r\\n  width: 100%;\\r\\n  background-color: var(--light-f4);\\r\\n  outline: none;\\r\\n}\\r\\n/* .hero__img__wrapper {\\r\\n} */\\r\\n\\r\\n/* SERVIS SECTION */\\r\\n.servis {\\r\\n  margin-top: 45px;\\r\\n}\\r\\n.servis__container {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n/* .servis__wrapper {\\r\\n} */\\r\\n.servis__title {\\r\\n  font-weight: 700;\\r\\n  font-size: 64px;\\r\\n  line-height: 77px;\\r\\n  color: var(--black-2d);\\r\\n  margin-bottom: 8px;\\r\\n}\\r\\n.servis__desc {\\r\\n  font-weight: 400;\\r\\n  font-size: 24px;\\r\\n  line-height: 29px;\\r\\n  color: var(--pink);\\r\\n}\\r\\n/* .servis__img {\\r\\n} */\\r\\n\\r\\n/* INFO SECTION */\\r\\n.info {\\r\\n  margin-top: 40px;\\r\\n}\\r\\n/* .info__container {\\r\\n}\\r\\n.container {\\r\\n} */\\r\\n.info__wrapper {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n.info__title {\\r\\n  margin-right: 20px;\\r\\n  font-style: italic;\\r\\n  font-weight: 700;\\r\\n  font-size: 24px;\\r\\n  line-height: 29px;\\r\\n  color: var(--black-2d);\\r\\n}\\r\\n.info__hr {\\r\\n  width: 100%;\\r\\n  max-width: 656px;\\r\\n  height: 1px;\\r\\n  color: var(--light-e9);\\r\\n}\\r\\n\\r\\n/* MEANING DIV */\\r\\n\\r\\n.meaning__title {\\r\\n  margin-top: 40px;\\r\\n  font-weight: 400;\\r\\n  font-size: 20px;\\r\\n  line-height: 24px;\\r\\n  color: var(--light-75);\\r\\n}\\r\\n.meaning__item :nth-child(1)::before {\\r\\n  content: \\\"\\\\2022\\\";\\r\\n  color: var(--pink);\\r\\n  font-weight: bold;\\r\\n  display: inline-block;\\r\\n  width: 1em;\\r\\n  margin-left: -1em;\\r\\n}\\r\\n.meaning__list {\\r\\n  margin-top: 25px;\\r\\n  margin-left: 37px;\\r\\n}\\r\\n.meaning__item:nth-child(1) {\\r\\n  margin-bottom: 13px;\\r\\n  margin-top: 25px;\\r\\n  font-weight: 400;\\r\\n  font-size: 18px;\\r\\n  line-height: 24px;\\r\\n  color: var(--black-2d);\\r\\n}\\r\\n\\r\\n.meaning__item:nth-child(2) {\\r\\n  margin-bottom: 13px;\\r\\n  font-weight: 400;\\r\\n  font-size: 18px;\\r\\n  line-height: 24px;\\r\\n  color: var(--black-2d);\\r\\n}\\r\\n.meaning__item:nth-child(3) {\\r\\n  margin-bottom: 64px;\\r\\n  font-weight: 400;\\r\\n  font-size: 18px;\\r\\n  line-height: 24px;\\r\\n  color: var(--black-2d);\\r\\n}\\r\\n/* .meaning__desc {\\r\\n} */\\r\\n.meaning__wrapper {\\r\\n  display: flex;\\r\\n  margin-top: 64px;\\r\\n}\\r\\n.meaning__text {\\r\\n  margin-right: 22px;\\r\\n  font-weight: 400;\\r\\n  font-size: 20px;\\r\\n  line-height: 24px;\\r\\n  color: var(--light-75);\\r\\n}\\r\\n.meaning__link {\\r\\n  font-weight: 700;\\r\\n  font-size: 20px;\\r\\n  line-height: 24px;\\r\\n  color: var(--pink);\\r\\n}\\r\\n.meaning__link:hover {\\r\\n  text-decoration-line: underline;\\r\\n}\\r\\n\\r\\n/* SECTION VERB */\\r\\n\\r\\n/* .verb__container {\\r\\n} */\\r\\n.verb {\\r\\n  padding-bottom: 20px;\\r\\n}\\r\\n.verb__wrapper {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  margin-top: 40px;\\r\\n}\\r\\n.verb__title {\\r\\n  font-weight: 700;\\r\\n  font-size: 24px;\\r\\n  font-style: italic;\\r\\n  line-height: 29px;\\r\\n  color: var(--black-2d);\\r\\n  margin-right: 26px;\\r\\n}\\r\\n.verb__hr {\\r\\n  width: 100%;\\r\\n  max-width: 656px;\\r\\n  height: 1px;\\r\\n  color: var(--light-e9);\\r\\n}\\r\\n\\r\\n/* footer div */\\r\\n\\r\\n.footer__title {\\r\\n  margin-top: 40px;\\r\\n  font-weight: 400;\\r\\n  font-size: 20px;\\r\\n  line-height: 24px;\\r\\n  color: var(--light-75);\\r\\n}\\r\\n.footer__list {\\r\\n  margin-top: 25px;\\r\\n  margin-left: 37px;\\r\\n}\\r\\n.footer__item :nth-child(1)::before {\\r\\n  content: \\\"\\\\2022\\\";\\r\\n  color: var(--pink);\\r\\n  font-weight: bold;\\r\\n  display: inline-block;\\r\\n  width: 1em;\\r\\n  margin-left: -1em;\\r\\n}\\r\\n.footer__item :nth-child(1) {\\r\\n  margin-bottom: 13px;\\r\\n}\\r\\n.footer__item :nth-child(2) {\\r\\n  margin-bottom: 13px;\\r\\n}\\r\\n.footer__desc {\\r\\n  font-weight: 400;\\r\\n  font-size: 18px;\\r\\n  line-height: 24px;\\r\\n  color: var(--black-2d);\\r\\n}\\r\\n.footer__desc {\\r\\n  font-weight: 400;\\r\\n  font-size: 18px;\\r\\n  line-height: 24px;\\r\\n  color: var(--light-75);\\r\\n}\\r\\n\\r\\n/* links */\\r\\n\\r\\n.footer__wrapper {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  margin-top: 19px;\\r\\n}\\r\\n.footer__wrapper__desc {\\r\\n  font-weight: 400;\\r\\n  font-size: 14px;\\r\\n  line-height: 17px;\\r\\n  margin-right: 20px;\\r\\n  color: var(--light-75);\\r\\n}\\r\\n.footer__api {\\r\\n  display: flex;\\r\\n}\\r\\n.footer__link {\\r\\n  font-weight: 400;\\r\\n  font-size: 14px;\\r\\n  line-height: 17px;\\r\\n  color: var(--black-2d);\\r\\n  margin-right: 9px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://8-dars/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://8-dars/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://8-dars/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://8-dars/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://8-dars/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://8-dars/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://8-dars/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://8-dars/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://8-dars/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://8-dars/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/font.js":
/*!************************!*\
  !*** ./src/js/font.js ***!
  \************************/
/***/ (() => {

eval("const sansSerif = document.querySelector(\"#sans-serif\");\r\nconst serif = document.querySelector(\"#serif\");\r\nconst mono = document.querySelector(\"#mono\");\r\nconst sitenavTitle = document.querySelector(\".sitenav__title\");\r\n\r\nsansSerif.addEventListener(\"click\", () => {\r\n  document.body.style.fontFamily = \"sans-serif\";\r\n  //   sitenavTitle.textContent = \"Sans Serif\";\r\n});\r\n\r\nserif.addEventListener(\"click\", () => {\r\n  document.body.style.fontFamily = \"serif\";\r\n  //   sitenavTitle.textContent = \"Sans Serif\";\r\n});\r\n\r\nmono.addEventListener(\"click\", () => {\r\n  document.body.style.fontFamily = \"monospace\";\r\n});\r\n\n\n//# sourceURL=webpack://8-dars/./src/js/font.js?");

/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ \"./src/js/request.js\");\n/* harmony import */ var _updateUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateUI */ \"./src/js/updateUI.js\");\n\r\n\r\nconst form = document.querySelector(\"#form\");\r\nconst input = document.getElementById(\"input\");\r\n\r\nform.addEventListener(\"submit\", (e) => {\r\n  e.preventDefault();\r\n  const inputVal = input.value.trim();\r\n  const API = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputVal}`;\r\n\r\n  (0,_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(API).then((data) => {\r\n    (0,_updateUI__WEBPACK_IMPORTED_MODULE_1__.updateUi)(data);\r\n    console.log(data[0]);\r\n  });\r\n  console.log(inputVal);\r\n});\r\n\n\n//# sourceURL=webpack://8-dars/./src/js/form.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ \"./src/js/request.js\");\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mode */ \"./src/js/mode.js\");\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mode__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./font */ \"./src/js/font.js\");\n/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_font__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form */ \"./src/js/form.js\");\n/* harmony import */ var _updateUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateUI */ \"./src/js/updateUI.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://8-dars/./src/js/main.js?");

/***/ }),

/***/ "./src/js/mode.js":
/*!************************!*\
  !*** ./src/js/mode.js ***!
  \************************/
/***/ (() => {

eval("const checkbox = document.querySelector(\".checkbox\");\r\nconst sitenavMoon = document.querySelector(\".sitenav__moon\");\r\nconst body = document.querySelector(\"body\");\r\nconst dropdownContent = document.querySelector(\".dropdown-content\");\r\n// const wrapper = document.querySelector(\".hero__wrapper\");/\r\ncheckbox.addEventListener(\"click\", () => {\r\n  body.classList.toggle(\"dark-mode\");\r\n  if (body.classList.contains(\"dark-mode\")) {\r\n    sitenavMoon.setAttribute(\"stroke\", \"#A445ED\");\r\n    dropdownContent.style.background = \" #1F1F1F\";\r\n    dropdownContent.style.boxShadow = \"0px 5px 30px #A445ED\";\r\n  } else {\r\n    sitenavMoon.setAttribute(\"stroke\", \"#838383\");\r\n    dropdownContent.style.background = \" #FFFFFF\";\r\n    dropdownContent.style.boxShadow = \" 0px 5px 30px rgba(0, 0, 0, 0.1)\";\r\n  }\r\n  // localStorage.setItem(\"mode\", document.body.classList.contains(\"dark-mode\"));\r\n});\r\n\n\n//# sourceURL=webpack://8-dars/./src/js/mode.js?");

/***/ }),

/***/ "./src/js/request.js":
/*!***************************!*\
  !*** ./src/js/request.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst request = async (url) => {\r\n  const req = await fetch(url);\r\n  const data = await req.json();\r\n  console.log(data);\r\n  return data;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);\r\n\n\n//# sourceURL=webpack://8-dars/./src/js/request.js?");

/***/ }),

/***/ "./src/js/updateUI.js":
/*!****************************!*\
  !*** ./src/js/updateUI.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateUi\": () => (/* binding */ updateUi)\n/* harmony export */ });\nconst updateUi = (data) => {\r\n  const updateEl = document.querySelector(\".updateEl\");\r\n  const { word, phonetics, meanings, sourceUrls } = data[0];\r\n\r\n  updateEl.innerHTML = `\r\n    \r\n    <section class=\"servis\">\r\n  <div class=\"servis__container container\">\r\n    <div class=\"servis__wrapper\">\r\n      <h3 class=\"servis__title\">${word}</h3>\r\n      <p class=\"servis__desc\">${phonetics[0].text}</p>\r\n    </div>\r\n    <img class=\"servis__img\" src=\"./images/icon-play.svg\" alt=\"\" />\r\n  </div>\r\n  </section>\r\n  \r\n  <!--  -->\r\n  \r\n  <section class=\"info\">\r\n  <div class=\"info__container container\">\r\n    <div class=\"info__wrapper\">\r\n      <h4 class=\"info__title\">noun</h4>\r\n      <hr class=\"info__hr\" />\r\n    </div>\r\n  </div>\r\n  \r\n  <!--  -->\r\n  <div class=\"meaning__container container\">\r\n    <h3 class=\"meaning__title\">Meaning</h3>\r\n    <ul class=\"meaning__list\">\r\n    </ul>\r\n    <div class=\"meaning__wrapper\">\r\n    <p class=\"meaning__text\">Synonyms</p>\r\n    <a class=\"meaning__link\" href=\"${sourceUrls}\">${\r\n    meanings[0].synonyms ? meanings[0].synonyms : \"NO Synonyms  \"\r\n  }</a>\r\n  </div>\r\n  </div>\r\n  </section>\r\n  \r\n  <!--  -->\r\n  \r\n  <section class=\"verb\">\r\n  <div class=\"verb__container container\">\r\n    <div class=\"verb__wrapper\">\r\n      <h4 class=\"verb__title\">verb</h4>\r\n      <hr class=\"verb__hr\" />\r\n    </div>\r\n  </div>\r\n  \r\n  <!--  -->\r\n  \r\n  <div class=\"footer__container container\">\r\n    <h3 class=\"footer__title\">Meaning</h3>\r\n    <ul class=\"footer__list\">\r\n    \r\n    </ul>\r\n    <hr class=\"footer-hr\" />\r\n    <div class=\"footer__wrapper\">\r\n      <p class=\"footer__wrapper__desc\">Source</p>\r\n      <div class=\"footer__api\">\r\n        <a\r\n          class=\"footer__link\"\r\n          href=\"${sourceUrls}\"\r\n          >${sourceUrls}</a\r\n        >\r\n        <img src=\"./images/icon-new-window.svg\" alt=\"window\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </section> \r\n    `;\r\n\r\n  const info__text = document.querySelector(\".meaning__list\");\r\n  meanings[0].definitions.forEach((e) => {\r\n    const li = document.createElement(\"li\");\r\n    li.classList.add(\"meaning__item\");\r\n    li.innerHTML = `\r\n            <p class=\"meaning__text\">${e.definition}</p>\r\n        `;\r\n    info__text.appendChild(li);\r\n    console.log(meanings[0].synonyms);\r\n  });\r\n  //\r\n\r\n  const info__text2 = document.querySelector(\".footer__list\");\r\n  meanings[1].definitions.forEach((e) => {\r\n    const li = document.createElement(\"li\");\r\n    li.classList.add(\"footer__item\");\r\n    li.innerHTML = `\r\n            <p class=\"footer__desc\">${e.definition}</p>\r\n        `;\r\n    info__text2.appendChild(li);\r\n  });\r\n  const playBtn = document.querySelector(\".servis__img\");\r\n  playBtn.addEventListener(\"click\", () => {\r\n    let audio = new Audio(phonetics[0].audio);\r\n    audio.play();\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://8-dars/./src/js/updateUI.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;