import React from 'react'
import ProductCard from './ProductCard'
import { PaginationComp } from './Pagination'

export default function Products() {
  return (

         <div className='mt-48 px-10'>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </div>

                <div className='mt-20'>
                      <PaginationComp/>
                </div>
         </div>

  )
}
