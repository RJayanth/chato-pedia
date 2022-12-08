import {
  AVATAR_CLICK,
  ENABLE_LOGIN_BUTTON,
  SAVE_AVATAR_COLLECTION,
  SHOW_INVALID_ALERT,
  USER_NAME_TYPED,
} from '../actionTypes';
import initialState from '../state/initialState';

const loginReducer = (state = initialState.login, action) => {
  switch (action.type) {
    case AVATAR_CLICK:
      return {
        ...state,
        avatar: {
          ...state.avatar,
          selectedAvatarID: action.payload.id,
        },
        gender: action.payload.gender,
      };

    case USER_NAME_TYPED:
      return {
        ...state,
        userName: action.payload.userName,
        showAlert: false,
      };

    case ENABLE_LOGIN_BUTTON:
      return {
        ...state,
        isLoginEnabled: action.payload,
      };

    case SHOW_INVALID_ALERT:
      return {
        ...state,
        showAlert: action.payload,
      };

    case SAVE_AVATAR_COLLECTION:
      return {
        ...state,
        avatar: { ...state.avatar, avatarCollection: action.payload },
      };

    default:
      return state;
  }
};

export default loginReducer;
