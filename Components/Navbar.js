import React ,{useState} from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends , FaWallet} from 'react-icons/fa'
import {MdFavorite ,MdHelp} from 'react-icons/md'
import {AiFillTag} from 'react-icons/ai'

const Navbar = () => {
  const [nav , setNav] = useState(false)
  console.log(nav)
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4"> 
    <div className='flex items-center'>
        <div onClick={() => setNav(!nav)} className='cursor-pointer'>
            <AiOutlineMenu size={0}/>
        </div>
        <h1 className="text-2xl sm:text-3xl flex lg:text-4xl px-2">Best <span className='font-bold '>Eats</span></h1>
        <div className='flex items-center bg-gray-200  p-1 text-[14px] rounded-full'> 
            <p className="bg-black text-white rounded-full p-1">Delivery</p>
            <p className='p-1 '>Pickup</p>
        </div>
    </div>
   
     <div className='bg-gray-200 rounded-full flex items-center px-2  sm:w-[400px] lg:w-[500px]'>
      <AiOutlineSearch size={20}/>
      <input className='border-none bg-transparent w-[200px] p-2 ' type='text' placeholder='Search Food'/>
     </div>

     <button className='bg-black text-white rounded-lg p-2 hidden  md:flex items-center py-1 '> 
      <BsFillCartFill size={20} className='mr-2'/>Cart
     </button>

     {/* Mobile Menu */}
     {
      nav ?  <div className='bg-black/80 fixed w-full h-screen z-10 top-0 
      left-0'></div> : ""
     }
    

     <div className={nav ? 'fixed top-0 left-0 w-[250px] h-screen bg-white  z-10 duration-300' : 
    'fixed top-0 left-[-100%] w-[250px] h-screen bg-white  z-10 duration-300'}>
      <AiOutlineClose  onClick={() => {setNav(!nav)}} size={30} className='absolute right-4 cursor-pointer top-4 '/>
      <h2 className='text-2xl p-4 '>Best <span className='font-bold'> Eats</span></h2>
      <nav>
        <ul>
          <li className='text-xl py-4 flex '><TbTruckDelivery size={25} className='mr-4'/> Orders</li>
          <li className='text-xl py-4 flex '><MdFavorite size={25} className='mr-4'/> Favorites</li>
          <li className='text-xl py-4 flex '><FaWallet size={25} className='mr-4'/> Wallet</li>
          <li className='text-xl py-4 flex '><MdHelp size={25} className='mr-4'/> Help</li>
          <li className='text-xl py-4 flex '><AiFillTag size={25} className='mr-4'/> Promotion</li>
          <li className='text-xl py-4 flex '><BsFillSaveFill size={25} className='mr-4'/> Best One</li>
          <li className='text-xl py-4 flex '><FaUserFriends size={25} className='mr-4'/> Invite Friends</li>
        </ul>
        </nav>
     </div>

    </div>
  )
}

export default Navbar