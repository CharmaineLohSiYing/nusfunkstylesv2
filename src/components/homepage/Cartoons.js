import styles from './Cartoons.module.css'
import Block from '../common/Block'
import ScrollAnimation from 'react-animate-on-scroll';


export default function ThirdBlock() {
    return (
        <Block backgroundColor="bg-orange">
                    <div className={styles['container']}>
                        <div className={styles['first-row']}>
                            <img className={styles.locker} src="assets/homepage/Locking Character 1.png" alt="Locking Character"/>
                            <div className={"text-xxl montserrat-bold text-center dark"}>Est. 2011</div>
                            <img className={styles.popper} src="assets/homepage/Popping Character 1.png" alt="Popping"/>
                        </div>
                        <ScrollAnimation animateIn="slideInLeft" animateOut='slideOutLeft'>
                            <img className={styles.locker + " md"} src="assets/homepage/Locking Character 1.png" alt="Locking Character"/>
                        </ScrollAnimation>
                        <div className={styles['text']}>
                                <div className={"text-xl montserrat-bold text-center dark md"}>Est. 2011</div>
                                <div className={"text-xxxl montserrat-bold text-center white"}>
                                    KEEP THE FUNK ALIVE
                                </div>
                                <div className={"text-xl montserrat-bold text-center dark"}>
                                Locking x Popping
                                </div>
                        </div>
                        <ScrollAnimation animateIn="slideInRight" animateOut='slideOutRight'>
                            <img className={styles.popper + " md"} src="assets/homepage/Popping Character 1.png" alt="Popping Character"/>
                        </ScrollAnimation>
                        
                    </div>
                </Block>
    )
}
