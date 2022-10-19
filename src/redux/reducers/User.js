import { PUT_USER_DATA, CLEAR_USER_DATA } from "redux/constants/User";

const initState = {}

const user = (state = initState, action) => {
	switch (action.type) {
		case PUT_USER_DATA: {
			return {
				...state,
				...action.payload
			}
		}

        case CLEAR_USER_DATA:
            {return initState}
		default:
			return state;
	}
}

export default user;

