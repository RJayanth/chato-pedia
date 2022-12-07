import { CHAT_BOX } from "../../constants";

const clearState = {
  login: {
    avatar: {
      avatarCollection: [],
      selectedAvatarID: 0,
    },
    userName: '',
    isLoginEnabled: false,
    showAlert: false,
  },
  chatBox: {
    usersHub: {},
    myChats: {},
    filters: {},
    selectedView: CHAT_BOX.USERS_HUB,
  },
};

export default clearState;
