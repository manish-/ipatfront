import { reqToAPI } from '../../utils/API_utils';
import API from '../../constants/API_Constants';
import {
    put
} from 'redux-saga/effects';
import * as APP_CONSTANTS from "../../constants/Constants";

export const fetch_query_list = function* (action) {
    yield put({
        type: API.CONCAT_US.QUERY_LIST.PENDING
    });
    try {

        let response = yield reqToAPI({
            url: `${API.CONCAT_US.QUERY_LIST.URL}`,
            method: "get",
            responseType: 'json',
            params: action.payload,
            headers: { 'Authorization': `Bearer ${localStorage.getItem(APP_CONSTANTS.ACCESS_TOKEN)}` }
        });
        
        yield put({
            type: API.CONCAT_US.QUERY_LIST.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.CONCAT_US.QUERY_LIST.REJECTED,
            payload: errorObject.data
        });
    }
};


export const fetch_query_details = function* (action) {
    yield put({
        type: API.CONCAT_US.DETAILS.PENDING
    });
    try {

        let response = yield reqToAPI({
            url: `${API.CONCAT_US.DETAILS.URL}/${action.payload.id}`,
            method: "get",
            responseType: 'json',
            headers: { 'Authorization': `Bearer ${localStorage.getItem(APP_CONSTANTS.ACCESS_TOKEN)}` }
        });
        
        yield put({
            type: API.CONCAT_US.DETAILS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.CONCAT_US.DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};


