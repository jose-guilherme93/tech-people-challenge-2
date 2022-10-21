import React from "react";
import styles from './style.module.css'


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <img src="/footer-icons/footer-logo.svg" alt="logo" />
                <p>Iniciativa Pessoas de Tech <br /> Todos os direitos reservados</p>
            </div>
            <div className={styles.footerLogos}>
                <img src="/footer-icons/facebook.png" alt="ícone dofacebook" />
                <img src="/footer-icons/twitter.png" alt="ícone do twitter" />
                <img src="/footer-icons/instagram.png" alt="ícone do instagram" />
            </div>    
        </footer>
    )
}