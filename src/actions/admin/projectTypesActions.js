import API from '../../constants/API_Constants';

export const fetch_list = (filters) => ({
    type: API.PROJECT_TYPES.LIST.FETCH,
    payload: { ...filters }
});

export const fetch_add = (formData) => ({
    type: API.PROJECT_TYPES.ADD.FETCH,
    payload: formData
});

export const fetch_details = (id) => ({
    type: API.PROJECT_TYPES.DETAILS.FETCH,
    payload: { id: id }
});

export const fetch_update = (formData) => ({
    type: API.PROJECT_TYPES.UPDATE.FETCH,
    payload: formData
});

export const fetch_update_status = (id, status) => ({
    type: API.PROJECT_TYPES.STATUS_UPDATE.FETCH,
    payload: { id: id, status: status }
});