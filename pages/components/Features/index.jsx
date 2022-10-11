/* eslint-disable @next/next/no-img-element */
import styles from './style.module.css'

 export default function Features(props) {
    
    return (
        <>
            <div className={styles.wrapper}>
                <section className={styles.features}>
                    <img className={styles.starPhoto} src={props.icon.starPhoto} alt={props.alt[0]} />
                    <h4>{props.subtitle[0]}</h4>
                    <p>{props.paragraph[0]}</p>
                </section>
                <section className={styles.features}>
                    <img className={styles.hatPhoto} src={props.icon.hatPhoto} alt={props.alt[1]} />
                    <h4>{props.subtitle[1]}</h4>
                    <p>{props.paragraph[1]}</p>
                </section>
                <section className={styles.features}>
                    <img className={styles.feedbackPhoto} src={props.icon.feedbackPhoto} alt={props.alt[2]}/>
                    <h4>{props.subtitle[2]}</h4>
                    <p>{props.paragraph[2]}</p>
                </section>
                <section className={styles.features}>
                    <img className={styles.weatherCockPhoto} src={props.icon.weatherCockPhoto} alt={props.alt[3]}/>
                    <h4>{props.subtitle[3]}</h4>
                    <p>{props.paragraph[3]}</p>
                </section>
                <section className={styles.features}>
                    <img className={styles.timerPhoto} src={props.icon.timerPhoto} alt={props.alt[4]}/>
                    <h4>{props.subtitle[4]}</h4>
                    <p>{props.paragraph[4]}</p>
                </section>  
                <section className={styles.features}>
                    <img className={styles.bagPhoto} src= {props.icon.bagPhoto}alt={props.alt[5]}/>
                    <h4>{props.subtitle[5]}</h4>
                    <p>{props.paragraph[5]}</p>
                </section>
            </div>
        </>
    )
}

