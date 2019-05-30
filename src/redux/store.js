import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import createSagaMiddleware from "redux-saga";
import { mySaga } from "../sagas/saga";

const sagaMiddleware = createSagaMiddleware();


const initialState = {};
const enhancers = [];
const middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
  enhancers.push(devToolsEnhancer());
  middleware.push(logger);
}

const composedEnhancers = compose(applyMiddleware(sagaMiddleware, ...middleware), ...enhancers);
const store = createStore(rootReducer, initialState, composedEnhancers);
sagaMiddleware.run(mySaga);
export default store;
