

import { motion, AnimatePresence } from "framer-motion"
import { data } from '@/Data/Data';
import { useState } from "react";

const FoodItem = () => {
    const [foods, setFoods] = useState(data);

    const filterType = (category:any) => {
        setFoods(
            data?.filter((item) => {
                return item.category === category;
            })
        )
    }
    const filterPrice = (price:any) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        )
    }

    return (
        <div>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                    {foods.map((item, index) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1 }}
                            key={item.id}
                            className="border shadow-lg rounded-lg hover:scale-105 duration-500 cursor-pointer">
                            <img className='w-full h-[150px] md:h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name} />
                            <div className='flex justify-between px-2 py-4'>
                                <p>{item.name}</p>
                                <p>
                                    <span className='bg-orange-500 text-white p-1 rounded-md'>{item.price}</span>
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
        </div>
    )
}

export default FoodItem