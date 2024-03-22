import reduxThunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import {rootReducer} from "../../reducers/user";
import {rootSaga} from "../../sagas/user";
import createSagaMiddleware from "redux-saga";

let saga = createSagaMiddleware();

let middlewares =[reduxThunk,saga];

const store = createStore(rootReducer,{},applyMiddleware(...middlewares));

saga.run(rootSaga);
export default store;