import React from 'react';
import CommunityBlock from './CommunityBlock'
import Instructors from './instructors/Instructors'
import Committee from './Committee'

const CommunityMain = () => {
    return (
        <div>
            <section>
                <CommunityBlock/>
                <Instructors/>
                <Committee/>
            </section>
        </div>
    )
}

export default CommunityMain;