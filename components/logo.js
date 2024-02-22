import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";

import styled from "@emotion/styled";

const  LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

&:hover img {
    transform: rotate(40deg);
}
`

const Logo = () => {
    const wheelImg = `/images/tire${useColorModeValue('', '-dark')}.webp`;

    return (
        <Link legacyBehavior href="/">
            <a>
                <LogoBox>
                    <Image src={wheelImg} width={21} height={21} alt="logo" />
                    <Text color={useColorModeValue('gray.800', 'whiteApha.900')} fontFamily="M PLUS Rounded 1c" fontWeight="bold" ml={3}>Antoine Granier</Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo