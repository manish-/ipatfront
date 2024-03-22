import { reqToAPI } from '../../utils/API_utils';
import API from '../../constants/API_Constants';
import {
    put,
    select
} from 'redux-saga/effects';

export const fetch_list = function* (action) {
    yield put({
        type: API.CLIENTELE.LIST.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let response = yield reqToAPI({
            url: `${API.CLIENTELE.LIST.URL}`,
            method: "get",
            responseType: 'json',
            params: action.payload,
            headers: {
                "content-type": "application/json",
                'Authorization': `Bearer ${accessToken}`
            }
        });

        yield put({
            type: API.CLIENTELE.LIST.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.CLIENTELE.LIST.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_add = function* (action) {
    yield put({
        type: API.CLIENTELE.ADD.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let formData = new FormData();
        formData.append("alt", action.payload.alt);
        formData.append("title", action.payload.title);
        formData.append("content", action.payload.content);
        formData.append("display_on_homepage", action.payload.display_on_homepage);
        formData.append("display_order", action.payload.display_order);
        formData.append("status", action.payload.status);

        if (action.payload.thumbnailFile) {
            formData.append("thumbnail", action.payload.thumbnailFile);
        }


        let response = yield reqToAPI({
            url: `${API.CLIENTELE.ADD.URL}`,
            method: "post",
            responseType: 'json',
            data: formData,
            headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'multipart/form-data' }
        });
        yield put({
            type: API.CLIENTELE.ADD.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.CLIENTELE.ADD.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_details = function* (action) {
    yield put({
        type: API.CLIENTELE.DETAILS.PENDING
    });
    try {
        if (action.payload.id > 0) {
            const state = yield select();
            const accessToken = state.Authentication_Reducers.accessToken;

            let response = yield reqToAPI({
                url: `${API.CLIENTELE.DETAILS.URL}/${action.payload.id}`,
                method: "get",
                responseType: 'json',
                headers: {
                    "content-type": "application/json",
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            yield put({
                type: API.CLIENTELE.DETAILS.FULLFILLED,
                payload: response.data
            });
        } else {
            yield put({
                type: API.CLIENTELE.DETAILS.FULLFILLED,
                payload: {
                    message: '',
                    details: {}
                }
            });
        }
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.CLIENTELE.DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_update = function* (action) {
    yield put({
        type: API.CLIENTELE.UPDATE.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let formData = new FormData();
        formData.append("id", action.payload.id);
        formData.append("alt", action.payload.alt);
        formData.append("title", action.payload.title);
        formData.append("display_on_homepage", action.payload.display_on_homepage);
        formData.append("display_order", action.payload.display_order);
        formData.append("content", action.payload.content);
        formData.append("status", action.payload.status);

        if (action.payload.thumbnailFile) {
            formData.append("thumbnail", action.payload.thumbnailFile);
        }

        let response = yield reqToAPI({
            url: `${API.CLIENTELE.UPDATE.URL}`,
            method: "post",
            responseType: 'json',
            data: formData,
            headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'multipart/form-data' }
        });
        yield put({
            type: API.CLIENTELE.UPDATE.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.CLIENTELE.UPDATE.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_update_status = function* (action) {
    yield put({
        type: API.CLIENTELE.STATUS_UPDATE.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let response = yield reqToAPI({
            url: `${API.CLIENTELE.STATUS_UPDATE.URL}`,
            method: "post",
            responseType: 'json',
            data: { ...action.payload },
            headers: {
                "content-type": "application/json",
                'Authorization': `Bearer ${accessToken}`
            }
        });

    
        yield put({
            type: API.CLIENTELE.STATUS_UPDATE.FULLFILLED,
            payload: response.data
        });

    } catch (error) {
        // console.log("error",error);
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.CLIENTELE.STATUS_UPDATE.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_meta_details = function* (action) {
    yield put({
        type: API.CLIENTELE.META_DETAILS.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let response = yield reqToAPI({
            url: `${API.CLIENTELE.META_DETAILS.URL}/${action.payload.id}`,
            method: "get",
            responseType: 'json',
            headers: {
                "content-type": "application/json",
                'Authorization': `Bearer ${accessToken}`
            }
        });
        yield put({
            type: API.CLIENTELE.META_DETAILS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.CLIENTELE.META_DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_meta_update = function* (action) {
    yield put({
        type: API.CLIENTELE.META_UPDATE.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let formData = new FormData();
        formData.append("id", action.payload.id);
        formData.append("title", action.payload.title);
        formData.append("slug", action.payload.slug);
        formData.append("meta_title", action.payload.meta_title);
        formData.append("meta_description", action.payload.meta_description);
        formData.append("meta_keywords", action.payload.meta_keywords);
        formData.append("status", action.payload.status);

        if (action.payload.bannerFile) {
            formData.append("banner", action.payload.bannerFile);
        }

        let response = yield reqToAPI({
            url: `${API.CLIENTELE.META_UPDATE.URL}`,
            method: "post",
            responseType: 'json',
            data: formData,
            headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'multipart/form-data' }
        });
        yield put({
            type: API.CLIENTELE.META_UPDATE.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.CLIENTELE.META_UPDATE.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_client_dropdown_list = function* (action) {
    yield put({
        type: API.CLIENTELE.CLIENTS_DROPDOWN_LIST.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let response = yield reqToAPI({
            url: `${API.CLIENTELE.CLIENTS_DROPDOWN_LIST.URL}`,
            method: "get",
            responseType: 'json',
            headers: {
                "content-type": "application/json",
                'Authorization': `Bearer ${accessToken}`
            }
        });

        yield put({
            type: API.CLIENTELE.CLIENTS_DROPDOWN_LIST.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.CLIENTELE.CLIENTS_DROPDOWN_LIST.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_client_projects_list = function* (action) {
    yield put({
        type: API.CLIENTELE.PROJECTS_LIST.PENDING
    });
    try {

        if (action.payload.id > 0) {
            const state = yield select();
            const accessToken = state.Authentication_Reducers.accessToken;

            let response = yield reqToAPI({
                url: `${API.CLIENTELE.PROJECTS_LIST.URL}`,
                method: "get",
                responseType: 'json',
                params: action.payload,
                headers: {
                    "content-type": "application/json",
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            yield put({
                type: API.CLIENTELE.PROJECTS_LIST.FULLFILLED,
                payload: response.data
            });
        } else {
            yield put({
                type: API.CLIENTELE.PROJECTS_LIST.FULLFILLED,
                payload: {
                    message: '',
                    totalFound: 0,
                    totalPages: 0,
                    list: []
                }
            });
        }
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.CLIENTELE.PROJECTS_LIST.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_client_projects_details = function* (action) {
    yield put({
        type: API.CLIENTELE.PROJECTS_DETAILS.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let response = yield reqToAPI({
            url: `${API.CLIENTELE.PROJECTS_DETAILS.URL}/${action.payload.clientId}/${action.payload.id}`,
            method: "get",
            responseType: 'json',
            headers: {
                "content-type": "application/json",
                'Authorization': `Bearer ${accessToken}`
            }
        });
        yield put({
            type: API.CLIENTELE.PROJECTS_DETAILS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.CLIENTELE.PROJECTS_DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_client_projects_create = function* (action) {
    yield put({
        type: API.CLIENTELE.PROJECTS_CREATE.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let response = yield reqToAPI({
            url: `${API.CLIENTELE.PROJECTS_CREATE.URL}`,
            method: "post",
            responseType: 'json',
            data: action.payload,
            headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'application/json' }
        });
        yield put({
            type: API.CLIENTELE.PROJECTS_CREATE.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.CLIENTELE.PROJECTS_CREATE.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_client_projects_update = function* (action) {
    yield put({
        type: API.CLIENTELE.PROJECTS_UPDATE.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let response = yield reqToAPI({
            url: `${API.CLIENTELE.PROJECTS_UPDATE.URL}`,
            method: "post",
            responseType: 'json',
            data: action.payload,
            headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'application/json' }
        });
        yield put({
            type: API.CLIENTELE.PROJECTS_UPDATE.FULLFILLED,
            payload: response.data
        });

    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.CLIENTELE.PROJECTS_UPDATE.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_client_projects_update_status = function* (action) {
    yield put({
        type: API.CLIENTELE.PROJECTS_UPDATE_STATUS.PENDING
    });
    try {
        const state = yield select();
        const accessToken = state.Authentication_Reducers.accessToken;

        let response = yield reqToAPI({
            url: `${API.CLIENTELE.PROJECTS_UPDATE_STATUS.URL}`,
            method: "post",
            responseType: 'json',
            data: { ...action.payload },
            headers: {
                "content-type": "application/json",
                'Authorization': `Bearer ${accessToken}`
            }
        });
        yield put({
            type: API.CLIENTELE.PROJECTS_UPDATE_STATUS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API.CLIENTELE.PROJECTS_UPDATE_STATUS.REJECTED,
            payload: errorObject.data
        });
    }
};
