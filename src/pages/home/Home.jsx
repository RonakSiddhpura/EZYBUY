import React, { useContext, useState } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Track'
import { Link } from 'react-router-dom'


function Home() {
  
  let [priceOrder,setPriceOrder] =useState([])
  return (
    <Layout>
      <HeroSection />
      <Filter priceOrder={priceOrder} setPriceOrder={setPriceOrder}/>
      <ProductCard priceOrder={priceOrder} setPriceOrder={setPriceOrder}/>
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
      <Track />
    </Layout>
  )
}

export default Home