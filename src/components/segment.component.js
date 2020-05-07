import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import "../customStyles.css";
import axios from 'axios';

const SegRow = props => (
    <div>
        <Row className="align-items-center" key={props.segments._id}>
            <Col xs={1} />
            <Col>
                <iframe title={props.segments._id} width="480" height="360" src={props.segments.segLink}
                    frameBorder="0" allow="accelerometer; autoplay; encrypted-media;
            gyroscope; picture-in-picture"/>
            </Col>
            <Col>
                <h3 className="text-center"> {props.segments.segName} </h3>
                <p className="text-center"> {props.segments.segArtist} || {props.segments.segDate.substring(0, 10)} </p>
                <p className="text-center"> {props.segments.segDesc} </p>
            </Col>
            <Col xs={1} />
        </Row>
        <p>&nbsp;</p>
    </div>
)

export default class Segment extends Component {
    constructor(props) {
        super(props);
        this.state = { segments: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/segment/get')
            .then(response => {
                this.setState({ segments: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    segmentList() {
        return this.state.segments.map(currentSegment => {
            return <SegRow segments={currentSegment} key={currentSegment._id} />;
        })
    }

    render() {
        return (
            <div className="container container-custom">
                <p>&nbsp;</p>
                <h1 className="text-center">Segments</h1>
                <div>
                    {this.segmentList()}
                </div>
            </div>
        );
    }
}