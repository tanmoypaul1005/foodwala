import { motion } from "framer-motion"


const FoodItem = ({ title = "", price = "", image = "" }) => {

    return (
        <div>
            <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="border shadow-lg rounded-lg hover:scale-105 duration-500 cursor-pointer">
                <img className='w-full h-[150px] md:h-[200px] object-cover rounded-t-lg' src={image} alt={title} />
                <div className='flex justify-between px-2 py-4'>
                    <p>{title}</p>
                    <p>
                        <span className='bg-orange-500 text-white p-1 rounded-md'>{price}</span>
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default FoodItem