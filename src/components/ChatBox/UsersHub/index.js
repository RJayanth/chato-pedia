import Groups2TwoToneIcon from '@mui/icons-material/Groups2TwoTone';
import { useSelector } from 'react-redux';

const UsersHub = () => {
  const { chatBox } = useSelector(state => state.chatBoxReducer);
  return (
    <div>
      <Groups2TwoToneIcon fontSize='large' color='secondary'/>
    </div>
  );
};

export default UsersHub;
