// this is a simple class
// class OldCounter{

import { Component } from "react";

// }

// this is react class
// extends component jo ki react se export kiya hua hai
// hume react ki classs mai apna class ko extend krwana hota hai react ki class se

// yha pe jo prop pass hua hai usko use krna chahe to koi acess ki jurrot hai uske pass already acess hai
// class components mai hume this keyword ka bhut use krna pdta hai jo ki bhut confusing hota hai aur yh one of the main reason tha class component
// se functional component mai shift hone ka..

// state ke liye hume constructor method ka use krna hoga..
// yha simple constructor ka use krenge to error aayegi yh pe hume super constructor ka use krna hoga
//  yha pe koi bhi hook use nhi kr skte hai 

// yha pe 2 method hai cosntructor aur render to interview mai yh bhut phuchte hai ki phle kon call hota hai
// to phle constructor call hota hai phir render

//  jb bhi render hota hai to class ka instance create hota hai aur usi waqt constructor call ho jata hai 
// aur jb bhi humara component render hone jata hai to render method call hota hai

// jb bhi component update hota hai , hr ek update ke sath render method call hota hai aur constructor sirf ek hi baar call hota hai
class OldCounter extends Component {
    // bhut vaari constructor ke andr bhi props ko pass krna hota hai aur super ke bhi

    // agr humse this.props ka use krna hai to hume constructor mai props pass krwana hoga tabhi acess kr skte hai warna undefine aayega..
  constructor(props) {
    super(props);
    // yha pe state property hona must hai yha pe state property ko hi state ki trah treat krega react.
    // jb hum set krte hai to yh partial update hi krta hai matlb count 1 ko set kiya hai to sirf count 1 ki value hi update hogi
    // count2 ki value jo phle thi whi rhegi.
    // yhi functional component mai ek ko set krte to dono hi set ho jati ..iss cheez se bachne ke liye jb ek state ko set kr rhe ho to dusra ko apne state mai set krna hoga sath hi saath..
    this.state = {
      count: 0,
      count2:0,
    };
  }
  render() {
    // console.log(this);
    // direct acess
    // console.log(this.props.name);
    // acessing using destructer
    const { name } = this.props;
    // return <h1>OldCounte r</h1>
    // return <h1>{name}</h1>
    const {count, count2 } = this.state
    //agr hume set ko update krna hai to hume this.setState property ka use krna hoga..
    // this.state.count krke access krna na chahe to aap destructure phle hi krwa le aur phir direct use kre.
    return (
      <>
        <h1>{name}</h1>
        <div className="flex justify-center gap-4 mt-9">
          <div className=" text-2xl flex justify-center">
            <button
            //   onClick={() => this.setState({ count: this.state.count - 1 })}
            onClick={() => this.setState({ count:count - 1 })}
              className="bg-green-500 rounded w-10"
            >
              -
            </button>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center items-center bg-red-300 w-10 h-10 rounded-md">
              {this.state.count}
            </div>
          </div>
          <div className=" text-2xl flex justify-center">
            <button
            //   onClick={() => this.setState({ count: this.state.count + 1 })}
            onClick={() => this.setState({ count: count + 1 })}
              className="bg-blue-500 rounded w-10"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-9">
          <div className=" text-2xl flex justify-center">
            <button
            //   onClick={() => this.setState({ count2: this.state.count2 - 1 })}
              onClick={() => this.setState({ count2: count2 - 1 })}
              className="bg-green-500 rounded w-10"
            >
              -
            </button>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center items-center bg-red-300 w-10 h-10 rounded-md">
              {this.state.count2}
            </div>
          </div>
          <div className=" text-2xl flex justify-center">
            <button
              onClick={() => this.setState({ count2: count2 + 1 })}
              className="bg-blue-500 rounded w-10"
            >
              +
            </button>
          </div>
        </div>
      </>
    );
  }
}

// ab is class ko export kr skte hai simply ek component ki trah aur use kr skte hai..
export default OldCounter;
