import React from 'react'
import ToolBar from './ToolBar/ToolBar'

const Header = (props) => {
  return (
    <header>
      <ToolBar drawerClickHandler={props.drawerClickHandler} />
    </header>
  )
}

export default Header
