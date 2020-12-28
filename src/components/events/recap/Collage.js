import React from 'react';
import Block from '../../common/Block';
import styles from './Collage.module.css'

const Collage = (props) => {

    const baseAddress = "assets/events/photos/"
    const containerClasses = ["d-flex", "w-100"];

    if (props.right){
        containerClasses.push("flex-row-reverse");
    }

    return (
        <Block backgroundColor="bg_orange">
            <div className={containerClasses.join(' ')} >
                <div className={styles.col + " " + styles['col_lg']}>
                    <div className={"w-100 text-center text-uppercase montserrat_bold white " + styles.subtitle}>
                        {props.subtitle}
                    </div>
                    <img className={styles.pic + " " + styles['pic_lg']} src={baseAddress + props.main} alt={props.main}/>
                </div>
                <div className={styles.col + " " + styles['col_sm']}>
                    <img className={styles.pic} src={baseAddress + props.firstSmall} alt={props.firstSmall}/>
                    <img className={styles.pic} src={baseAddress + props.secondSmall} alt={props.secondSmall}/>
                </div>
            </div>
        </Block>
        
        
    )
}

export default Collage;