import { Container, Row, Col } from 'react-bootstrap';

function MainBody() {
    return (
        <Container fluid="md" className="mainComponent">
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

        </Container>
    );
}

export default MainBody;
