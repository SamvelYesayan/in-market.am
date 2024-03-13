import React from 'react'
import './HeaderComponent.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";



const HeaderComponent = () => {
  return (
    <header>
        <nav className='header-nav1'>
            <div className='header-nav1-div1'>
                <b><FaPhoneAlt /> +37443333215</b>
                <b><MdEmail /> info@in-market.am</b>
            </div>
            <div className='header-nav1-div2'>
                <b><MdDeliveryDining /> Առաքում</b>
                <b><FaUser /> Hi <i>SamYesayan</i></b>
            </div>
        </nav>
        <nav className='header-nav2'>
            <div className='header-nav2-div1'>
                <h2>In-Market</h2>
            </div>
            <div className='header-nav2-div2'>
                <form class="search-form">
                    <input type="text" placeholder="Որոնել..." class="search-input" />
                    <button type="submit" class="search-button">
                    <IoIosSearch />
                    </button>
                </form>
                <MdOutlineShoppingBag className='header-nav2-icon' />


            </div>
        </nav>
    </header>
  )
}

export default HeaderComponent