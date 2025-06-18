import { useDispatch, useSelector } from 'react-redux';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';

import './index.css';
import { CHAT_BOX } from '../../../constants';
import { CHAT_BOX_SELECTED_VIEW_CHANGE } from '../../../redux/actionTypes';
import BadgedAvatar from '../../../commons/BadgedAvatar';

const PrivateChatHeader = () => {
  const {
    chatBox: { selectedUser, previousSelectedView },
    login: {avatar: {avatarCollection}}
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
        <BadgedAvatar imageSrc={avatarCollection[selectedUser.selectedAvatarID]} variant='dot' variantColor={`${selectedUser.isOnline?'#44b700':'gray'}`}/>
        <div className="private-chat-header-text">{selectedUser.userName}</div>
      </div>
    </div>
  );
};

export default PrivateChatHeader;
