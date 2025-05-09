import { Container, Flex, Text, HStack, Link as ChakraLink } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }} // coluna em telas pequenas
      >
        <Text
          fontSize={{ base: "26px", sm: "28px" }} // maior em telas pequenas
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          <Link to="/">Product Store 🛒</Link>
        </Text>
  
        <HStack
          spacing={2}
          alignItems={"center"}
          flexDir={{ base: "column", sm: "row" }} // opcional: empilhar em telas pequenas
        >
          <ChakraLink as={Link} to={"/create"}>
            <Button
              fontSize={{ base: "18px", sm: "16px" }}
              px={{ base: 6, sm: 4 }}
              py={{ base: 4, sm: 2 }}
            >
              <PlusSquareIcon fontSize={20} />
            </Button>
          </ChakraLink>
  
          <Button
            onClick={toggleColorMode}
            fontSize={{ base: "18px", sm: "16px" }}
            px={{ base: 6, sm: 4 }}
            py={{ base: 4, sm: 2 }}
            mb={{ base: "6px", sm: "0" }}
          >
            {colorMode === "light" ? <IoMoon /> : <LuSun />}
            
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
  
};

export default Navbar;

