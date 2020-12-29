import Block from '../../common/Block';
import styles from './Recap.module.css'
import Collage from './Collage'
import ScrollAnimation from 'react-animate-on-scroll';
import events from '../../../data/events.json'



const YearRecap = () => {
    return (
        <>
            <Block backgroundColor="bg-orange">
                <ScrollAnimation duration={2} animateIn="bounce" animateOnce={true} className="d-flex flex-column align-items-center">
                    <img className={styles.artwork} src="assets/events/artwork/Artwork with words@4x.png" alt="A Year in NUS Funkstyles"/>
                </ScrollAnimation>
            </Block>
            {
                events.map(coll => (
                    <Collage key={coll.subtitle} right={coll.right} information={coll.information} subtitle={coll.subtitle} main={coll.mainPic} firstSmall={coll.smallPic1} secondSmall={coll.smallPic2}/>
                ))
            }
        </>
    )
}

export default YearRecap;