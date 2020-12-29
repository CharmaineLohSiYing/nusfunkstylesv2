import Block from '../common/Block';
import styles from './UpcomingEvents.module.css'

const UpcomingEvents = () => {
    return (
        <Block backgroundColor="bg-purple">
            <div className={"text-center text-uppercase white montserrat-bold text-xxl"}>Upcoming Events</div>
            <div class="pt-4 row justify-content-center">
                <iframe
                    src="https://calendar.google.com/calendar/b/5/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FSingapore&amp;src=bnVzZnVua3dlYmlsaWNpb3VzQGdtYWlsLmNvbQ&amp;color=%23039BE5&amp;showNav=1&amp;showPrint=0&amp;showCalendars=1&amp;showTitle=0&amp;showDate=1&amp;showTabs=1"
                    style={{borderWidth: 0}} width="800" height="600" frameborder="0" scrolling="no"></iframe>
            </div>
        </Block>
    )
}

export default UpcomingEvents;