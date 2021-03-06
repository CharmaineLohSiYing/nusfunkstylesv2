import styles from './CarouselItem.module.css'
import LazyLoad from "react-lazyload";


export default function CarouselItem(props) {

    return (
        <div className="w-100 d-flex justify-content-center flex-column align-items-center mt-3">
            <div className={styles.circle + " d-flex justify-content-center flex-column"}>
                <img loading="lazy" className={styles.photo} src={"assets/homepage/spotlight/" + props.name + "@4x_small.png"} alt="First slide"/>
                <img className={styles.ring} src="assets/homepage/spotlight/Ring around pic_small.png" alt="Ring around pic"/>
            </div>
            <div className="text-lg white text-center montserrat-regular mt-4">{props.speech}</div>
            <div className="text-lg orange text-center montserrat-regular">- {props.name}, Founding Member, {props.position}</div> 
        </div>
    )
}
