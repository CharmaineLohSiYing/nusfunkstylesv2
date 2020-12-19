import React from 'react';
import styles from './FourthBlock.module.css';
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
        <Block imageBackground="images/homepage/Selfie.jpg" alt="Showcase">
            <div className={styles.web + " " + styles.text + " montserrat_regular"}>
                {data.map(content => {
                    return (
                        <>
                        <div className={styles.subtitle + " orange"}>{content.title}</div>
                        <div>{content.text}</div>
                        </>
                    )
                })}
            </div>
            <div className={styles['mobile_bg'] + " center"}/>
            <div className={styles.mobile + " center"}>
                <Carousel indicators={false}>
                    {data.map(content => (
                        <Carousel.Item>
                            <div className="montserrat_regular w-100 d-flex text-center justify-content-center flex-column align-items-center">
                                <h5 className={styles['mobile_subtitle'] + " orange"}>{content.title}</h5>
                                <h6 className={styles['mobile_text']}>{content.text}</h6>
                            </div>
                        </Carousel.Item>
                        
                    ))}
                </Carousel>
                
            </div>
            
        </Block>
    )
}