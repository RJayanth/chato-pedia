import a1 from '../../images/avatar/a1.png';
import a2 from '../../images/avatar/a2.png';
import a3 from '../../images/avatar/a3.png';
import a4 from '../../images/avatar/a4.png';
import a5 from '../../images/avatar/a5.png';
import a6 from '../../images/avatar/a6.png';
import a7 from '../../images/avatar/a7.png';
import a8 from '../../images/avatar/a8.png';
import a9 from '../../images/avatar/a9.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

import './index.css';

const Login = () => {
    return (
        <div className="login-container">

            {/* <Container className="avatar-container">
                    <Stack gap={4}>
                    <Row>
                        <Col><img src={a1} className="avatar"></img></Col>
                        <Col><img src={a2} className="avatar"></img></Col>
                        <Col><img src={a3} className="avatar"></img></Col>
                    </Row>
                    <Row>
                        <Col><img src={a4} className="avatar"></img></Col>
                        <Col><img src={a5} className="avatar"></img></Col>
                        <Col><img src={a6} className="avatar"></img></Col>
                    </Row>
                    <Row>
                        <Col><img src={a7} className="avatar"></img></Col>
                        <Col><img src={a8} className="avatar"></img></Col>
                        <Col><img src={a9} className="avatar"></img></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col><Badge className="avatar-button">Choose your avatar...</Badge></Col>
                    </Row>
                    <Row>
                        <input type="text" className="input-text-box" placeholder="Your name here..."></input>
                    </Row>
                    </Stack>
                </Container> */}
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
                <input type="text" className="input-text-box" placeholder="Your name here..."></input>
                <button className="login-button">Proceed</button>
            </div>

        </div>
    )
}

export default Login;