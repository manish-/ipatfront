import { reqToAPI } from '../../utils/API_utils';
import API from '../../constants/API_Constants';
import {
    put,
    select
} from 'redux-saga/effects';

export const fetch_list = function* (action) {
    yield put({
        type: API.PROJECT_TYPES.LIST.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;
    
        let response = yield reqToAPI({
            url: `${API.PROJECT_TYPES.LIST.URL}`,
            method: "get",
            responseType: 'json',
            params: action.payload ,
            headers:{
                "content-type":"application/json",
                'Authorization': `Bearer ${accessToken}`
            }
        });
        
        yield put({
            type: API.PROJECT_TYPES.LIST.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.PROJECT_TYPES.LIST.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_add = function* (action) {
    yield put({
        type: API.PROJECT_TYPES.ADD.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;
        
        let response = yield reqToAPI({
            url: `${API.PROJECT_TYPES.ADD.URL}`,
            method: "post",
            responseType: 'json',
            data: action.payload,
            headers: { 'Authorization': `Bearer ${accessToken}` }
        });
        yield put({
            type: API.PROJECT_TYPES.ADD.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.PROJECT_TYPES.ADD.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_details = function* (action) {
    yield put({
        type: API.PROJECT_TYPES.DETAILS.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let response = yield reqToAPI({
            url: `${API.PROJECT_TYPES.DETAILS.URL}/${action.payload.id}`,
            method: "get",
            responseType: 'json',
            headers:{
                "content-type":"application/json",
                'Authorization': `Bearer ${accessToken}`
            }
        });
        yield put({
            type: API.PROJECT_TYPES.DETAILS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.PROJECT_TYPES.DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_update = function* (action) {
    yield put({
        type: API.PROJECT_TYPES.UPDATE.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let response = yield reqToAPI({
            url: `${API.PROJECT_TYPES.UPDATE.URL}`,
            method: "post",
            responseType: 'json',
            data: action.payload,
            headers: { 'Authorization': `Bearer ${accessToken}` }
        });
        yield put({
            type: API.PROJECT_TYPES.UPDATE.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.PROJECT_TYPES.UPDATE.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_update_status = function* (action) {
    yield put({
        type: API.PROJECT_TYPES.STATUS_UPDATE.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let response = yield reqToAPI({
            url: `${API.PROJECT_TYPES.STATUS_UPDATE.URL}`,
            method: "post",
            responseType: 'json',
            data: { ...action.payload },
            headers:{
                "content-type":"application/json",
                'Authorization': `Bearer ${accessToken}`
            }
        });
        yield put({
            type: API.PROJECT_TYPES.STATUS_UPDATE.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.PROJECT_TYPES.STATUS_UPDATE.REJECTED,
            payload: errorObject.data
        });
    }
};
