import styles from './SixthBlock.module.css';
import Block from '../common/Block';

export default function SixthBlock() {
    return (
        <Block imageBackground="assets/homepage/Family.jpg" alt="Group Picture">
            <div className={styles.text + " text-center w-100 white text-xxxl montserrat-bold"}>
                Welcome to this family.
            </div>
        </Block>
    )
}
