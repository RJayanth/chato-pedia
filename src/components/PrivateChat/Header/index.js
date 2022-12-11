import { useSelector } from "react-redux";
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';

import './index.css';

const PrivateChatHeader = () => {
    const { chatBox: {selectedUser}} = useSelector(state => state);
    return (
        <div className="private-chat-header-container">
            <div className="private-chat-header-left-section">
                <ChevronLeftOutlinedIcon />
            </div>
            <div className="private-chat-header-text">
                {selectedUser.userName}
            </div>
        </div>
    )
}

export default PrivateChatHeader;