import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import campsiteIcon from '@iconify/icons-carbon/campsite';
import donateBlood from '@iconify/icons-bx/donate-blood';
import handsHelping from '@iconify/icons-la/hands-helping';
import peopleAdd16Regular from '@iconify/icons-fluent/people-add-16-regular';



function Statistics() {
    return (
        <Container fluid="md" className="mainComponent">
            <Row className='statistics py-5 '>
                <Col xs={6} sm={6} md={3} lg={3}>
                    <div className='statEle m-auto'>
                        <Icon className='statIcon mb-3' icon={campsiteIcon} />
                        <p>50+</p>
                        <p>Camps</p>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={3} lg={3} >
                    <div className='statEle m-auto'>
                        <Icon className='statIcon mb-3' icon={peopleAdd16Regular} />
                        <p>1000+</p>
                        <p>Registered</p>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={3} lg={3} >
                    <div className='statEle m-auto'>
                        <Icon className='statIcon mb-3' icon={donateBlood} />
                        <p>500+</p>
                        <p>Donors</p>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={3} lg={3} >
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

export default Statistics;
