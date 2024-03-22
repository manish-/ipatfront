import { reqToAPI } from '../../utils/API_utils';
import { API_FRONTEND } from '../../constants/API_Constants';
import * as APP_CONSTANTS from '../../constants/Constants';
import {
    put
} from 'redux-saga/effects';


export const fetch_about_us_page_content = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.ABOUT_US.DETAILS.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.ABOUT_US.DETAILS.URL}/${action.payload.slug}`,
            method: "get",
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.ABOUT_US.DETAILS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.ABOUT_US.DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_service_page_subpages_list = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.SERVICES.LIST.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.SERVICES.LIST.URL}`,
            method: "get",
            params: action.payload,
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.SERVICES.LIST.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.SERVICES.LIST.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_service_page_content = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.SERVICES.DETAILS.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.SERVICES.DETAILS.URL}/${action.payload.slug}`,
            method: "get",
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.SERVICES.DETAILS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.SERVICES.DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_project_page_content = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.PROJECTS.DETAILS.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.PROJECTS.DETAILS.URL}/${action.payload.slug}`,
            method: "get",
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.PROJECTS.DETAILS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.PROJECTS.DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_project_list_by = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.PROJECTS.LIST_BY.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.PROJECTS.LIST_BY.URL}`,
            method: "get",
            params: action.payload,
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.PROJECTS.LIST_BY.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.PROJECTS.LIST_BY.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_project_list_home = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.PROJECTS.LIST_HOME.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.PROJECTS.LIST_HOME.URL}`,
            method: "get",
            params: action.payload,
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.PROJECTS.LIST_HOME.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.PROJECTS.LIST_HOME.REJECTED,
            payload: errorObject.data
        });
    }
};


export const fetch_project_details = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.PROJECTS.PROJECT_DETAILS.PENDING
    });

    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.PROJECTS.PROJECT_DETAILS.URL}/${action.payload.id}`,
            method: "get",
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.PROJECTS.PROJECT_DETAILS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.PROJECTS.PROJECT_DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};


export const fetch_project_sectors_list = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.PROJECTS.SECTORS_LIST.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.PROJECTS.SECTORS_LIST.URL}`,
            method: "get",
            responseType: 'json'
        });
        //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.PROJECTS.SECTORS_LIST.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.PROJECTS.SECTORS_LIST.REJECTED,
            payload: errorObject.data
        });
    }
};


export const fetch_laboratory_page_content = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.LABORATORY.DETAILS.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.LABORATORY.DETAILS.URL}/${action.payload.slug}`,
            method: "get",
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.LABORATORY.DETAILS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.LABORATORY.DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_clientele_page_content = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.CLIENTELE.DETAILS.PENDING
    });
    try {
        let url = (action.payload.firstRow === 0) ? `${API_FRONTEND.PAGES.CLIENTELE.DETAILS.URL}/${action.payload.slug}` : `${API_FRONTEND.PAGES.CLIENTELE.DETAILS.URL}`;
        let response = yield reqToAPI({
            url: `${url}`,
            method: "get",
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.CLIENTELE.DETAILS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.CLIENTELE.DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_clientele_project_list = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.CLIENTELE.PROJECT_LIST.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.CLIENTELE.PROJECT_LIST.URL}/${action.payload.id}`,
            method: "get",
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.CLIENTELE.PROJECT_LIST.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.CLIENTELE.PROJECT_LIST.REJECTED,
            payload: errorObject.data
        });
    }
};


export const clear_clientele_project_list = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.CLIENTELE.PROJECT_LIST_CLEAR.PENDING
    });
    try {
        yield put({
            type: API_FRONTEND.PAGES.CLIENTELE.PROJECT_LIST_CLEAR.FULLFILLED
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.CLIENTELE.PROJECT_LIST_CLEAR.REJECTED,
            payload: errorObject.data
        });
    }
};


export const fetch_careers_page_list = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.CAREERS.LIST.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.CAREERS.LIST.URL}`,
            method: "get",
            params: action.payload,
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.CAREERS.LIST.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.CAREERS.LIST.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_careers_page_details = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.CAREERS.DETAILS.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.CAREERS.DETAILS.URL}/${action.payload.slug}`,
            method: "get",
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.CAREERS.DETAILS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.CAREERS.DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};

export const apply_for_career = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.CAREERS.APPLY.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.CAREERS.APPLY.URL}`,
            method: "post",
            data: action.payload,
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.CAREERS.APPLY.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.CAREERS.APPLY.REJECTED,
            payload: errorObject.data
        });
    }
};


export const fetch_careers_page_meta_details = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.CAREERS.META_DETAILS.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.CAREERS.META_DETAILS.URL}`,
            method: "get",
            responseType: 'json'
        });
        // console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.CAREERS.META_DETAILS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.CAREERS.META_DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};


