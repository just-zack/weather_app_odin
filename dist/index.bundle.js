/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  --padding_standard: 20px;\n  --padding_large: 40px;\n  --main_color: #264653;\n  --secondary_color: #e9c46a;\n  --tertiary_color: #e76f51;\n  --fourth_color: #2a9d8f;\n  --fifth_color: #fefae0;\n}\n\n#main_container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 10vh;\n  color: var(--fifth_color);\n  gap: var(--padding_large);\n}\n\n#current_weather_container {\n  display: flex;\n  justify-content: space-between;\n}\n\n#left_container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n#current_weather {\n  font-size: 3rem;\n}\n\n#location {\n  font-size: 1.75rem;\n}\n\n#date {\n  font-size: 1.25rem;\n}\n\n#current_temp {\n  font-size: 3rem;\n}\n\n#toggle_measure {\n  background-color: transparent;\n  border: none;\n  align-self: flex-start;\n  font-size: 0.8rem;\n  padding: 3px;\n  color: inherit;\n}\n\n#toggle_measure:hover {\n  border: solid 1px var inherit;\n  border-radius: 3px;\n}\n\n#new_location {\n  background-color: transparent;\n  border: none;\n  font-size: 1.25rem;\n  padding: 3px;\n  margin-right: 10px;\n  border-bottom: solid 2px var(--fifth_color);\n  color: inherit;\n}\n\n#submit {\n  background-color: transparent;\n  border: solid 2px var(--fifth_color);\n  border-radius: 5px;\n  font-size: 1.25rem;\n  padding: 5px;\n  color: inherit;\n}\n\n#submit:hover {\n  background-color: var(--fifth_color);\n  color: var(--main_color);\n}\n\n::placeholder {\n  color: var(--fifth_color);\n  opacity: 0.5;\n}\n\n#right_container {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  text-align: end;\n  font-size: 1.4rem;\n}\n\n#forecast_container {\n  display: flex;\n  flex-direction: column;\n  gap: var(--padding_standard);\n}\n\n#daily {\n  font-size: 2rem;\n}\n\n#daily_cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: var(--padding_standard);\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--padding_standard);\n  padding: var(--padding_standard);\n  border: var(--fifth_color) solid 2px;\n  border-radius: 20px;\n  box-shadow: 1px 1px 5px;\n}\n\n.condition {\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;EACA,wBAAA;EACA,qBAAA;EACA,qBAAA;EACA,0BAAA;EACA,yBAAA;EACA,uBAAA;EACA,sBAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,aAAA;EACA,yBAAA;EACA,yBAAA;AACF;;AAEA;EACE,aAAA;EACA,8BAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACE,kBAAA;AACF;;AAEA;EACE,kBAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACE,6BAAA;EACA,YAAA;EACA,sBAAA;EACA,iBAAA;EACA,YAAA;EACA,cAAA;AACF;;AAEA;EACE,6BAAA;EACA,kBAAA;AACF;;AAEA;EACE,6BAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,2CAAA;EACA,cAAA;AACF;;AAEA;EACE,6BAAA;EACA,oCAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,cAAA;AACF;;AAEA;EACE,oCAAA;EACA,wBAAA;AACF;;AACA;EACE,yBAAA;EACA,YAAA;AAEF;;AAAA;EACE,aAAA;EACA,sBAAA;EACA,QAAA;EACA,eAAA;EACA,iBAAA;AAGF;;AAAA;EACE,aAAA;EACA,sBAAA;EACA,4BAAA;AAGF;;AAAA;EACE,eAAA;AAGF;;AADA;EACE,aAAA;EACA,2DAAA;EACA,4BAAA;AAIF;;AADA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,4BAAA;EACA,gCAAA;EACA,oCAAA;EACA,mBAAA;EACA,uBAAA;AAIF;;AADA;EACE,kBAAA;AAIF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  --padding_standard: 20px;\n  --padding_large: 40px;\n  --main_color: #264653;\n  --secondary_color: #e9c46a;\n  --tertiary_color: #e76f51;\n  --fourth_color: #2a9d8f;\n  --fifth_color: #fefae0;\n}\n\n#main_container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 10vh;\n  color: var(--fifth_color);\n  gap: var(--padding_large);\n}\n\n#current_weather_container {\n  display: flex;\n  justify-content: space-between;\n}\n\n#left_container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n#current_weather {\n  font-size: 3rem;\n}\n\n#location {\n  font-size: 1.75rem;\n}\n\n#date {\n  font-size: 1.25rem;\n}\n\n#current_temp {\n  font-size: 3rem;\n}\n\n#toggle_measure {\n  background-color: transparent;\n  border: none;\n  align-self: flex-start;\n  font-size: 0.8rem;\n  padding: 3px;\n  color: inherit;\n}\n\n#toggle_measure:hover {\n  border: solid 1px var inherit;\n  border-radius: 3px;\n}\n\n#new_location {\n  background-color: transparent;\n  border: none;\n  font-size: 1.25rem;\n  padding: 3px;\n  margin-right: 10px;\n  border-bottom: solid 2px var(--fifth_color);\n  color: inherit;\n}\n\n#submit {\n  background-color: transparent;\n  border: solid 2px var(--fifth_color);\n  border-radius: 5px;\n  font-size: 1.25rem;\n  padding: 5px;\n  color: inherit;\n}\n\n#submit:hover {\n  background-color: var(--fifth_color);\n  color: var(--main_color);\n}\n::placeholder {\n  color: var(--fifth_color);\n  opacity: 0.5;\n}\n#right_container {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  text-align: end;\n  font-size: 1.4rem;\n}\n\n#forecast_container {\n  display: flex;\n  flex-direction: column;\n  gap: var(--padding_standard);\n}\n\n#daily {\n  font-size: 2rem;\n}\n#daily_cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: var(--padding_standard);\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--padding_standard);\n  padding: var(--padding_standard);\n  border: var(--fifth_color) solid 2px;\n  border-radius: 20px;\n  box-shadow: 1px 1px 5px;\n}\n\n.condition {\n  text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dataHandler.js":
/*!****************************!*\
  !*** ./src/dataHandler.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let weatherData;
let location = "los angeles";

async function getWeatherData() {
  let fetchURL =
    "http://api.weatherapi.com/v1/forecast.json?key=8725fafca682482d964100105233005&q=" +
    location +
    "&days=7&aqi=no&alerts=no";
  const data = await fetch(fetchURL);
  const result = await data.json();
  weatherData = result;
  return weatherData;
}

function getLocation() {
  return location;
}

function setLocation(variable) {
  location = variable;
}

function getNewLocationData(variable) {
  setLocation(variable);
  getWeatherData(variable);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getWeatherData,
  getLocation,
  setLocation,
  getNewLocationData,
});


/***/ }),

