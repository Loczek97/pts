import React from 'react'
import img from '../../assets/img/test.jpg'
import Divider from '../Divider'

export default function Services() {
  return (
    <>
      <section id='services'>
        <div className="bg-gray-800 flex flex-col md:flex-row">
          <div className="flex justify-evenly items-center px-8 py-6 text-white w-full md:w-1/2">
            <p className='md:pl-8'>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              ultricies, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec
              tincidunt nisl nisl vel nisl. Nullam ultricies, nisl nec ultricies
              lacinia, nisl nisl aliquet nisl, nec tincidunt nisl nisl vel nisl.
            </p>
          </div>
          <div className="flex justify-center items-center px-8 py-4 w-full md:w-1/2">
            <img src={img} alt="test" className='rounded-md shadow-md w-[90%] h-[90%] shadow-gray-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-700 transition-all ease-in-out duration-300' />
          </div>
        </div>

        <Divider />

        <div className="bg-gray-800 flex flex-col md:flex-row-reverse">
          <div className="flex justify-center items-center px-8 py-4 text-white w-full md:w-1/2">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ultricies, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec
            tincidunt nisl nisl vel nisl. Nullam ultricies, nisl nec ultricies
            lacinia, nisl nisl aliquet nisl, nec tincidunt nisl nisl vel nisl.
          </div>
          <div className="flex justify-center items-center px-8 py-4 w-full md:w-1/2">
            <img src={img} alt="test" className='rounded-md shadow-md w-[90%] h-[90%] shadow-gray-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-700 transition-all ease-in-out duration-300' />
          </div>
        </div>

        <Divider />

        <div className="bg-gray-800 flex flex-col md:flex-row">
          <div className="flex justify-evenly items-center px-8 py-6 text-white w-full md:w-1/2">
            <p className='md:pl-8'>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              ultricies, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec
              tincidunt nisl nisl vel nisl. Nullam ultricies, nisl nec ultricies
              lacinia, nisl nisl aliquet nisl, nec tincidunt nisl nisl vel nisl.
            </p>
          </div>
          <div className="flex justify-center items-center px-8 py-4 w-full md:w-1/2">
            <img src={img} alt="test" className='rounded-md shadow-md w-[90%] h-[90%] shadow-gray-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-700 transition-all ease-in-out duration-300' />
          </div>
        </div>
      </section>
    </>
  )
}
