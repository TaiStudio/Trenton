// import { Helmet } from 'react-helmet';
import React from 'react';
import Head from 'next/head';

const Header = ({ data }) => {
    return (
        <div className='d-hide'>
            <Head>
                {/* TITLE */}
                <title>{data.name}</title>
                <meta name="twitter:title" content={data.name} />
                <meta property="og:title" content={data.name} />

                {/* DESCRIPTION */}
                <meta name="description" content={data.description} />
                <meta property="og:description" content={data.description} />
                <meta name="twitter:description" content={data.description} />

                {/* FAVICON */}
                <link rel="shortcut icon" href={data.favicon} type="image/x-icon"></link>
                <meta property="og:image" content={data.favicon} />
                <meta name="twitter:image" content={data.favicon} />
            </Head>
        </div>
    )
}

export default Header;