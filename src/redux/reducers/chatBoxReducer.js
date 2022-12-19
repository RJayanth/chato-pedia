import { CHAT_BOX } from '../../constants';
import {
  CHAT_BOX_FILTERS_CLICK,
  CHAT_BOX_LOGGED_IN_USER_DETAILS_UPDATE,
  CHAT_BOX_MY_CHATS_CLICK,
  CHAT_BOX_NEW_USER_ADDED,
  CHAT_BOX_SELECTED_VIEW_CHANGE,
  CHAT_BOX_SEND_PRIVATE_MESSAGE,
  CHAT_BOX_USERS_HUB_CLICK,
  CHAT_BOX_USERS_LIST_UPDATE,
  CHAT_BOX_USER_REMOVE,
  CHAT_BOX_USER_ROW_SELECT,
  CHAT_BOX_USER_TYPING,
  KEYBOARD_ACTIVE_REDUCE_CHAT_BOX,
} from '../actionTypes';
import initialState from '../state/initialState';

const chatBoxReducer = (state = initialState.chatBox, action) => {
  switch (action.type) {
    case CHAT_BOX_SELECTED_VIEW_CHANGE:
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

    case CHAT_BOX_USER_REMOVE:
      const usersListTemp = [...state.usersList];
      const index = usersListTemp.findIndex(
        (user) => user.id === action.payload
      );
      usersListTemp.splice(index, 1);
      return {
        ...state,
        usersList: usersListTemp,
      };

    case CHAT_BOX_USER_ROW_SELECT:
      return {
        ...state,
        selectedUser: action.payload,
        previousSelectedView: state.selectedView,
        selectedView: CHAT_BOX.PRIVATE_CHAT, // render private message view on user row selection
      };

    case KEYBOARD_ACTIVE_REDUCE_CHAT_BOX:
      return {
        ...state,
        isKeyboardActive: action.payload,
      };

    case CHAT_BOX_USER_TYPING:
      return {
        ...state,
        currentlyTypedMessage: action.payload,
      };

    case CHAT_BOX_SEND_PRIVATE_MESSAGE:
      if (!state.myChats[action.payload.key]) {
        state.myChats[action.payload.key] = [];
      }
      // state.myChats[action.payload.key].push(action.payload.messageObj);
      // return { 
      //   ...state,
      //   currentlyTypedMessage: ''
      // };
      return { 
        ...state,
        myChats: {
          ...state.myChats,
          [action.payload.key]: [...state.myChats[action.payload.key], action.payload.messageObj]
        },
        currentlyTypedMessage: ''
      };
    default:
      return state;
  }
};

export default chatBoxReducer;
