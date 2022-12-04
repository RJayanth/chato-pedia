import { AVATAR_CLICK, LOGIN_BUTTON_STATE_CHANGE, USER_NAME_TYPED } from "../actionTypes";
import initialState from "../state/initialState";

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case AVATAR_CLICK:
      return {
        ...state,
        login: { ...state.login, userAvatar: action.payload.userAvatar }
      };

    case USER_NAME_TYPED:
      console.log('username typed in reducer');
      return {
        ...state,
        login: { ...state.login, userName: action.payload.userName }
      };

    case LOGIN_BUTTON_STATE_CHANGE:
      return {
        ...state,
        login: { ...state.login, isLoginEnabled: action.payload.isLoginEnabled }
      }
    default:
      return state;
  }
};

export default loginReducer;