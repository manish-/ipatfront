const API = {
    // URL_PREFIX: "http://localhost:5000/grc_india_api/api/v1/",
    URL_PREFIX: "https://api.grc-india.com/api/v1/",
    NO_IMAGE_FOUND: "/assets/images/noImage.jpg",
    LOGIN: {
        WITH_PASSWORD: {
            URL: "backend/auth/login",
            FETCH: "LOGIN_WITH_PASSWORD",
            PENDING: "LOGIN_WITH_PASSWORD_PENDING",
            FULLFILLED: "LOGIN_WITH_PASSWORD_FULLFILLED",
            REJECTED: "LOGIN_WITH_PASSWORD_REJECTED"
        },
        VERIFY_TOKEN: {
            URL: "backend/auth/verify-token",
            FETCH: "VERIFY_TOKEN",
            PENDING: "VERIFY_TOKEN_PENDING",
            FULLFILLED: "VERIFY_TOKEN_FULLFILLED",
            REJECTED: "VERIFY_TOKEN_REJECTED"
        },
        SIGNOUT: {
            URL: "backend/auth/signout",
            FETCH: "SIGNOUT",
            PENDING: "SIGNOUT_PENDING",
            FULLFILLED: "SIGNOUT_FULLFILLED",
            REJECTED: "SIGNOUT_REJECTED"
        }
    },
    ABOUT_US_PAGES: {
        LIST: {
            URL: "backend/about-us/list",
            FETCH: "ABOUT_US_PAGES_LIST",
            PENDING: "ABOUT_US_PAGES_LIST_PENDING",
            FULLFILLED: "ABOUT_US_PAGES_LIST_FULLFILLED",
            REJECTED: "ABOUT_US_PAGES_LIST_REJECTED"
        },
        ADD: {
            URL: "backend/about-us/create",
            FETCH: "ABOUT_US_PAGES_ADD",
            PENDING: "ABOUT_US_PAGES_ADD_PENDING",
            FULLFILLED: "ABOUT_US_PAGES_ADD_FULLFILLED",
            REJECTED: "ABOUT_US_PAGES_ADD_REJECTED"
        },
        DETAILS: {
            URL: "backend/about-us/details",
            FETCH: "ABOUT_US_PAGES_DETAILS",
            PENDING: "ABOUT_US_PAGES_DETAILS_PENDING",
            FULLFILLED: "ABOUT_US_PAGES_DETAILS_FULLFILLED",
            REJECTED: "ABOUT_US_PAGES_DETAILS_REJECTED"
        },
        UPDATE: {
            URL: "backend/about-us/update",
            FETCH: "ABOUT_US_PAGES_UPDATE",
            PENDING: "ABOUT_US_PAGES_UPDATE_PENDING",
            FULLFILLED: "ABOUT_US_PAGES_UPDATE_FULLFILLED",
            REJECTED: "ABOUT_US_PAGES_UPDATE_REJECTED"
        },
        STATUS_UPDATE: {
            URL: "backend/about-us/update-status",
            FETCH: "ABOUT_US_PAGES_STATUS_UPDATE",
            PENDING: "ABOUT_US_PAGES_STATUS_UPDATE_PENDING",
            FULLFILLED: "ABOUT_US_PAGES_STATUS_UPDATE_FULLFILLED",
            REJECTED: "ABOUT_US_PAGES_STATUS_UPDATE_REJECTED"
        }
    },
    NEWS: {
        LIST: {
            URL: "backend/news/list",
            FETCH: "NEWS_LIST",
            PENDING: "NEWS_LIST_PENDING",
            FULLFILLED: "NEWS_LIST_FULLFILLED",
            REJECTED: "NEWS_LIST_REJECTED"
        },
        ADD: {
            URL: "backend/news/create",
            FETCH: "NEWS_ADD",
            PENDING: "NEWS_ADD_PENDING",
            FULLFILLED: "NEWS_ADD_FULLFILLED",
            REJECTED: "NEWS_ADD_REJECTED"
        },
        DETAILS: {
            URL: "backend/news/details",
            FETCH: "NEWS_DETAILS",
            PENDING: "NEWS_DETAILS_PENDING",
            FULLFILLED: "NEWS_DETAILS_FULLFILLED",
            REJECTED: "NEWS_DETAILS_REJECTED"
        },
        UPDATE: {
            URL: "backend/news/update",
            FETCH: "NEWS_UPDATE",
            PENDING: "NEWS_UPDATE_PENDING",
            FULLFILLED: "NEWS_UPDATE_FULLFILLED",
            REJECTED: "NEWS_UPDATE_REJECTED"
        },
        STATUS_UPDATE: {
            URL: "backend/news/update-status",
            FETCH: "NEWS_STATUS_UPDATE",
            PENDING: "NEWS_STATUS_UPDATE_PENDING",
            FULLFILLED: "NEWS_STATUS_UPDATE_FULLFILLED",
            REJECTED: "NEWS_STATUS_UPDATE_REJECTED"
        }
    },
    EVENTS: {
        DETAILS: {
            URL: "backend/events/details",
            FETCH: "EVENTS_DETAILS",
            PENDING: "EVENTS_DETAILS_PENDING",
            FULLFILLED: "EVENTS_DETAILS_FULLFILLED",
            REJECTED: "EVENTS_DETAILS_REJECTED"
        },
        UPDATE: {
            URL: "backend/events/update",
            FETCH: "EVENTS_UPDATE",
            PENDING: "EVENTS_UPDATE_PENDING",
            FULLFILLED: "EVENTS_UPDATE_FULLFILLED",
            REJECTED: "EVENTS_UPDATE_REJECTED"
        }
    },
    BANNERS: {
        LIST: {
            URL: "backend/banners/list",
            FETCH: "BANNERS_LIST",
            PENDING: "BANNERS_LIST_PENDING",
            FULLFILLED: "BANNERS_LIST_FULLFILLED",
            REJECTED: "BANNERS_LIST_REJECTED"
        },
        ADD: {
            URL: "backend/banners/create",
            FETCH: "BANNERS_ADD",
            PENDING: "BANNERS_ADD_PENDING",
            FULLFILLED: "BANNERS_ADD_FULLFILLED",
            REJECTED: "BANNERS_ADD_REJECTED"
        },
        DETAILS: {
            URL: "backend/banners/details",
            FETCH: "BANNERS_DETAILS",
            PENDING: "BANNERS_DETAILS_PENDING",
            FULLFILLED: "BANNERS_DETAILS_FULLFILLED",
            REJECTED: "BANNERS_DETAILS_REJECTED"
        },
        UPDATE: {
            URL: "backend/banners/update",
            FETCH: "BANNERS_UPDATE",
            PENDING: "BANNERS_UPDATE_PENDING",
            FULLFILLED: "BANNERS_UPDATE_FULLFILLED",
            REJECTED: "BANNERS_UPDATE_REJECTED"
        },
        STATUS_UPDATE: {
            URL: "backend/banners/update-status",
            FETCH: "BANNERS_STATUS_UPDATE",
            PENDING: "BANNERS_STATUS_UPDATE_PENDING",
            FULLFILLED: "BANNERS_STATUS_UPDATE_FULLFILLED",
            REJECTED: "BANNERS_STATUS_UPDATE_REJECTED"
        }
    },
    SEMINARS: {
        LIST: {
            URL: "backend/seminars/list",
            FETCH: "SEMINARS_LIST",
            PENDING: "SEMINARS_LIST_PENDING",
            FULLFILLED: "SEMINARS_LIST_FULLFILLED",
            REJECTED: "SEMINARS_LIST_REJECTED"
        },
        ADD: {
            URL: "backend/seminars/create",
            FETCH: "SEMINARS_ADD",
            PENDING: "SEMINARS_ADD_PENDING",
            FULLFILLED: "SEMINARS_ADD_FULLFILLED",
            REJECTED: "SEMINARS_ADD_REJECTED"
        },
        DETAILS: {
            URL: "backend/seminars/details",
            FETCH: "SEMINARS_DETAILS",
            PENDING: "SEMINARS_DETAILS_PENDING",
            FULLFILLED: "SEMINARS_DETAILS_FULLFILLED",
            REJECTED: "SEMINARS_DETAILS_REJECTED"
        },
        UPDATE: {
            URL: "backend/seminars/update",
            FETCH: "SEMINARS_UPDATE",
            PENDING: "SEMINARS_UPDATE_PENDING",
            FULLFILLED: "SEMINARS_UPDATE_FULLFILLED",
            REJECTED: "SEMINARS_UPDATE_REJECTED"
        },
        STATUS_UPDATE: {
            URL: "backend/seminars/update-status",
            FETCH: "SEMINARS_STATUS_UPDATE",
            PENDING: "SEMINARS_STATUS_UPDATE_PENDING",
            FULLFILLED: "SEMINARS_STATUS_UPDATE_FULLFILLED",
            REJECTED: "SEMINARS_STATUS_UPDATE_REJECTED"
        }
    },
    NEW_INITIATIVES: {
        LIST: {
            URL: "backend/new-initiatives/list",
            FETCH: "NEW_INITIATIVES_LIST",
            PENDING: "NEW_INITIATIVES_LIST_PENDING",
            FULLFILLED: "NEW_INITIATIVES_LIST_FULLFILLED",
            REJECTED: "NEW_INITIATIVES_LIST_REJECTED"
        },
        ADD: {
            URL: "backend/new-initiatives/create",
            FETCH: "NEW_INITIATIVES_ADD",
            PENDING: "NEW_INITIATIVES_ADD_PENDING",
            FULLFILLED: "NEW_INITIATIVES_ADD_FULLFILLED",
            REJECTED: "NEW_INITIATIVES_ADD_REJECTED"
        },
        DETAILS: {
            URL: "backend/new-initiatives/details",
            FETCH: "NEW_INITIATIVES_DETAILS",
            PENDING: "NEW_INITIATIVES_DETAILS_PENDING",
            FULLFILLED: "NEW_INITIATIVES_DETAILS_FULLFILLED",
            REJECTED: "NEW_INITIATIVES_DETAILS_REJECTED"
        },
        UPDATE: {
            URL: "backend/new-initiatives/update",
            FETCH: "NEW_INITIATIVES_UPDATE",
            PENDING: "NEW_INITIATIVES_UPDATE_PENDING",
            FULLFILLED: "NEW_INITIATIVES_UPDATE_FULLFILLED",
            REJECTED: "NEW_INITIATIVES_UPDATE_REJECTED"
        },
        STATUS_UPDATE: {
            URL: "backend/new-initiatives/update-status",
            FETCH: "NEW_INITIATIVES_STATUS_UPDATE",
            PENDING: "NEW_INITIATIVES_STATUS_UPDATE_PENDING",
            FULLFILLED: "NEW_INITIATIVES_STATUS_UPDATE_FULLFILLED",
            REJECTED: "NEW_INITIATIVES_STATUS_UPDATE_REJECTED"
        },
        META_DETAILS: {
            URL: "backend/new-initiatives/meta-details",
            FETCH: "NEW_INITIATIVES_META_DETAILS",
            PENDING: "NEW_INITIATIVES_META_DETAILS_PENDING",
            FULLFILLED: "NEW_INITIATIVES_META_DETAILS_FULLFILLED",
            REJECTED: "NEW_INITIATIVES_META_DETAILS_REJECTED"
        },
        META_UPDATE: {
            URL: "backend/new-initiatives/meta-update",
            FETCH: "NEW_INITIATIVES_META_UPDATE",
            PENDING: "NEW_INITIATIVES_META_UPDATE_PENDING",
            FULLFILLED: "NEW_INITIATIVES_META_UPDATE_FULLFILLED",
            REJECTED: "NEW_INITIATIVES_META_UPDATE_REJECTED"
        }
    },
    SERVICES: {
        LIST: {
            URL: "backend/service/list",
            FETCH: "SERVICES_LIST",
            PENDING: "SERVICES_LIST_PENDING",
            FULLFILLED: "SERVICES_LIST_FULLFILLED",
            REJECTED: "SERVICES_LIST_REJECTED"
        },
        ADD: {
            URL: "backend/service/create",
            FETCH: "SERVICES_ADD",
            PENDING: "SERVICES_ADD_PENDING",
            FULLFILLED: "SERVICES_ADD_FULLFILLED",
            REJECTED: "SERVICES_ADD_REJECTED"
        },
        DETAILS: {
            URL: "backend/service/details",
            FETCH: "SERVICES_DETAILS",
            PENDING: "SERVICES_DETAILS_PENDING",
            FULLFILLED: "SERVICES_DETAILS_FULLFILLED",
            REJECTED: "SERVICES_DETAILS_REJECTED"
        },
        UPDATE: {
            URL: "backend/service/update",
            FETCH: "SERVICES_UPDATE",
            PENDING: "SERVICES_UPDATE_PENDING",
            FULLFILLED: "SERVICES_UPDATE_FULLFILLED",
            REJECTED: "SERVICES_UPDATE_REJECTED"
        },
        STATUS_UPDATE: {
            URL: "backend/service/update-status",
            FETCH: "SERVICES_STATUS_UPDATE",
            PENDING: "SERVICES_STATUS_UPDATE_PENDING",
            FULLFILLED: "SERVICES_STATUS_UPDATE_FULLFILLED",
            REJECTED: "SERVICES_STATUS_UPDATE_REJECTED"
        }
    },
    PROJECTS: {
        LIST: {
            URL: "backend/project/list",
            FETCH: "PROJECTS_LIST",
            PENDING: "PROJECTS_LIST_PENDING",
            FULLFILLED: "PROJECTS_LIST_FULLFILLED",
            REJECTED: "PROJECTS_LIST_REJECTED"
        },
        ADD: {
            URL: "backend/project/create",
            FETCH: "PROJECTS_ADD",
            PENDING: "PROJECTS_ADD_PENDING",
            FULLFILLED: "PROJECTS_ADD_FULLFILLED",
            REJECTED: "PROJECTS_ADD_REJECTED"
        },
        DETAILS: {
            URL: "backend/project/details",
            FETCH: "PROJECTS_DETAILS",
            PENDING: "PROJECTS_DETAILS_PENDING",
            FULLFILLED: "PROJECTS_DETAILS_FULLFILLED",
            REJECTED: "PROJECTS_DETAILS_REJECTED"
        },
        UPDATE: {
            URL: "backend/project/update",
            FETCH: "PROJECTS_UPDATE",
            PENDING: "PROJECTS_UPDATE_PENDING",
            FULLFILLED: "PROJECTS_UPDATE_FULLFILLED",
            REJECTED: "PROJECTS_UPDATE_REJECTED"
        },
        STATUS_UPDATE: {
            URL: "backend/project/update-status",
            FETCH: "PROJECTS_STATUS_UPDATE",
            PENDING: "PROJECTS_STATUS_UPDATE_PENDING",
            FULLFILLED: "PROJECTS_STATUS_UPDATE_FULLFILLED",
            REJECTED: "PROJECTS_STATUS_UPDATE_REJECTED"
        }
    },
    PROJECT_TYPES: {
        LIST: {
            URL: "backend/project-type/list",
            FETCH: "PROJECT_TYPES_LIST",
            PENDING: "PROJECT_TYPES_LIST_PENDING",
            FULLFILLED: "PROJECT_TYPES_LIST_FULLFILLED",
            REJECTED: "PROJECT_TYPES_LIST_REJECTED"
        },
        ADD: {
            URL: "backend/project-type/create",
            FETCH: "PROJECT_TYPES_ADD",
            PENDING: "PROJECT_TYPES_ADD_PENDING",
            FULLFILLED: "PROJECT_TYPES_ADD_FULLFILLED",
            REJECTED: "PROJECT_TYPES_ADD_REJECTED"
        },
        DETAILS: {
            URL: "backend/project-type/details",
            FETCH: "PROJECT_TYPES_DETAILS",
            PENDING: "PROJECT_TYPES_DETAILS_PENDING",
            FULLFILLED: "PROJECT_TYPES_DETAILS_FULLFILLED",
            REJECTED: "PROJECT_TYPES_DETAILS_REJECTED"
        },
        UPDATE: {
            URL: "backend/project-type/update",
            FETCH: "PROJECT_TYPES_UPDATE",
            PENDING: "PROJECT_TYPES_UPDATE_PENDING",
            FULLFILLED: "PROJECT_TYPES_UPDATE_FULLFILLED",
            REJECTED: "PROJECT_TYPES_UPDATE_REJECTED"
        },
        STATUS_UPDATE: {
            URL: "backend/project-type/update-status",
            FETCH: "PROJECT_TYPES_STATUS_UPDATE",
            PENDING: "PROJECT_TYPES_STATUS_UPDATE_PENDING",
            FULLFILLED: "PROJECT_TYPES_STATUS_UPDATE_FULLFILLED",
            REJECTED: "PROJECT_TYPES_STATUS_UPDATE_REJECTED"
        }
    },
    CLIENTELE: {
        META_DETAILS: {
            URL: "backend/clientele/details",
            FETCH: "CLIENTELE_META_DETAILS",
            PENDING: "CLIENTELE_META_DETAILS_PENDING",
            FULLFILLED: "CLIENTELE_META_DETAILS_FULLFILLED",
            REJECTED: "CLIENTELE_META_DETAILS_REJECTED"
        },
        META_UPDATE: {
            URL: "backend/clientele/update",
            FETCH: "CLIENTELE_META_UPDATE",
            PENDING: "CLIENTELE_META_UPDATE_PENDING",
            FULLFILLED: "CLIENTELE_META_UPDATE_FULLFILLED",
            REJECTED: "CLIENTELE_META_UPDATE_REJECTED"
        },
        LIST: {
            URL: "backend/clientele/clientele-items-list",
            FETCH: "CLIENTELE_LIST",
            PENDING: "CLIENTELE_LIST_PENDING",
            FULLFILLED: "CLIENTELE_LIST_FULLFILLED",
            REJECTED: "CLIENTELE_LIST_REJECTED"
        },
        ADD: {
            URL: "backend/clientele/clientele-items-create",
            FETCH: "CLIENTELE_ADD",
            PENDING: "CLIENTELE_ADD_PENDING",
            FULLFILLED: "CLIENTELE_ADD_FULLFILLED",
            REJECTED: "CLIENTELE_ADD_REJECTED"
        },
        DETAILS: {
            URL: "backend/clientele/clientele-items-details",
            FETCH: "CLIENTELE_DETAILS",
            PENDING: "CLIENTELE_DETAILS_PENDING",
            FULLFILLED: "CLIENTELE_DETAILS_FULLFILLED",
            REJECTED: "CLIENTELE_DETAILS_REJECTED"
        },
        UPDATE: {
            URL: "backend/clientele/clientele-items-update",
            FETCH: "CLIENTELE_UPDATE",
            PENDING: "CLIENTELE_UPDATE_PENDING",
            FULLFILLED: "CLIENTELE_UPDATE_FULLFILLED",
            REJECTED: "CLIENTELE_UPDATE_REJECTED"
        },
        STATUS_UPDATE: {
            URL: "backend/clientele/clientele-items-update-status",
            FETCH: "CLIENTELE_STATUS_UPDATE",
            PENDING: "CLIENTELE_STATUS_UPDATE_PENDING",
            FULLFILLED: "CLIENTELE_STATUS_UPDATE_FULLFILLED",
            REJECTED: "CLIENTELE_STATUS_UPDATE_REJECTED"
        },
        PROJECTS_LIST: {
            URL: "backend/clientele/client-projects-list",
            FETCH: "CLIENTELE_PROJECTS_LIST",
            PENDING: "CLIENTELE_PROJECTS_LIST_PENDING",
            FULLFILLED: "CLIENTELE_PROJECTS_LIST_FULLFILLED",
            REJECTED: "CLIENTELE_PROJECTS_LIST_REJECTED"
        },
        PROJECTS_DETAILS: {
            URL: "backend/clientele/client-projects-details",
            FETCH: "CLIENTELE_PROJECTS_DETAILS",
            PENDING: "CLIENTELE_PROJECTS_DETAILS_PENDING",
            FULLFILLED: "CLIENTELE_PROJECTS_DETAILS_FULLFILLED",
            REJECTED: "CLIENTELE_PROJECTS_DETAILS_REJECTED"
        },
        PROJECTS_CREATE: {
            URL: "backend/clientele/client-projects-create",
            FETCH: "CLIENTELE_PROJECTS_CREATE",
            PENDING: "CLIENTELE_PROJECTS_CREATE_PENDING",
            FULLFILLED: "CLIENTELE_PROJECTS_CREATE_FULLFILLED",
            REJECTED: "CLIENTELE_PROJECTS_CREATE_REJECTED"
        },
        PROJECTS_UPDATE: {
            URL: "backend/clientele/client-projects-update",
            FETCH: "CLIENTELE_PROJECTS_UPDATE",
            PENDING: "CLIENTELE_PROJECTS_UPDATE_PENDING",
            FULLFILLED: "CLIENTELE_PROJECTS_UPDATE_FULLFILLED",
            REJECTED: "CLIENTELE_PROJECTS_UPDATE_REJECTED"
        },
        PROJECTS_UPDATE_STATUS: {
            URL: "backend/clientele/client-projects-update-status",
            FETCH: "CLIENTELE_PROJECTS_UPDATE_STATUS",
            PENDING: "CLIENTELE_PROJECTS_UPDATE_STATUS_PENDING",
            FULLFILLED: "CLIENTELE_PROJECTS_UPDATE_STATUS_FULLFILLED",
            REJECTED: "CLIENTELE_PROJECTS_UPDATE_STATUS_REJECTED"
        },
        CLIENTS_DROPDOWN_LIST: {
            URL: "backend/clientele/clientele-items-dropdown",
            FETCH: "CLIENTELE_CLIENTS_DROPDOWN_LIST",
            PENDING: "CLIENTELE_CLIENTS_DROPDOWN_LIST_PENDING",
            FULLFILLED: "CLIENTELE_CLIENTS_DROPDOWN_LIST_FULLFILLED",
            REJECTED: "CLIENTELE_CLIENTS_DROPDOWN_LIST_REJECTED"
        }
    },
    LABORATORY: {
        DETAILS: {
            URL: "backend/laboratory/details",
            FETCH: "LABORATORY_DETAILS",
            PENDING: "LABORATORY_DETAILS_PENDING",
            FULLFILLED: "LABORATORY_DETAILS_FULLFILLED",
            REJECTED: "LABORATORY_DETAILS_REJECTED"
        },
        UPDATE: {
            URL: "backend/laboratory/update",
            FETCH: "LABORATORY_UPDATE",
            PENDING: "LABORATORY_UPDATE_PENDING",
            FULLFILLED: "LABORATORY_UPDATE_FULLFILLED",
            REJECTED: "LABORATORY_UPDATE_REJECTED"
        }
    },
    CAREERS: {
        LIST: {
            URL: "backend/career/list",
            FETCH: "CAREERS_LIST",
            PENDING: "CAREERS_LIST_PENDING",
            FULLFILLED: "CAREERS_LIST_FULLFILLED",
            REJECTED: "CAREERS_LIST_REJECTED"
        },
        ADD: {
            URL: "backend/career/create",
            FETCH: "CAREERS_ADD",
            PENDING: "CAREERS_ADD_PENDING",
            FULLFILLED: "CAREERS_ADD_FULLFILLED",
            REJECTED: "CAREERS_ADD_REJECTED"
        },
        DETAILS: {
            URL: "backend/career/details",
            FETCH: "CAREERS_DETAILS",
            PENDING: "CAREERS_DETAILS_PENDING",
            FULLFILLED: "CAREERS_DETAILS_FULLFILLED",
            REJECTED: "CAREERS_DETAILS_REJECTED"
        },
        UPDATE: {
            URL: "backend/career/update",
            FETCH: "CAREERS_UPDATE",
            PENDING: "CAREERS_UPDATE_PENDING",
            FULLFILLED: "CAREERS_UPDATE_FULLFILLED",
            REJECTED: "CAREERS_UPDATE_REJECTED"
        },
        STATUS_UPDATE: {
            URL: "backend/career/update-status",
            FETCH: "CAREERS_STATUS_UPDATE",
            PENDING: "CAREERS_STATUS_UPDATE_PENDING",
            FULLFILLED: "CAREERS_STATUS_UPDATE_FULLFILLED",
            REJECTED: "CAREERS_STATUS_UPDATE_REJECTED"
        },
        META_DETAILS: {
            URL: "backend/career/meta-details",
            FETCH: "CAREERS_META_DETAILS",
            PENDING: "CAREERS_META_DETAILS_PENDING",
            FULLFILLED: "CAREERS_META_DETAILS_FULLFILLED",
            REJECTED: "CAREERS_META_DETAILS_REJECTED"
        },
        META_UPDATE: {
            URL: "backend/career/meta-update",
            FETCH: "CAREERS_META_UPDATE",
            PENDING: "CAREERS_META_UPDATE_PENDING",
            FULLFILLED: "CAREERS_META_UPDATE_FULLFILLED",
            REJECTED: "CAREERS_META_UPDATE_REJECTED"
        }
    },
    ACCREDITATIONS: {
        LIST: {
            URL: "backend/accreditations/list",
            FETCH: "ACCREDITATIONS_LIST",
            PENDING: "ACCREDITATIONS_LIST_PENDING",
            FULLFILLED: "ACCREDITATIONS_LIST_FULLFILLED",
            REJECTED: "ACCREDITATIONS_LIST_REJECTED"
        },
        ADD: {
            URL: "backend/accreditations/create",
            FETCH: "ACCREDITATIONS_ADD",
            PENDING: "ACCREDITATIONS_ADD_PENDING",
            FULLFILLED: "ACCREDITATIONS_ADD_FULLFILLED",
            REJECTED: "ACCREDITATIONS_ADD_REJECTED"
        },
        DETAILS: {
            URL: "backend/accreditations/details",
            FETCH: "ACCREDITATIONS_DETAILS",
            PENDING: "ACCREDITATIONS_DETAILS_PENDING",
            FULLFILLED: "ACCREDITATIONS_DETAILS_FULLFILLED",
            REJECTED: "ACCREDITATIONS_DETAILS_REJECTED"
        },
        UPDATE: {
            URL: "backend/accreditations/update",
            FETCH: "ACCREDITATIONS_UPDATE",
            PENDING: "ACCREDITATIONS_UPDATE_PENDING",
            FULLFILLED: "ACCREDITATIONS_UPDATE_FULLFILLED",
            REJECTED: "ACCREDITATIONS_UPDATE_REJECTED"
        },
        STATUS_UPDATE: {
            URL: "backend/accreditations/update-status",
            FETCH: "ACCREDITATIONS_STATUS_UPDATE",
            PENDING: "ACCREDITATIONS_STATUS_UPDATE_PENDING",
            FULLFILLED: "ACCREDITATIONS_STATUS_UPDATE_FULLFILLED",
            REJECTED: "ACCREDITATIONS_STATUS_UPDATE_REJECTED"
        }
    },
    FAQS: {
        LIST: {
            URL: "backend/faqs/list",
            FETCH: "FAQS_LIST",
            PENDING: "FAQS_LIST_PENDING",
            FULLFILLED: "FAQS_LIST_FULLFILLED",
            REJECTED: "FAQS_LIST_REJECTED"
        },
        ADD: {
            URL: "backend/faqs/create",
            FETCH: "FAQS_ADD",
            PENDING: "FAQS_ADD_PENDING",
            FULLFILLED: "FAQS_ADD_FULLFILLED",
            REJECTED: "FAQS_ADD_REJECTED"
        },
        DETAILS: {
            URL: "backend/faqs/details",
            FETCH: "FAQS_DETAILS",
            PENDING: "FAQS_DETAILS_PENDING",
            FULLFILLED: "FAQS_DETAILS_FULLFILLED",
            REJECTED: "FAQS_DETAILS_REJECTED"
        },
        UPDATE: {
            URL: "backend/faqs/update",
            FETCH: "FAQS_UPDATE",
            PENDING: "FAQS_UPDATE_PENDING",
            FULLFILLED: "FAQS_UPDATE_FULLFILLED",
            REJECTED: "FAQS_UPDATE_REJECTED"
        },
        STATUS_UPDATE: {
            URL: "backend/faqs/update-status",
            FETCH: "FAQS_STATUS_UPDATE",
            PENDING: "FAQS_STATUS_UPDATE_PENDING",
            FULLFILLED: "FAQS_STATUS_UPDATE_FULLFILLED",
            REJECTED: "FAQS_STATUS_UPDATE_REJECTED"
        },
        META_DETAILS: {
            URL: "backend/faqs/meta-details",
            FETCH: "FAQS_META_DETAILS",
            PENDING: "FAQS_META_DETAILS_PENDING",
            FULLFILLED: "FAQS_META_DETAILS_FULLFILLED",
            REJECTED: "FAQS_META_DETAILS_REJECTED"
        },
        META_UPDATE: {
            URL: "backend/faqs/meta-update",
            FETCH: "FAQS_META_UPDATE",
            PENDING: "FAQS_META_UPDATE_PENDING",
            FULLFILLED: "FAQS_META_UPDATE_FULLFILLED",
            REJECTED: "FAQS_META_UPDATE_REJECTED"
        }
    },
    DOWNLOADS: {
        META_DETAILS: {
            URL: "backend/downloads/details",
            FETCH: "DOWNLOADS_META_DETAILS",
            PENDING: "DOWNLOADS_META_DETAILS_PENDING",
            FULLFILLED: "DOWNLOADS_META_DETAILS_FULLFILLED",
            REJECTED: "DOWNLOADS_META_DETAILS_REJECTED"
        },
        META_UPDATE: {
            URL: "backend/downloads/update",
            FETCH: "DOWNLOADS_META_UPDATE",
            PENDING: "DOWNLOADS_META_UPDATE_PENDING",
            FULLFILLED: "DOWNLOADS_META_UPDATE_FULLFILLED",
            REJECTED: "DOWNLOADS_META_UPDATE_REJECTED"
        },
        LIST: {
            URL: "backend/downloads/download-items-list",
            FETCH: "DOWNLOADS_LIST",
            PENDING: "DOWNLOADS_LIST_PENDING",
            FULLFILLED: "DOWNLOADS_LIST_FULLFILLED",
            REJECTED: "DOWNLOADS_LIST_REJECTED"
        },
        ADD: {
            URL: "backend/downloads/download-items-create",
            FETCH: "DOWNLOADS_ADD",
            PENDING: "DOWNLOADS_ADD_PENDING",
            FULLFILLED: "DOWNLOADS_ADD_FULLFILLED",
            REJECTED: "DOWNLOADS_ADD_REJECTED"
        },
        DETAILS: {
            URL: "backend/downloads/download-item-details",
            FETCH: "DOWNLOADS_DETAILS",
            PENDING: "DOWNLOADS_DETAILS_PENDING",
            FULLFILLED: "DOWNLOADS_DETAILS_FULLFILLED",
            REJECTED: "DOWNLOADS_DETAILS_REJECTED"
        },
        UPDATE: {
            URL: "backend/downloads/download-items-update",
            FETCH: "DOWNLOADS_UPDATE",
            PENDING: "DOWNLOADS_UPDATE_PENDING",
            FULLFILLED: "DOWNLOADS_UPDATE_FULLFILLED",
            REJECTED: "DOWNLOADS_UPDATE_REJECTED"
        },
        STATUS_UPDATE: {
            URL: "backend/downloads/download-items-update-status",
            FETCH: "DOWNLOADS_STATUS_UPDATE",
            PENDING: "DOWNLOADS_STATUS_UPDATE_PENDING",
            FULLFILLED: "DOWNLOADS_STATUS_UPDATE_FULLFILLED",
            REJECTED: "DOWNLOADS_STATUS_UPDATE_REJECTED"
        }
    },
    CONTACT_US: {
        META_DETAILS: {
            URL: "backend/contact-us/details",
            FETCH: "CONTACT_US_META_DETAILS",
            PENDING: "CONTACT_US_META_DETAILS_PENDING",
            FULLFILLED: "CONTACT_US_META_DETAILS_FULLFILLED",
            REJECTED: "CONTACT_US_META_DETAILS_REJECTED"
        },
        META_UPDATE: {
            URL: "backend/contact-us/update",
            FETCH: "CONTACT_US_META_UPDATE",
            PENDING: "CONTACT_US_META_UPDATE_PENDING",
            FULLFILLED: "CONTACT_US_META_UPDATE_FULLFILLED",
            REJECTED: "CONTACT_US_META_UPDATE_REJECTED"
        },
        ENQUIRY_LIST: {
            URL: "backend/contact-us/contact-enquiry-list",
            FETCH: "CONTACT_US_ENQUIRY_LIST",
            PENDING: "CONTACT_US_ENQUIRY_LIST_PENDING",
            FULLFILLED: "CONTACT_US_ENQUIRY_LIST_FULLFILLED",
            REJECTED: "CONTACT_US_ENQUIRY_LIST_REJECTED"
        },
        CUSTOMER_COMPLAINS: {
            URL: "backend/contact-us/customer-complains",
            FETCH: "CONTACT_US_CUSTOMER_COMPLAINS",
            PENDING: "CONTACT_US_CUSTOMER_COMPLAINS_PENDING",
            FULLFILLED: "CONTACT_US_CUSTOMER_COMPLAINS_FULLFILLED",
            REJECTED: "CONTACT_US_CUSTOMER_COMPLAINS_REJECTED"
        },
        CUSTOMER_COMPLAIN_DETAILS: {
            URL: "backend/contact-us/customer-complain",
            FETCH: "CONTACT_US_CUSTOMER_COMPLAIN_DETAILS",
            PENDING: "CONTACT_US_CUSTOMER_COMPLAIN_DETAILS_PENDING",
            FULLFILLED: "CONTACT_US_CUSTOMER_COMPLAIN_DETAILS_FULLFILLED",
            REJECTED: "CONTACT_US_CUSTOMER_COMPLAIN_DETAILS_REJECTED"
        },
        CUSTOMER_FEEDBACKS: {
            URL: "backend/contact-us/customer-feedbacks",
            FETCH: "CONTACT_US_CUSTOMER_FEEDBACKS",
            PENDING: "CONTACT_US_CUSTOMER_FEEDBACKS_PENDING",
            FULLFILLED: "CONTACT_US_CUSTOMER_FEEDBACKS_FULLFILLED",
            REJECTED: "CONTACT_US_CUSTOMER_FEEDBACKS_REJECTED"
        },
        CUSTOMER_FEEDBACKS_DETAILS: {
            URL: "backend/contact-us/customer-feedback",
            FETCH: "CONTACT_US_CUSTOMER_FEEDBACKS_DETAILS",
            PENDING: "CONTACT_US_CUSTOMER_FEEDBACKS_DETAILS_PENDING",
            FULLFILLED: "CONTACT_US_CUSTOMER_FEEDBACKS_DETAILS_FULLFILLED",
            REJECTED: "CONTACT_US_CUSTOMER_FEEDBACKS_DETAILS_REJECTED"
        }
    },
    ADDRESS: {
        LIST: {
            URL: "backend/contact-us/office-address-list",
            FETCH: "ADDRESS_LIST",
            PENDING: "ADDRESS_LIST_PENDING",
            FULLFILLED: "ADDRESS_LIST_FULLFILLED",
            REJECTED: "ADDRESS_LIST_REJECTED"
        },
        ADD: {
            URL: "backend/contact-us/office-address-create",
            FETCH: "ADDRESS_ADD",
            PENDING: "ADDRESS_ADD_PENDING",
            FULLFILLED: "ADDRESS_ADD_FULLFILLED",
            REJECTED: "ADDRESS_ADD_REJECTED"
        },
        DETAILS: {
            URL: "backend/contact-us/office-address-details",
            FETCH: "ADDRESS_DETAILS",
            PENDING: "ADDRESS_DETAILS_PENDING",
            FULLFILLED: "ADDRESS_DETAILS_FULLFILLED",
            REJECTED: "ADDRESS_DETAILS_REJECTED"
        },
        UPDATE: {
            URL: "backend/contact-us/office-address-update",
            FETCH: "ADDRESS_UPDATE",
            PENDING: "ADDRESS_UPDATE_PENDING",
            FULLFILLED: "ADDRESS_UPDATE_FULLFILLED",
            REJECTED: "ADDRESS_UPDATE_REJECTED"
        },
        STATUS_UPDATE: {
            URL: "backend/contact-us/office-address-update-status",
            FETCH: "ADDRESS_STATUS_UPDATE",
            PENDING: "ADDRESS_STATUS_UPDATE_PENDING",
            FULLFILLED: "ADDRESS_STATUS_UPDATE_FULLFILLED",
            REJECTED: "ADDRESS_STATUS_UPDATE_REJECTED"
        }
    },
    UTILS: {
        STATES: {
            URL: "backend/utils/states",
            FETCH: "UTILS_STATES",
            PENDING: "UTILS_STATES_PENDING",
            FULLFILLED: "UTILS_STATES_FULLFILLED",
            REJECTED: "UTILS_STATES_REJECTED"
        },
        DISTRICT: {
            URL: "backend/utils/district",
            FETCH: "UTILS_DISTRICT",
            PENDING: "UTILS_DISTRICT_PENDING",
            FULLFILLED: "UTILS_DISTRICT_FULLFILLED",
            REJECTED: "UTILS_DISTRICT_REJECTED"
        },
        PROJECT_TYPES: {
            URL: "backend/utils/project-types",
            FETCH: "UTILS_PROJECT_TYPES",
            PENDING: "UTILS_PROJECT_TYPES_PENDING",
            FULLFILLED: "UTILS_PROJECT_TYPES_FULLFILLED",
            REJECTED: "UTILS_PROJECT_TYPES_REJECTED"
        },
        SECTORS: {
            URL: "backend/utils/sectors",
            FETCH: "UTILS_SECTORS",
            PENDING: "UTILS_SECTORS_PENDING",
            FULLFILLED: "UTILS_SECTORS_FULLFILLED",
            REJECTED: "UTILS_SECTORS_REJECTED"
        },
        UPLOAD_EDITOR_FILE: {
            URL: "backend/utils/upload-editor-file",
            FETCH: "UTILS_UPLOAD_EDITOR_FILE",
            PENDING: "UTILS_UPLOAD_EDITOR_FILE_PENDING",
            FULLFILLED: "UTILS_UPLOAD_EDITOR_FILE_FULLFILLED",
            REJECTED: "UTILS_UPLOAD_EDITOR_FILE_REJECTED"
        },
        CLEAR_EDITOR_FILE: {
            URL: null,
            FETCH: "UTILS_CLEAR_EDITOR_FILE",
            PENDING: "UTILS_CLEAR_EDITOR_FILE_PENDING",
            FULLFILLED: "UTILS_CLEAR_EDITOR_FILE_FULLFILLED",
            REJECTED: "UTILS_CLEAR_EDITOR_FILE_REJECTED"
        },
        PAGE_CONTENT_DETAILS: {
            URL: "backend/utils/page-content",
            FETCH: "UTILS_PAGE_CONTENT_DETAILS",
            PENDING: "UTILS_PAGE_CONTENT_DETAILS_PENDING",
            FULLFILLED: "UTILS_PAGE_CONTENT_DETAILS_FULLFILLED",
            REJECTED: "UTILS_PAGE_CONTENT_DETAILS_REJECTED"
        },
        PAGE_CONTENT_UPDATE: {
            URL: "backend/utils/page-content-update",
            FETCH: "UTILS_PAGE_CONTENT_UPDATE",
            PENDING: "UTILS_PAGE_CONTENT_UPDATE_PENDING",
            FULLFILLED: "UTILS_PAGE_CONTENT_UPDATE_FULLFILLED",
            REJECTED: "UTILS_PAGE_CONTENT_UPDATE_REJECTED"
        }
    }
};

