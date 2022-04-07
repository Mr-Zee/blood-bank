import { Navbar, Container } from 'react-bootstrap';
import logo from "../Assets/img/logo.png";
import { Link } from "react-router-dom";
import { useUserContext } from "../Components/context/userContext"

function CustomNavbar() {
    let isLoggedIn = true;
    const { user } = useUserContext();
    console.log(user);
    return (
        <Navbar className="CustomNavbar" bg="light" expand="lg">
            <Container>
                <Link to="/">
                    <img className='mainLogo' src={logo} alt="" />
                    <Navbar.Brand href="#home"> <span className='px-2'>Blood Bank</span></Navbar.Brand>
                    <Navbar.Text>
                        <Link to="/"><span className='px-2' >Home</span> </Link>
                    </Navbar.Text>
                    {
                        isLoggedIn ? <><Navbar.Text>
                            <Link to="/dashboard"><span className='px-2' >Dashboard</span> </Link>
                        </Navbar.Text>
                            <Navbar.Text>
                                <Link to="/registration"><span className='px-2' >Registration</span></Link>
                            </Navbar.Text>
                            <Navbar.Text>
                                <Link to="/profiles"><span className='px-2' >Profiles</span></Link>
                            </Navbar.Text></> : null
                    }
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        {
                            isLoggedIn ? <>
                                <Link to="/login">Logout {user}</Link>
                            </> : <>
                                <Link to="/login">Login</Link>
                            </>
                        }
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
