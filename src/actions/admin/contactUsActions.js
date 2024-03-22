import API from '../../constants/API_Constants';

export const fetch_enquiry_list = (filters) => ({
    type: API.CONTACT_US.ENQUIRY_LIST.FETCH,
    payload: { ...filters }
});
export const fetch_meta_details = (id) => ({
    type: API.CONTACT_US.META_DETAILS.FETCH,
    payload: { id: id }
});

export const fetch_meta_update = (formData) => ({
    type: API.CONTACT_US.META_UPDATE.FETCH,
    payload: formData
});

export const fetch_customer_complains = (filters) => ({
    type: API.CONTACT_US.CUSTOMER_COMPLAINS.FETCH,
    payload: { ...filters }
});

export const fetch_customer_complain_details = (id) => ({
    type: API.CONTACT_US.CUSTOMER_COMPLAIN_DETAILS.FETCH,
    payload: { id: id }
});

export const fetch_customer_feedbacks = (filters) => ({
    type: API.CONTACT_US.CUSTOMER_FEEDBACKS.FETCH,
    payload: { ...filters }
});

export const fetch_customer_feedback_details = (id) => ({
    type: API.CONTACT_US.CUSTOMER_FEEDBACKS_DETAILS.FETCH,
    payload: { id: id }
});
