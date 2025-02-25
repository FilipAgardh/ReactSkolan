import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header>
        <div class="logo">
            <img src="logo-no-background.png" alt="Logga" height="100" width="150" />
        </div>
        <nav>
            <ul>
                <li><NavLink to="/">Hem</NavLink></li>
                <li><NavLink to="menu">Meny</NavLink></li>
                <li><NavLink to="contact">Kontakt</NavLink></li>
                <li><NavLink to="about">Om oss</NavLink></li>
                <li><NavLink to="reviews">Recensioner</NavLink></li>
            </ul>
        </nav>
    </header>
        )
    }
}  

export default Header;