import React from 'react';
import { render } from 'react-dom';
import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createHistory } from 'history';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect, NotFoundRoute } from 'react-router'
import { syncHistory, routeReducer } from 'react-router-redux'
import {RootReducer, AdminReducer} from "./reducers/reducers";
import App from "./containers/app";
import Result from "./containers/result";
import Search from "./containers/search";
import NotFound from "./containers/not_found";
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
    render(
        <Provider store={AppStore}>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRedirect to="/search" />
                    <Route path="search" component={Search} />
                    <Route path="result" component={Result} />
                    <Route path="/**" component={NotFound} />
                </Route>
            </Router>
        </Provider>
    , document.getElementById('app'));
};
