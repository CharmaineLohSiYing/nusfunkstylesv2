import React from 'react'
import styles from './Block.module.css'

export default function Block(props) {
    return (
        <div className={styles.block + " " + props.backgroundColor}>
            <div className={styles['block_content']}>
                {props.children}
            </div>
        </div>
    )
}
