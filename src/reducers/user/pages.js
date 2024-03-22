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
    about_us: {
        processing: false,
        error: false,
        errors: [],
        message: '',
        details: {}
    },
    services: {
        details: {
            processing: false,
            error: false,
            errors: [],
            message: '',
            details: {}
        },
        list: {
            processing: false,
            error: false,
            errors: [],
            message: '',
            list: []
        }
    },
    seminars: {
        details: {
            processing: false,
            error: false,
            errors: [],
            message: '',
            details: {}
        },
        list: {
            processing: false,
            error: false,
            errors: [],
            message: '',
            list: [],
            total_pages: 0
        }
    },
    news: {
        details: {
            processing: false,
            error: false,
            errors: [],
            message: '',
            details: {}
        },
        list: {
            processing: false,
            error: false,
            errors: [],
            message: '',
            list: []
        }
    },
    projects: {
        details: {
            processing: false,
            error: false,
            errors: [],
            message: '',
            details: {}
        },
        sectors: {
            processing: false,
            error: false,
            errors: [],
            message: '',
            list: []
        },
        list: {
            processing: false,
            error: false,
            errors: [],
            message: '',
            list: []
        },
        list_by: {
            processing: false,
            error: false,
            errors: [],
            message: '',
            list: []
        },
        list_home: {
            processing: false,
            error: false,
            errors: [],
            message: '',
            list: []
        },
        project_details: {
            processing: false,
            error: false,
            errors: [],
            message: '',
            details: {}
        }
    },
    laboratory: {
        processing: false,
        error: false,
        errors: [],
        message: '',
        details: {}
    },
    clientele: {
        processing: false,
        error: false,
        errors: [],
        message: '',
        details: {}
    },
    clientele_project_list: {
        processing: false,
        error: false,
        errors: [],
        message: '',
        list: [],
        details: {},
        dataLoaded: false
    },
    careers: {
        details: {
            processing: false,
            error: false,
            errors: [],
            message: '',
            details: {}
        },
        meta_details: {
            processing: false,
            error: false,
            errors: [],
            message: '',
            details: {}
        },
        list: {
            processing: false,
            error: false,
            errors: [],
            message: '',
            list: []
        },
        apply: {
            processing: false,
            error: false,
            errors: [],
            message: '',
            reload: false
        }
    },
    faqs: {
        meta_details: {
            processing: false,
            error: false,
            errors: [],
            message: '',
            details: {}
        },
        list: {
            processing: false,
            error: false,
            errors: [],
            message: '',
            list: []
        }
    },
    download: {
        processing: false,
        error: false,
        errors: [],
        message: '',
        details: {}
    },
    accreditations: {
        list: {
            processing: false,
            error: false,
            errors: [],
            message: '',
            list: []
        }
    },
    contact: {
        details: {
            processing: false,
            error: false,
            errors: [],
            message: '',
            details: {}
        },
        apply: {
            processing: false,
            error: false,
            errors: [],
            message: '',
            reload: false
        }
    },
    customer_feedback: {
        processing: false,
        error: false,
        errors: [],
        message: '',
        reload: false
    },
    customer_complain: {
        processing: false,
        error: false,
        errors: [],
        message: '',
        reload: false
    },
    address: {
        list: {
            processing: false,
            error: false,
            errors: [],
            message: '',
            list: []
        }
    },
    new_initiative: {
        details: {
            processing: false,
            error: false,
            errors: [],
            message: '',
            details: {}
        },
        meta_details: {
            processing: false,
            error: false,
            errors: [],
            message: '',
            details: {}
        },
        list: {
            processing: false,
            error: false,
            errors: [],
            message: '',
            list: []
        }
    }

};

