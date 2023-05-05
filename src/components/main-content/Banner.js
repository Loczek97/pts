import React from 'react';
import background from '../../assets/img/work-pic/banner.webp';

export default function Banner() {
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth"
        });
    };

    return (
        <section
            id='banner'
            style={{ backgroundImage: `url(${background})` }}
            className='z-10 bg-cover bg-center bg-fixed h-screen flex items-center justify-center top=-5 before:content-[""] before:w-screen before:h-screen before:bg-black before:opacity-[0.65] before:absolute'>
            <div className='flex flex-col justify-center z-20'>
                <h1 className='text-center text-3xl md:text-4xl font-bold text-white flex flex-col'>
                    <span className='py-3'>Usługi ziemne dopasowane do</span>
                    <span className='text-yellow-400 underline py-3'>Twoich</span>
                    <span className='py-3'>potrzeb</span>
                </h1>
                <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <button onClick={() => scrollTo('services')} className='h-12 rounded-md shadow-md shadow-gray-800 border border-solid border-yellow-400 bg-yellow-400 text-black font-bold hover:scale-[1.02] hover:shadow-lg transition-all ease-in-out duration-300'>
                        Poznaj naszą ofertę
                    </button>
                    <button onClick={() => scrollTo('contact')} className='h-12 rounded-md shadow-md shadow-gray-800 border-[3px] border-solid border-yellow-400 text-yellow-400 font-bold hover:scale-[1.02] hover:shadow-lg transition-all ease-in-out duration-300'>
                        Skontaktuj się z nami
                    </button>
                </div>
            </div>
        </section>
    )
}