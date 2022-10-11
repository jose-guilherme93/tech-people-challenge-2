/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './style.module.css'

export default function SwipperAgenda() {
   return (
            <div className={styles.wrapper}>
                <div className={styles.wrapperContent}>
                    <p>20 jan</p>
                    <h3>Live: Iniciando com nuxt por Mateus Ávila Isidoro</h3>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minus ea repellendus deleniti animi recusandae?</p>
                <div className={styles.participateContent}>
                    <button className={styles.participateButton}><a href=""></a>Participar</button>
                    <div className={styles.participateTime}>
                        <img src="img-news/time.png" alt="um pequeno ícone de relógio minimalista" />
                        <p>19:00 - 22:00</p>
                    </div>
                </div>
            </div>
   )
}