import React from "react";
import viteLogo from "/vite.svg";
import { Link, NavLink } from "react-router-dom";



// link tag import krne se hi single page reloading bnega aur anchor tag ko replace krna hoga Link tag se..

// ab hum chahte hai ki jaise ki blue aur underline text-blue-500 style hai home pe waise jaise bhi jaye jis page wh page highlight ho jaye..
// iske liye hume use krna hoga link ke jgh navlink

// navlink se yh hoga ki ek extra active classname aur ek aur tag aa jata hai aria-current tag aa jayega us tag pe jis page pe rhenge ..
// jaise hi dusre page pe jayenge waise hi wh class apne previous page se hat ke aur current page wale tag pe aa jayegi..
// jaise ki agr aap home page ho active className home wale link pe rhegi aur jaise hi agr about page pe gye to active classname home link se
// hat kr about link pe aa jayegi..

// isi active className ka use krke hum dynamic styling apply kr skte hai..

// agr chahte ho ki aap tailwind css use kre dynamically wh bhi kr skte hai

// Navlink mai className mai ek function bhi pass kr skte hai jisme ek parameter pass kr skte hai jo ki object deti hai jo btati hai ki
// isActive true hai ya false aur Status Pending bhi ek  option hota hai..
// yha se jo return krenge whi naam ho jayega className ka...



export default function Header() {
  return (
    <>
      <header className="flex justify-between py-4 px-4 md:px-8 shadow-md pb-10">
        <img className="w-4" src={viteLogo} alt="vitelogo" />
        <ul className="flex gap-4">
          <li>
            <NavLink  className={({isActive})=>{
              // console.log(a);
              // output:-
              // {isActive: false, isPending: false, isTransitioning: false}
              // isPending: false
              // isTransitioning: false
              // isActive: false
              // console.log('Hii');
              // return 'hii'
              if(isActive) return 'underline text-blue-500'
            }
            } to="/">Home</NavLink>
          </li>
          <li>
            <NavLink 
            // className={({isActive})=>{
              // console.log(a).;
              // output:-
              // {isActive: false, isPending: false, isTransitioning: false}
              // isPending: false
              // isTransitioning: false
              // isActive: false
              // console.log('Hii');
              // return 'hii'
              // if(i.sActive) return 'underline text-blue-500'
            // }}
            // yhi upr wali cheez ko ek line mai kr skte hai..
             className={({isActive}) => isActive && 'text-blue-700 underline'}
            to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>{
              // console.log(a);
              // output:-
              // {isActive: false, isPending: false, isTransitioning: false}
              // isPending: false
              // isTransitioning: false
              // isActive: false
              // console.log('Hii');
              // return 'hii'
              if(isActive) return 'underline text-blue-500'
            }
            }
             to="/contact">Contact</NavLink>
          </li>
          <li>
            sign-in
          </li>
        </ul>
      </header>
    </>
  );
}
