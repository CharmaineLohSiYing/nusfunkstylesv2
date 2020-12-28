import React from 'react';
import Block from '../common/Block';
import styles from './ContactMain.module.css'

const ContactMain = () => {
    return (
        <div>
            <section>
                <Block resize imageBackground="assets/contact/CONTACT EDITED.jpg" padding alt="Background image">
                    <div className="w-75 center text-center montserrat_bold white">
                        <div className={styles.title}>Haven't seen enough?</div>
                        <a href="https://linktr.ee/nusfunk" target = "_blank" rel = "noopener noreferrer">
                            <img src="assets/contact/linktree icon@4x.png" alt="Linktree Icon"/>
                            <div className={styles.linktree}>Linktree</div>
                            <div className={styles.subtitle}>Click here for more links</div>
                        </a>
                        
                    </div>
                    
                </Block>
                
            </section>
        </div>
    )
}

export default ContactMain;