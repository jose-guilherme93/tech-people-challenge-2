
import {useRef} from 'react'
import Image from 'next/image'
import styles from './style.module.css'

export default function Header({scrollChange, setNavRef} ) {
  const navRef = useRef(0)
  const valueNavRef = navRef.current?.value

  valueNavRef > 0 && setNavRef(valueNavRef)

    return (
      
        <nav  ref={navRef}  className={`${styles[scrollChange ? 'scrollChange' : 'nav']}`}>
          <div className={styles.leftMenu}> <a href="#">
              {
              scrollChange ?
               <Image 
                src="/img-header/tech-logo-white.svg" 
                alt="logo pessoas de tech branco"
                className={styles.svg}
                width={154}
                height={50}
                 />
               :
               <Image 
               className={styles.svg} 
               src="/img-header/tech-logo-black.svg" 
               alt="logo pessoas de tech preto" 
               width={154}
               height={50}
               />
              }
                </a>
           
          </div>

          <div className={styles.rightMenu}>
            <li><a className={styles.links} href="#">Home</a></li>
            <li><a className={styles.links} href="#ourCommitment">Compromisso</a></li>
            <li><a className={styles.links} href="#news">Notícias</a></li>
            <li><a className={styles.links} href="#agenda">Agenda</a></li>
          </div>
          
        </nav>
    )
}