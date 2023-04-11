import React from 'react'
import Banner from './components/main-content/Banner'
import Content from './components/main-content/Content'
import Contact from './components/main-content/Contact'

export default function Main() {
    return (
        <div className='w-[90%] m-auto'>
            <Banner />
            <Content />
            <Contact />
        </div>
    )
}
