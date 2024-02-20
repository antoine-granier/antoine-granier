import { Container, Badge, List, ListItem } from "@chakra-ui/react";
// import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from "../../components/project";
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'
import CRMImage1 from '../../public/images/projects/crm_aloes_insystem_01.png'
import CRMImage2 from '../../public/images/projects/crm_aloes_insystem_02.png'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { useTranslation } from "react-i18next";

const Project = () => {

    const {t} = useTranslation()

    return (
        <Layout title="CRM Aloes Insystem">
            <Container>
                <Title>
                    CRM ALoes Insystem <Badge>2022 - 2023</Badge>
                </Title>
                <P>
                    {t("crm-description")}
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{t("Platform")}</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>{t("Stack")}</Meta>
                        <span>NodeJS, React, Vite, Electron (Time recording application)</span>
                    </ListItem>
                </List>
                <Zoom>
                    <ProjectImage src={CRMImage1.src} alt="Home page" placeholder='blur'/>
                </Zoom>
                <Zoom>
                    <ProjectImage src={CRMImage2.src} alt="Profile page" placeholder='blur'/>
                </Zoom>
            </Container>
        </Layout>
    )
}

export default Project