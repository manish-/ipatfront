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
    page: 1,
    total: 0,
    totalPages: 0,
    redirectTo: null
};

export const Services_Reducers = (state = initialState, action) => {
    switch (action.type) {
        case API.SERVICES.LIST.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.list = [];
            state.redirectTo = null;
            return { ...state };
        case API.SERVICES.LIST.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.total = action.payload.totalFound;
            state.totalPages = action.payload.totalPages;
            state.list = action.payload.list;
            state.redirectTo = null;
            return { ...state };
        case API.SERVICES.LIST.REJECTED:
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

        case API.SERVICES.ADD.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.redirectTo = null;
            return { ...state };
        case API.SERVICES.ADD.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.redirectTo = '/admin/services/list';
            toast.success(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            return { ...state };
        case API.SERVICES.ADD.REJECTED:
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

        case API.SERVICES.DETAILS.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.details = {};
            state.redirectTo = null;
            return { ...state };
        case API.SERVICES.DETAILS.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.details = { ...action.payload.details };
            state.redirectTo = null;
            return { ...state };
        case API.SERVICES.DETAILS.REJECTED:
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

        case API.SERVICES.UPDATE.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.redirectTo = null;
            return { ...state };
        case API.SERVICES.UPDATE.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.redirectTo = "/admin/services/list";
            toast.success(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            return { ...state };
        case API.SERVICES.UPDATE.REJECTED:
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

        case API.SERVICES.STATUS_UPDATE.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.redirectTo = null;
            return { ...state };
        case API.SERVICES.STATUS_UPDATE.FULLFILLED:
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
        case API.SERVICES.STATUS_UPDATE.REJECTED:
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

