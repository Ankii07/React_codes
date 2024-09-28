import { Component } from 'react'
import withCounter from './WithCounter'

class HoverCounter extends Component {
 

  render() {
    const { name } = this.props
    const { count } = this.state
    return (
      <>
        <h1 id="counter-title" className="mt-4">
          {name}
        </h1>
        <div  >
        {/* reusing the function defined in wrapped component here */}
          <h2 className='cursor-pointer bg-green-200 text-center p-4 text-2xl' onMouseEnter={this.props.increaseCount}>{this.props.count}</h2>
        </div>
      </>
    )
  }
}

export default withCounter(HoverCounter)
