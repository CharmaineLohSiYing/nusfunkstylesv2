import React from 'react';
import CommunityBlock from './CommunityBlock'
import Instructors from './instructors/Instructors'
import Committee from './Committee'
import NameCollage from './NameCollage';
import VideoMontage from './VideoMontage';

const CommunityMain = () => {
    return (
        <div>
            <section>
                <CommunityBlock/>
                <Instructors/>
                <Committee/>
                <NameCollage/>
                <VideoMontage/>
            </section>
        </div>
    )
}

export default CommunityMain;