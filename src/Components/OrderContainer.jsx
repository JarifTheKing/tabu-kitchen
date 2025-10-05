import React, { use, useState } from 'react';
import CountBox from './CountBox';
import OrderCard from './OrderCard';
import CookingCard from './CookingCard';
import { toast } from 'react-toastify';
import ReadyCookingCard from './ReadyCookingCard';

const OrderContainer = ({ ordersPromise }) => {
    const ordersData = use(ordersPromise)

    const [orders, setOrders]=useState(ordersData)

    const [cookingItems, setCookingItems] = useState([])

    const [readyItems, setReadyItems] = useState([])

    const handleOrder = (order) => {
        // First e check kora lagbe - kono item order kora ase kina?
        const isExist = cookingItems.find(item => item.id === order.id)
        if (isExist) {
            toast.error("Order Taken")
            return
        }
        // cooking items gula  vitore dhukabe order gula(ordercard) te click korle
        const newCookingItems = [...cookingItems, order]
        setCookingItems(newCookingItems)
    }

    const handleReadyItems = (order) => {
        // Showing real time
        order.cookedTime = new Date().toLocaleTimeString()

        //1. ready btn click korle readyItems gula ready er vitore dhukabe
        const newReadyItems = [...readyItems, order]
        setReadyItems(newReadyItems)

        //2. when ready btn clicked the cooking item remove from order
        const remaining = cookingItems.filter((item) => item.id !== order.id)
        setCookingItems(remaining)

        // 3. orders theke order ta remove korte hobe 
        const remainingOrders = orders.filter((item)=> item.id !== order.id)
        setOrders(remainingOrders)

    }

    return (
        <>
            <CountBox totalCookings={cookingItems.length} totalOrder={orders.length} totalReadyItems={readyItems.length}></CountBox>

            <section className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-12 mt-6 gap-8'>

                <div className='lg:col-span-7'>
                    <h2 className='text-3xl font-bold'>Current Orders </h2>

                    <div className='space-y-4'>
                        {
                            orders.map(order => (
                                <OrderCard handleOrder={handleOrder} key={order.id} order={order}></OrderCard>
                            )
                            )
                        }
                    </div>

                </div>

                <div className='lg:col-span-5 space-y-5'>

                    <h2 className='text-3xl font-bold'>Cooking Now</h2>
                    <div className='shadow-lg space-y-5 p-10 rounded-lg'>
                        {
                            cookingItems.map(order => <CookingCard key={order.id} order={order} handleReadyItems={handleReadyItems}></CookingCard>)
                        }
                    </div>


                    <h2 className='text-3xl font-bold'>Order Ready</h2>
                    <div className='shadow-lg space-y-5 p-10 rounded-lg'>
                        {
                            readyItems.map((order =>
                                <ReadyCookingCard order={order} handleReadyItems={handleReadyItems}
                                    key={order.id}></ReadyCookingCard>
                            ))
                        }
                    </div>

                </div>

            </section>
        </>
    );
};

export default OrderContainer;