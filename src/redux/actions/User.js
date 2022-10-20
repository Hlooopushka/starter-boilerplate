import { PUT_USER_DATA, SHOW_LOADING, CLEAR_USER_DATA } from "redux/constants/User";

export const putUserData = (user) => {
    return {
      type: PUT_USER_DATA,
      payload: user
    }
  };

  export const showLoading = () => {
    return {
      type: SHOW_LOADING,
    };
  };
  export const clearUserData = () => {
    return {
      type: CLEAR_USER_DATA
    }
  };

  