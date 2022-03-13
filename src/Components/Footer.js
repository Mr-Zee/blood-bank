import { Container, Row, Col } from 'react-bootstrap';
import logo from "../Assets/img/logo.png";

function Footer() {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col>
                        <p className='footerTitle'>Our Partners</p>
                        <div className='partnerLogos'>
                            <img className='partnerLogo' src={logo} alt="logo" />
                            <img className='partnerLogo' src={logo} alt="logo" />
                            <img className='partnerLogo' src={logo} alt="logo" />
                        </div>
                    </Col>
                    <Col className='contactCol'>
                        <p className='footerTitle'>Contact Info</p>
                        <p>
                            +91 1230972211
                            <img className='footerIcon' src={logo} alt="" />
                        </p>
                        <p>
                            bloodbank@gmail.com
                            <img className='footerIcon' src={logo} alt="" />
                        </p>
                        <p>
                            +91 1230972211
                            <img className='footerIcon' src={logo} alt="" />
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='copyrightText'>All rights reserved &copy; 2022</p>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Footer;
