import * as React from "react"
import Layout from "../components/Layout/Layout";
import {Helmet} from "react-helmet";
import {Link} from 'gatsby';

// markup
export default function ToolsPage() {
    return (
        <Layout>
            <Helmet title={'Tools - Daniel Leuthold'} />
            <section className={'center'}>
                <h1>Tools</h1>
                <ul className={'no-style spaced'}>
                    <li>
                        <Link to={'/tools/bqm-pitcher-calculator'}>bqm-pitcher-calculator</Link>
                    </li>
                </ul>
            </section>
        </Layout>
    )
}