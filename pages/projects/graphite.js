import { Container, Badge, List, ListItem, Link } from "@chakra-ui/react";
// import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from "../../components/project";
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'
import graphite from '../../public/images/projects/graphite.webp'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { useTranslation } from "react-i18next";

const Project = () => {

    const {t} = useTranslation() 

    return (
        <Layout title="Graphite">
            <Container>
                <Title>
                    Graphite <Badge>2025</Badge>
                </Title>
                <P>
                    {t("graphite")}
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{t("Platform")}</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>{t("Stack")}</Meta>
                        <span>React</span>
                    </ListItem>
                    <ListItem>
                        <Badge colorScheme='red' mr={2}>
                            {t("Preview")}
                        </Badge>
                        <Link href="https://graphite-app.vercel.app/" isExternal>
                            {t("View the project")}
                        </Link>
                    </ListItem>
                </List>
                <Zoom>
                    <ProjectImage src={graphite.src} alt="Home page" placeholder='blur'/>
                </Zoom>
            </Container>
        </Layout>
    )
}

export default Project