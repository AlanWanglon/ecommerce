import { Container, VStack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { SimpleGrid } from "@chakra-ui/react"
import { useEffect } from "react"
import { useProductStore } from "../../store/product";
import ProductCard from "./ProductCard";
const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  
  useEffect(() => {
    fetchProducts(); // API deve ser chamada aqui
    
  }, [fetchProducts]);

  
  
  
  return (
    <Container maxW= "container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={{ base: "22px", sm: "28px" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          Current Products
        </Text>

        <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={10}
        w={"full"}
        >

        {products.map((product) => {
          console.log(product);
          return <ProductCard key={product._id} product={product}/>
        })}
        </SimpleGrid>

        

        {products.length === 0 && ( 
          <Text fontSize='xl' textAlign={"center"} fontWeight={'bold'} color={'gray.500'}>
          No Product Found!{"   "}
         <Link to={"/create"}>
         <Text as={'span'} color={'blue'} _hover={{ textDecoration: "underline" }} >
          Create a new Product
         </Text>
         </Link>/
         </Text>
        )}
         
      </VStack>
    </Container>
  )
}

export default HomePage
