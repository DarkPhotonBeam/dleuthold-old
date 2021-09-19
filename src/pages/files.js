import * as React from "react"
import Layout from "../components/Layout/Layout";
import {Helmet} from "react-helmet";

// markup
export default function FilesPage() {
    return (
        <Layout>
            <Helmet title={'Files - Daniel Leuthold'} />
            <section className={'center'}>
                <h1>Files</h1>
            </section>
        </Layout>
    )
}