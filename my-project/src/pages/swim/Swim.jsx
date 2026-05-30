import React from 'react'
import { Helmet } from 'react-helmet-async'
import Product from './components/Product'
import Filter from './components/Filter'
import Sort from './components/Sort'
const Swim = () => {
  return (
    <main>
       <Helmet>
        <title>Swimwear - shevan.world

        </title>
       </Helmet>
       <div className="flex items-start justify-between px-4 md:px-8 lg:px-12">
        <Filter />
         <Sort />
       </div>
       <Product />
    </main>
  )
}

export default Swim
