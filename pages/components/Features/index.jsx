/* eslint-disable @next/next/no-img-element */
import styles from './style.module.css'


 export default function Features() {

    const commitments = {
        icon: {
          starPhoto: "img-features/star.svg",
          hatPhoto: "img-features/hat.svg",
          feedbackPhoto: "img-features/check.svg",
          weatherCockPhoto: "img-features/weathercock.svg",
          timerPhoto: "img-features/timer.svg",
          bagPhoto: "img-features/bag.svg",
        },
        subtitle: [
          "Avaliar positivamente",
          "Apoio pós-desafio",
          "Avaliar o que faz sentido",
          "Liberdade na escolha",
          "Nada de prazos irreais",
          "Contra o apagão da TI",
        ],
        paragraph: [
          "Entendemos que você está aprendendo. A gente também passou por esta fase, e sabemos que as coisas mudam muito rápido.",
          "Você saberá como está evoluindo, e nós aprendemos a deixar o nosso processo avaliativo mais seguro e de confiança.",
          "Nada de algoritmo de número primo ou de árvore binária. Nossos desafios se basearão no que você realmente vai trabalhar no futuro.",
          "Temos nossas preferências, mas a decisão de qual tecnologia você quer fazer o desafio fica a seu critério.",
          "Temos nossa rotina de trabalho, família e vida pessoal. Faça no seu tempo. Corrigiremos no nosso tempo também!",
          "Se você for bem neste desafio, vamos ter prazer em te indicar para vagas em empresas parceiras. Não temos vagas, mas temos um networking gigantesco.",
        ],
        alt: ["um ícone em forma de uma estrela azul", "um ícone de um chapéu de formatura", "um simbolo de tarefa completada .", "um ícone de catavento", "um cronômetro com uma lista sobreposta na diagonal", "um ícone de uma maleta de trabalho, com uma alça."]
      }
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

