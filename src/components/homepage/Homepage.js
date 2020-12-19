import styles from './Homepage.module.css';
import Block from '../common/Block';
import FirstBlock from './FirstBlock';
import SecondBlock from './SecondBlock';
import FourthBlock from './FourthBlock';
import ThirdBlock from './ThirdBlock';
import FifthBlock from './fifthblock/FifthBlock';
import SixthBlock from './SixthBlock';

const Homepage = () => {
    return (
        <div>
            <section>
                <FirstBlock/>
                <SecondBlock/>
                <ThirdBlock/>
                <FourthBlock/>
                <FifthBlock/>
                <SixthBlock/>
            </section>
        </div>
    )
}

export default Homepage;