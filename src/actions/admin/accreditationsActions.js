import API from '../../constants/API_Constants';

export const fetch_list = (filters) => ({
    type: API.ACCREDITATIONS.LIST.FETCH,
    payload: { ...filters }
});

export const fetch_add = (formData) => ({
    type: API.ACCREDITATIONS.ADD.FETCH,
    payload: formData
});

export const fetch_details = (id) => ({
    type: API.ACCREDITATIONS.DETAILS.FETCH,
    payload: { id: id }
});

export const fetch_update = (formData) => ({
    type: API.ACCREDITATIONS.UPDATE.FETCH,
    payload: formData
});

export const fetch_update_status = (id, status) => ({
    type: API.ACCREDITATIONS.STATUS_UPDATE.FETCH,
    payload: { id: id, status: status }
});
