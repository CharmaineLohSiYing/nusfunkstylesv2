import React from 'react'
import styles from './FirstBlock.module.css';

const Text = `A community of funk style dancers \n connecting through music and dance.`;

export default function FirstBlock() {
    return (
        <div className={styles.container}>
            <video className="bg" src="/images/homepage/Homepage Video.mp4" autoPlay loop muted/>
            <pre className={styles.text + " montserrat_bold new_line"}>
                {Text}
            </pre>
        </div>
    )
}
