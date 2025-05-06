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
    <Container maxW={"1140px"} px={4} >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22px", sm: "28px" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          {/* Use Link here to wrap the text properly */}
          <Link to="/">Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <ChakraLink as={Link} to={"/create"}>
            <Button >
              <PlusSquareIcon fontSize={20} />
            </Button>
          </ChakraLink>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon/> : <LuSun />}


          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;

