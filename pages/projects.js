import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import { ProjectGridItem } from "../components/grid-item";
import Layout from "../components/layout/article";
import waterTemperatureThumbnail from '../public/images/projects/water_temperature.png'
import thesesThumbnail from '../public/images/projects/theses.png'
import crmAloesInsystem from '../public/images/projects/crm_aloes_insystem.png'
import { useTranslation } from "react-i18next";

const Projects = () => {

    const { t } = useTranslation();

    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    {t("projects")}
                </Heading>
                <SimpleGrid columns={1} gap={6}>
                    <Section>
                        <ProjectGridItem id="crm_aloes_insystem" title="CRM Aloes Insystem" thumbnail={crmAloesInsystem}>
                            {t("crm-aloes-insystem")}
                        </ProjectGridItem>
                    </Section>
                    <Section>
                        <ProjectGridItem id="water_temperature" title="Water Temperature" thumbnail={waterTemperatureThumbnail}>
                            {t("water-temperature")}
                        </ProjectGridItem>
                    </Section>
                    <Section>
                        <ProjectGridItem id="theses" title={t("title-theses")} thumbnail={thesesThumbnail}>
                            {t("theses")}
                        </ProjectGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Projects