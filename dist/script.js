/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../stage\u0000#1/project/gers23-local/virtual_keyboard/src/js/HTML.js":
/*!*********************************************************************************!*\
  !*** ../../../../stage #1/project/gers23-local/virtual_keyboard/src/js/HTML.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTML": () => (/* binding */ HTML)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var HTML = /*#__PURE__*/function () {
  function HTML() {
    _classCallCheck(this, HTML);
  }

  _createClass(HTML, [{
    key: "generateHTMLpage",
    value: function generateHTMLpage() {
      var preTemplate = '';
      var afterTemplate = '';
      var div = document.createElement('div');
      div.className = 'wrapper';
      var divKeyboard = document.createElement('div');
      divKeyboard.className = 'keyboard';
      preTemplate += "<h1>RSS Virtual Keyboard</h1>";
      preTemplate += "<textarea class = 'textarea' cols = '85' rows = '10'></textarea>";
      afterTemplate += "<p>The keyboard is created in the operating system Windows.</p>";
      afterTemplate += "<p>Language switching is carried out by a key combination: Ctrl + Alt</p>";
      div.innerHTML = preTemplate;
      div.append(divKeyboard);
      div.insertAdjacentHTML('beforeend', afterTemplate);
      return div;
    }
  }]);

  return HTML;
}();

/***/ }),

/***/ "../../../../stage\u0000#1/project/gers23-local/virtual_keyboard/src/js/Key.js":
/*!********************************************************************************!*\
  !*** ../../../../stage #1/project/gers23-local/virtual_keyboard/src/js/Key.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Key": () => (/* binding */ Key)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Key = /*#__PURE__*/function () {
  function Key(data, key) {
    _classCallCheck(this, Key);

    this.keysRus = data.rus[key];
    this.keysEng = data.eng[key];
  }

  _createClass(Key, [{
    key: "generateKey",
    value: function generateKey() {
      var template = '';
      var keyboardKey = document.createElement('div');
      keyboardKey.className = "keyboard__key key ".concat(this.keysEng["name"]);
      template += "<span class = \"rus\">";
      template += "<span class = \"caseDown\">".concat(this.keysRus["caseDown"], "</span>");
      template += "<span class = \"caseUp\">".concat(this.keysRus["caseUp"], "</span>");
      template += "<span class = \"caps\">".concat(this.keysRus["caps"], "</span>");
      template += "<span class = \"shiftCaps\">".concat(this.keysRus["shiftCaps"], "</span>");
      template += "</span>";
      template += "<span class = \"eng\">";
      template += "<span class = \"caseDown\">".concat(this.keysEng["caseDown"], "</span>");
      template += "<span class = \"caseUp\">".concat(this.keysEng["caseUp"], "</span>");
      template += "<span class = \"caps\">".concat(this.keysEng["caps"], "</span>");
      template += "<span class = \"shiftCaps\">".concat(this.keysEng["shiftCaps"], "</span>");
      template += "</span>";
      keyboardKey.innerHTML = template;
      return keyboardKey;
    }
  }]);

  return Key;
}();

/***/ }),

/***/ "../../../../stage\u0000#1/project/gers23-local/virtual_keyboard/src/js/KeyboardRow.js":
/*!****************************************************************************************!*\
  !*** ../../../../stage #1/project/gers23-local/virtual_keyboard/src/js/KeyboardRow.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keyboardRow": () => (/* binding */ keyboardRow)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var keyboardRow = /*#__PURE__*/function () {
  function keyboardRow(data) {// this.nameKey = data.eng[key]

    _classCallCheck(this, keyboardRow);
  }

  _createClass(keyboardRow, [{
    key: "generateKeyboard",
    value: function generateKeyboard() {
      var _keyboardRow = document.createElement('div');

      _keyboardRow.className = "keyboard__row";
      return _keyboardRow;
    }
  }]);

  return keyboardRow;
}();

/***/ }),

