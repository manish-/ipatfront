import API from '../../constants/API_Constants';

export const fetch_list = (filters) => ({
    type: API.FAQS.LIST.FETCH,
    payload: { ...filters }
});

export const fetch_add = (formData) => ({
    type: API.FAQS.ADD.FETCH,
    payload: formData
});

export const fetch_details = (id) => ({
    type: API.FAQS.DETAILS.FETCH,
    payload: { id: id }
});

export const fetch_update = (formData) => ({
    type: API.FAQS.UPDATE.FETCH,
    payload: formData
});

export const fetch_update_status = (id, status) => ({
    type: API.FAQS.STATUS_UPDATE.FETCH,
    payload: { id: id, status: status }
});


export const fetch_meta_details = (id) => ({
    type: API.FAQS.META_DETAILS.FETCH,
    payload: { id: id }
});

export const fetch_meta_update = (formData) => ({
    type: API.FAQS.META_UPDATE.FETCH,
    payload: formData
});
