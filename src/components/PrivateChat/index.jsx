import { useSelector } from "react-redux";

const PrivateChat = () => {
    const {chatBox: {selectedUser }} = useSelector(state=> state);
    return(
        <div className="private-chat-container">
            Private Chat
        </div>
    )
}

export default PrivateChat;