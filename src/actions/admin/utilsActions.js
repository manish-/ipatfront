import API from '../../constants/API_Constants';

export const fetch_states = () => ({
    type: API.UTILS.STATES.FETCH
});

export const fetch_district = (state) => ({
    type: API.UTILS.DISTRICT.FETCH,
    payload: { state: state }
});

export const fetch_project_type = () => ({
    type: API.UTILS.PROJECT_TYPES.FETCH
});

export const fetch_sectors = () => ({
    type: API.UTILS.SECTORS.FETCH
});

export const upload_editor_file = (formData) => ({
    type: API.UTILS.UPLOAD_EDITOR_FILE.FETCH,
    payload: formData
});

export const clear_editor_file = () => ({
    type: API.UTILS.CLEAR_EDITOR_FILE.FETCH
});


export const page_content = (slug) => ({
    type: API.UTILS.PAGE_CONTENT_DETAILS.FETCH,
    payload: { slug: slug }
});

export const page_content_update = (formData) => ({
    type: API.UTILS.PAGE_CONTENT_UPDATE.FETCH,
    payload: formData
});
