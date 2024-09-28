export function render(reactElement, rootElement){
    // console.log(reactElement);
    function createDOMElement(reactElement){

        if(typeof reactElement.type === 'function')
        {
            return createDOMElement(reactElement.type(reactElement.props))
        }
      
        // best way to check it is array or not..Array.isArray(elementtoBeChecked)
        if(Array.isArray(reactElement)){
            // console.log('hii');
            // return ['hi','hello','apple'];

            return reactElement.map((el) => createDOMElement(el))
        }

        if(typeof reactElement === 'string'){
            console.log(document.createTextNode(reactElement));
             return document.createTextNode(reactElement)
        }
    

        const {type, props} = reactElement
        const DOMElement = document.createElement(type)
        console.log(props);
        // yha pe ek dikkat yh hai ki agr bhut se child hai to ek child  phle wale child ko over ride kr degi..
        // object.enteries se key value pair ka array mil jata hai
        
        Object.entries(props).forEach(([key, value]) =>{
            // console.log(key, value);
            DOMElement[key] = value
        })
        props.children.forEach((child)=>{
            // console.log(child);
            // DOMElement.textContent = child;
            // redering multiple textnode
            
            if(Array.isArray(child)){
                DOMElement.append(...child.map((el) => createDOMElement(el)))
            }
  

            else if(typeof child === 'string'){
                const textNode = document.createTextNode(child)
                DOMElement.append(textNode)
            }
            // const textNode = document.createTextNode(child)
            // DOMElement.append(textNode) 
            else{
                // console.log(child);
                // hume yha jo milega wh react element hoga usko domelement  convert krna hoga 
                // uske liye humne ek function bna rkha hai createDOMElement usko use krna hoga..
                // console.l og(createDOMElement(child)); 

                DOMElement.append(createDOMElement(child))
              
            }
        })
        return DOMElement
    }
    // append by default yh krta hai ki jb yh dekhta hai ki array aaya hai append hone to yh krta hai ki 
    // jitne bhi element hote hai ek array mai usko combine kr deta hai comma se aur ek string bnakr append kr deta hai..
    const DOMElement = createDOMElement(reactElement)
    if(Array.isArray(DOMElement)){
        rootElement.append(...DOMElement)
    }else{
    rootElement.append(DOMElement)
    }
    // DOMElement ek array hai to isse alag alga element todke append krwaeynge using spread Operator
}

export default {
    render,
}
