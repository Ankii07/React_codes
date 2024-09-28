import { Component } from 'react'

// mount hona matlb screen pe website ka screen pe dikhna 
// aur unmount ka matlb screen pe website ka hath jaana 
// isi mount aur unmount website hone ke bich mai bhut si stages hoti hai..
// isi puri mount aur unmount ke process ek components ke life cycle bolte hai..

// Mounting mai sbse phle chalta hai constructor ..
// phir chalta hai render method ..phir uske baad chalta hai componentDidMount method..



class OldCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
    console.log('constructor')
    this.timerId = null;
    // console.log(this.props);
  }
  // In teeno sbse last mai componentDidMount hi run hota hai

  // componentDidMount isiliye provide kia gya ki iske andr kisi dom ko manipulate kr skte hai yaa 
  // api calls kr skte hai
  // jaise hi humara component mount hokr humare dom mai aa jayega tb jakr componentDidMount run hoga..
  componentDidMount(prevProps, prevState, snapshot){
    // componentDidMount mai hi dom ka acess hoga aur khi krenge to null return hoga..
    // aur yhi sabse achhi jgh hoti hai api call krne ke liye..
    // console.log('componentDidMount');
    // console.log(document.querySelector('#counter-title'));

    this.timerId = setInterval(() =>{
      console.log('hi');
    },1000)
  }

  // useEffect mai bhi dom ko acess kr skte hai kyuki useeffect bhi tabhi acitve hota hai jb
  // website pura ka pura mount ho jata hai..
 
  componentDidUpdate(){
      console.log('componentdidUpdate');
  }
 
  // componentwillUnmount run hoga jb hum page se jane wale honge....
  componentWillUnmount(){
    console.log('componentWillUnmount');
    clearInterval(this.timerId)
  }


  render() {
    console.log('render')
    const { name } = this.props
    const { count} = this.state
    return (
      <>
        <h1 id='counter-title' className="mt-4">{name}</h1>
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
            onClick={() => this.setState({ count: count + 1 })}
          >
            +
          </button>
        </div>
       
      </>
    )
  }
}

export default OldCounter
