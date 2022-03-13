import { Container, Row, Col } from 'react-bootstrap';
import hero from "../Assets/img/hero.png";
import logo from "../Assets/img/logo.png";
import { Icon } from '@iconify/react';
import campsiteIcon from '@iconify/icons-carbon/campsite';
import donateBlood from '@iconify/icons-bx/donate-blood';
import handsHelping from '@iconify/icons-la/hands-helping';
import peopleAdd16Regular from '@iconify/icons-fluent/people-add-16-regular';



function MainComponent() {
    return (
        <Container fluid="md" className="mainComponent">
            <Row>
                <Col>
                    <img className="heroImg" src={hero} alt="" />
                </Col>
                <Col className="heroTitleBox">
                    <h2 className="heroTitle">DONATE BLOOD <p>&</p> SAVE LIFE</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="newsContent"><b> NEWS : </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quis totam nihil neque velit in!</p>
                </Col>
            </Row>
            <Row>
                <Col className="bloodStock">
                    <p>Blood Stocks</p>
                    <div className='circle'>
                        <Col className='dot'>A+</Col>
                        <Col className='dot'>A+</Col>
                        <Col className='dot'>A+</Col>
                        <Col className='dot'>A+</Col>
                        <Col className='dot'>A+</Col>
                        <Col className='dot'>A+</Col>
                        <Col className='dot'>A+</Col>
                        <Col className='dot'>A+</Col>
                    </div>
                </Col>
            </Row>
            <Row>
                <div className='statistics'>
                    <Col className='statEle'>
                        {/* <img className="" src={logo} alt="" />  */}
                        <Icon className='icon' icon={campsiteIcon} />
                        <p>50+</p>
                        <p>Camps</p>
                    </Col>
                    <Col className='statEle'>
                        {/* <img className="" src={logo} alt="" />  */}
                        <Icon className='icon' icon={peopleAdd16Regular} />
                        <p>1000+</p>
                        <p>Regestered</p>
                    </Col>
                    <Col className='statEle'>
                        {/* <img className="" src={logo} alt="" />  */}
                        <Icon className='icon' icon={donateBlood} />
                        <p>500+</p>
                        <p>Donors</p>
                    </Col>
                    <Col className='statEle'>
                        {/* <img className="" src={logo} alt="" />  */}
                        <Icon className='icon' icon={handsHelping} />
                        <p>20+</p>
                        <p>Volunteers</p>
                    </Col>
                </div>
            </Row>
        </Container>
    );
}

export default MainComponent;
