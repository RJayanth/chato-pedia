import {
  AVATAR_CLICK,
  ENABLE_LOGIN_BUTTON,
  SAVE_AVATAR_COLLECTION,
  SHOW_INVALID_ALERT,
  USER_NAME_TYPED,
} from '../actionTypes';
import initialState from '../state/initialState';

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case AVATAR_CLICK:
      return {
        ...state,
        login: {
          ...state.login,
          avatar: { ...state.login.avatar, selectedAvatarID: action.payload },
        },
      };

    case USER_NAME_TYPED:
      return {
        ...state,
        login: {
          ...state.login,
          userName: action.payload.userName,
          showAlert: false,
        },
      };

    case ENABLE_LOGIN_BUTTON:
      return {
        ...state,
        login: { ...state.login, isLoginEnabled: action.payload },
      };

    case SHOW_INVALID_ALERT:
      return {
        ...state,
        login: { ...state.login, showAlert: action.payload },
      };

    case SAVE_AVATAR_COLLECTION:
      return {
        ...state,
        login: {
          ...state.login,
          avatar: { ...state.login.avatar, avatarCollection: action.payload },
        },
      };

    default:
      return state;
  }
};

export default loginReducer;
