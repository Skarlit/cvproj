import React from 'react';
import { render } from 'react-dom';
import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createHistory } from 'history';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistory, routeReducer } from 'react-router-redux'
import {RootReducer, AdminReducer} from "./reducers/reducers";
import App from "./containers/app";
import Admin from "./containers/admin";
import Index from "./containers/index";
//import Error from "./components/error";


const AppReducer = combineReducers({
    routing: routeReducer,
    rootReducer: RootReducer,
    adminReducer: AdminReducer
});

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);

const AppStore = createStoreWithMiddleware(AppReducer);

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(AppStore);

var chars = [];


window.onload = function() {
    var app = document.createElement('div');
    document.body.appendChild(app);
    console.log('mounting app...');
    render(
        <Provider store={AppStore}>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Index} />
                    <Route path="nimda" component={Admin}></Route>
                </Route>
            </Router>
        </Provider>
    , app);
};

