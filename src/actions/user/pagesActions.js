import { API_FRONTEND } from '../../constants/API_Constants';

export const fetch_about_us_page_content = (slug) => ({
    type: API_FRONTEND.PAGES.ABOUT_US.DETAILS.FETCH,
    payload: { slug: slug }
});

export const fetch_service_page_subpages_list = (filter) => ({
    type: API_FRONTEND.PAGES.SERVICES.LIST.FETCH,
    payload: filter
});

export const fetch_service_page_content = (slug) => ({
    type: API_FRONTEND.PAGES.SERVICES.DETAILS.FETCH,
    payload: { slug: slug }
});


export const fetch_project_page_subpages_list = (filter) => ({
    type: API_FRONTEND.PAGES.PROJECTS.LIST.FETCH,
    payload: filter
});
export const fetch_project_page_content = (slug) => ({
    type: API_FRONTEND.PAGES.PROJECTS.DETAILS.FETCH,
    payload: { slug: slug }
});

export const fetch_project_list_by = (filter) => ({
    type: API_FRONTEND.PAGES.PROJECTS.LIST_BY.FETCH,
    payload: filter
});

export const fetch_project_list_home = (state) => ({
    type: API_FRONTEND.PAGES.PROJECTS.LIST_HOME.FETCH,
    payload: { state: state }
});

export const fetch_project_sectors_list = () => ({
    type: API_FRONTEND.PAGES.PROJECTS.SECTORS_LIST.FETCH
});

export const fetch_project_details = (id) => ({
    type: API_FRONTEND.PAGES.PROJECTS.PROJECT_DETAILS.FETCH,
    payload: { id: id }
});


export const fetch_laboratory_page_content = (slug) => ({
    type: API_FRONTEND.PAGES.LABORATORY.DETAILS.FETCH,
    payload: { slug: slug }
});

export const fetch_clientele_page_details = (slug, firstRow = 0) => ({
    type: API_FRONTEND.PAGES.CLIENTELE.DETAILS.FETCH,
    payload: { slug: slug, firstRow: firstRow }
});

export const fetch_clientele_project_list = (id) => ({
    type: API_FRONTEND.PAGES.CLIENTELE.PROJECT_LIST.FETCH,
    payload: { id: id }
});

export const clear_clientele_project_list = (id) => ({
    type: API_FRONTEND.PAGES.CLIENTELE.PROJECT_LIST_CLEAR.FETCH
});

export const fetch_careers_page_list = (filter) => ({
    type: API_FRONTEND.PAGES.CAREERS.LIST.FETCH,
    payload: filter
});

export const fetch_careers_page_details = (slug) => ({
    type: API_FRONTEND.PAGES.CAREERS.DETAILS.FETCH,
    payload: { slug: slug }
});

export const apply_for_career = (formData) => ({
    type: API_FRONTEND.PAGES.CAREERS.APPLY.FETCH,
    payload: formData
});

export const fetch_careers_page_meta_details = () => ({
    type: API_FRONTEND.PAGES.CAREERS.META_DETAILS.FETCH
});

export const fetch_faqs_page_meta_details = () => ({
    type: API_FRONTEND.PAGES.FAQS.META_DETAILS.FETCH
});

export const fetch_faqs_list = () => ({
    type: API_FRONTEND.PAGES.FAQS.LIST.FETCH
});


export const fetch_download_page_details = (slug) => ({
    type: API_FRONTEND.PAGES.DOWNLOAD.DETAILS.FETCH,
    payload: { slug: slug }
});


export const fetch_contact_page_details = (slug) => ({
    type: API_FRONTEND.PAGES.CONTACT_US.DETAILS.FETCH,
    payload: { slug: slug }
});

export const submit_concat_query = (formData) => ({
    type: API_FRONTEND.PAGES.CONTACT_US.APPLY.FETCH,
    payload: formData
});

export const fetch_address_list = () => ({
    type: API_FRONTEND.PAGES.ADDRESS.LIST.FETCH
});

export const fetch_accreditations_list = (filter) => ({
    type: API_FRONTEND.PAGES.ACCREDITATIONS.LIST.FETCH,
    payload: filter
});


export const fetch_news_list = (filter) => ({
    type: API_FRONTEND.PAGES.NEWS.LIST.FETCH,
    payload: filter
});

export const fetch_news_details = (slug) => ({
    type: API_FRONTEND.PAGES.NEWS.DETAILS.FETCH,
    payload: { slug: slug }
});


export const fetch_seminars_list = (filter) => ({
    type: API_FRONTEND.PAGES.SEMINARS.LIST.FETCH,
    payload: filter
});

export const fetch_seminars_details = (slug) => ({
    type: API_FRONTEND.PAGES.SEMINARS.DETAILS.FETCH,
    payload: { slug: slug }
});


export const fetch_new_initialtive_list = (filters) => ({
    type: API_FRONTEND.PAGES.NEW_INITIATIVES.LIST.FETCH,
    payload: { ...filters }
});

export const fetch_new_initialtive_details = (slug) => ({
    type: API_FRONTEND.PAGES.NEW_INITIATIVES.DETAILS.FETCH,
    payload: { slug: slug }
});

export const fetch_new_initialtive_meta_details = () => ({
    type: API_FRONTEND.PAGES.NEW_INITIATIVES.META_DETAILS.FETCH
});
