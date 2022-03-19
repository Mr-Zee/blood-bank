import { Col, Container, Row, } from "react-bootstrap";
import logo from "../../Assets/img/logo.png";



function Profiles() {
    const profileData = [
        {
            name: "Daniel",
            age: "23",
            Bgroup: "A+",
            Addr: "Washington DC"
        },
        {
            name: "Daniel",
            age: "23",
            Bgroup: "A+",
            Addr: "Washington DC"
        }, {
            name: "Daniel",
            age: "23",
            Bgroup: "A+",
            Addr: "Washington DC"
        }, {
            name: "Daniel",
            age: "23",
            Bgroup: "A+",
            Addr: "Washington DC"
        },
         {
            name: "Daniel",
            age: "23",
            Bgroup: "A+",
            Addr: "Washington DC"
        }, 
        {
            name: "Daniel",
            age: "23",
            Bgroup: "A+",
            Addr: "Washington DC"
        },
    ]

    return (
        <Container className="profilesContainer">
            <Row>
                <Col className="StdHeading"> <h1>PROFILES</h1> </Col>
            </Row>
            {
                profileData.map(item => {
                    return (
                        <div className="profileCard">
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

    );
}

export default Profiles;