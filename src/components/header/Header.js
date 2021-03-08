import {useState} from 'react'
import styles from './Header.module.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FiMenu } from "react-icons/fi";
import {
    NavLink
  } from "react-router-dom";

const Header = () => {

    const navTextClasses = "px-lg-4 px-md-4 off-white montserrat-semi-bold " + styles.navbartext;

    const [navExpanded, setNavExpanded] = useState(false);

    const closeNav = () => {
        setTimeout(() => {setNavExpanded(false)}, 250)
    }

    const toggleNav = () => {
        setNavExpanded(navExpanded ? false : "expanded")
    }

    return (
        <Navbar bg="dark" expand="md" expanded={navExpanded} className={styles.header}>
            <NavLink to="/home"><img src={"/assets/Logo_small.png"} alt="logo"/></NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNav}>
                <FiMenu className="off-white" size={24}/>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav defaultActiveKey="/home">
                <NavLink
                    onClick={closeNav}
                    to="/home"
                    className={navTextClasses}
                    >
                    HOME
                </NavLink>
                <NavLink
                    onClick={closeNav}
                    to="/community"
                    className={navTextClasses}
                    >
                    COMMUNITY
                </NavLink>
                <NavLink
                    onClick={closeNav}
                    to="/events"
                    className={navTextClasses}
                    >
                    EVENTS
                </NavLink>
                <NavLink
                    onClick={closeNav}
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