import { useDispatch, useSelector } from 'react-redux';
import { CHAT_BOX } from '../../../constants';
import { CHAT_BOX_FILTERS_CLICK } from '../../../redux/actionTypes';

const Filters = () => {
  const { chatBox } = useSelector((state) => state.chatBoxReducer);
  const { selectedView } = chatBox;
  const dispatch = useDispatch();
  return (
    <div>
      Filters Section
    </div>
  );
};

export default Filters;
