import { Container, Row, Col } from 'react-bootstrap'
import { Icon } from '@iconify/react';


function Profview() {
    return (
        <Container className='RegContainer'>
            <Row>
                <Col className="StdHeading"> <h1>DONOR PROFILE</h1> </Col>
            </Row>
            <Row>
                <Col>
                    <Icon icon="healthicons:ui-user-profile-outline"  className="profileImage d-block m-auto my-5"/>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <form className="formContainer">
                        <div class="form-group row mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputEmail3" placeholder="Name" disabled/>
                            </div>
                        </div>
                        <div class="form-group row mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Age</label>
                            <div class="col-sm-10">
                                <input type="number" class="form-control" id="inputEmail3" placeholder="Age" disabled />
                            </div>
                        </div>
                        <div class="form-group row mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Blood Group</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputEmail3" placeholder="Blood Group" disabled />
                            </div>
                        </div>
                        <fieldset class="form-group">
                            <div class="row">
                                <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
                                <div class="col-sm-10 d-flex">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked disabled />
                                        <label class="form-check-label" for="gridRadios1">
                                            Male
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" disabled />
                                        <label class="form-check-label" for="gridRadios2">
                                            Female
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <div class="form-group row mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Phone Number</label>
                            <div class="col-sm-10">
                                <input type="Number" class="form-control" id="inputEmail3" placeholder="Email" disabled/>
                            </div>
                        </div>
                        <div class="form-group row mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Date</label>
                            <div class="col-sm-10">
                                <input type="date" class="form-control" id="inputEmail3" placeholder="Email" disabled/>
                            </div>
                        </div>
                    </form></Col>
            </Row>
        </Container>
    );
}

export default Profview;