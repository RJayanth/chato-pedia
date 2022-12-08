import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import Toolbar from './Toolbar';
import { CHAT_BOX } from '../../constants';
import UsersHub from './UsersHub';
import MyChats from './MyChats';
import Filters from './Filters';
import socketIO from 'socket.io-client';
import { useEffect } from 'react';
import socket from '../../socket';
import {
  CHAT_BOX_LOGGED_IN_USER_DETAILS_UPDATE,
  CHAT_BOX_NEW_USER_ADDED,
  CHAT_BOX_USERS_LIST_UPDATE,
  CHAT_BOX_USER_REMOVE,
} from '../../redux/actionTypes';
import { useState } from 'react';

const Chatbox = () => {
  const dispatch = useDispatch();
  const { chatBox } = useSelector((state) => state);
  const { selectedView } = chatBox;
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

    socket.on('users list', (data) => {
      console.log('users - ', data);
      dispatch({
        type: CHAT_BOX_USERS_LIST_UPDATE,
        payload: data,
      });
    });

    socket.on('new user', (data) => {
      alert('new user connected - ', data);
      dispatch({
        type: CHAT_BOX_NEW_USER_ADDED,
        payload: data,
      });
    });

    socket.on('user disconnected', data => {
      dispatch({
        type: CHAT_BOX_USER_REMOVE,
        payload: data
      })
    })
  }, []);

  return (
    // <div className="chatbox-container d-flex">
    <div className="chatbox-container d-flex d-md-none">
      <div className="chatbox-header">{selectedView}</div>
      <div className="chatbox-body">
        {selectedView === CHAT_BOX.USERS_HUB ? (
          <UsersHub />
        ) : selectedView === CHAT_BOX.MY_CHATS ? (
          <MyChats />
        ) : (
          <Filters />
        )}
      </div>
      <div className="chatbox-footer-container">
        <Toolbar />
      </div>
    </div>
  );
};

export default Chatbox;
