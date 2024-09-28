

    // kai children pass huae hai isiliye rest operator ka use kr rha hai ko ki array of children pass kr rha hai
    
    function createElement(type, props, ...children){
        const reactElement = {
            // type key value pair automatic yha save ho jayega..
            type,
            props: {
                ...props,
             
            }
        }
        if(children.length)
        {
             reactElement.props.children = children;
        }

        return reactElement
    }

export default {
    createElement,
}