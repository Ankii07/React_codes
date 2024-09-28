import {createRoot} from 'react-dom/client'

// const h1 = <h1>Hello World</h1>

import './style.css'

// const card =

// to render multiple elements dynamically we can use function which will return that element
// and we can pass the differnt parameters as well for dynamicity..
function card(key , title, image, brand,price) {
    console.log(key);
    return(
        <div className='card' key={key} >
        <img src={image} alt="iphone" />
        <div className='card-content'>
        {/* jsx jbhi  variable dalna hota hai curly braces mai dalte hai */}
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
    return card(product.id,product.title, product.thumbnail, product.brand,product.price)
   })
   
  root.render(<div className='container'>{container2}</div>)
})