import { Container, Badge, List, ListItem } from "@chakra-ui/react";
// import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from "../../components/project";
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'
import theses from '../../public/images/projects/theses.png'

const Project = () => {

    return (
        <Layout title="Theses">
            <Container>
                <Title>
                    Theses Refont <Badge>2021</Badge>
                </Title>
                <P>
                    I realised a total redesign of the Theses.fr website, both on the design and the functional side. Theses.fr is a website listing all the theses done in France.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>PHP, Javascript (Vanilla)</span>
                    </ListItem>
                </List>
                <ProjectImage src={theses.src} alt="Home page" placeholder='blur'/>
            </Container>
        </Layout>
    )
}

export default Project