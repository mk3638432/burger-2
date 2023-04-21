import Category from '@/Components/Category'
import Food from '@/Components/Food'
import HeadlineCards from '@/Components/HeadlineCards'
import Hero from '@/Components/Hero'
import Navbar from '@/Components/Navbar'
import React from 'react'
import Head from 'next/head'

const index = () => {
 
  return (
    <div>
      <Head>
        <title>Restaurants</title>
      </Head>
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Food/>
      <Category/>
    </div>
  )
}

export default index