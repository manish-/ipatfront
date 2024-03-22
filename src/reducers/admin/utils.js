import API from "../../constants/API_Constants";
import * as APP_CONSTANTS from "../../constants/Constants";
import { toast } from 'react-toastify';
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
    district: {
        processing: false,
        error: false,
        errors: [],
        message: '',
        list: [],
        redirectTo: null
    },
    sectors: {
        processing: false,
        error: false,
        errors: [],
        message: '',
        list: [],
        redirectTo: null
    },
    project_types: {
        processing: false,
        error: false,
        errors: [],
        message: '',
        list: [],
        redirectTo: null
    },
    upload_file: {
        processing: false,
        error: false,
        errors: [],
        message: '',
        file_url: null,
        redirectTo: null,
        editorId: null
    },
    page_content: {
        processing: false,
        error: false,
        errors: [],
        message: '',
        details: {},
        redirectTo: null
    },
    page_content_update: {
        processing: false,
        error: false,
        errors: [],
        message: '',
        redirectTo: null
    }
};

export const Utils_Reducers = (state = initialState, action) => {
    switch (action.type) {
        case API.UTILS.STATES.PENDING:
            state.states.processing = true;
            state.states.error = false;
            state.states.errors = [];
            state.states.message = "";
            state.states.list = [];
            state.states.redirectTo = null;
            return { ...state };
        case API.UTILS.STATES.FULLFILLED:
            state.states.processing = false;
            state.states.error = false;
            state.states.errors = [];
            state.states.message = action.payload.message;
            state.states.list = action.payload.states;
            state.states.redirectTo = null;
            return { ...state };
        case API.UTILS.STATES.REJECTED:
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
            if (action.payload.tokenExpired) {
                state.states.redirectTo = `/admin/login`;
                localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
                localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            }
            return { ...state };

        case API.UTILS.DISTRICT.PENDING:
            state.district.processing = true;
            state.district.error = false;
            state.district.errors = [];
            state.district.message = "";
            state.district.list = [];
            state.district.redirectTo = null;
            return { ...state };
        case API.UTILS.DISTRICT.FULLFILLED:
            state.district.processing = false;
            state.district.error = false;
            state.district.errors = [];
            state.district.message = action.payload.message;
            state.district.list = action.payload.list;
            state.district.redirectTo = null;
            return { ...state };
        case API.UTILS.DISTRICT.REJECTED:
            state.district.processing = false;
            state.district.error = true;
            state.district.message = action.payload.message;
            state.district.list = [];
            state.district.errors = action.payload.errors;
            state.district.redirectTo = null;
            if (state.district.errors) {
                for (const [key, value] of Object.entries(state.district.errors)) {
                    toast.error(`${key}: ${value}`, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
                }
            }
            toast.error(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            if (action.payload.tokenExpired) {
                state.district.redirectTo = `/admin/login`;
                localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
                localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            }
            return { ...state };

        case API.UTILS.PROJECT_TYPES.PENDING:
            state.project_types.processing = true;
            state.project_types.error = false;
            state.project_types.errors = [];
            state.project_types.message = "";
            state.project_types.list = [];
            state.project_types.redirectTo = null;
            return { ...state };
        case API.UTILS.PROJECT_TYPES.FULLFILLED:
            state.project_types.processing = false;
            state.project_types.error = false;
            state.project_types.errors = [];
            state.project_types.message = action.payload.message;
            state.project_types.list = action.payload.list;
            state.project_types.redirectTo = null;
            return { ...state };
        case API.UTILS.PROJECT_TYPES.REJECTED:
            state.project_types.processing = false;
            state.project_types.error = true;
            state.project_types.message = action.payload.message;
            state.project_types.list = [];
            state.project_types.errors = action.payload.errors;
            state.project_types.redirectTo = null;
            if (state.project_types.errors) {
                for (const [key, value] of Object.entries(state.project_types.errors)) {
                    toast.error(`${key}: ${value}`, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
                }
            }
            toast.error(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            if (action.payload.tokenExpired) {
                state.project_types.redirectTo = `/admin/login`;
                localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
                localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            }
            return { ...state };

        case API.UTILS.SECTORS.PENDING:
            state.sectors.processing = true;
            state.sectors.error = false;
            state.sectors.errors = [];
            state.sectors.message = "";
            state.sectors.list = [];
            state.sectors.redirectTo = null;
            return { ...state };
        case API.UTILS.SECTORS.FULLFILLED:
            state.sectors.processing = false;
            state.sectors.error = false;
            state.sectors.errors = [];
            state.sectors.message = action.payload.message;
            state.sectors.list = action.payload.list;
            state.sectors.redirectTo = null;
            return { ...state };
        case API.UTILS.SECTORS.REJECTED:
            state.sectors.processing = false;
            state.sectors.error = true;
            state.sectors.message = action.payload.message;
            state.sectors.list = [];
            state.sectors.errors = action.payload.errors;
            state.sectors.redirectTo = null;
            if (state.sectors.errors) {
                for (const [key, value] of Object.entries(state.sectors.errors)) {
                    toast.error(`${key}: ${value}`, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
                }
            }
            toast.error(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            if (action.payload.tokenExpired) {
                state.sectors.redirectTo = `/admin/login`;
                localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
                localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            }
            return { ...state };

        case API.UTILS.UPLOAD_EDITOR_FILE.PENDING:
            state.upload_file.processing = true;
            state.upload_file.error = false;
            state.upload_file.errors = [];
            state.upload_file.message = "";
            state.upload_file.file_url = null;
            state.upload_file.redirectTo = null;
            state.upload_file.editorId = null;
            return { ...state };
        case API.UTILS.UPLOAD_EDITOR_FILE.FULLFILLED:
            //console.log("reducers ", action.payload);
            state.upload_file.processing = false;
            state.upload_file.error = false;
            state.upload_file.errors = [];
            state.upload_file.message = action.payload.message;
            state.upload_file.file_url = action.payload.file_url;
            state.upload_file.editorId = action.payload.editorId;
            state.upload_file.redirectTo = null;
            toast.success(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false });
            return { ...state };
        case API.UTILS.UPLOAD_EDITOR_FILE.REJECTED:
            state.upload_file.processing = false;
            state.upload_file.error = true;
            state.upload_file.message = action.payload.message;
            state.upload_file.errors = action.payload.errors;
            state.upload_file.redirectTo = null;
            state.upload_file.file_url = null;
            state.upload_file.editorId = null;
            if (state.upload_file.errors) {
                for (const [key, value] of Object.entries(state.upload_file.errors)) {
                    toast.error(`${key}: ${value}`, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
                }
            }
            toast.error(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            if (action.payload.tokenExpired) {
                state.upload_file.redirectTo = `/admin/login`;
                localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
                localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            }
            return { ...state };

        case API.UTILS.CLEAR_EDITOR_FILE.PENDING:
            state.upload_file.file_url = null;
            return { ...state };
        case API.UTILS.CLEAR_EDITOR_FILE.FULLFILLED:
            state.upload_file.file_url = null;
            return { ...state };
        case API.UTILS.CLEAR_EDITOR_FILE.REJECTED:
            state.upload_file.file_url = null;
            return { ...state };

        case API.UTILS.PAGE_CONTENT_DETAILS.PENDING:
            state.page_content.processing = true;
            state.page_content.error = false;
            state.page_content.errors = [];
            state.page_content.message = "";
            state.page_content.details = {};
            state.page_content.redirectTo = null;
            return { ...state };
        case API.UTILS.PAGE_CONTENT_DETAILS.FULLFILLED:
            state.page_content.processing = false;
            state.page_content.error = false;
            state.page_content.errors = [];
            state.page_content.message = action.payload.message;
            state.page_content.details = action.payload.details;
            state.page_content.redirectTo = null;
            return { ...state };
        case API.UTILS.PAGE_CONTENT_DETAILS.REJECTED:
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
            if (action.payload.tokenExpired) {
                state.page_content.redirectTo = `/admin/login`;
                localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
                localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            }
            return { ...state };

        case API.UTILS.PAGE_CONTENT_UPDATE.PENDING:
            state.page_content_update.processing = true;
            state.page_content_update.error = false;
            state.page_content_update.errors = [];
            state.page_content_update.message = "";
            state.page_content_update.redirectTo = null;
            return { ...state };
        case API.UTILS.PAGE_CONTENT_UPDATE.FULLFILLED:
            state.page_content_update.processing = false;
            state.page_content_update.error = false;
            state.page_content_update.errors = [];
            state.page_content_update.message = action.payload.message;
            state.page_content_update.redirectTo = null;
            toast.success(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false });
            return { ...state };
        case API.UTILS.PAGE_CONTENT_UPDATE.REJECTED:
            state.page_content_update.processing = false;
            state.page_content_update.error = true;
            state.page_content_update.message = action.payload.message;
            state.page_content_update.errors = action.payload.errors;
            state.page_content_update.redirectTo = null;
            if (state.page_content_update.errors) {
                for (const [key, value] of Object.entries(state.page_content_update.errors)) {
                    toast.error(`${key}: ${value}`, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
                }
            }
            toast.error(action.payload.message, { position: toast.POSITION.TOP_RIGHT, pauseOnFocusLoss: false })
            if (action.payload.tokenExpired) {
                state.page_content_update.redirectTo = `/admin/login`;
                localStorage.removeItem(APP_CONSTANTS.ACCESS_TOKEN);
                localStorage.removeItem(APP_CONSTANTS.REFREASH_TOKEN);
            }
            return { ...state };

        default:
            return { ...state };
    }
};

