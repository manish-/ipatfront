import API from '../../constants/API_Constants';

export const fetch_list = (filters) => ({
    type: API.DOWNLOADS.LIST.FETCH,
    payload: { ...filters }
});

export const fetch_add = (formData) => ({
    type: API.DOWNLOADS.ADD.FETCH,
    payload: formData
});

export const fetch_details = (id) => ({
    type: API.DOWNLOADS.DETAILS.FETCH,
    payload: { id: id }
});

export const fetch_update = (formData) => ({
    type: API.DOWNLOADS.UPDATE.FETCH,
    payload: formData
});

export const fetch_update_status = (id, status) => ({
    type: API.DOWNLOADS.STATUS_UPDATE.FETCH,
    payload: { id: id, status: status }
});

export const fetch_meta_details = (id) => ({
    type: API.DOWNLOADS.META_DETAILS.FETCH,
    payload: { id: id }
});

export const fetch_meta_update = (formData) => ({
    type: API.DOWNLOADS.META_UPDATE.FETCH,
    payload: formData
});