import { PUT_USER_DATA, GET_USER_DATA, CLEAR_USER_DATA } from "redux/constants/User";

export const putUserData = (user) => {
    return {
      type: PUT_USER_DATA,
      payload: user
    }
  };

//   export const getUserData = (data) => {
//     return {
//       type: GET_USER_DATA,
//       payload: data
//     }
//   };

  export const clearUserData = () => {
    return {
      type: CLEAR_USER_DATA
    }
  };

  