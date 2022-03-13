import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import logo from "../Assets/img/logo.png";
import mailIcon from '@iconify/icons-charm/mail';
import telephoneFill from '@iconify/icons-bi/telephone-fill';
import locationHeartFilled from '@iconify/icons-carbon/location-heart-filled';

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
                            <Icon className='footerIcon' icon={telephoneFill} />
                        </p>
                        <p>
                            bloodbank@gmail.com
                            <Icon className='footerIcon' icon={mailIcon} />
                        </p>
                        <p>
                            Kasaragod General Hospital
                            <Icon className='footerIcon' icon={locationHeartFilled} />
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
