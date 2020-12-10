import styles from './Homepage.module.css';
import Block from '../common/Block';
import FirstBlock from '../homepage/FirstBlock';
import SecondBlock from '../homepage/SecondBlock';
import FourthBlock from '../homepage/FourthBlock';
import ThirdBlock from '../homepage/ThirdBlock';
import FifthBlock from './fifthblock/FifthBlock';

const Homepage = () => {
    return (
        <div>
            <section>
                <FirstBlock/>
            </section>
            <section>
                <SecondBlock/>
                <ThirdBlock/>
                <FourthBlock/>
                <FifthBlock/>
            </section>
        </div>
    )
}

export default Homepage;