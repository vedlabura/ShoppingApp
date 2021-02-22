import './App.css'
import Footer from './components/Footer.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import ToolBar from './components/Header/ToolBar/ToolBar.js'
import SideDrawer from './components/Header/SideDrawer/SideDrawer.js'
import BackDrop from './components/Header/BackDrop/BackDrop.js'
import { Component } from 'react'

class App extends Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backDropClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: false }
    })
  }

  render() {
    let backDrop

    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />
    }

    return (
      <div>
        <Router>
          <ToolBar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backDrop}
          <main>
            <div className='mainContent'>
              <Container className='container--1'>
                <Route path='/' component={HomeScreen} exact />
                <Route path='/product/:id' component={ProductScreen} />
                <Route path='/cart/:id?' component={CartScreen} />
              </Container>
            </div>
          </main>
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App
