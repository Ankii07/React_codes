import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

const App = () => {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('IsDarkMode')))
  return (
    <>
    {/* humne header as prop pass kr diya pr outlet mai kaise krenge usme to mulitiple components render ho rha hai*/}
    {/* uske liye react router dom ek special porperty provide krta hai jiska naam hai context */}
      <Header theme={[isDark, setIsDark]}/>
      {/*jb hum context pass hai to hum kisi bhi component mai jo ki outlet ke dwara render ho rha hai usme
      wh sari values ko use kr skte hai using useoutletcontext   */}
      {/* hum context ke andr koi bhi value daal skte hai aur kisi bhi component ke andr use kr skte hai  */}
      {/* context use krne ka yh fayda hota hai ki hume props pas nhi krte */}
      <Outlet context={[isDark, setIsDark]} />
    </>
  )
}

export default App
