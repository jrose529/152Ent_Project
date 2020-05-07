import React, { Component } from 'react';
import InstagramEmbed from 'react-instagram-embed';
import { Row, Col } from 'react-bootstrap';
import '../customStyles.css';

export default class Home extends Component {
    render() {
        return (
            <div className="container container-custom">
                <p>&nbsp;</p>

                <h1 className="text-center">152Enterprises</h1>
                <p className="lead text-center">Welcome to 152Enterprises, a cultural hub where the hottest up and coming Long Island artists can showcase their talents. </p>
                <hr />
                <Row className="align-items-center">
                    <Col xs={1}>
                    </Col>
                    <Col>
                        {/* Instagram Embed */}
                        <InstagramEmbed
                            url='https://www.instagram.com/p/BuKbiHDgj9m/?utm_source=ig_embed&amp;utm_campaign=loading'
                            maxWidth={540}
                            hideCaption={false}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => { }}
                            onSuccess={() => { }}
                            onAfterRender={() => { }}
                            onFailure={() => { }}
                        />
                    </Col>
                    <Col>
                        <h2>LouieLou152</h2>
                        <p>Louis Hernandez, better known as LouieLou152, has been making waves on Long Island, NY
                        as he consistently drops music highlighting his high energy, aggresiveness, and sophisticated rhymes.
                        One might even see similarities to the legend Big Pun since both are of Puerto Rican descent
                        with similar musical styles. Louie has released two solid mixtapes on SoundCloud;
                        'Project EP 2 ET' and 'BellyBoy$' along with many singles that have all garnered a significant
                        amount of views.
                        </p>
                        <h3>Contact</h3>
                        <table>
                            <tbody>
                            <tr><td>Phone:</td><td>(516) 204-3486</td></tr>
                            <tr><td>Email:</td><td>louielou152@gmail.com</td></tr>
                            </tbody>
                        </table>
                    </Col>
                    <Col xs={1}>
                    </Col>
                </Row>

                <hr />

                <Row className="align-items-center">
                    <Col xs={1}>
                    </Col>
                    <Col>
                        <h2 className="text-center">New Music</h2>
                        <iframe title="New Music Vid" width="100%" height="360" src="https://www.youtube.com/embed/1D6skoHyU3g"
                            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </Col>
                    <Col xs={1}>
                    </Col>
                </Row>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
            </div>
        );
    }
}