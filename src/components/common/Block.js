import React from 'react'
import styles from './Block.module.css'

export default function Block(props) {

    const classes = [styles.block];

    if (!props.imageBackground){
        classes.push(styles['container_padding']);
        classes.push(props.backgroundColor);
    }
    
    
    return (
        <div className={classes.join(' ')}>
            {props.imageBackground && <img className="bg" src={props.imageBackground} alt={props.alt}>
            </img>}
            <div className={styles['block_content']}>
                {props.children}
            </div>
        </div>
    )
}
