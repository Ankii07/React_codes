import Header from "./components/Header"
import SelectMenu from "./components/SelectMenu"
import SearchBar from "./components/SearchBar"
import CountriesList from "./components/CountriesList"
import { useState } from "react"
import './App.css'

const App = () => {
  const [query, setQuery] = useState('')

    return(
        <>
           <Header/>
          <main>
          <div className="search-filter-container">
           <SearchBar setQuery={setQuery}/>
           <SelectMenu/>
           </div>
           <CountriesList query={query}/>
          </main>
            
        </>
    )
}

export default App