import ChatTwoToneIcon from '@mui/icons-material/ChatTwoTone';
import { useDispatch, useSelector } from 'react-redux';
import { CHAT_BOX } from '../../../constants';
import { CHAT_BOX_MY_CHATS_CLICK } from '../../../redux/actionTypes';

const MyChats = () => {
  const { chatBox } = useSelector((state) => state);
  const { selectedView } = chatBox;
  const dispatch = useDispatch();
  return (
    <div>
      My Chats Section
    </div>
  );
};

export default MyChats;
