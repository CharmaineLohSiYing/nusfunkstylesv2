import React, {useState} from 'react'
import styles from './Instructors.module.css';
import Block from '../../common/Block';
import {Button, Collapse} from 'react-bootstrap'
import instructors from '../../../data/instructors.json'
import Instructor from './Instructor'



export default function Instructors() {

    const [open, setOpen] = useState(false);

    return (
        // <Block backgroundColor="bg_purple">
        //     <div className={styles.title + " text-center montserrat_bold white"}>Instructors</div>
        //     <div className="col  pt-3">
        //         <div className={styles.hovcon}>
        //             <img className={styles.person} src="assets/community/photos/Chunky@4x.png" alt=""/>
        //             <img className={styles.ring} src="assets/community/artwork/yellow circle ring@4x.png" alt=""/>
        //             <img className={styles.instructorinfo}
        //                 src="assets/community/artwork/white instructor info background@4x.png" alt=""/>
        //             <img className={styles.ofilter}
        //                 src="assets/community/artwork/translucent yellow circle over profile pic@4x.png" alt=""/>
        //             <blockquote className={styles.quote}>“Be one with the rhythm”</blockquote>
        //             <blockquote className={styles.fact}>/ I come from Chong Pang.<br/>
        //                 / I travel the world by bicycle.<br/>
        //                 / I am a “cher”.</blockquote>
        //         </div>
        //         <div className="">
        //             <div className={styles.instructorintroheading + " pt-3"}>Chunky (Ian)</div>
        //             <div className={styles.instructorintro}>Junior/ Senior Locking Instructor</div>
        //         </div>
        //     </div>
        // </Block>
        <Block backgroundColor="bg_purple">
            <div className={styles.title + " text-center montserrat_bold white"}>Instructors</div>
            <div className="d-flex flex-wrap justify-content-between pt-4">
                {
                    instructors.map(ins => (
                        <Instructor instructorData={ins}/>
                    ))
                }
            </div>
        </Block>
    )
}
