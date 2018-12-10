(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/TestContainer/TestContainer.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/TestContainer/TestContainer.jsx":
/*!*********************************************!*\
  !*** ./src/TestContainer/TestContainer.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _components = __webpack_require__(/*! ./components */ \"./src/TestContainer/components/index.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TestContainer = function (_React$Component) {\n\t_inherits(TestContainer, _React$Component);\n\n\tfunction TestContainer(props) {\n\t\t_classCallCheck(this, TestContainer);\n\n\t\tvar _this = _possibleConstructorReturn(this, (TestContainer.__proto__ || Object.getPrototypeOf(TestContainer)).call(this, props));\n\n\t\t_this.handleExternalEvent = _this.handleExternalEvent.bind(_this);\n\n\t\t_this.state = {\n\t\t\tcount: 1\n\t\t};\n\t\treturn _this;\n\t}\n\n\t_createClass(TestContainer, [{\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\twindow.addEventListener('handleExternalEvent', this.handleExternalEvent);\n\t\t}\n\t}, {\n\t\tkey: 'componentWillUnmount',\n\t\tvalue: function componentWillUnmount() {\n\t\t\twindow.removeEventListener('handleExternalEvent', this.handleExternalEvent);\n\t\t}\n\t}, {\n\t\tkey: 'handleExternalEvent',\n\t\tvalue: function handleExternalEvent() {\n\t\t\tthis.setState({ count: this.state.count + 1 });\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn React.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\tReact.createElement(_components.Component1, null),\n\t\t\t\tReact.createElement(_components.Component2, null),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Test Container has count ',\n\t\t\t\t\tthis.state.count\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn TestContainer;\n}(React.Component);\n\nvar el = document.getElementById('TestContainer');\nif (el) {\n\tReactDOM.render(React.createElement(TestContainer, null), el);\n}\n\n//# sourceURL=webpack:///./src/TestContainer/TestContainer.jsx?");

/***/ }),

/***/ "./src/TestContainer/components/Component1/Component1.jsx":
/*!****************************************************************!*\
  !*** ./src/TestContainer/components/Component1/Component1.jsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nvar Component1 = function Component1(props) {\n\treturn React.createElement(\n\t\t\"div\",\n\t\tnull,\n\t\t\"Component 1\"\n\t);\n};\n\nexports.default = Component1;\n\n//# sourceURL=webpack:///./src/TestContainer/components/Component1/Component1.jsx?");

/***/ }),

/***/ "./src/TestContainer/components/Component2/Component2.jsx":
/*!****************************************************************!*\
  !*** ./src/TestContainer/components/Component2/Component2.jsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nvar Component2 = function Component2(props) {\n\treturn React.createElement(\n\t\t\"div\",\n\t\tnull,\n\t\t\"Component 2\"\n\t);\n};\n\nexports.default = Component2;\n\n//# sourceURL=webpack:///./src/TestContainer/components/Component2/Component2.jsx?");

/***/ }),

/***/ "./src/TestContainer/components/index.js":
/*!***********************************************!*\
  !*** ./src/TestContainer/components/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Component = __webpack_require__(/*! ./Component1/Component1 */ \"./src/TestContainer/components/Component1/Component1.jsx\");\n\nvar _Component2 = _interopRequireDefault(_Component);\n\nvar _Component3 = __webpack_require__(/*! ./Component2/Component2 */ \"./src/TestContainer/components/Component2/Component2.jsx\");\n\nvar _Component4 = _interopRequireDefault(_Component3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = {\n\tComponent1: _Component2.default,\n\tComponent2: _Component4.default\n};\n\n//# sourceURL=webpack:///./src/TestContainer/components/index.js?");

/***/ })

/******/ });
});