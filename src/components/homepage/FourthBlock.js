import React from 'react';
import styles from './FourthBlock.module.css';
import Block from '../common/Block';

export default function FourthBlock() {
    return (
        <Block imageBackground="images/homepage/Selfie.jpg" alt="Showcase">
            <div className={styles.text + " montserrat_regular"}>
                <div className={styles.subtitle + " orange"}>Vision</div>
                <div>To be a vibrant and prominent tertiary Funk Style club in<br/> Singapore that
                    cultivates creativity and individuality by<br/> creating an environment where learning is without limits
                    <br/>
                    <br/>
                </div>
                <div className={styles.subtitle + " orange"}>Mission</div>
                <div>To bring diversity to NUS by cultivating a community of<br/> Funkstyle dancers in NUS,
                    providing students with affordable<br/> and quality Popping and Locking classes, and a gateway to<br/> the
                    local Funk Style Community
                    <br/>
                    <br/>
                </div>
                <div className={styles.subtitle + " orange"}>Direction</div>
                <div>No audition, promotion towards funk related events and to<br/>
                    the scene in Singapore</div>
            </div>
        </Block>
    )
}
