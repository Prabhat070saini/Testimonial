import React, { useState } from 'react'
import Card from './Card'
import { FaLessThan, FaGreaterThan } from 'react-icons/fa'
export default function Testimonials(props) {
    let review = props.reviews;
    const [indexed, setindex] = useState(0);
    let leftshifthandler = () => {
        if (indexed - 1 < 0)
            setindex((review.length - 1));
        else {
            setindex(indexed - 1);
        }
    }
    let rightshifthandler = () => {
        if (indexed + 1 >= review.length)
            setindex(0);
        else {
            setindex(indexed + 1);
        }
    }
    let surpriseshifthandler = () => {
        let rand = Math.floor(Math.random() * review.length);
        setindex(rand);
    }

    return (
        <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl'>
            <Card key={review.id} review={review[indexed]} />

            <div className='text-3xl mt-5 gap-3 text-violet-400 fontt-bold'>
                <button onClick={leftshifthandler} className='cursor-pointer hover:text-violet-500'>
                    <FaLessThan />
                </button>
                <button onClick={rightshifthandler} className='cursor-pointer hover:text-violet-500'>
                    <FaGreaterThan />
                </button>
            </div>
            <div>
                <button
                    onClick={surpriseshifthandler}
                    className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white'>Suprise</button>
            </div>

        </div>
    )
}
