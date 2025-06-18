/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
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

const MyChats = () => {
  const {
    chatBox: { myChats },
    login: {
      avatar: { avatarCollection },
    },
  } = useSelector((state) => state);
  const {
    usersList,
    loggedInUserDetails: { id },
  } = chatBox || {};
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
    <div className="my-chats-container">
      {Object.keys(myChats)?.map((chatKey) => {
        return (
          <div
            className="user-container"
            key={chatKey}
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
              <div className="user-details-container">
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

export default MyChats;
