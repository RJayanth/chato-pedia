import Groups2TwoToneIcon from '@mui/icons-material/Groups2TwoTone';
import { useDispatch, useSelector } from 'react-redux';
import { CHAT_BOX } from '../../../constants';
import { CHAT_BOX_USERS_HUB_CLICK } from '../../../redux/actionTypes';
import './index.css';

const UsersHub = () => {
  const { chatBox } = useSelector((state) => state);
  const {
    login: {
      avatar: { avatarCollection },
    },
  } = useSelector((state) => state);
  const { usersList } = chatBox;
  const dispatch = useDispatch();

  return (
    <div className="users-hub-container">
      {usersList.map((user) => {
        return (
          <div className="user-container" key={user.id}>
            <div className="users-hub-avatar-section">
              <img
                src={avatarCollection[user.selectedAvatarID]}
                className="avatar"
                id={user.id}
              />
            </div>
            <div className="users-hub-details-constainer">{user.userName}</div>
          </div>
        );
      })}
    </div>
  );
};

export default UsersHub;
