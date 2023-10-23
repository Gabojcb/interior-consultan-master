import React from 'react';
import { Link } from 'pragmate-ui/link';
export function MenuDesktop() {

    return (
        <nav className="container__menu-nav">
            <ul className="menu-nav__ul">
                <li className="ul__list-items"><Link href='/'>Home</Link></li>
                <li className="ul__list-items"><Link href='/'>Colecction</Link></li>
                <li className="ul__list-items"><Link href='/'>About</Link></li>
                <li className="ul__list-items"><Link href='/'>Contact</Link></li>
            </ul>
        </nav>
    );
}
