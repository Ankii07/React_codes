import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
// yha pe humne yh kiya hai ki ek themecontext ko ek function mai dalkr export kr diya
// ab hum isko khi pr bhi use kr skte hai
// export function useTheme(){
//     const [isDark, setIsDark] = useContext(ThemeContext)

//     return [isDark, setIsDark]
// }

// alternative way to do the same

// export function useTheme(){
//     return useContext(ThemeContext)
// }

// kyuki sirf ek hi line mai return ho ja rha hai to hume to hume ise arrow function ka use krke
// aur bhi short kr skte hai

export const useTheme=()=>useContext(ThemeContext)
