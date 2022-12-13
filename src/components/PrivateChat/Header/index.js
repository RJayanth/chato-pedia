import { useDispatch, useSelector } from 'react-redux';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';

import './index.css';
import { CHAT_BOX } from '../../../constants';
import { CHAT_BOX_SELECTED_VIEW_CHANGE } from '../../../redux/actionTypes';

const PrivateChatHeader = () => {
  const {
    chatBox: { selectedUser, previousSelectedView },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onBackClick = () => {
    dispatch({
      type: CHAT_BOX_SELECTED_VIEW_CHANGE,
      payload: previousSelectedView,
    });
  };
  return (
    <div className="private-chat-header-container">
      <div className="private-chat-header-left-section">
        <ChevronLeftOutlinedIcon onClick={onBackClick} />
      </div>
      <div className="private-chat-header-text">{selectedUser.userName}</div>
    </div>
  );
};

export default PrivateChatHeader;
