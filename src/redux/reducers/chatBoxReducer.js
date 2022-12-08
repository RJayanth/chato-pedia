import {
  CHAT_BOX_FILTERS_CLICK,
  CHAT_BOX_LOGGED_IN_USER_DETAILS_UPDATE,
  CHAT_BOX_MY_CHATS_CLICK,
  CHAT_BOX_NEW_USER_ADDED,
  CHAT_BOX_USERS_HUB_CLICK,
  CHAT_BOX_USERS_LIST_UPDATE,
} from '../actionTypes';
import initialState from '../state/initialState';

const chatBoxReducer = (state = initialState.chatBox, action) => {
  switch (action.type) {
    case CHAT_BOX_USERS_HUB_CLICK:
      return {
        ...state,
        selectedView: action.payload,
      };
    case CHAT_BOX_MY_CHATS_CLICK:
      return {
        ...state,
        selectedView: action.payload,
      };
    case CHAT_BOX_FILTERS_CLICK:
      return {
        ...state,
        selectedView: action.payload,
      };

    case CHAT_BOX_LOGGED_IN_USER_DETAILS_UPDATE:
      return {
        ...state,
        loggedInUserDetails: { ...action.payload },
      };

    case CHAT_BOX_USERS_LIST_UPDATE:
      return {
        ...state,
        usersList: [...action.payload],
      };

    case CHAT_BOX_NEW_USER_ADDED:
      return {
        ...state,
        usersList: [...state.usersList, action.payload],
      };
    default:
      return state;
  }
};

export default chatBoxReducer;
