import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../customStyles.css';

export default class NavigationBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-custom fixed-top">
                <Link to="/" className="navbar-brand">152Enterprises</Link>
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/segment" className="nav-link">Weekly Segments</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/studio" className="nav-link">Studio Reservations</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/store" className="nav-link">Store</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}