import React from 'react'
import './NavBar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton.js'

const NavBar = (props) => {
  return (
    <nav className='toolbar__navigation'>
      <div />
      <div className='toolbar__toggle-button'>
        <DrawerToggleButton click={props.click} />
      </div>
      <div className='toolbar__logo'>
        <a href='/'>
          <img src='http://images.vedlabura.com/LogoVed.jpg' />
        </a>
      </div>
      <div className='toolbar_navigation-items'>
        <ul>
          <li>
            <a href='/'>New</a>
          </li>
          <li>
            <a href='/'>Men</a>
          </li>
          <li>
            <a href='/'>Women</a>
          </li>
        </ul>
      </div>
      <div className='spacer' />
      <div className='toolbar_navigation-items'>
        <ul>
          <li>
            <a href='/'>Login</a>
          </li>
          <li>
            <i class='fas fa-shopping-cart'></i>
          </li>
          <li>
            <i class='far fa-heart'></i>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
