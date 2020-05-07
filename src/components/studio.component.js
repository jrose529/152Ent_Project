import React, { Component } from 'react';
import { Carousel, Row, Col, Form, Image, Button, Modal } from 'react-bootstrap';
import pic1 from '../img/stuImg_1-min.jpg';
import pic2 from '../img/stuImg_2-min.jpg';
import pic3 from '../img/stuImg_4-min.jpg';
import pic4 from '../img/stuImg_5-min.jpg';
import pic5 from '../img/stuImg_7-min.jpg';
import "../customStyles.css";
import axios from 'axios';

export default class Studio extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeHours = this.onChangeHours.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            formNameStu: '',
            formEmailStu: '',
            formPhoneStu: '',
            formDateStu: new Date(),
            formHoursStu: 0,
            isOpen: false,
            reqMsg: '',
        }
    }

    onChangeName(e) {
        this.setState({
            formNameStu: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            formEmailStu: e.target.value
        });
    }

    onChangePhone(e) {
        this.setState({
            formPhoneStu: e.target.value
        });
    }

    onChangeDate(e) {
        this.setState({
            formDateStu: e.target.value
        });
    }

    onChangeHours(e) {
        this.setState({
            formHoursStu: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const reservation = {
            formNameStu: this.state.formNameStu,
            formEmailStu: this.state.formEmailStu,
            formPhoneStu: this.state.formPhoneStu,
            formDateStu:  this.state.formDateStu,
            formHoursStu: this.state.formHoursStu,
        };

        //console.log(reservation);

        axios.post('http://localhost:3000/reservation/add', reservation)
            .then(res => {
                if(res.data !== ''){
                    this.reqMsg = 'Your reservation has been successfully sent. You will be contacted ASAP with availability.';
                }else{
                    this.reqMsg = 'There was an error when submitting your request. Please try again.';
                }
            });

        this.isOpen = true;
    
        //this.resModal();
    }

    resModal(){ //popup after sucess
        const setShow = React.useState(false);
        const handleClose = () => setShow(false);

        return (
            <>
                <Modal show={this.isOpen} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Request Result</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.reqMsg}    
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

    render() {
        return (
            <div className="container container-custom">
                <p>&nbsp;</p>
                <p>&nbsp;</p>

                <Row className="align-items-center">
                    <Col xs={10}>
                        <Carousel>
                            <Carousel.Item>
                                <Image src={pic1} style={{height: 520}}alt="First Slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={pic2} style={{height: 520}} alt="Second Slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={pic3} style={{height: 520}} alt="Second Slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={pic4} style={{height: 520}} alt="Second Slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={pic5} style={{height: 520}} alt="Second Slide" />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col>
                        <p>&nbsp;</p>

                        <h3>Open 24/7</h3>
                        <div>
                            <p>The studio is available any time day or night upon request.</p>
                        </div>

                        <p>&nbsp;</p>

                        <h3>Address</h3>
                        <div>
                            <p>Olympia Road <br /> North Bellmore <br /> NY, 11710 <br /> United States</p>
                        </div>
                    </Col>
                </Row>

                <p>&nbsp;</p>

                <div>
                    <h6 className="text-center">Complete the following form to reserve studio time. The hourly rate is $40.</h6>
                    <p /><p />
                </div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Name: </Form.Label>
                            <Form.Control type="text" placeholder="Please enter your name." required
                            value={this.state.formNameStu} onChange={this.onChangeName} />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Email: </Form.Label>
                            <Form.Control type="text" placeholder="Please enter your email." required
                            value={this.state.formEmailStu} onChange={this.onChangeEmail} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Phone: </Form.Label>
                            <Form.Control type="text" placeholder="Please enter your phone #." required
                            value={this.state.formPhoneStu} onChange={this.onChangePhone} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Date: </Form.Label>
                            <Form.Control type="date" required value={this.state.formDateStu} onChange={this.onChangeDate} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Hours: </Form.Label>
                            <Form.Control type="number" placeholder="Please enter requested duration." required
                            value={this.state.formHoursStu} onChange={this.onChangeHours} />
                        </Form.Group>
                    </Form.Row>
                    <Button type="submit">Submit Reservation</Button>
                </Form>

                <p>&nbsp;</p>
            </div>
        );
    }
}