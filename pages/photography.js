import { Container, Grid, Heading, Image, useColorModeValue } from "@chakra-ui/react"
import Layout from "../components/layout/article"
import { useTranslation } from "react-i18next"
import Paragraph from "../components/paragraph"
import { EquipmentGridItem } from "../components/grid-item"
import canon1855mm from "../public/images/photography/canon-18-55.webp"
import sigma100400mm from "../public/images/photography/sigma-100-400.webp"
import canon4000d from "../public/images/photography/canon-eos-4000d.webp"
import { Gallery } from "react-grid-gallery"
import image1 from "../public/images/photography/pictures/image_1.JPG";
import image2 from "../public/images/photography/pictures/image_2.JPG";
import image3 from "../public/images/photography/pictures/image_3.JPG";
import image4 from "../public/images/photography/pictures/image_4.JPG";
import image5 from "../public/images/photography/pictures/image_5.JPG";
import image6 from "../public/images/photography/pictures/image_6.JPG";
import image7 from "../public/images/photography/pictures/image_7.JPG";
import image8 from "../public/images/photography/pictures/image_8.JPG";
import image9 from "../public/images/photography/pictures/image_9.JPG";
import image10 from "../public/images/photography/pictures/image_10.JPG";
import image11 from "../public/images/photography/pictures/image_11.JPG";
import image12 from "../public/images/photography/pictures/image_12.JPG";
import image13 from "../public/images/photography/pictures/image_13.JPG";
import image14 from "../public/images/photography/pictures/image_14.JPG";
import image15 from "../public/images/photography/pictures/image_15.JPG";
import image16 from "../public/images/photography/pictures/image_16.JPG";
import image17 from "../public/images/photography/pictures/image_17.JPG";
import image18 from "../public/images/photography/pictures/image_18.JPG";
import image19 from "../public/images/photography/pictures/image_19.JPG";
import image20 from "../public/images/photography/pictures/image_20.JPG";
import image21 from "../public/images/photography/pictures/image_21.JPG";
import image22 from "../public/images/photography/pictures/image_22.JPG";
import image23 from "../public/images/photography/pictures/image_23.JPG";
import image24 from "../public/images/photography/pictures/image_24.JPG";
import image25 from "../public/images/photography/pictures/image_25.JPG";
import image26 from "../public/images/photography/pictures/image_26.JPG";
import image27 from "../public/images/photography/pictures/image_27.JPG";
import image28 from "../public/images/photography/pictures/image_28.JPG";
import image29 from "../public/images/photography/pictures/image_29.JPG";
import { useState } from "react"
import { XMarkIcon } from "@heroicons/react/24/outline";

const Photography = () => {

    const images = [
        {
            src: image1.src,
            alt: "image1",
            or: "portrait"
        },
        {
            src: image2.src,
            alt: "image2",
            or: "landscape"
        },
        {
            src: image3.src,
            alt: "image3",
            or: "landscape"
        },
        {
            src: image4.src,
            alt: "image4",
            or: "landscape"
        },
        {
            src: image5.src,
            alt: "image5",
            or: "portrait"
        },
        {
            src: image6.src,
            alt: "image6",
            or: "landscape"
        },
        {
            src: image7.src,
            alt: "image7",
            or: "landscape"
        },
        {
            src: image8.src,
            alt: "image8",
            or: "landscape"
        },
        {
            src: image9.src,
            alt: "image9",
            or: "landscape"
        },
        {
            src: image10.src,
            alt: "image10",
            or: "landscape"
        },
        {
            src: image11.src,
            alt: "image11",
            or: "landscape"
        },
        {
            src: image12.src,
            alt: "image12",
            or: "landscape"
        },
        {
            src: image13.src,
            alt: "image13",
            or: "landscape"
        },
        {
            src: image14.src,
            alt: "image14",
            or: "landscape"
        },
        {
            src: image15.src,
            alt: "image15",
            or: "landscape"
        },
        {
            src: image16.src,
            alt: "image16",
            or: "landscape"
        },
        {
            src: image17.src,
            alt: "image17",
            or: "landscape"
        },
        {
            src: image18.src,
            alt: "image18",
            or: "landscape"
        },
        {
            src: image19.src,
            alt: "image19",
            or: "landscape"
        },
        {
            src: image20.src,
            alt: "image20",
            or: "landscape"
        },
        {
            src: image21.src,
            alt: "image21",
            or: "landscape"
        },
        {
            src: image22.src,
            alt: "image22",
            or: "landscape"
        },
        {
            src: image23.src,
            alt: "image23",
            or: "landscape"
        },
        {
            src: image24.src,
            alt: "image24",
            or: "landscape"
        },
        {
            src: image25.src,
            alt: "image25",
            or: "landscape"
        },
        {
            src: image26.src,
            alt: "image26",
            or: "landscape"
        },
        {
            src: image27.src,
            alt: "image27",
            or: "landscape"
        },
        {
            src: image28.src,
            alt: "image28",
            or: "landscape"
        },
        {
            src: image29.src,
            alt: "image29",
            or: "landscape"
        }
    ];
    

    const { t } = useTranslation()

    const [modalImage, setModalImage] = useState(null) 

    console.log(modalImage);

    return (
        <>
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
                        <EquipmentGridItem thumbnail={canon4000d} title="Canon EOS 4000d" />
                        <EquipmentGridItem thumbnail={sigma100400mm} title="Sigma 100-400mm F5-6.3 DG OS HSM | Contemporary" />
                        <EquipmentGridItem thumbnail={canon1855mm} title="Canon EF-S 18-55mm" />
                    </Grid>
                    <Heading as="h3" variant="section-title">
                        {t("My photos")}
                    </Heading>
                    <Gallery
                        images={images} 
                        enableImageSelection={false}
                        onClick={(index) => setModalImage(images[index])}
                    />
                </Container>
            </Layout>
            <div
                style={{
                    display: modalImage ? "flex" : "none",
                    position: "fixed",
                    top: "0",
                    left: "0",
                    background: "rgba(0, 0, 0, 0.7)",
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <div
                    style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "85%",
                        width: "100%"
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            cursor: "pointer",
                            background: "rgba(0,0,0,0.5)",
                            borderRadius: "100%"
                        }}
                        onClick={() => setModalImage(null)}
                    >
                        <XMarkIcon style={{width: "25px", height: "25px", color: useColorModeValue('#000000', '#ffffff')}}/>
                    </div>
                    <Image
                        style={{
                            maxWidth: modalImage?.or === "portrait" ? "450px" : "600px"
                        }}
                        src={modalImage?.src} 
                        alt={modalImage?.alt} 
                        loading="lazy" 
                        htmlWidth={modalImage?.or === "landscape" ? "100%" : "auto"} 
                        htmlHeight={modalImage?.or === "portrait" ? "100%" : "auto"}
                    />
                </div>
            </div>
        </>
    )
}

export default Photography