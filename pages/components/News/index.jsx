/* eslint-disable @next/next/no-img-element */
import styles from './style.module.css'

export default function News(props) {
    console.log(props)
    return (
        <>  
            <section className={styles.containerWrapper}>
                <h2>Notícias</h2>
                <p>Listamos abaixo algumas notícias de tecnologia que nos motivam a estar ativos diariamente neste nosso projeto.</p>
                <section className={styles.gridContainer}>
                    <div className={styles.date}>
                        <img src={props.image[0]} alt="wer" />
                        <img className={styles.calendarImage} src="/img-news/calendar.png" alt="" />
                        <span>17 abr 2020</span>
                        <p>Participe da nossa Live sobre React e testes TDD</p>
                    </div>
                    <div className={styles.date}>                        
                        <img src={props.image[1]} alt="rwere" />
                        <img className={styles.calendarImage} src="/img-news/calendar.png" alt="" />
                        <span>17 abr 2020</span>
                        <p>Participe da nossa live de Nuxt para a Turing</p>
                    </div>
                    <div className={styles.date}>                        
                        <img src={props.image[2]} alt="rwer" />
                        <img className={styles.calendarImage} src="/img-news/calendar.png" alt="" /> 
                        <span>{props.date}</span>
                        <p>{props.paragraph}</p>
                    </div>

                </section>
            </section>
        </>
    )
}