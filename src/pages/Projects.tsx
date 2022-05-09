import { Box, Container, Divider, Heading, Wrap, WrapItem } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { Card, Navbar } from '../components'
import { faker } from '@faker-js/faker'
import polls from '../assets/polls.png'
import ocr from '../assets/ocr.png'
import art from '../assets/art.png'
import fireworks from '../assets/fireworks.png'
import christmas from '../assets/christmas.png'
import library from '../assets/library.png'
import circuit from '../assets/circuit.png'

const Projects: FunctionComponent = () => {
    return (
        <>
            <Box 
                bg='grey' 
                p={16} 
                color='white' 
                minH='100%'
            >
                <Heading>
                    Projects
                </Heading>
            </Box>
            <Container 
                minW='75%' 
                p={4}
            >
                <Wrap 
                    justify='space-evenly' 
                    spacing={2} 
                    flexGrow={1}
                    shouldWrapChildren
                >
                    <Card title={'Circuit Tracer'} date={'May 2022'} desc={'My CS 221 final project with an accompanying GUI! Created with Java!'} image={circuit} />
                    <Card title={'Vote On Polls'} date={'April 2022'} desc={'Create and share your opinions with others in real-time!Powered by Next.js and Google\'s Firebase.'} image={polls} />
                    <Card title={'OCR Text Grabber'} date={'February 2022'} desc={'Extract text from images from your browser! Powered by React.js and Tesseract.'} image={ocr} />
                    <Card title={'ENGL 212 Art Project'} date={'October 2021'} desc={'Interactive strange attractor visualizer! Powered by p5.js.'} image={art} />
                    <Card title={'Digital Fireworks'} date={'January 2021'} desc={'Celebrate the New Year by creating digital fireworks! Powered by p5.js!'} image={fireworks} />
                    <Card title={'Christmas Tree Decorator'} date={'December 2020'} desc={'Decorate your own digital christmas tree! Made with Three.js!'} image={christmas} />
                    <Card title={'Library Check-In System'} date={'May 2020'} desc={'Check-in with the library; this was my high school senior project! Made with React.js and Google\'s Firebase.'} image={library} />
                </Wrap>
            </Container>
        </>
    )
}

export default Projects