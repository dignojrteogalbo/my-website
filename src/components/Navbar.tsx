import { MoonIcon, StarIcon } from '@chakra-ui/icons';
import { Flex, Button, Text, Spacer, ButtonGroup, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FunctionComponent = () => {
    const {colorMode, toggleColorMode} = useColorMode()

    return (
        <Flex 
            bg={useColorModeValue('purple.400', 'purple.800')} 
            position='sticky' 
            top={0} 
            zIndex={10}
        >
            <ButtonGroup p={4}>
                <Link to='/'>
                    <Button leftIcon={<StarIcon />}>
                        <Text>Home</Text>
                    </Button>
                </Link>
                <IconButton 
                    aria-label={'toggle darkmode'} 
                    icon={<MoonIcon />}
                    onClick={toggleColorMode}
                />
            </ButtonGroup>
                <Spacer />
            <ButtonGroup p={4}>
                <Link to='/projects'>
                    <Button>Projects</Button>
                </Link>
                {/* <Link to='/contact'>
                    <Button>Contact</Button>
                </Link> */}
            </ButtonGroup>
        </Flex>
    )
}

export default Navbar