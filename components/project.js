import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'

export const Title = ({ children }) => {

    const {t} = useTranslation()

    return (
        <Box>
            <NextLink href="/projects">
                <Link>{t("projects")}</Link>
            </NextLink>
            <span>
                &nbsp;
                <ChevronRightIcon/>
                &nbsp;
            </span>
            <Heading display='inline-block' as="h3" fontSize={20} mb={4}>
                { children }
            </Heading>
        </Box>
    )
}

export const ProjectImage = ({ src, alt }) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
    <Badge colorScheme='green' mr={2}>
        {children}
    </Badge>
)