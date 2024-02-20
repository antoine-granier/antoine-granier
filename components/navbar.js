import Logo from "./logo";
import NextLink from "next/link";
import {Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue, Select, Divider} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";
import { useTranslation } from "react-i18next"

const LinkItem = ({href, path, children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

    return (
        <NextLink href={href}>
            <Link href={href} p={2} bg={active ? 'glassTeal' : undefined} color={active ? '#202023' : inactiveColor}>{children}</Link>
        </NextLink>
    )
}

const Navbar = props => {
    const path = props

    const { t, i18n } = useTranslation();

    return (
        <Box position="fixed" as="nav" w="100%" bg={useColorModeValue('#ffffff40', '#000000cc80')} style={{backdropFilter: 'blur(10px)'}} zIndex={1} {...props}>
            <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between">
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack direction={{base: 'column', md: 'row'}} display={{base: 'none', md: 'flex'}} width={{base: 'full', md: 'auto'}} alignItems="center" flexGrow={1} mt={{base: 4, nmd: 0}}>
                    <LinkItem href="/projects" path={path}>
                        {t("projects")}
                    </LinkItem>
                    {/* <LinkItem href="/designs" path={path}>
                        Designs
                    </LinkItem>
                    <LinkItem href="/experience" path={path}>
                        Experience
                    </LinkItem> */}
                </Stack>
                <Box display="flex" gap="1rem" flex={1} align="right" justifyContent='flex-end'>
                    <Select display={{base: 'none', md: 'block'}} w="fit-content" value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
                        <option value="fr">Fr</option>
                        <option value="en">En</option>
                    </Select>
                    <ThemeToggleButton />
                    <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant="outline" aria-label="Options">
                            </MenuButton>
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>{t("about")}</MenuItem>
                                </NextLink>
                                <NextLink href="/projects" passHref>
                                    <MenuItem as={Link}>{t("projects")}</MenuItem>
                                </NextLink>
                                <Divider py="0.125rem"/>
                                <Box display="flex" alignItems="center" px="0.75rem" pt="0.75rem" pb="0.375rem" gap="1rem">
                                    {t("lang")}
                                    <Select value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
                                        <option value="fr">Fr</option>
                                        <option value="en">En</option>
                                    </Select>
                                </Box>
                                {/* <NextLink href="/designs" passHref>
                                    <MenuItem as={Link}>Designs</MenuItem>
                                </NextLink>
                                <NextLink href="/experience" passHref>
                                    <MenuItem as={Link}>Experience</MenuItem>
                                </NextLink> */}
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar
