import React, {useState} from 'react'
import { buttonState } from "../../../globalState/atoms"
import { useAtom } from "jotai"
import styles from './style.module.css'
export default function MenuOptionsMobile() {
    
    const [isOpen, setIsOpen] = useAtom(buttonState)

    function handleClick () {
        setIsOpen(!isOpen)
    }
    
    return (
        <nav className={`${styles[isOpen ? "open" : "menu"]}`}>
            
            <a onClick={handleClick} className={styles.a}  href="#">Início</a>
            <a onClick={handleClick} className={styles.a} href="#ourCommitment">Compromisso</a>
            <a onClick={handleClick} className={styles.a} href="#news">Notícias</a>
            <a onClick={handleClick} className={styles.a} href="#agenda">Agenda</a>
      </nav>
    )
} 