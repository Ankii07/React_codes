import Header from './components/Header'
import { Outlet } from 'react-router-dom'

import './App.css'
import { useState } from 'react'
import {ThemeProvider } from './contexts/ThemeContext'

// context hum us case mai use krte hai jb hume kisi bhi prop ko hume multiple level of components ke through 
// pass krna hota hai isko bolte hai prop drilling 

// context yh fayda hai ki maan lo khuch prop pass krna hai child componet mai jo ki bhut deep mai hai
// waise case agr context use nhi krte to hume prop ko component by component pass krna hota us child component mai use krne ke liye
// yha pe context agr kisi bhi parent bhi component mai define kr denge uske kisi bhi children mai directly use kr skte hai import ka use krke
// pass krne ki jurrort nhi

// context bnane ke liye bhut common hai context folder bnana
const App = () => {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
  // ThemeContext.provider ek component hai jiske andr hum apne sare component ko wrap krte hai 
  // aur jb bhi hum ThemeContext.provider create krte hai to ek value pass krte hai
  // ThemeContext.Provider pura ke pure app pe lgate hai
  // ab is value mai khuch bhi pass kr skte hai state bhi jo ki ThemeContext.js mai nhi kr paa rhe the
  return (
    // <ThemeContext.Provider value={[isDark, setIsDark]}>
    //   <Header  />
    //   <Outlet  />
    // </ThemeContext.Provider>
     
    <ThemeProvider>
      <Header  />
      <Outlet  />
    </ThemeProvider>
  )
}

export default App