/***/ "../../../../stage\u0000#1/project/gers23-local/virtual_keyboard/src/keys.json":
/*!********************************************************************************!*\
  !*** ../../../../stage #1/project/gers23-local/virtual_keyboard/src/keys.json ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"rus":{"BackQuote":{"name":"BackQuote","caseDown":"ё","caseUp":"Ё","caps":"Ё","shiftCaps":"ё"},"Digit1":{"name":"Digit1","caseDown":"1","caseUp":"!","caps":"1","shiftCaps":"!"},"Digit2":{"name":"Digit2","caseDown":"2","caseUp":"\\"","caps":"2","shiftCaps":"\\""},"Digit3":{"name":"Digit3","caseDown":"3","caseUp":"№","caps":"3","shiftCaps":"№"},"Digit4":{"name":"Digit4","caseDown":"4","caseUp":";","caps":"4","shiftCaps":";"},"Digit5":{"name":"Digit5","caseDown":"5","caseUp":"%","caps":"5","shiftCaps":"%"},"Digit6":{"name":"Digit6","caseDown":"6","caseUp":":","caps":"6","shiftCaps":":"},"Digit7":{"name":"Digit7","caseDown":"7","caseUp":"?","caps":"7","shiftCaps":"?"},"Digit8":{"name":"Digit8","caseDown":"8","caseUp":"*","caps":"8","shiftCaps":"*"},"Digit9":{"name":"Digit9","caseDown":"9","caseUp":"(","caps":"9","shiftCaps":"("},"Digit0":{"name":"Digit0","caseDown":"0","caseUp":")","caps":"0","shiftCaps":")"},"Minus":{"name":"Minus","caseDown":"-","caseUp":"_","caps":"-","shiftCaps":"_"},"Equals":{"name":"Equals","caseDown":"=","caseUp":"+","caps":"=","shiftCaps":"+"},"Backspace":{"name":"Backspace","caseDown":"Backspace","caseUp":"Backspace","caps":"Backspace","shiftCaps":"Backspace"},"Tab":{"name":"Tab","caseDown":"Tab","caseUp":"Tab","caps":"Tab","shiftCaps":"Tab"},"KeyQ":{"name":"KeyQ","caseDown":"й","caseUp":"Й","caps":"Й","shiftCaps":"й"},"KeyW":{"name":"KeyW","caseDown":"ц","caseUp":"Ц","caps":"Ц","shiftCaps":"ц"},"KeyE":{"name":"KeyE","caseDown":"у","caseUp":"У","caps":"У","shiftCaps":"у"},"KeyR":{"name":"KeyR","caseDown":"к","caseUp":"К","caps":"К","shiftCaps":"к"},"KeyT":{"name":"KeyT","caseDown":"е","caseUp":"Е","caps":"Е","shiftCaps":"е"},"KeyY":{"name":"KeyY","caseDown":"н","caseUp":"Н","caps":"Н","shiftCaps":"н"},"KeyU":{"name":"KeyU","caseDown":"г","caseUp":"Г","caps":"Г","shiftCaps":"г"},"KeyI":{"name":"KeyI","caseDown":"ш","caseUp":"Ш","caps":"Ш","shiftCaps":"ш"},"KeyO":{"name":"KeyO","caseDown":"щ","caseUp":"Щ","caps":"Щ","shiftCaps":"щ"},"KeyP":{"name":"KeyP","caseDown":"з","caseUp":"З","caps":"З","shiftCaps":"з"},"BracketLeft":{"name":"BracketLeft","caseDown":"х","caseUp":"Х","caps":"Х","shiftCaps":"х"},"BracketRight":{"name":"BracketRight","caseDown":"ъ","caseUp":"Ъ","caps":"Ъ","shiftCaps":"ъ"},"BackSlash":{"name":"BackSlash","caseDown":"\\\\","caseUp":"/","caps":"\\\\","shiftCaps":"/"},"Delete":{"name":"Delete","caseDown":"Del","caseUp":"Del","caps":"Del","shiftCaps":"Del"},"CapsLock":{"name":"CapsLock","caseDown":"CapsLock","caseUp":"CapsLock","caps":"CapsLock","shiftCaps":"CapsLock"},"KeyA":{"name":"KeyA","caseDown":"ф","caseUp":"Ф","caps":"Ф","shiftCaps":"ф"},"KeyS":{"name":"KeyS","caseDown":"ы","caseUp":"Ы","caps":"Ы","shiftCaps":"ы"},"KeyD":{"name":"KeyD","caseDown":"в","caseUp":"В","caps":"В","shiftCaps":"в"},"KeyF":{"name":"KeyF","caseDown":"а","caseUp":"А","caps":"А","shiftCaps":"а"},"KeyG":{"name":"KeyG","caseDown":"п","caseUp":"П","caps":"П","shiftCaps":"п"},"KeyH":{"name":"KeyH","caseDown":"р","caseUp":"Р","caps":"Р","shiftCaps":"р"},"KeyJ":{"name":"KeyJ","caseDown":"о","caseUp":"О","caps":"О","shiftCaps":"о"},"KeyK":{"name":"KeyK","caseDown":"л","caseUp":"Л","caps":"Л","shiftCaps":"л"},"KeyL":{"name":"KeyL","caseDown":"д","caseUp":"Д","caps":"Д","shiftCaps":"д"},"Semicolon":{"name":"Semicolon","caseDown":"ж","caseUp":"Ж","caps":"Ж","shiftCaps":"ж"},"Quote":{"name":"Quote","caseDown":"э","caseUp":"Э","caps":"Э","shiftCaps":"э"},"Enter":{"name":"Enter","caseDown":"Enter","caseUp":"Enter","caps":"Enter","shiftCaps":"Enter"},"ShiftLeft":{"name":"ShiftLeft","caseDown":"Shift","caseUp":"Shift","caps":"Shift","shiftCaps":"Shift"},"ShiftRight":{"name":"ShiftRight","caseDown":"Shift","caseUp":"Shift","caps":"Shift","shiftCaps":"Shift"},"KeyZ":{"name":"KeyZ","caseDown":"я","caseUp":"Я","caps":"Я","shiftCaps":"я"},"KeyX":{"name":"KeyX","caseDown":"ч","caseUp":"Ч","caps":"Ч","shiftCaps":"ч"},"KeyC":{"name":"KeyC","caseDown":"с","caseUp":"С","caps":"С","shiftCaps":"с"},"KeyV":{"name":"KeyV","caseDown":"м","caseUp":"М","caps":"М","shiftCaps":"м"},"KeyB":{"name":"KeyB","caseDown":"и","caseUp":"И","caps":"И","shiftCaps":"и"},"KeyN":{"name":"KeyN","caseDown":"т","caseUp":"Т","caps":"Т","shiftCaps":"т"},"KeyM":{"name":"KeyM","caseDown":"ь","caseUp":"Ь","caps":"Ь","shiftCaps":"ь"},"Comma":{"name":"Comma","caseDown":"б","caseUp":"Б","caps":"Б","shiftCaps":"б"},"Period":{"name":"Period","caseDown":"ю","caseUp":"Ю","caps":"Ю","shiftCaps":"ю"},"Slash":{"name":"Slash","caseDown":".","caseUp":",","caps":".","shiftCaps":","},"ControlLeft":{"name":"ControlLeft","caseDown":"Ctrl","caseUp":"Ctrl","caps":"Ctrl","shiftCaps":"Ctrl"},"ControlRight":{"name":"ControlRight","caseDown":"Ctrl","caseUp":"Ctrl","caps":"Ctrl","shiftCaps":"Ctrl"},"AltLeft":{"name":"AltLeft","caseDown":"Alt","caseUp":"Alt","caps":"Alt","shiftCaps":"Alt"},"AltRight":{"name":"AltRight","caseDown":"Alt","caseUp":"Alt","caps":"Alt","shiftCaps":"Alt"},"MetaLeft":{"name":"MetaLeftKey","caseDown":"Win","caseUp":"Win","caps":"Win","shiftCaps":"Win"},"Space":{"name":"Space","caseDown":" ","caseUp":" ","caps":" ","shiftCaps":" "},"ArrowUp":{"name":"ArrowUp","caseDown":"↑","caseUp":"↑","caps":"↑","shiftCaps":"↑"},"ArrowDown":{"name":"ArrowDown","caseDown":"↓","caseUp":"↓","caps":"↓","shiftCaps":"↓"},"ArrowLeft":{"name":"ArrowLeft","caseDown":"←","caseUp":"←","caps":"←","shiftCaps":"←"},"ArrowRight":{"name":"ArrowRight","caseDown":"→","caseUp":"→","caps":"→","shiftCaps":"→"}},"eng":{"BackQuote":{"name":"BackQuote","caseDown":"`","caseUp":"~","caps":"`","shiftCaps":"~"},"Digit1":{"name":"Digit1","caseDown":"1","caseUp":"!","caps":"1","shiftCaps":"!"},"Digit2":{"name":"Digit2","caseDown":"2","caseUp":"@","caps":"2","shiftCaps":"@"},"Digit3":{"name":"Digit3","caseDown":"3","caseUp":"#","caps":"3","shiftCaps":"#"},"Digit4":{"name":"Digit4","caseDown":"4","caseUp":"$","caps":"4","shiftCaps":"$"},"Digit5":{"name":"Digit5","caseDown":"5","caseUp":"%","caps":"5","shiftCaps":"%"},"Digit6":{"name":"Digit6","caseDown":"6","caseUp":"^","caps":"6","shiftCaps":"^"},"Digit7":{"name":"Digit7","caseDown":"7","caseUp":"&","caps":"7","shiftCaps":"&"},"Digit8":{"name":"Digit8","caseDown":"8","caseUp":"*","caps":"8","shiftCaps":"*"},"Digit9":{"name":"Digit9","caseDown":"9","caseUp":"(","caps":"9","shiftCaps":"("},"Digit0":{"name":"Digit0","caseDown":"0","caseUp":")","caps":"0","shiftCaps":")"},"Minus":{"name":"Minus","caseDown":"-","caseUp":"_","caps":"-","shiftCaps":"_"},"Equals":{"name":"Equals","caseDown":"=","caseUp":"+","caps":"=","shiftCaps":"+"},"Backspace":{"name":"Backspace","caseDown":"Backspace","caseUp":"Backspace","caps":"Backspace","shiftCaps":"Backspace"},"Tab":{"name":"Tab","caseDown":"Tab","caseUp":"Tab","caps":"Tab","shiftCaps":"Tab"},"KeyQ":{"name":"KeyQ","caseDown":"q","caseUp":"Q","caps":"Q","shiftCaps":"q"},"KeyW":{"name":"KeyW","caseDown":"w","caseUp":"W","caps":"W","shiftCaps":"w"},"KeyE":{"name":"KeyE","caseDown":"e","caseUp":"E","caps":"E","shiftCaps":"e"},"KeyR":{"name":"KeyR","caseDown":"r","caseUp":"R","caps":"R","shiftCaps":"r"},"KeyT":{"name":"KeyT","caseDown":"t","caseUp":"T","caps":"T","shiftCaps":"t"},"KeyY":{"name":"KeyY","caseDown":"y","caseUp":"Y","caps":"Y","shiftCaps":"y"},"KeyU":{"name":"KeyU","caseDown":"u","caseUp":"U","caps":"U","shiftCaps":"u"},"KeyI":{"name":"KeyI","caseDown":"i","caseUp":"I","caps":"I","shiftCaps":"i"},"KeyO":{"name":"KeyO","caseDown":"o","caseUp":"O","caps":"O","shiftCaps":"o"},"KeyP":{"name":"KeyP","caseDown":"p","caseUp":"P","caps":"P","shiftCaps":"p"},"BracketLeft":{"name":"BracketLeft","caseDown":"[","caseUp":"{","caps":"[","shiftCaps":"{"},"BracketRight":{"name":"BracketRight","caseDown":"]","caseUp":"}","caps":"}","shiftCaps":"]"},"BackSlash":{"name":"BackSlash","caseDown":"\\\\","caseUp":"|","caps":"\\\\","shiftCaps":"|"},"Delete":{"name":"Delete","caseDown":"Del","caseUp":"Del","caps":"Del","shiftCaps":"Del"},"CapsLock":{"name":"CapsLock","caseDown":"CapsLock","caseUp":"CapsLock","caps":"CapsLock","shiftCaps":"CapsLock"},"KeyA":{"name":"KeyA","caseDown":"a","caseUp":"A","caps":"A","shiftCaps":"a"},"KeyS":{"name":"KeyS","caseDown":"s","caseUp":"S","caps":"S","shiftCaps":"s"},"KeyD":{"name":"KeyD","caseDown":"d","caseUp":"D","caps":"D","shiftCaps":"d"},"KeyF":{"name":"KeyF","caseDown":"f","caseUp":"F","caps":"F","shiftCaps":"f"},"KeyG":{"name":"KeyG","caseDown":"g","caseUp":"G","caps":"G","shiftCaps":"g"},"KeyH":{"name":"KeyH","caseDown":"h","caseUp":"H","caps":"H","shiftCaps":"h"},"KeyJ":{"name":"KeyJ","caseDown":"j","caseUp":"J","caps":"J","shiftCaps":"j"},"KeyK":{"name":"KeyK","caseDown":"k","caseUp":"K","caps":"K","shiftCaps":"k"},"KeyL":{"name":"KeyL","caseDown":"l","caseUp":"L","caps":"L","shiftCaps":"l"},"Semicolon":{"name":"Semicolon","caseDown":";","caseUp":":","caps":";","shiftCaps":":"},"Quote":{"name":"Quote","caseDown":"\'","caseUp":"\\"","caps":"\'","shiftCaps":"\\""},"Enter":{"name":"Enter","caseDown":"Enter","caseUp":"Enter","caps":"Enter","shiftCaps":"Enter"},"ShiftLeft":{"name":"ShiftLeft","caseDown":"Shift","caseUp":"Shift","caps":"Shift","shiftCaps":"Shift"},"ShiftRight":{"name":"ShiftRight","caseDown":"Shift","caseUp":"Shift","caps":"Shift","shiftCaps":"Shift"},"KeyZ":{"name":"KeyZ","caseDown":"z","caseUp":"Z","caps":"Z","shiftCaps":"z"},"KeyX":{"name":"KeyX","caseDown":"x","caseUp":"X","caps":"X","shiftCaps":"x"},"KeyC":{"name":"KeyC","caseDown":"c","caseUp":"C","caps":"C","shiftCaps":"c"},"KeyV":{"name":"KeyV","caseDown":"v","caseUp":"V","caps":"V","shiftCaps":"v"},"KeyB":{"name":"KeyB","caseDown":"b","caseUp":"B","caps":"B","shiftCaps":"b"},"KeyN":{"name":"KeyN","caseDown":"n","caseUp":"N","caps":"N","shiftCaps":"n"},"KeyM":{"name":"KeyM","caseDown":"m","caseUp":"M","caps":"M","shiftCaps":"m"},"Comma":{"name":"Comma","caseDown":",","caseUp":"<","caps":",","shiftCaps":"<"},"Period":{"name":"Period","caseDown":".","caseUp":">","caps":".","shiftCaps":">"},"Slash":{"name":"Slash","caseDown":"/","caseUp":"?","caps":"/","shiftCaps":"?"},"ControlLeft":{"name":"ControlLeft","caseDown":"Ctrl","caseUp":"Ctrl","caps":"Ctrl","shiftCaps":"Ctrl"},"ControlRight":{"name":"ControlRight","caseDown":"Ctrl","caseUp":"Ctrl","caps":"Ctrl","shiftCaps":"Ctrl"},"AltLeft":{"name":"AltLeft","caseDown":"Alt","caseUp":"Alt","caps":"Alt","shiftCaps":"Alt"},"AltRight":{"name":"AltRight","caseDown":"Alt","caseUp":"Alt","caps":"Alt","shiftCaps":"Alt"},"MetaLeft":{"name":"MetaLeftKey","caseDown":"Win","caseUp":"Win","caps":"Win","shiftCaps":"Win"},"Space":{"name":"Space","caseDown":" ","caseUp":" ","caps":" ","shiftCaps":" "},"ArrowUp":{"name":"ArrowUp","caseDown":"↑","caseUp":"↑","caps":"↑","shiftCaps":"↑"},"ArrowDown":{"name":"ArrowDown","caseDown":"↓","caseUp":"↓","caps":"↓","shiftCaps":"↓"},"ArrowLeft":{"name":"ArrowLeft","caseDown":"←","caseUp":"←","caps":"←","shiftCaps":"←"},"ArrowRight":{"name":"ArrowRight","caseDown":"→","caseUp":"→","caps":"→","shiftCaps":"→"}}}');

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************************************************!*\
  !*** ../../../../stage #1/project/gers23-local/virtual_keyboard/src/index.js ***!
  \*******************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_HTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/HTML */ "../../../../stage\u0000#1/project/gers23-local/virtual_keyboard/src/js/HTML.js");
