import { Col, Row, Form, Button, Container } from "react-bootstrap";
import mainbg from "../../Assets/img/hero.png";
import { UserContext } from "../context/userContext"
import { useState, useContext } from "react";


function Login() {
  const [, setUser] = useContext(UserContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const submitLogIn = (event) => {
    event.preventDefault();

    // form Validation
    if (userName !== "" && password !== '') {
      console.log(userName,password);
      // validation Success 
      setUser({
        userName: userName,
        password: password
      })
    }
    else {
      // Validation Failed
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
