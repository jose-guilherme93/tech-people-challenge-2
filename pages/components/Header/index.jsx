/* eslint-disable @next/next/no-img-element */
import {useRef} from 'react'
import styles from './style.module.css'

export default function Header({scrollChange, setNavRef} ) {
  const navRef = useRef(0)
  const valueNavRef = navRef.current.value

  valueNavRef > 0 ? setNavRef(valueNavRef) : ''
  console.log(valueNavRef)
  
    return (
      <header ref={navRef} className={styles.header}>
        <nav ref={navRef} className={`${styles[scrollChange ? 'scrollChange' : 'nav']}`}>
          <ul className={styles.ul}>
            <div className={styles.imageLogoMenu}>
              <li className={styles.imageLogo}>
                <a href="#">
              {scrollChange ? 
               <img src="/img-header/tech-logo-white.svg" alt="logo pessoas de tech branco" />
               :
               <img className={styles.svg} src="/img-header/tech-logo-black.svg" alt="logo pessoas de tech preto" />
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