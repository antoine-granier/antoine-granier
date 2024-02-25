import { Container, Grid, Heading } from "@chakra-ui/react"
import Layout from "../components/layout/article"
import { useTranslation } from "react-i18next"
import Paragraph from "../components/paragraph"
import { EquipmentGridItem } from "../components/grid-item"
import canon1855mm from "../public/images/photography/canon-18-55.webp"
import sigma100400mm from "../public/images/photography/sigma-100-400.webp"
import canon4000d from "../public/images/photography/canon-eos-4000d.webp"

const Photography = () => {

    const {t} = useTranslation()

    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    {t("Photography")}
                </Heading>
                <Paragraph>
                    {t("I've been passionate about photography for several years but for lack of money and knowledge I've never bought any equipment. But I thought it was time to take the plunge. So I bought my first camera sold with a kit lens. And this is how I got started.")}
                </Paragraph>
                <Heading as="h3" variant="section-title">
                    {t("Equipment")}
                </Heading>
                <Grid
                    templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
                    gap={6}
                    justifyContent="center"
                    alignItems="center"
                >
                    <EquipmentGridItem thumbnail={canon4000d} title="Canon EOS 4000d"/>
                    <EquipmentGridItem thumbnail={sigma100400mm} title="Sigma 100-400mm F5-6.3 DG OS HSM | Contemporary"/>
                    <EquipmentGridItem thumbnail={canon1855mm} title="Canon EF-S 18-55mm"/>
                </Grid>
                <Heading as="h3" variant="section-title">
                    {t("My photos")}
                </Heading>
            </Container>
        </Layout>
    )
}

export default Photography