import React from 'react';
import styles from './FourthBlock.module.css';
import Block from '../common/Block';

export default function FourthBlock() {
    return (
        <Block imageBackground="images/homepage/selfie.jpg" alt="Showcase">
            <div className={styles.text}>
                {/* <div>Vision</div>
                <div className="vmd-text">To be a vibrant and prominent tertiary Funk Style club in<br/> Singapore that
                    cultivates creativity and individuality by<br/> creating an environment where learning is without limits
                    <br/>
                    <br/>
                </div>
                <div>Mission</div>
                <div className="vmd-text">To bring diversity to NUS by cultivating a community of<br/> Funkstyle dancers in NUS,
                    providing students with affordable<br/> and quality Popping and Locking classes, and a gateway to<br/> the
                    local Funk Style Community
                    <br/>
                    <br/>
                </div>
                <div>Direction</div>
                <div className="vmd-text">No audition, promotion towards funk related events and to<br/>
                    the scene in Singapore</div> */}
            </div>
        </Block>
    )
}
