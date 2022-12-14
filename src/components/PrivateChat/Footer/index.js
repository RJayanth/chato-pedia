import { useDispatch } from 'react-redux';
import './index.css';

const PrivateChatFooter = () => {
  const dispatch = useDispatch();
  const onInputClick = () => {
    // dispatch({
    //   type: 'KEYBOARD_ACTIVE_REDUCE_CHAT_BOX',
    //   payload: true
    // })
  };

  return (
    <div className="private-chat-box-footer-container">
      <div className="private-chat-box-footer-content">
        <input
          type="text"
          placeholder="Aa"
          className="private-chat-box-message-box"
          onClick={onInputClick}
        />
      </div>
    </div>
  );
};

export default PrivateChatFooter;
