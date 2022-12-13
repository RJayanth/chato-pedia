import { useSelector } from "react-redux";
import PrivateChatBody from "./Body";
import PrivateChatFooter from "./Footer";
import PrivateChatHeader from "./Header";

const PrivateChat = () => {
    const {chatBox: {selectedUser }} = useSelector(state=> state);
    return(
        <>
            <PrivateChatHeader />
            <PrivateChatBody />
            <PrivateChatFooter />
        </>
    )
}

export default PrivateChat;