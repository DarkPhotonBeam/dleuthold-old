import * as React from "react"
import Layout from "../components/Layout/Layout";
import {Helmet} from "react-helmet";

// markup
export default function MusicPage() {
    return (
        <Layout>
            <Helmet title={'Music - Daniel Leuthold'} />
            <section className={'center'}>
                <h1>Music</h1>
            </section>
        </Layout>
    )
}