export const fetch_faqs_page_meta_details = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.FAQS.META_DETAILS.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.FAQS.META_DETAILS.URL}`,
            method: "get",
            responseType: 'json'
        });
        // console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.FAQS.META_DETAILS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.FAQS.META_DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_faqs_list = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.FAQS.LIST.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.FAQS.LIST.URL}`,
            method: "get",
            params: action.payload,
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.FAQS.LIST.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.FAQS.LIST.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_download_page_details = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.DOWNLOAD.DETAILS.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.DOWNLOAD.DETAILS.URL}/${action.payload.slug}`,
            method: "get",
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.DOWNLOAD.DETAILS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.DOWNLOAD.DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_contact_page_details = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.CONTACT_US.DETAILS.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.CONTACT_US.DETAILS.URL}/${action.payload.slug}`,
            method: "get",
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.CONTACT_US.DETAILS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.CONTACT_US.DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};

export const submit_concat_query = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.CONTACT_US.APPLY.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.CONTACT_US.APPLY.URL}`,
            method: "post",
            data: action.payload,
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.CONTACT_US.APPLY.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.CONTACT_US.APPLY.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_address_list = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.ADDRESS.LIST.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.ADDRESS.LIST.URL}`,
            method: "get",
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.ADDRESS.LIST.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.ADDRESS.LIST.REJECTED,
            payload: errorObject.data
        });
    }
};


export const fetch_accreditations_list = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.ACCREDITATIONS.LIST.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.ACCREDITATIONS.LIST.URL}`,
            method: "get",
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.ACCREDITATIONS.LIST.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.ACCREDITATIONS.LIST.REJECTED,
            payload: errorObject.data
        });
    }
};


export const fetch_news_list = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.NEWS.LIST.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.NEWS.LIST.URL}`,
            method: "get",
            params: action.payload,
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.NEWS.LIST.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.NEWS.LIST.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_news_details = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.NEWS.DETAILS.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.NEWS.DETAILS.URL}/${action.payload.slug}`,
            method: "get",
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.NEWS.DETAILS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.NEWS.DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};

export const save_customer_feedback = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.CUSTOMER_FEEDBACK.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.CUSTOMER_FEEDBACK.URL}`,
            method: "post",
            data: action.payload,
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.CUSTOMER_FEEDBACK.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.CUSTOMER_FEEDBACK.REJECTED,
            payload: errorObject.data
        });
    }
};

export const save_customer_complain = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.CUSTOMER_COMPLAIN.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.CUSTOMER_COMPLAIN.URL}`,
            method: "post",
            data: action.payload,
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.CUSTOMER_COMPLAIN.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.CUSTOMER_COMPLAIN.REJECTED,
            payload: errorObject.data
        });
    }
};



export const fetch_seminars_list = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.SEMINARS.LIST.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.SEMINARS.LIST.URL}`,
            method: "get",
            params: action.payload,
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.SEMINARS.LIST.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.SEMINARS.LIST.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_seminars_details = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.SEMINARS.DETAILS.PENDING
    });
    try {
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.SEMINARS.DETAILS.URL}/${action.payload.slug}`,
            method: "get",
            responseType: 'json'
        });
        // // //console.log("response.data", response.data);
        yield put({
            type: API_FRONTEND.PAGES.SEMINARS.DETAILS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.SEMINARS.DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};


export const fetch_new_initialtive_list = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.NEW_INITIATIVES.LIST.PENDING
    });
    try {
       
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.NEW_INITIATIVES.LIST.URL}`,
            method: "get",
            responseType: 'json',
            params: action.payload,
            headers: {
                "content-type": "application/json"
            }
        });

        yield put({
            type: API_FRONTEND.PAGES.NEW_INITIATIVES.LIST.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.NEW_INITIATIVES.LIST.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_new_initialtive_details = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.NEW_INITIATIVES.DETAILS.PENDING
    });
    try {
        
        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.NEW_INITIATIVES.DETAILS.URL}/${action.payload.slug}`,
            method: "get",
            responseType: 'json',
            headers: {
                "content-type": "application/json"
            }
        });
        yield put({
            type: API_FRONTEND.PAGES.NEW_INITIATIVES.DETAILS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.NEW_INITIATIVES.DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};

export const fetch_new_initialtive_meta_details = function* (action) {
    yield put({
        type: API_FRONTEND.PAGES.NEW_INITIATIVES.META_DETAILS.PENDING
    });
    try {

        let response = yield reqToAPI({
            url: `${API_FRONTEND.PAGES.NEW_INITIATIVES.META_DETAILS.URL}`,
            method: "get",
            responseType: 'json',
            headers: {
                "content-type": "application/json"
            }
        });
        yield put({
            type: API_FRONTEND.PAGES.NEW_INITIATIVES.META_DETAILS.FULLFILLED,
            payload: response.data
        });
    } catch (error) {
        //console.log("error", { ...error });
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        //console.log('errorObject', errorObject.data);
        //console.log('error', error.message);
        yield put({
            type: API_FRONTEND.PAGES.NEW_INITIATIVES.META_DETAILS.REJECTED,
            payload: errorObject.data
        });
    }
};