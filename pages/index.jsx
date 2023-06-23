/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from 'react'

import Head     from 'next/head'

import Header   from './components/Header'
import Features from './components/Features'
import News     from './components/News'
import Agenda   from './components/Agenda'
import Form     from './components/Form'
import Footer   from './components/Footer'

import PurpleBall from './components/svgs/purpleBall'
import styles   from '../styles/Home.module.css'

export default function Home() {
  
  function hrefParticipateButton(){
    window.location.href = '#ourCommitment'
  }
 
  const [scrollColorChange, setScrollColorChange] = useState(false)
  
  const [navRef, setNavRef] = useState(0)
  useEffect(() => {
    function handleScrollChange() {
      if (window.scrollY > navRef) {
        setScrollColorChange(true)
      } else setScrollColorChange(false)
    }
    
    window.addEventListener('scroll', handleScrollChange)
  })
  
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Tech-People</title>
        <link rel="icon" href="img-home/favicon.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
     
      <Header 
        scrollChange={scrollColorChange} 
        setNavRef={setNavRef}
      />

      <main className={styles.main}>
        <section className={styles.description}>

          <section className={styles.mainDescription}>
            <h1>Somos um servidor <span>focado em transição de</span> carreira</h1>
            
            <p>Temos desafios, lives, eventos, tiramos dúvidas e até achamos uma colocação para você. Quer fazer parte? Clique no botão abaixo:</p>
            <button 
              onClick={hrefParticipateButton} 
              className={styles.participateButton}
            >
            Participar
            </button>
          </section>
          

            <section className={styles.asideImages}>
              <div className={styles.wrapperImage}>
                <PurpleBall className={styles.PurpleBall} />
              </div>

              
              <img 
                className={styles.womanImage} 
                src="img-home/woman.png" 
                alt='uma mulher branca, com longos cabelos ruivos, vestindo uma beca de formatura de faculdade. ela está sorrindo, segurando três livros.'
              />
              
            </section>
          <div className={styles.rotateBar}></div>
        </section>

        <section className={styles.ourCommitment}>
        
          <h2 id="ourCommitment">Nosso Compromisso</h2>
          <p>Temos um compromisso de fazer desafios e gerar avaliações precisas para que você saiba o quanto está evoluíndo. Acreditamos que você merece uma avaliação justa e precisa do seu processo.</p>
        </section>

        <Features />     
        <News /> 
        <Agenda />
        <Form />
        <Footer />
      </main>
    </div>
      
  )
}
