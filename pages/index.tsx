import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header";

const Home: NextPage = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Head>
                <title>Twinkle Cake House</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div></div>
        </div>
    );
};

export default Home;
