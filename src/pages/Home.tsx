import { ArrowForwardIcon, EditIcon, QuestionIcon, ViewIcon } from '@chakra-ui/icons'
import { Divider, Flex, Heading, Image, Wrap, WrapItem, Text, Box, DarkMode, useColorModeValue } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { Segment } from '../components'
import emoji from '../assets/custoji.png'
import polls from '../assets/polls.png'
import ocr from '../assets/ocr.png'
import art from '../assets/art.png'
import { Link } from 'react-router-dom'

const Home: FunctionComponent = () => {
    return (
        <>
            <Flex 
                p={16} 
                h='100%' 
                w='100%'
                justify={'center'}
                bg={useColorModeValue('white', 'gray.800')}
            >
                <Wrap 
                    w={'90%'}
                    mx={'5%'}
                    direction={'row'}
                    justify={'center'}
                    align={'center'}
                >
                    <WrapItem 
                        w={'24em'} 
                        boxSize={'8em'} 
                        justifyContent={'center'}
                    >
                        <Image src={emoji} />
                    </WrapItem>
                    <WrapItem 
                        w={'32em'} 
                        textAlign={'left'}
                        flexDirection={'column'}
                        p={0}
                    >
                        <Heading
                            color={useColorModeValue('gray.700', 'white')}
                        >
                            Digno JR Teogalbo,
                        </Heading>
                        <Heading
                            color={useColorModeValue('gray.700', 'white')}
                        >
                            computer science student
                            at Boise State University.
                        </Heading>
                    </WrapItem>
                </Wrap>
            </Flex>
            <Divider w={'80%'} ml={'10%'} />
            <Segment
                title={'Vote On Polls'}
                icon={<EditIcon />}
                desc={'Create and share your opinions with others in real-time! Powered by Next.js and Google\'s Firebase.'}
                img={polls}
                link={'https://vote-on-polls.vercel.app'}
            />
            <Divider w={'80%'} ml={'10%'} />
            <Segment 
                title={'OCR Text Grabber'}
                icon={<ViewIcon />}
                desc={'Extract text from images from your browser! Powered by React.js and Tesseract.'}
                img={ocr}
                link={'https://ocr-text-grabber.web.app'}
            />
            <Divider w={'80%'} ml={'10%'}/>
            <Segment
                title={'ENGL 212 Art Project'}
                icon={<QuestionIcon />}
                desc={'Interactive strange attractor visualizer! Powered by P5.js and Google\'s Firebase Hosting.'}
                img={art}
                link={'https://strange-attractor-memo06.web.app/'}
            />
            <Divider w={'80%'} ml={'10%'} />
            <Link to='/projects'>
                <Flex
                    p={8}
                    textAlign={'center'}
                    justify={'center'}
                >
                    <Heading
                        p={4}
                        role={'group'}
                        _hover={{
                            color: 'blue.400'
                        }}
                        transition={'color 0.5s'}
                        textAlign={'center'}
                    >
                        View All Projects&nbsp;
                        <ArrowForwardIcon
                            _groupHover={{
                                transform: 'translateX(10px)',
                            }}
                            transition={'transform 0.5s'}
                        />
                    </Heading>
                </Flex>
            </Link>
        </>
    )
}

export default Home