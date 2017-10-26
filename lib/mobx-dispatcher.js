(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_1 = __webpack_require__(4);
exports.contextTypes = Object.freeze({
    mobxStores: mobx_react_1.PropTypes.objectOrObservableObject,
});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var decorator_1 = __webpack_require__(3);
exports.dispatcher = decorator_1.default;
var Component_1 = __webpack_require__(5);
exports.Dispatcher = Component_1.default;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var decorator = function (InnerComponent) {
    var displayName = 'dispatch-' + (InnerComponent.displayName || InnerComponent.name || (InnerComponent.constructor && InnerComponent.constructor.name) || 'Unknown');
    return _a = /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.dispatch = function (action) {
                    if (!action || typeof action !== 'function') {
                        return function () {
                        };
                    }
                    var t = action(Object.assign({}, _this.context.mobxStores, { dispatch: _this.dispatch }));
                    var broken = false;
                    var teardown = function () {
                        if (!broken && typeof t === 'function')
                            t();
                        broken = true;
                    };
                    _this.teardownFunctions.push(teardown);
                    return teardown;
                };
                return _this;
            }
            class_1.prototype.render = function () {
                return React.createElement(InnerComponent, Object.assign({}, this.props, { dispatch: this.dispatch }));
            };
            class_1.prototype.componentWillMount = function () {
                this.teardownFunctions = [];
            };
            class_1.prototype.componentWillUnmount = function () {
                this.teardownFunctions.forEach(function (teardown) { return teardown(); });
                this.teardownFunctions = null;
            };
            return class_1;
        }(React.Component)),
        _a.displayName = displayName,
        _a.contextTypes = types_1.contextTypes,
        _a;
    var _a;
};
exports.default = decorator;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dispatch = function (action) {
            if (!action || typeof action !== 'function') {
                return function () {
                };
            }
            var t = action(Object.assign({}, _this.context.mobxStores, { dispatch: _this.dispatch }));
            var broken = false;
            var teardown = function () {
                if (!broken && typeof t === 'function')
                    t();
                broken = true;
            };
            _this.teardownFunctions.push(teardown);
            return teardown;
        };
        return _this;
    }
    Component.prototype.render = function () {
        return null;
    };
    Component.prototype.componentWillMount = function () {
        this.teardownFunctions = [];
    };
    Component.prototype.componentWillUnmount = function () {
        this.teardownFunctions.forEach(function (teardown) { return teardown(); });
        this.teardownFunctions = null;
    };
    Component.contextTypes = types_1.contextTypes;
    return Component;
}(React.Component));
exports.default = Component;


/***/ })
/******/ ])));
//# sourceMappingURL=mobx-dispatcher.js.map