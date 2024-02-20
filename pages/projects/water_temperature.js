import { Container, Badge, List, ListItem } from "@chakra-ui/react";
// import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from "../../components/project";
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'
import waterTemperature from '../../public/images/projects/water_temperature.png'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { useTranslation } from "react-i18next";

const Project = () => {

    const {t} = useTranslation() 

    return (
        <Layout title="Water Temperature">
            <Container>
                <Title>
                    Water Temperature <Badge>2022</Badge>
                </Title>
                <P>
                    {t("A web application that gives the temperature of the rivers in the Gironde region.")}
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
                    <ProjectImage src={waterTemperature.src} alt="Home page" placeholder='blur'/>
                </Zoom>
            </Container>
        </Layout>
    )
}

export default Project