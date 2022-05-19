import * as React from "react"
import Layout from "../components/Layout/Layout";
import {Helmet} from "react-helmet";

// markup
export default function IndexPage() {
    return (
        <Layout>
            <Helmet title={'Home - Daniel Leuthold'} />
            <span className={'hidden'}>v1.0.1</span>
            <section className={'hero'}>
                <h1>Hello.</h1>
            </section>
        </Layout>
    )
}