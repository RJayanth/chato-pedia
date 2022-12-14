import Groups2TwoToneIcon from '@mui/icons-material/Groups2TwoTone';
import ChatTwoToneIcon from '@mui/icons-material/ChatTwoTone';
import FilterAltTwoToneIcon from '@mui/icons-material/FilterAltTwoTone';
import { useDispatch, useSelector } from 'react-redux';
import { CHAT_BOX } from '../../../constants';
import {
  CHAT_BOX_USERS_HUB_CLICK,
  CHAT_BOX_MY_CHATS_CLICK,
  CHAT_BOX_FILTERS_CLICK,
  CHAT_BOX_SELECTED_VIEW_CHANGE,
} from '../../../redux/actionTypes';
import { Badge } from '@mui/material';

const Toolbar = () => {
  const {
    chatBox: { usersList, selectedView },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const usersHubClickHandler = () => {
    if (selectedView !== CHAT_BOX.USERS_HUB) {
      dispatch({
        type: CHAT_BOX_SELECTED_VIEW_CHANGE,
        payload: CHAT_BOX.USERS_HUB,
      });
    }
  };

  const myChatsClickHandler = () => {
    if (selectedView !== CHAT_BOX.MY_CHATS) {
      dispatch({
        type: CHAT_BOX_SELECTED_VIEW_CHANGE,
        payload: CHAT_BOX.MY_CHATS,
      });
    }
  };

  const filtesClickHandler = () => {
    if (selectedView !== CHAT_BOX.FILTERS) {
      dispatch({
        type: CHAT_BOX_SELECTED_VIEW_CHANGE,
        payload: CHAT_BOX.FILTERS,
      });
    }
  };

  return (
    <>
      <div>
        {/* <Groups2TwoToneIcon
          fontSize='large'
          color={`${selectedView === CHAT_BOX.USERS_HUB ? 'primary' : ''}`}
          onClick={usersHubClickHandler}
        /> */}
        <Badge color="secondary" badgeContent={usersList.length}>
          <Groups2TwoToneIcon
            fontSize="large"
            color={`${selectedView === CHAT_BOX.USERS_HUB ? 'primary' : ''}`}
            onClick={usersHubClickHandler}
          />
        </Badge>
      </div>
      <div>
        <ChatTwoToneIcon
          fontSize="large"
          onClick={myChatsClickHandler}
          color={`${selectedView === CHAT_BOX.MY_CHATS ? 'primary' : ''}`}
        />
      </div>
      <div>
        <FilterAltTwoToneIcon
          fontSize="large"
          onClick={filtesClickHandler}
          color={`${selectedView === CHAT_BOX.FILTERS ? 'primary' : ''}`}
        />
      </div>
    </>
  );
};

export default Toolbar;
