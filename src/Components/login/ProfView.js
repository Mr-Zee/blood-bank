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
                        <div className="form-group row mb-3">
                            <label htmlhtmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputEmail3" placeholder="Name" disabled/>
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlhtmlFor="inputEmail3" className="col-sm-2 col-form-label">Age</label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control" id="inputEmail3" placeholder="Age" disabled />
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlhtmlFor="inputEmail3" className="col-sm-2 col-form-label">Blood Group</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputEmail3" placeholder="Blood Group" disabled />
                            </div>
                        </div>
                        <fieldset className="form-group">
                            <div className="row">
                                <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                                <div className="col-sm-10 d-flex">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked disabled />
                                        <label className="form-check-label" htmlhtmlFor="gridRadios1">
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" disabled />
                                        <label className="form-check-label" htmlhtmlFor="gridRadios2">
                                            Female
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <div className="form-group row mb-3">
                            <label htmlhtmlFor="inputEmail3" className="col-sm-2 col-form-label">Phone Number</label>
                            <div className="col-sm-10">
                                <input type="Number" className="form-control" id="inputEmail3" placeholder="Email" disabled/>
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlhtmlFor="inputEmail3" className="col-sm-2 col-form-label">Date</label>
                            <div className="col-sm-10">
                                <input type="date" className="form-control" id="inputEmail3" placeholder="Email" disabled/>
                            </div>
                        </div>
                    </form></Col>
            </Row>
        </Container>
    );
}

export default Profview;