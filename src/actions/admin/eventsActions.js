import API from '../../constants/API_Constants';

export const fetch_details = () => ({
    type: API.EVENTS.DETAILS.FETCH
});

export const fetch_update = (formData) => ({
    type: API.EVENTS.UPDATE.FETCH,
    payload: formData
});
