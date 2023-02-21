import React from 'react'

export default function Footer() {
    const background = "./img/Wave.svg"
    return (
        <footer
            style={{ backgroundImage: `url(${background})` }}
            className="bg-gray-900 w-full h-64 bg-no-repeat bg-bottom bg-cover flex flex-col justify-end items-end"
            >
            
            <span className='m-10 text-white text-xs'>UI/UX: Michał Szymański</span>
        </footer>
    )
}
