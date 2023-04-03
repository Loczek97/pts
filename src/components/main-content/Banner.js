import React from 'react';

export default function Banner() {
    const background = "./img/truck.jpg"
    return (
        <section
            id='banner'
            style={{ backgroundImage: `url(${background})` }}
            className='z-10 bg-cover bg-center bg-fixed h-screen flex items-center justify-center top=-5 before:content-[""] before:w-full before:h-full before:bg-black before:opacity-60 before:absolute'>
            <h1 className='text-center text-3xl md:text-4xl font-bold text-white md:p-20 z-20 flex flex-col'>
                <span className='py-3'>Usługi transportowe dostosowane do</span>
                <span className='text-yellow-400 underline decoration-solid py-3'>Twoich</span>
                <span className='py-3'>potrzeb</span>
            </h1>
        </section>
    )
}