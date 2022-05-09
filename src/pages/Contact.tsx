import { Box, Container, Divider, Heading } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { Navbar } from '../components';

const Contact: FunctionComponent = () => {
    return (
        <>
            <Box bg='grey' p={16} color='white' minH='100%'>
                <Heading>
                    Contact
                </Heading>
            </Box>
            <Container minW='75%' h='5000px' p={8}>
                <Box bg='tomato' p={4} color='white' minH='100%'>
                    Contact Page
                </Box>
            </Container>

        </>
    )
}

export default Contact