/***/ "./src/displayHandler.js":
/*!*******************************!*\
  !*** ./src/displayHandler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const body = document.getElementById("body");
const mainContainer = document.getElementById("main_container");
const currentWeather = document.getElementById("current_weather");
const location = document.getElementById("location");
const date = document.getElementById("date");
const currentTemp = document.getElementById("current_temp");
const toggleMeasure = document.getElementById("toggle_measure");

const feelsLikeTemp = document.getElementById("feels_like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

let currentMeasurement = "f";
let data;

function setLocationCurrentWeather(data) {
  currentWeather.innerText = data.current.condition.text;
  location.innerText = data.location.name + ", " + data.location.country;
  date.innerText = getNewDateString(data);
  currentTemp.innerText = data.current.temp_f + " °F";
  feelsLikeTemp.innerText = data.current.feelslike_f + " °F";
  humidity.innerText = data.current.humidity + "%";
  wind.innerText = data.current.wind_mph + " mph";
}

function getNewDateString(data) {
  let currentTime = data.location.localtime;
  let newDate = new Date(currentTime);
  let newDateString = newDate.toDateString();

  return newDateString;
}

function setLocationForecast(data) {
  let forecastContainer = document.getElementById("forecast_container");
  let cardContainer = document.getElementById("daily_cards");
  cardContainer.remove();
  cardContainer = document.createElement("div");
  cardContainer.setAttribute("id", "daily_cards");
  forecastContainer.appendChild(cardContainer);
  for (let i = 0; i < 7; i++) {
    let card = document.createElement("div");
    let day = document.createElement("h2");
    let condition = document.createElement("h1");
    let date = document.createElement("h3");
    let avgTemp = document.createElement("h2");
    let avgWind = document.createElement("h3");
    let dayOfWeek = convertDayOfWeek(data, [i]);

    card.setAttribute("id", "day" + [i] + "_card");
    card.classList.add("card");
    day.classList.add("day");
    day.innerText = dayOfWeek;
    condition.classList.add("condition");
    condition.innerText = data.forecast.forecastday[i].day.condition.text;
    date.classList.add("date");
    date.innerText = data.forecast.forecastday[i].date;
    avgTemp.classList.add("avg_temp");
    avgTemp.setAttribute("id", "avgTemp_" + [i]);
    avgTemp.innerText = data.forecast.forecastday[i].day.avgtemp_f + " °F";
    avgWind.classList.add("avg_wind");
    avgWind.innerText = data.forecast.forecastday[i].day.maxwind_mph + " mph";
    cardContainer.appendChild(card);
    card.appendChild(day);
    card.appendChild(condition);
    card.appendChild(avgTemp);
    card.appendChild(avgWind);
  }
}

function convertDayOfWeek(data, i) {
  let date = new Date(data.forecast.forecastday[i].date);
  let dayNumber = date.getDay();

  if (dayNumber === 0) {
    return "Sunday";
  } else if (dayNumber === 1) {
    return "Monday";
  } else if (dayNumber === 2) {
    return "Tuesday";
  } else if (dayNumber === 3) {
    return "Wednesday";
  } else if (dayNumber === 4) {
    return "Thursday";
  } else if (dayNumber === 5) {
    return "Friday";
  } else if (dayNumber === 6) {
    return "Saturday";
  }
}

function changeMeasurement() {
  if (currentMeasurement === "f") {
    currentMeasurement = "c";
    currentTemp.innerText = data.current.temp_c + " °C";
    feelsLikeTemp.innerText = data.current.feelslike_c + " °C";
    toggleMeasure.innerText = "Display °F";
    changeForecastMeasurement("f");
  } else if (currentMeasurement === "c") {
    currentMeasurement = "f";
    currentTemp.innerText = data.current.temp_f + " °F";
    feelsLikeTemp.innerText = data.current.feelslike_f + " °F";
    toggleMeasure.innerText = "Display °C";
    changeForecastMeasurement("c");
  }
}

function changeForecastMeasurement(variable) {
  for (let i = 0; i < 7; i++) {
    let avgTemp = document.getElementById("avgTemp_" + [i]);
    if (variable === "f") {
      avgTemp.innerText = data.forecast.forecastday[i].day.avgtemp_c + " °C";
    } else if (variable === "c") {
      avgTemp.innerText = data.forecast.forecastday[i].day.avgtemp_f + " °F";
    }
  }
}

function setData(variable) {
  data = variable;
  console.log(data);
}

function getCurrentHour(data) {
  let dataDate = data.location.localtime;
  let date = new Date(dataDate);
  let currentHour = date.getHours();
  return currentHour;
}

function changeColors(data) {
  let currentHour = getCurrentHour(data);
  if (currentHour > 6 && currentHour <= 11) {
    body.style.backgroundImage = "linear-gradient(#e9c46a, #264653)";
    mainContainer.style.color = "#264653";
  } else if (currentHour > 11 && currentHour <= 17) {
    body.style.backgroundImage = "linear-gradient(#e9c46a, #e76f51)";
    mainContainer.style.color = "#264653";
  } else if (currentHour > 17 && currentHour <= 20) {
    body.style.backgroundImage = "linear-gradient(#2a9d8f, #264653)";
    mainContainer.style.color = "#fefae0";
  } else {
    body.style.backgroundImage = "";
    body.style.backgroundColor = "black";
    mainContainer.style.color = "#fefae0";
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  changeColors,
  setLocationCurrentWeather,
  changeMeasurement,
  setData,
  setLocationForecast,
});


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _dataHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataHandler.js */ "./src/dataHandler.js");
/* harmony import */ var _displayHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayHandler.js */ "./src/displayHandler.js");