/* harmony import */ var _js_KeyboardRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/KeyboardRow */ "../../../../stage\u0000#1/project/gers23-local/virtual_keyboard/src/js/KeyboardRow.js");
/* harmony import */ var _js_Key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/Key */ "../../../../stage\u0000#1/project/gers23-local/virtual_keyboard/src/js/Key.js");
/* harmony import */ var _keys_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keys.json */ "../../../../stage\u0000#1/project/gers23-local/virtual_keyboard/src/keys.json");





window.onload = function () {
  retrieveLocalStorage();
  console.log('welcome to the world');
  renderHTMLToDOM();
  renderKeyboard(_keys_json__WEBPACK_IMPORTED_MODULE_3__, rowsKeys);
  changeLayout();
};

var lang = 'rus';
var activeKeys = "caseDown";
var position = 0;
var shiftKey = false;
var rowsKeys = [["BackQuote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equals", "Backspace"], ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "BackSlash", "Delete"], ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter"], ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight"], ["ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"]];

function renderHTMLToDOM() {
  var page = new _js_HTML__WEBPACK_IMPORTED_MODULE_0__.HTML();
  document.body.append(page.generateHTMLpage());
}

function renderKeyboard(data, rowsKeys) {
  rowsKeys.forEach(function (elem) {
    var row = new _js_KeyboardRow__WEBPACK_IMPORTED_MODULE_1__.keyboardRow(data).generateKeyboard();
    document.querySelector('.keyboard').append(row);
    elem.forEach(function (item) {
      var key = new _js_Key__WEBPACK_IMPORTED_MODULE_2__.Key(data, item);
      row.append(key.generateKey());
    });
  });
}

