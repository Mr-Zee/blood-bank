import { Container, Row, Col, Modal, Button } from 'react-bootstrap'
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";

function Registration() {
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const navigate = useNavigate();
    function saveUser(e) {
        e.preventDefault();
        setShowSuccessModal(true);
    }
    function closeModal(e) {
        e.preventDefault();
        setShowSuccessModal(false);
        navigate("/dashboard");
    }
    return (
        <>
            <Container className='RegContainer'>
                <Row>
                    <Col className="StdHeading"> <h1>ADD PROFILE</h1> </Col>
                </Row>
                <Row>
                    <Col>
                        <Icon icon="healthicons:ui-user-profile-outline" className="profileImage d-block m-auto my-5" />
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <form className="formContainer mb-5">
                            <div className="form-group row mb-3">
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" id="inputEmail3" placeholder="Name" />
                                </div>
                                <div className="col-sm-6">
                                    <input type="number" className="form-control" id="inputEmail3" placeholder="Age" />
                                </div>
                            </div>
                            <div className="form-group row mb-3">
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" id="inputEmail3" placeholder="Blood Group" />
                                </div>
                                <div className="col-sm-6">
                                    <input type="Number" className="form-control" id="inputEmail3" placeholder="Email" />
                                </div>
                            </div>
                            <div className="form-group row mb-3">
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" id="inputEmail3" placeholder="address" />
                                </div>
                                <div className="col-sm-6">
                                    <input type="date" className="form-control" id="inputEmail3" placeholder="Last Donated Date" />
                                </div>
                            </div>
                            <fieldset className="form-group">
                                <div className="row">
                                    <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                                    <div className="col-sm-10 d-flex">
                                        <div className="form-check mx-3">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                                            <label className="form-check-label" htmlFor="gridRadios1">
                                                Male
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                            <label className="form-check-label" htmlFor="gridRadios2">
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <div className="form-group row mb-3 justify-content-end ">
                                <div className="col-sm-3">
                                    <input type="submit" className="form-control" id="inputEmail3" value="Save" onClick={(e) => { saveUser(e) }} />
                                </div>
                            </div>
                        </form>
                    </Col>
                </Row>
                <Modal
                    show={showSuccessModal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >

                    <Modal.Body>
                        <h4>Registered Successfullyl</h4>
                        <Button className='d-block saveBtn' onClick={(e) => { closeModal(e) }} >OK</Button>
                    </Modal.Body>

                </Modal>
            </Container>
            <Footer />
        </>
    );
}

export default Registration;