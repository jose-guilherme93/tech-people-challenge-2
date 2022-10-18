/* eslint-disable @next/next/no-img-element */
import styles from './style.module.css'


export default function Header({scrollChange} ) {
   
    return (
      <header className={styles.header}>
        <nav className={`${styles[scrollChange ? 'scrollChange' : 'nav']}`}>
          <ul className={styles.ul}>
            <div className={styles.imageLogoMenu}>
              <li className={styles.imageLogo}>
                <a href="#">

               {scrollChange ? 
               <img src="/tech-logo-white.svg" alt="logo pessoas de tech branco" />
               :
               <img className={styles.svg} src="/tech-logo-black.svg" alt="logo pessoas de tech preto" />
  }
                  </a>
                
              </li>
            </div>

            <div className={styles.rightMenu}>
              <li><a className={styles.links} href="#">Home</a></li>
              <li><a className={styles.links} href="#ourCommitment">Compromisso</a></li>
              <li><a className={styles.links} href="#news">Notícias</a></li>
              <li><a className={styles.links} href="#agenda">Agenda</a></li>
              <li><a className={styles.links} href="#">ícone</a></li>
            </div>
          </ul>
        </nav>
      </header>
    )
}