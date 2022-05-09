import { Container, useColorModeValue } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import { Navbar } from './components';
import { Home, Projects, Contact, PageNotFound } from './pages';

type AppProps = {
}

const App: FunctionComponent<AppProps> = () => {
  return (
    <Container 
      maxW='100%' 
      p={0}
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
