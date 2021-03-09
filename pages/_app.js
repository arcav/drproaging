import Head from "next/head";
import Layout from "./Layout/Layout";

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Dr.Proaging</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
                />
                <link rel="icon" href="/static/favicon.ico" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
};

export default MyApp;
