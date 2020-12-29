import styles from './SecondBlock.module.css';
import Block from '../common/Block';


const secondBlockText1 = `NUS Funkstyles is aspiring to become a vibrant and prominent tertiary funk style club in Singapore. We have taken part in numerous inter-university and national events, qualifying and even winning a handful of such competitions. Though a relatively young club established in 2011, we are a strong community of funk dancers with a sense of kinship that can be shared through music and dance.`;
const secondBlockText2 = `A community of funk style dancers connecting through music and dance.`;

export default function SecondBlock() {
    return (
        <Block backgroundColor="bg-purple">
                    <div className={styles.container}> 
                        <div className={styles['text-portion-a']}>
                                <div className={"centered-text montserrat-semi-bold white text-left text-xl"}>
                                {secondBlockText2}
                                </div>
                        </div> 
                        <div className={styles.separator + " bg-orange"}></div> 
                        <div className={styles['text-portion-b']}>
                            <div className={"text-lg centered-text montserrat-semi-bold orange text-right"}>
                            {secondBlockText1}
                            </div>
                        </div>
                        
                    </div>
                </Block>
    )
}
