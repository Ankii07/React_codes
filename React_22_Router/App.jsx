import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import SelectMenu from './components/SelectMenu'
import CountriesList from './components/CountriesList'
import { Outlet } from 'react-router-dom'
import './App.css'

const App = () => {
  // const [query, setQuery] = useState('')
  return (
    <>
    <Header />
    {/*outlet mai automatically wh sare cheeze aa jayengi jo ki us particular path se related ho  */}
    <Outlet/>
      
      {/* <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu />
        </div>
        {query === 'unmount' ? '' : <CountriesList query={query} />}
      </main> */}
    </>
  )
}

export default App