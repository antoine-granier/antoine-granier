import { Container, Box, Heading, Image, useColorModeValue, Link, Button, List, ListItem, Icon } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioSection, BioYear } from "../components/bio"
import Layout from "../components/layout/article"
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"
import { useTranslation } from "react-i18next"
import NextLink from "next/link"

const Page = () => {

    const { t } = useTranslation();

    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    {t("header")}
                </Box>
                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Antoine Granier
                        </Heading>
                        <p>{t("job")}</p>
                    </Box>
                    <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                        <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" width="100px" height="100px" maxWidth="100px" display="inline-block" borderRadius="full" src={useColorModeValue("/images/me-dark.webp", "/images/me-light.webp")} alt="Profile Image"/>
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        {t("about")}
                    </Heading>
                    <Paragraph>
                        {t("description")}
                    </Paragraph>
                    <Box align="center" my={4}>
                        <Link href="/doc/CV.pdf" target="_blank">
                            <Button rightIcon={<ChevronRightIcon/>}>
                                Curriculum vitae
                            </Button>
                        </Link>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2002</BioYear>
                        {t("bio-2002")}
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        {t("bio-2022")}
                    </BioSection>
                    <BioSection>
                        <BioYear>2022-2023</BioYear>
                        {t("bio-2022-2023")}
                    </BioSection>
                    <BioSection>
                        <BioYear>2023-2025</BioYear>
                        {t("bio-2023-2025")}
                    </BioSection>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        {t("I")} ❤️
                    </Heading>
                    <Paragraph>
                        <NextLink style={{color: useColorModeValue('#7a5cd0', '#f6d492')}} className="hover:underline underline-offset-[3px]" href="/photography" passHref>Photography</NextLink>, Design (<Link href="https://www.figma.com/file/KfiArebMA9BVRNB5YSrZd7/Refont-Discogs?node-id=0%3A1&t=A4lhITQX3FneuQ1n-1" target="_blank">{t("discogs")}</Link>), 
                        {t("hobbies")}
                    </Paragraph>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">{t("web")}</Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/antoine-granier" target="_blanck">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}>@antoine-granier</Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/antoine-granier-473147204/" target="_blanck">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin}/>}>Linkedin</Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page
