import Groups2TwoToneIcon from '@mui/icons-material/Groups2TwoTone';
import { useDispatch, useSelector } from 'react-redux';
import BadgedAvatar from '../../../commons/BadgedAvatar';
import { CHAT_BOX } from '../../../constants';
import {
  CHAT_BOX_MY_CHATS_CLICK,
  CHAT_BOX_USERS_HUB_CLICK,
  CHAT_BOX_USER_ROW_SELECT,
} from '../../../redux/actionTypes';
import socket from '../../../socket';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import './index.css';

const UsersHub = () => {
  const { chatBox } = useSelector((state) => state);
  const {
    login: {
      avatar: { avatarCollection },
    },
  } = useSelector((state) => state);
  const {
    usersList = [],
    loggedInUserDetails: { id },
  } = chatBox;
  const dispatch = useDispatch();

  const onUserRowClick = (user) => {
    // not to call 1:1 message handler for self use row selection
    if (user.id !== id) {
      console.log('user row click ', user);
      dispatch({
        type: CHAT_BOX_USER_ROW_SELECT,
        payload: user,
      });
    }
  };

  return (
    <div className="users-hub-container">
      {usersList?.map((user) => {
        const isLoggedInUser = user.id === id;
        return (
          <div
            className="user-container"
            key={user.id}
            onClick={() => onUserRowClick(user)}
          >
            <div className="user-row-left-panel">
              {/* <img
                src={avatarCollection[user.selectedAvatarID]}
                className="avatar"
                id={user.id}
              /> */}
              <BadgedAvatar
                imageSrc={avatarCollection[user.selectedAvatarID]}
                variant="dot"
                variantColor={`${user.isOnline ? '#44b700' : 'gray'}`}
              />
              <div className="user-hub-details-container">
                {user?.userName} {isLoggedInUser && '(You)'}
              </div>
            </div>
            <div>{!isLoggedInUser && <ChevronRightOutlinedIcon />}</div>
          </div>
        );
      })}
    </div>
  );
};

export default UsersHub;
