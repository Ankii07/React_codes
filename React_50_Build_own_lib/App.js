// package.json mai script wale portion mai hum apna start command rkhte hai

//react dom se ek render method mil jata hai jisko aap direct render ke liye use kr skte hai..
// aise aapko createRoot krna hoga phir uske baad react.render krna pdega..
// render method mai phla parameter wh dalte hai jsiko render krna hota hai aur dusra ki kha pe render krna hai..

// render(<div className = "container"> ...</div>, document.getElementById('root'))
// const h1 = <h1> Hii</h1>

// const React = {
//     // kai children pass huae hai isiliye rest operator ka use kr rha hai ko ki array of children pass kr rha hai
//     createElement(type, props, ...children){
//         const reactElement = {
//             // type key value pair automatic yha save ho jayega..
//             type,
//             props: {
//                 ...props,
//                 children
//             }
//         }

//         return reactElement
//     }
// }

import React from "./react";
import { render } from "./react-dom";

// function render(reactElement, rootElement){
//     // console.log(reactElement);
//     function createDOMElement(reactElement){
//         const {type, props} = reactElement
//         const DOMElement = document.createElement(type)
//         // console.log(props);
//         // yha pe ek dikkat yh hai ki agr bhut se child hai to ek child  phle wale child ko over ride kr degi..
//         props.children.forEach((child)=>{
//             // console.log(child);
//             // DOMElement.textContent = child;
//             // redering multiple textnode
//             if(typeof child === 'string'){
//                 const textNode = document.createTextNode(child)
//                 DOMElement.append(textNode)
//             }
//             // const textNode = document.createTextNode(child)
//             // DOMElement.append(textNode) 
//             else{
//                 // console.log(child);
//                 // hume yha jo milega wh react element hoga usko domelement  convert krna hoga 
//                 // uske liye humne ek function bna rkha hai createDOMElement usko use krna hoga..
//                 // console.l og(createDOMElement(child)); 

//                 DOMElement.append(createDOMElement(child))
              
//             }
//         })
//         return DOMElement
//     }

//     const DOMElement = createDOMElement(reactElement)
//     rootElement.append(DOMElement)
// }

// const h1 = (
//   <h1>
//    <p>hii</p>
//    <b>hello</b>
//    </h1>
// )

const h1 = <h1>
hello
hii
</h1>
 
const div = <div className="heil">{'hello'} {'hii'}</div>

// agr react element pass kre to dusre trah se deal krna hoga 
// react element hota hai ek object jo ki contain krta hai prop aur type property
// const div = <div>{'hello'} {'hii'}</div>

function Card(props){
  console.log(props);
  return ( <div className="container" id="App" title="Hello World">{'hello'} 
  <b className="hii">Hii</b>
  {props.children} 
  {/* yh krne se error aayega kyuki yh ek array hai aur component ke andr error handle krna nhi sikha hai */}

  </div>)

}

// yha pe card function ko react component ki trah use krna hai 
console.log(<Card/>);

// render(h1, document.getElementById('root'));

// render(div, document.getElementById('root'));
// yha pe babelrc convert kr rha hai html ko jsx element mai jisse ki create element use kr paa rhe hai..

//yha pe rendering thora different trike se krna pdega..

// agr string pass kiya to error aa jayegi kyuki hum jo element pass kr rhe hai usse type aur repo properties ko destructure krwa rhe hai
// destructure krwane ke baad obect.enteries(props ) kr rhe hai aur kyuki string ka prop property to undefined defined hoga isiliye
// object.enteries mai forEach lga rhe hai to error aa jayega..
// render([div,div2,'Ankit'], document.getElementById('root')); // output hello [object Object]

render(<Card/>, document.getElementById('root'));

// console.log(h1);