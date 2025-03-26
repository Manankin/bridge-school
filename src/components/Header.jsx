import { Link, NavLink } from 'react-router-dom'
import '../styles/header.scss'

export default function Header() {
    return (
        <header className='header'>
            <nav className='nav'>
                <Link to="/" >Home</Link>
                <Link to="about" >Вступ</Link>
                <Link to="contact" >Контакти</Link>
            </nav>
        </header>
    )
}
