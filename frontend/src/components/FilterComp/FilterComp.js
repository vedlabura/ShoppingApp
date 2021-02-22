import React, { Component } from 'react'
import { Button, Container } from 'react-bootstrap'
import './FilterComp.css'

export default class FilterComp extends Component {
  state = {
    display1: 'none',
    display2: 'none',
    display3: 'none',
    iconclass1: 'fa fa-angle-down',
    iconclass2: 'fa fa-angle-down',
    iconclass3: 'fa fa-angle-down',
  }
  accordianClickListener1 = () => {
    this.setState((prevState) => {
      if (prevState.display1 === 'none') {
        prevState.display1 = 'block'
        prevState.iconclass1 = 'fas fa-angle-up'
      } else {
        prevState.display1 = 'none'
        prevState.iconclass1 = 'fas fa-angle-down'
      }
      return { prevState }
    })
  }
  accordianClickListener2 = () => {
    this.setState((prevState) => {
      if (prevState.display2 === 'none') {
        prevState.display2 = 'block'
        prevState.iconclass2 = 'fas fa-angle-up'
      } else {
        prevState.display2 = 'none'
        prevState.iconclass2 = 'fas fa-angle-down'
      }
      return { prevState }
    })
  }
  accordianClickListener3 = () => {
    this.setState((prevState) => {
      if (prevState.display3 === 'none') {
        prevState.display3 = 'block'
        prevState.iconclass3 = 'fas fa-angle-up'
      } else {
        prevState.display3 = 'none'
        prevState.iconclass3 = 'fas fa-angle-down'
      }
      return { prevState }
    })
  }

  render() {
    return (
      <div class='sidenav'>
        <h5 className='filters'>FILTERS</h5>
        <div className='linefilter' />
        <button class='accordion' onClick={this.accordianClickListener1}>
          Size
          <i class={this.state.iconclass1} style={{ marginLeft: '240px' }}></i>
        </button>

        <div class='panel' style={{ display: this.state.display1 }}>
          <div className='size'>
            <input type='radio' id='xs' name='size' value='xs' />
            <label for='male'>XS</label>
            <input type='radio' id='s' name='size' value='s' />
            <label for='male'>S</label>
            <input type='radio' id='m' name='size' value='m' />
            <label for='male'>M</label>
            <input type='radio' id='l' name='size' value='l' />
            <label for='male'>L</label>
            <input type='radio' id='xl' name='size' value='xl' />
            <label for='male'>XL</label>
          </div>
        </div>
        <div className='linefilter' />
        <button class='accordion' onClick={this.accordianClickListener2}>
          Gender
          <i class={this.state.iconclass2} style={{ marginLeft: '220px' }}></i>
        </button>
        <div class='panel' style={{ display: this.state.display2 }}>
          <div className='gender'>
            <input type='radio' id='male' name='gender' value='male' />
            <label for='male'>Male</label>
            <input type='radio' id='female' name='gender' value='female' />
            <label for='female'>Female</label>
          </div>
        </div>
        <div className='linefilter' />
        <button class='accordion' onClick={this.accordianClickListener3}>
          Tshirt Type
          <i class={this.state.iconclass3} style={{ marginLeft: '197px' }}></i>
        </button>
        <div class='panel' style={{ display: this.state.display3 }}>
          <div className='gender'>
            <input type='radio' id='male' name='design' value='male' />
            <label for='male'>Round neck</label>
            <input type='radio' id='female' name='design' value='female' />
            <label for='female'>Colar</label>
          </div>
        </div>
        <div className='linefilter' />
        <div className='filterpanel'>
          <Button className='applyfilter' variant='primary'>
            Apply
          </Button>
          <a className='clearfilter'>Clear filters</a>
        </div>
      </div>
    )
  }
}
