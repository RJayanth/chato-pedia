import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useChatScroll from '../../../hooks/useChatScroll';
import { CHAT_BOX_SEND_PRIVATE_MESSAGE } from '../../../redux/actionTypes';
import socket from '../../../socket';
import './index.css';

const PrivateChatBody = () => {
  const {
    chatBox: { myChats, selectedUser },
  } = useSelector((state) => state);

  const dispatch = useDispatch();
  const messages = myChats[selectedUser.id];
  const ref = useChatScroll(messages);

  useEffect(() => {
    // socket.on('incoming private message', ({content, fromId})=>{
    //   console.log('incoming private message');
    //   const messageObj = {
    //     content,
    //     sender: 'client'
    //   }
    //   dispatch({
    //     type: CHAT_BOX_SEND_PRIVATE_MESSAGE,
    //     payload: { messageObj, key: fromId}
    //   })
    // })
    
    // return () => {
    //   socket.removeListener('incoming private message');
    //   // socket.removeAllListeners();
    // }
  }, []);
  return (
    <div className="private-chat-box-body-container" ref={ref}>
      {myChats[selectedUser.id]?.map((message, idx) => {
        return (
          <div
            key={idx}
            className={`${
              message.sender === 'self'
                ? 'self-message-pill'
                : 'client-message-pill'
            }`}
          >
            {message.content}
          </div>
        );
      })}
      <div className='private-chat-box-message-sibling'></div>
    </div>
  );
};

export default PrivateChatBody;
