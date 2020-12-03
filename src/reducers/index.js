import {combineReducers} from 'redux';
import notify from "./notify";
import search from "./search";
const appReducers=combineReducers({	
    notify,
    search,
});
export default appReducers;