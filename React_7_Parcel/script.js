// //to import from the other file
// // node modules folder humare browser ke dwara use nhi krta hai
// // wh use ignore krta hai humare server ise use krte hai jaise ki node
// import{user} from './data.js'

// // kyuki hume react code use krna hai jo ki module folder mai pr hume directly node_module
// // file se import nhi kr skte kyuki humara browser node_module to ko samjhta hi nhi to import krne pe error aayega

// import React from "react"; // error

// //import krne ke liye hume use krna pdega parcel

// console.log('Hello world');

// // code for hot module replacement 

// if(module.hot){
//     module.hot.accept();
// }

//paracel ek nya code bna rha hai convert krke jo dist file mai create ho rha hai
// jo bhi yha pe create kr rhe hai using simple html wh render hokr javascript mai convert kiya ja rha 
// jsx ka use krke wh bhi parcel ka use krke hi ho ja rha hai aur souce map bhi kr paa rha hai because of .js.map file jo create 
//hua parcel ke dwara .dist folder pura ka pura individual kaam bhi rk skta hai

// parcel ka use krke hume error bhi bhut defined milta hai jisse ki debugging assan ho jati hai..

// import ReactDOM from "react-dom"
// aise krne se yh error aayega
// Warning: You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".

import {createRoot} from 'react-dom/client'

const h1 = <h1>Hello World</h1>

const root = createRoot(document.getElementById('root'))

root.render(h1)
console.log('Hello world');

// parcel ko pta hai kaise import krna hai , kaise cheezo ko bundle krna hai
// kaise server ko start krna hai