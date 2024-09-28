// context create krne ke liye hume react khuch function provide krta hai
// jiska naam hota hai createcontext

//yha pe hum usestate ka use nhi kr skte kyuki useState ka use hum functional component mai ya
// hook mai hi use kr skte hai 
import { createContext, useState } from "react"
// can't be used
// const [a,setA] = useState('klsds')
export const ThemeContext = createContext()
// run krenge app ko to khuch dikhayega nhi kyuki jb tak use nhi krenge console mai khuch nhi aayega
// console.log(ThemeContext);

// children mai wh sare component aa jayenge jo humne themeprovider se wrap kiya ho
// yh ek component ki trah use ho rha hai
export function ThemeProvider({Children}){
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))

    return(
        <ThemeContext.Provider value={[isDark, setIsDark]}>
            {Children}
        </ThemeContext.Provider>
    )
}