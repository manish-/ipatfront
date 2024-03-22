import { takeEvery } from "redux-saga/effects";
// import { takeLatest } from "@redux-saga/core/effects";

import { API_FRONTEND } from "../../constants/API_Constants";

import * as authenticationSaga from "./authentication";
import * as utilsSaga from "./utils";

import * as pagesSaga from "./pages";

export const rootSaga = function* () {


    /******************************    Authentication Part Start */
    yield takeEvery(API_FRONTEND.AUTH.REGISTER.FETCH, authenticationSaga.register_donor);
    yield takeEvery(API_FRONTEND.AUTH.LOGIN.WITH_PASSWORD.FETCH, authenticationSaga.fetch_login_token);
    yield takeEvery(API_FRONTEND.AUTH.LOGIN.VERIFY_TOKEN.FETCH, authenticationSaga.verify_token);
    yield takeEvery(API_FRONTEND.AUTH.LOGIN.SIGNOUT.FETCH, authenticationSaga.signout);

    yield takeEvery(API_FRONTEND.AUTH.FORGET_PASSWORD.FETCH, authenticationSaga.forgot_password);
    yield takeEvery(API_FRONTEND.AUTH.VERIFY_FORGET_PASSWORD.FETCH, authenticationSaga.verify_forgot_password_otp);
    yield takeEvery(API_FRONTEND.AUTH.RESET_FORGET_PASSWORD_FORM.FETCH, authenticationSaga.reset_forgot_password_form);


    /******************************    Authentication Part End */

    yield takeEvery(API_FRONTEND.PAGES.ABOUT_US.DETAILS.FETCH, pagesSaga.fetch_about_us_page_content);
    yield takeEvery(API_FRONTEND.PAGES.SERVICES.LIST.FETCH, pagesSaga.fetch_service_page_subpages_list);
    yield takeEvery(API_FRONTEND.PAGES.SERVICES.DETAILS.FETCH, pagesSaga.fetch_service_page_content);
    yield takeEvery(API_FRONTEND.PAGES.PROJECTS.DETAILS.FETCH, pagesSaga.fetch_project_page_content);
    yield takeEvery(API_FRONTEND.PAGES.PROJECTS.LIST_BY.FETCH, pagesSaga.fetch_project_list_by);
    yield takeEvery(API_FRONTEND.PAGES.PROJECTS.LIST_HOME.FETCH, pagesSaga.fetch_project_list_home);
    yield takeEvery(API_FRONTEND.PAGES.PROJECTS.SECTORS_LIST.FETCH, pagesSaga.fetch_project_sectors_list);
    yield takeEvery(API_FRONTEND.PAGES.PROJECTS.PROJECT_DETAILS.FETCH, pagesSaga.fetch_project_details);
    yield takeEvery(API_FRONTEND.PAGES.LABORATORY.DETAILS.FETCH, pagesSaga.fetch_laboratory_page_content);
    yield takeEvery(API_FRONTEND.PAGES.CLIENTELE.DETAILS.FETCH, pagesSaga.fetch_clientele_page_content);
    yield takeEvery(API_FRONTEND.PAGES.CLIENTELE.PROJECT_LIST.FETCH, pagesSaga.fetch_clientele_project_list);
    yield takeEvery(API_FRONTEND.PAGES.CLIENTELE.PROJECT_LIST_CLEAR.FETCH, pagesSaga.clear_clientele_project_list);
    yield takeEvery(API_FRONTEND.PAGES.CAREERS.LIST.FETCH, pagesSaga.fetch_careers_page_list);
    yield takeEvery(API_FRONTEND.PAGES.CAREERS.DETAILS.FETCH, pagesSaga.fetch_careers_page_details);
    yield takeEvery(API_FRONTEND.PAGES.CAREERS.APPLY.FETCH, pagesSaga.apply_for_career);
    yield takeEvery(API_FRONTEND.PAGES.CAREERS.META_DETAILS.FETCH, pagesSaga.fetch_careers_page_meta_details);
    yield takeEvery(API_FRONTEND.PAGES.FAQS.META_DETAILS.FETCH, pagesSaga.fetch_faqs_page_meta_details);
    yield takeEvery(API_FRONTEND.PAGES.FAQS.LIST.FETCH, pagesSaga.fetch_faqs_list);


    yield takeEvery(API_FRONTEND.PAGES.DOWNLOAD.DETAILS.FETCH, pagesSaga.fetch_download_page_details);

    yield takeEvery(API_FRONTEND.PAGES.CONTACT_US.DETAILS.FETCH, pagesSaga.fetch_contact_page_details);
    yield takeEvery(API_FRONTEND.PAGES.CONTACT_US.APPLY.FETCH, pagesSaga.submit_concat_query);

    yield takeEvery(API_FRONTEND.PAGES.ADDRESS.LIST.FETCH, pagesSaga.fetch_address_list);

    yield takeEvery(API_FRONTEND.PAGES.ACCREDITATIONS.LIST.FETCH, pagesSaga.fetch_accreditations_list);

    yield takeEvery(API_FRONTEND.PAGES.NEWS.LIST.FETCH, pagesSaga.fetch_news_list);
    yield takeEvery(API_FRONTEND.PAGES.NEWS.DETAILS.FETCH, pagesSaga.fetch_news_details);

    yield takeEvery(API_FRONTEND.PAGES.CUSTOMER_FEEDBACK.FETCH, pagesSaga.save_customer_feedback);
    yield takeEvery(API_FRONTEND.PAGES.CUSTOMER_COMPLAIN.FETCH, pagesSaga.save_customer_complain);

    yield takeEvery(API_FRONTEND.PAGES.SEMINARS.LIST.FETCH, pagesSaga.fetch_seminars_list);
    yield takeEvery(API_FRONTEND.PAGES.SEMINARS.DETAILS.FETCH, pagesSaga.fetch_seminars_details);


    yield takeEvery(API_FRONTEND.PAGES.NEW_INITIATIVES.META_DETAILS.FETCH, pagesSaga.fetch_new_initialtive_meta_details);
    yield takeEvery(API_FRONTEND.PAGES.NEW_INITIATIVES.LIST.FETCH, pagesSaga.fetch_new_initialtive_list);
    yield takeEvery(API_FRONTEND.PAGES.NEW_INITIATIVES.DETAILS.FETCH, pagesSaga.fetch_new_initialtive_details);


    /******************************    Utils Part Start */

    yield takeEvery(API_FRONTEND.UTILS.HEADER_MENU.FETCH, utilsSaga.fetch_headermenu);
    yield takeEvery(API_FRONTEND.UTILS.BANNERS.FETCH, utilsSaga.fetch_banners);
    yield takeEvery(API_FRONTEND.UTILS.HOME_EVENT_POPUP_DETAILS.FETCH, utilsSaga.fetch_home_event_popup_details);
    yield takeEvery(API_FRONTEND.UTILS.STATES.FETCH, utilsSaga.fetch_state);
    yield takeEvery(API_FRONTEND.UTILS.PAGE_CONTENT_DETAILS.FETCH, utilsSaga.page_content);

    // 
    /******************************    Utils Part End */
};