import { combineReducers } from 'redux';
import { Authentication_Reducers } from './authentication';
import {Utils_Reducers} from './utils';
import {Pages_Reducers} from './pages';

export const rootReducer = combineReducers({
    Authentication_Reducers,
    Utils_Reducers,
    Pages_Reducers
});