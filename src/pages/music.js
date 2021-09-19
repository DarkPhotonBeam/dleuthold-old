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
                <ul className={'no-style spaced'}>
                    <li>
                        <a target={'_blank'} href={'https://open.spotify.com/artist/22AziAFsYY7WXwinuPtOhs?si=LYOPJmNEQ9atGmA7pglh5w&dl_branch=1'}>Spotify</a>
                    </li>
                    <li>
                        <a target={'_blank'} href={'https://music.apple.com/us/artist/dark-photon/1301484073'}>Apple Music</a>
                    </li>
                    <li>
                        <a target={'_blank'} href={'https://soundcloud.com/darkphotonbeam'}>Soundcloud</a>
                    </li>
                </ul>
            </section>
        </Layout>
    )
}