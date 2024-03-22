import API from '../../constants/API_Constants';

export const fetch_list = (filters) => ({
    type: API.BANNERS.LIST.FETCH,
    payload: { ...filters }
});

export const fetch_add = (formData) => ({
    type: API.BANNERS.ADD.FETCH,
    payload: formData
});

export const fetch_details = (id) => ({
    type: API.BANNERS.DETAILS.FETCH,
    payload: { id: id }
});

export const fetch_update = (formData) => ({
    type: API.BANNERS.UPDATE.FETCH,
    payload: formData
});

export const fetch_update_status = (id, status) => ({
    type: API.BANNERS.STATUS_UPDATE.FETCH,
    payload: { id: id, status: status }
});