import * as React from "react"
import '../../styles/globals.scss';
import './Layout.scss';
import Hamburger from 'hamburger-react';
import {useState} from "react";

export default function Layout({children}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <aside className={'nav'}>
                <Hamburger className={'nav_hamburger'} toggled={isOpen} toggle={setIsOpen} />
                <ul className={isOpen ? 'open' : ''}>
                    <NavItem name={'home'} path={'/'} />
                    <NavItem name={'files'} path={'/files'} />
                    <NavItem name={'about'} path={'/about'} />
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
        <li><a className={'' === path ? 'active' : ''} href={path}>{name}</a></li>
    );
}