import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

import './index.css';

const UsersHubHeader = () => {
  const {
    chatBox: { usersList },
  } = useSelector((state) => state);
  return (
    <div className="users-hub-header-container">
      Online
      <Badge color="secondary" badgeContent={usersList.length}>
        <PeopleAltOutlinedIcon />
      </Badge>
    </div>
  );
};

export default UsersHubHeader;
