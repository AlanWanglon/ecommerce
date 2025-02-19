import { Box, Image, Heading, Text, HStack, IconButton, useColorModeValue } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { useProductStore } from '../../store/product';
import { useToast } from '@chakra-ui/react';



const ProductCard = ({ product, onOpen}) => {
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");

    const { deleteProducts } = useProductStore()
    const toast = useToast()
    const handleDeleteProduct = async () => {
        if (!product._id) {
            toast({
                title: "Error",
                description: "ID do produto não encontrado",
                status: "error",
                duration: 3000,
                isClosable: true
            });
            return;
        }
        const {success, message} = await deleteProducts(product._id)
        if(!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 3000,
                isClosable: true
            })
            
        } else {
            toast({
                title: "Sucesso",
                description: "Produto excluído com sucesso",
                status: "success",
                duration: 3000,
                isClosable: true
            })
        }
    }

    
  return (
    <Box
    shadow={'lg'}
    rounded={'lg'}
    overflow={'hidden'}
    transition={'all 0.3s'}
    _hover={{ transform:'translateY(-5px)', shadow: "xl"}}
    bg={bg}
    >
        <Image src={product.image} alt={product.name} h={48} w='full'objectFit='cover'/>
        <Box padding={4}>
        <Heading as={'h3'} size={'md'} mb={2} >
            {product.name}
        </Heading>

        <Text fontWeight='bold' fontSize={'md'} mb={2} color={textColor} >
            ${product.price}
        </Text>

        <HStack>
            <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme='blue' />
            <IconButton icon={<DeleteIcon />} onClick={() => {handleDeleteProduct(product._id)}} colorScheme='red' />
        </HStack>
        </Box>
    </Box>
  )
}

export default ProductCard;