function changeLayout() {
  var rus = document.querySelectorAll('.rus');
  var eng = document.querySelectorAll('.eng');
  eng.forEach(function (el) {
    return hideKeys(el);
  });
  rus.forEach(function (el) {
    return hideKeys(el);
  });

  if (lang === 'rus') {
    rus.forEach(function (el) {
      return el.classList.remove('hidden');
    });
    eng.forEach(function (el) {
      return el.classList.add('hidden');
    });
  } else {
    eng.forEach(function (el) {
      return el.classList.remove('hidden');
    });
    rus.forEach(function (el) {
      return el.classList.add('hidden');
    });
  }

  changeActiveKeys();
  putLocalStorage();
}

function hideKeys(el) {
  for (var i = 0; i < el.children.length; i++) {
    el.children[i].classList.add('hidden');
  }
}

function changeActiveKeys() {
  if (activeKeys === 'caseDown') {
    document.querySelectorAll('.caseDown').forEach(function (el) {
      el.classList.remove('hidden');
    });
  } else if (activeKeys === 'caseUp') {
    document.querySelectorAll('.caseUp').forEach(function (el) {
      el.classList.remove('hidden');
    });
  } else if (activeKeys === 'caps') {
    document.querySelectorAll('.caps').forEach(function (el) {
      el.classList.remove('hidden');
    });
  } else if (activeKeys === 'shiftCaps') {
    document.querySelectorAll('.shiftCaps').forEach(function (el) {
      el.classList.remove('hidden');
    });
  }
} // controller function


