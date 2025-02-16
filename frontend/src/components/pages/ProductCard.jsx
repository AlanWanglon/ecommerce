import { Box, Image, Heading, Text, HStack, IconButton, useColorModeValue } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

const ProductCard = ({ product, onOpen, handleDelete}) => {
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");
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
            <IconButton icon={<DeleteIcon />} onClick={() => {handleDelete(product._id)}} colorScheme='red' />
        </HStack>
        </Box>
    </Box>
  )
}

export default ProductCard;
