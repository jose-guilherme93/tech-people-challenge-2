import React from 'react'
import styles from './style.module.css'
import { useAtom } from 'jotai'
import { buttonState } from '../../../globalState/atoms'
import MenuOptionsMobile from '../HamburgerMenu/MenuOptionsMobile'
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useAtom(buttonState)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.menuButton}
      >

        <svg className={styles.menuIcon} viewBox="0 0 20 20">
          {isOpen ? (
            <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.828-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.828 4.828 4.828z" />
          ) : (
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          )}
        </svg>
      </button>
      <nav className={`${styles.menu}${styles[isOpen ? "open" : "menu"]}`}>
      
       {isOpen && <MenuOptionsMobile />}
      </nav>
      
    </>
  )
}

export default HamburgerMenu
