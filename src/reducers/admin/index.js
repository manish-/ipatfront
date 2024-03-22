import { combineReducers } from 'redux';
import { Authentication_Reducers } from './authentication';
import { AboutUsPages_Reducers } from './aboutUsPages';
import { Projects_Reducers } from './projects';
import { ProjectTypes_Reducers } from './projectTypes';
import { Seminars_Reducers } from './seminars';
import { Services_Reducers } from './services';
import { News_Reducers } from './news';
import { Clienteles_Reducers } from './clienteles';
import { Laboratory_Reducers } from './laboratory';
import { Careers_Reducers } from './careers';
import { NewInitiatives_Reducers } from './newInitiatives';
import { Accreditations_Reducers } from './accreditations';
import { Faqs_Reducers } from './faqs';
import { Downloads_Reducers } from './downloads';
import { ContactUs_Reducers } from './contactUs';
import { Address_Reducers } from './address';
import { Banners_Reducers } from './banners';
import { Events_Reducers } from './events';
import { Utils_Reducers } from './utils';

export const rootReducer = combineReducers({
    Authentication_Reducers,
    AboutUsPages_Reducers,
    Projects_Reducers,
    ProjectTypes_Reducers,
    Seminars_Reducers,
    Services_Reducers,
    News_Reducers,
    Clienteles_Reducers,
    Laboratory_Reducers,
    Careers_Reducers,
    NewInitiatives_Reducers,
    Accreditations_Reducers,
    Faqs_Reducers,
    Downloads_Reducers,
    ContactUs_Reducers,
    Address_Reducers,
    Banners_Reducers,
    Events_Reducers,
    Utils_Reducers
});