import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/hero';
import {Container} from '../globalStyles'

function Homepage() {
  return (
    <Container>
    <Navbar />
    <Hero />
    </Container>
    
  )
}

export default Homepage;