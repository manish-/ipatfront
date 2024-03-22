import { reqToAPI } from '../../utils/API_utils';
import API from '../../constants/API_Constants';
import {
    put,
    select
} from 'redux-saga/effects';

export const fetch_list = function* (action) {
    yield put({
        type: API.BANNERS.LIST.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let response = yield reqToAPI({
            url: `${API.BANNERS.LIST.URL}`,
            method: "get",
            responseType: 'json',
            params: action.payload,
            headers: {
                "content-type": "application/json",
                'Authorization': `Bearer ${accessToken}`
            }
        });

        yield put({
            type: API.BANNERS.LIST.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.BANNERS.LIST.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_add = function* (action) {
    yield put({
        type: API.BANNERS.ADD.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let formData = new FormData();
        if (action.payload.heading1) {
            formData.append("heading1", action.payload.heading1);
        }
        if (action.payload.heading2) {
            formData.append("heading2", action.payload.heading2);
        }
        if (action.payload.heading3) {
            formData.append("heading3", action.payload.heading3);
        }
        formData.append("link_slug", action.payload.link_slug);
        formData.append("link_title", action.payload.link_title);
        formData.append("status", action.payload.status);

        if (action.payload.bannerFile) {
            formData.append("banner", action.payload.bannerFile);
        }

        let response = yield reqToAPI({
            url: `${API.BANNERS.ADD.URL}`,
            method: "post",
            responseType: 'json',
            data: formData,
            headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'multipart/form-data' }
        });
        yield put({
            type: API.BANNERS.ADD.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.BANNERS.ADD.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_details = function* (action) {
    yield put({
        type: API.BANNERS.DETAILS.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let response = yield reqToAPI({
            url: `${API.BANNERS.DETAILS.URL}/${action.payload.id}`,
            method: "get",
            responseType: 'json',
            headers: {
                "content-type": "application/json",
                'Authorization': `Bearer ${accessToken}`
            }
        });
        yield put({
            type: API.BANNERS.DETAILS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.BANNERS.DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_update = function* (action) {
    yield put({
        type: API.BANNERS.UPDATE.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let formData = new FormData();
        formData.append("id", action.payload.id);
        if (action.payload.heading1) {
            formData.append("heading1", action.payload.heading1);
        }
        if (action.payload.heading2) {
            formData.append("heading2", action.payload.heading2);
        }
        if (action.payload.heading3) {
            formData.append("heading3", action.payload.heading3);
        }
        formData.append("link_slug", action.payload.link_slug);
        formData.append("link_title", action.payload.link_title);
        formData.append("status", action.payload.status);

        if (action.payload.bannerFile) {
            formData.append("banner", action.payload.bannerFile);
        }

        let response = yield reqToAPI({
            url: `${API.BANNERS.UPDATE.URL}`,
            method: "post",
            responseType: 'json',
            data: formData,
            headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'multipart/form-data' }
        });
        yield put({
            type: API.BANNERS.UPDATE.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.BANNERS.UPDATE.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_update_status = function* (action) {
    yield put({
        type: API.BANNERS.STATUS_UPDATE.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let response = yield reqToAPI({
            url: `${API.BANNERS.STATUS_UPDATE.URL}`,
            method: "post",
            responseType: 'json',
            data: { ...action.payload },
            headers: {
                "content-type": "application/json",
                'Authorization': `Bearer ${accessToken}`
            }
        });
        yield put({
            type: API.BANNERS.STATUS_UPDATE.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.BANNERS.STATUS_UPDATE.REJECTED,
            payload: errorObject.data
        });
    }
};
