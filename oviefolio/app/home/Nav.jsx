import React from 'react';
import "./home.css";
import {Montserrat} from "@next/font/google";


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
              <a href="#">Home</a>
            </li>
            <li className='lists'>
              <a href="#">About</a>
            </li>
            <li className='lists'>
              <a href="#">Portfolio</a>
            </li>
            <li className='lists'>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Nav;