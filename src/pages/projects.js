import * as React from "react"
import Layout from "../components/Layout/Layout";
import {Helmet} from "react-helmet";

// markup
export default function ProjectsPage() {
    return (
        <Layout>
            <Helmet title={'Projects - Daniel Leuthold'} />
            <section className={'center'}>
                <h1>Projects</h1>
            </section>
        </Layout>
    )
}