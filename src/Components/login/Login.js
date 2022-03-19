import { Col, Row, Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import mainbg from "../../Assets/img/hero.png";


function Login() {
  return (
    <Container className="signInContainer">
      <Row>
        <Col>
          <img className='loginImg' src={mainbg} alt="" />
        </Col>
        <Col className='form'>
          <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Link to="/dashboard">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
