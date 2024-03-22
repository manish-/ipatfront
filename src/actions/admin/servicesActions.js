import API from '../../constants/API_Constants';

export const fetch_list = (filters) => ({
    type: API.SERVICES.LIST.FETCH,
    payload: { ...filters }
});

export const fetch_add = (formData) => ({
    type: API.SERVICES.ADD.FETCH,
    payload: formData
});

export const fetch_details = (id) => ({
    type: API.SERVICES.DETAILS.FETCH,
    payload: { id: id }
});

export const fetch_update = (formData) => ({
    type: API.SERVICES.UPDATE.FETCH,
    payload: formData
});

export const fetch_update_status = (id, status,filter) => ({
    type: API.SERVICES.STATUS_UPDATE.FETCH,
    payload: { id: id, status: status,filter }
});