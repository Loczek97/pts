import React from 'react'

export default function Advantage({ icon, title, description }) {
    return (
        <div className="rounded-md overflow-hidden shadow-lg bg-gray-700">
            <div className='w-full bg-gray-600 py-4'>
                <img src={icon} alt="hammer" className='icon w-48 h-48 m-auto' />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">
                    {title}
                </div>
                <p className="text-white mt-4">
                    {description}
                </p>
            </div>
        </div>
    )
}