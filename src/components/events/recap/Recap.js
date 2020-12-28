import React from 'react';
import Block from '../../common/Block';
import styles from './Recap.module.css'
import Collage from './Collage'

const data = [
    {
        "subtitle":"Semester Class: Locking and Popping",
        "information":[
            "Weekly semester classes are conducted by experienced in-house instructors and are suitable for all, with or without prior dance background. Members will go through a progressive dance journey (locking and popping) together throughout the semesters in the club.",
            "Drop us an email to find out more information regarding semester classes"
        ],
        "mainPic":"SEM CLASS 1 EDITED.jpg",
        "smallPic1":"SEM CLASS 2 EDITED.jpg",
        "smallPic2":"SEM CLASS 3 EDITED.jpg",
        "right": false
    },
    {
        "subtitle":"Session",
        "information": [
            "Sessions are held weekly on Friday nights, where members and alumni gather to train, cypher and just dance together.",
            "And after session,",
            "“Supper?”"
        ],
        "mainPic":"SESSION 1 EDITED.jpg",
        "smallPic1":"SESSION 2 EDITED.png",
        "smallPic2":"SESSION 3 EDITED.jpg",
        "right": true
    },
    {
        "subtitle":"Funk Bonding Day",
        "information": [
            "Funk bonding day is a full day event held in Semester 1, where members are brought together with the aim to create bonds across the different batches. It is usually filled with activities, games and dance workshops."
        ],
        "mainPic":"FUNK BONDING DAY 1 EDITED.jpg",
        "smallPic1":"FUNK BONDING DAY 2 EDITED.jpg",
        "smallPic2":"FUNK BONDING DAY 3 EDITED.jpg",
        "right": false
    },
    {
        "subtitle":"Freshie Showcase",
        "information": [
            "Freshie showcase is held annually at the end of Semester 1. It is a platform for freshies to showcase their popping and locking choreography taught by professional instructors. The showcase promotes an enriching experience for all freshies as they will get to choreograph their own dance and witness creativity from others'."
        ],
        "mainPic":"FRESHIE SHOWCASE 1 EDITED.jpg",
        "smallPic1":"FRESHIE SHOWCASE 2 EDITED.jpg",
        "smallPic2":"FRESHIE SHOWCASE 3 EDITED.jpg",
        "right": true
    },
    {
        "subtitle":"NUS CAC+US CONCERT",
        "information": [
            "NUS CAC+US Concert is held annually, with NUS Funkstyles performing alongside other performing groups. Being part of a large-scale concert, it provides a very good opportunity for the club members to experience performing in front of a big audience and for the club to showcase funk music and dance to others. The close bonds formed through months of hard work and trainings together is also one of the many precious takeaways."
        ],
        "mainPic":"CAC+US 1 EDITED.jpg",
        "smallPic1":"CAC+US 2 EDITED.jpg",
        "smallPic2":"CAC+US 3 EDITED.jpg",
        "right": false
    },
    {
        "subtitle":"Old School Night",
        "information": [
            "Old School Night is an internal funkstyle dance battle event held annually in Semester 2. It encourages members to perform and gain experience in dance battles."
        ],
        "mainPic":"OSN 1 EDITED.jpg",
        "smallPic1":"OSN 2 EDITED.jpg",
        "smallPic2":"OSN 3 EDITED.jpg",
        "right": true
    }
]


const YearRecap = () => {
    return (
        <>
            <Block backgroundColor="bg_orange">
                <div className="d-flex flex-column align-items-center">
                    <img className={styles.artwork} src="assets/events/artwork/Artwork with words@4x.png" alt="A Year in NUS Funkstyles"/>
                </div>
            </Block>
            {
                data.map(coll => (
                    <Collage key={coll.subtitle} right={coll.right} information={coll.information} subtitle={coll.subtitle} main={coll.mainPic} firstSmall={coll.smallPic1} secondSmall={coll.smallPic2}/>
                ))
            }
        </>
    )
}

export default YearRecap;