import * as React from "react"
import Layout from "../../components/Layout/Layout";
import {Helmet} from "react-helmet";

// markup
export default function ModularSynthPage() {
    return (
        <Layout>
            <Helmet title={'Modular Synth - Projects'} />
            <section className={'center'}>
                <h1>Modular Synth</h1>
            </section>
        </Layout>
    )
}