import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllorder } from '../api';
import { setOrders } from '../context/actions/ordersActions';
import OrderData from './OrderData';

const DBOrders = () => {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!orders) {
      getAllorder().then((data) => {
        dispatch(setOrders(data));
      });
    }
  }, []);

  return (
    <div className=' flex items-center justify-center flex-col pt-6 w-full gap-4'>
      {orders ? 
      <>
      {orders.map((item, i) => (
        <OrderData key={i} index={i} data={item} admin={true} />
      ))}
      </>
       : 
       <>
       <h1 className=' text-[72px] text-teal-50 font-bold'>No Data</h1>
       </>
       }
    </div>
  )
}

export default DBOrders
