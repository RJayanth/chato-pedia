import Groups2TwoToneIcon from '@mui/icons-material/Groups2TwoTone';
import { useDispatch, useSelector } from 'react-redux';
import { CHAT_BOX } from '../../../constants';
import { CHAT_BOX_USERS_HUB_CLICK } from '../../../redux/actionTypes';

const UsersHub = () => {
  const { chatBox } = useSelector((state) => state);
  const { selectedView } = chatBox;
  const dispatch = useDispatch();

  return (
    <div>
      Users Hub Section
    </div>
  );
};

export default UsersHub;
