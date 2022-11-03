/* eslint-disable @next/next/no-img-element */
import styles from './style.module.css'



export default function News() {
    const infoNews = {
        image: ["/img-news/img-news-1.jpg", "/img-news/img-news-2.png", "/img-news/img-news-3.png" ],
        date: "17 abr 2020",
        paragraph: "Como apoiar uma desenvolvedora em início de carreira?",
        
      }
    
    return (
        <>  
            <section className={styles.containerWrapper}>
                <h2 id="news">Notícias</h2>
                <p>Listamos abaixo algumas notícias de tecnologia que nos motivam a estar ativos diariamente neste nosso projeto.</p>
                <section className={styles.gridContainer}>
                    <div className={styles.date}>
                        <img src={infoNews.image[0]} alt="wer" />
                        <img className={styles.calendarImage} src="/img-news/calendar.png" alt="um pequeno ícone de calendário com uma cor sólida escura" />
                        <span>17 abr 2020</span>
                        <a href="https://www.tabnews.com.br/" rel='noopener noreferrer' target="_blank"><p>Participe da nossa Live sobre React e testes TDD</p></a>
                    </div>
                    <div className={styles.date}>                        
                        <img src={infoNews.image[1]} alt="calendário" />
                        <img className={styles.calendarImage} src="/img-news/calendar.png" alt="" />
                        <span>17 abr 2020</span>
                        <a href="https://www.tabnews.com.br/" rel='noopener noreferrer' target="_blank"><p>{infoNews.paragraph}</p></a>
                    </div>
                    <div className={styles.date}>         
                        <img src={infoNews.image[2]} alt="calendário" />
                        <img className={styles.calendarImage} src="/img-news/calendar.png" alt="calendário" /> 
                        <span>{infoNews.date}</span>
                        <p><a href="https://www.tabnews.com.br/" rel='noopener noreferrer' target="_blank">{infoNews.paragraph}</a></p>
                    </div>

                </section>
            </section>
        </>
    )
}