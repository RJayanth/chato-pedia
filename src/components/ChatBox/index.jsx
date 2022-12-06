import MyChats from './MyChats';
import './index.css';
import Filters from './Filters';
import UsersHub from './UsersHub';

const Chatbox = () => {
    return (
        // <div className="chatbox-container d-flex">
        <div className="chatbox-container d-flex d-md-none">
            <div className="chatbox-header">
                Chatbox Header
            </div>
            <div className="chatbox-body">
                Chatbox Body
            </div>
            <div className="chatbox-footer-container">
                <UsersHub />
                <MyChats />
                <Filters />
            </div>
        </div>
    )
}

export default Chatbox;