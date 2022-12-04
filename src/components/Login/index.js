import a1 from '../../images/avatar/a1.png';
import a2 from '../../images/avatar/a2.png';
import a3 from '../../images/avatar/a3.png';
import a4 from '../../images/avatar/a4.png';
import a5 from '../../images/avatar/a5.png';
import a6 from '../../images/avatar/a6.png';
import a7 from '../../images/avatar/a7.png';
import a8 from '../../images/avatar/a8.png';
import a9 from '../../images/avatar/a9.png';

import './index.css';
import { useDispatch } from 'react-redux';
import { USER_NAME_TYPED } from '../../redux/actionTypes';

const Login = () => {

    const dispatch = useDispatch();

    const handleUserNameChange = (event) => {
        console.log('username change ', event.target.value);
        dispatch({
            type: USER_NAME_TYPED,
            payload: { userName: event.target.value }
        })
    }
    return (
        <div className="login-container">

            <div className="avatar-container">
                <div className="avatar-icons">
                    <img src={a1} className="avatar"></img>
                    <img src={a2} className="avatar"></img>
                    <img src={a3} className="avatar"></img>
                    <img src={a4} className="avatar"></img>
                    <img src={a5} className="avatar"></img>
                    <img src={a6} className="avatar"></img>
                    <img src={a7} className="avatar"></img>
                    <img src={a8} className="avatar"></img>
                    <img src={a9} className="avatar"></img>
                </div>
                <div className="avatar-label">Choose your avatar...</div>
            </div>

            <div className="login-form-container">
                <input type="text" className="input-text-box" placeholder="Your name here..." onChange={handleUserNameChange}></input>
                <button className="login-button">Proceed</button>
            </div>

        </div>
    )
}

export default Login;