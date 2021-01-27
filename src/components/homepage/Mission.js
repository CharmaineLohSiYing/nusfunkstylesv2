import styles from './Mission.module.css';
import Block from '../common/Block';
import Carousel from 'react-bootstrap/Carousel'


const data = [
    {
        title: 'Vision',
        text: 'To be a vibrant and prominent tertiary Funk Style club in Singapore that cultivates creativity and individuality by creating an environment where learning is without limits'
    },
    {
        title: 'Mission',
        text: 'To bring diversity to NUS by cultivating a community of Funkstyle dancers in NUS, providing students with affordable and quality Popping and Locking classes, and a gateway to the local Funk Style Community'
    },
    {
        title: 'Direction',
        text: 'No audition, promotion towards funk related events and to the scene in Singapore'
    }
]

export default function FourthBlock() {
    return (
        <Block padding resize="bg-resize-sm" imageBackground="assets/homepage/Selfie.jpg" srcSet="assets/homepage/Selfie_small.jpg 816w, assets/homepage/Selfie.jpg 1632w" alt="Showcase">
            <div className={styles.web + " " + styles.text + " text-left position-absolute text-left white montserrat-regular"}>
                {data.map(content => {
                    return (
                        <div key={content.title}>
                        <div className={"font-weight-bold text-xl orange"}>{content.title}</div>
                        <div>{content.text}</div>
                        </div>
                    )
                })}
            </div>
            <div className={styles['mobile-bg'] + " center"}/>
            <div className={styles.mobile + " center"}>
                <Carousel indicators={false}>
                    {data.map(content => (
                        <Carousel.Item key={content.title}>
                            <div className="montserrat-regular w-100 d-flex text-center justify-content-center flex-column align-items-center">
                                <div className="text-xl font-weight-bold orange">{content.title}</div>
                                <div className="white">{content.text}</div>
                            </div>
                        </Carousel.Item>
                        
                    ))}
                </Carousel>
                
            </div>
            
        </Block>
    )
}