let data;

async function useData() {
  data = await _dataHandler_js__WEBPACK_IMPORTED_MODULE_1__["default"].getWeatherData();
  _displayHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].changeColors(data);
  _displayHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].setLocationCurrentWeather(data);
  _displayHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].setLocationForecast(data);
}

function changeMeasurementEventListener() {
  const toggleMeasure = document.getElementById("toggle_measure");
  toggleMeasure.addEventListener("click", () => {
    _displayHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].setData(data);
    _displayHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].changeMeasurement();
  });
}

function changeLocationAddEventListener() {
  const newLocation = document.getElementById("new_location");
  const submit = document.getElementById("submit");

  submit.addEventListener("click", () => {
    event.preventDefault();
    _dataHandler_js__WEBPACK_IMPORTED_MODULE_1__["default"].setLocation(newLocation.value);
    useData();
    newLocation.value = "";
  });
}

useData();
changeLocationAddEventListener();
changeMeasurementEventListener();

// work on date modificaiton
// work on day query
// work on changing F to C in forecast

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SkY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ2lCO0FBQ007QUFDbkQ7O0FBRUE7QUFDQSxlQUFlLHNFQUE0QjtBQUMzQyxFQUFFLHVFQUE2QjtBQUMvQixFQUFFLG9GQUEwQztBQUM1QyxFQUFFLDhFQUFvQztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUF3QjtBQUM1QixJQUFJLDRFQUFrQztBQUN0QyxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG1FQUF5QjtBQUM3QjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzPzc5Y2QiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9zcmMvZGF0YUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vc3JjL2Rpc3BsYXlIYW5kbGVyLmpzIiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW5fdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC0tcGFkZGluZ19zdGFuZGFyZDogMjBweDtcXG4gIC0tcGFkZGluZ19sYXJnZTogNDBweDtcXG4gIC0tbWFpbl9jb2xvcjogIzI2NDY1MztcXG4gIC0tc2Vjb25kYXJ5X2NvbG9yOiAjZTljNDZhO1xcbiAgLS10ZXJ0aWFyeV9jb2xvcjogI2U3NmY1MTtcXG4gIC0tZm91cnRoX2NvbG9yOiAjMmE5ZDhmO1xcbiAgLS1maWZ0aF9jb2xvcjogI2ZlZmFlMDtcXG59XFxuXFxuI21haW5fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMTB2aDtcXG4gIGNvbG9yOiB2YXIoLS1maWZ0aF9jb2xvcik7XFxuICBnYXA6IHZhcigtLXBhZGRpbmdfbGFyZ2UpO1xcbn1cXG5cXG4jY3VycmVudF93ZWF0aGVyX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jbGVmdF9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNjdXJyZW50X3dlYXRoZXIge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4jbG9jYXRpb24ge1xcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xcbn1cXG5cXG4jZGF0ZSB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbiNjdXJyZW50X3RlbXAge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4jdG9nZ2xlX21lYXN1cmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBwYWRkaW5nOiAzcHg7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuI3RvZ2dsZV9tZWFzdXJlOmhvdmVyIHtcXG4gIGJvcmRlcjogc29saWQgMXB4IHZhciBpbmhlcml0O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4jbmV3X2xvY2F0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLWZpZnRoX2NvbG9yKTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4jc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tZmlmdGhfY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbiNzdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlmdGhfY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLW1haW5fY29sb3IpO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1maWZ0aF9jb2xvcik7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbiNyaWdodF9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4jZm9yZWNhc3RfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiB2YXIoLS1wYWRkaW5nX3N0YW5kYXJkKTtcXG59XFxuXFxuI2RhaWx5IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuI2RhaWx5X2NhcmRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG4gIGdhcDogdmFyKC0tcGFkZGluZ19zdGFuZGFyZCk7XFxufVxcblxcbi5jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogdmFyKC0tcGFkZGluZ19zdGFuZGFyZCk7XFxuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nX3N0YW5kYXJkKTtcXG4gIGJvcmRlcjogdmFyKC0tZmlmdGhfY29sb3IpIHNvbGlkIDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweDtcXG59XFxuXFxuLmNvbmRpdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUdGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFHRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLDRCQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFJRjs7QUFEQTtFQUNFLGtCQUFBO0FBSUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLS1wYWRkaW5nX3N0YW5kYXJkOiAyMHB4O1xcbiAgLS1wYWRkaW5nX2xhcmdlOiA0MHB4O1xcbiAgLS1tYWluX2NvbG9yOiAjMjY0NjUzO1xcbiAgLS1zZWNvbmRhcnlfY29sb3I6ICNlOWM0NmE7XFxuICAtLXRlcnRpYXJ5X2NvbG9yOiAjZTc2ZjUxO1xcbiAgLS1mb3VydGhfY29sb3I6ICMyYTlkOGY7XFxuICAtLWZpZnRoX2NvbG9yOiAjZmVmYWUwO1xcbn1cXG5cXG4jbWFpbl9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxMHZoO1xcbiAgY29sb3I6IHZhcigtLWZpZnRoX2NvbG9yKTtcXG4gIGdhcDogdmFyKC0tcGFkZGluZ19sYXJnZSk7XFxufVxcblxcbiNjdXJyZW50X3dlYXRoZXJfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNsZWZ0X2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI2N1cnJlbnRfd2VhdGhlciB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbiNsb2NhdGlvbiB7XFxuICBmb250LXNpemU6IDEuNzVyZW07XFxufVxcblxcbiNkYXRlIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuI2N1cnJlbnRfdGVtcCB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbiN0b2dnbGVfbWVhc3VyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4jdG9nZ2xlX21lYXN1cmU6aG92ZXIge1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyIGluaGVyaXQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbiNuZXdfbG9jYXRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBwYWRkaW5nOiAzcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tZmlmdGhfY29sb3IpO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbiNzdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1maWZ0aF9jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBwYWRkaW5nOiA1cHg7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuI3N1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWZ0aF9jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbWFpbl9jb2xvcik7XFxufVxcbjo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWZpZnRoX2NvbG9yKTtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuI3JpZ2h0X2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbiNmb3JlY2FzdF9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IHZhcigtLXBhZGRpbmdfc3RhbmRhcmQpO1xcbn1cXG5cXG4jZGFpbHkge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4jZGFpbHlfY2FyZHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcbiAgZ2FwOiB2YXIoLS1wYWRkaW5nX3N0YW5kYXJkKTtcXG59XFxuXFxuLmNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiB2YXIoLS1wYWRkaW5nX3N0YW5kYXJkKTtcXG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmdfc3RhbmRhcmQpO1xcbiAgYm9yZGVyOiB2YXIoLS1maWZ0aF9jb2xvcikgc29saWQgMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4O1xcbn1cXG5cXG4uY29uZGl0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibGV0IHdlYXRoZXJEYXRhO1xubGV0IGxvY2F0aW9uID0gXCJsb3MgYW5nZWxlc1wiO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YSgpIHtcbiAgbGV0IGZldGNoVVJMID1cbiAgICBcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ODcyNWZhZmNhNjgyNDgyZDk2NDEwMDEwNTIzMzAwNSZxPVwiICtcbiAgICBsb2NhdGlvbiArXG4gICAgXCImZGF5cz03JmFxaT1ubyZhbGVydHM9bm9cIjtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGZldGNoVVJMKTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gIHdlYXRoZXJEYXRhID0gcmVzdWx0O1xuICByZXR1cm4gd2VhdGhlckRhdGE7XG59XG5cbmZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuICByZXR1cm4gbG9jYXRpb247XG59XG5cbmZ1bmN0aW9uIHNldExvY2F0aW9uKHZhcmlhYmxlKSB7XG4gIGxvY2F0aW9uID0gdmFyaWFibGU7XG59XG5cbmZ1bmN0aW9uIGdldE5ld0xvY2F0aW9uRGF0YSh2YXJpYWJsZSkge1xuICBzZXRMb2NhdGlvbih2YXJpYWJsZSk7XG4gIGdldFdlYXRoZXJEYXRhKHZhcmlhYmxlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRXZWF0aGVyRGF0YSxcbiAgZ2V0TG9jYXRpb24sXG4gIHNldExvY2F0aW9uLFxuICBnZXROZXdMb2NhdGlvbkRhdGEsXG59O1xuIiwiY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5fY29udGFpbmVyXCIpO1xuY29uc3QgY3VycmVudFdlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnRfd2VhdGhlclwiKTtcbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblwiKTtcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIik7XG5jb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudF90ZW1wXCIpO1xuY29uc3QgdG9nZ2xlTWVhc3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlX21lYXN1cmVcIik7XG5cbmNvbnN0IGZlZWxzTGlrZVRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZlZWxzX2xpa2VcIik7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHVtaWRpdHlcIik7XG5jb25zdCB3aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kXCIpO1xuXG5sZXQgY3VycmVudE1lYXN1cmVtZW50ID0gXCJmXCI7XG5sZXQgZGF0YTtcblxuZnVuY3Rpb24gc2V0TG9jYXRpb25DdXJyZW50V2VhdGhlcihkYXRhKSB7XG4gIGN1cnJlbnRXZWF0aGVyLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgbG9jYXRpb24uaW5uZXJUZXh0ID0gZGF0YS5sb2NhdGlvbi5uYW1lICsgXCIsIFwiICsgZGF0YS5sb2NhdGlvbi5jb3VudHJ5O1xuICBkYXRlLmlubmVyVGV4dCA9IGdldE5ld0RhdGVTdHJpbmcoZGF0YSk7XG4gIGN1cnJlbnRUZW1wLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC50ZW1wX2YgKyBcIiDCsEZcIjtcbiAgZmVlbHNMaWtlVGVtcC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YgKyBcIiDCsEZcIjtcbiAgaHVtaWRpdHkuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50Lmh1bWlkaXR5ICsgXCIlXCI7XG4gIHdpbmQuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LndpbmRfbXBoICsgXCIgbXBoXCI7XG59XG5cbmZ1bmN0aW9uIGdldE5ld0RhdGVTdHJpbmcoZGF0YSkge1xuICBsZXQgY3VycmVudFRpbWUgPSBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZTtcbiAgbGV0IG5ld0RhdGUgPSBuZXcgRGF0ZShjdXJyZW50VGltZSk7XG4gIGxldCBuZXdEYXRlU3RyaW5nID0gbmV3RGF0ZS50b0RhdGVTdHJpbmcoKTtcblxuICByZXR1cm4gbmV3RGF0ZVN0cmluZztcbn1cblxuZnVuY3Rpb24gc2V0TG9jYXRpb25Gb3JlY2FzdChkYXRhKSB7XG4gIGxldCBmb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yZWNhc3RfY29udGFpbmVyXCIpO1xuICBsZXQgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFpbHlfY2FyZHNcIik7XG4gIGNhcmRDb250YWluZXIucmVtb3ZlKCk7XG4gIGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGFpbHlfY2FyZHNcIik7XG4gIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRDb250YWluZXIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGxldCBjb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgbGV0IGF2Z1RlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbGV0IGF2Z1dpbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgbGV0IGRheU9mV2VlayA9IGNvbnZlcnREYXlPZldlZWsoZGF0YSwgW2ldKTtcblxuICAgIGNhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkYXlcIiArIFtpXSArIFwiX2NhcmRcIik7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBkYXkuY2xhc3NMaXN0LmFkZChcImRheVwiKTtcbiAgICBkYXkuaW5uZXJUZXh0ID0gZGF5T2ZXZWVrO1xuICAgIGNvbmRpdGlvbi5jbGFzc0xpc3QuYWRkKFwiY29uZGl0aW9uXCIpO1xuICAgIGNvbmRpdGlvbi5pbm5lclRleHQgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5jb25kaXRpb24udGV4dDtcbiAgICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJkYXRlXCIpO1xuICAgIGRhdGUuaW5uZXJUZXh0ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXRlO1xuICAgIGF2Z1RlbXAuY2xhc3NMaXN0LmFkZChcImF2Z190ZW1wXCIpO1xuICAgIGF2Z1RlbXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhdmdUZW1wX1wiICsgW2ldKTtcbiAgICBhdmdUZW1wLmlubmVyVGV4dCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmF2Z3RlbXBfZiArIFwiIMKwRlwiO1xuICAgIGF2Z1dpbmQuY2xhc3NMaXN0LmFkZChcImF2Z193aW5kXCIpO1xuICAgIGF2Z1dpbmQuaW5uZXJUZXh0ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4d2luZF9tcGggKyBcIiBtcGhcIjtcbiAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGF5KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNvbmRpdGlvbik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChhdmdUZW1wKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGF2Z1dpbmQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnREYXlPZldlZWsoZGF0YSwgaSkge1xuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF0ZSk7XG4gIGxldCBkYXlOdW1iZXIgPSBkYXRlLmdldERheSgpO1xuXG4gIGlmIChkYXlOdW1iZXIgPT09IDApIHtcbiAgICByZXR1cm4gXCJTdW5kYXlcIjtcbiAgfSBlbHNlIGlmIChkYXlOdW1iZXIgPT09IDEpIHtcbiAgICByZXR1cm4gXCJNb25kYXlcIjtcbiAgfSBlbHNlIGlmIChkYXlOdW1iZXIgPT09IDIpIHtcbiAgICByZXR1cm4gXCJUdWVzZGF5XCI7XG4gIH0gZWxzZSBpZiAoZGF5TnVtYmVyID09PSAzKSB7XG4gICAgcmV0dXJuIFwiV2VkbmVzZGF5XCI7XG4gIH0gZWxzZSBpZiAoZGF5TnVtYmVyID09PSA0KSB7XG4gICAgcmV0dXJuIFwiVGh1cnNkYXlcIjtcbiAgfSBlbHNlIGlmIChkYXlOdW1iZXIgPT09IDUpIHtcbiAgICByZXR1cm4gXCJGcmlkYXlcIjtcbiAgfSBlbHNlIGlmIChkYXlOdW1iZXIgPT09IDYpIHtcbiAgICByZXR1cm4gXCJTYXR1cmRheVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU1lYXN1cmVtZW50KCkge1xuICBpZiAoY3VycmVudE1lYXN1cmVtZW50ID09PSBcImZcIikge1xuICAgIGN1cnJlbnRNZWFzdXJlbWVudCA9IFwiY1wiO1xuICAgIGN1cnJlbnRUZW1wLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC50ZW1wX2MgKyBcIiDCsENcIjtcbiAgICBmZWVsc0xpa2VUZW1wLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyArIFwiIMKwQ1wiO1xuICAgIHRvZ2dsZU1lYXN1cmUuaW5uZXJUZXh0ID0gXCJEaXNwbGF5IMKwRlwiO1xuICAgIGNoYW5nZUZvcmVjYXN0TWVhc3VyZW1lbnQoXCJmXCIpO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRNZWFzdXJlbWVudCA9PT0gXCJjXCIpIHtcbiAgICBjdXJyZW50TWVhc3VyZW1lbnQgPSBcImZcIjtcbiAgICBjdXJyZW50VGVtcC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQudGVtcF9mICsgXCIgwrBGXCI7XG4gICAgZmVlbHNMaWtlVGVtcC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YgKyBcIiDCsEZcIjtcbiAgICB0b2dnbGVNZWFzdXJlLmlubmVyVGV4dCA9IFwiRGlzcGxheSDCsENcIjtcbiAgICBjaGFuZ2VGb3JlY2FzdE1lYXN1cmVtZW50KFwiY1wiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VGb3JlY2FzdE1lYXN1cmVtZW50KHZhcmlhYmxlKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgbGV0IGF2Z1RlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF2Z1RlbXBfXCIgKyBbaV0pO1xuICAgIGlmICh2YXJpYWJsZSA9PT0gXCJmXCIpIHtcbiAgICAgIGF2Z1RlbXAuaW5uZXJUZXh0ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuYXZndGVtcF9jICsgXCIgwrBDXCI7XG4gICAgfSBlbHNlIGlmICh2YXJpYWJsZSA9PT0gXCJjXCIpIHtcbiAgICAgIGF2Z1RlbXAuaW5uZXJUZXh0ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuYXZndGVtcF9mICsgXCIgwrBGXCI7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldERhdGEodmFyaWFibGUpIHtcbiAgZGF0YSA9IHZhcmlhYmxlO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudEhvdXIoZGF0YSkge1xuICBsZXQgZGF0YURhdGUgPSBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZTtcbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZShkYXRhRGF0ZSk7XG4gIGxldCBjdXJyZW50SG91ciA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgcmV0dXJuIGN1cnJlbnRIb3VyO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VDb2xvcnMoZGF0YSkge1xuICBsZXQgY3VycmVudEhvdXIgPSBnZXRDdXJyZW50SG91cihkYXRhKTtcbiAgaWYgKGN1cnJlbnRIb3VyID4gNiAmJiBjdXJyZW50SG91ciA8PSAxMSkge1xuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJsaW5lYXItZ3JhZGllbnQoI2U5YzQ2YSwgIzI2NDY1MylcIjtcbiAgICBtYWluQ29udGFpbmVyLnN0eWxlLmNvbG9yID0gXCIjMjY0NjUzXCI7XG4gIH0gZWxzZSBpZiAoY3VycmVudEhvdXIgPiAxMSAmJiBjdXJyZW50SG91ciA8PSAxNykge1xuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJsaW5lYXItZ3JhZGllbnQoI2U5YzQ2YSwgI2U3NmY1MSlcIjtcbiAgICBtYWluQ29udGFpbmVyLnN0eWxlLmNvbG9yID0gXCIjMjY0NjUzXCI7XG4gIH0gZWxzZSBpZiAoY3VycmVudEhvdXIgPiAxNyAmJiBjdXJyZW50SG91ciA8PSAyMCkge1xuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJsaW5lYXItZ3JhZGllbnQoIzJhOWQ4ZiwgIzI2NDY1MylcIjtcbiAgICBtYWluQ29udGFpbmVyLnN0eWxlLmNvbG9yID0gXCIjZmVmYWUwXCI7XG4gIH0gZWxzZSB7XG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcIlwiO1xuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibGFja1wiO1xuICAgIG1haW5Db250YWluZXIuc3R5bGUuY29sb3IgPSBcIiNmZWZhZTBcIjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNoYW5nZUNvbG9ycyxcbiAgc2V0TG9jYXRpb25DdXJyZW50V2VhdGhlcixcbiAgY2hhbmdlTWVhc3VyZW1lbnQsXG4gIHNldERhdGEsXG4gIHNldExvY2F0aW9uRm9yZWNhc3QsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgZGF0YUZ1bmN0aW9ucyBmcm9tIFwiLi9kYXRhSGFuZGxlci5qc1wiO1xuaW1wb3J0IGRpc3BsYXlGdW5jdGlvbnMgZnJvbSBcIi4vZGlzcGxheUhhbmRsZXIuanNcIjtcbmxldCBkYXRhO1xuXG5hc3luYyBmdW5jdGlvbiB1c2VEYXRhKCkge1xuICBkYXRhID0gYXdhaXQgZGF0YUZ1bmN0aW9ucy5nZXRXZWF0aGVyRGF0YSgpO1xuICBkaXNwbGF5RnVuY3Rpb25zLmNoYW5nZUNvbG9ycyhkYXRhKTtcbiAgZGlzcGxheUZ1bmN0aW9ucy5zZXRMb2NhdGlvbkN1cnJlbnRXZWF0aGVyKGRhdGEpO1xuICBkaXNwbGF5RnVuY3Rpb25zLnNldExvY2F0aW9uRm9yZWNhc3QoZGF0YSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU1lYXN1cmVtZW50RXZlbnRMaXN0ZW5lcigpIHtcbiAgY29uc3QgdG9nZ2xlTWVhc3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlX21lYXN1cmVcIik7XG4gIHRvZ2dsZU1lYXN1cmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkaXNwbGF5RnVuY3Rpb25zLnNldERhdGEoZGF0YSk7XG4gICAgZGlzcGxheUZ1bmN0aW9ucy5jaGFuZ2VNZWFzdXJlbWVudCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlTG9jYXRpb25BZGRFdmVudExpc3RlbmVyKCkge1xuICBjb25zdCBuZXdMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3X2xvY2F0aW9uXCIpO1xuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKTtcblxuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRhdGFGdW5jdGlvbnMuc2V0TG9jYXRpb24obmV3TG9jYXRpb24udmFsdWUpO1xuICAgIHVzZURhdGEoKTtcbiAgICBuZXdMb2NhdGlvbi52YWx1ZSA9IFwiXCI7XG4gIH0pO1xufVxuXG51c2VEYXRhKCk7XG5jaGFuZ2VMb2NhdGlvbkFkZEV2ZW50TGlzdGVuZXIoKTtcbmNoYW5nZU1lYXN1cmVtZW50RXZlbnRMaXN0ZW5lcigpO1xuXG4vLyB3b3JrIG9uIGRhdGUgbW9kaWZpY2FpdG9uXG4vLyB3b3JrIG9uIGRheSBxdWVyeVxuLy8gd29yayBvbiBjaGFuZ2luZyBGIHRvIEMgaW4gZm9yZWNhc3RcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==