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
                <div className='w-full md:w-[90%] m-auto text-lg md:text-xl'>
                    <div className='mt-6 m-4 w-full grid grid-cols-1 md:grid-cols-2'>
                        <div className='flex flex-col justify-evenly'>
                            <p className='text-white mt-4 font-bold'>
                                <i className="fa-solid fa-phone fa-shake text-yellow-400 mr-2"></i>
                                <a href="tel:+48537765431">537-765-431</a>
                            </p>
                            <p className='text-white mt-4 font-bold'>
                                <i className="fa-solid fa-phone fa-shake text-yellow-400 mr-2"></i>
                                <a href="tel:+48538605122">538-605-122 </a>
                            </p>
                            <p className='text-white mt-4 font-bold'>
                                <i className="fa-solid fa-envelope fa-beat text-yellow-400 mr-2"></i><a href="mailto:ps.strzalka@gmail.com">
                                    ps.strzalka@gmail.com
                                </a>
                            </p>
                        </div>
                        <div className='flex flex-col justify-evenly'>
                            <p className='text-white mt-4 font-bold'>
                                <i className="fa-solid fa-map-marker-alt fa-bounce text-yellow-400 mr-2"></i>
                                <a href="https://goo.gl/maps/BUoVQ796Zti6eSpA6?coh=178572&entry=tt" target='blank'>
                                    Stary Grodków 41, 48-320 Skoroszyce
                                </a>
                            </p>
                            <div className='text-white mt-4 font-bold'>

                                <div className='flex flex-col'>
                                    <span><i className="fa-solid fa-clock fa-pulse text-yellow-400 mr-2"></i>Poniedziałek - Piątek: 7:00 - 17:00</span>
                                    <span>Sobota: 8:00 - 13:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </section>
        </>

    )
}