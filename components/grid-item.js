import Image from 'next/image';
import NextLink from 'next/link'
import { Box, Text, LinkBox, LinkOverlay} from '@chakra-ui/react';
import { Global } from '@emotion/react';
// import Zoom from 'react-medium-image-zoom'
// import 'react-medium-image-zoom/dist/styles.css'

export const GridItem = ({children, href, title, thumbnail}) => (
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder="blur" loading="lazy"/>
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>
                    {title}
                </Text>
            </LinkOverlay>
            <Text fontSize={14}>
                {children}
            </Text>
        </LinkBox>
    </Box>
)

export const ProjectGridItem = ({
    children, 
    id, 
    title, 
    thumbnail, 
    //  href
}) => (
    <Box id={id} w="100%" align="center">
        <NextLink href={`/projects/${id}`}>
            <LinkBox cursor="pointer">
                {/* <Zoom> */}
                    <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder='blur' />
                {/* </Zoom> */}
                <LinkOverlay href={`/projects/${id}`} >
                {/* {href ?
                    <Link href={href} target='_black'>
                        <Text mt={2} fontSize={20} >
                            {title}
                        </Text>
                    </Link>
                    : */}
                    <Text mt={2} fontSize={20} >
                        {title}
                    </Text>
                {/* } */}
                </LinkOverlay>
                <Text fontSize={14} >
                    {children}
                </Text>
            </LinkBox>
        </NextLink>
    </Box>
)

export const GridItemStyle = () => (
    <Global styles={`
        .grid-item-thumbnail {
            border-radius: 5px;
        }
    `}
    />
)