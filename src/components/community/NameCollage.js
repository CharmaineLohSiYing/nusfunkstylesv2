import styles from './NameCollage.module.css';
import Block from '../common/Block';


export default function NameCollage() {
    return (
        <Block backgroundColor="bg-purple">
            <div className={styles.cloudcontainer + " text-center d-flex justify-content-center w-100 position-relative"}>
                <div>
                    <img className={styles.logo + " center"} src="assets/community/artwork/funk logo@4x.png" alt="Funk Logo"/>
                </div>
                <div>
                    <img className={"center " + styles.cloud} src="assets/community/artwork/wordcloud@4x.png" alt="Word Cloud"/>
                </div>
                <div className={"text-xxxl w-100 white text-uppercase center montserrat-bold " + styles.text}>Our Family<br/>Over The Years</div>
            </div>
        </Block>
    )
}
