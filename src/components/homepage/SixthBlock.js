import React from 'react';
import styles from './SixthBlock.module.css';
import Block from '../common/Block';

export default function SixthBlock() {
    return (
        <Block imageBackground="assets/homepage/Family.jpg" alt="Group Picture">
            <div className={styles.text + " montserrat_bold"}>
                Welcome to this family.
            </div>
        </Block>
    )
}
