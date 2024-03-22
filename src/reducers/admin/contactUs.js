import API from "../../constants/API_Constants";
import * as APP_CONSTANTS from "../../constants/Constants";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const initialState = {
    processing: false,
    error: false,
    errors: [],
    message: '',
    list: [],
    complains_list: [],
    complain_details: {},
    feedbacks_list: [],
    feedback_details: {},
    details: {},
    metaDetails: {},
    page: 1,
    total: 0,
    totalPages: 0,
    redirectTo: null
};

export const ContactUs_Reducers = (state = initialState, action) => {
    switch (action.type) {
        case API.CONTACT_US.ENQUIRY_LIST.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.list = [];
            state.redirectTo = null;
            return { ...state };
        case API.CONTACT_US.ENQUIRY_LIST.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.total = action.payload.totalFound;
            state.totalPages = action.payload.totalPages;
            state.list = action.payload.list;
            state.redirectTo = null;
            return { ...state };
        case API.CONTACT_US.ENQUIRY_LIST.REJECTED:
            state.processing = false;
            state.error = true;
            state.message = action.payload.message;
            state.list = [];
            state.errors = action.payload.errors;
            state.redirectTo = null;
            if (state.errors) {
                for (const [key, value] of Object.entries(state.errors)) {
                    toast.error(`${key}: ${value}`, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
                }
            }
            toast.error(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            if (action.payload.tokenExpired) {
                state.redirectTo = `/admin/login`;
                localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
                localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            }
            return { ...state };


        case API.CONTACT_US.CUSTOMER_COMPLAINS.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.complains_list = [];
            state.redirectTo = null;
            return { ...state };
        case API.CONTACT_US.CUSTOMER_COMPLAINS.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.total = action.payload.totalFound;
            state.totalPages = action.payload.totalPages;
            state.complains_list = action.payload.list;
            state.redirectTo = null;
            return { ...state };
        case API.CONTACT_US.CUSTOMER_COMPLAINS.REJECTED:
            state.processing = false;
            state.error = true;
            state.message = action.payload.message;
            state.complains_list = [];
            state.errors = action.payload.errors;
            state.redirectTo = null;
            if (state.errors) {
                for (const [key, value] of Object.entries(state.errors)) {
                    toast.error(`${key}: ${value}`, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
                }
            }
            toast.error(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            if (action.payload.tokenExpired) {
                state.redirectTo = `/admin/login`;
                localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
                localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            }
            return { ...state };

        case API.CONTACT_US.CUSTOMER_COMPLAIN_DETAILS.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.complain_details = {};
            state.redirectTo = null;
            return { ...state };
        case API.CONTACT_US.CUSTOMER_COMPLAIN_DETAILS.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.complain_details = { ...action.payload.details };
            state.redirectTo = null;
            return { ...state };
        case API.CONTACT_US.CUSTOMER_COMPLAIN_DETAILS.REJECTED:
            state.processing = false;
            state.error = true;
            state.message = action.payload.message;
            state.complain_details = {};
            state.errors = action.payload.errors;
            state.redirectTo = null;
            if (action.payload.tokenExpired) {
                state.redirectTo = `/admin/login`;
                localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
                localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            }
            toast.error(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            return { ...state };

        case API.CONTACT_US.CUSTOMER_FEEDBACKS.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.feedbacks_list = [];
            state.redirectTo = null;
            return { ...state };
        case API.CONTACT_US.CUSTOMER_FEEDBACKS.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.total = action.payload.totalFound;
            state.totalPages = action.payload.totalPages;
            state.feedbacks_list = action.payload.list;
            state.redirectTo = null;
            return { ...state };
        case API.CONTACT_US.CUSTOMER_FEEDBACKS.REJECTED:
            state.processing = false;
            state.error = true;
            state.message = action.payload.message;
            state.feedbacks_list = [];
            state.errors = action.payload.errors;
            state.redirectTo = null;
            if (state.errors) {
                for (const [key, value] of Object.entries(state.errors)) {
                    toast.error(`${key}: ${value}`, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
                }
            }
            toast.error(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            if (action.payload.tokenExpired) {
                state.redirectTo = `/admin/login`;
                localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
                localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            }
            return { ...state };

        case API.CONTACT_US.CUSTOMER_FEEDBACKS_DETAILS.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.feedback_details = {};
            state.redirectTo = null;
            return { ...state };
        case API.CONTACT_US.CUSTOMER_FEEDBACKS_DETAILS.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.feedback_details = { ...action.payload.details };
            state.redirectTo = null;
            return { ...state };
        case API.CONTACT_US.CUSTOMER_FEEDBACKS_DETAILS.REJECTED:
            state.processing = false;
            state.error = true;
            state.message = action.payload.message;
            state.feedback_details = {};
            state.errors = action.payload.errors;
            state.redirectTo = null;
            if (action.payload.tokenExpired) {
                state.redirectTo = `/admin/login`;
                localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
                localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            }
            toast.error(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            return { ...state };


        case API.CONTACT_US.META_DETAILS.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.metaDetails = {};
            state.redirectTo = null;
            return { ...state };
        case API.CONTACT_US.META_DETAILS.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.metaDetails = { ...action.payload.details };
            state.redirectTo = null;
            return { ...state };
        case API.CONTACT_US.META_DETAILS.REJECTED:
            state.processing = false;
            state.error = true;
            state.message = action.payload.message;
            state.metaDetails = {};
            state.errors = action.payload.errors;
            state.redirectTo = null;
            if (action.payload.tokenExpired) {
                state.redirectTo = `/admin/login`;
                localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
                localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            }
            toast.error(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            return { ...state };

        case API.CONTACT_US.META_UPDATE.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.redirectTo = null;
            return { ...state };
        case API.CONTACT_US.META_UPDATE.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.redirectTo = null;
            toast.success(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            return { ...state };
        case API.CONTACT_US.META_UPDATE.REJECTED:
            state.processing = false;
            state.error = true;
            state.message = action.payload.message;
            state.errors = action.payload.errors;
            state.redirectTo = null;
            if (state.errors) {
                for (const [key, value] of Object.entries(state.errors)) {
                    toast.error(`${key}: ${value}`, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
                }
            }
            toast.error(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            if (action.payload.tokenExpired) {
                state.redirectTo = `/admin/login`;
                localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
                localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            }
            return { ...state };


        default:
            return { ...state };
    }
};

