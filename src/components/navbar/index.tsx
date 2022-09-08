import React from "react";
import { NavLink, Link as RouterLink } from "react-router-dom";
import { CalendarIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  useColorModeValue,
  useDisclosure,
  Link,
  Heading,
} from "@chakra-ui/react";

import { NavLinkItem } from "types/common";
import { ROUTE_PATHS } from "helpers/constants";
import DarkModeToggle from "components/DarkModeToggle";

const LINKS: NavLinkItem[] = [
  { id: 1, name: "Projects", linkTo: ROUTE_PATHS.PROJECTS },
  { id: 2, name: "About", linkTo: ROUTE_PATHS.ABOUT },
];

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={{ base: 10, md: "10%" }}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box display={"flex"} alignItems={"center"}>
              <Heading fontSize={18}>
                <RouterLink to="/">
                  <CalendarIcon mr={2} /> Project Manager
                </RouterLink>
              </Heading>
            </Box>

            <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
              {LINKS.map((link) => (
                <Link
                  key={link.id}
                  to={link.linkTo}
                  rounded={"md"}
                  p={5}
                  as={NavLink}
                  _activeLink={{ fontWeight: "bold" }}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            <DarkModeToggle />

            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {LINKS.map((link) => (
                <NavLink key={link.id} to={link.linkTo}>
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Navbar;
