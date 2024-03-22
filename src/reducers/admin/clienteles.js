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
    details: {},
    metaDetails: {},
    dropdownList: [],
    page: 1,
    total: 0,
    totalPages: 0,
    redirectTo: null,
    projects: {
        processing: false,
        error: false,
        errors: [],
        message: '',
        list: [],
        details: {},
        page: 1,
        total: 0,
        totalPages: 0,
        redirectTo: null
    }
};

export const Clienteles_Reducers = (state = initialState, action) => {
    switch (action.type) {

        case API.CLIENTELE.CLIENTS_DROPDOWN_LIST.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.dropdownList = [];
            state.redirectTo = null;
            state.projects.error = false;
            state.projects.errors = [];
            state.projects.message = "";
            state.projects.list = [];
            state.projects.redirectTo = null;
            return { ...state };
        case API.CLIENTELE.CLIENTS_DROPDOWN_LIST.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.dropdownList = action.payload.list;
            state.redirectTo = null;
            return { ...state };
        case API.CLIENTELE.CLIENTS_DROPDOWN_LIST.REJECTED:
            state.processing = false;
            state.error = true;
            state.message = action.payload.message;
            state.dropdownList = [];
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

        case API.CLIENTELE.LIST.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.list = [];
            state.redirectTo = null;
            return { ...state };
        case API.CLIENTELE.LIST.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.total = action.payload.totalFound;
            state.totalPages = action.payload.totalPages;
            state.list = action.payload.list;
            state.redirectTo = null;
            return { ...state };
        case API.CLIENTELE.LIST.REJECTED:
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

        case API.CLIENTELE.ADD.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.redirectTo = null;
            return { ...state };
        case API.CLIENTELE.ADD.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.redirectTo = '/admin/clienteles/list';
            toast.success(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            return { ...state };
        case API.CLIENTELE.ADD.REJECTED:
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

        case API.CLIENTELE.DETAILS.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.details = {};
            state.redirectTo = null;
            return { ...state };
        case API.CLIENTELE.DETAILS.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.details = { ...action.payload.details };
            state.redirectTo = null;
            return { ...state };
        case API.CLIENTELE.DETAILS.REJECTED:
            state.processing = false;
            state.error = true;
            state.message = action.payload.message;
            state.details = {};
            state.errors = action.payload.errors;
            state.redirectTo = null;
            if (action.payload.tokenExpired) {
                state.redirectTo = `/admin/login`;
                localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
                localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            }
            toast.error(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            return { ...state };

        case API.CLIENTELE.UPDATE.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.redirectTo = null;
            return { ...state };
        case API.CLIENTELE.UPDATE.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.redirectTo = "/admin/clienteles/list";
            toast.success(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            return { ...state };
        case API.CLIENTELE.UPDATE.REJECTED:
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

        case API.CLIENTELE.STATUS_UPDATE.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.redirectTo = null;
            return { ...state };
        case API.CLIENTELE.STATUS_UPDATE.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.redirectTo = null;
            state.list = state.list.map((row)=>{
                return row.id === action.payload.updateRecord.id ?action.payload.updateRecord : row;
            });

            toast.success(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            return { ...state };
        case API.CLIENTELE.STATUS_UPDATE.REJECTED:
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

        case API.CLIENTELE.META_DETAILS.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.metaDetails = {};
            state.redirectTo = null;
            return { ...state };
        case API.CLIENTELE.META_DETAILS.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.metaDetails = { ...action.payload.details };
            state.redirectTo = null;
            return { ...state };
        case API.CLIENTELE.META_DETAILS.REJECTED:
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

        case API.CLIENTELE.META_UPDATE.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.redirectTo = null;
            return { ...state };
        case API.CLIENTELE.META_UPDATE.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.redirectTo = null;
            toast.success(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            return { ...state };
        case API.CLIENTELE.META_UPDATE.REJECTED:
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

        case API.CLIENTELE.PROJECTS_LIST.PENDING:
            state.projects.processing = true;
            state.projects.error = false;
            state.projects.errors = [];
            state.projects.message = "";
            state.projects.list = [];
            state.projects.redirectTo = null;
            return { ...state };
        case API.CLIENTELE.PROJECTS_LIST.FULLFILLED:
            state.projects.processing = false;
            state.projects.error = false;
            state.projects.errors = [];
            state.projects.message = action.payload.message;
            state.projects.total = action.payload.totalFound;
            state.projects.totalPages = action.payload.totalPages;
            state.projects.list = action.payload.list;
            state.projects.redirectTo = null;
            return { ...state };
        case API.CLIENTELE.PROJECTS_LIST.REJECTED:
            state.projects.processing = false;
            state.projects.error = true;
            state.projects.message = action.payload.message;
            state.projects.list = [];
            state.projects.errors = action.payload.errors;
            state.projects.redirectTo = null;
            if (state.projects.errors) {
                for (const [key, value] of Object.entries(state.projects.errors)) {
                    toast.error(`${key}: ${value}`, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
                }
            }
            toast.error(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            if (action.payload.tokenExpired) {
                state.projects.redirectTo = `/admin/login`;
                localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
                localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            }
            return { ...state };

        case API.CLIENTELE.PROJECTS_DETAILS.PENDING:
            state.projects.processing = true;
            state.projects.error = false;
            state.projects.errors = [];
            state.projects.message = "";
            state.projects.details = {};
            state.projects.redirectTo = null;
            return { ...state };
        case API.CLIENTELE.PROJECTS_DETAILS.FULLFILLED:
            state.projects.processing = false;
            state.projects.error = false;
            state.projects.errors = [];
            state.projects.message = action.payload.message;
            state.projects.details = { ...action.payload.details };
            state.projects.redirectTo = null;
            return { ...state };
        case API.CLIENTELE.PROJECTS_DETAILS.REJECTED:
            state.projects.processing = false;
            state.projects.error = true;
            state.projects.message = action.payload.message;
            state.projects.details = {};
            state.projects.errors = action.payload.errors;
            state.projects.redirectTo = null;
            if (state.projects.errors) {
                for (const [key, value] of Object.entries(state.projects.errors)) {
                    toast.error(`${key}: ${value}`, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
                }
            }
            toast.error(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            if (action.payload.tokenExpired) {
                state.projects.redirectTo = `/admin/login`;
                localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
                localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            }
            return { ...state };

        case API.CLIENTELE.PROJECTS_CREATE.PENDING:
            state.projects.processing = true;
            state.projects.error = false;
            state.projects.errors = [];
            state.projects.message = "";
            state.projects.redirectTo = null;
            return { ...state };
        case API.CLIENTELE.PROJECTS_CREATE.FULLFILLED:
            state.projects.processing = false;
            state.projects.error = false;
            state.projects.errors = [];
            state.projects.message = action.payload.message;
            state.projects.total = 0;
            state.projects.totalPages = 0;
            state.projects.list = [];
            state.projects.redirectTo = `/admin/client-projects/list/${action.payload['client-id']}`;
            return { ...state };
        case API.CLIENTELE.PROJECTS_CREATE.REJECTED:
            state.projects.processing = false;
            state.projects.error = true;
            state.projects.message = action.payload.message;
            state.projects.errors = action.payload.errors;
            state.projects.redirectTo = null;
            if (state.projects.errors) {
                for (const [key, value] of Object.entries(state.projects.errors)) {
                    toast.error(`${key}: ${value}`, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
                }
            }
            toast.error(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            if (action.payload.tokenExpired) {
                state.projects.redirectTo = `/admin/login`;
                localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
                localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            }
            return { ...state };

        case API.CLIENTELE.PROJECTS_UPDATE.PENDING:
            state.projects.processing = true;
            state.projects.error = false;
            state.projects.errors = [];
            state.projects.message = "";
            state.projects.redirectTo = null;
            return { ...state };
        case API.CLIENTELE.PROJECTS_UPDATE.FULLFILLED:
            state.projects.processing = false;
            state.projects.error = false;
            state.projects.errors = [];
            state.projects.message = action.payload.message;
            state.projects.total = 0;
            state.projects.totalPages = 0;
            state.projects.list = [];
            state.projects.redirectTo = `/admin/client-projects/list/${action.payload['client-id']}`;
            return { ...state };
        case API.CLIENTELE.PROJECTS_UPDATE.REJECTED:
            state.projects.processing = false;
            state.projects.error = true;
            state.projects.message = action.payload.message;
            state.projects.errors = action.payload.errors;
            state.projects.redirectTo = null;
            if (state.projects.errors) {
                for (const [key, value] of Object.entries(state.projects.errors)) {
                    toast.error(`${key}: ${value}`, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
                }
            }
            toast.error(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            if (action.payload.tokenExpired) {
                state.projects.redirectTo = `/admin/login`;
                localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
                localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            }
            return { ...state };

        case API.CLIENTELE.PROJECTS_UPDATE_STATUS.PENDING:
            state.projects.processing = true;
            state.projects.error = false;
            state.projects.errors = [];
            state.projects.message = "";
            state.projects.redirectTo = null;
            return { ...state };
        case API.CLIENTELE.PROJECTS_UPDATE_STATUS.FULLFILLED:
            state.projects.processing = false;
            state.projects.error = false;
            state.projects.errors = [];
            state.projects.message = action.payload.message;
            state.projects.total = 0;
            state.projects.totalPages = 0;
            state.projects.list = state.projects.list.map((row) => {return row.id === action.payload.updateRecord.id ? action.payload.updateRecord : row});
            state.projects.redirectTo = null;
            return { ...state };
        case API.CLIENTELE.PROJECTS_UPDATE_STATUS.REJECTED:
            state.projects.processing = false;
            state.projects.error = true;
            state.projects.message = action.payload.message;
            state.projects.errors = action.payload.errors;
            state.projects.redirectTo = null;
            if (state.projects.errors) {
                for (const [key, value] of Object.entries(state.projects.errors)) {
                    toast.error(`${key}: ${value}`, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
                }
            }
            toast.error(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            if (action.payload.tokenExpired) {
                state.projects.redirectTo = `/admin/login`;
                localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
                localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            }
            return { ...state };

        default:
            return { ...state };
    }
};

