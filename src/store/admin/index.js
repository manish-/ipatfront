import reduxThunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import {rootReducer} from "../../reducers/admin";
import {rootSaga} from "../../sagas/admin";
import createSagaMiddleware from "redux-saga";

let saga = createSagaMiddleware();

let middlewares =[reduxThunk,saga];

const store = createStore(rootReducer,{},applyMiddleware(...middlewares));

saga.run(rootSaga);
export default store;