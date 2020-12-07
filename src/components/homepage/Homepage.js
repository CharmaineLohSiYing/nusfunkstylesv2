import styles from './Homepage.module.css'

const Homepage = () => {
    return (
        <div className={styles.homepage}>
            <video src="/images/Homepage Video.mp4" autoPlay loop muted/>
            {/* <div class="home-text1">A community of funk style dancers<br>connecting through music and dance.</div> */}
        </div>
    )
}

export default Homepage;