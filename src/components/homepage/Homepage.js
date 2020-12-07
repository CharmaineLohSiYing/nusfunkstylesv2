import styles from './Homepage.module.css'

const Homepage = () => {
    return (
        <div className={styles.homepage}>
            <video src="/images/Homepage Video.mp4" autoPlay loop muted/>
        </div>
    )
}

export default Homepage;