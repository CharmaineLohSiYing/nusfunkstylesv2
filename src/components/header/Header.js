import React, {useState} from 'react';
import styles from './Header.module.css'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { FiMenu } from "react-icons/fi";

const Header = () => {

    // const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

    return (
        <Navbar bg="dark" expand="md" className={styles.header}>
            <Navbar.Brand href="#home"><img src={"/images/Logo.png"} alt="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <FiMenu className="white" size={24}/>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                <Nav.Link href="#home" active={true} className="px-lg-4 px-md-2"><h4 className="white montserrat_semi_bold px-md-2">HOME</h4></Nav.Link>
                <Nav.Link href="#home" className="px-lg-4 px-md-2"><h4 className="white montserrat_semi_bold px-md-2">COMMUNITY</h4></Nav.Link>
                <Nav.Link href="#home" className="px-lg-4 px-md-2"><h4 className="white montserrat_semi_bold px-md-2">EVENTS</h4></Nav.Link>
                <Nav.Link href="#home" className="px-lg-4 px-md-2"><h4 className="white montserrat_semi_bold px-md-2">CONTACT US</h4></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;