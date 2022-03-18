import { Navbar, Container } from 'react-bootstrap';
import logo from "../Assets/img/logo.png";
import { Link } from "react-router-dom";

function CustomNavbar() {
    return (
        <Navbar className="CustomNavbar" bg="light" expand="lg">
            <Container>
                <Link to="/">
                    <img className='mainLogo' src={logo} alt="" />
                    <Navbar.Brand href="#home">Blood Bank</Navbar.Brand>
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Link to="/login">Login</Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
