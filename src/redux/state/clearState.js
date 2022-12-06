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
    myChats: {},
    usersHub: {},
    filters: {},
    selectedView: CHAT_BOX.USERS_HUB,
  },
};

export default clearState;
