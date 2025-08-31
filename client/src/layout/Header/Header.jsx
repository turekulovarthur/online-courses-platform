import styles from './Header.module.css'
import { NavLinks } from '../NavLinks.jsx'

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <span>MyLogo</span>
                <NavLinks />    
                <button>Войти</button>
            </nav>
        </header>
    )
}