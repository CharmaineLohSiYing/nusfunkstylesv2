import React, {useState} from 'react'
import styles from './Instructor.module.css';
import {Button, Collapse} from 'react-bootstrap'


export default function Instructor(props) {

    const {instructorData} = props
    const [open, setOpen] = useState(false);

    return (
        <div 
            className={"d-flex flex-column align-items-center m-2 p-3 rounded " + styles.container}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
        >
            <img className={styles.picture} src={"assets/community/photos/" + instructorData.name + "@4x.png"} alt=""/>
            <div className="text-center montserrat_bold pt-3">
                <div className={"text-uppercase orange " + styles['sm-text']}>{instructorData.role}</div>
                <div className={"text-uppercase off_white " + styles.name}>{instructorData.name}</div>
                <Collapse in={open}>
                    <div id="example-collapse-text" className={styles.info}>
                        <div className={"w-100 bg_dark " + styles.line}></div>
                        <div className={"purple text-italic dark pt-2 pb-4 " + styles['md-text']}><em>“{instructorData.quote}”</em></div>
                        {
                            instructorData.facts.map(fact => (
                                <div className={"text-left dark " + styles['sm-text']}>/ {fact}</div>
                            ))
                        }
                    </div>
                </Collapse>
            </div>
        </div>
    )
}
