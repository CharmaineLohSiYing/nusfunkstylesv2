import styles from './Instructors.module.css';
import Block from '../../common/Block';
import instructors from '../../../data/instructors.json'
import Instructor from './Instructor'



export default function Instructors() {

    return (
        <Block backgroundColor="bg-purple">
            <div className={"text-xxl text-center montserrat-bold white"}>Instructors</div>
            <div className="d-flex flex-wrap justify-content-center pt-4">
                {
                    instructors.map(ins => (
                        <Instructor instructorData={ins}/>
                    ))
                }
            </div>
        </Block>
    )
}
