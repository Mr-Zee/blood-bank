import { Col, Row, Form, Button, Container } from "react-bootstrap";
import mainbg from "../../Assets/img/hero.png";
import { useUserContext } from "../context/userContext"
import { useState, useEffect } from "react";


function Login() {
  const { userLogIn } = useUserContext();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const submitLogIn = (event) => {
    event.preventDefault();

    // login Api should be called here
    if (userName === 'Ziad' && password === '123') {
      // Login Success 
      console.log("success");
      userLogIn();
    }
    else {
      // Login Failed
      console.log("Failed");
    }
  }

  return (
    <Container className="signInContainer">
      <Row>
        <Col>
          <img className='loginImg' src={mainbg} alt="" />
        </Col>
        <Col className='form'>
          <Form onSubmit={(e) => submitLogIn(e)} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="Enter email" name="username" onChange={(e) => {
                e.preventDefault();
                setUserName(e.target.value);
              }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="psswd" onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value);
              }} />
            </Form.Group>
            <Button variant="primary" type="submit" >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
