import styles from './FinaleCollage.module.css'
import LazyLoad from "react-lazyload";



const firstRow = [
    12, 11, 3, 4, 5
];

const secondRow = [
    6, 7, 8, 9, 10
]

const baseAddressStart= "assets/events/photos/"
const baseAddressEnd= " EXTERNAL EVENTS.jpg"

const Row = (props) => {
    return (
        <div className="w-100 row m-0">
            {
                props.arr.map(image => (
                    <div className="col p-0" key={image}>
                        <LazyLoad>
                            <img className={styles.image} src={baseAddressStart + image + baseAddressEnd} alt={"External event " + image}/>
                        </LazyLoad>
                    </div>
                    
                ))
            }
        </div>
    )
}

const FinaleCollage = () => {
    return (
        <div>
            <Row arr={firstRow}/>
            <Row arr={secondRow}/>
        </div>
    )
}

export default FinaleCollage;