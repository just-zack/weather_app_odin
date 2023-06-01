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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  --padding_standard: 20px;\n  --padding_large: 40px;\n  --main_color: #264653;\n  --secondary_color: #e9c46a;\n  --tertiary_color: #e76f51;\n  --fourth_color: #2a9d8f;\n  --fifth_color: #fefae0;\n}\n\nbody {\n  background-image: linear-gradient(var(--main_color), var(--fourth_color));\n}\n\n#main_container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 85vh;\n  padding: 10vh;\n  color: var(--fifth_color);\n  gap: var(--padding_large);\n}\n\n#current_weather_container {\n  display: flex;\n  justify-content: space-between;\n}\n\n#left_container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n#current_weather {\n  font-size: 3rem;\n}\n\n#location {\n  font-size: 1.75rem;\n}\n\n#date {\n  font-size: 1.25rem;\n}\n\n#current_temp {\n  font-size: 3rem;\n}\n\n#toggle_measure {\n  background-color: transparent;\n  border: none;\n  color: var(--fifth_color);\n  align-self: flex-start;\n  font-size: 0.8rem;\n  padding: 3px;\n}\n\n#toggle_measure:hover {\n  border: solid 1px var(--fifth_color);\n  border-radius: 3px;\n}\n\n#new_location {\n  background-color: transparent;\n  border: none;\n  font-size: 1.25rem;\n  padding: 3px;\n  margin-right: 10px;\n  border-bottom: solid 2px var(--fifth_color);\n  color: var(--fifth_color);\n}\n\n#submit {\n  background-color: transparent;\n  border: solid 2px var(--fifth_color);\n  border-radius: 5px;\n  font-size: 1.25rem;\n  padding: 5px;\n  color: var(--fifth_color);\n}\n\n#submit:hover {\n  background-color: var(--fifth_color);\n  color: var(--main_color);\n}\n\n::placeholder {\n  color: var(--fifth_color);\n  opacity: 0.5;\n}\n\n#right_container {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  text-align: end;\n  font-size: 1.4rem;\n}\n\n#forecast_container {\n  display: flex;\n  flex-direction: column;\n  gap: var(--padding_standard);\n}\n\n#daily {\n  font-size: 2rem;\n}\n\n#daily_cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: var(--padding_standard);\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--padding_standard);\n  padding: var(--padding_standard);\n  border: var(--fifth_color) solid 2px;\n  border-radius: 20px;\n  box-shadow: 1px 1px 5px;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;EACA,wBAAA;EACA,qBAAA;EACA,qBAAA;EACA,0BAAA;EACA,yBAAA;EACA,uBAAA;EACA,sBAAA;AACF;;AAEA;EACE,yEAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,YAAA;EACA,aAAA;EACA,yBAAA;EACA,yBAAA;AACF;;AAEA;EACE,aAAA;EACA,8BAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACE,kBAAA;AACF;;AAEA;EACE,kBAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACE,6BAAA;EACA,YAAA;EACA,yBAAA;EACA,sBAAA;EACA,iBAAA;EACA,YAAA;AACF;;AAEA;EACE,oCAAA;EACA,kBAAA;AACF;;AAEA;EACE,6BAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,2CAAA;EACA,yBAAA;AACF;;AAEA;EACE,6BAAA;EACA,oCAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,yBAAA;AACF;;AAEA;EACE,oCAAA;EACA,wBAAA;AACF;;AACA;EACE,yBAAA;EACA,YAAA;AAEF;;AAAA;EACE,aAAA;EACA,sBAAA;EACA,QAAA;EACA,eAAA;EACA,iBAAA;AAGF;;AAAA;EACE,aAAA;EACA,sBAAA;EACA,4BAAA;AAGF;;AAAA;EACE,eAAA;AAGF;;AADA;EACE,aAAA;EACA,2DAAA;EACA,4BAAA;AAIF;;AADA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,4BAAA;EACA,gCAAA;EACA,oCAAA;EACA,mBAAA;EACA,uBAAA;AAIF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  --padding_standard: 20px;\n  --padding_large: 40px;\n  --main_color: #264653;\n  --secondary_color: #e9c46a;\n  --tertiary_color: #e76f51;\n  --fourth_color: #2a9d8f;\n  --fifth_color: #fefae0;\n}\n\nbody {\n  background-image: linear-gradient(var(--main_color), var(--fourth_color));\n}\n\n#main_container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 85vh;\n  padding: 10vh;\n  color: var(--fifth_color);\n  gap: var(--padding_large);\n}\n\n#current_weather_container {\n  display: flex;\n  justify-content: space-between;\n}\n\n#left_container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n#current_weather {\n  font-size: 3rem;\n}\n\n#location {\n  font-size: 1.75rem;\n}\n\n#date {\n  font-size: 1.25rem;\n}\n\n#current_temp {\n  font-size: 3rem;\n}\n\n#toggle_measure {\n  background-color: transparent;\n  border: none;\n  color: var(--fifth_color);\n  align-self: flex-start;\n  font-size: 0.8rem;\n  padding: 3px;\n}\n\n#toggle_measure:hover {\n  border: solid 1px var(--fifth_color);\n  border-radius: 3px;\n}\n\n#new_location {\n  background-color: transparent;\n  border: none;\n  font-size: 1.25rem;\n  padding: 3px;\n  margin-right: 10px;\n  border-bottom: solid 2px var(--fifth_color);\n  color: var(--fifth_color);\n}\n\n#submit {\n  background-color: transparent;\n  border: solid 2px var(--fifth_color);\n  border-radius: 5px;\n  font-size: 1.25rem;\n  padding: 5px;\n  color: var(--fifth_color);\n}\n\n#submit:hover {\n  background-color: var(--fifth_color);\n  color: var(--main_color);\n}\n::placeholder {\n  color: var(--fifth_color);\n  opacity: 0.5;\n}\n#right_container {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  text-align: end;\n  font-size: 1.4rem;\n}\n\n#forecast_container {\n  display: flex;\n  flex-direction: column;\n  gap: var(--padding_standard);\n}\n\n#daily {\n  font-size: 2rem;\n}\n#daily_cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: var(--padding_standard);\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--padding_standard);\n  padding: var(--padding_standard);\n  border: var(--fifth_color) solid 2px;\n  border-radius: 20px;\n  box-shadow: 1px 1px 5px;\n}\n"],"sourceRoot":""}]);
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
  console.log(location);
  console.log(fetchURL);
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

