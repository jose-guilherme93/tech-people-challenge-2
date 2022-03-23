import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/tech-logo.png'


export default function Header() {
    return (
        <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
              <li className={styles.imageLogo}>
                <a href="#">  
                  <Image src={logo}
                  className={styles.imageLogo} 
                  alt='logo da marca pessoas de tech' 
                  height={75} width={200}/>
                </a>
              </li>

              <div className={styles.leftMenu}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Compromisso</a></li>
                <li><a href="#">Notícias</a></li>
                <li><a href="#">Agenda</a></li>
              </div>
            </ul>
        </nav>
          
      </header>
    )
}