function pressKey(event) {
  if (event.type === 'click') {
    var keyEvent = detectPressing(event);

    if (keyEvent && (keyEvent !== 'ShiftLeft' && keyEvent !== 'ShiftRight' || (keyEvent === 'ShiftLeft' || keyEvent === 'ShiftRight') && (activeKeys === 'caseUp' || activeKeys === 'shiftCaps'))) {
      whichPressed(keyEvent);
    }
  } else if (event.type === 'keydown' || event.type === 'keyup') {
    var _keyEvent = event.code;
    whichPressed(_keyEvent);
  }
}

function detectPressing(event) {
  var key = event.target.className.split(' ');

  if (key[1] === 'key') {
    return key[2];
  } else if (key[0] === 'textarea') {
    position = document.querySelector('.textarea').selectionEnd;
  }
}

function whichPressed(key) {
  switch (key) {
    case 'Backspace':
      inputTextToTextarea(key);
      break;

    case 'Delete':
      inputTextToTextarea(key);
      break;

    case 'Tab':
      inputTextToTextarea('    ');
      break;

    case 'CapsLock':
      inputTextToTextarea(key);
      break;

    case 'Enter':
      inputTextToTextarea(key);
      break;

    case 'ShiftLeft':
      inputTextToTextarea(key);
      break;

    case 'ShiftRight':
      inputTextToTextarea(key);
      break;

    case 'ControlLeft':
      break;

    case 'ControlRight':
      break;

    case 'AltLeft':
      break;

    case 'AltRight':
      break;

    case 'Space':
      inputTextToTextarea(' ');
      break;

    case 'MetaLeft':
      break;

    default:
      var value = "".concat(_keys_json__WEBPACK_IMPORTED_MODULE_3__[lang][key][activeKeys]);
      inputTextToTextarea(value);
      break;
  }
}

