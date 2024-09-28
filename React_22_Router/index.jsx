import {createRoot} from 'react-dom/client'
import App from './App'
import Contact from './components/Contact'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from './components/Home';
import CountryDetail from './components/CountryDetail';

//   jb hum react router use krte hai to createBrowserRouter krte hai 
//   to usme pass krte hai ek array jo ki contain krta hai  object aur usme properties hoti  hai 
//   path and element

// jb bhi hum routing krte hai to header to humesa rhta hi hai abhi jo route render krwa rhe hai usme to header nhi dikh rha hai
// to ek trika yh hai ki hr component mai header component use kre 
// nhi to route render kr header component ko render krwa le

const router = createBrowserRouter([
    {
        // yha pe kh rhe hai ki home pe yh app dikhao aur uske andr contact mai contact dikhao
        // is path pr konsa element rhega
      path: "/",
    //   element: <div>Hello world!</div>,
      element: <div><App/></div>,
    //   for showing error
      errorElement: <Error/>,
    //   yha children pass krne se hoga yh ki app component mai ek aise cheez use kr skte hai jiska naam hota hai
    // outlet
      children: [
        {
            // is path pr konsa element rhega
          path: "/",
        //   The tag <contact> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
        // at contact
        //   element:<contact/>,
         element:<Home/>,
        
        },
        {
            // is path pr konsa element rhega
          path: "/contact",
        //   The tag <contact> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
        // at contact
        //   element:<contact/>,
         element:<Contact/>,
        
        },
        // 
        {
            // is path pr konsa element rhega
          path: "/Country",
        //   The tag <contact> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
        // at contact
        //   element:<contact/>,
         element:<CountryDetail/>,
        
        },
      ]

    },
   
  ]);

const root = createRoot(document.querySelector('#root'))

root.render(
    <>
    {/* <Header/> */}
    <RouterProvider router={router} />
    </>
)