import * as React from "react"
import Layout from "../components/Layout/Layout";
import {Helmet} from "react-helmet";
import {useEffect, useState} from "react";

const responses = [
    'Ben?',
    'Yes.',
    'No.',
    'Ho ho ho',
    'Ugh',
];

// markup
export default function BenPage() {
    const [response, setResponse] = useState('Ben?');

    useEffect(() => {
        setInterval(() => {
            setResponse(responses[Math.floor(Math.random() * responses.length)]);
        }, 2000);
    }, []);

    return (
        <Layout hideHamburger={true}>
            <Helmet title={'Ben'} />
            <section className={'center'}>
                <h1 className={'tweak'}>{response}</h1>
                <div className={'flex'}>
                    <img alt={'Ben'} src={'https://storage.googleapis.com/replit/images/1649959588186_e2611ea752b078a1e7b865345762fa80.jpeg'} className={'tweak ben'} />
                </div>
            </section>
        </Layout>
    )
}