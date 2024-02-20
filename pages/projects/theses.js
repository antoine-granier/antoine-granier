import { Container, Badge, List, ListItem } from "@chakra-ui/react";
// import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from "../../components/project";
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'
import theses from '../../public/images/projects/theses.png'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { useTranslation } from "react-i18next";

const Project = () => {

    const {t} = useTranslation()

    return (
        <Layout title="Theses">
            <Container>
                <Title>
                    {t("title-theses")} <Badge>2021</Badge>
                </Title>
                <P>
                    {t("theses")}
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{t("Platform")}</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>{t("Stack")}</Meta>
                        <span>PHP, Javascript (Vanilla)</span>
                    </ListItem>
                </List>
                <Zoom>
                    <ProjectImage src={theses.src} alt="Home page" placeholder='blur'/>
                </Zoom>
            </Container>
        </Layout>
    )
}

export default Project