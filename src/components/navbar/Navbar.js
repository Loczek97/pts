import React, { Component } from 'react'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false
    }
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuVisible: !prevState.isMenuVisible
    }))
  }

  render() {
    const { isMenuVisible } = this.state;

    return (
      <nav className='bg-gray-900 p-5 m-0 shadow md:flex md:items-center justify-between md:py-0 w-full z-30 sticky top-0'>
        <div className="flex justify-between items-center">
          <span className='text-yellow-400 font-bold text-2xl cursor-pointer'>
            PTS
          </span>
          <span className="p-1 mx-2 w-10 bg-yellow-400 md:hidden rounded flex justify-center items-center hover:bg-yellow-500 duration-200" onClick={this.toggleMenu}>
            <ion-icon name="menu-outline"></ion-icon>
          </span>
        </div>

        <ul className={`md:flex md:items-center bg-gray-900 z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto py-4 md:pl-0 pl-7 md:opacity-100 ${isMenuVisible ? 'top-10' : '-top-[200%]'} transition-all ease-in duration-200`}>
          <li className='mx-4 my-6 md:my-0'>
            <a href="#services" className='text-white text-lg font-bold hover:text-yellow-400 duration-200'>Usługi</a>
          </li>
          <li className='mx-4 my-6 md:my-0'>
            <a href="#contact" className='text-white text-lg font-bold hover:text-yellow-400 duration-200'>Kontakt</a>
          </li>
        </ul>
      </nav>
    )
  }
}
