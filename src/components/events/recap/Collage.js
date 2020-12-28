import React from 'react';
import Block from '../../common/Block';
import styles from './Collage.module.css'

const Collage = (props) => {

    const baseAddress = "assets/events/photos/"
    const containerClasses = [styles.container,"d-flex", "w-100"];

    props.right ? containerClasses.push(styles.right) : containerClasses.push(styles.left)

    return (
        <Block backgroundColor="bg_orange">
            <div className={containerClasses.join(' ')} >
                <div className={styles.col + " " + styles['col_lg']}>
                    <div className={"w-100 text-center text-uppercase montserrat_bold white " + styles.subtitle}>
                        {props.subtitle}
                    </div>
                    <div className={styles['info_container']}>
                         <img className={styles.pic + " " + styles['pic_lg'] } src={baseAddress + props.main} alt={props.main}/>
                         <div className={"bg_purple_translucent center " + styles.information}>
                            <div className={"w-75 white center"}>
                                {
                                    props.information.map((text) => (
                                        <div>
                                        {text}
                                        </div>
                                    ))
                                }
                            </div>
                         </div>
                    </div>
                   
                </div>
                <div className={styles.col + " " + styles['col_sm']}>
                    <img className={styles.pic + " " + styles['pic_sm']} src={baseAddress + props.firstSmall} alt={props.firstSmall}/>
                    <img className={styles.pic + " " + styles['pic_sm']} src={baseAddress + props.secondSmall} alt={props.secondSmall}/>
                </div>
            </div>
        </Block>
        
        
    )
}

export default Collage;