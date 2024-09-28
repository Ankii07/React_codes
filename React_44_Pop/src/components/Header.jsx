import React, { useState } from 'react'
import viteLogo from '/vite.svg'
import { NavLink } from 'react-router-dom'
import Modal from './Modal'

export default function Header() {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <header className="flex justify-between px-4 py-4 shadow-md md:px-8">
      <img src={viteLogo} alt="viteLogo" />
      <ul className="flex gap-4">
        <li>
        {/* yha pe ek dikkat yh aa rhi thi ki jb true to simply required classes return ho jaa rhi hai
        pr jb false hai to false bhi return ho jaa rhi hai aur classname false se set ho ja rha hai..
        is cheez se deal krne ke liye ternary operator ka use krke false hone pe ek empty string return krwa denge.. */}

        {/*pop up jo bnaya hai wh pura ka pura overlay yaani ek screen ke upr dusra screen aur jisk background transparent hai
        to kai baar z-index ko manage krna dikkat wali baat ho jati hai is cheez ko handle krne ke liye hum react portal mainly.. */}

        {/* createPortal krke hume react pardan krta hai jisme hume phle to apna pura ka pura element dena hota hai jo ki render krwana hota hai 
        aur dusra wh html element jaha render krwana hai jo ki root nhi koi aur element hota hai.. */}

        {/*ki agr hum kisi bhi application ki kisi bhi html part mai kisi element ko render krwana hota hai to portal ka use krte hai..   */}

          <NavLink
            className={({ isActive }) => isActive ? 'text-blue-700 underline':''}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive ? 'text-blue-700 underline':''}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive ? 'text-blue-700 underline':''}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <button onClick={()=> setIsOpen(true)}>Sign In</button>
        <Modal header={<div className="text-xl font-bold">Sign In</div>} footer={<div className="flex justify-end gap-4">
          <button onClick={()=> setIsOpen(false)} className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400/80 active:bg-gray-400/60">
            Cancel
          </button>
          <button onClick={()=> setIsOpen(false)} className="rounded-md bg-blue-300 px-6 py-2 font-semibold hover:bg-blue-400/80 active:bg-blue-400/60">
            Sign In
          </button>
        </div>}
         isOpen={isOpen} setIsOpen={setIsOpen}>
          <input
            placeholder="Username"
            className="grow rounded border border-gray-600 px-2 py-1"
            type="text"
          />
          <input
            placeholder="Password"
            className="grow rounded border border-gray-600 px-2 py-1"
            type="password"
          /> 
         </Modal>
        </li>
      </ul>
    </header>
  )
}
