import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Header from "../components/Header";
import { sanityClient, urlFor } from "../sanity-api";

import { Post } from "../typings";

interface Props {
    posts: [Post];
}

const Home: NextPage = ({ posts }: Props) => {
    return (
        <div className="max-w-7xl mx-auto">
            <Head>
                <title>Twinkle Cake House</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 lg:p-6">
                {posts.map((post) => {
                    return (
                        <Link key={post._id} href={`/post/${post.slug.current}`}>
                            <div className="border rounded-lg group cursor-pointer overflow-hidden">
                                <img
                                    className="h-80 w-full object-cover group-hover:scale-105 transition:transform duration-200 ease-in-out"
                                    src={urlFor(post.mainImage).url()!}
                                    alt=""
                                />
                                <div className="flex justify-between p-5 bg-white">
                                    <p className="text-large font-bold">{post.title}</p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export const getServerSideProps = async () => {
    const query = `*[_type == "post"]{
        _id,
        title,
        slug,
        mainImage
      }`;

    const posts = await sanityClient.fetch(query);
    return {
        props: {
            posts,
        },
    };
};

export default Home;
