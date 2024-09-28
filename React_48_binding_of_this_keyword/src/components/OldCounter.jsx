import { Component } from 'react'

class OldCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
    this.timerId = null
    console.log('constructor')
    this.increaseCount = this.increaseCount.bind(this)
  }

  increaseCount(){
    console.log(this);
    this.setState({count: this.state.count +1})
  }

  componentDidMount() {
    console.log('componentDidMount')

    // this.timerId = setInterval(() => {
    //   console.log('hi')
    // }, 1000)
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    // clearInterval(this.timerId)
  }

  render() {
    console.log('render')
    const { name } = this.props
    const { count } = this.state
    return (
      <>
        <h1 id="counter-title" className="mt-4">
          {name}
        </h1>
        <div className="mt-6 flex items-center gap-4">
          <button
            className="rounded bg-blue-400 px-4 py-1"
            onClick={() => this.setState({ count: count - 1 })}
          >
            -
          </button>
          <h2>{count}</h2>
          <button
            className="rounded bg-blue-400 px-4 py-1"
            // normal function pass krenge to error aayegi..
            // agr normal function hi run krna chahe to  .bind ka use krke kr skte hai
            // onClick={this.increaseCount}
            onClick={function (){
             this.setState({count: count+1})
            }.bind(this)}
          >
            +
          </button>
        </div>
      </>
    )
  }
}

export default OldCounter
