import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Flex, Box, Heading, Text, Image, Wrap, WrapItem, useColorModeValue } from "@chakra-ui/react"
import { FunctionComponent, ReactNode } from "react"

type SegmentProps = {
    title: string,
    desc: string,
    icon: ReactNode,
    img: string,
    link?: string
}

const Segment: FunctionComponent<SegmentProps> = ({title, desc, icon, img, link = '/', ..._rest}) => {
    return (
        <Flex
            paddingY={8}
            h='100%'
            justify={'center'}
            direction={'column'}
            align={'center'}
            marginX={'4em'}
            bg={useColorModeValue('white', 'gray.800')}
        >
            <Wrap
                w='100%'
                direction={'row'}
                justify={'center'}
            >
                <WrapItem 
                    w={'24em'} 
                    textAlign={'left'}
                    p={0}
                >
                    <Heading>
                        {icon}&nbsp;
                    </Heading>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                    >
                        {title}
                    </Heading>
                </WrapItem>
                <WrapItem 
                    w={'32em'} 
                    textAlign={'left'}
                    flexDirection={'column'}
                >
                    <Text
                        color={useColorModeValue('gray.700', 'white')}
                    >
                        {desc}
                    </Text>
                    <Text
                        as={'a'}
                        href={link}
                        w={'50%'}
                        role={'group'}
                        align={'center'}
                        mx={'25%'}
                        pt={4}
                        _hover={{
                            color: 'blue.400'
                        }}
                        transition={'color 0.5s'}
                        color={useColorModeValue('gray.700', 'white')}
                    >
                        View Project&nbsp;
                        <ArrowForwardIcon
                            _groupHover={{
                                transform: 'translateX(10px)',
                            }}
                            transition={'transform 0.5s'}
                        />
                    </Text>
                </WrapItem>
            </Wrap>
            <Box
                mt={6}
                maxH={'24em'}
                maxW={'64em'}
                bg={'gray.100'}
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
                as={'a'}
                href={link}
            >
                <Box
                    p={0}
                    maxH={'24em'}
                    maxW={'64em'}
                    bg={'inherit'}
                    borderRadius={'inherit'}
                    overflow={'hidden'}
                >
                        <Image
                            loading={'lazy'}
                            src={img}
                        />
                </Box>
            </Box>
        </Flex>
    )
}

export default Segment;