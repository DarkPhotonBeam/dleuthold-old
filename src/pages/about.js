import * as React from "react"
import Layout from "../components/Layout/Layout";
import {Helmet} from "react-helmet";

// markup
export default function AboutPage() {
    return (
        <Layout>
            <Helmet title={'About - Daniel Leuthold'} />
            <section>
                <h1>About</h1>
            </section>
        </Layout>
    )
}