import styles from './Homepage.module.css'

const mainText = `A community of funk style dancers \n connecting through music and dance.`;

const Homepage = () => {
    return (
        <div className={styles.homepage}>
            <div className={styles.container}>
                <video src="/images/Homepage Video.mp4" autoPlay loop muted/>
                <pre className={styles.maintext + " montserrat_bold new-line"}>
                    {mainText}
                </pre>
            </div>
        </div>
    )
}

export default Homepage;