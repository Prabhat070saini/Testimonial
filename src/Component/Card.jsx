import React from 'react'
import { FaQuoteRight, FaQuoteLeft, } from 'react-icons/fa'
export default function Card(props) {
    let review = props.review;
    return (
        <div className='flex flex-col md:relative '>
            <div className='absolute top-[-7rem] z-[10] mx-atuo'>
                <img className='aspect-square rounded-full w-[140px] h-[140px] z-[25]' src={review.image} />
                <div className='w-[140px] h-[140px]  bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]'></div>
            </div>
            <div className='text-center mt-7'>
                <p className='text-4xl font-bold 
                Capitalize'>{review.name}</p>
                <p className='text-violet-300 uppercase text-sm'> {review.job} </p>
            </div>
            <div className='text-center mt-7'>
            </div >
            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteLeft />
            </div>
            <div className='text-center mt-4 text-slate-500'>
                <p>{review.text}</p>
            </div>
            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteRight />
            </div>

        </div>
    )
}