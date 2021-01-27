import {useEffect, useState} from 'react'
import FirstVideo from './FirstVideo';
import Introduction from './Introduction'
import Cartoons from './Cartoons'
import Mission from './Mission'
import Founders from './founders/Founders'
import Welcome from './Welcome'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


const HomepageMain = () => {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setShowModal(true)
    }, []);

    const handleClose = () => {
        setShowModal(false)
    }

    return (
        <div>
            <section>
                <FirstVideo/>
                <Introduction/>
                <Cartoons/>
                <Mission/>
                <Founders/>
                <Welcome/>
                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Join Us</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>NUS FUNKSTYLES JUNIOR SEM CLASS interest form for AY20/21 is now OPEN!<br/><br/>You can find the interest form under CONTACT US {'>'} linktree.</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" target="-blank" rel = "noopener noreferrer" href="https://nus.campuslabs.com/engage/submitter/form/start/457508">
                        View Form
                    </Button>
                    </Modal.Footer>
                </Modal>
            </section>
        </div>
    )
}

export default HomepageMain;