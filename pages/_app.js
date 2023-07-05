import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/layout/main'
import theme from '../lib/theme'
import Fonts from "../components/fonts";
import { AnimatePresence } from "framer-motion";
import NoSsr from '../components/no-ssr.js';

const Website = ({Component, pageProps, router}) => {
    return (
        <NoSsr>
            <ChakraProvider theme={theme}>
                <Fonts />
                <Layout router={router}>
                    <AnimatePresence mode="wait" initial={true}>
                        <Component {...pageProps} key={router.route} />
                    </AnimatePresence>
                </Layout>
            </ChakraProvider>
        </NoSsr>
    )
}

export default Website