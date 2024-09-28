import { Component } from 'react'
import withCounter from './WithCounter'

class ClickCounter extends Component {


  render() {
    const { name } = this.props
    
    return (
      <>
        <h1 id="counter-title" className="mt-4">
          {name}
        </h1>
        <div  >
          <h2 className='cursor-pointer bg-sky-200 text-center p-4 text-2xl' onClick={this.props.increaseCount}>{this.count}</h2>
        </div>
      </>
    )
  }
}
// ab yha se jo component export kr rhe hai usse Higher component mai wrap krke export krenge aur yh component wha render hoga 
// aur wha se pros pass huae honge whi sare props ko use kr payega yha pe humne home se component mai props pass kr rkha hai name wh accessible nhi hai wha
// usko this.props ki help se krwana hoga..
export default withCounter(ClickCounter)
