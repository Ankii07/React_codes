import React, { Component } from 'react'; 
// convention hota hai ki wrapped component hi pass kre..
// yha pe aaya clickCounter Component with all the previous props defined
const withCounter = (WrappedComponent) =>{
    // Since you're using Component inside your Higher-Order Component (HOC), 
    // you need to import it explicitly from React.
    constructor(props){
        super(props)
        this.state = {
          count: 0,
        };
        
      }
    
      increaseCount = () => {
        console.log(this)
        this.setState({ count: this.state.count + 1 })
      };
    return class NewComponent extends Component {
        render(){
            console.log(this.props);
            return <WrappedComponent count = {this.state.count} increaseCount = {this. increaseCount} {...this.props}/>
        }
    }
}

export default withCounter
