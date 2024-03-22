import { takeEvery } from "redux-saga/effects";
// import { takeLatest } from "@redux-saga/core/effects";

import API from "../../constants/API_Constants";

// import * as utilsSaga from "./utils";
import * as authenticationSaga from "./authentication";
import * as aboutUsPagesSaga from "./aboutUsPages";
import * as servicesSaga from "./services";
import * as seminarsSaga from "./seminars";
import * as newsSaga from "./news";
import * as clientelesSaga from "./clienteles";
import * as laboratorySaga from "./laboratory";
import * as careersSaga from "./careers";
import * as newInitiativesSaga from "./newInitiatives";
import * as downloadsSaga from "./downloads";
import * as accreditationsSaga from "./accreditations";
import * as faqsSaga from "./faqs";
import * as contactUsSaga from "./contactUs";
import * as addressSaga from "./address";
import * as projectsSaga from "./projects";
import * as projectTypesSaga from "./projectTypes";
import * as bannersSaga from "./banners";
import * as eventsSaga from "./events";

import * as utilsSaga from "./utils";


export const rootSaga = function* () {


    /******************************    Authentication Part Start */

    yield takeEvery(API.LOGIN.WITH_PASSWORD.FETCH, authenticationSaga.fetch_login_token);
    yield takeEvery(API.LOGIN.VERIFY_TOKEN.FETCH, authenticationSaga.verify_token);
    yield takeEvery(API.LOGIN.SIGNOUT.FETCH, authenticationSaga.signout);

    /******************************    Authentication Part End */


    /******************************    About Us Part Start */

    yield takeEvery(API.ABOUT_US_PAGES.LIST.FETCH, aboutUsPagesSaga.fetch_list);
    yield takeEvery(API.ABOUT_US_PAGES.ADD.FETCH, aboutUsPagesSaga.fetch_add);
    yield takeEvery(API.ABOUT_US_PAGES.DETAILS.FETCH, aboutUsPagesSaga.fetch_details);
    yield takeEvery(API.ABOUT_US_PAGES.UPDATE.FETCH, aboutUsPagesSaga.fetch_update);
    yield takeEvery(API.ABOUT_US_PAGES.STATUS_UPDATE.FETCH, aboutUsPagesSaga.fetch_update_status);

    /******************************    About Us Part End */


    /******************************    Service Part Start */

    yield takeEvery(API.SERVICES.LIST.FETCH, servicesSaga.fetch_list);
    yield takeEvery(API.SERVICES.ADD.FETCH, servicesSaga.fetch_add);
    yield takeEvery(API.SERVICES.DETAILS.FETCH, servicesSaga.fetch_details);
    yield takeEvery(API.SERVICES.UPDATE.FETCH, servicesSaga.fetch_update);
    yield takeEvery(API.SERVICES.STATUS_UPDATE.FETCH, servicesSaga.fetch_update_status);

    /******************************    Service Part End */


    /******************************    Seminars Part Start */

    yield takeEvery(API.SEMINARS.LIST.FETCH, seminarsSaga.fetch_list);
    yield takeEvery(API.SEMINARS.ADD.FETCH, seminarsSaga.fetch_add);
    yield takeEvery(API.SEMINARS.DETAILS.FETCH, seminarsSaga.fetch_details);
    yield takeEvery(API.SEMINARS.UPDATE.FETCH, seminarsSaga.fetch_update);
    yield takeEvery(API.SEMINARS.STATUS_UPDATE.FETCH, seminarsSaga.fetch_update_status);

    /******************************    Seminars Part End */



    /******************************    News Part Start */

    yield takeEvery(API.NEWS.LIST.FETCH, newsSaga.fetch_list);
    yield takeEvery(API.NEWS.ADD.FETCH, newsSaga.fetch_add);
    yield takeEvery(API.NEWS.DETAILS.FETCH, newsSaga.fetch_details);
    yield takeEvery(API.NEWS.UPDATE.FETCH, newsSaga.fetch_update);
    yield takeEvery(API.NEWS.STATUS_UPDATE.FETCH, newsSaga.fetch_update_status);

    /******************************    News Part End */

    /******************************    Banners Part Start */

    yield takeEvery(API.BANNERS.LIST.FETCH, bannersSaga.fetch_list);
    yield takeEvery(API.BANNERS.ADD.FETCH, bannersSaga.fetch_add);
    yield takeEvery(API.BANNERS.DETAILS.FETCH, bannersSaga.fetch_details);
    yield takeEvery(API.BANNERS.UPDATE.FETCH, bannersSaga.fetch_update);
    yield takeEvery(API.BANNERS.STATUS_UPDATE.FETCH, bannersSaga.fetch_update_status);

    /******************************    Banners Part End */



    /******************************    Banners Part Start */

    yield takeEvery(API.EVENTS.DETAILS.FETCH, eventsSaga.fetch_details);
    yield takeEvery(API.EVENTS.UPDATE.FETCH, eventsSaga.fetch_update);

    /******************************    Banners Part End */


    /******************************    Project Part Start */

    yield takeEvery(API.PROJECTS.LIST.FETCH, projectsSaga.fetch_list);
    yield takeEvery(API.PROJECTS.ADD.FETCH, projectsSaga.fetch_add);
    yield takeEvery(API.PROJECTS.DETAILS.FETCH, projectsSaga.fetch_details);
    yield takeEvery(API.PROJECTS.UPDATE.FETCH, projectsSaga.fetch_update);
    yield takeEvery(API.PROJECTS.STATUS_UPDATE.FETCH, projectsSaga.fetch_update_status);

    /******************************    Project Part End */

    /******************************    Project Types Part Start */

    yield takeEvery(API.PROJECT_TYPES.LIST.FETCH, projectTypesSaga.fetch_list);
    yield takeEvery(API.PROJECT_TYPES.ADD.FETCH, projectTypesSaga.fetch_add);
    yield takeEvery(API.PROJECT_TYPES.DETAILS.FETCH, projectTypesSaga.fetch_details);
    yield takeEvery(API.PROJECT_TYPES.UPDATE.FETCH, projectTypesSaga.fetch_update);
    yield takeEvery(API.PROJECT_TYPES.STATUS_UPDATE.FETCH, projectTypesSaga.fetch_update_status);

    /******************************    Project Types Part End */


    /******************************    Clientete Part Start */

    yield takeEvery(API.CLIENTELE.LIST.FETCH, clientelesSaga.fetch_list);
    yield takeEvery(API.CLIENTELE.ADD.FETCH, clientelesSaga.fetch_add);
    yield takeEvery(API.CLIENTELE.DETAILS.FETCH, clientelesSaga.fetch_details);
    yield takeEvery(API.CLIENTELE.UPDATE.FETCH, clientelesSaga.fetch_update);
    yield takeEvery(API.CLIENTELE.STATUS_UPDATE.FETCH, clientelesSaga.fetch_update_status);
    yield takeEvery(API.CLIENTELE.META_DETAILS.FETCH, clientelesSaga.fetch_meta_details);
    yield takeEvery(API.CLIENTELE.META_UPDATE.FETCH, clientelesSaga.fetch_meta_update);
    yield takeEvery(API.CLIENTELE.CLIENTS_DROPDOWN_LIST.FETCH, clientelesSaga.fetch_client_dropdown_list);
    yield takeEvery(API.CLIENTELE.PROJECTS_LIST.FETCH, clientelesSaga.fetch_client_projects_list);
    yield takeEvery(API.CLIENTELE.PROJECTS_DETAILS.FETCH, clientelesSaga.fetch_client_projects_details);

    yield takeEvery(API.CLIENTELE.PROJECTS_CREATE.FETCH, clientelesSaga.fetch_client_projects_create);
    yield takeEvery(API.CLIENTELE.PROJECTS_UPDATE.FETCH, clientelesSaga.fetch_client_projects_update);
    yield takeEvery(API.CLIENTELE.PROJECTS_UPDATE_STATUS.FETCH, clientelesSaga.fetch_client_projects_update_status);

    /******************************    Clientete Part End */

    /******************************    Laboratory Part Start */

    yield takeEvery(API.LABORATORY.DETAILS.FETCH, laboratorySaga.fetch_details);
    yield takeEvery(API.LABORATORY.UPDATE.FETCH, laboratorySaga.fetch_update);

    /******************************    Laboratory Part End */


    /******************************    Careers Part Start */

    yield takeEvery(API.CAREERS.LIST.FETCH, careersSaga.fetch_list);
    yield takeEvery(API.CAREERS.ADD.FETCH, careersSaga.fetch_add);
    yield takeEvery(API.CAREERS.DETAILS.FETCH, careersSaga.fetch_details);
    yield takeEvery(API.CAREERS.UPDATE.FETCH, careersSaga.fetch_update);
    yield takeEvery(API.CAREERS.STATUS_UPDATE.FETCH, careersSaga.fetch_update_status);

    yield takeEvery(API.CAREERS.META_DETAILS.FETCH, careersSaga.fetch_meta_details);
    yield takeEvery(API.CAREERS.META_UPDATE.FETCH, careersSaga.fetch_meta_update);

    /******************************    Careers Part End */
     /******************************    new Initiatives Part Start */

     yield takeEvery(API.NEW_INITIATIVES.LIST.FETCH, newInitiativesSaga.fetch_list);
     yield takeEvery(API.NEW_INITIATIVES.ADD.FETCH, newInitiativesSaga.fetch_add);
     yield takeEvery(API.NEW_INITIATIVES.DETAILS.FETCH, newInitiativesSaga.fetch_details);
     yield takeEvery(API.NEW_INITIATIVES.UPDATE.FETCH, newInitiativesSaga.fetch_update);
     yield takeEvery(API.NEW_INITIATIVES.STATUS_UPDATE.FETCH, newInitiativesSaga.fetch_update_status);
 
     yield takeEvery(API.NEW_INITIATIVES.META_DETAILS.FETCH, newInitiativesSaga.fetch_meta_details);
     yield takeEvery(API.NEW_INITIATIVES.META_UPDATE.FETCH, newInitiativesSaga.fetch_meta_update);
 
     /******************************    new Initiatives Part End */

    


    /******************************    Downloads Part Start */

    yield takeEvery(API.DOWNLOADS.LIST.FETCH, downloadsSaga.fetch_list);
    yield takeEvery(API.DOWNLOADS.ADD.FETCH, downloadsSaga.fetch_add);
    yield takeEvery(API.DOWNLOADS.DETAILS.FETCH, downloadsSaga.fetch_details);
    yield takeEvery(API.DOWNLOADS.UPDATE.FETCH, downloadsSaga.fetch_update);
    yield takeEvery(API.DOWNLOADS.STATUS_UPDATE.FETCH, downloadsSaga.fetch_update_status);
    yield takeEvery(API.DOWNLOADS.META_DETAILS.FETCH, downloadsSaga.fetch_meta_details);
    yield takeEvery(API.DOWNLOADS.META_UPDATE.FETCH, downloadsSaga.fetch_meta_update);

    /******************************    Downloads Part End */


    /******************************    AccreditationsSaga Part Start */

    yield takeEvery(API.ACCREDITATIONS.LIST.FETCH, accreditationsSaga.fetch_list);
    yield takeEvery(API.ACCREDITATIONS.ADD.FETCH, accreditationsSaga.fetch_add);
    yield takeEvery(API.ACCREDITATIONS.DETAILS.FETCH, accreditationsSaga.fetch_details);
    yield takeEvery(API.ACCREDITATIONS.UPDATE.FETCH, accreditationsSaga.fetch_update);
    yield takeEvery(API.ACCREDITATIONS.STATUS_UPDATE.FETCH, accreditationsSaga.fetch_update_status);


    /******************************    AccreditationsSaga Part End */


    /******************************    FAQs Part Start */

    yield takeEvery(API.FAQS.LIST.FETCH, faqsSaga.fetch_list);
    yield takeEvery(API.FAQS.ADD.FETCH, faqsSaga.fetch_add);
    yield takeEvery(API.FAQS.DETAILS.FETCH, faqsSaga.fetch_details);
    yield takeEvery(API.FAQS.UPDATE.FETCH, faqsSaga.fetch_update);
    yield takeEvery(API.FAQS.STATUS_UPDATE.FETCH, faqsSaga.fetch_update_status);
    yield takeEvery(API.FAQS.META_DETAILS.FETCH, faqsSaga.fetch_meta_details);
    yield takeEvery(API.FAQS.META_UPDATE.FETCH, faqsSaga.fetch_meta_update);


    /******************************    FAQs Part End */


    /******************************    Contact Us Part Start */

    yield takeEvery(API.CONTACT_US.ENQUIRY_LIST.FETCH, contactUsSaga.fetch_enquiry_list);
    yield takeEvery(API.CONTACT_US.CUSTOMER_COMPLAINS.FETCH, contactUsSaga.fetch_customer_complains);
    yield takeEvery(API.CONTACT_US.CUSTOMER_COMPLAIN_DETAILS.FETCH, contactUsSaga.fetch_customer_complain_details);
    yield takeEvery(API.CONTACT_US.CUSTOMER_FEEDBACKS.FETCH, contactUsSaga.fetch_customer_feedbacks);
    yield takeEvery(API.CONTACT_US.CUSTOMER_FEEDBACKS_DETAILS.FETCH, contactUsSaga.fetch_customer_feedback_details);
    yield takeEvery(API.CONTACT_US.META_DETAILS.FETCH, contactUsSaga.fetch_meta_details);
    yield takeEvery(API.CONTACT_US.META_UPDATE.FETCH, contactUsSaga.fetch_meta_update);

    /******************************    Contact Us Part End */
    // 
    /******************************    Address Part Start */

    yield takeEvery(API.ADDRESS.LIST.FETCH, addressSaga.fetch_list);
    yield takeEvery(API.ADDRESS.ADD.FETCH, addressSaga.fetch_add);
    yield takeEvery(API.ADDRESS.DETAILS.FETCH, addressSaga.fetch_details);
    yield takeEvery(API.ADDRESS.UPDATE.FETCH, addressSaga.fetch_update);
    yield takeEvery(API.ADDRESS.STATUS_UPDATE.FETCH, addressSaga.fetch_update_status);


    /******************************    Address Part End */



    /******************************    Utils Part Start */

    yield takeEvery(API.UTILS.STATES.FETCH, utilsSaga.fetch_state);
    yield takeEvery(API.UTILS.DISTRICT.FETCH, utilsSaga.fetch_district);

    yield takeEvery(API.UTILS.PROJECT_TYPES.FETCH, utilsSaga.fetch_project_type);
    yield takeEvery(API.UTILS.SECTORS.FETCH, utilsSaga.fetch_sectors);

    yield takeEvery(API.UTILS.UPLOAD_EDITOR_FILE.FETCH, utilsSaga.upload_editor_file);
    yield takeEvery(API.UTILS.CLEAR_EDITOR_FILE.FETCH, utilsSaga.clear_editor_file);

    yield takeEvery(API.UTILS.PAGE_CONTENT_DETAILS.FETCH, utilsSaga.page_content);
    yield takeEvery(API.UTILS.PAGE_CONTENT_UPDATE.FETCH, utilsSaga.page_content_update);
    /******************************    Utils Part End */


    // 

    /******************************    Contact Query Part Start */

    // yield takeEvery(API.CONCAT_US.QUERY_LIST.FETCH, contactUsSaga.fetch_query_list);
    // yield takeEvery(API.CONCAT_US.DETAILS.FETCH, contactUsSaga.fetch_query_details);

    /******************************    Contact Query Part End */




};