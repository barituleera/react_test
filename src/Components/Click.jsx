import React, { Component } from 'react'
export class Click extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
           count: 0
      }
    }

    UpdateClick = () => {
        this.setState({count: this.state.count +1})
    }
  render() {
     const {count} = this.state
    return (
      <div>
        <button className='btn btn-warning btn-sm' onClick={this.UpdateClick}>
            Click {count}
        </button>
      </div>
    )
  }
}

export default Click