import API from '../../constants/API_Constants';

export const fetch_list = (filters) => ({
    type: API.NEWS.LIST.FETCH,
    payload: { ...filters }
});

export const fetch_add = (formData) => ({
    type: API.NEWS.ADD.FETCH,
    payload: formData
});

export const fetch_details = (id) => ({
    type: API.NEWS.DETAILS.FETCH,
    payload: { id: id }
});

export const fetch_update = (formData) => ({
    type: API.NEWS.UPDATE.FETCH,
    payload: formData
});

export const fetch_update_status = (id, status) => ({
    type: API.NEWS.STATUS_UPDATE.FETCH,
    payload: { id: id, status: status }
});