import { useState } from 'react'
import { hamburger } from '../assets/icons'
import {navLinks} from '../constants'
import { AiOutlineClose } from 'react-icons/ai';

const Nav = () => {
  const [show, setShow] = useState(false)
  const showNav = () => {
    setShow(!show)
  }
  return (
    <header className=" padding-x py-8 absolute z-10 w-full">
      <nav className=' flex justify-between items-center max-container'>
        <a href="/" className=' font-bold text-3xl font-montserrat text-caribbean-green'>
          SAMSUNG
        </a>
        <ul className=' flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map(item=> (
            <li key={item.label}>
              <a href={item.href} className=' font-montserrat leading-normal text-lg text-slate-gray'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt="Hamburger" width={25} height={25} onClick={showNav} className=' cursor-pointer' />
          {!!show && (
          <div className=' absolute right-0 top-0 min-h-screen min-w-full bg-caribbean-green transition ease-in-out duration-1000'>
            <AiOutlineClose className=' text-3xl m-6 text-white-400 cursor-pointer ' onClick={showNav}/>
            <div className=' mt-28'>
              <ul className=' flex-1 flex flex-col justify-center items-center gap-16'>
                {navLinks.map(item=> (
                  <li key={item.label} onClick={showNav}>
                    <a href={item.href} className=' font-montserrat leading-normal text-3xl text-white-400 border-b border-white-400 hover:text-white hover:border-white'>
                      {item.label}
                    </a>
                  </li>
                  
                ))}
              </ul>
            </div> 
          </div>
        ) }
        </div>


          <a href="/" className=' font-montserrat leading-normal text-xl font-semibold text-slate-gray max-lg:hidden'>SignIn/SignUp</a>
      </nav>
    </header>
  )
}

export default Nav