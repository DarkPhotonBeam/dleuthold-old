import * as React from "react"
import Layout from "../components/Layout/Layout";
import {Helmet} from "react-helmet";

// markup
export default function ToolsPage() {
    return (
        <Layout>
            <Helmet title={'Tools - Daniel Leuthold'} />
            <section className={'center'}>
                <h1>Tools</h1>
            </section>
        </Layout>
    )
}