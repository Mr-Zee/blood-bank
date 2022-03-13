import { Navbar, Container } from 'react-bootstrap';
import logo from "../Assets/img/logo.png";

function CustomNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <img className='mainLogo' src={logo} alt="" />
                <Navbar.Brand href="#home">Blood Bank</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Login
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
