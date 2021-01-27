import styles from './Welcome.module.css';
import Block from '../common/Block';

export default function SixthBlock() {
    return (
        <Block 
            srcSet="assets/homepage/Family_small.jpg 512w, assets/homepage/Family.jpg 2048w"
            imageBackground="assets/homepage/Family.jpg" alt="Group Picture">
            <div className={styles.text + " text-center w-100 white text-xxxl montserrat-bold"}>
                Welcome to this family.
            </div>
        </Block>
    )
}
