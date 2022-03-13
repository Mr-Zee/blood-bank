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
                <Col className="bannerLeft d-none d-md-block">
                    <img className="heroImg" src={hero} alt="" />
                </Col>
                <Col className="heroTitleBox">
                    <h2 className="heroTitle">DONATE BLOOD <br />& <br /> SAVE LIFE</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <marquee behavior="" direction="" className="newsContent">
                        <b> NEWS : </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quis totam nihil neque velit in!</marquee>
                </Col>
            </Row>
            <Row>
                <Col className="bloodStock">
                    <p>Blood Stocks</p>
                    <Row className='circle'>
                        <Col xs={6} sm={6} md={4} lg={3} className='d-flex justify-content-center my-4'>
                            <div className='dot d-flex justify-content-center align-items-center'>
                                <p> A+ </p>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={4} lg={3} className='d-flex justify-content-center my-4'>
                            <div className='dot d-flex justify-content-center align-items-center'>
                                <p> A- </p>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={4} lg={3} className='d-flex justify-content-center my-4'>
                            <div className='dot d-flex justify-content-center align-items-center'>
                                <p> AB+ </p>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={4} lg={3} className='d-flex justify-content-center my-4'>
                            <div className='dot d-flex justify-content-center align-items-center'>
                                <p> AB- </p>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={4} lg={3} className='d-flex justify-content-center my-4'>
                            <div className='dot d-flex justify-content-center align-items-center'>
                                <p> B+ </p>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={4} lg={3} className='d-flex justify-content-center my-4'>
                            <div className='dot d-flex justify-content-center align-items-center'>
                                <p> B- </p>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={4} lg={3} className='d-flex justify-content-center my-4'>
                            <div className='dot d-flex justify-content-center align-items-center'>
                                <p> O+ </p>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={4} lg={3} className='d-flex justify-content-center my-4'>
                            <div className='dot d-flex justify-content-center align-items-center'>
                                <p> O- </p>
                            </div>
                        </Col>


                    </Row>
                </Col>
            </Row>
            <Row className='statistics py-5 '>
                <Col>
                    <div className='statEle m-auto'>
                        <Icon className='statIcon mb-3' icon={campsiteIcon} />
                        <p>50+</p>
                        <p>Camps</p>
                    </div>
                </Col>
                <Col >
                    <div className='statEle m-auto'>
                        <Icon className='statIcon mb-3' icon={peopleAdd16Regular} />
                        <p>1000+</p>
                        <p>Registered</p>
                    </div>
                </Col>
                <Col >
                    <div className='statEle m-auto'>
                        <Icon className='statIcon mb-3' icon={donateBlood} />
                        <p>500+</p>
                        <p>Donors</p>
                    </div>
                </Col>
                <Col >
                    <div className='statEle m-auto'>
                        <Icon className='statIcon mb-3' icon={handsHelping} />
                        <p>20+</p>
                        <p>Volunteers</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default MainComponent;
