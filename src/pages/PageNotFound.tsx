import { Box, Container, Heading } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import Navbar from '../components/Navbar';

const PageNotFound: FunctionComponent = () => {
    return (
        <>
            <Box bg='grey' p={16} color='white' minH='100%'>
                <Heading>
                    Digno JR Teogalbo
                </Heading>
            </Box>
            <Navbar />
            <Container minW='75%' h='5000px'>
                <Box bg='tomato' p={4} color='white' minH='100%'>
                    404 Page Not Found
                </Box>
            </Container>

        </>
    )
}

export default PageNotFound