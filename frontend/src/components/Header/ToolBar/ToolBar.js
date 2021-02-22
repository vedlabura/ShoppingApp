import React from 'react'
import './ToolBar.css'
import TopBar from '../TopBar/TopBar.js'
import NavBar from '../NavBar/NavBar.js'

const ToolBar = (props) => (
  <header className='toolbar' style={{ zIndex: 1000 }}>
    <ul>
      <li>
        <TopBar />
      </li>
      <li>
        <NavBar click={props.drawerClickHandler} />
      </li>
    </ul>
  </header>
)

export default ToolBar
