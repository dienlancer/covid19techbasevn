import * as types from './../constants/ActionType';
export const actSearch = (query_country_name) => {
	return {
		type : types.CHANGE_SEARCH,
		query_country_name
	}
}
export const actShowNotify=()=>{	
	return {
		type:types.SHOW_NOTIFY		
	}
}
export const actHideNotify=()=>{
	return {
		type:types.HIDE_NOTIFY		
	}
}