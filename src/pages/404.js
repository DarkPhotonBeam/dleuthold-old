import * as React from "react"
import {Link} from "gatsby"
import {Helmet} from "react-helmet";
import Layout from "../components/Layout/Layout";

// markup
const NotFoundPage = () => {
    return (
        <Layout>
            <Helmet title={'404 - Daniel Leuthold'} />
            <section className={'hero'}>
                <h1>Error 404</h1>
                <h3>Page not found.</h3>
            </section>
        </Layout>
    )
}

export default NotFoundPage
