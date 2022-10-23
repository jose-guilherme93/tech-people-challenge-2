/* eslint-disable @next/next/no-img-element */
import styles from './style.module.css'

import {commitments} from '../../contents'
 export default function Features() {
    return (
        <>
            <div className={styles.wrapper}>
                <section className={styles.features}>
                    <img className={styles.starPhoto} src={commitments.icon.starPhoto} alt={commitments.alt[0]} />
                    <h4>{commitments.subtitle[0]}</h4>
                    <p>{commitments.paragraph[0]}</p>
                </section>
                <section className={styles.features}>
                    <img className={styles.hatPhoto} src={commitments.icon.hatPhoto} alt={commitments.alt[1]} />
                    <h4>{commitments.subtitle[1]}</h4>
                    <p>{commitments.paragraph[1]}</p>
                </section>
                <section className={styles.features}>
                    <img className={styles.feedbackPhoto} src={commitments.icon.feedbackPhoto} alt={commitments.alt[2]}/>
                    <h4>{commitments.subtitle[2]}</h4>
                    <p>{commitments.paragraph[2]}</p>
                </section>
                <section className={styles.features}>
                    <img className={styles.weatherCockPhoto} src={commitments.icon.weatherCockPhoto} alt={commitments.alt[3]}/>
                    <h4>{commitments.subtitle[3]}</h4>
                    <p>{commitments.paragraph[3]}</p>
                </section>
                <section className={styles.features}>
                    <img className={styles.timerPhoto} src={commitments.icon.timerPhoto} alt={commitments.alt[4]}/>
                    <h4>{commitments.subtitle[4]}</h4>
                    <p>{commitments.paragraph[4]}</p>
                </section>  
                <section className={styles.features}>
                    <img className={styles.bagPhoto} src= {commitments.icon.bagPhoto}alt={commitments.alt[5]}/>
                    <h4>{commitments.subtitle[5]}</h4>
                    <p>{commitments.paragraph[5]}</p>
                </section>
            </div>
        </>
    )
}