function inputTextToTextarea(value) {
  var textarea = document.querySelector('.textarea');
  if (position) textarea.selectionEnd = position;

  if (value === 'Backspace') {
    // let key = new KeyboardEvent('keydown', { key: value});
    // document.dispatchEvent(key)
    deleteSymbol(textarea, position - 1); // let arr = document.querySelector('.textarea').value.split('');
    // arr.pop();
    // document.querySelector('.textarea').value = arr.join('');
  } else if (value === 'Delete') {
    deleteSymbol(textarea, position);
  } else if (value === 'Enter') {
    addSymbol(textarea, position, '\n');
  } else if (value === 'CapsLock') {
    document.querySelector(".".concat(value)).classList.toggle('active');
    document.querySelectorAll(".".concat(activeKeys)).forEach(function (el) {
      return el.classList.toggle('hidden');
    });
    if (activeKeys === 'caseUp') activeKeys = 'shiftCaps';else if (activeKeys === 'caps') activeKeys = 'caseDown';else if (activeKeys === 'shiftCaps') activeKeys = 'caseUp';else activeKeys = 'caps';
    changeActiveKeys();
  } else if (value === 'ShiftLeft' || value === 'ShiftRight') {
    document.querySelector(".".concat(value)).classList.toggle('active');
    document.querySelectorAll(".".concat(activeKeys)).forEach(function (el) {
      return el.classList.toggle('hidden');
    });
    if (activeKeys === 'caseDown') activeKeys = 'caseUp';else if (activeKeys === 'caseUp') activeKeys = 'caseDown';else if (activeKeys === 'caps') activeKeys = 'shiftCaps';else if (activeKeys === 'shiftCaps') activeKeys = 'caps';
    changeActiveKeys();
  } else {
    addSymbol(textarea, position, value);
  }
}

