import { Container, Row, Col } from 'react-bootstrap';

function MainComponent() {
    return (
        <Container fluid="md">
            <Row>
                <Col>Banner Part</Col>
            </Row>
            <Row>
                <Col>News</Col>
            </Row>
            <Row>
                <Col>Blood Stocks</Col>
            </Row>
            <Row>
                <Col>Statistics</Col>
            </Row>
        </Container>
    );
}

export default MainComponent;
