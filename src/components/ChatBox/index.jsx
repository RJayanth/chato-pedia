import './index.css';
import { useSelector } from 'react-redux';
import Toolbar from './Toolbar';
import { CHAT_BOX } from '../../constants';
import UsersHub from './UsersHub';
import MyChats from './MyChats';
import Filters from './Filters';
import socketIO from 'socket.io-client';
import { useEffect } from 'react';

const Chatbox = () => {
    
    useEffect( () => {
        console.log('Chatbox is called');
        const socket = socketIO.connect('http://localhost:4000');
    }, [])
    const { chatBox } = useSelector(state => state.chatBoxReducer);
    const { selectedView } = chatBox;
    return (
        // <div className="chatbox-container d-flex">
        <div className="chatbox-container d-flex d-md-none">
            <div className="chatbox-header">
                {selectedView}
            </div>
            <div className="chatbox-body">
                {selectedView === CHAT_BOX.USERS_HUB ? <UsersHub /> : selectedView === CHAT_BOX.MY_CHATS ? <MyChats /> : <Filters />}
            </div>
            <div className="chatbox-footer-container">
                <Toolbar />
            </div>
        </div>
    )
}

export default Chatbox;