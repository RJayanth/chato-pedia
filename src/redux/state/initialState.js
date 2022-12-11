import { CHAT_BOX } from '../../constants';

const initialState = {
  login: {
    avatar: {
      avatarCollection: [],
      selectedAvatarID: 0,
    },
    gender:'male',
    userName: '',
    isLoginEnabled: false,
    showAlert: false,
  },
  chatBox: {
    usersHub: {},
    myChats: {},
    filters: {},
    selectedView: CHAT_BOX.USERS_HUB,
    loggedInUserDetails: {},
    usersList: [],
    selectedUser: {}
  },
};

export default initialState;
