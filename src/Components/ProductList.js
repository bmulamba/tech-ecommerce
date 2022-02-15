import React, { Component } from 'react'
import Card from './Card'

export default class ProductList extends Component {
  render() {
    return (
      <div className='container'>
          <div className='row'>
                  <Card />
            </div>
      </div>
    )
  }
}
