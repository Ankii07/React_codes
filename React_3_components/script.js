// react ka element create krne ke liye hume use krna hai
//React.createElement(type,attribute,children)
React.createElement('h2',{className: 'subheading' ,id:'subtitle'}, 'Hello React')
//yha pe react ko bta rhe hai ki yh jo selected element hai isi ke andr reactElement h2 ko render krna hai..
const root1 = ReactDOM.createRoot(document.querySelector('#root'))
//to convert react element to html element
//.createElement krte hai to ek object create hota hai..
//render method ek object leta hai usko render kr deta hai
root.render(h2)

// to do the same thing using javascript
const h2 = document.createElement('h2')
h2.innerText = 'Hello JS'
document.querySelector('#root').append(h2)
console.dir(h2)

//creating element within element
const container = React.createElement(
    'div',
    {className: 'container', id: 'container'},
    [
        React.createElement('section',{key: 1},[
            React.createElement(
                'p',
                {key: 2},
                'The library for web and native user interfaces'
            ),
        ]),
    ]
)

const container2 = React.createElement(
    'div',
    {className: 'container', id: 'container'},
    [
        React.createElement('section',{key: 1},[
            React.createElement(
                'p',
                {key: 2},
                'The library for web and native user interfaces'
            ),
             React.createElement(
                'img',
                //siblings ki key same nhi kr skte
                //style set krne ke liye hume ek object pass krna hota hai
                {key: 2, src:'./hi/level', style: {width:'200px', backgroundColor: 'red', borderRadius: '8'}},
                //img tag can't have any children so no need of any childer otherwise it will give error
                // 'The library for web and native user interfaces'
            ),
        ]),
        React.createElement('section',{key:2},[
            React.createElement(
                'form',
                {key: 1},
                'The library for web and native user interfaces'
            ),
             React.createElement(
                'label',
                //siblings ki key same nhi kr skte
                //style set krne ke liye hume ek object pass krna hota hai
                {key: 1, htmlFor:'username'} ,username),
                //img tag can't have any children so no need of any childer otherwise it will give error
                // 'The library for web and native user interfaces'
    ]),
])
        
    


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(container)