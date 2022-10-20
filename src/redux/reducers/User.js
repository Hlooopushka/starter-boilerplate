import { PUT_USER_DATA, SHOW_LOADING,CLEAR_USER_DATA } from "redux/constants/User";

const initState = {
	loading:false
}

const user = (state = initState, action) => {
	switch (action.type) {
		case PUT_USER_DATA: {
			return {
				...state,
				loading:false,
				...action.payload
			}
		}
		case SHOW_LOADING: {
			return {
				...state,
				loading: true
			}
		}
        case CLEAR_USER_DATA:
            {return initState}
		default:
			return state;
	}
}

export default user;

