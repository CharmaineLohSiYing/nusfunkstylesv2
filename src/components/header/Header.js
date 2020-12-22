import React from 'react';
import styles from './Header.module.css'
import {Navbar, Nav} from 'react-bootstrap'
import { FiMenu } from "react-icons/fi";
import {
    NavLink
  } from "react-router-dom";

const Header = () => {

    const navTextClasses = "px-lg-4 px-md-4 off_white montserrat_semi_bold " + styles.navbartext;

    return (
        <Navbar bg="dark" expand="md" className={styles.header}>
            <Navbar.Brand href="#home"><img src={"/assets/Logo.png"} alt="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <FiMenu className="off_white" size={24}/>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                <NavLink
                    to="/home"
                    className={navTextClasses}
                    >
                    HOME
                </NavLink>
                <NavLink
                    to="/community"
                    className={navTextClasses}
                    >
                    COMMUNITY
                </NavLink>
                <NavLink
                    to="/events"
                    className={navTextClasses}
                    >
                    EVENTS
                </NavLink>
                <NavLink
                    to="/contact"
                    className={navTextClasses}
                    >
                    CONTACT US
                </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;