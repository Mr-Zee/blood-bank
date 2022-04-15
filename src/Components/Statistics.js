import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import campsiteIcon from '@iconify/icons-carbon/campsite';
import donateBlood from '@iconify/icons-bx/donate-blood';
import handsHelping from '@iconify/icons-la/hands-helping';
import peopleAdd16Regular from '@iconify/icons-fluent/people-add-16-regular';



function Statistics() {
    const statsData = [
        {
            id:"1",
            icon: campsiteIcon,
            count: 50,
            text: 'Camps'
        },
        {
            id:"2",
            icon: peopleAdd16Regular,
            count: 1000,
            text: 'Registered'
        },
        {
            id:"3",
            icon: donateBlood,
            count: 500,
            text: 'Donor'
        },
        {
            id:"4",
            icon: handsHelping,
            count: 20,
            text: 'Volunteers'
        },
    ]
    return (
        <Container fluid="md" className="mainComponent">
            <Row className='statistics py-5 '>
                {
                    statsData.map(item => {
                        return (
                            <Col xs={6} sm={6} md={3} lg={3} key={item.id}>
                                <div className='statEle m-auto'>
                                    <Icon className='statIcon mb-3' icon={item.icon} />
                                    <p>{item.count}+</p>
                                    <p>{item.text}</p>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    );
}

export default Statistics;
