import React from 'react'
import styles from './Block.module.css'

export default function Block(props) {

    const backgroundClasses = [styles.block];
    const contentClasses = [];
    const imageClasses = [];

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

        if (props.resize){
            imageClasses.push('bg_resize');
        } else {
            imageClasses.push('bg')
        }
    }
    
    
    return (
        <div className={backgroundClasses.join(' ')}>
            {props.imageBackground && <img className={imageClasses.join('')} src={props.imageBackground} alt={props.alt}>
            </img>}
            <div className={contentClasses.join(' ')}>
                {props.children}
            </div>
        </div>
    )
}
