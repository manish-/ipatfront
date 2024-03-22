import { reqToAPI } from '../../utils/API_utils';
import { API_FRONTEND } from '../../constants/API_Constants';
import * as APP_CONSTANTS from '../../constants/Constants';
import {
    put
} from 'redux-saga/effects';


export const register_donor = function* (action) {
    yield put({
        type: API_FRONTEND.AUTH.REGISTER.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.AUTH.REGISTER.URL}`,
            method: "post",
            responseType: 'json',
            data: action.payload
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.AUTH.REGISTER.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.AUTH.REGISTER.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_login_token = function* (action) {
    yield put({
        type: API_FRONTEND.AUTH.LOGIN.WITH_PASSWORD.PENDING
    });
    try {

        let response = yield reqToAPI({
            url: `${API_FRONTEND.AUTH.LOGIN.WITH_PASSWORD.URL}`,
            method: "post",
            responseType: 'json',
            data: {
                username: action.payload.username,
                password: action.payload.password,
                userType: "donor",
                tokens: null
            }
        });
        yield put({
            type: API_FRONTEND.AUTH.LOGIN.WITH_PASSWORD.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.AUTH.LOGIN.WITH_PASSWORD.REJECTED,
            payload: errorObject.data
        });
    }
};

export const verify_token = function* (action) {
    yield put({
        type: API_FRONTEND.AUTH.LOGIN.VERIFY_TOKEN.PENDING
    });
    try {
        if (!localStorage.getItem(APP_CONSTANTS.USER_ACCESS_TOKEN)) {
            yield put({
                type: API_FRONTEND.AUTH.LOGIN.VERIFY_TOKEN.REJECTED,
                payload: {
                    message: "token has been removed or expired",
                    tokenExpired: true
                }
            });
        }
        /*
                let response = yield reqToAPI({
                    url: `${API_FRONTEND.AUTH.LOGIN.VERIFY_TOKEN.URL}`,
                    method: "post",
                    responseType: 'json',
                    headers: { 'Authorization': `Bearer ${localStorage.getItem(APP_CONSTANTS.USER_ACCESS_TOKEN)}` }
                });
                */
        yield put({
            type: API_FRONTEND.AUTH.LOGIN.VERIFY_TOKEN.FULLFILLED
        });
    } catch (error) {
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.AUTH.LOGIN.VERIFY_TOKEN.REJECTED,
            payload: errorObject.data
        });
    }
};

export const signout = function* (action) {
    yield put({
        type: API_FRONTEND.AUTH.LOGIN.SIGNOUT.PENDING
    });
    try {

        yield put({
            type: API_FRONTEND.AUTH.LOGIN.SIGNOUT.FULLFILLED,
            payload: {
                message: 'logout successfully'
            }
        });
    } catch (error) {
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.AUTH.LOGIN.SIGNOUT.REJECTED,
            payload: errorObject.data
        });
    }
};


export const forgot_password = function* (action) {
    yield put({
        type: API_FRONTEND.AUTH.FORGET_PASSWORD.PENDING
    });
    try {

        let response = yield reqToAPI({
            url: `${API_FRONTEND.AUTH.FORGET_PASSWORD.URL}`,
            method: "post",
            responseType: 'json',
            data: {
                username: action.payload.username
            }
        });
        yield put({
            type: API_FRONTEND.AUTH.FORGET_PASSWORD.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.AUTH.FORGET_PASSWORD.REJECTED,
            payload: errorObject.data
        });
    }
};


export const verify_forgot_password_otp = function* (action) {
    yield put({
        type: API_FRONTEND.AUTH.VERIFY_FORGET_PASSWORD.PENDING
    });
    try {

        let response = yield reqToAPI({
            url: `${API_FRONTEND.AUTH.VERIFY_FORGET_PASSWORD.URL}`,
            method: "post",
            responseType: 'json',
            data: {
                username: action.payload.username,
                password: action.payload.password,
                otp: action.payload.otp
            }
        });
        yield put({
            type: API_FRONTEND.AUTH.VERIFY_FORGET_PASSWORD.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.AUTH.VERIFY_FORGET_PASSWORD.REJECTED,
            payload: errorObject.data
        });
    }
};


export const reset_forgot_password_form = function* (action) {
    yield put({
        type: API_FRONTEND.AUTH.RESET_FORGET_PASSWORD_FORM.PENDING
    });
    try {
        yield put({
            type: API_FRONTEND.AUTH.RESET_FORGET_PASSWORD_FORM.FULLFILLED
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.AUTH.RESET_FORGET_PASSWORD_FORM.REJECTED,
            payload: errorObject.data
        });
    }
};

