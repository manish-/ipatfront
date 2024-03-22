import { reqToAPI } from '../../utils/API_utils';
import { API_FRONTEND } from '../../constants/API_Constants';
import * as APP_CONSTANTS from '../../constants/Constants';
import {
    put
} from 'redux-saga/effects';


export const fetch_headermenu = function* (action) {
    yield put({
        type: API_FRONTEND.UTILS.HEADER_MENU.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.UTILS.HEADER_MENU.URL}`,
            method: "get",
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.UTILS.HEADER_MENU.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.UTILS.HEADER_MENU.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_banners = function* (action) {
    yield put({
        type: API_FRONTEND.UTILS.BANNERS.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.UTILS.BANNERS.URL}`,
            method: "get",
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.UTILS.BANNERS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.UTILS.BANNERS.REJECTED,
            payload: errorObject.data
        });
    }
};


export const fetch_home_event_popup_details = function* (action) {
    yield put({
        type: API_FRONTEND.UTILS.HOME_EVENT_POPUP_DETAILS.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.UTILS.HOME_EVENT_POPUP_DETAILS.URL}`,
            method: "get",
            responseType: 'json'
        });
        yield put({
            type: API_FRONTEND.UTILS.HOME_EVENT_POPUP_DETAILS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.UTILS.HOME_EVENT_POPUP_DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};


export const fetch_state = function* (action) {
    yield put({
        type: API_FRONTEND.UTILS.STATES.PENDING
    });
    try {

        let response = yield reqToAPI({
            url: `${API_FRONTEND.UTILS.STATES.URL}`,
            method: "get",
            responseType: 'json',
            headers: {
                "content-type": "application/json"
            }
        });

        yield put({
            type: API_FRONTEND.UTILS.STATES.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.UTILS.STATES.REJECTED,
            payload: errorObject.data
        });
    }
};


export const page_content = function* (action) {
    yield put({
        type: API_FRONTEND.UTILS.PAGE_CONTENT_DETAILS.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.UTILS.PAGE_CONTENT_DETAILS.URL}/${action.payload.slug}`,
            method: "get",
            responseType: 'json',
            headers: {
                "content-type": "application/json"
            }
        });

        yield put({
            type: API_FRONTEND.UTILS.PAGE_CONTENT_DETAILS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.UTILS.PAGE_CONTENT_DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};