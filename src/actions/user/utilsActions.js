import { API_FRONTEND } from '../../constants/API_Constants';

export const fetch_headermenu = () => ({
    type: API_FRONTEND.UTILS.HEADER_MENU.FETCH
});

export const fetch_banners = () => ({
    type: API_FRONTEND.UTILS.BANNERS.FETCH
});

export const fetch_home_event_popup_details = () => ({
    type: API_FRONTEND.UTILS.HOME_EVENT_POPUP_DETAILS.FETCH
});

export const fetch_states = () => ({
    type: API_FRONTEND.UTILS.STATES.FETCH
});

export const page_content = (slug) => ({
    type: API_FRONTEND.UTILS.PAGE_CONTENT_DETAILS.FETCH,
    payload: { slug: slug }
});

