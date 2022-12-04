import a1 from "../../images/avatar/a1.png";
import a2 from "../../images/avatar/a2.png";
import a3 from "../../images/avatar/a3.png";
import a4 from "../../images/avatar/a4.png";
import a5 from "../../images/avatar/a5.png";
import a6 from "../../images/avatar/a6.png";
import a7 from "../../images/avatar/a7.png";
import a8 from "../../images/avatar/a8.png";
import a9 from "../../images/avatar/a9.png";

import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  AVATAR_CLICK,
  ENABLE_LOGIN_BUTTON,
  SAVE_AVATAR_COLLECTION,
  SHOW_INVALID_ALERT,
  USER_NAME_TYPED,
} from "../../redux/actionTypes";
import { debounce } from "../../helpers";
import CustomizedSnackbars from "../../commons/snackbar";
import { useEffect } from "react";

const Login = () => {
  const { login } = useSelector((state) => state.loginReducer);
  const { userName, isLoginEnabled, showAlert, avatar } = login;
  const avatarCollection = [a1, a2, a3, a4, a5, a6, a7, a8, a9];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: SAVE_AVATAR_COLLECTION,
      payload: avatarCollection,
    });
  }, []);

  const handleUserNameChange = (event) => {
    console.log("username change ", event.target.value);
    const userName = event.target.value.trim();
    if (userName.length > 5) {
      dispatch({
        type: USER_NAME_TYPED,
        payload: { userName: event.target.value },
      });
      dispatch({
        type: ENABLE_LOGIN_BUTTON,
        payload: true,
      });
    } else {
      dispatch({
        type: SHOW_INVALID_ALERT,
        payload: true,
      });
      dispatch({
        type: ENABLE_LOGIN_BUTTON,
        payload: false,
      });
    }
  };
  const onChange = debounce((event) => handleUserNameChange(event), 300);

  const avatarSelectionHandler = (event) => {
    console.log("Avatar selected ", event);
    dispatch({
      type: AVATAR_CLICK,
      payload: parseInt(event.target.id),
    });
  };

  return (
    <div className="login-container">
      <div className="avatar-section-container">
        <div className="avatar-icons-container">
          {avatarCollection.map((item, idx) => {
            return (
              <div
                className={`avatar-icon ${
                  idx === avatar.selectedAvatarID ? "avatar-icon-selected" : ""
                }`}
                key={idx}
              >
                <img
                  src={item}
                  className="avatar"
                  key={idx}
                  onClick={avatarSelectionHandler}
                  id={idx}
                />
              </div>
            );
          })}
          {/* <img src={a1} className="avatar"></img>
                    <img src={a2} className="avatar"></img>
                    <img src={a3} className="avatar"></img>
                    <img src={a4} className="avatar"></img>
                    <img src={a5} className="avatar"></img>
                    <img src={a6} className="avatar"></img>
                    <img src={a7} className="avatar"></img>
                    <img src={a8} className="avatar"></img>
                    <img src={a9} className="avatar"></img> */}
        </div>
        <div className="avatar-label">Choose your avatar...</div>
      </div>

      <div className="login-form-container">
        <input
          type="text"
          className={`${
            showAlert ? "input-text-box-invalid" : "input-text-box"
          }`}
          placeholder="Your name here..."
          onChange={onChange}
        ></input>
        <button
          className={`${
            isLoginEnabled ? "login-button" : "login-button-disabled"
          }`}
          disabled={!isLoginEnabled}
        >
          Proceed
        </button>
      </div>

      {showAlert ? (
        <CustomizedSnackbars
          autoHideDuration={3000}
          message={"Username is minimum 6 characters length"}
          severity={"error"}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Login;
