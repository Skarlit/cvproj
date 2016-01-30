webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(159);

	var _redux = __webpack_require__(160);

	var _reactRedux = __webpack_require__(199);

	var _history = __webpack_require__(171);

	var _reactRouter = __webpack_require__(207);

	var _reactRouterRedux = __webpack_require__(170);

	var _reducers = __webpack_require__(307);

	var _app = __webpack_require__(309);

	var _app2 = _interopRequireDefault(_app);

	var _admin = __webpack_require__(310);

	var _admin2 = _interopRequireDefault(_admin);

	var _index = __webpack_require__(311);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import Error from "./components/error";

	var AppReducer = (0, _redux.combineReducers)({
	    routing: _reactRouterRedux.routeReducer,
	    rootReducer: _reducers.RootReducer,
	    adminReducer: _reducers.AdminReducer
	});

	// Sync dispatched route actions to the history
	var reduxRouterMiddleware = (0, _reactRouterRedux.syncHistory)(_reactRouter.browserHistory);
	var createStoreWithMiddleware = (0, _redux.applyMiddleware)(reduxRouterMiddleware)(_redux.createStore);

	var AppStore = createStoreWithMiddleware(AppReducer);

	// Required for replaying actions from devtools to work
	reduxRouterMiddleware.listenForReplays(AppStore);

	var chars = [];

	window.onload = function () {
	    var app = document.createElement('div');
	    document.body.appendChild(app);
	    console.log('mounting app...');
	    (0, _reactDom.render)(_react2.default.createElement(
	        _reactRedux.Provider,
	        { store: AppStore },
	        _react2.default.createElement(
	            _reactRouter.Router,
	            { history: _reactRouter.browserHistory },
	            _react2.default.createElement(
	                _reactRouter.Route,
	                { path: '/', component: _app2.default },
	                _react2.default.createElement(_reactRouter.IndexRoute, { component: _index2.default }),
	                _react2.default.createElement(_reactRouter.Route, { path: 'nimda', component: _admin2.default })
	            )
	        )
	    ), app);
	};

/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RootReducer = exports.AdminReducer = undefined;

	var _immutable = __webpack_require__(258);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _app_state = __webpack_require__(308);

	var _app_state2 = _interopRequireDefault(_app_state);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function AdminReducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? _app_state2.default : arguments[0];
	    var action = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	    return state;
	}

	function RootReducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? _app_state2.default : arguments[0];
	    var action = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	    return state;
	}

	exports.AdminReducer = AdminReducer;
	exports.RootReducer = RootReducer;

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _immutable = __webpack_require__(258);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultState = {
	    chars: [],
	    charMap: {}
	};

	exports.default = _immutable2.default.fromJS(window.bootstrapState || defaultState);

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(199);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App() {
	        _classCallCheck(this, App);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));
	    }

	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            console.log(this.props);
	            return _react2.default.createElement(
	                'div',
	                null,
	                'Hi',
	                this.props.children
	            );
	        }
	    }]);

	    return App;
	}(_react2.default.Component);

	function select(state) {
	    return state;
	}

	exports.default = (0, _reactRedux.connect)(select)(App);

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(199);

	var _immutable = __webpack_require__(258);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Admin = function (_Component) {
	    _inherits(Admin, _Component);

	    function Admin() {
	        _classCallCheck(this, Admin);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Admin).call(this));
	    }

	    _createClass(Admin, [{
	        key: 'render',
	        value: function render() {
	            console.log(this.props);
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Admin'
	                ),
	                this.props.children
	            );
	        }
	    }]);

	    return Admin;
	}(_react.Component);

	function select(state) {
	    var state = state.adminReducer;
	    return {
	        chars: state.get("chars"),
	        charMap: state.get("charMap")
	    };
	}

	exports.default = (0, _reactRedux.connect)(select)(Admin);

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(199);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Index = _react2.default.createClass({
	    displayName: 'Index',

	    render: function render() {
	        console.log(this.props);
	        return _react2.default.createElement(
	            'h1',
	            null,
	            'Home '
	        );
	    }
	});

	function select(state) {
	    return state;
	}

	exports.default = (0, _reactRedux.connect)(select)(Index);

/***/ }

});