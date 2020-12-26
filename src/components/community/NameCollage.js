import React from 'react'
import styles from './NameCollage.module.css';
import Block from '../common/Block';


export default function NameCollage() {
    return (
        <Block backgroundColor="bg_dark_purple">
            <div className={styles.cloudcontainer}>
                <div>
                    <img className={styles.logo + " center"} src="assets/community/artwork/funk logo@4x.png" alt="Funk Logo"/>
                </div>
                <div>
                    <img className={styles.cloud} src="assets/community/artwork/wordcloud@4x.png" alt="Word Cloud"/>
                </div>
                <div className={"w-100 white text-uppercase center montserrat_bold " + styles.text}>Our Family<br/>Over The Years</div>
            </div>
        </Block>
    )
}
