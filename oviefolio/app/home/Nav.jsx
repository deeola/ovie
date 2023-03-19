import React from 'react';
import "./home.css";
import {Montserrat} from "@next/font/google";
import Link from 'next/link';


const monstserrat = Montserrat({
  weight: ["400","700","500",],
  subsets: ["latin"]
})


const Nav = () => {
  return (
    <div  className='nav-wrap'>
        <nav className="nav">
          <h1>logo</h1>
          <ul className='unorderedList'>
            <li className='lists'>
              <Link href="/">Home</Link>
            </li>
            <li className='lists'>
            <Link href="/about">About</Link>
            </li>
            <li className='lists'>
            <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className='lists'>
            <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Nav;