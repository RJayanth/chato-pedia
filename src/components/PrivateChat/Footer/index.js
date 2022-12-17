import { useDispatch, useSelector } from 'react-redux';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import './index.css';
import { debounce } from '../../../helpers';
import socket from '../../../socket';
import { useEffect } from 'react';
import { useState } from 'react';
import dotsLoadingColorful from '../../../images/dotsLoadingColorful.gif';
import dotsLoading from '../../../images/dotsLoading.gif';
import {
  CHAT_BOX_SEND_PRIVATE_MESSAGE,
  CHAT_BOX_USER_TYPING,
} from '../../../redux/actionTypes';

const PrivateChatFooter = () => {
  const {
    chatBox: { selectedUser, currentlyTypedMessage },
  } = useSelector((state) => state);
  const [isTyping, setIsTyping] = useState(false);
  const dispatch = useDispatch();
  let typingTimer;
  const onInputClick = () => {
    // dispatch({
    //   type: 'KEYBOARD_ACTIVE_REDUCE_CHAT_BOX',
    //   payload: true
    // })
  };
  const onTyping = (event) => {
    // notify the other socket in private chatbox
    console.log('im typing', selectedUser.id);
    dispatch({
      type: CHAT_BOX_USER_TYPING,
      payload: event.target.value,
    });
    socket.emit('typing', { sendToId: selectedUser.id });
  };

  useEffect(() => {
    socket.on('user typing', (payload) => {
      if (payload.sentFromId === selectedUser.id) {
        console.log('Typing...');
        if (!isTyping) {
          console.log('set typing');
          setIsTyping(true);
          if (typingTimer) {
            clearTimeout(typingTimer);
          }
          typingTimer = setTimeout(() => {
            console.log('inside settimeout callback');
            setIsTyping(false);
          }, 2000);
        } else {
          console.log('user is still typing within 2000ms');
        }
      }
      // debounce(setIsTyping(false), 300);
    });

    return () => socket.removeListener('user typing');
  }, []);

  const onChange = debounce((event) => onTyping(event), 500);

  const onSendClick = () => {
    if (currentlyTypedMessage.trim().length) {
      const messageObj = {
        content: currentlyTypedMessage,
        sender: 'self',
      };
      dispatch({
        type: CHAT_BOX_SEND_PRIVATE_MESSAGE,
        payload: { messageObj, key: selectedUser.id }, // key is recieving client id
      });

      socket.emit('private message', { content: messageObj.content, sendToId: selectedUser.id });
    }
  };

  return (
    <div className="private-chat-box-footer-container">
      <div className="private-chat-box-notification-section">
        {isTyping ? (
          <img
            src={dotsLoadingColorful}
            style={{ width: '60px', height: '60px' }}
          />
        ) : (
          <></>
        )}
      </div>

      <div className="private-chat-box-footer-send-message-section">
        <input
          type="text"
          placeholder="Aa"
          className="private-chat-box-message-box"
          onClick={onInputClick}
          onChange={onChange}
        />
        <div className="private-chat-box-send-button">
          <SendOutlinedIcon color="primary" disabled onClick={onSendClick} />
        </div>
      </div>
    </div>
  );
};

export default PrivateChatFooter;
