import React, {useState} from 'react';
import styles from './Header.module.css'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { FiMenu } from "react-icons/fi";

const white = "rgba(252,252,252,0.75)";

const Header = () => {

    // const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

    return (
        // <div className={styles.header}>
        //     <img src={"/images/Logo.png"} alt="logo"/>
        //     <div className={styles.circle}></div>
        // </div>
        <Navbar bg="dark" expand="md">
            <Navbar.Brand href="#home"><img src={"/images/Logo.png"} alt="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <FiMenu className="white" size={24}/>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                {/* <Nav className="mr-auto"> */}
                <Nav className="mr-sm-2">
                <Nav.Link href="#home"><h4 className="white montserrat_semi_bold">HOME</h4></Nav.Link>
                <Nav.Link href="#home"><h4 className="white montserrat_semi_bold">COMMUNITY</h4></Nav.Link>
                <Nav.Link href="#home"><h4 className="white montserrat_semi_bold">EVENTS</h4></Nav.Link>
                <Nav.Link href="#home"><h4 className="white montserrat_semi_bold">CONTACT US</h4></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;