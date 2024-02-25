import Image from 'next/image';
import NextLink from 'next/link'
import { Box, Text, LinkBox, LinkOverlay, Tooltip} from '@chakra-ui/react';
import { Global } from '@emotion/react';

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
    thumbnail
}) => (
    <Box id={id} w="100%" align="center">
        <NextLink href={`/projects/${id}`}>
            <LinkBox cursor="pointer">
                    <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder='blur' />
                    <Text mt={2} fontSize={20} >
                        {title}
                    </Text>
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

export const EquipmentGridItem = ({children, title, thumbnail}) => {
    return (
        <Box w="100%" align="center">
            <LinkBox height="52" display="flex" justifyContent="center" alignItems="center">
                <Image
                    style={{width: "150px"}}
                    src={thumbnail} 
                    alt={title} 
                    className="grid-item-thumbnail" 
                    placeholder="blur" 
                    loading="lazy"
                />
            </LinkBox>
            <Tooltip label={title}>
                <Text noOfLines={1} mt={2}>
                    {title}
                </Text>
            </Tooltip>
            {
                children ? (
                    <Text fontSize={14}>
                        {children}
                    </Text>
                ) : (
                    null
                )
            }
        </Box>
    )
}