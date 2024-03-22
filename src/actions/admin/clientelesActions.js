import API from '../../constants/API_Constants';

export const fetch_list = (filters) => ({
    type: API.CLIENTELE.LIST.FETCH,
    payload: { ...filters }
});

export const fetch_add = (formData) => ({
    type: API.CLIENTELE.ADD.FETCH,
    payload: formData
});

export const fetch_details = (id) => ({
    type: API.CLIENTELE.DETAILS.FETCH,
    payload: { id: id }
});

export const fetch_update = (formData) => ({
    type: API.CLIENTELE.UPDATE.FETCH,
    payload: formData
});

export const fetch_update_status = (id, status) => ({
    type: API.CLIENTELE.STATUS_UPDATE.FETCH,
    payload: { id: id, status: status }
});

export const fetch_meta_details = (id) => ({
    type: API.CLIENTELE.META_DETAILS.FETCH,
    payload: { id: id }
});

export const fetch_meta_update = (formData) => ({
    type: API.CLIENTELE.META_UPDATE.FETCH,
    payload: formData
});

export const fetch_client_dropdown_list = () => ({
    type: API.CLIENTELE.CLIENTS_DROPDOWN_LIST.FETCH
});

export const fetch_client_projects_list = (filters) => ({
    type: API.CLIENTELE.PROJECTS_LIST.FETCH,
    payload: { ...filters }
});

export const fetch_client_projects_details = (clientId, id) => ({
    type: API.CLIENTELE.PROJECTS_DETAILS.FETCH,
    payload: { clientId: clientId, id: id }
});

export const fetch_client_projects_create = (formData) => ({
    type: API.CLIENTELE.PROJECTS_CREATE.FETCH,
    payload: formData
});

export const fetch_client_projects_update = (formData) => ({
    type: API.CLIENTELE.PROJECTS_UPDATE.FETCH,
    payload: formData
});

export const fetch_client_projects_update_status = (clientId, id, status) => ({
    type: API.CLIENTELE.PROJECTS_UPDATE_STATUS.FETCH,
    payload: { clientId: clientId, id: id, status: status }
});