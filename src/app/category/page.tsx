import { categories } from '@/Data/Data'
import CategoryItem from '@/components/CategoryItem'
import React from 'react'

const Category = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-8'>
        {categories?.map((item, index) => (
                <CategoryItem title={item.name} image={item.image} key={index} />
            ))}
        </div>
    </div>
  )
}

export default Category