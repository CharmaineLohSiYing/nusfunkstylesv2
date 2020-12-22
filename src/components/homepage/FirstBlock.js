import React from 'react'
import styles from './FirstBlock.module.css';

const text = `A community of funk style dancers \n connecting through music and dance.`;

export default function FirstBlock() {
    return (
        <div className={styles.container}>
            <video className="bg" src="/assets/homepage/Homepage Video.mp4" autoPlay loop muted/>
            <pre className={styles.text + " center montserrat_bold new_line"}>
                {text}
            </pre>
        </div>
    )
}
