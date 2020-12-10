import styles from './Homepage.module.css'
import Block from '../common/Block'

const mainText = `A community of funk style dancers \n connecting through music and dance.`;
const secondBlockText1 = `NUS Funkstyles is aspiring to become a vibrant and prominent tertiary funk style club in Singapore. We have taken part in numerous inter-university and national events, qualifying and even winning a handful of such competitions. Though a relatively young club established in 2011, we are a strong community of funk dancers with a sense of kinship that can be shared through music and dance.`;
const secondBlockText2 = `A community of funk style dancers connecting through music and dance.`;

const Homepage = () => {
    return (
        <div>
            <section className={styles.container}>
                <video className={styles.mainvideo} src="/images/Homepage Video.mp4" autoPlay loop muted/>
                <pre className={styles.maintext + " montserrat_bold new_line"}>
                    {mainText}
                </pre>
            </section>
            <section>
                <Block backgroundColor="bg_purple">
                    <div className={styles['second_block']}>
                        <div className={styles['second_block_a']}>
                            <h3 className={"centered_text montserrat_semi_bold white text-left"}>
                            {secondBlockText2}
                            </h3>
                        </div>
                        <div className={styles.separator + " bg_orange"}></div>
                        <div className={styles['second_block_b']}>
                            <h5 className={"centered_text montserrat_semi_bold orange text-right"}>
                            {secondBlockText1}
                            </h5>
                        </div>
                        
                    </div>
                    
                </Block>
            </section>
        </div>
    )
}

export default Homepage;