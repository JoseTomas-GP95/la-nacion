import React from 'react'
import { Navbar } from '../components/Navbar'
import { Banner } from '../components/Banner'
import { BodyContainer } from '../components/Body/BodyContainer'
import { Footer } from '../components/Footer'

export const Home = () => {

  return (
    <div>
      <div className='h-screen'>
        <Navbar />
        <Banner />
        <BodyContainer />
      </div>
    </div>
  )
}