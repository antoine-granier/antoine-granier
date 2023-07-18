import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import { ProjectGridItem } from "../components/grid-item";
import Layout from "../components/layout/article";
import waterTemperatureThumbnail from '../public/images/projects/water_temperature.png'
import thesesThumbnail from '../public/images/projects/theses.png'
import crmAloesInsystem from '../public/images/projects/crm_aloes_insystem.png'

const Projects = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Projects
                </Heading>
                <SimpleGrid columns={1} gap={6}>
                    <Section>
                        <ProjectGridItem id="crm_aloes_insystem" title="CRM Aloes Insystem" thumbnail={crmAloesInsystem}>
                            A web application that gives the temperature of the rivers in the Gironde region.
                        </ProjectGridItem>
                    </Section>
                    <Section>
                        <ProjectGridItem id="water_temperature" title="Water Temperature" thumbnail={waterTemperatureThumbnail}>
                            A web application that gives the temperature of the rivers in the Gironde region.
                        </ProjectGridItem>
                    </Section>
                    <Section>
                        <ProjectGridItem id="theses" title="Refont Theses.fr" thumbnail={thesesThumbnail}>
                            I realised a total redesign of the Theses.fr website, both on the design and the functional side. Theses.fr is a website listing all the theses done in France.
                        </ProjectGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Projects