import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import '../customStyles.css';

export default class FooterBar extends Component {
    render() {
        return (
            <div>
            <footer className = "footer footer-custom">
                <p>&nbsp;</p>
                <Col className="text-center">
{/* eslint-disable-line */} <a href="https://soundcloud.com/louielulu152" className="fa fa-soundcloud"></a>
{/* eslint-disable-line */} <a href="https://www.youtube.com/channel/UCaQuLXq4i8aPOGHqwR5kbcg" className="fa fa-youtube"></a>
{/* eslint-disable-line */} <a href="https://www.instagram.com/louielou152/?hl=en" className="fa fa-instagram"></a>
{/* eslint-disable-line */}<a href="https://open.spotify.com/artist/0MgbFzxLsBCeBMA15BsAnz?si=8meCQj7TS7u5l5q00XtcYA" className="fa fa-spotify"></a>
{/* eslint-disable-line */} <a href="https://linktr.ee/LouieLou152" className="fa fa-apple"></a>
                </Col>
                <div className="text-center">
                    <p style={{color:"#D4AF37"}}>&copy; 2020 152Ent. </p>;
                </div>
            </footer>
        </div>
        );
    }
}