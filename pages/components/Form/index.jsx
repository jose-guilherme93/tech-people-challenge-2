import React, { useState, useEffect } from "react"
import styles from './style.module.css'
import Loading from "../Loading/index"

export default function Form() {
    const [isClicked, setIsClicked] = useState(false)
    
    useEffect(() => {
        setTimeout(() => {
            setIsClicked(false)
        }, 400)
        
    }, [])

   
    return (
           <div className={styles.wrapper}>
                
                    {
                    isClicked ?
                        <>
                            <Loading />
                            <button className={styles.goBackButton} onClick={() => setIsClicked(false)}>voltar</button>  
                        </>
                        :
                        <>
                            <h2>Preparado para fazer parte da nossa iniciativa?</h2>
                            <p>Preencha todos os campos para que possamos entrar em contato.</p>
                            <form className={styles.form}>
                                <input required type="text" aria-label="Nome completo" placeholder="Nome Completo"/>
                                <input required type="email" aria-label="Email" placeholder="E-mail" />
                                <input required type="tel" aria-label="Telefone" placeholder="Telefone Celular"/>
                                <button className={styles.buttonForm} onClick={() => setIsClicked(true)}>Cadastre-se</button>
                            </form>
                        </>
                        
                    }

           </div>

    )
}