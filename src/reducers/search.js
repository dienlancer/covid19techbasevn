import * as types from './../constants/ActionType';

const defaultState = '';

const search = (state = defaultState, action) => {	
	switch(action.type){
		case types.CHANGE_SEARCH:
			return action.query_country_name;
		default:
			return state;
	}
}

export default search;