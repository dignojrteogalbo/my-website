import { Box, Text, Heading, Center, Stack, useColorModeValue, Image, Divider } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

type CardProps = {
    title: string,
    date: string,
    desc: string,
    image?: string
}

const Card: FunctionComponent<CardProps> = ({ title, date, desc, image, ..._rest}) => {
    return (
        <Center py={4}>
            <Box
                maxW={'450px'}
                // minH={'450px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                rounded={'md'}
                p={0}
                pos={'relative'}
                borderRadius={'xl'}
                boxShadow={'lg'}
                _hover={{
                    _after: {
                        opacity: '1'
                    },
                    transform: 'translateY(-20px)'
                }}
                _after={{
                    content: '""',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    opacity: '0',
                    borderRadius: 'inherit',
                    boxShadow: 'dark-lg',
                    transition: 'all 0.5s'
                }}
                transition={'all 0.5s'}
            >
                <Box 
                    p={6}
                    overflow={'hidden'}
                    borderRadius={'inherit'}
                >
                <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}
                    overflow={'hidden'}
                    >
                    <Image
                        src={image}
                        fit={'cover'}
                        />
                </Box>
                <Stack>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}
                        >
                        {title}
                    </Heading>
                    <Text
                        color={useColorModeValue('gray.500', 'white')}
                        fontSize={'l'}
                        fontFamily={'body'}
                        textAlign={'right'}
                        >
                        {date}
                    </Text>
                    <Divider />
                    <Text 
                        pt={4}
                        color={useColorModeValue('gray.500', 'white')} 
                        noOfLines={2}
                    >
                        {desc}
                    </Text>
                </Stack>
                </Box>
            </Box>
        </Center>
    )
}

export default Card