function addSymbol(textarea, index, value) {
  var arr = textarea.value.split('');
  arr.splice(index, 0, value);
  if (index - 1 === textarea.value.length) position = textarea.value.length;else position = index + 1;
  textarea.value = arr.join('');
}

function deleteSymbol(textarea, index) {
  var arr = textarea.value.split('');
  arr.splice(index, 1);
  position = index;
  textarea.value = arr.join('');
} // events


document.addEventListener('keydown', function (event) {
  if (event.code !== 'CapsLock' && event.code !== 'ShiftLeft') {
    document.querySelector(".".concat(event.code)).classList.add('active');
  }

  if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && shiftKey === false) {
    shiftKey = true;
    pressKey(event);
  } else if (event.repeat) {} else if (event.ctrlKey && event.code === 'AltLeft') {
    if (lang === 'rus') lang = 'eng';else lang = 'rus';
    changeLayout();
  } else pressKey(event);
});
document.addEventListener('keyup', function (event) {
  if (event.code !== 'CapsLock' && event.code !== 'ShiftLeft') {
    document.querySelector(".".concat(event.code)).classList.remove('active');
  }

  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    shiftKey = false;
    pressKey(event);
  } else if (event.repeat) {}
});
document.addEventListener('click', function (event) {
  pressKey(event);
});
document.addEventListener('mousedown', function (event) {
  var keyEvent = detectPressing(event);

  if (keyEvent === 'ShiftLeft' || keyEvent === 'ShiftRight') {
    whichPressed(keyEvent);
  }
});
document.addEventListener('mouseup', function (event) {
  var keyEvent = detectPressing(event);

  if (keyEvent === 'ShiftLeft' || keyEvent === 'ShiftRight') {
    whichPressed(keyEvent);
  }
}); // local storage

function putLocalStorage() {
  localStorage.setItem('lang', JSON.stringify(lang));
}

function retrieveLocalStorage() {
  var retrieved = localStorage.getItem('lang');
  lang = JSON.parse(retrieved);
}
})();

/******/ })()
;
//# sourceMappingURL=script.js.map