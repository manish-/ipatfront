import { reqToAPI } from '../../utils/API_utils';
import API from '../../constants/API_Constants';
import {
    put
} from 'redux-saga/effects';


export const fetch_login_token = function* (action) {
    yield put({
        type: API.LOGIN.WITH_PASSWORD.PENDING
    });
    try {

        let response = yield reqToAPI({
            url: `${API.LOGIN.WITH_PASSWORD.URL}`,
            method: "post",
            responseType: 'json',
            data: {
                username: action.payload.username,
                password: action.payload.password,                
            }
        });
        yield put({
            type: API.LOGIN.WITH_PASSWORD.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error",{...error});
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.LOGIN.WITH_PASSWORD.REJECTED,
            payload: errorObject.data
        });
    }
};

export const verify_token = function* (action) {
    yield put({
        type: API.LOGIN.VERIFY_TOKEN.PENDING
    });
    try {

        let response = yield reqToAPI({
            url: `${API.LOGIN.VERIFY_TOKEN.URL}`,
            method: "post",
            responseType: 'json',
            headers: {
                authorization: action.payload.accessToken
            }
        });
        yield put({
            type: API.LOGIN.VERIFY_TOKEN.FULLFILLED,
            payload: {
                accessToken: action.payload.accessToken,
                refreshToken:action.payload.refreshToken
            }
        });
    } catch (error) {
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.LOGIN.VERIFY_TOKEN.REJECTED,
            payload: errorObject.data
        });
    }
};

export const signout = function* (action) {
    yield put({
        type: API.LOGIN.SIGNOUT.PENDING
    });
    try {

        yield put({
            type: API.LOGIN.SIGNOUT.FULLFILLED,
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
            type: API.LOGIN.SIGNOUT.REJECTED,
            payload: errorObject.data
        });
    }
};

