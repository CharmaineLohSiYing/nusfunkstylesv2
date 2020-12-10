import React from 'react';
import styles from './Header.module.css'
import {Navbar, Nav} from 'react-bootstrap'
import { FiMenu } from "react-icons/fi";

const Header = () => {

    return (
        <Navbar bg="dark" expand="md" className={styles.header}>
            <Navbar.Brand href="#home"><img src={"/images/Logo.png"} alt="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <FiMenu className="off_white" size={24}/>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav activeKey="/home">
                <Nav.Link href="home" active={true} className="px-lg-4 px-md-2"><h5 className={"active montserrat_semi_bold px-md-2"}>HOME</h5></Nav.Link>
                <Nav.Link href="home" className="px-lg-4 px-md-2"><h5 className={"off_white montserrat_semi_bold px-md-2 " + styles.navbartext}>COMMUNITY</h5></Nav.Link>
                <Nav.Link href="home" className="px-lg-4 px-md-2"><h5 className={"off_white montserrat_semi_bold px-md-2 " + styles.navbartext}>EVENTS</h5></Nav.Link>
                <Nav.Link href="home" className="px-lg-4 px-md-2"><h5 className={"off_white montserrat_semi_bold px-md-2 " + styles.navbartext}>CONTACT US</h5></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;