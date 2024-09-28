import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'

// hook ek simply ek function ki trah kaam krta hai jo kai jgh use hota rhega

const App = () => {
   return (
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
  )
}

export default App