function getData() {
  console.log(weatherData);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getWeatherData,
  getLocation,
  setLocation,
  getData,
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
const currentWeather = document.getElementById("current_weather");
const location = document.getElementById("location");
const date = document.getElementById("date");
const currentTemp = document.getElementById("current_temp");
const toggleMeasure = document.getElementById("toggle_measure");
const newLocation = document.getElementById("new_location");
const submit = document.getElementById("submit");

const feelsLikeTemp = document.getElementById("feels_like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

let currentMeasurement = "f";
let data;

function setLocationCurrentWeather(data) {
  console.log(data);
  console.log(data.current.condition.text);
  currentWeather.innerText = data.current.condition.text;
  location.innerText = data.location.name + ", " + data.location.country;
  date.innerText = data.location.localtime;
  currentTemp.innerText = data.current.temp_f + " °F";
  feelsLikeTemp.innerText = data.current.feelslike_f + " °F";
  humidity.innerText = data.current.humidity + "%";
  wind.innerText = data.current.wind_mph + "mph";
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
    let date = document.createElement("h3");
    let avgTemp = document.createElement("h2");
    let avgWind = document.createElement("h3");
    let dayOfWeek = convertDayOfWeek(data, [i]);

    card.setAttribute("id", "day" + [i] + "_card");
    card.classList.add("card");
    day.classList.add("day");
    day.innerText = dayOfWeek;
    date.classList.add("date");
    date.innerText = data.forecast.forecastday[i].date;
    avgTemp.classList.add("avg_temp");
    avgTemp.setAttribute("id", "avgTemp_" + [i]);
    avgTemp.innerText = data.forecast.forecastday[i].day.avgtemp_f + " °F";
    avgWind.classList.add("avg_wind");
    avgWind.innerText = data.forecast.forecastday[i].day.maxwind_mph + " mph";
    cardContainer.appendChild(card);
    card.appendChild(day);
    card.appendChild(date);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
  console.log(data);
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
    console.log(newLocation.value);
    event.preventDefault();
    _dataHandler_js__WEBPACK_IMPORTED_MODULE_1__["default"].setLocation(newLocation.value);
    useData();
  });
}

useData();
changeLocationAddEventListener();
changeMeasurementEventListener();
console.log(data);

