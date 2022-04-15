import { Navbar, Container } from 'react-bootstrap';
import logo from "../Assets/img/logo.png";
import { Link } from "react-router-dom";
import { UserContext } from "../Components/context/userContext"
import { useContext, useEffect } from "react";

function CustomNavbar() {
    const [, setUser, isLoggedIn, setIsLoggedIn] = useContext(UserContext);

    useEffect(() => {
        let userDetails = JSON.parse(localStorage.getItem('user'));
        if (userDetails && userDetails.userName && userDetails.password) {
            setUser({
                userName: userDetails.userName,
                password: userDetails.password
            })
        }
    }, []);

    const onLogOut = (e) => {
        e.preventDefault();
        setUser({ userName: "", password: "" });
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        window.location.href = '/login';

    }

    return (
        <Navbar className="CustomNavbar" bg="light" expand="lg">
            <Container>
                <Link to="/">
                    <img className='mainLogo' src={logo} alt="" />
                    <Navbar.Brand> <span className='px-2'>Blood Bank</span></Navbar.Brand>
                </Link>
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

                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        {
                            isLoggedIn ? <>
                                <button onClick={(e) => { onLogOut(e) }}>Logout</button>
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
