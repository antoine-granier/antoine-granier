import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../lib/theme';

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <title>Antoine Granier - Portfolio</title>
                    <meta name="description" content="Découvrez le portfolio d'Antoine Granier, jeune développeur web fullstack."
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
