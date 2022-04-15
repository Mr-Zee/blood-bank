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
                            <div class="form-group row mb-3">
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="inputEmail3" placeholder="Name" />
                                </div>
                                <div class="col-sm-6">
                                    <input type="number" class="form-control" id="inputEmail3" placeholder="Age" />
                                </div>
                            </div>
                            <div class="form-group row mb-3">
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="inputEmail3" placeholder="Blood Group" />
                                </div>
                                <div class="col-sm-6">
                                    <input type="Number" class="form-control" id="inputEmail3" placeholder="Email" />
                                </div>
                            </div>
                            <div class="form-group row mb-3">
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="inputEmail3" placeholder="address" />
                                </div>
                                <div class="col-sm-6">
                                    <input type="date" class="form-control" id="inputEmail3" placeholder="Last Donated Date" />
                                </div>
                            </div>
                            <fieldset class="form-group">
                                <div class="row">
                                    <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                                    <div class="col-sm-10 d-flex">
                                        <div class="form-check mx-3">
                                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                                            <label class="form-check-label" for="gridRadios1">
                                                Male
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                            <label class="form-check-label" for="gridRadios2">
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <div class="form-group row mb-3 justify-content-end ">
                                <div class="col-sm-3">
                                    <input type="submit" class="form-control" id="inputEmail3" value="Save" onClick={(e) => { saveUser(e) }} />
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