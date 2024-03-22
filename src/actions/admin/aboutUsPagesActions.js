import API from '../../constants/API_Constants';

export const fetch_list = (filters) => ({
    type: API.ABOUT_US_PAGES.LIST.FETCH,
    payload: { ...filters }
});

export const fetch_add = (formData) => ({
    type: API.ABOUT_US_PAGES.ADD.FETCH,
    payload: formData
});

export const fetch_details = (id) => ({
    type: API.ABOUT_US_PAGES.DETAILS.FETCH,
    payload: { id: id }
});

export const fetch_update = (formData) => ({
    type: API.ABOUT_US_PAGES.UPDATE.FETCH,
    payload: formData
});

export const fetch_update_status = (id, status) => ({
    type: API.ABOUT_US_PAGES.STATUS_UPDATE.FETCH,
    payload: { pageId: id, status: status }
});