import { Col, Container, Row, } from "react-bootstrap";
import logo from "../../Assets/img/logo.png";
import Footer from "../Footer";

function Profiles() {
    const profileData = [
        {
            id:"1",
            name: "Daniel",
            age: "23",
            Bgroup: "A+",
            Addr: "Washington DC"
        },
        {
            id:"2",
            name: "Daniel",
            age: "23",
            Bgroup: "A+",
            Addr: "Washington DC"
        }, {
            id:"3",
            name: "Daniel",
            age: "23",
            Bgroup: "A+",
            Addr: "Washington DC"
        }, {
            id:"4",
            name: "Daniel",
            age: "23",
            Bgroup: "A+",
            Addr: "Washington DC"
        },
        {
            id:"5",
            name: "Daniel",
            age: "23",
            Bgroup: "A+",
            Addr: "Washington DC"
        },
        {
            id:"6",
            name: "Daniel",
            age: "23",
            Bgroup: "A+",
            Addr: "Washington DC"
        },
    ]

    return (
        <>
            <Container className="profilesContainer">
                <Row>
                    <Col className="StdHeading"> <h1>PROFILES</h1> </Col>
                </Row>
                {
                    profileData.map(item => {
                        return (
                            <div className="profileCard" key={item.id}>
                                <Row>
                                    <Col xs={3}>
                                        <img src={logo} alt="" className="profileImage" />
                                    </Col>
                                    <Col xs={4} className="d-flex justify-content-center flex-column">
                                        <p>{item.name}</p>
                                        <p>{item.age} </p>
                                    </Col>
                                    <Col xs={5} className="d-flex justify-content-center flex-column">
                                        <p>{item.Bgroup}</p>
                                        <p>{item.Addr}</p>
                                    </Col>
                                </Row>
                            </div>
                        )
                    })
                }
            </Container>
            <Footer />
        </>
    );
}

export default Profiles;