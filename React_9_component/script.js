import {createRoot} from 'react-dom/client'

// const h1 = <h1>Hello World</h1>

import './style.css'
import { title } from 'process';
import { Children } from 'react';

// const card =

// to render multiple elements dynamically we can use function which will return that element
// and we can pass the differnt parameters as well for dynamicity..
function card(props) {
    //array destructing
    const {key, title, image, brand, price} = props
    console.log(key);
    return(
        <div className='card' key={key} >
        <img src={image} alt="iphone" />
        <div className='card-content'>
        {/* jsx kbhi nhi variable dalna hota hai curly braces mai dalte hai */}
        <h1>{title}</h1>
        <h2>{brand} </h2>
        <h2>${price}</h2>
        </div>  
   </div>
    )
}

// const container = [
//     card(1),
//     card(2),
//     card(3),
//     card(4),
//     card(5),
//     card(6),
//     card(7),
//     card(8),
//     card(9),
// ]

const root = createRoot(document.getElementById('root'));
// root.render(card);
// to render multiple elements we have to pass array of elemets like
// root.render([card,card,card])

// root.render(container)

// root.render(<div className='container'>{container}</div>)

// console.log('Hello world');

// React mai html , html file mai likhte hi nhi hai sare script file mai likhkr 
//render krwa lete hai..


fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data) => {
    console.log(data);
   const container2 = data.products.map((product)=>{
    // yha pe ek chooti si dikkat yh hai ki sare parameters ka order same hona chahiye kyuki nhi to khi ka value khi aur assign ho jayega
    // isko solve krne ke liye concept laya gya react components ka
    // return card(product.id,product.title, product.thumbnail, product.brand,product.price)
    // aur normal javascript way hai to create ek object bnakr return krne ka
    
    // ab order se farak nhi padta
    return card({
        image: product.thumbnail,
        price: product.price,
        key: product.id,
        brand: product.brand,
        title: product.tite,
    })

   })
   
  root.render(<div className='container'>{container2}</div>)
})

// root render ek react element leta hai jo ki simply ek object hota hai..
// agr sirf ek empty object pass kre to error dega
// object ke sath khuch properties hona must hai

// jb hum jsx ka use krke react element create krte to bhi yhi niche wala object create hota hai
// type mai hum ek function bhi pass krwa ke render krwa skte hai
function card2(){
    return <h1>Hello</h1>
}

root.render({
//    react mai yh chaar properties hona to must hai
  $$typeof: Symbol.for('react.element'),
//yha pe call nhi krna yha pe sirf reference dena hai..
// yha pe hum function pass kr to skte hai par usme parameters pass krne ho to yha directly
// pass krenge to error dega to unsb parameters ko prop properties mais set krna hoga
  type:card2,
  ref:null,
  props:{
    Children: ' Hello world'
  }

})

//react component ek react ka element hota hai jiska type ek function hota hai
// root.render({
//     //    react mai yh chaar properties hona to must hai
//       $$typeof: Symbol.for('react.element'),
//     //yha pe call nhi krna yha pe sirf reference dena hai..
//     // yha pe hum function pass kr to skte hai par usme parameters pass krne ho to yha directly
//     // pass krenge to error dega to unsb parameters ko prop properties mais set krna hoga
//       type:card,
//       ref:null,
//       props:{
//         title: 'iphone 13',
//         image: 'https://dummyjson.com/products/1/thumbnail.jpg',
//         brand: 'Apple',
//         price: 899
//       }
    
//     })

// shortcut way to create the above things

root.render(
    React.createElement(card, {
        title: 'iphone 13',
        image: 'https://dummyjson.com/products/1/thumbnail.jpg',
        brand: 'Apple',
        price: 899,
    })
)

//another shortcut way to create the same thing as above

// react component hota hai basically ek function hota hai jo ki khuch jsx return krta ho
// component hota hai reusable piece of ui

root.render(
    <card
    title= 'iphone 13'
        image= 'https://dummyjson.com/products/1/thumbnail.jpg'
        brand= 'Apple'
        price= "899"

    />
)

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data) => {
    console.log(data);
   const container2 = data.products.map((product)=>{
    // yha pe ek chooti si dikkat yh hai ki sare parameters ka order same hona chahiye kyuki nhi to khi ka value khi aur assign ho jayega
    // isko solve krne ke liye concept laya gya react components ka
    // return card(product.id,product.title, product.thumbnail, product.brand,product.price)
    // aur normal javascript way hai to create ek object bnakr return krne ka
    
    // ab order se farak nhi padta
    return (
        <card
        title= 'iphone 13'
            image= 'https://dummyjson.com/products/1/thumbnail.jpg'
            brand= 'Apple'
            price= "899"
    
        />
        )
    }

)})