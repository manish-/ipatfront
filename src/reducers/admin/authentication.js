import API from "../../constants/API_Constants";
import * as APP_CONSTANTS from "../../constants/Constants";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const userLoginDetails = {
    processing: false,
    error: false,
    errors: [],
    message: '',
    is_loggedin: false,
    accessToken: localStorage.getItem(APP_CONSTANTS.ACCESS_TOKEN)?localStorage.getItem(APP_CONSTANTS.ACCESS_TOKEN):null,
    refreshToken: localStorage.getItem(APP_CONSTANTS.REFREASH_TOKEN)?localStorage.getItem(APP_CONSTANTS.REFREASH_TOKEN):null
};

export const Authentication_Reducers = (state = userLoginDetails, action) => {
    switch (action.type) {
        case API.LOGIN.WITH_PASSWORD.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.is_loggedin = false;
            state.accessToken = null;
            state.refreshToken = null;
            return { ...state };
        case API.LOGIN.WITH_PASSWORD.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.is_loggedin = true;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            localStorage.setItem(APP_CONSTANTS.ACCESS_TOKEN, state.accessToken);
            localStorage.setItem(APP_CONSTANTS.REFREASH_TOKEN, state.refreshToken);
            toast.success(action.payload.message, { position: toast.POSITION.TOP_RIGHT,pauseOnFocusLoss: false })
            return { ...state };
        case API.LOGIN.WITH_PASSWORD.REJECTED:
            state.processing = false;
            state.error = true;
            state.message = action.payload.message;
            state.is_loggedin = false;
            state.errors = action.payload.errors;
            state.accessToken = null;
            state.refreshToken = null;
            toast.error(action.payload.message, { position: toast.POSITION.TOP_RIGHT,pauseOnFocusLoss: false })
            return { ...state };
        case API.LOGIN.VERIFY_TOKEN.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.is_loggedin = false;
            state.accessToken = null;
            state.refreshToken = null;
            return { ...state };
        case API.LOGIN.VERIFY_TOKEN.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.is_loggedin = true;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            return { ...state };
        case API.LOGIN.VERIFY_TOKEN.REJECTED:
            state.processing = false;
            state.error = true;
            state.message = action.payload.message;
            state.is_loggedin = false;
            state.errors = action.payload.errors;
            state.accessToken = null;
            state.refreshToken = null;
            localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
            localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            return { ...state };

        case API.LOGIN.SIGNOUT.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.is_loggedin = false;
            state.accessToken = null;
            state.refreshToken = null;
            return { ...state };
        case API.LOGIN.SIGNOUT.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.is_loggedin = false;
            state.accessToken = null;
            state.refreshToken = null;
            localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
            localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            toast.success(action.payload.message, { position: toast.POSITION.TOP_RIGHT,pauseOnFocusLoss: false })
            return { ...state };
        case API.LOGIN.SIGNOUT.REJECTED:
            state.processing = false;
            state.error = true;
            state.message = action.payload.message;
            state.is_loggedin = true;
            state.errors = action.payload.errors;
            state.accessToken = null;
            state.refreshToken = null;
            return { ...state };


        default:
            return { ...state };
    }
};

