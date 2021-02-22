import React from 'react'

import './SideDrawer.css'

const SideDrawer = (props) => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href='/'>New</a>
        </li>
        <li>
          <a href='/'>Mens</a>
        </li>
        <li>
          <a href='/'>Womens</a>
        </li>
      </ul>
    </nav>
  )
}

export default SideDrawer
