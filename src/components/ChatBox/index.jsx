import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import Toolbar from './Toolbar';
import { CHAT_BOX } from '../../constants';
import UsersHub from './UsersHub';
import MyChats from './MyChats';
import Filters from './Filters';
import { useEffect } from 'react';
import socket from '../../socket';
import {
  CHAT_BOX_LOGGED_IN_USER_DETAILS_UPDATE,
  CHAT_BOX_NEW_USER_ADDED,
  CHAT_BOX_SEND_PRIVATE_MESSAGE,
  CHAT_BOX_USERS_LIST_UPDATE,
  CHAT_BOX_USER_REMOVE,
} from '../../redux/actionTypes';
import { useState } from 'react';
import UsersHubHeader from './UsersHub/Header';
import PrivateChat from '../PrivateChat';
import PrivateChatHeader from '../PrivateChat/Header';

const Chatbox = () => {
  const dispatch = useDispatch();
  const {
    chatBox: { selectedView, selectedUser, isKeyboardActive },
  } = useSelector((state) => state);
  const { login } = useSelector((state) => state);
  const { userName, avatar, gender } = login;
  const { selectedAvatarID } = avatar;
  const [finishStatus, setfinishStatus] = useState(false);

  const backButtonHandler = (e) => {
    e.preventDefault();
    alert('pressed back button');
    // if (!finishStatus) {
    //     if (window.confirm("Do you want to go back ?")) {
    //         setfinishStatus(true)
    //         // your logic
    //         alert('You will be navigated');
    //         // props.history.push("/");
    //     } else {
    //         window.history.pushState(null, null, window.location.pathname);
    //         setfinishStatus(false)
    //         alert('Thanks for staying back');
    //     }
    // }
    window.location.href = '/';
  };

  useEffect(() => {
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener('popstate', backButtonHandler);
    return () => {
      window.removeEventListener('popstate', backButtonHandler);
    };
  }, []);

  useEffect(() => {
    console.log('Chatbox is called');
    if (login.userName !== '') {
      console.log('Initiating connection request');
      initiateConnection();
    } else {
      alert('User details are not available, please submit again!');
      window.location.href = '/';
    }
  }, []);

  const initiateConnection = () => {
    const userDetails = {
      userName,
      gender,
      selectedAvatarID,
      isOnline: true,
    };
    socket.auth = { userDetails };
    socket.connect();
  };

  useEffect(() => {
    socket.on('connection successful', (data) => {
      console.log('connection successful - ', data);
      dispatch({
        type: CHAT_BOX_LOGGED_IN_USER_DETAILS_UPDATE,
        payload: data,
      });
    });

    socket.on('initial users list', (data) => {
      console.log('users - ', data);
      dispatch({
        type: CHAT_BOX_USERS_LIST_UPDATE,
        payload: data,
      });
    });

    socket.on('new user', (data) => {
      dispatch({
        type: CHAT_BOX_NEW_USER_ADDED,
        payload: data,
      });
    });

    socket.on('user disconnected', (data) => {
      dispatch({
        type: CHAT_BOX_USER_REMOVE,
        payload: data,
      });
    });

    socket.on('incoming private message', ({ content, fromId }) => {
      console.log('incoming private message');
      const messageObj = {
        content,
        sender: 'client',
      };
      dispatch({
        type: CHAT_BOX_SEND_PRIVATE_MESSAGE,
        payload: { messageObj, key: fromId },
      });
    });

    return () => socket.removeAllListeners();
  }, []);

  return (
    // <div className="chatbox-container d-flex">
    <div
      className={`${
        isKeyboardActive ? 'chatbox-container-reduced' : 'chatbox-container'
      } 'd-flex d-md-none'`}
    >
      {selectedView === CHAT_BOX.PRIVATE_CHAT ? (
        <PrivateChat />
      ) : (
        <>
          <div className="chatbox-header">
            <div className="chatbox-header-text">{selectedView}</div>
            {/* {selectedView === CHAT_BOX.USERS_HUB && <UsersHubHeader />} */}
          </div>
          {/* <div className="chatbox-body">
            {selectedView === CHAT_BOX.USERS_HUB ? (
              <UsersHub />
            ) : selectedView === CHAT_BOX.MY_CHATS ? (
              <MyChats />
            ) : (
              <Filters />
            )}
          </div> */}
          <div className="chatbox-footer-container">
            <Toolbar />
          </div>{' '}
        </>
      )}
    </div>
  );
};

export default Chatbox;
