/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/Home.module.css'

 const Features = () => {

    
    return (
        <>
            <div className={styles.wrapper}>
                <section className={styles.features}>
                    <img className={styles.starPhoto} src="img-features/star.svg" alt="um ícone em forma de uma estrela azul" />
                    <h4>Avaliar positivamente</h4>
                    <p>Entendemos que você está aprendendo. A gente também passou por esta fase, e sabemos que as coisas mudam muito rápido.</p>
                </section>
                <section className={styles.features}>
                    <img className={styles.hatPhoto} src="img-features/hat.svg" alt="um ícone de um chapéu de formatura" />
                    <h4>Apoio pós-desafio</h4>
                    <p>Você saberá como está evoluindo, e nós aprendemos a deixar o nosso processo avaliativo mais seguro e de confiança.</p>
                </section>
                <section className={styles.features}>
                     <img className={styles.timerPhoto} src="img-features/check.svg" alt="um simbolo de tarefa completada ." />
                    <h4>Avaliar o que faz sentido</h4>
                    <p>Nada de algoritmo de número primo ou de árvore binária. Nossos desafios se basearão no que você realmente vai trabalhar no futuro.</p>
                </section>
                <section className={styles.features}>
                    <img className={styles.weathercockPhoto} src="img-features/weathercock.svg" alt="um ícone de catavento" />
                    <h4>Liberdade na escolha</h4>
                    <p>Temos nossas preferências, mas a decisão de qual tecnologia você quer fazer o desafio fica a seu critério.</p>
                </section>
                <section className={styles.features}>
                    <img className={styles.timerPhoto} src="img-features/timer.svg" alt="um cronômetro com uma lista sobreposta na diagonal" />
                    <h4>Nada de prazos irreais</h4>
                    <p>Temos nossa rotina de trabalho, família e vida pessoal. Faça no seu tempo. Corrigiremos no nosso tempo também! :)</p>
                </section>  
                <section className={styles.features}>
                    <img className={styles.starPhoto} src="img-features/bag.svg" alt="um ícone de uma maleta de trabalho, com uma alça." />
                    <h4>Contra o apagão da TI</h4>
                    <p>Se você for bem neste desafio, vamos ter prazer em te indicar para vagas em empresas parceiras. Não temos vagas, mas temos um networking gigantesco.</p>
                </section>
            </div>
        </>
    )
}

export default Features