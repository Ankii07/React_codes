import { useEffect, useState } from "react";

// function ko function name mau use ka use krke bana le to yh hook ho jayega
// custom hook ek fancy name hai bas yh reusable logic ko ek jgh rkhta hai
export function useWindowSize(){
    const [windowSize, setWindowSize] = useState({Width: window.innerWidth, Height: window.innerHeight})
    useEffect(()=>{
        window.addEventListener('resize',()=>{
          setWindowSize({Width: window.innerWidth, Height: window.innerHeight});
        })
      },[]) 

      return windowSize
}