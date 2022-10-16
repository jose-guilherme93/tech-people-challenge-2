/* eslint-disable @next/next/no-img-element */
import styles from './style.module.css'

export default function News(props) {
    
    return (
        <>  
            <section className={styles.containerWrapper}>
                <h2 id="news">Notícias</h2>
                <p>Listamos abaixo algumas notícias de tecnologia que nos motivam a estar ativos diariamente neste nosso projeto.</p>
                <section className={styles.gridContainer}>
                    <div className={styles.date}>
                        <img src={props.image[0]} alt="wer" />
                        <img className={styles.calendarImage} src="/img-news/calendar.png" alt="um pequeno ícone de calendário com uma cor sólida escura" />
                        <span>17 abr 2020</span>
                        <a href="https://www.tabnews.com.br/" rel='noopener noreferrer' target="_blank"><p>Participe da nossa Live sobre React e testes TDD</p></a>
                    </div>
                    <div className={styles.date}>                        
                        <img src={props.image[1]} alt="calendário" />
                        <img className={styles.calendarImage} src="/img-news/calendar.png" alt="" />
                        <span>17 abr 2020</span>
                        <a href="https://www.tabnews.com.br/" rel='noopener noreferrer' target="_blank"><p>{props.paragraph}</p></a>
                    </div>
                    <div className={styles.date}>         
                        <img src={props.image[2]} alt="calendário" />
                        <img className={styles.calendarImage} src="/img-news/calendar.png" alt="calendário" /> 
                        <span>{props.date}</span>
                        <p><a href="https://www.tabnews.com.br/" rel='noopener noreferrer' target="_blank">{props.paragraph}</a></p>
                    </div>

                </section>
            </section>
        </>
    )
}