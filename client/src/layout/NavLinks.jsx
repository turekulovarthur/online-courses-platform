import { Link } from "react-router-dom"

export const NavLinks = () => {
    return (
        <ul>
            <li><Link to={'/'}>Домащняя страница</Link></li>
            <li><Link to={'/courses'}>Избранное</Link></li>
            <li><Link to={'/favorites'}>Курсы</Link></li>
        </ul>
    )
}