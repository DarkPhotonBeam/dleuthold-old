import * as React from "react"
import '../../styles/globals.scss';
import './Layout.scss';
import Hamburger from 'hamburger-react';
import {useEffect, useState} from "react";
import {Link} from "gatsby";

export default function Layout({children}) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(JSON.parse(localStorage.getItem('menuOpen')) || false);
    }, []);

    useEffect(() => {
        localStorage.setItem('menuOpen', isOpen.toString());
    }, [isOpen]);

    return (
        <>
            <div className={'hamburger'}>
                <Hamburger className={'nav_hamburger'} toggled={isOpen} toggle={setIsOpen} />
            </div>
            <aside className={`nav ${isOpen ? 'open' : ''}`}>
                <ul>
                    <NavItem name={'home'} path={'/'} />
                    <NavItem name={'projects'} path={'/projects'} />
                    <NavItem name={'music'} path={'/music'} />
                    <NavItem name={'files'} path={'/files'} />
                    {/*<NavItem name={'about'} path={'/about'} />*/}
                    <NavItem name={'contact'} path={'/contact'} />
                </ul>
            </aside>
            <main className={'main'}>
                {children}
            </main>
            <footer>

            </footer>
        </>
    );
}

function NavItem({name, path}) {

    return (
        <li><Link activeClassName={'active'} className={'' === path ? 'active' : ''} to={path}>{name}</Link></li>
    );
}