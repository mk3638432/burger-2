import React , {useState}from 'react'
import {categories} from '../Components/API/Api'

const Category = () => {
    const [data , setData] = useState(categories)
  return (
    <div className='max-w-[1640px] px-4 py-12 '>
        <h1 className='text-orange-600 font-bold text-center '>Top Rated Menu Items </h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6  py-6'> 
        {data.map((item ,index) => {
            return(
                <div className='bg-gray-100 rounded-lg p-4 flex justify-between items-center' key={index}>
                    <h2 className='font-bold sm:text-xl'>{item.name} </h2>
                    <img className='w-16' src={item.image} alt={'/'}/>
                     </div>
            )
        })}
        </div>
    </div>
  )
}

export default Category