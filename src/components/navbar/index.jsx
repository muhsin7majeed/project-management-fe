import { NavLink, Link as RouterLink } from "react-router-dom";
import { CalendarIcon, CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Stack,
  Tooltip,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Link,
  Heading,
} from "@chakra-ui/react";

const LINKS = [
  { id: 1, name: "Projects", linkTo: "/projects" },
  { id: 2, name: "Clients", linkTo: "/clients" },
];

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
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
            <Tooltip label="Toggle Dark Mode" openDelay={200}>
              <Button onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>
            </Tooltip>

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
