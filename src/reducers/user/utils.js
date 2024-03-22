import {
    API_FRONTEND
} from "../../constants/API_Constants";
import * as APP_CONSTANTS from "../../constants/Constants";
import {
    toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


const initialState = {
    states: {
        processing: false,
        error: false,
        errors: [],
        message: '',
        list: [],
        redirectTo: null
    },
    headerMenu: {
        processing: false,
        error: false,
        errors: [],
        message: '',
        menu: []
    },
    banners: {
        processing: false,
        error: false,
        errors: [],
        message: '',
        list: []
    },
    event: {
        processing: false,
        error: false,
        errors: [],
        message: '',
        details: { id: null }
    },
    page_content: {
        processing: false,
        error: false,
        errors: [],
        message: '',
        details: {},
        redirectTo: null
    }
};

export const Utils_Reducers = (state = initialState, action) => {
    switch (action.type) {

        case API_FRONTEND.UTILS.STATES.PENDING:
            state.states.processing = true;
            state.states.error = false;
            state.states.errors = [];
            state.states.message = "";
            state.states.list = [];
            state.states.redirectTo = null;
            return { ...state };
        case API_FRONTEND.UTILS.STATES.FULLFILLED:
            state.states.processing = false;
            state.states.error = false;
            state.states.errors = [];
            state.states.message = action.payload.message;
            state.states.list = action.payload.states;
            state.states.redirectTo = null;
            return { ...state };
        case API_FRONTEND.UTILS.STATES.REJECTED:
            state.states.processing = false;
            state.states.error = true;
            state.states.message = action.payload.message;
            state.states.list = [];
            state.states.errors = action.payload.errors;
            state.states.redirectTo = null;
            if (state.states.errors) {
                for (const [key, value] of Object.entries(state.states.errors)) {
                    toast.error(`${key}: ${value}`, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
                }
            }
            toast.error(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            return { ...state };

        case API_FRONTEND.UTILS.HEADER_MENU.PENDING:
            state.headerMenu.processing = true;
            state.headerMenu.error = false;
            state.headerMenu.errors = [];
            state.headerMenu.message = "";
            return {
                ...state
            };
        case API_FRONTEND.UTILS.HEADER_MENU.FULLFILLED:
            state.headerMenu.processing = false;
            state.headerMenu.error = false;
            state.headerMenu.errors = [];
            state.headerMenu.message = action.payload.message;
            state.headerMenu.menu = action.payload.header_menu;
            return {
                ...state
            };
        case API_FRONTEND.UTILS.HEADER_MENU.REJECTED:
            state.headerMenu.processing = false;
            state.headerMenu.error = true;
            state.headerMenu.message = action.payload.message;
            state.headerMenu.menu = [];
            return {
                ...state
            };


        case API_FRONTEND.UTILS.BANNERS.PENDING:
            state.banners.processing = true;
            state.banners.error = false;
            state.banners.errors = [];
            state.banners.message = "";
            return {
                ...state
            };
        case API_FRONTEND.UTILS.BANNERS.FULLFILLED:
            state.banners.processing = false;
            state.banners.error = false;
            state.banners.errors = [];
            state.banners.message = action.payload.message;
            state.banners.list = action.payload.list;
            return {
                ...state
            };
        case API_FRONTEND.UTILS.BANNERS.REJECTED:
            state.banners.processing = false;
            state.banners.error = true;
            state.banners.message = action.payload.message;
            state.banners.list = [];
            return {
                ...state
            };



        case API_FRONTEND.UTILS.HOME_EVENT_POPUP_DETAILS.PENDING:
            state.event.processing = true;
            state.event.error = false;
            state.event.errors = [];
            state.event.message = "";
            state.event.details = { id: null };
            return {
                ...state
            };
        case API_FRONTEND.UTILS.HOME_EVENT_POPUP_DETAILS.FULLFILLED:
            state.event.processing = false;
            state.event.error = false;
            state.event.errors = [];
            state.event.message = action.payload.message;
            state.event.details = action.payload.details;
            return {
                ...state
            };
        case API_FRONTEND.UTILS.HOME_EVENT_POPUP_DETAILS.REJECTED:
            state.event.processing = false;
            state.event.error = true;
            state.event.message = action.payload.message;
            state.event.details = { id: null };
            return {
                ...state
            };


        case API_FRONTEND.UTILS.PAGE_CONTENT_DETAILS.PENDING:
            state.page_content.processing = true;
            state.page_content.error = false;
            state.page_content.errors = [];
            state.page_content.message = "";
            state.page_content.details = {};
            state.page_content.redirectTo = null;
            return { ...state };
        case API_FRONTEND.UTILS.PAGE_CONTENT_DETAILS.FULLFILLED:
            state.page_content.processing = false;
            state.page_content.error = false;
            state.page_content.errors = [];
            state.page_content.message = action.payload.message;
            state.page_content.details = action.payload.details;
            state.page_content.redirectTo = null;
            return { ...state };
        case API_FRONTEND.UTILS.PAGE_CONTENT_DETAILS.REJECTED:
            state.page_content.processing = false;
            state.page_content.error = true;
            state.page_content.message = action.payload.message;
            state.page_content.details = {};
            state.page_content.errors = action.payload.errors;
            state.page_content.redirectTo = null;
            if (state.page_content.errors) {
                for (const [key, value] of Object.entries(state.page_content.errors)) {
                    toast.error(`${key}: ${value}`, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
                }
            }
            toast.error(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })

            return { ...state };


        default:
            return {
                ...state
            };
    }
};