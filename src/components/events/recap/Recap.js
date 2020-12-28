import React from 'react';
import Block from '../../common/Block';
import styles from './Recap.module.css'
import Collage from './Collage'

const YearRecap = () => {
    return (
        <>
            <Block backgroundColor="bg_orange">
                <div className="d-flex flex-column align-items-center">
                    <img className={styles.artwork} src="assets/events/artwork/Artwork with words@4x.png" alt="A Year in NUS Funkstyles"/>
                </div>
            </Block>
            <Collage subtitle="Semester Class: Locking and Popping" main="SEM CLASS 1 EDITED.jpg" firstSmall="SEM CLASS 2 EDITED.jpg" secondSmall="SEM CLASS 3 EDITED.jpg"/>
            <Collage right subtitle="Session" main="SESSION 1 EDITED.jpg" firstSmall="SESSION 2 EDITED.png" secondSmall="SESSION 3 EDITED.jpg"/>
            <Collage subtitle="Funk Bonding Day" main="FUNK BONDING DAY 1 EDITED.jpg" firstSmall="FUNK BONDING DAY 2 EDITED.jpg" secondSmall="FUNK BONDING DAY 3 EDITED.jpg"/>
            <Collage right subtitle="Freshie Showcase" main="FRESHIE SHOWCASE 1 EDITED.jpg" firstSmall="FRESHIE SHOWCASE 2 EDITED.jpg" secondSmall="FRESHIE SHOWCASE 3 EDITED.jpg"/>
            <Collage subtitle="NUS CAC+US CONCERT" main="CAC+US 1 EDITED.jpg" firstSmall="CAC+US 2 EDITED.jpg" secondSmall="CAC+US 3 EDITED.jpg"/>
            <Collage right subtitle="Old School Night" main="OSN 1 EDITED.jpg" firstSmall="OSN 2 EDITED.jpg" secondSmall="OSN 3 EDITED.jpg"/>
        </>
    )
}

export default YearRecap;