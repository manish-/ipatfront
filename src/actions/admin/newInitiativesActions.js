import API from '../../constants/API_Constants';

export const fetch_list = (filters) => ({
    type: API.NEW_INITIATIVES.LIST.FETCH,
    payload: { ...filters }
});

export const fetch_add = (formData) => ({
    type: API.NEW_INITIATIVES.ADD.FETCH,
    payload: formData
});

export const fetch_details = (id) => ({
    type: API.NEW_INITIATIVES.DETAILS.FETCH,
    payload: { id: id }
});

export const fetch_update = (formData) => ({
    type: API.NEW_INITIATIVES.UPDATE.FETCH,
    payload: formData
});

export const fetch_update_status = (id, status) => ({
    type: API.NEW_INITIATIVES.STATUS_UPDATE.FETCH,
    payload: { id: id, status: status }
});

export const fetch_meta_details = (id) => ({
    type: API.NEW_INITIATIVES.META_DETAILS.FETCH,
    payload: { id: id }
});

export const fetch_meta_update = (formData) => ({
    type: API.NEW_INITIATIVES.META_UPDATE.FETCH,
    payload: formData
});
