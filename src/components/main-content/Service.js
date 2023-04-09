import React from 'react'

/**
 * @param {string} text - Text to display
 * @param {string} img - Image to display
 * @param {boolean} reverse - Reverse the order of the image and text
 * @returns {JSX.Element}
 */
export default function Service({ text, img, reverse }) {
    const reverseClass = reverse ? 'md:flex-row-reverse' : 'md:flex-row'

    return (
        <div className={`bg-gray-800 flex flex-col ${reverseClass} items-center`}>
            <div className="flex justify-center items-center px-8 py-6 text-white w-full md:w-1/2">
                <p className='md:pl-5'>
                    {text}
                </p>
            </div>
            <div className="flex justify-center items-center px-8 py-4 w-full md:w-1/2">
                <img src={img} alt="test" className='rounded-md shadow-md w-4/5 h-4/5 shadow-gray-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-700 transition-all ease-in-out duration-300' />
            </div>
        </div>
    )
}
