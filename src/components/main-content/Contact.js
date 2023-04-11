import React from 'react'
import Divider from '../Divider'

export default function Contact() {
    return (
        <>
            <Divider />
            <section className='w-[90%] m-auto rounded-md bg-gray-700 flex flex-col justify-center items-center' id="contact">
                <h3 className='mt-4 w-[90%] text-yellow-400 text-2xl md:text-3xl text-center font-bold'>
                    Nie czekaj, skontaktuj się z nami!
                </h3>
                <div className='w-full md:w-[90%] m-auto'>
                    <div className='mt-6 m-4 w-full grid grid-cols-1 md:grid-cols-2'>
                        <div className='flex flex-col justify-evenly'>
                            <p className='text-white mt-4 text-xl font-bold'>
                                <i className="fa-solid fa-phone fa-shake text-yellow-400 mr-2"></i>123 456 789
                            </p>
                            <p className='text-white mt-4 text-xl font-bold'>
                                <i className="fa-solid fa-envelope fa-beat text-yellow-400 mr-2"></i>przykładowy email
                            </p>
                        </div>
                        <div className='flex flex-col justify-evenly'>
                            <p className='text-white mt-4 text-xl font-bold'>
                                <i className="fa-solid fa-map-marker-alt fa-bounce text-yellow-400 mr-2"></i>ul. Przykładowa 1, 00-000 Warszawa
                            </p>
                            <p className='text-white mt-4 text-xl font-bold'>
                                <i className="fa-solid fa-clock fa-pulse text-yellow-400 mr-2"></i>Poniedziałek - Piątek: 8:00 - 16:00
                            </p>
                        </div>
                    </div>
                </div>



            </section>
        </>

    )
}