export default API;


export const API_FRONTEND = {
    // URL_PREFIX: "http://localhost:5000/api/grc_india_api/v1/frontend/",
    URL_PREFIX: "https://api.grc-india.com/api/v1/",
    NO_IMAGE_FOUND: "/assets/images/noImage.jpg",
    AUTH: {
        REGISTER: {
            URL: "auth/donor-register",
            FETCH: "AUTH_REGISTER",
            PENDING: "AUTH_REGISTER_PENDING",
            FULLFILLED: "AUTH_REGISTER_FULLFILLED",
            REJECTED: "AUTH_REGISTER_REJECTED"
        },
        LOGIN: {
            WITH_PASSWORD: {
                URL: "auth/donor-login",
                FETCH: "LOGIN_WITH_PASSWORD",
                PENDING: "LOGIN_WITH_PASSWORD_PENDING",
                FULLFILLED: "LOGIN_WITH_PASSWORD_FULLFILLED",
                REJECTED: "LOGIN_WITH_PASSWORD_REJECTED"
            },
            VERIFY_TOKEN: {
                URL: "auth/verify-token",
                FETCH: "VERIFY_TOKEN",
                PENDING: "VERIFY_TOKEN_PENDING",
                FULLFILLED: "VERIFY_TOKEN_FULLFILLED",
                REJECTED: "VERIFY_TOKEN_REJECTED"
            },
            SIGNOUT: {
                URL: "auth/signout",
                FETCH: "SIGNOUT",
                PENDING: "SIGNOUT_PENDING",
                FULLFILLED: "SIGNOUT_FULLFILLED",
                REJECTED: "SIGNOUT_REJECTED"
            }
        },
        FORGET_PASSWORD: {
            URL: "auth/donor-forget-password",
            FETCH: "AUTH_FORGET_PASSWORD",
            PENDING: "AUTH_FORGET_PASSWORD_PENDING",
            FULLFILLED: "AUTH_FORGET_PASSWORD_FULLFILLED",
            REJECTED: "AUTH_FORGET_PASSWORD_REJECTED"
        },
        VERIFY_FORGET_PASSWORD: {
            URL: "auth/donor-forget-password-otp-verify",
            FETCH: "AUTH_VERIFY_FORGET_PASSWORD",
            PENDING: "AUTH_VERIFY_FORGET_PASSWORD_PENDING",
            FULLFILLED: "AUTH_VERIFY_FORGET_PASSWORD_FULLFILLED",
            REJECTED: "AUTH_VERIFY_FORGET_PASSWORD_REJECTED"
        },
        RESET_FORGET_PASSWORD_FORM: {
            URL: null,
            FETCH: "AUTH_RESET_FORGET_PASSWORD_FORM",
            PENDING: "AUTH_RESET_FORGET_PASSWORD_FORM_PENDING",
            FULLFILLED: "AUTH_RESET_FORGET_PASSWORD_FORM_FULLFILLED",
            REJECTED: "AUTH_RESET_FORGET_PASSWORD_FORM_REJECTED"
        }
    },
    UTILS: {
        HEADER_MENU: {
            URL: "frontend/utils/header-menu",
            FETCH: "HEADER_MENU",
            PENDING: "HEADER_MENU_PENDING",
            FULLFILLED: "HEADER_MENU_FULLFILLED",
            REJECTED: "HEADER_MENU_REJECTED"
        },
        BANNERS: {
            URL: "frontend/utils/banners",
            FETCH: "BANNERS",
            PENDING: "BANNERS_PENDING",
            FULLFILLED: "BANNERS_FULLFILLED",
            REJECTED: "BANNERS_REJECTED"
        },
        HOME_EVENT_POPUP_DETAILS: {
            URL: "frontend/utils/home-event-popup-details",
            FETCH: "HOME_EVENT_POPUP_DETAILS",
            PENDING: "HOME_EVENT_POPUP_DETAILS_PENDING",
            FULLFILLED: "HOME_EVENT_POPUP_DETAILS_FULLFILLED",
            REJECTED: "HOME_EVENT_POPUP_DETAILS_REJECTED"
        },
        STATES: {
            URL: "frontend/utils/states",
            FETCH: "UTILS_STATES",
            PENDING: "UTILS_STATES_PENDING",
            FULLFILLED: "UTILS_STATES_FULLFILLED",
            REJECTED: "UTILS_STATES_REJECTED"
        },
        PAGE_CONTENT_DETAILS: {
            URL: "frontend/utils/page-content",
            FETCH: "UTILS_PAGE_CONTENT_DETAILS",
            PENDING: "UTILS_PAGE_CONTENT_DETAILS_PENDING",
            FULLFILLED: "UTILS_PAGE_CONTENT_DETAILS_FULLFILLED",
            REJECTED: "UTILS_PAGE_CONTENT_DETAILS_REJECTED"
        }
    },
    PAGES: {
        ABOUT_US: {
            DETAILS: {
                URL: "frontend/about-us/details",
                FETCH: "ABOUT_US_DETAILS",
                PENDING: "ABOUT_US_DETAILS_PENDING",
                FULLFILLED: "ABOUT_US_DETAILS_FULLFILLED",
                REJECTED: "ABOUT_US_DETAILS_REJECTED"
            }
        },
        SERVICES: {
            LIST: {
                URL: "frontend/service/list",
                FETCH: "SERVICES_LIST",
                PENDING: "SERVICES_LIST_PENDING",
                FULLFILLED: "SERVICES_LIST_FULLFILLED",
                REJECTED: "SERVICES_LIST_REJECTED"
            },
            DETAILS: {
                URL: "frontend/service/details",
                FETCH: "SERVICES_DETAILS",
                PENDING: "SERVICES_DETAILS_PENDING",
                FULLFILLED: "SERVICES_DETAILS_FULLFILLED",
                REJECTED: "SERVICES_DETAILS_REJECTED"
            }
        },
        SEMINARS: {
            LIST: {
                URL: "frontend/seminars/list",
                FETCH: "SEMINARS_LIST",
                PENDING: "SEMINARS_LIST_PENDING",
                FULLFILLED: "SEMINARS_LIST_FULLFILLED",
                REJECTED: "SEMINARS_LIST_REJECTED"
            },
            DETAILS: {
                URL: "frontend/seminars/details",
                FETCH: "SEMINARS_DETAILS",
                PENDING: "SEMINARS_DETAILS_PENDING",
                FULLFILLED: "SEMINARS_DETAILS_FULLFILLED",
                REJECTED: "SEMINARS_DETAILS_REJECTED"
            }
        },
        NEW_INITIATIVES: {
            LIST: {
                URL: "frontend/new-initiatives/list",
                FETCH: "NEWINITIATIVES_LIST",
                PENDING: "NEWINITIATIVES_LIST_PENDING",
                FULLFILLED: "NEWINITIATIVES_LIST_FULLFILLED",
                REJECTED: "NEWINITIATIVES_LIST_REJECTED"
            },
            DETAILS: {
                URL: "frontend/new-initiatives/details",
                FETCH: "NEWINITIATIVES_DETAILS",
                PENDING: "NEWINITIATIVES_DETAILS_PENDING",
                FULLFILLED: "NEWINITIATIVES_DETAILS_FULLFILLED",
                REJECTED: "NEWINITIATIVES_DETAILS_REJECTED"
            },
            META_DETAILS: {
                URL: "frontend/new-initiatives/meta-details",
                FETCH: "NEWINITIATIVES_META_DETAILS",
                PENDING: "NEWINITIATIVES_META_DETAILS_PENDING",
                FULLFILLED: "NEWINITIATIVES_META_DETAILS_FULLFILLED",
                REJECTED: "NEWINITIATIVES_META_DETAILS_REJECTED"
            }
        },
        NEWS: {
            LIST: {
                URL: "frontend/news/list",
                FETCH: "NEWS_LIST",
                PENDING: "NEWS_LIST_PENDING",
                FULLFILLED: "NEWS_LIST_FULLFILLED",
                REJECTED: "NEWS_LIST_REJECTED"
            },
            DETAILS: {
                URL: "frontend/news/details",
                FETCH: "NEWS_DETAILS",
                PENDING: "NEWS_DETAILS_PENDING",
                FULLFILLED: "NEWS_DETAILS_FULLFILLED",
                REJECTED: "NEWS_DETAILS_REJECTED"
            }
        },
        PROJECTS: {
            SECTORS_LIST: {
                URL: "frontend/project/sectors-list",
                FETCH: "PROJECTS_SECTORS_LIST",
                PENDING: "PROJECTS_SECTORS_LIST_PENDING",
                FULLFILLED: "PROJECTS_SECTORS_LIST_FULLFILLED",
                REJECTED: "PROJECTS_SECTORS_LIST_REJECTED"
            },
            LIST: {
                URL: "frontend/project/list",
                FETCH: "PROJECTS_LIST",
                PENDING: "PROJECTS_LIST_PENDING",
                FULLFILLED: "PROJECTS_LIST_FULLFILLED",
                REJECTED: "PROJECTS_LIST_REJECTED"
            },
            DETAILS: {
                URL: "frontend/project/details",
                FETCH: "PROJECTS_DETAILS",
                PENDING: "PROJECTS_DETAILS_PENDING",
                FULLFILLED: "PROJECTS_DETAILS_FULLFILLED",
                REJECTED: "PROJECTS_DETAILS_REJECTED"
            },
            LIST_BY: {
                URL: "frontend/project/list-by",
                FETCH: "PROJECTS_LIST_BY",
                PENDING: "PROJECTS_LIST_BY_PENDING",
                FULLFILLED: "PROJECTS_LIST_BY_FULLFILLED",
                REJECTED: "PROJECTS_LIST_BY_REJECTED"
            },
            LIST_HOME: {
                URL: "frontend/project/list-home",
                FETCH: "PROJECTS_LIST_HOME",
                PENDING: "PROJECTS_LIST_HOME_PENDING",
                FULLFILLED: "PROJECTS_LIST_HOME_FULLFILLED",
                REJECTED: "PROJECTS_LIST_HOME_REJECTED"
            },
            PROJECT_DETAILS: {
                URL: "frontend/project/project-details",
                FETCH: "PROJECTS_PROJECT_DETAILS",
                PENDING: "PROJECTS_PROJECT_DETAILS_PENDING",
                FULLFILLED: "PROJECTS_PROJECT_DETAILS_FULLFILLED",
                REJECTED: "PROJECTS_PROJECT_DETAILS_REJECTED"
            }
        },
        LABORATORY: {
            DETAILS: {
                URL: "frontend/laboratory/details",
                FETCH: "LABORATORY_DETAILS",
                PENDING: "LABORATORY_DETAILS_PENDING",
                FULLFILLED: "LABORATORY_DETAILS_FULLFILLED",
                REJECTED: "LABORATORY_DETAILS_REJECTED"
            }
        },
        CLIENTELE: {
            DETAILS: {
                URL: "frontend/clientele/details",
                FETCH: "CLIENTELE_DETAILS",
                PENDING: "CLIENTELE_DETAILS_PENDING",
                FULLFILLED: "CLIENTELE_DETAILS_FULLFILLED",
                REJECTED: "CLIENTELE_DETAILS_REJECTED"
            },
            PROJECT_LIST: {
                URL: "frontend/clientele/project-by-client",
                FETCH: "CLIENTELE_PROJECT_LIST",
                PENDING: "CLIENTELE_PROJECT_LIST_PENDING",
                FULLFILLED: "CLIENTELE_PROJECT_LIST_FULLFILLED",
                REJECTED: "CLIENTELE_PROJECT_LIST_REJECTED"
            },
            PROJECT_LIST_CLEAR: {
                URL: null,
                FETCH: "CLIENTELE_PROJECT_LIST_CLEAR",
                PENDING: "CLIENTELE_PROJECT_LIST_CLEAR_PENDING",
                FULLFILLED: "CLIENTELE_PROJECT_LIST_CLEAR_FULLFILLED",
                REJECTED: "CLIENTELE_PROJECT_LIST_CLEAR_REJECTED"
            }
        },
        CAREERS: {
            LIST: {
                URL: "frontend/career/list",
                FETCH: "CAREERS_LIST",
                PENDING: "CAREERS_LIST_PENDING",
                FULLFILLED: "CAREERS_LIST_FULLFILLED",
                REJECTED: "CAREERS_LIST_REJECTED"
            },
            DETAILS: {
                URL: "frontend/career/details",
                FETCH: "CAREERS_DETAILS",
                PENDING: "CAREERS_DETAILS_PENDING",
                FULLFILLED: "CAREERS_DETAILS_FULLFILLED",
                REJECTED: "CAREERS_DETAILS_REJECTED"
            },
            APPLY: {
                URL: "frontend/career/apply",
                FETCH: "CAREERS_APPLY",
                PENDING: "CAREERS_APPLY_PENDING",
                FULLFILLED: "CAREERS_APPLY_FULLFILLED",
                REJECTED: "CAREERS_APPLY_REJECTED"
            },
            META_DETAILS: {
                URL: "frontend/career/meta-details",
                FETCH: "CAREERS_META_DETAILS",
                PENDING: "CAREERS_META_DETAILS_PENDING",
                FULLFILLED: "CAREERS_META_DETAILS_FULLFILLED",
                REJECTED: "CAREERS_META_DETAILS_REJECTED"
            }
        },

        FAQS: {
            LIST: {
                URL: "frontend/faqs/list",
                FETCH: "FAQS_LIST",
                PENDING: "FAQS_LIST_PENDING",
                FULLFILLED: "FAQS_LIST_FULLFILLED",
                REJECTED: "FAQS_LIST_REJECTED"
            },
            META_DETAILS: {
                URL: "frontend/faqs/meta-details",
                FETCH: "FAQS_META_DETAILS",
                PENDING: "FAQS_META_DETAILS_PENDING",
                FULLFILLED: "FAQS_META_DETAILS_FULLFILLED",
                REJECTED: "FAQS_META_DETAILS_REJECTED"
            }
        },
        DOWNLOAD: {
            DETAILS: {
                URL: "frontend/downloads/details",
                FETCH: "DOWNLOAD_DETAILS",
                PENDING: "DOWNLOAD_DETAILS_PENDING",
                FULLFILLED: "DOWNLOAD_DETAILS_FULLFILLED",
                REJECTED: "DOWNLOAD_DETAILS_REJECTED"
            }
        },
        ACCREDITATIONS: {
            LIST: {
                URL: "frontend/accreditations/list",
                FETCH: "ACCREDITATIONS_LIST",
                PENDING: "ACCREDITATIONS_LIST_PENDING",
                FULLFILLED: "ACCREDITATIONS_LIST_FULLFILLED",
                REJECTED: "ACCREDITATIONS_LIST_REJECTED"
            }
        },
        CONTACT_US: {
            DETAILS: {
                URL: "frontend/contact-us/details",
                FETCH: "CONTACT_US_DETAILS",
                PENDING: "CONTACT_US_DETAILS_PENDING",
                FULLFILLED: "CONTACT_US_DETAILS_FULLFILLED",
                REJECTED: "CONTACT_US_DETAILS_REJECTED"
            },
            APPLY: {
                URL: "frontend/contact-us/apply",
                FETCH: "CONTACT_US_APPLY",
                PENDING: "CONTACT_US_APPLY_PENDING",
                FULLFILLED: "CONTACT_US_APPLY_FULLFILLED",
                REJECTED: "CONTACT_US_APPLY_REJECTED"
            }
        },
        CUSTOMER_FEEDBACK: {
            URL: "frontend/contact-us/customer-feedback",
            FETCH: "CUSTOMER_FEEDBACK",
            PENDING: "CUSTOMER_FEEDBACK_PENDING",
            FULLFILLED: "CUSTOMER_FEEDBACK_FULLFILLED",
            REJECTED: "CUSTOMER_FEEDBACK_REJECTED"
        },
        CUSTOMER_COMPLAIN: {
            URL: "frontend/contact-us/customer-complain",
            FETCH: "CUSTOMER_COMPLAIN",
            PENDING: "CUSTOMER_COMPLAIN_PENDING",
            FULLFILLED: "CUSTOMER_COMPLAIN_FULLFILLED",
            REJECTED: "CUSTOMER_COMPLAIN_REJECTED"
        },
        ADDRESS: {
            LIST: {
                URL: "frontend/contact-us/address-list",
                FETCH: "ADDRESS_LIST",
                PENDING: "ADDRESS_LIST_PENDING",
                FULLFILLED: "ADDRESS_LIST_FULLFILLED",
                REJECTED: "ADDRESS_LIST_REJECTED"
            }
        }
    },
    NEWSLETTERS: {
        SUBSCRIBE: {
            URL: "newsletters/newsletters_subscribe",
            FETCH: "SUBSCRIBE",
            PENDING: "SUBSCRIBE_PENDING",
            FULLFILLED: "SUBSCRIBE_FULLFILLED",
            REJECTED: "SUBSCRIBE_REJECTED"
        }
    }
};
