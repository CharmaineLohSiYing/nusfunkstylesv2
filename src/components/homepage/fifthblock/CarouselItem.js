import React from 'react'
import styles from './CarouselItem.module.css'

export default function CarouselItem(props) {

    return (
        <div className="w-100 d-flex justify-content-center flex-column align-items-center mt-3">
            <div className={styles.circle + " d-flex justify-content-center flex-column"}>
                <img className={styles.photo} src={"assets/homepage/spotlight/" + props.name + "@4x.png"} alt="First slide"/>
                <img className={styles.ring} src="assets/homepage/spotlight/Ring around pic.png" alt="Ring around pic"/>
            </div>
            <h6 className="white text-center montserrat_regular mt-4">{props.speech}</h6>
            <h6 className="orange text-center montserrat_regular">- {props.name}, Founding Member, {props.position}</h6> 
        </div>
    )
}
