import {
    API_FRONTEND
} from "../../constants/API_Constants";
import * as APP_CONSTANTS from "../../constants/Constants";
import {
    toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


const userLoginDetails = {
    processing: false,
    error: false,
    errors: [],
    message: '',
    is_loggedin: false,
    refreshToken: null,
    accessToken: null,
    redirectTo: null,
    forgetPasswordUsername: null
};

export const Authentication_Reducers = (state = userLoginDetails, action) => {
    switch (action.type) {
        case API_FRONTEND.AUTH.REGISTER.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.is_loggedin = false;
            state.redirectTo = null;
            state.accessToken = null;
            state.refreshToken = null;
            return {
                ...state
            };
        case API_FRONTEND.AUTH.REGISTER.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.is_loggedin = true;
            state.redirectTo = '/profile';
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            localStorage.setItem(APP_CONSTANTS.USER_ACCESS_TOKEN, state.accessToken);
            localStorage.setItem(APP_CONSTANTS.USER_REFREASH_TOKEN, state.refreshToken);
            toast.success(action.payload.message, {
                position: toast.POSITION.TOP_RIGHT,
                pauseOnFocusLoss: false
            });
            return {
                ...state
            };
        case API_FRONTEND.AUTH.REGISTER.REJECTED:
            state.processing = false;
            state.error = true;
            state.message = action.payload.message;
            state.is_loggedin = true;
            state.redirectTo = null;
            state.errors = action.payload.errors;
            state.accessToken = null;
            state.refreshToken = null;
            return {
                ...state
            };

        case API_FRONTEND.AUTH.LOGIN.WITH_PASSWORD.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.is_loggedin = false;
            state.redirectTo = null;
            state.accessToken = null;
            state.refreshToken = null;
            return {
                ...state
            };
        case API_FRONTEND.AUTH.LOGIN.WITH_PASSWORD.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.is_loggedin = true;
            state.redirectTo = '/profile';
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            localStorage.setItem(APP_CONSTANTS.USER_ACCESS_TOKEN, state.accessToken);
            localStorage.setItem(APP_CONSTANTS.USER_REFREASH_TOKEN, state.refreshToken);
            toast.success(action.payload.message, {
                position: toast.POSITION.TOP_RIGHT,
                pauseOnFocusLoss: false
            })
            return {
                ...state
            };
        case API_FRONTEND.AUTH.LOGIN.WITH_PASSWORD.REJECTED:
            state.processing = false;
            state.error = true;
            state.message = action.payload.message;
            state.is_loggedin = false;
            state.redirectTo = null;
            state.errors = action.payload.errors;
            state.accessToken = null;
            state.refreshToken = null;
            toast.error(action.payload.message, {
                position: toast.POSITION.TOP_RIGHT,
                pauseOnFocusLoss: false
            })
            return {
                ...state
            };

        case API_FRONTEND.AUTH.LOGIN.VERIFY_TOKEN.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.is_loggedin = false;
            state.redirectTo = null;
            return {
                ...state
            };
        case API_FRONTEND.AUTH.LOGIN.VERIFY_TOKEN.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            // state.message = action.payload.message;
            state.is_loggedin = true;
            state.redirectTo = null;
            // state.accessToken = action.payload.accessToken;
            // state.refreshToken = action.payload.refreshToken;
            return {
                ...state
            };
        case API_FRONTEND.AUTH.LOGIN.VERIFY_TOKEN.REJECTED:
            state.processing = false;
            state.error = true;
            state.message = action.payload.message;
            state.is_loggedin = false;
            state.redirectTo = '/login';
            // state.errors = action.payload.errors;
            // state.accessToken = null;
            // state.refreshToken = null;

            if (action.payload.tokenExpired) {
                localStorage.removeItem(APP_CONSTANTS.USER_ACCESS_TOKEN);
                localStorage.removeItem(APP_CONSTANTS.USER_REFREASH_TOKEN);
                toast.error(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    pauseOnFocusLoss: false
                })
            }
            return {
                ...state
            };

        case API_FRONTEND.AUTH.LOGIN.SIGNOUT.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.is_loggedin = false;
            state.redirectTo = null;
            state.accessToken = null;
            state.refreshToken = null;
            return {
                ...state
            };
        case API_FRONTEND.AUTH.LOGIN.SIGNOUT.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.is_loggedin = false;
            state.redirectTo = '/login';
            state.accessToken = null;
            state.refreshToken = null;
            localStorage.removeItem(APP_CONSTANTS.USER_ACCESS_TOKEN);
            localStorage.removeItem(APP_CONSTANTS.USER_REFREASH_TOKEN);
            toast.success(action.payload.message, {
                position: toast.POSITION.TOP_RIGHT,
                pauseOnFocusLoss: false
            })
            return {
                ...state
            };
        case API_FRONTEND.AUTH.LOGIN.SIGNOUT.REJECTED:
            state.processing = false;
            state.error = true;
            state.message = action.payload.message;
            state.is_loggedin = true;
            state.redirectTo = null;
            state.errors = action.payload.errors;
            state.accessToken = null;
            state.refreshToken = null;
            return {
                ...state
            };


        case API_FRONTEND.AUTH.FORGET_PASSWORD.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.redirectTo = null;
            state.forgetPasswordUsername = null;
            return {
                ...state
            };
        case API_FRONTEND.AUTH.FORGET_PASSWORD.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.forgetPasswordUsername = action.payload.username;
            state.redirectTo = null;
            toast.success(action.payload.message, {
                position: toast.POSITION.TOP_RIGHT,
                pauseOnFocusLoss: false
            })
            return {
                ...state
            };
        case API_FRONTEND.AUTH.FORGET_PASSWORD.REJECTED:
            state.processing = false;
            state.error = true;
            state.message = action.payload.message;
            state.errors = action.payload.errors;
            state.forgetPasswordUsername = null;
            toast.error(action.payload.message, {
                position: toast.POSITION.TOP_RIGHT,
                pauseOnFocusLoss: false
            })
            return {
                ...state
            };

        case API_FRONTEND.AUTH.VERIFY_FORGET_PASSWORD.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.redirectTo = null;
            return {
                ...state
            };
        case API_FRONTEND.AUTH.VERIFY_FORGET_PASSWORD.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = action.payload.message;
            state.forgetPasswordUsername = null;
            state.redirectTo = '/login';
            toast.success(action.payload.message, {
                position: toast.POSITION.TOP_RIGHT,
                pauseOnFocusLoss: false
            })
            return {
                ...state
            };
        case API_FRONTEND.AUTH.VERIFY_FORGET_PASSWORD.REJECTED:
            state.processing = false;
            state.error = true;
            state.message = action.payload.message;
            state.errors = action.payload.errors;
            toast.error(action.payload.message, {
                position: toast.POSITION.TOP_RIGHT,
                pauseOnFocusLoss: false
            })
            return {
                ...state
            };

        case API_FRONTEND.AUTH.RESET_FORGET_PASSWORD_FORM.PENDING:
            state.processing = true;
            state.error = false;
            state.errors = [];
            state.message = "";
            state.redirectTo = null;
            return {
                ...state
            };
        case API_FRONTEND.AUTH.RESET_FORGET_PASSWORD_FORM.FULLFILLED:
            state.processing = false;
            state.error = false;
            state.errors = [];
            state.message = '';
            state.forgetPasswordUsername = null;
            state.redirectTo = null;
            return {
                ...state
            };
        case API_FRONTEND.AUTH.RESET_FORGET_PASSWORD_FORM.REJECTED:
            state.processing = false;
            state.error = true;
            return {
                ...state
            };

        default:
            return {
                ...state
            };
    }
};