import API from '../../constants/API_Constants';

export const fetch_details = (id) => ({
    type: API.LABORATORY.DETAILS.FETCH,
    payload: { id: id }
});

export const fetch_update = (formData) => ({
    type: API.LABORATORY.UPDATE.FETCH,
    payload: formData
});
