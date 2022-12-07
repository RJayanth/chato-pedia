import {
  CHAT_BOX_FILTERS_CLICK,
  CHAT_BOX_MY_CHATS_CLICK,
  CHAT_BOX_USERS_HUB_CLICK,
} from '../actionTypes';
import initialState from '../state/initialState';

const chatBoxReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHAT_BOX_USERS_HUB_CLICK:
      return {
        ...state,
        chatBox: {
          ...state.chatBox,
          selectedView: action.payload,
        },
      };
    case CHAT_BOX_MY_CHATS_CLICK:
      return {
        ...state,
        chatBox: {
          ...state.chatBox,
          selectedView: action.payload,
        },
      };
    case CHAT_BOX_FILTERS_CLICK:
      return {
        ...state,
        chatBox: {
          ...state.chatBox,
          selectedView: action.payload,
        },
      };
    default:
      return state;
  }
};

export default chatBoxReducer;
