import Head from 'next/head';
import Navbar from  '../navbar.js';
import { Box, Container } from "@chakra-ui/react";
import VoxelPc from '../voxel-pc.js';
import NoSsr from '../no-ssr.js';
import { useColorModeValue } from "@chakra-ui/react";
import '../../lib/translation'
import { useTranslation } from "react-i18next"

const Main = ({children, router}) => {

    const { t } = useTranslation();

    const bg = useColorModeValue('#f0e7db', '#202023')

    return (
        <Box as="main" pb={8} bg={bg} minHeight="100vh">
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <meta name="description" content="Découvrez le portfolio d'Antoine Granier, jeune développeur web fullstack plein d'ambition."/>
                <meta name="keywords" content="portfolio, développeur web, développeur web fullstack, web developer, fullstack web developer, developer, développeur, antoine granier, antoine, granier, développeur web paris, développeur web paris, développeur web fullstack paris, developer paris, paris developer, web developer paris, paris web developer, fullstack web developer paris, paris fullstack developer, fullstack"/>
                <meta property="og:title" content="Antoine Granier - Portfolio" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://antoine-granier.vercel.app" />
                <meta property="og:site_name" content="Antoine Granier - Portfolio" />
                <title>{t("head-title")}</title>
            </Head>

            <Navbar path={router.asPath}/>

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                    <VoxelPc />
                </NoSsr>
                {children}
            </Container>
        </Box>
    )
}

export default Main
