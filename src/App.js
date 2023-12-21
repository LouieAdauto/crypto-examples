import React, { useState } from 'react';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import RSAComponent from './components/RSAComponent';
import TripleDESComponent from './components/3DESComponent';
import AESComponent from './components/AESComponent';

export const App = () => {

  const [tab, setTab] = useState(0)


  return (
    <Container maxWidth="md" sx={{ bgcolor: 'white', height: '100vh' }}>
      <Navbar setTab={setTab}/>
      <div style={{padding: 20}}>
        {tab === 0 && (
          <RSAComponent />
        )}
        {tab === 1 && (
          <TripleDESComponent />
        )}
        {tab === 2 && (
          <AESComponent />
        )}
      </div>

    </Container>
  )
}

export default App