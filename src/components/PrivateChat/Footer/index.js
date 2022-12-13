import './index.css';

const PrivateChatFooter = () => {
  const onInputClick = () => {
  };

  return (
    <div className="private-chat-box-footer-container">
      <div className="private-chat-box-footer-content">
        <input
          type="text"
          placeholder="Aa"
          className="private-chat-box-message-box"
          onClick={onInputClick}
        />
      </div>
    </div>
  );
};

export default PrivateChatFooter;
