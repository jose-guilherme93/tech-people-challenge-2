/* eslint-disable @next/next/no-img-element */
import styles from './style.module.css'

export default function SwipperAgenda() {
   return (
            <div className={styles.wrapper}>
                <div className={styles.wrapperContent}>
                    <p className={styles.wrapperParagraphDate}>20<br/> Jan</p>
                    <h3>Live: Iniciando com nuxt por Mateus Ávila Isidoro</h3>
                </div>
                <p className={styles.wrapperParagraph}>Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur;</p>
                <div className={styles.participateContent}>
                    <button className={styles.participateButton}><a href=""></a>Participar</button>
                    <div className={styles.participateDate}>
                        <img src="img-news/time.png" alt="um pequeno ícone de relógio minimalista" />
                        <p>19:00 - 22:00</p>
                    </div>
                </div>
            </div>
   )
}