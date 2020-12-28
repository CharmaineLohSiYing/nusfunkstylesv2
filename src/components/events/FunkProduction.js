import React from 'react';
import Block from '../common/Block';
import styles from './FunkProduction.module.css'

const FunkProduction = () => {
    return (
        <Block backgroundColor="bg_orange">
            <div className={styles.container}>
                <img className={"center " + styles.image} src="assets/events/artwork/funk production coming soon@4x.png" alt="Funk production coming soon"/>
            </div>
        </Block>
    )
}

export default FunkProduction;