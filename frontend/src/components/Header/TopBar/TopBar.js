import React from 'react'
import './TopBar.css'

const TopBar = () => {
  return (
    <nav className='topbar'>
      <div className='topbar-left'>
        <ul>
          <li>
            <a href='/'>Get the app</a>
          </li>
          <li>
            <a href='/'>Offers</a>
          </li>
          <li>
            <a href='/'>FanBook</a>
          </li>
        </ul>
      </div>
      <div className='spacer-topbar' />
      <div className='topbar-right'>
        <ul>
          <li>
            <a href='/'>Contact Us</a>
          </li>
          <li>
            <a href='/'>Track Order</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default TopBar
