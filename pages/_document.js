import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../lib/theme';

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <title>Antoine Granier - Portfolio</title>
                    <meta name="description" content="Découvrez le portfolio d'Antoine Granier, jeune développeur web fullstack plein d'ambition."/>
                    <meta name="keywords" content="portfolio, développeur web, développeur web fullstack, web developer, fullstack web developer, developer, développeur, antoine granier, antoine, granier, développeur web paris, développeur web paris, développeur web fullstack paris, developer paris, paris developer, web developer paris, paris web developer, fullstack web developer paris, paris fullstack developer, fullstack"/>
                    <meta property="og:title" content="Antoine Granier - Portfolio" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://antoine-granier.vercel.app" />
                    <meta property="og:site_name" content="Antoine Granier - Portfolio" />
                    <meta name="google-site-verification" content="m-IRRKTQ59iJRLIjo62uHVqQEzvie3YdgiDnpszplqY" />
                    <meta name="robots" content="all" />
                    <meta name="googlebot" content="all" />
                    <link rel="icon" href="/favicon.ico" sizes="any" />
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
