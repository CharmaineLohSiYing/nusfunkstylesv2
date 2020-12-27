import React from 'react';
import Block from '../common/Block';
import UpcomingEvents from './UpcomingEvents';

const EventsMain = () => {
    return (
        <div>
            <section>
                <Block imageBackground="assets/events/photos/1 EVENTS FIRST MAIN PIC.jpg" alt="Sem 1 Class"/>
                <UpcomingEvents/>
            </section>
        </div>
    )
}

export default EventsMain;