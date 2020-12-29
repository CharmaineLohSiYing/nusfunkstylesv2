import styles from './Footer.module.css'

const Footer = () => {

    return (
        <footer className="text-center text-dark bg-light px-4 d-flex flex-column justify-content-center align-items-center">
            <div className={styles.row + " d-flex align-items-center justify-content-center"}>
                <img className={styles.logo + " pl-4 pr-2"} src="assets/footer/Email.png" alt="Email Logo"/>
                <div className="montserrat-bold py-3 pr-4 text-uppercase">nusfunk@gmail.com</div>
            </div>
            <div className={styles.row + " d-flex align-items-center justify-content-around"}>
                <a href="https://instagram.com/nusfunkstyles?igshid=17tpohq72xlgk">
                    <img className={styles.logo} src="assets/footer/Instagram.png" alt="Instagram Logo"/>
                </a>
                <a href="https://www.facebook.com/nusfunk">
                    <img className={styles.logo} src="assets/footer/Facebook.png" alt="Facebook Logo"/>
                </a>
                <a href="https://www.youtube.com/user/nusfunkstyles">
                    <img className={styles.logo} src="assets/footer/YouTube.png" alt="YouTube Logo"/>
                </a>
            </div>
            <div className="montserrat-bold py-3">
                Copyright © 2020 NUS FUNKSTYLES. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;