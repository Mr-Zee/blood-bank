import { Container, Row, Col } from 'react-bootstrap';

function MainBody() {
    const stockData = [
        {
            name: 'A+',
            stock: 60
        },
        {
            name: 'A-',
            stock: 25
        },
        {
            name: 'AB+',
            stock: 56
        },
        {
            name: 'AB-',
            stock: 8
        },
        {
            name: 'B+',
            stock: 8
        },
        {
            name: 'B-',
            stock: 8
        },
        {
            name: 'O+',
            stock: 8
        },
        {
            name: 'O-',
            stock: 8
        },
    ]
    return (
        <Container fluid="md" className="mainComponent">
            <Row>
                <Col className="bloodStock">
                    <p>Blood Stocks</p>
                    <Row className='circle justify-content-center'>
                        {stockData.map(element => {
                            return (
                                <Col xs={6} sm={6} md={4} lg={3} className='d-flex justify-content-center my-4'>
                                    <div className='dot d-flex justify-content-center align-items-center'>
                                        <p> 
                                            {element.name} <br />
                                            <span className='stockValue'>{element.stock}</span>
                                        </p>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Col>
            </Row>

        </Container>
    );
}

export default MainBody;
