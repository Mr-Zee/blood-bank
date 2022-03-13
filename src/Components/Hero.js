import { Container, Row, Col } from 'react-bootstrap';
import hero from "../Assets/img/hero.png";

function HeroComponent() {
    return (
        <Container fluid="md" className="mainComponent">
            <Row>
                <Col className="bannerLeft d-none d-md-block">
                    <img className="heroImg" src={hero} alt="" />
                </Col>
                <Col className="heroTitleBox">
                    <h2 className="heroTitle">DONATE BLOOD <br />& <br /> SAVE LIFE</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <marquee behavior="" direction="" className="newsContent">
                        <b> NEWS : </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quis totam nihil neque velit in!</marquee>
                </Col>
            </Row>
        </Container>
    );
}

export default HeroComponent;
