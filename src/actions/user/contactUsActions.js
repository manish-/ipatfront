import {API_FRONTEND} from '../../constants/API_Constants';

export const save_contact_us_form_query = (contactUsForm) => ({
    type: API_FRONTEND.PAGES.CONTACT_US.APPLY.FETCH,
    payload: contactUsForm
});


export const save_customer_feedback = (formdata) => ({
    type: API_FRONTEND.PAGES.CUSTOMER_FEEDBACK.FETCH,
    payload: formdata
});

export const save_customer_complain = (formdata) => ({
    type: API_FRONTEND.PAGES.CUSTOMER_COMPLAIN.FETCH,
    payload: formdata
});
