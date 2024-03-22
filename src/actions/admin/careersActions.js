import API from '../../constants/API_Constants';

export const fetch_list = (filters) => ({
    type: API.CAREERS.LIST.FETCH,
    payload: { ...filters }
});

export const fetch_add = (formData) => ({
    type: API.CAREERS.ADD.FETCH,
    payload: formData
});

export const fetch_details = (id) => ({
    type: API.CAREERS.DETAILS.FETCH,
    payload: { id: id }
});

export const fetch_update = (formData) => ({
    type: API.CAREERS.UPDATE.FETCH,
    payload: formData
});

export const fetch_update_status = (id, status) => ({
    type: API.CAREERS.STATUS_UPDATE.FETCH,
    payload: { id: id, status: status }
});

export const fetch_meta_details = (id) => ({
    type: API.CAREERS.META_DETAILS.FETCH,
    payload: { id: id }
});

export const fetch_meta_update = (formData) => ({
    type: API.CAREERS.META_UPDATE.FETCH,
    payload: formData
});
