import React from 'react'
import styles from './ThirdBlock.module.css'
import Block from '../common/Block'

export default function ThirdBlock() {
    return (
        <Block backgroundColor="bg_orange">
                    <div className={styles['container']}>
                        <div className={styles['first_row']}>
                            <img className={styles.locker} src="images/homepage/Locking Character 1.png" alt="Locking Character"/>
                            <div className={styles['small_text'] + " montserrat_bold text-center dark"}>Est. 2011</div>
                            <img className={styles.popper} src="images/homepage/Popping Character 1.png" alt="Popping"/>
                        </div>
                        <img className={styles.locker + " md"} src="images/homepage/Locking Character 1.png" alt="Locking Character"/>
                        <div className={styles['text']}>
                                <div className={styles['small_text'] + " montserrat_bold text-center dark md"}>Est. 2011</div>
                                <div className={styles['main_text'] + " montserrat_bold text-center white"}>
                                    KEEP THE FUNK ALIVE
                                </div>
                                <div className={styles['small_text'] + " montserrat_bold text-center dark"}>
                                Locking x Popping
                                </div>
                        </div>
                        <img className={styles.popper + " md"} src="images/homepage/Popping Character 1.png" alt="Popping Character"/>
                    </div>
                </Block>
    )
}
