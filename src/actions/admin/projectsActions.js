import API from '../../constants/API_Constants';

export const fetch_list = (filters) => ({
    type: API.PROJECTS.LIST.FETCH,
    payload: { ...filters }
});

export const fetch_add = (formData) => ({
    type: API.PROJECTS.ADD.FETCH,
    payload: formData
});

export const fetch_details = (id) => ({
    type: API.PROJECTS.DETAILS.FETCH,
    payload: { id: id }
});

export const fetch_update = (formData) => ({
    type: API.PROJECTS.UPDATE.FETCH,
    payload: formData
});

export const fetch_update_status = (id, status) => ({
    type: API.PROJECTS.STATUS_UPDATE.FETCH,
    payload: { id: id, status: status }
});