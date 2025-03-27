import { Link, NavLink } from 'react-router-dom'
import '../styles/header.scss'

export default function Header() {
    return (
        <header className='header'>
            <nav className='nav'>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="about" >Вступ</NavLink>
                <NavLink to="contact" >Контакти</NavLink>
            </nav>
        </header>
    )
}
