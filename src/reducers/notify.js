import * as types from './../constants/ActionType';
let defaultState = {
	isShow:false,			
};
const notify = (state = defaultState, action) => {
	switch(action.type){
		case types.SHOW_NOTIFY:			
			state.isShow=true;
			return {...state};
		case types.HIDE_NOTIFY:
			state.isShow=false;
			return {...state};			
		default:			
			return state;
	}
}
export default notify;