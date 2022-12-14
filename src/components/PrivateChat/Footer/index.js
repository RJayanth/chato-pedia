import { useDispatch } from 'react-redux';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
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
      <div className='private-chat-box-notification-section'>
        
      </div>
      
      <div className="private-chat-box-footer-send-message-section">
        <input
          type="text"
          placeholder="Aa"
          className="private-chat-box-message-box"
          onClick={onInputClick}
        />
        <div className='private-chat-box-send-button'>
          <SendOutlinedIcon color='primary' disabled/>
        </div>
      </div>
    </div>
  );
};

export default PrivateChatFooter;
