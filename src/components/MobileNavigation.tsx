import React, { useState } from 'react'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import Theme from './Theme'

const MobileNavigation = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="menu">
      {isOpen ? (
        <HiXMark className="menu__icon" size={35} onClick={() => setIsOpen(!isOpen)}/>
      ) : (
        <HiBars3 className="menu__icon" size={35} onClick={() => setIsOpen(!isOpen)}/>
      )}
      {isOpen ? (
        <div className="menu__items">
          <li><Link to="favourites"><p>Favourites</p></Link></li>
          <li><Theme /></li>
        </div>) 
        : (null)
      }
    </div>
  )
}

export default MobileNavigation;