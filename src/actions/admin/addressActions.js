import API from '../../constants/API_Constants';

export const fetch_list = (filters) => ({
    type: API.ADDRESS.LIST.FETCH,
    payload: { ...filters }
});

export const fetch_add = (formData) => ({
    type: API.ADDRESS.ADD.FETCH,
    payload: formData
});

export const fetch_details = (id) => ({
    type: API.ADDRESS.DETAILS.FETCH,
    payload: { id: id }
});

export const fetch_update = (formData) => ({
    type: API.ADDRESS.UPDATE.FETCH,
    payload: formData
});

export const fetch_update_status = (id, status) => ({
    type: API.ADDRESS.STATUS_UPDATE.FETCH,
    payload: { id: id, status: status }
});