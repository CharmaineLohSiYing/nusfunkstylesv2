import styles from './FirstBlock.module.css';

const text = `A community of funk style dancers \n connecting through music and dance.`;

export default function FirstBlock() {
    return (
        <div className={styles.container}>
            <video className="bg" src="/assets/homepage/Homepage Video.mp4" autoPlay loop muted={true}/>
            <div className={styles.text + " text-xxxl center montserrat-bold new-line"}>
                {text}
            </div>
        </div>
    )
}
