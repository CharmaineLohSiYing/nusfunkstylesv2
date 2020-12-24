import React from 'react'
import styles from './Block.module.css'

export default function Block(props) {

    const backgroundClasses = [styles.block];
    const contentClasses = [];

    if (!props.imageBackground){
        backgroundClasses.push(styles['container_padding']);
        backgroundClasses.push(props.backgroundColor);
        contentClasses.push(styles['non_padded_content'])
    } else {
        // image background
        if (props.padding){
            // content: full-sized, absolute-positioned, with padding
            contentClasses.push(styles['padded_content'])
            contentClasses.push(styles['container_padding'])
        } else {
            contentClasses.push(styles['non_padded_content'])
        }
    }
    
    
    return (
        <div className={backgroundClasses.join(' ')}>
            {props.imageBackground && <img className="bg" src={props.imageBackground} alt={props.alt}>
            </img>}
            <div className={contentClasses.join(' ')}>
                {props.children}
            </div>
        </div>
    )
}
