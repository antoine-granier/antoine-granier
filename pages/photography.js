import { Container, Grid, Heading, Image, useColorModeValue } from "@chakra-ui/react"
import Layout from "../components/layout/article"
import { useTranslation } from "react-i18next"
import Paragraph from "../components/paragraph"
import { EquipmentGridItem } from "../components/grid-item"
import canon1855mm from "../public/images/photography/canon-18-55.webp"
import sigma100400mm from "../public/images/photography/sigma-100-400.webp"
import canon4000d from "../public/images/photography/canon-eos-4000d.webp"
import canon1018mm from "../public/images/photography/canon-10-18.webp";
import canon50mm from "../public/images/photography/canon-50.webp";
import sonya6400 from "../public/images/photography/sony-a6400.webp";
import sony1650mm from "../public/images/photography/sony-16-50.webp";
import sony55210mm from "../public/images/photography/sony-55-210.webp";
import sac from "../public/images/photography/sac.webp";
import image1 from "../public/images/photography/pictures/image_1.webp";
import image2 from "../public/images/photography/pictures/image_2.webp";
import image3 from "../public/images/photography/pictures/image_3.webp";
import image4 from "../public/images/photography/pictures/image_4.webp";
import image5 from "../public/images/photography/pictures/image_5.webp";
import image6 from "../public/images/photography/pictures/image_6.webp";
import image7 from "../public/images/photography/pictures/image_7.webp";
import image8 from "../public/images/photography/pictures/image_8.webp";
import image9 from "../public/images/photography/pictures/image_9.webp";
import image10 from "../public/images/photography/pictures/image_10.webp";
import image11 from "../public/images/photography/pictures/image_11.webp";
import image12 from "../public/images/photography/pictures/image_12.webp";
import image13 from "../public/images/photography/pictures/image_13.webp";
import image14 from "../public/images/photography/pictures/image_14.webp";
import image15 from "../public/images/photography/pictures/image_15.webp";
import image16 from "../public/images/photography/pictures/image_16.webp";
import image17 from "../public/images/photography/pictures/image_17.webp";
import image18 from "../public/images/photography/pictures/image_18.webp";
import image19 from "../public/images/photography/pictures/image_19.webp";
import image20 from "../public/images/photography/pictures/image_20.webp";
import image21 from "../public/images/photography/pictures/image_21.webp";
import image22 from "../public/images/photography/pictures/image_22.webp";
import image23 from "../public/images/photography/pictures/image_23.webp";
import image24 from "../public/images/photography/pictures/image_24.webp";
import image25 from "../public/images/photography/pictures/image_25.webp";
import image26 from "../public/images/photography/pictures/image_26.webp";
import image27 from "../public/images/photography/pictures/image_27.webp";
import image28 from "../public/images/photography/pictures/image_28.webp";
import image29 from "../public/images/photography/pictures/image_29.webp";
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
                        <EquipmentGridItem thumbnail={canon1018mm} title="Canon EF-S 10-18mm" />
                        <EquipmentGridItem thumbnail={canon50mm} title="Canon EF 50mm" />
                        <EquipmentGridItem thumbnail={sonya6400} title="Sony A6400" />
                        <EquipmentGridItem thumbnail={sony1650mm} title="Sony E PZ 16-50 mm f/3.5-5.6 OSS II" />
                        <EquipmentGridItem thumbnail={sony55210mm} title="Sony E 55-210 mm f/4.5-6.3" />
                        <EquipmentGridItem thumbnail={sac} title="Sac K&N Concept" />
                    </Grid>
                    <Heading as="h3" variant="section-title">
                        {t("My photos")}
                    </Heading>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="grid gap-4">
                            <div>
                                <Image id="1" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image1.src} alt=""/>
                            </div>
                            <div>
                                <Image id="2" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image2.src} alt=""/>
                            </div>
                            <div>
                                <Image id="3" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image3.src} alt=""/>
                            </div>
                            <div>
                                <Image id="18" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image18.src} alt=""/>
                            </div>
                            <div>
                                <Image id="19" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image19.src} alt=""/>
                            </div>
                            <div>
                                <Image id="23" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image23.src} alt=""/>
                            </div>
                            <div>
                                <Image id="27" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image27.src} alt=""/>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <Image id="4" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image4.src} alt=""/>
                            </div>
                            <div>
                                <Image id="5" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image5.src} alt=""/>
                            </div>
                            <div>
                                <Image id="6" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image6.src} alt=""/>
                            </div>
                            <div>
                                <Image id="17" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image17.src} alt=""/>
                            </div>
                            <div>
                                <Image id="20" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image20.src} alt=""/>
                            </div>
                            <div>
                                <Image id="24" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image24.src} alt=""/>
                            </div>
                            <div>
                                <Image id="28" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image28.src} alt=""/>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <Image id="7" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image7.src} alt=""/>
                            </div>
                            <div>
                                <Image id="8" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image8.src} alt=""/>
                            </div>
                            <div>
                                <Image id="9" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image9.src} alt=""/>
                            </div>
                            <div>
                                <Image id="16" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image16.src} alt=""/>
                            </div>
                            <div>
                                <Image id="21" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image21.src} alt=""/>
                            </div>
                            <div>
                                <Image id="25" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image25.src} alt=""/>
                            </div>
                            <div>
                                <Image id="29" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image29.src} alt=""/>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <Image id="11" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image11.src} alt=""/>
                            </div>
                            <div>
                                <Image id="12" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image12.src} alt=""/>
                            </div>
                            <div>
                                <Image id="13" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image13.src} alt=""/>
                            </div>
                            <div>
                                <Image id="14" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image14.src} alt=""/>
                            </div>
                            <div>
                                <Image id="15" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image15.src} alt=""/>
                            </div>
                            <div>
                                <Image id="22" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image22.src} alt=""/>
                            </div>
                            <div>
                                <Image id="26" loading="lazy" className="h-auto max-w-full rounded-lg" onClick={(e) => setModalImage(images[Number(e.target.id) - 1])} src={image26.src} alt=""/>
                            </div>
                        </div>
                    </div>

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
                        className={`max-w-[100%] md:max-w-[${modalImage?.or === "portrait" ? "700px" : "600px"}]`}
                        style={{
                            // maxWidth: modalImage?.or === "portrait" ? "700px" : "600px",
                            rotate: modalImage?.or === "portrait" ? "-90deg" : "0deg",
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