export const Pages_Reducers = (state = initialState, action) => {
    switch (action.type) {
        case API_FRONTEND.PAGES.ABOUT_US.DETAILS.PENDING:
            state.about_us.processing = true;
            state.about_us.error = false;
            state.about_us.errors = [];
            state.about_us.message = "";
            return {
                ...state
            };
        case API_FRONTEND.PAGES.ABOUT_US.DETAILS.FULLFILLED:
            state.about_us.processing = false;
            state.about_us.error = false;
            state.about_us.errors = [];
            state.about_us.message = action.payload.message;
            state.about_us.details = action.payload.details;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.ABOUT_US.DETAILS.REJECTED:
            state.about_us.processing = false;
            state.about_us.error = true;
            state.about_us.message = action.payload.message;
            state.about_us.details = {};
            return {
                ...state
            };

        case API_FRONTEND.PAGES.SERVICES.LIST.PENDING:
            state.services.list.processing = true;
            state.services.list.error = false;
            state.services.list.errors = [];
            state.services.list.message = "";
            return {
                ...state
            };
        case API_FRONTEND.PAGES.SERVICES.LIST.FULLFILLED:
            state.services.list.processing = false;
            state.services.list.error = false;
            state.services.list.errors = [];
            state.services.list.message = action.payload.message;
            state.services.list.list = action.payload.list;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.SERVICES.LIST.REJECTED:
            state.services.list.processing = false;
            state.services.list.error = true;
            state.services.list.message = action.payload.message;
            state.services.list.list = [];
            return {
                ...state
            };

        case API_FRONTEND.PAGES.SERVICES.DETAILS.PENDING:
            state.services.details.processing = true;
            state.services.details.error = false;
            state.services.details.errors = [];
            state.services.details.message = "";
            return {
                ...state
            };
        case API_FRONTEND.PAGES.SERVICES.DETAILS.FULLFILLED:
            state.services.details.processing = false;
            state.services.details.error = false;
            state.services.details.errors = [];
            state.services.details.message = action.payload.message;
            state.services.details.details = action.payload.details;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.SERVICES.DETAILS.REJECTED:
            state.services.details.processing = false;
            state.services.details.error = true;
            state.services.details.message = action.payload.message;
            state.services.details.details = {};
            return {
                ...state
            };


        case API_FRONTEND.PAGES.SEMINARS.LIST.PENDING:
            state.seminars.list.processing = true;
            state.seminars.list.error = false;
            state.seminars.list.errors = [];
            state.seminars.list.message = "";
            state.seminars.list.total_pages = 0;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.SEMINARS.LIST.FULLFILLED:
            state.seminars.list.processing = false;
            state.seminars.list.error = false;
            state.seminars.list.errors = [];
            state.seminars.list.message = action.payload.message;
            state.seminars.list.list = action.payload.list;
            state.seminars.list.total_pages = action.payload.totalPages;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.SEMINARS.LIST.REJECTED:
            state.seminars.list.processing = false;
            state.seminars.list.error = true;
            state.seminars.list.message = action.payload.message;
            state.seminars.list.list = [];
            state.seminars.list.total_pages = 0;
            return {
                ...state
            };

        case API_FRONTEND.PAGES.SEMINARS.DETAILS.PENDING:
            state.seminars.details.processing = true;
            state.seminars.details.error = false;
            state.seminars.details.errors = [];
            state.seminars.details.message = "";
            return {
                ...state
            };
        case API_FRONTEND.PAGES.SEMINARS.DETAILS.FULLFILLED:
            state.seminars.details.processing = false;
            state.seminars.details.error = false;
            state.seminars.details.errors = [];
            state.seminars.details.message = action.payload.message;
            state.seminars.details.details = action.payload.details;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.SEMINARS.DETAILS.REJECTED:
            state.seminars.details.processing = false;
            state.seminars.details.error = true;
            state.seminars.details.message = action.payload.message;
            state.seminars.details.details = {};
            return {
                ...state
            };



        case API_FRONTEND.PAGES.NEWS.LIST.PENDING:
            state.news.list.processing = true;
            state.news.list.error = false;
            state.news.list.errors = [];
            state.news.list.message = "";
            return {
                ...state
            };
        case API_FRONTEND.PAGES.NEWS.LIST.FULLFILLED:
            state.news.list.processing = false;
            state.news.list.error = false;
            state.news.list.errors = [];
            state.news.list.message = action.payload.message;
            state.news.list.list = action.payload.list;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.NEWS.LIST.REJECTED:
            state.news.list.processing = false;
            state.news.list.error = true;
            state.news.list.message = action.payload.message;
            state.news.list.list = [];
            return {
                ...state
            };

        case API_FRONTEND.PAGES.NEWS.DETAILS.PENDING:
            state.news.details.processing = true;
            state.news.details.error = false;
            state.news.details.errors = [];
            state.news.details.message = "";
            return {
                ...state
            };
        case API_FRONTEND.PAGES.NEWS.DETAILS.FULLFILLED:
            state.news.details.processing = false;
            state.news.details.error = false;
            state.news.details.errors = [];
            state.news.details.message = action.payload.message;
            state.news.details.details = action.payload.details;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.NEWS.DETAILS.REJECTED:
            state.news.details.processing = false;
            state.news.details.error = true;
            state.news.details.message = action.payload.message;
            state.news.details.details = {};
            return {
                ...state
            };

        case API_FRONTEND.PAGES.PROJECTS.LIST.PENDING:
            state.projects.list.processing = true;
            state.projects.list.error = false;
            state.projects.list.errors = [];
            state.projects.list.message = "";
            return {
                ...state
            };
        case API_FRONTEND.PAGES.PROJECTS.LIST.FULLFILLED:
            state.projects.list.processing = false;
            state.projects.list.error = false;
            state.projects.list.errors = [];
            state.projects.list.message = action.payload.message;
            state.projects.list.list = action.payload.list;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.PROJECTS.LIST.REJECTED:
            state.projects.list.processing = false;
            state.projects.list.error = true;
            state.projects.list.message = action.payload.message;
            state.projects.list.list = [];
            return {
                ...state
            };

        case API_FRONTEND.PAGES.PROJECTS.SECTORS_LIST.PENDING:
            state.projects.sectors.processing = true;
            state.projects.sectors.error = false;
            state.projects.sectors.errors = [];
            state.projects.sectors.message = "";
            return {
                ...state
            };
        case API_FRONTEND.PAGES.PROJECTS.SECTORS_LIST.FULLFILLED:
            state.projects.sectors.processing = false;
            state.projects.sectors.error = false;
            state.projects.sectors.errors = [];
            state.projects.sectors.message = action.payload.message;
            state.projects.sectors.list = action.payload.list;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.PROJECTS.SECTORS_LIST.REJECTED:
            state.projects.sectors.processing = false;
            state.projects.sectors.error = true;
            state.projects.sectors.message = action.payload.message;
            state.projects.sectors.list = [];
            return {
                ...state
            };


        case API_FRONTEND.PAGES.PROJECTS.DETAILS.PENDING:
            state.projects.details.processing = true;
            state.projects.details.error = false;
            state.projects.details.errors = [];
            state.projects.details.message = "";
            return {
                ...state
            };
        case API_FRONTEND.PAGES.PROJECTS.DETAILS.FULLFILLED:
            state.projects.details.processing = false;
            state.projects.details.error = false;
            state.projects.details.errors = [];
            state.projects.details.message = action.payload.message;
            state.projects.details.details = action.payload.details;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.PROJECTS.DETAILS.REJECTED:
            state.projects.details.processing = false;
            state.projects.details.error = true;
            state.projects.details.message = action.payload.message;
            state.projects.details.details = {};
            return {
                ...state
            };

        case API_FRONTEND.PAGES.PROJECTS.LIST_BY.PENDING:
            state.projects.list_by.processing = true;
            state.projects.list_by.error = false;
            state.projects.list_by.errors = [];
            state.projects.list_by.message = "";
            return {
                ...state
            };
        case API_FRONTEND.PAGES.PROJECTS.LIST_BY.FULLFILLED:
            state.projects.list_by.processing = false;
            state.projects.list_by.error = false;
            state.projects.list_by.errors = [];
            state.projects.list_by.message = action.payload.message;
            state.projects.list_by.list = action.payload.list;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.PROJECTS.LIST_BY.REJECTED:
            state.projects.list_by.processing = false;
            state.projects.list_by.error = true;
            state.projects.list_by.message = action.payload.message;
            state.projects.list_by.list = [];
            return {
                ...state
            };

        case API_FRONTEND.PAGES.PROJECTS.LIST_HOME.PENDING:
            state.projects.list_home.processing = true;
            state.projects.list_home.error = false;
            state.projects.list_home.errors = [];
            state.projects.list_home.message = "";
            return {
                ...state
            };
        case API_FRONTEND.PAGES.PROJECTS.LIST_HOME.FULLFILLED:
            state.projects.list_home.processing = false;
            state.projects.list_home.error = false;
            state.projects.list_home.errors = [];
            state.projects.list_home.message = action.payload.message;
            state.projects.list_home.list = action.payload.list;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.PROJECTS.LIST_HOME.REJECTED:
            state.projects.list_home.processing = false;
            state.projects.list_home.error = true;
            state.projects.list_home.message = action.payload.message;
            state.projects.list_home.list = [];
            return {
                ...state
            };


        case API_FRONTEND.PAGES.PROJECTS.PROJECT_DETAILS.PENDING:
            state.projects.project_details.processing = true;
            state.projects.project_details.error = false;
            state.projects.project_details.errors = [];
            state.projects.project_details.message = "";
            return {
                ...state
            };
        case API_FRONTEND.PAGES.PROJECTS.PROJECT_DETAILS.FULLFILLED:
            state.projects.project_details.processing = false;
            state.projects.project_details.error = false;
            state.projects.project_details.errors = [];
            state.projects.project_details.message = action.payload.message;
            state.projects.project_details.details = action.payload.details;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.PROJECTS.PROJECT_DETAILS.REJECTED:
            state.projects.project_details.processing = false;
            state.projects.project_details.error = true;
            state.projects.project_details.message = action.payload.message;
            state.projects.project_details.details = {};
            return {
                ...state
            };


        case API_FRONTEND.PAGES.LABORATORY.DETAILS.PENDING:
            state.laboratory.processing = true;
            state.laboratory.error = false;
            state.laboratory.errors = [];
            state.laboratory.message = "";

            return {
                ...state
            };
        case API_FRONTEND.PAGES.LABORATORY.DETAILS.FULLFILLED:
            state.laboratory.processing = false;
            state.laboratory.error = false;
            state.laboratory.errors = [];
            state.laboratory.message = action.payload.message;
            state.laboratory.details = action.payload.details;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.LABORATORY.DETAILS.REJECTED:
            state.laboratory.processing = false;
            state.laboratory.error = true;
            state.laboratory.message = action.payload.message;
            state.laboratory.details = {};
            return {
                ...state
            };

        case API_FRONTEND.PAGES.CLIENTELE.DETAILS.PENDING:
            state.clientele.processing = true;
            state.clientele.error = false;
            state.clientele.errors = [];
            state.clientele.message = "";

            state.clientele_project_list.error = false;
            state.clientele_project_list.errors = [];
            state.clientele_project_list.message = "";
            state.clientele_project_list.dataLoaded = false;
            state.clientele_project_list.details = {};

            return {
                ...state
            };
        case API_FRONTEND.PAGES.CLIENTELE.DETAILS.FULLFILLED:
            state.clientele.processing = false;
            state.clientele.error = false;
            state.clientele.errors = [];
            state.clientele.message = action.payload.message;
            state.clientele.details = action.payload.details;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.CLIENTELE.DETAILS.REJECTED:
            state.clientele.processing = false;
            state.clientele.error = true;
            state.clientele.message = action.payload.message;
            state.clientele.details = {};
            return {
                ...state
            };

        case API_FRONTEND.PAGES.CLIENTELE.PROJECT_LIST.PENDING:
            state.clientele_project_list.processing = true;
            state.clientele_project_list.error = false;
            state.clientele_project_list.errors = [];
            state.clientele_project_list.message = "";
            state.clientele_project_list.dataLoaded = false;
            state.clientele_project_list.details = {};
            return {
                ...state
            };
        case API_FRONTEND.PAGES.CLIENTELE.PROJECT_LIST.FULLFILLED:
            state.clientele_project_list.processing = false;
            state.clientele_project_list.error = false;
            state.clientele_project_list.errors = [];
            state.clientele_project_list.message = action.payload.message;
            state.clientele_project_list.list = action.payload.list;
            state.clientele_project_list.dataLoaded = true;
            state.clientele_project_list.details = action.payload.details;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.CLIENTELE.PROJECT_LIST.REJECTED:
            state.clientele_project_list.processing = false;
            state.clientele_project_list.error = true;
            state.clientele_project_list.message = action.payload.message;
            state.clientele_project_list.list = [];
            state.clientele_project_list.dataLoaded = false;
            state.clientele_project_list.details = {};
            return {
                ...state
            };

        case API_FRONTEND.PAGES.CLIENTELE.PROJECT_LIST_CLEAR.PENDING:
            state.clientele_project_list.processing = true;
            state.clientele_project_list.error = false;
            state.clientele_project_list.errors = [];
            state.clientele_project_list.message = "";
            state.clientele_project_list.dataLoaded = false;
            state.clientele_project_list.details = {};
            return {
                ...state
            };
        case API_FRONTEND.PAGES.CLIENTELE.PROJECT_LIST_CLEAR.FULLFILLED:
            state.clientele_project_list.processing = false;
            state.clientele_project_list.error = false;
            state.clientele_project_list.errors = [];
            state.clientele_project_list.message = "";
            state.clientele_project_list.list = [];
            state.clientele_project_list.dataLoaded = false;
            state.clientele_project_list.details = {};
            return {
                ...state
            };
        case API_FRONTEND.PAGES.CLIENTELE.PROJECT_LIST_CLEAR.REJECTED:
            state.clientele_project_list.processing = false;
            state.clientele_project_list.error = true;
            state.clientele_project_list.message = action.payload.message;
            state.clientele_project_list.list = [];
            state.clientele_project_list.dataLoaded = false;
            state.clientele_project_list.details = {};
            return {
                ...state
            };

        case API_FRONTEND.PAGES.CAREERS.LIST.PENDING:
            state.careers.list.processing = true;
            state.careers.list.error = false;
            state.careers.list.errors = [];
            state.careers.list.message = "";
            return {
                ...state
            };
        case API_FRONTEND.PAGES.CAREERS.LIST.FULLFILLED:
            state.careers.list.processing = false;
            state.careers.list.error = false;
            state.careers.list.errors = [];
            state.careers.list.message = action.payload.message;
            state.careers.list.list = action.payload.list;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.CAREERS.LIST.REJECTED:
            state.careers.list.processing = false;
            state.careers.list.error = true;
            state.careers.list.message = action.payload.message;
            state.careers.list.list = [];
            return {
                ...state
            };

        case API_FRONTEND.PAGES.CAREERS.DETAILS.PENDING:
            state.careers.details.processing = true;
            state.careers.details.error = false;
            state.careers.details.errors = [];
            state.careers.details.message = "";
            return {
                ...state
            };
        case API_FRONTEND.PAGES.CAREERS.DETAILS.FULLFILLED:
            state.careers.details.processing = false;
            state.careers.details.error = false;
            state.careers.details.errors = [];
            state.careers.details.message = action.payload.message;
            state.careers.details.details = action.payload.details;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.CAREERS.DETAILS.REJECTED:
            state.careers.details.processing = false;
            state.careers.details.error = true;
            state.careers.details.message = action.payload.message;
            state.careers.details.details = {};
            return {
                ...state
            };

        case API_FRONTEND.PAGES.CAREERS.APPLY.PENDING:
            state.careers.apply.processing = true;
            state.careers.apply.error = false;
            state.careers.apply.errors = [];
            state.careers.apply.message = "";
            state.careers.apply.reload = false;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.CAREERS.APPLY.FULLFILLED:
            state.careers.apply.processing = false;
            state.careers.apply.error = false;
            state.careers.apply.errors = [];
            state.careers.apply.message = action.payload.message;
            state.careers.apply.reload = true;
            toast.success(action.payload.message, { autoClose: 2000 });
            return {
                ...state
            };
        case API_FRONTEND.PAGES.CAREERS.APPLY.REJECTED:
            state.careers.apply.processing = false;
            state.careers.apply.error = true;
            state.careers.apply.errors = [];
            state.careers.apply.message = action.payload.message;
            state.careers.apply.reload = false;
            return {
                ...state
            };


        case API_FRONTEND.PAGES.CAREERS.META_DETAILS.PENDING:
            state.careers.meta_details.processing = true;
            state.careers.meta_details.error = false;
            state.careers.meta_details.errors = [];
            state.careers.meta_details.message = "";
            return {
                ...state
            };
        case API_FRONTEND.PAGES.CAREERS.META_DETAILS.FULLFILLED:
            state.careers.meta_details.processing = false;
            state.careers.meta_details.error = false;
            state.careers.meta_details.errors = [];
            state.careers.meta_details.message = action.payload.message;
            state.careers.meta_details.details = action.payload.details;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.CAREERS.META_DETAILS.REJECTED:
            state.careers.meta_details.processing = false;
            state.careers.meta_details.error = true;
            state.careers.meta_details.message = action.payload.message;
            state.careers.meta_details.meta_details = {};
            return {
                ...state
            };


        case API_FRONTEND.PAGES.FAQS.LIST.PENDING:
            state.faqs.list.processing = true;
            state.faqs.list.error = false;
            state.faqs.list.errors = [];
            state.faqs.list.message = "";
            return {
                ...state
            };
        case API_FRONTEND.PAGES.FAQS.LIST.FULLFILLED:
            state.faqs.list.processing = false;
            state.faqs.list.error = false;
            state.faqs.list.errors = [];
            state.faqs.list.message = action.payload.message;
            state.faqs.list.list = action.payload.list;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.FAQS.LIST.REJECTED:
            state.faqs.list.processing = false;
            state.faqs.list.error = true;
            state.faqs.list.message = action.payload.message;
            state.faqs.list.list = [];
            return {
                ...state
            };

        case API_FRONTEND.PAGES.FAQS.META_DETAILS.PENDING:
            state.faqs.meta_details.processing = true;
            state.faqs.meta_details.error = false;
            state.faqs.meta_details.errors = [];
            state.faqs.meta_details.message = "";
            return {
                ...state
            };
        case API_FRONTEND.PAGES.FAQS.META_DETAILS.FULLFILLED:
            state.faqs.meta_details.processing = false;
            state.faqs.meta_details.error = false;
            state.faqs.meta_details.errors = [];
            state.faqs.meta_details.message = action.payload.message;
            state.faqs.meta_details.details = action.payload.details;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.FAQS.META_DETAILS.REJECTED:
            state.faqs.meta_details.processing = false;
            state.faqs.meta_details.error = true;
            state.faqs.meta_details.message = action.payload.message;
            state.faqs.meta_details.meta_details = {};
            return {
                ...state
            };

        case API_FRONTEND.PAGES.DOWNLOAD.DETAILS.PENDING:
            state.download.processing = true;
            state.download.error = false;
            state.download.errors = [];
            state.download.message = "";

            return {
                ...state
            };
        case API_FRONTEND.PAGES.DOWNLOAD.DETAILS.FULLFILLED:
            state.download.processing = false;
            state.download.error = false;
            state.download.errors = [];
            state.download.message = action.payload.message;
            state.download.details = action.payload.details;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.DOWNLOAD.DETAILS.REJECTED:
            state.download.processing = false;
            state.download.error = true;
            state.download.message = action.payload.message;
            state.download.details = {};
            return {
                ...state
            };
        case API_FRONTEND.PAGES.ACCREDITATIONS.LIST.PENDING:
            state.accreditations.list.processing = true;
            state.accreditations.list.error = false;
            state.accreditations.list.errors = [];
            state.accreditations.list.message = "";
            return {
                ...state
            };
        case API_FRONTEND.PAGES.ACCREDITATIONS.LIST.FULLFILLED:
            state.accreditations.list.processing = false;
            state.accreditations.list.error = false;
            state.accreditations.list.errors = [];
            state.accreditations.list.message = action.payload.message;
            state.accreditations.list.list = action.payload.list;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.ACCREDITATIONS.LIST.REJECTED:
            state.accreditations.list.processing = false;
            state.accreditations.list.error = true;
            state.accreditations.list.message = action.payload.message;
            state.accreditations.list.list = [];
            return {
                ...state
            };

        case API_FRONTEND.PAGES.CONTACT_US.DETAILS.PENDING:
            state.contact.details.processing = true;
            state.contact.details.error = false;
            state.contact.details.errors = [];
            state.contact.details.message = "";
            return {
                ...state
            };
        case API_FRONTEND.PAGES.CONTACT_US.DETAILS.FULLFILLED:
            state.contact.details.processing = false;
            state.contact.details.error = false;
            state.contact.details.errors = [];
            state.contact.details.message = action.payload.message;
            state.contact.details.details = action.payload.details;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.CONTACT_US.DETAILS.REJECTED:
            state.contact.details.processing = false;
            state.contact.details.error = true;
            state.contact.details.message = action.payload.message;
            state.contact.details.details = {};
            return {
                ...state
            };

        case API_FRONTEND.PAGES.CONTACT_US.APPLY.PENDING:
            state.contact.apply.processing = true;
            state.contact.apply.error = false;
            state.contact.apply.errors = [];
            state.contact.apply.message = "";
            state.contact.apply.reload = false;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.CONTACT_US.APPLY.FULLFILLED:
            state.contact.apply.processing = false;
            state.contact.apply.error = false;
            state.contact.apply.errors = [];
            state.contact.apply.message = action.payload.message;
            state.contact.apply.reload = true;
            toast.success(action.payload.message, { autoClose: 2000 });
            return {
                ...state
            };
        case API_FRONTEND.PAGES.CONTACT_US.APPLY.REJECTED:
            state.contact.apply.processing = false;
            state.contact.apply.error = true;
            state.contact.apply.errors = [];
            state.contact.apply.message = action.payload.message;
            state.contact.apply.reload = false;
            return {
                ...state
            };

        case API_FRONTEND.PAGES.ADDRESS.LIST.PENDING:
            state.address.list.processing = true;
            state.address.list.error = false;
            state.address.list.errors = [];
            state.address.list.message = "";
            return {
                ...state
            };
        case API_FRONTEND.PAGES.ADDRESS.LIST.FULLFILLED:
            state.address.list.processing = false;
            state.address.list.error = false;
            state.address.list.errors = [];
            state.address.list.message = action.payload.message;
            state.address.list.list = action.payload.list;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.ADDRESS.LIST.REJECTED:
            state.address.list.processing = false;
            state.address.list.error = true;
            state.address.list.message = action.payload.message;
            state.address.list.list = [];
            return {
                ...state
            };


        case API_FRONTEND.PAGES.CUSTOMER_FEEDBACK.PENDING:
            state.customer_feedback.processing = true;
            state.customer_feedback.error = false;
            state.customer_feedback.errors = [];
            state.customer_feedback.message = "";
            state.customer_feedback.reload = false;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.CUSTOMER_FEEDBACK.FULLFILLED:
            state.customer_feedback.processing = false;
            state.customer_feedback.error = false;
            state.customer_feedback.errors = [];
            state.customer_feedback.message = action.payload.remark;
            state.customer_feedback.reload = true;
            console.log(action.payload);
            toast.success(action.payload.remark, { autoClose: 2000 });
            return {
                ...state
            };
        case API_FRONTEND.PAGES.CUSTOMER_FEEDBACK.REJECTED:
            state.customer_feedback.processing = false;
            state.customer_feedback.error = true;
            state.customer_feedback.errors = [];
            state.customer_feedback.message = action.payload.message;
            state.customer_feedback.reload = false;
            return {
                ...state
            };


        case API_FRONTEND.PAGES.CUSTOMER_COMPLAIN.PENDING:
            state.customer_complain.processing = true;
            state.customer_complain.error = false;
            state.customer_complain.errors = [];
            state.customer_complain.message = "";
            state.customer_complain.reload = false;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.CUSTOMER_COMPLAIN.FULLFILLED:
            state.customer_complain.processing = false;
            state.customer_complain.error = false;
            state.customer_complain.errors = [];
            state.customer_complain.message = action.payload.message;
            state.customer_complain.reload = true;
            toast.success(action.payload.message, { autoClose: 2000 });
            return {
                ...state
            };
        case API_FRONTEND.PAGES.CUSTOMER_COMPLAIN.REJECTED:
            state.customer_complain.processing = false;
            state.customer_complain.error = true;
            state.customer_complain.errors = [];
            state.customer_complain.message = action.payload.message;
            state.customer_complain.reload = false;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.NEW_INITIATIVES.LIST.PENDING:
            state.new_initiative.list.processing = true;
            state.new_initiative.list.error = false;
            state.new_initiative.list.errors = [];
            state.new_initiative.list.message = "";
            return {
                ...state
            };
        case API_FRONTEND.PAGES.NEW_INITIATIVES.LIST.FULLFILLED:
            state.new_initiative.list.processing = false;
            state.new_initiative.list.error = false;
            state.new_initiative.list.errors = [];
            state.new_initiative.list.message = action.payload.message;
            state.new_initiative.list.list = action.payload.list;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.NEW_INITIATIVES.LIST.REJECTED:
            state.new_initiative.list.processing = false;
            state.new_initiative.list.error = true;
            state.new_initiative.list.message = action.payload.message;
            state.new_initiative.list.list = [];
            return {
                ...state
            };

        case API_FRONTEND.PAGES.NEW_INITIATIVES.DETAILS.PENDING:
            state.new_initiative.details.processing = true;
            state.new_initiative.details.error = false;
            state.new_initiative.details.errors = [];
            state.new_initiative.details.message = "";
            return {
                ...state
            };
        case API_FRONTEND.PAGES.NEW_INITIATIVES.DETAILS.FULLFILLED:
            state.new_initiative.details.processing = false;
            state.new_initiative.details.error = false;
            state.new_initiative.details.errors = [];
            state.new_initiative.details.message = "";
            state.new_initiative.details.details = { ...action.payload.details };
            return {
                ...state
            };
        case API_FRONTEND.PAGES.NEW_INITIATIVES.DETAILS.REJECTED:
            state.new_initiative.details.processing = false;
            state.new_initiative.details.error = true;
            state.new_initiative.details.message = action.payload.message;
            state.new_initiative.details.details = {};
            return {
                ...state
            };


        case API_FRONTEND.PAGES.NEW_INITIATIVES.META_DETAILS.PENDING:
            state.new_initiative.meta_details.processing = true;
            state.new_initiative.meta_details.error = false;
            state.new_initiative.meta_details.errors = [];
            state.new_initiative.meta_details.message = "";
            return {
                ...state
            };
        case API_FRONTEND.PAGES.NEW_INITIATIVES.META_DETAILS.FULLFILLED:
            state.new_initiative.meta_details.processing = false;
            state.new_initiative.meta_details.error = false;
            state.new_initiative.meta_details.errors = [];
            state.new_initiative.meta_details.message = action.payload.message;
            state.new_initiative.meta_details.details = action.payload.details;
            return {
                ...state
            };
        case API_FRONTEND.PAGES.NEW_INITIATIVES.META_DETAILS.REJECTED:
            state.new_initiative.meta_details.processing = false;
            state.new_initiative.meta_details.error = true;
            state.new_initiative.meta_details.message = action.payload.message;
            state.new_initiative.meta_details.meta_details = {};
            return {
                ...state
            };


        default:
            return {
                ...state
            };
    }
};