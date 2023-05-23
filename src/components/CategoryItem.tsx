import React from 'react';

const CategoryItem = ({ title = "", image = ""}) => {
    return (
        <div className='bg-gray-100 rounded-lg p-4 flex justify-between items-center shadow-md cursor-pointer hover:bg-gray-200 '>
            <h2 className='font-bold sm:text-xl'>{title}</h2>
            <img className='w-16' src={image} alt={title} />
        </div>
    );
};

export default CategoryItem;