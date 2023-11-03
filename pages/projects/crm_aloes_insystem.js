import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from "../../components/project";
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'
import CRMImage1 from '../../public/images/projects/crm_aloes_insystem_01.png'
import CRMImage2 from '../../public/images/projects/crm_aloes_insystem_02.png'

const Project = () => {

    return (
        <Layout title="CRM Aloes Insystem">
            <Container>
                <Title>
                    CRM ALoes Insystem <Badge>2022 - 2023</Badge>
                </Title>
                <P>
                Aloes internal tools (Holiday booking, ticket management, interventions and licences, rights management, deferral of development time, aged trial balance, etc.)
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJS, React, Vite, Electron (Time recording application)</span>
                    </ListItem>
                </List>
                <ProjectImage src={CRMImage1.src} alt="Home page"/>
                <ProjectImage src={CRMImage2.src} alt="Profile page"/>
            </Container>
        </Layout>
    )
}

export default Project