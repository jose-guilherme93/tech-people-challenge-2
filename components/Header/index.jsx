import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import logo from '../../public/tech-logo.png'


export default function Header() {
    return (
        <header className={styles.header}>

        <ul className={styles.ul}>
          <li>
            <Image src={logo} className={styles.imageLogo} alt='pessoas de tech' height={75}/>
          </li>

          <div className={styles.leftMenu}>
            <li>Home</li>
            <li>Compromisso</li>
            <li>Notícias</li>
            <li>Agenda</li>
          </div>

        </ul>
      </header>
    )
}