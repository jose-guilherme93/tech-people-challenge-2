/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/Home.module.css'

export default function News() {
    return (
        <>  <section className={styles.containerWrapper}>
                <h2>Notícias</h2>
                <p>Listamos abaixo algumas notícias de tecnologia que nos motivam a estar ativos diariamente neste nosso projeto.</p>
                <section className={styles.gridContainer}>
                    <div className={styles.date}>
                        <img src="/img-news/img-news.jpg" alt="wer" />
                        <img className={styles.calendarImage} src="/img-news/calendar.png" alt="" />
                        <span>17 abr 2020</span>
                        <p>Participe da nossa Live sobre React e testes TDD</p>
                    </div>
                    <div className={styles.date}>                        
                        <img src="/img-news/img-news.jpg" alt="rwere" />
                        <img className={styles.calendarImage} src="/img-news/calendar.png" alt="" />
                        <span>17 abr 2020</span>
                        <p>Participe da nossa live de Nuxt para a Turing</p>
                    </div>
                    <div className={styles.date}>                        
                        <img src="/img-news/img-news.jpg" alt="rwer" />
                        <img className={styles.calendarImage} src="/img-news/calendar.png" alt="" /> 
                        <span>17 abr 2020</span>
                        <p>Como apoiar uma desenvolvedora em início de carreira?</p>
                    </div>

                </section>
        </section>
        </>
    )
}