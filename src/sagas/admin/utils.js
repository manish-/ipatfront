import { reqToAPI } from '../../utils/API_utils';
import API from '../../constants/API_Constants';
import {
    put,
    select
} from 'redux-saga/effects';

export const fetch_state = function* (action) {
    yield put({
        type: API.UTILS.STATES.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let response = yield reqToAPI({
            url: `${API.UTILS.STATES.URL}`,
            method: "get",
            responseType: 'json',
            headers: {
                "content-type": "application/json",
                'Authorization': `Bearer ${accessToken}`
            }
        });

        yield put({
            type: API.UTILS.STATES.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.UTILS.STATES.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_district = function* (action) {
    yield put({
        type: API.UTILS.DISTRICT.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;
        let response = yield reqToAPI({
            url: `${API.UTILS.DISTRICT.URL}/${action.payload.state ? action.payload.state : -1}`,
            method: "get",
            responseType: 'json',
            headers: {
                "content-type": "application/json",
                'Authorization': `Bearer ${accessToken}`
            }
        });

        yield put({
            type: API.UTILS.DISTRICT.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.UTILS.DISTRICT.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_project_type = function* (action) {
    yield put({
        type: API.UTILS.PROJECT_TYPES.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let response = yield reqToAPI({
            url: `${API.UTILS.PROJECT_TYPES.URL}`,
            method: "get",
            responseType: 'json',
            headers: {
                "content-type": "application/json",
                'Authorization': `Bearer ${accessToken}`
            }
        });

        yield put({
            type: API.UTILS.PROJECT_TYPES.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.UTILS.PROJECT_TYPES.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_sectors = function* (action) {
    yield put({
        type: API.UTILS.SECTORS.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let response = yield reqToAPI({
            url: `${API.UTILS.SECTORS.URL}`,
            method: "get",
            responseType: 'json',
            headers: {
                "content-type": "application/json",
                'Authorization': `Bearer ${accessToken}`
            }
        });

        yield put({
            type: API.UTILS.SECTORS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.UTILS.SECTORS.REJECTED,
            payload: errorObject.data
        });
    }
};

export const upload_editor_file = function* (action) {
    yield put({
        type: API.UTILS.UPLOAD_EDITOR_FILE.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let formData = new FormData();
        if (action.payload.thumbnailFile) {
            formData.append("file", action.payload.thumbnailFile);
        }

        let response = yield reqToAPI({
            url: `${API.UTILS.UPLOAD_EDITOR_FILE.URL}`,
            method: "post",
            responseType: 'json',
            data: formData,
            headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'multipart/form-data' }
        });
        // response.data.editorId= action.payload.editorId;
        yield put({
            type: API.UTILS.UPLOAD_EDITOR_FILE.FULLFILLED,
            payload: { ...response.data, editorId: action.payload.editorId }
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.UTILS.UPLOAD_EDITOR_FILE.REJECTED,
            payload: errorObject.data
        });
    }
};

export const clear_editor_file = function* (action) {
    yield put({
        type: API.UTILS.CLEAR_EDITOR_FILE.PENDING
    });
    try {
        yield put({
            type: API.UTILS.CLEAR_EDITOR_FILE.FULLFILLED
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.UTILS.CLEAR_EDITOR_FILE.REJECTED,
            payload: errorObject.data
        });
    }
};

export const page_content = function* (action) {
    yield put({
        type: API.UTILS.PAGE_CONTENT_DETAILS.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let response = yield reqToAPI({
            url: `${API.UTILS.PAGE_CONTENT_DETAILS.URL}/${action.payload.slug}`,
            method: "get",
            responseType: 'json',
            headers: {
                "content-type": "application/json",
                'Authorization': `Bearer ${accessToken}`
            }
        });

        yield put({
            type: API.UTILS.PAGE_CONTENT_DETAILS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.UTILS.PAGE_CONTENT_DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};

export const page_content_update = function* (action) {
    yield put({
        type: API.UTILS.PAGE_CONTENT_UPDATE.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let formData = new FormData();

        formData.append("id", action.payload.id);
        formData.append("section1", action.payload.section1);
        formData.append("section2", action.payload.section2);
        formData.append("section3", action.payload.section3);
        formData.append("section4", action.payload.section4);

        if (action.payload.image1File) {
            formData.append("image1", action.payload.image1File);
        }
        if (action.payload.image2File) {
            formData.append("image2", action.payload.image2File);
        }

        let response = yield reqToAPI({
            url: `${API.UTILS.PAGE_CONTENT_UPDATE.URL}`,
            method: "post",
            responseType: 'json',
            data: formData,
            headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'multipart/form-data' }
        });
        // response.data.editorId= action.payload.editorId;
        yield put({
            type: API.UTILS.PAGE_CONTENT_UPDATE.FULLFILLED,
            payload: { ...response.data, editorId: action.payload.editorId }
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.UTILS.PAGE_CONTENT_UPDATE.REJECTED,
            payload: errorObject.data
        });
    }
};