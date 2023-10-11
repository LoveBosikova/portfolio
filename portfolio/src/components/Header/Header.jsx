import React from 'react';
import styles from './header.scss'

export default class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='header__name'>Liubov.dev</div>
                <nav className='header__navWrap'>
                    <ul className='header__navitems'>
                        <li className='header__navitem'><a className='header__navlink' href="">Home</a></li>
                        <li className='header__navitem'><a className='header__navlink' href="">About</a></li>
                        <li className='header__navitem'><a className='header__navlink' href="">Projects</a></li>
                        <li className='header__navitem'><a className='header__navlink' href="">Contacts</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}