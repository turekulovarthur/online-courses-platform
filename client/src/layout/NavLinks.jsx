import { Link } from "react-router-dom"
import styles from './NavLinks.module.css'

export const NavLinks = () => {
    return (
        <ul className={styles.navList}>
            <li>
                <Link to={'/'}>Домашняя страница</Link>
            </li>
            <li>
                <Link to={'/courses'}>Избранное</Link>
            </li>
            <li>
                <Link to={'/favorites'}>Курсы</Link>
            </li>
        </ul>
    )
}