// work on date modificaiton
// work on day query
// work on changing F to C in forecast

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNpQjtBQUNNO0FBQ25EOztBQUVBO0FBQ0EsZUFBZSxzRUFBNEI7QUFDM0M7QUFDQSxFQUFFLG9GQUEwQztBQUM1QyxFQUFFLDhFQUFvQztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUF3QjtBQUM1QixJQUFJLDRFQUFrQztBQUN0QyxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksbUVBQXlCO0FBQzdCO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW5fdG9kby8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW5fdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/NzljZCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL3NyYy9kYXRhSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9zcmMvZGlzcGxheUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLS1wYWRkaW5nX3N0YW5kYXJkOiAyMHB4O1xcbiAgLS1wYWRkaW5nX2xhcmdlOiA0MHB4O1xcbiAgLS1tYWluX2NvbG9yOiAjMjY0NjUzO1xcbiAgLS1zZWNvbmRhcnlfY29sb3I6ICNlOWM0NmE7XFxuICAtLXRlcnRpYXJ5X2NvbG9yOiAjZTc2ZjUxO1xcbiAgLS1mb3VydGhfY29sb3I6ICMyYTlkOGY7XFxuICAtLWZpZnRoX2NvbG9yOiAjZmVmYWUwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1tYWluX2NvbG9yKSwgdmFyKC0tZm91cnRoX2NvbG9yKSk7XFxufVxcblxcbiNtYWluX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogODV2aDtcXG4gIHBhZGRpbmc6IDEwdmg7XFxuICBjb2xvcjogdmFyKC0tZmlmdGhfY29sb3IpO1xcbiAgZ2FwOiB2YXIoLS1wYWRkaW5nX2xhcmdlKTtcXG59XFxuXFxuI2N1cnJlbnRfd2VhdGhlcl9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2xlZnRfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jY3VycmVudF93ZWF0aGVyIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuI2xvY2F0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcXG59XFxuXFxuI2RhdGUge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4jY3VycmVudF90ZW1wIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuI3RvZ2dsZV9tZWFzdXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWZpZnRoX2NvbG9yKTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDNweDtcXG59XFxuXFxuI3RvZ2dsZV9tZWFzdXJlOmhvdmVyIHtcXG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWZpZnRoX2NvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuI25ld19sb2NhdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1maWZ0aF9jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZmlmdGhfY29sb3IpO1xcbn1cXG5cXG4jc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tZmlmdGhfY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgY29sb3I6IHZhcigtLWZpZnRoX2NvbG9yKTtcXG59XFxuXFxuI3N1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWZ0aF9jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbWFpbl9jb2xvcik7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWZpZnRoX2NvbG9yKTtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuI3JpZ2h0X2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbiNmb3JlY2FzdF9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IHZhcigtLXBhZGRpbmdfc3RhbmRhcmQpO1xcbn1cXG5cXG4jZGFpbHkge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4jZGFpbHlfY2FyZHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcbiAgZ2FwOiB2YXIoLS1wYWRkaW5nX3N0YW5kYXJkKTtcXG59XFxuXFxuLmNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiB2YXIoLS1wYWRkaW5nX3N0YW5kYXJkKTtcXG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmdfc3RhbmRhcmQpO1xcbiAgYm9yZGVyOiB2YXIoLS1maWZ0aF9jb2xvcikgc29saWQgMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUdGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFHRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLDRCQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFJRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICAtLXBhZGRpbmdfc3RhbmRhcmQ6IDIwcHg7XFxuICAtLXBhZGRpbmdfbGFyZ2U6IDQwcHg7XFxuICAtLW1haW5fY29sb3I6ICMyNjQ2NTM7XFxuICAtLXNlY29uZGFyeV9jb2xvcjogI2U5YzQ2YTtcXG4gIC0tdGVydGlhcnlfY29sb3I6ICNlNzZmNTE7XFxuICAtLWZvdXJ0aF9jb2xvcjogIzJhOWQ4ZjtcXG4gIC0tZmlmdGhfY29sb3I6ICNmZWZhZTA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLW1haW5fY29sb3IpLCB2YXIoLS1mb3VydGhfY29sb3IpKTtcXG59XFxuXFxuI21haW5fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAgcGFkZGluZzogMTB2aDtcXG4gIGNvbG9yOiB2YXIoLS1maWZ0aF9jb2xvcik7XFxuICBnYXA6IHZhcigtLXBhZGRpbmdfbGFyZ2UpO1xcbn1cXG5cXG4jY3VycmVudF93ZWF0aGVyX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jbGVmdF9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNjdXJyZW50X3dlYXRoZXIge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4jbG9jYXRpb24ge1xcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xcbn1cXG5cXG4jZGF0ZSB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbiNjdXJyZW50X3RlbXAge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4jdG9nZ2xlX21lYXN1cmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tZmlmdGhfY29sb3IpO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgcGFkZGluZzogM3B4O1xcbn1cXG5cXG4jdG9nZ2xlX21lYXN1cmU6aG92ZXIge1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tZmlmdGhfY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4jbmV3X2xvY2F0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLWZpZnRoX2NvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1maWZ0aF9jb2xvcik7XFxufVxcblxcbiNzdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1maWZ0aF9jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBwYWRkaW5nOiA1cHg7XFxuICBjb2xvcjogdmFyKC0tZmlmdGhfY29sb3IpO1xcbn1cXG5cXG4jc3VibWl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZnRoX2NvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluX2NvbG9yKTtcXG59XFxuOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tZmlmdGhfY29sb3IpO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG4jcmlnaHRfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuI2ZvcmVjYXN0X2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogdmFyKC0tcGFkZGluZ19zdGFuZGFyZCk7XFxufVxcblxcbiNkYWlseSB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcbiNkYWlseV9jYXJkcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxuICBnYXA6IHZhcigtLXBhZGRpbmdfc3RhbmRhcmQpO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLXBhZGRpbmdfc3RhbmRhcmQpO1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZ19zdGFuZGFyZCk7XFxuICBib3JkZXI6IHZhcigtLWZpZnRoX2NvbG9yKSBzb2xpZCAycHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImxldCB3ZWF0aGVyRGF0YTtcbmxldCBsb2NhdGlvbiA9IFwibG9zIGFuZ2VsZXNcIjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoKSB7XG4gIGxldCBmZXRjaFVSTCA9XG4gICAgXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTg3MjVmYWZjYTY4MjQ4MmQ5NjQxMDAxMDUyMzMwMDUmcT1cIiArXG4gICAgbG9jYXRpb24gK1xuICAgIFwiJmRheXM9NyZhcWk9bm8mYWxlcnRzPW5vXCI7XG4gIGNvbnNvbGUubG9nKGxvY2F0aW9uKTtcbiAgY29uc29sZS5sb2coZmV0Y2hVUkwpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goZmV0Y2hVUkwpO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgd2VhdGhlckRhdGEgPSByZXN1bHQ7XG4gIHJldHVybiB3ZWF0aGVyRGF0YTtcbn1cblxuZnVuY3Rpb24gZ2V0TG9jYXRpb24oKSB7XG4gIHJldHVybiBsb2NhdGlvbjtcbn1cblxuZnVuY3Rpb24gc2V0TG9jYXRpb24odmFyaWFibGUpIHtcbiAgbG9jYXRpb24gPSB2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV3TG9jYXRpb25EYXRhKHZhcmlhYmxlKSB7XG4gIHNldExvY2F0aW9uKHZhcmlhYmxlKTtcbiAgZ2V0V2VhdGhlckRhdGEodmFyaWFibGUpO1xufVxuXG5mdW5jdGlvbiBnZXREYXRhKCkge1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0V2VhdGhlckRhdGEsXG4gIGdldExvY2F0aW9uLFxuICBzZXRMb2NhdGlvbixcbiAgZ2V0RGF0YSxcbiAgZ2V0TmV3TG9jYXRpb25EYXRhLFxufTtcbiIsImNvbnN0IGN1cnJlbnRXZWF0aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50X3dlYXRoZXJcIik7XG5jb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIik7XG5jb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpO1xuY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnRfdGVtcFwiKTtcbmNvbnN0IHRvZ2dsZU1lYXN1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZV9tZWFzdXJlXCIpO1xuY29uc3QgbmV3TG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld19sb2NhdGlvblwiKTtcbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xuXG5jb25zdCBmZWVsc0xpa2VUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVsc19saWtlXCIpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImh1bWlkaXR5XCIpO1xuY29uc3Qgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luZFwiKTtcblxubGV0IGN1cnJlbnRNZWFzdXJlbWVudCA9IFwiZlwiO1xubGV0IGRhdGE7XG5cbmZ1bmN0aW9uIHNldExvY2F0aW9uQ3VycmVudFdlYXRoZXIoZGF0YSkge1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgY29uc29sZS5sb2coZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0KTtcbiAgY3VycmVudFdlYXRoZXIuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICBsb2NhdGlvbi5pbm5lclRleHQgPSBkYXRhLmxvY2F0aW9uLm5hbWUgKyBcIiwgXCIgKyBkYXRhLmxvY2F0aW9uLmNvdW50cnk7XG4gIGRhdGUuaW5uZXJUZXh0ID0gZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWU7XG4gIGN1cnJlbnRUZW1wLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC50ZW1wX2YgKyBcIiDCsEZcIjtcbiAgZmVlbHNMaWtlVGVtcC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YgKyBcIiDCsEZcIjtcbiAgaHVtaWRpdHkuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50Lmh1bWlkaXR5ICsgXCIlXCI7XG4gIHdpbmQuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LndpbmRfbXBoICsgXCJtcGhcIjtcbn1cblxuZnVuY3Rpb24gc2V0TG9jYXRpb25Gb3JlY2FzdChkYXRhKSB7XG4gIGxldCBmb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yZWNhc3RfY29udGFpbmVyXCIpO1xuICBsZXQgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFpbHlfY2FyZHNcIik7XG4gIGNhcmRDb250YWluZXIucmVtb3ZlKCk7XG4gIGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGFpbHlfY2FyZHNcIik7XG4gIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRDb250YWluZXIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGxldCBhdmdUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGxldCBhdmdXaW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGxldCBkYXlPZldlZWsgPSBjb252ZXJ0RGF5T2ZXZWVrKGRhdGEsIFtpXSk7XG5cbiAgICBjYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF5XCIgKyBbaV0gKyBcIl9jYXJkXCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgZGF5LmNsYXNzTGlzdC5hZGQoXCJkYXlcIik7XG4gICAgZGF5LmlubmVyVGV4dCA9IGRheU9mV2VlaztcbiAgICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJkYXRlXCIpO1xuICAgIGRhdGUuaW5uZXJUZXh0ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXRlO1xuICAgIGF2Z1RlbXAuY2xhc3NMaXN0LmFkZChcImF2Z190ZW1wXCIpO1xuICAgIGF2Z1RlbXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhdmdUZW1wX1wiICsgW2ldKTtcbiAgICBhdmdUZW1wLmlubmVyVGV4dCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmF2Z3RlbXBfZiArIFwiIMKwRlwiO1xuICAgIGF2Z1dpbmQuY2xhc3NMaXN0LmFkZChcImF2Z193aW5kXCIpO1xuICAgIGF2Z1dpbmQuaW5uZXJUZXh0ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4d2luZF9tcGggKyBcIiBtcGhcIjtcbiAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGF5KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoYXZnVGVtcCk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChhdmdXaW5kKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0RGF5T2ZXZWVrKGRhdGEsIGkpIHtcbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZShkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRhdGUpO1xuICBsZXQgZGF5TnVtYmVyID0gZGF0ZS5nZXREYXkoKTtcblxuICBpZiAoZGF5TnVtYmVyID09PSAwKSB7XG4gICAgcmV0dXJuIFwiU3VuZGF5XCI7XG4gIH0gZWxzZSBpZiAoZGF5TnVtYmVyID09PSAxKSB7XG4gICAgcmV0dXJuIFwiTW9uZGF5XCI7XG4gIH0gZWxzZSBpZiAoZGF5TnVtYmVyID09PSAyKSB7XG4gICAgcmV0dXJuIFwiVHVlc2RheVwiO1xuICB9IGVsc2UgaWYgKGRheU51bWJlciA9PT0gMykge1xuICAgIHJldHVybiBcIldlZG5lc2RheVwiO1xuICB9IGVsc2UgaWYgKGRheU51bWJlciA9PT0gNCkge1xuICAgIHJldHVybiBcIlRodXJzZGF5XCI7XG4gIH0gZWxzZSBpZiAoZGF5TnVtYmVyID09PSA1KSB7XG4gICAgcmV0dXJuIFwiRnJpZGF5XCI7XG4gIH0gZWxzZSBpZiAoZGF5TnVtYmVyID09PSA2KSB7XG4gICAgcmV0dXJuIFwiU2F0dXJkYXlcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VNZWFzdXJlbWVudCgpIHtcbiAgaWYgKGN1cnJlbnRNZWFzdXJlbWVudCA9PT0gXCJmXCIpIHtcbiAgICBjdXJyZW50TWVhc3VyZW1lbnQgPSBcImNcIjtcbiAgICBjdXJyZW50VGVtcC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQudGVtcF9jICsgXCIgwrBDXCI7XG4gICAgZmVlbHNMaWtlVGVtcC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MgKyBcIiDCsENcIjtcbiAgICB0b2dnbGVNZWFzdXJlLmlubmVyVGV4dCA9IFwiRGlzcGxheSDCsEZcIjtcbiAgICBjaGFuZ2VGb3JlY2FzdE1lYXN1cmVtZW50KFwiZlwiKTtcbiAgfSBlbHNlIGlmIChjdXJyZW50TWVhc3VyZW1lbnQgPT09IFwiY1wiKSB7XG4gICAgY3VycmVudE1lYXN1cmVtZW50ID0gXCJmXCI7XG4gICAgY3VycmVudFRlbXAuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LnRlbXBfZiArIFwiIMKwRlwiO1xuICAgIGZlZWxzTGlrZVRlbXAuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mICsgXCIgwrBGXCI7XG4gICAgdG9nZ2xlTWVhc3VyZS5pbm5lclRleHQgPSBcIkRpc3BsYXkgwrBDXCI7XG4gICAgY2hhbmdlRm9yZWNhc3RNZWFzdXJlbWVudChcImNcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlRm9yZWNhc3RNZWFzdXJlbWVudCh2YXJpYWJsZSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgIGxldCBhdmdUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdmdUZW1wX1wiICsgW2ldKTtcbiAgICBpZiAodmFyaWFibGUgPT09IFwiZlwiKSB7XG4gICAgICBhdmdUZW1wLmlubmVyVGV4dCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmF2Z3RlbXBfYyArIFwiIMKwQ1wiO1xuICAgIH0gZWxzZSBpZiAodmFyaWFibGUgPT09IFwiY1wiKSB7XG4gICAgICBhdmdUZW1wLmlubmVyVGV4dCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmF2Z3RlbXBfZiArIFwiIMKwRlwiO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXREYXRhKHZhcmlhYmxlKSB7XG4gIGRhdGEgPSB2YXJpYWJsZTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0TG9jYXRpb25DdXJyZW50V2VhdGhlcixcbiAgY2hhbmdlTWVhc3VyZW1lbnQsXG4gIHNldERhdGEsXG4gIHNldExvY2F0aW9uRm9yZWNhc3QsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgZGF0YUZ1bmN0aW9ucyBmcm9tIFwiLi9kYXRhSGFuZGxlci5qc1wiO1xuaW1wb3J0IGRpc3BsYXlGdW5jdGlvbnMgZnJvbSBcIi4vZGlzcGxheUhhbmRsZXIuanNcIjtcbmxldCBkYXRhO1xuXG5hc3luYyBmdW5jdGlvbiB1c2VEYXRhKCkge1xuICBkYXRhID0gYXdhaXQgZGF0YUZ1bmN0aW9ucy5nZXRXZWF0aGVyRGF0YSgpO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgZGlzcGxheUZ1bmN0aW9ucy5zZXRMb2NhdGlvbkN1cnJlbnRXZWF0aGVyKGRhdGEpO1xuICBkaXNwbGF5RnVuY3Rpb25zLnNldExvY2F0aW9uRm9yZWNhc3QoZGF0YSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU1lYXN1cmVtZW50RXZlbnRMaXN0ZW5lcigpIHtcbiAgY29uc3QgdG9nZ2xlTWVhc3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlX21lYXN1cmVcIik7XG4gIHRvZ2dsZU1lYXN1cmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkaXNwbGF5RnVuY3Rpb25zLnNldERhdGEoZGF0YSk7XG4gICAgZGlzcGxheUZ1bmN0aW9ucy5jaGFuZ2VNZWFzdXJlbWVudCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlTG9jYXRpb25BZGRFdmVudExpc3RlbmVyKCkge1xuICBjb25zdCBuZXdMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3X2xvY2F0aW9uXCIpO1xuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKTtcblxuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhuZXdMb2NhdGlvbi52YWx1ZSk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkYXRhRnVuY3Rpb25zLnNldExvY2F0aW9uKG5ld0xvY2F0aW9uLnZhbHVlKTtcbiAgICB1c2VEYXRhKCk7XG4gIH0pO1xufVxuXG51c2VEYXRhKCk7XG5jaGFuZ2VMb2NhdGlvbkFkZEV2ZW50TGlzdGVuZXIoKTtcbmNoYW5nZU1lYXN1cmVtZW50RXZlbnRMaXN0ZW5lcigpO1xuY29uc29sZS5sb2coZGF0YSk7XG5cbi8vIHdvcmsgb24gZGF0ZSBtb2RpZmljYWl0b25cbi8vIHdvcmsgb24gZGF5IHF1ZXJ5XG4vLyB3b3JrIG9uIGNoYW5naW5nIEYgdG8gQyBpbiBmb3JlY2FzdFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9