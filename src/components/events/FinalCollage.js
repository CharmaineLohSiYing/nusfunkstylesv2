import styles from './FinaleCollage.module.css'

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
        <div className="row">
            {
                props.arr.map(image => (
                    <div className="col p-0">
                        <img className={styles.image} src={baseAddressStart + image + baseAddressEnd} alt={"External event " + image}/>
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