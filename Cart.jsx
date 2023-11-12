import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { buttonClick, slideIn, staggerFadeInOut } from '../animations'
import {BiChevronRight, FcClearFilters} from '../assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { setCartOff } from '../context/actions/displayCartAction'
import {BsCurrencyDollar} from 'react-icons/bs';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
  return (
    <motion.div
    {...slideIn}
    className='fixed z-50 top-0 right-0 w-300 md:w-508 bg-cardOverlay backdrop-blur-md shadow-md h-screen'
    >
        <div className='w-full flex items-center justify-between py-4 pb-12 px-6'>
            <motion.i
            {...buttonClick}
            className='cursor-pointer'
            onClick={() => dispatch(setCartOff())}
            >
                <BiChevronRight className='text-[50px] text-textColor'/>
            </motion.i>
            <p className='text-2xl text-headingColor font-semibold'>Your Cart</p>
            <motion.i {...buttonClick} className='cursor-pointer'>
                <FcClearFilters className='text-[30px] text-textColor'/>
            </motion.i>
        </div>

        <div className='flex-1 flex flex-col items-start justify-start rounded-t-3xl bg-zinc-900 h-full py-6 gap-3 relative'>
            {cart && cart?.length > 0 ? <>
                <div className='flex flex-col w-full items-start justify-start gap-3 h-[65%] overflow-y-scroll scrollbar-none px-4'>
                    {cart && cart?.length > 0 && cart?.map((item, i) => (
                        <CartItemCard key={i} index={i} data={item} />
                    ))}
                </div>

            </> : <>
            <h1 className='text-3xl text-teal-50 font-bold'>Cart Is Empty</h1>
            </>}
        </div>

    </motion.div>
  )
}

export const CartItemCard = ({index, data}) => {

    const cart = useSelector((state) => state.cart);
    const [itemTotal, setItemTotal] = useState(0);

    useEffect(() =>{
        setItemTotal(data.product_price * data.quantity);
    }, [itemTotal, cart]);

    return (
        <motion.div key={index} {...staggerFadeInOut(index)}
        className='w-full flex items-center justify-start bg-zinc-800 rounded-md drop-shadow-md px-4 gap-4'
        >
            <img src={data?.imageURL} className=' w-24 min-w-[94px] h-24 object-contain' alt="" />

            <div className=' flex items-center justify-start gap-1 w-full'>
                <p className=' text-lg text-teal-50 font-semibold'>
                    {data?.product_name}
                    <span className=' text-sm block capitalize text-gray-400'>
                        {data?.product_category}
                    </span>
                </p>
                <p className=' text-sm flex items-center justify-center gap-1 font-semibold text-red-400 ml-auto'>
                   <BsCurrencyDollar className=' text-red-400'/>  {itemTotal}
                </p>
            </div>
        </motion.div>
    )
}

export default Cart
