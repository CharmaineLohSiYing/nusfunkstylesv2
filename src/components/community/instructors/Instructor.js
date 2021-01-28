import {useState} from 'react'
import styles from './Instructor.module.css';
import {Button, Collapse} from 'react-bootstrap'
import LazyLoad from "react-lazyload";


export default function Instructor(props) {

    const {instructorData} = props
    const [open, setOpen] = useState(false);

    return (
        <div 
            className={"d-flex flex-column align-items-center p-3 rounded " + styles.container}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
        >
            <div>
                <img loading="lazy" className={styles.picture} src={"assets/community/photos/" + instructorData.name + "@4x.png"} alt=""/>
            </div>
            <div className="text-center montserrat-bold pt-3">
                <div className={"text-uppercase orange"}>{instructorData.role}</div>
                <div className={"text-uppercase off-white " + styles.name}>{instructorData.name}</div>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        <div className={"w-100 bg " + styles.line}></div>
                        <div className={"purple text-italic dark pt-2 pb-4"}><em>“{instructorData.quote}”</em></div>
                        {
                            instructorData.facts.map(fact => (
                                <div key={fact} className={"text-left dark text-sm"}>/ {fact}</div>
                            ))
                        }
                    </div>
                </Collapse>
            </div>
        </div>
    )
}
