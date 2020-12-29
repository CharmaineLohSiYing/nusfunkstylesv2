import Block from '../common/Block';
import UpcomingEvents from './UpcomingEvents';
import Recap from './recap/Recap';
import FunkProduction from './FunkProduction';
import FinaleCollage from './FinalCollage';

const EventsMain = () => {
    return (
        <div>
            <section>
                <Block imageBackground="assets/events/photos/1 EVENTS FIRST MAIN PIC.jpg" alt="Sem 1 Class"/>
                <UpcomingEvents/>
                <Recap/>
                <FunkProduction/>
                <FinaleCollage/>
            </section>
        </div>
    )
}

export default EventsMain;