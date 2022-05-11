import React from 'react'
import Blog from '../components/blog'
import Footer from '../components/footer'
import Hero from '../components/home/hero'
import MeetUs from '../components/home/meetUs'
import Services from '../components/home/services'
import '../styles/global.css'

const Index = () => (
  <main>
    <Hero />
    <Services />
    <MeetUs />
    <Blog />
    <Footer />
  </main>
)

export default Index
