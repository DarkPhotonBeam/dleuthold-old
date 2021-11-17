import * as React from "react"
import Layout from "../components/Layout/Layout";
import {Helmet} from "react-helmet";
import {Link} from 'gatsby';

// markup
export default function GamesPage() {
    return (
        <Layout>
            <Helmet title={'Games - Daniel Leuthold'} />
            <section className={'center'}>
                <h1>Games</h1>
                <ul className={'no-style spaced'}>
                    <li>
                        <Link to={'/games/tic-tac-toe'}>tic-tac-toe</Link>
                    </li>
                </ul>
            </section>
        </Layout>
    )
}