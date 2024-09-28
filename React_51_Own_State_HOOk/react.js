import { render } from "./react-dom"
import React from './react'
import App from "./App"
function createElement(type, props, ...children) {
  const reactElement = {
    type,
    props: {
      ...props,
    },
  }

  if (children.length) reactElement.props.children = children

  return reactElement
}
// yha pe ek dikkat yh hai ki ek useState ke liye to shi kaam kr rha hai pr agr hum koi dusra useState creat kre to uska initial value khuch aur set kr deto 
// to wha se update na hokr 0 se hi update hone lgega kyuki dono useState ek state variable ko acess kr rha hai to ek state variable mai change dono useState mai dikhega
// iske solve krne ke liye hume hr ek state liye alg alg vriable rakhna hoga isme humari array madad krega.. 
// let state

let states = []
let stateIndex = 0

export const useState = (initialState ) => {
  // yha pe ek dikkat hai dikkat yh hai ki jb setstate call ho rha updated count value ke saath state ki value newstate se set to ho ja rhi hai
  // pr jab render ho rha hai setstate se to phir se initial value hi lene lg jaa rha hai aur 0 set kr rha hai 
  // is cheez ko solve krne ke liye yh kr skte hai state ko state ko useState function ke bahar define kre agr state set hai to phir se set na kre..
  // state = state || initialState
  
  // yha pe ek dikkat yh hai ki agr empty string set krna chahe to nhi hoga blki initial state hi ho jayega kyuki empty string falsy value hai 
  // aur as per the condition states[StateIndex] falsy hone pe initial state se set ho jayega

  // is cheez se bachne ke liye nullish cohlision(??) use kr skte hai jo ki sirf null aur undefined hone pr hi false dega
  // states[stateIndex] = states[stateIndex] || initialState
  states[stateIndex] = states[stateIndex] ?? initialState
  // yha pe localIndex humare previous stateIndex ka track rkha hai kyuki previous stateIndex ko return krne se phle increase kr rhe hai 
  // isiliye local index se uske previou s state ko monitor kr rkha hai  
  const localIndex = stateIndex
  console.log(states[stateIndex]);

  const setState = (newState) => {
    // state = newState
    console.log(states);
    states[localIndex] = newState
    stateIndex = 0
    render(<App/>, document.getElementById('root'))
    console.log("setState");
  }
  stateIndex++
  // return [state, setState]
  return [states[localIndex], setState]
}

export default {
  createElement,
}
