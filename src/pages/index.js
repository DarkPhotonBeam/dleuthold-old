import * as React from "react"
import Layout from "../components/Layout/Layout";
import {Helmet} from "react-helmet";

// markup
export default function IndexPage() {
    return (
        <Layout>
            <Helmet title={'Home - Daniel Leuthold'} />
            <section className={'hero'}>
                <h1>Hello.</h1>
            </section>
        </Layout>
    )
}