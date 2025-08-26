import "./Header.css"
import { NavLinks } from './NavLinks'

export const Header = () => {
    return (
        <header>
            <nav>
                <span>MyLogo</span>
                <NavLinks />    
                <button>Войти</button>
            </nav>
        </header>
    )
}